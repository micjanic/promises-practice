const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "room",
});

connection.connect(function (err) {
  if (err) {
    console.log("there was an error");
  }
  console.log("connection successful");
  connection.end();
});

function connectToDatabase(config) {
  return new Promise(function (resolve, reject) {
    const connection = mysql.createConnection(config);

    connection.connect(function (err) {
      if (err) {
        reject(err);
        return;
      }
      resolve(connection);
    });
  });
}

connectToDatabase({
  user: "root",
  password: "",
  database: "room",
})
  .then(function (conn) {
    console.log("connection successful");
    conn.end();
  })
  .catch(function (err) {
    console.log("there was an error");
    console.log(err.message);
  });
