// import mysql from "mysql";

// export const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "faithbook",
// });

// db.connect((err) => {
//   if (err) {
//     console.error("Database connection failed: ", err);
//   } else {
//     console.log("Connected to MySQL database");
//   }
// });

import mysql from "mysql";

export const db = mysql.createConnection({
  host: "b6nmsad8p5ce813ahsgg-mysql.services.clever-cloud.com",
  user: "ugncgv8zjmup0doe",
  password: "FIPjWtRp6aPw03PO8ZQ6",
  database: "b6nmsad8p5ce813ahsgg",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: ", err);
  } else {
    console.log("Connected to MySQL database");
  }
});
