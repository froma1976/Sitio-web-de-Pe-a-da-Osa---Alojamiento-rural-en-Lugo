# Instrucciones para actualizar el System Prompt de Osa en n8n

## Pasos:

1. Abre n8n en https://automation.skdvigo.site
2. Ve al workflow **"AI Concierge - Pena da Osa"**
3. Haz doble clic en el nodo **"OpenAI Chat"**
4. En el campo **System Message**, REEMPLAZA todo el contenido actual por el contenido del archivo:
   `tools/n8n/system-prompt-osa-v2.txt`
5. Guarda el nodo y **Activa** el workflow

## Qué cambia:
- **ANTES**: Osa solo sabía sobre disponibilidad (iCal) + 4 líneas de info básica
- **AHORA**: Osa sabe sobre:
  - Todas las ferias del vino 2026 (con fechas confirmadas)
  - Entroido completo (figuras, horarios, fechas)
  - 4 embarcaderos de catamarán (precios, horarios, teléfonos)
  - Miradores con descripción
  - Monasterios y patrimonio románico
  - Gastronomía detallada
  - Camino de Invierno (10 etapas con km)
  - Restaurantes, bodegas, rutas de senderismo
  - Eventos y festivales de todo el año

## También se cambió en el frontend:
- Se eliminó el `knowledgeContext` hardcodeado del `StayPlanner.jsx`
- Ahora el frontend envía mensajes limpios (sin contexto duplicado)
- Esto ahorra tokens en cada petición
