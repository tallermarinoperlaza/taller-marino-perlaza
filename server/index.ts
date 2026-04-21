import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // API endpoint para recibir solicitudes de contacto
  app.post("/api/contact", async (req, res) => {
    try {
      const { nombre, email, telefono, vehiculo, servicio, timestamp } = req.body;

      // Validar datos
      if (!nombre || !email || !telefono || !vehiculo || !servicio) {
        return res.status(400).json({ error: "Faltan datos requeridos" });
      }

      // Preparar datos para enviar
      const contactData = {
        nombre,
        email,
        telefono,
        vehiculo,
        servicio,
        timestamp,
        origen: "Sitio Web Taller Marino Perlaza"
      };

      // Enviar a Manus Notifications API
      const notificationResponse = await fetch(
        process.env.VITE_ANALYTICS_ENDPOINT?.replace('/umami', '') + '/api/notifications' || 
        'http://localhost:3000/api/notifications',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.BUILT_IN_FORGE_API_KEY || ''}`
          },
          body: JSON.stringify({
            title: `Nueva Solicitud de Servicio - ${nombre}`,
            message: `Cliente: ${nombre}\nTeléfono: ${telefono}\nVehículo: ${vehiculo}\nServicio: ${servicio}`,
            email: 'tallermarinoperlaza@gmail.com',
            data: contactData
          })
        }
      ).catch(() => null);

      // También enviar correo directo si está disponible
      if (process.env.BUILT_IN_FORGE_API_URL) {
        try {
          await fetch(process.env.BUILT_IN_FORGE_API_URL + '/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${process.env.BUILT_IN_FORGE_API_KEY || ''}`
            },
            body: JSON.stringify({
              to: 'tallermarinoperlaza@gmail.com',
              subject: `Nueva Solicitud de Servicio - ${nombre}`,
              html: `
                <h2>Nueva Solicitud de Servicio</h2>
                <p><strong>Nombre:</strong> ${nombre}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Teléfono:</strong> ${telefono}</p>
                <p><strong>Vehículo:</strong> ${vehiculo}</p>
                <p><strong>Servicio Requerido:</strong></p>
                <p>${servicio.replace(/\n/g, '<br>')}</p>
                <p><strong>Fecha:</strong> ${new Date(timestamp).toLocaleString('es-CO')}</p>
              `
            })
          }).catch(() => null);
        } catch (error) {
          console.error('Error enviando correo:', error);
        }
      }

      // Responder al cliente
      res.status(200).json({ 
        success: true, 
        message: "Solicitud recibida correctamente. Nos contactaremos pronto.",
        id: Date.now()
      });

    } catch (error) {
      console.error('Error procesando solicitud:', error);
      res.status(500).json({ error: "Error al procesar la solicitud" });
    }
  });

  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
