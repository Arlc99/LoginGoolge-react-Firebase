// 1. Importar el módulo mysql
const mysql = require('mysql2');

// 2. Configurar la conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',      // Dirección del servidor de la base de datos
  user: 'root',           // Usuario de la base de datos (cambia esto si es necesario)
  password: 'Camilo_9906@',           // Contraseña de la base de datos (cambia esto si es necesario)
  database: 'Login', // Nombre de la base de datos
});

// 3. Conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
  } else {
    console.log('Conectado a la base de datos MySQL');
  }
});

// 4. Exportar la conexión
module.exports = db;