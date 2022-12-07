import mysql from "mysql";
import config from "./config";

///取得商品頁面的資料
export const runSQL = (query) =>
  new Promise((resolve) => {
    connection.query(query, function (error, rows) {
      if (error) {
        console.log(error);
      }
      resolve(rows);
    });
  });

const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER || config.user,
  password: process.env.DB_PASS || config.password, //預設phpmyadmin密碼是空值
  database: process.env.DB_DB || config.database,
  port: process.env.DB_PORT || config.port,
  multipleStatements: true
});

// for Mac
// const connection = mysql.createConnection({
//   host:'localhost',
//   user: "root",
//   password: "root", //預設phpmyadmin密碼是空值
//   database: "database",
//   port:8889,
//   multipleStatements: true,
// });



//連線
connection.connect(function (error) {
  if (error) {
    console.log("連線失敗");
    return;
  }
  console.log("連線成功");
});