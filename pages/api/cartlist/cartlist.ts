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
      // Get data from your database
      case "POST":
        try {
          const keys = Object.keys(req.body);
          const values = Object.values(req.body).map((i, index) => {
            return typeof i === "string" ? `"${i}"`.trim() : i;
          });
          let query = "";
          for (let j = 0; j < keys.length; j++) {
            query =
              query + keys[j] + "=" + values[j] + (j === keys.length - 1 ? "" : ",");
          }
          
    
  
          // 新增商品內容
          // const sq1 = `INSERT INTO item (${keys},userId,userPassword) VALUES (${values},"${id}","${id}")`;
          const sq1 = `INSERT INTO ordertable (userId, itemId, orderReceipt, orderDate, orderQua) VALUES ('u123456789', '1', 'order000012', '2022-12-12', '3');`;
        
          // const sq1 = `INSERT INTO favorite  VALUES (5,'u123456789',30)`;
          runSQL(sq1);
          res.status(200).json({ message: "ok" });
        } catch (error) {
          res.status(500);
        }
        break;
  
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