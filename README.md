# SENASoft 2025 - Reto: Three Amigos

Este repositorio contiene la solución para el reto de métricas detalladas para Leonardo, parte del programa SENASoft 2025.

## 🚀 Objetivo

Extender el backend de Leonardo para soportar métricas detalladas basadas en los datos del formulario de inscripción, permitiendo responder preguntas como:
- Cantidad de aprendices por centro de formación
- Instructores recomendados por centro
- Aprendices con cuenta de GitHub
- Nivel de inglés B1/B2 por centro

## 📦 Estructura del proyecto
Senasoft-Leonardo-Metrics/
├── database/
│ └── collection/
│ └── enrollments.sample.json
├── backend/
│ └── core/
│ └── nodejs/
│ ├── models/
│ │ └── Enrollment.js
│ └── routes/
│ └── metrics.js
└── gpt/
└── leonardo/
├── openai.action.schema.json
└── instructions_leonardo.md

## 🧪 Cómo probar

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Monica-Ismelia/Senasoft-Leonardo-Metrics.git
   
2.  Ir a la carpeta del backend
     cd Senasoft-Leonardo-Metrics/backend/core/nodejs
3.  Instalar dependencias:
  npm install express mongoose
4.Iniciar MongoDB (servicio en ejecución)
5.Cargar datos con mongosh o Compass
6.Ejecutar el servidor:
  node server.js
7.Probar endpoints:
 url http://localhost:3000/metrics/detailed/by-center
 Endpoints disponibles
* GET /metrics/detailed/by-center → Cantidad por centro
* GET /metrics/detailed/with-github → Con GitHub
* GET /metrics/detailed/by-department → Por departamento
* GET /metrics/detailed/english-b1-b2 → Nivel de inglés B1/B2
  
👥 Equipo: Three Amigos
Monica Ismelia Cañas Reyes
Carlos Alberto Restrepo
Cristian Estiven Pinzon Rojas

🏁 Notas finales
Este proyecto fue desarrollado para el reto "Three Amigos" de SENASoft 2025.
La solución permite a Leonardo responder fielmente a preguntas complejas sobre inscripciones, sin alucinaciones.

💡 Si quieres colaborar, comenta en este repositorio.
