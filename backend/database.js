const mysql = require("mysql");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "sumon123",
    database: "docdb",
})
const executeQuery = (query, values) => {
  return new Promise((resolve, reject) => {
    try {
      pool.query(query, values, (error, doctor) => {
        console.log(query);
        if (error) throw error;
        resolve(doctor);
      });
    } catch (err) {
      reject(err);
    }
  });
};




module.exports = { executeQuery };