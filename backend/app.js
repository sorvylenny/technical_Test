import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import taskRoutes from './routes/task.js';
import skillRoutes from './routes/skills.js';
import personRoutes from './routes/person.js';

dotenv.config ();

const app = express ();

app.use (cors ());
app.use (express.json ());
app.use (express.urlencoded ({extended: true}));

const mongoUrl = process.env.MONGO || 'mongodb://db:27017/ToDo';
mongoose.set ('strictQuery', false);

mongoose
  .connect (mongoUrl)
  .then (() => console.log ('Conectado a MongoDB'))
  .catch (error => console.error ('Error al conectar a MongoDB:', error));

app.use ('/task', taskRoutes);
app.use ('/skill', skillRoutes);
app.use ('/person', personRoutes);

const PORT = process.env.PORT || 3000;
app.listen (PORT, () => {
  console.log (`Servidor escuchando en el puerto ${PORT}`);
});
