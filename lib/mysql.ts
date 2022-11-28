import mysql from "mysql";

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
  host: "localhost",
  user:"root",
  password: "", //預設phpmyadmin密碼是空值
  database: "sundaygodata",
  multipleStatements: true,
});
//連線
connection.connect(function (error) {
  if (error) {
    console.log("連線失敗");
    return;
  }
  console.log("連線成功");
});