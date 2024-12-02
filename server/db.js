import { createPool } from 'mysql2/promise';

export const pool = createPool({
  host: 'mysql', // Cambiado de 'localhost' a 'mysql', que es el nombre del servicio en Docker Compose
  port: 3306,
  user: 'root',
  password: 'prueba123',
  database: 'tasksdb' // Asegúrate de que el nombre de la base de datos esté correctamente escrito (tasksdb en tu caso)
});

