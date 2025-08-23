const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/senasoft', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Conectado a MongoDB'))
.catch(err => console.log('❌ Error al conectar a MongoDB:', err));

const metricsRoutes = require('./routes/metrics');
app.use('/metrics', metricsRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
feat(server): añadido servidor principal
