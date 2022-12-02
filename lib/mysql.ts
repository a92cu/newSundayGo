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
<<<<<<< HEAD
  host:'localhost',
=======
  host:'127.0.0.1',
>>>>>>> de26114f035741fe673c67a7596b8bcb96b005b1
  user: "root",
  password: "", //預設phpmyadmin密碼是空值
  database: "sundaygodata",
  multipleStatements: true,
<<<<<<< HEAD
});
=======
  port:3306,
});


// for Mac
// const connection = mysql.createConnection({
//   host:'localhost',
//   user: "root",
//   password: "", //預設phpmyadmin密碼是空值
//   database: "sundaygodata",
//   port:3306,
//   multipleStatements: true,
// });


// for Mac
// const connection = mysql.createConnection({
//   host:'localhost',
//   user: "root",
//   password: "root", //預設phpmyadmin密碼是空值
//   database: "database",
//   port:8889,
//   multipleStatements: true,
// });
>>>>>>> de26114f035741fe673c67a7596b8bcb96b005b1


// for Mac
// const connection = mysql.createConnection({

//   host:'localhost',
//   user: "root",
//   password: "", //預設phpmyadmin密碼是空值
//   database: "sundaygodata",
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