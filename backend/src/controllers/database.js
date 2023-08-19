const Pool = require('pg').Pool
const connectionData = {
    user: 'postgres',
    host: 'localhost',
    database: 'Netflix Userbase',
    password: 'password',
    port: 5432,
  }

const pool = new Pool(connectionData)

const date = `
SELECT EXTRACT(YEAR FROM "Join Date") AS "Year", COUNT(*) AS "Users Count"
FROM "User"
GROUP BY EXTRACT(YEAR FROM "Join Date")
ORDER BY "Year";
`;

const getDate = (request, response) => {
    pool.query(date, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

module.export = {getDate}