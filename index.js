const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',     
  password: '',        
  database: 'servicio_web'
});

db.connect(err => {
  if (err) {
    console.log('Error de conexión:', err);
  } else {
    console.log('Conectado a la base de datos MySQL');
  }
});

// Ruta para registrar usuarios
app.post('/registro', (req, res) => {
  const { nombre, usuario, contrasena } = req.body;

  // Encriptamos la contraseña antes de guardarla
  const hash = bcrypt.hashSync(contrasena, 10);

  db.query(
    'INSERT INTO usuarios (nombre, usuario, contrasena) VALUES (?, ?, ?)',
    [nombre, usuario, hash],
    (err, result) => {
      if (err) {
        res.status(500).json({ mensaje: 'Error al registrar usuario' });
      } else {
        res.json({ mensaje: 'Usuario registrado correctamente' });
      }
    }
  );
});

// Ruta para iniciar sesión
app.post('/login', (req, res) => {
  const { usuario, contrasena } = req.body;

  db.query('SELECT * FROM usuarios WHERE usuario = ?', [usuario], (err, results) => {
    if (err) return res.status(500).json({ mensaje: 'Error en el servidor' });
    if (results.length === 0) return res.status(401).json({ mensaje: 'Usuario no encontrado' });

    const user = results[0];

    // Comparamos contraseñas
    if (bcrypt.compareSync(contrasena, user.contrasena)) {
      res.json({ mensaje: 'Autenticación satisfactoria' });
    } else {
      res.status(401).json({ mensaje: 'Contraseña incorrecta' });
    }
  });
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor ejecutándose en http://localhost:3000');
});