import mysql from "mysql";

///取得商品頁面的資料
export const getItem = (query) =>
  new Promise((resolve) => {
    connection.query(query, function (error, rows) {
      if (error) {
        console.log(error);
      }
      resolve(rows);
    });
  });

const connection = mysql.createConnection({
  host: "127.0.0.1",
  password: "", //預設phpmyadmin密碼是空值
  database: "test", //指定剛剛新增的Mask資料庫
  multipleStatements: true, //新增此項，同時執行兩個語句
});
//連線
connection.connect(function (error) {
  if (error) {
    console.log("連線失敗");
    return;
  }
  console.log("連線成功");
});