const express = require('express');
const cors = require('cors');
const db = require('./DB'); // Importar la conexión a la base de datos
const { OAuth2Client } = require('google-auth-library');


const app = express();
const port = 5000;
app.use(express.json());

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);// para hacer login con google

app.use(cors({
  origin: ['http://localhost:5173', 'https://stellar-hamster-62c2ef.netlify.app'],
  credentials: true,
}));

//funcion para crea usuario con login google
app.post('/auth/google', async (req, res) => {
  const { token } = req.body;
  console.log('Token recibido:', token);

  try {
    // Verificar el token de Google
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { sub: googleId, email, name, picture } = payload;

    // Obtener el ID del rol "empleado"
    const getRolQuery = 'SELECT id FROM rol WHERE nombre = ?';
    db.query(getRolQuery, ['empleado'], (err, rolResults) => {
      if (err) {
        console.error('Error al obtener el rol:', err);
        return res.status(500).json({ success: false, message: 'Error en el servidor' });
      }

      if (rolResults.length === 0) {
        return res.status(500).json({ success: false, message: 'Rol "empleado" no encontrado' });
      }

      const rolId = rolResults[0].id;

      // Verificar si el usuario ya existe en la base de datos
      const getUserQuery = 'SELECT * FROM usuario WHERE googleId = ? OR email = ?';
      db.query(getUserQuery, [googleId, email], (err, userResults) => {
        if (err) {
          console.error('Error en la consulta:', err);
          return res.status(500).json({ success: false, message: 'Error en el servidor' });
        }

        if (userResults.length > 0) {
          // Usuario ya existe
          const getUserWithRolQuery = `
            SELECT u.*, r.nombre AS rol_nombre
            FROM usuario u
            JOIN rol r ON u.rol_id = r.id
            WHERE u.id = ?
          `;
          db.query(getUserWithRolQuery, [userResults[0].id], (err, results) => {
            if (err) {
              console.error('Error al obtener el rol:', err);
              return res.status(500).json({ success: false, message: 'Error en el servidor' });
              console.log("es aqui"); 
            }
            const userWithRol = results[0];
            return res.json({ success: true, message: 'Login exitoso', user: userWithRol });
          });
        } else {
          // Crear un nuevo usuario con el rol de "empleado"
          const newUser = {
            googleId,
            nombre: name,
            email,
            foto: picture,
            rol_id: rolId, // Asignar el ID del rol "empleado"
          };

          const insertQuery = 'INSERT INTO usuario SET ?';
          db.query(insertQuery, newUser, (err, results) => {
            if (err) {
              console.error('Error al guardar el usuario:', err);
              return res.status(500).json({ success: false, message: 'Error en el servidor' });
            }

            // Obtener el usuario recién creado con el nombre del rol
            const getUserWithRolQuery = `
              SELECT u.*, r.nombre AS rol_nombre
              FROM usuario u
              JOIN rol r ON u.rol_id = r.id
              WHERE u.id = ?
            `;
            db.query(getUserWithRolQuery, [results.insertId], (err, results) => {
              if (err) {
                console.error('Error al obtener el rol:', err);
                return res.status(500).json({ success: false, message: 'Error en el servidor' });
              }
              const userWithRol = results[0];
              return res.json({ success: true, message: 'Usuario registrado exitosamente', user: userWithRol });
            });
          });
        }
      });
    });
  } catch (err) {
    console.error('Error al verificar el token:', err);
    res.status(400).json({ success: false, message: 'Token inválido' });
  }
});



// Middleware
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡El servidor está funcionando!');
});

// Ruta de login
app.post('/login', (req, res) => {
  const { email, contraseña } = req.body;
  console.log('Datos recibidos:', { email, contraseña }); 
  // Consulta a la base de datos
  const query = 'SELECT * FROM usuario WHERE email = ? AND contraseña = ?';
  db.query(query, [email, contraseña], (err, results) => {
    if (err) {
      console.error('Error en la consulta:', err);
      res.status(500).json({ success: false, message: 'Error en el servidor' });
    } else if (results.length > 0) {
      res.json({ success: true, message: 'Login exitoso' });
    } else {
      res.json({ success: false, message: 'Credenciales incorrectas' });
    }
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});