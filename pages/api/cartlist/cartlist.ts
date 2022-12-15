import type { NextApiRequest, NextApiResponse } from 'next';
import { runSQL } from "../../../lib/mysql";


export default async function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id, name ,userId},
    method,
  } = req
  switch (method) {
    case 'GET':
        try{
            const sq1 = `SELECT * FROM item LEFT JOIN itemimg ON itemimg.itemId=item.itemId where imgLead=1;`;
            // const sq1 = `SELECT * FROM item`;
            // const sq2 = 'SELECT itemFilter2 FROM item LEFT JOIN itemimg ON itemimg.itemId=item.itemId where imgLead=1;';
            const data = await runSQL(sq1);
            // const data1 = await runSQL(sq2);
            res.status(200).json({ data })
            // console.log(sq1)
        }
        catch(error){
            res.status(500);
        }
      break;
      // Get data from your database
      case "PUT":
        try {
          let data;
          let data2;
          // 更改PUT邏輯 以陣列執行
          req.body.allData.forEach((element) => {
            let sq1=`INSERT INTO ordertable (userId, itemId, orderReceipt, orderDate, orderQua, orderRebate) VALUES ("${element.userId}", ${element.itemId}, '${element.orderReceipt}', '${element.date}', '${element.count}',${element.orderRebate})`;
            let sq2=`UPDATE item SET item.itemSales=item.itemSales+${element.count},item.itemInvent=item.itemInvent-${element.count} WHERE item.itemId=${element.itemId}`
            data=runSQL(sq1);
            data2=runSQL(sq2);
          });
          // // 新增商品內容
          // // const sq1 = `INSERT INTO item (${keys},userId,userPassword) VALUES (${values},"${id}","${id}")`;
          // const sq1 = `INSERT INTO ordertable (userId, itemId, orderReceipt, orderDate, orderQua) VALUES ('u123456789', '1', 'order000012', '2022-12-12', '3');`;
        
          // // const sq1 = `INSERT INTO favorite  VALUES (5,'u123456789',30)`;
          // runSQL(sq1);
          // res.status(200).json({ message: "ok" });

          // 創造一個東西回傳
          res.status(200).json({ data,data2 });
        } catch (error) {
          res.status(500);
        }
        break;
      // case "POST":
      //   try {
      //       const keys = Object.keys(req.body).join(",");
      //       const values = Object.values(req.body)
      //           .map((i) => (typeof i === "string" ? `"${i}"` : i))
      //           .join(",");
                
      //       // 加入最愛
      //       const sq1 = `INSERT INTO favorite  VALUES (${values},'${userId}',${id})`;

      //       console.log(sq1);
      //       runSQL(sq1);
      //       res.status(200).json({ message: "ok" });
      //   } catch (error) {
      //       res.status(500);
      //   }
      //   break;
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}