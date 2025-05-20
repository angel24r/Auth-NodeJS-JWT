require('dotenv').config();
const express = require('express');
const db = require('./models');
const authRoutes = require('./routes/auth.routes');

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);

db.sequelize.sync().then(() => {
  console.log('Conectado a MySQL y tablas sincronizadas');
  app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
  });
});
