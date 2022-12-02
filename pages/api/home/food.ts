import type { NextApiRequest, NextApiResponse } from 'next';
import { runSQL } from "../../../lib/mysql";


export default async function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id, name },
    method,
  } = req

  switch (method) {
    case 'GET':
      try {
        const sq1 = 'SELECT * FROM item LEFT JOIN itemimg ON itemimg.itemId=item.itemId where itemLead=1 and itemFilter3 = "美食";';
        const sq2 = 'SELECT itemFilter2 FROM item LEFT JOIN itemimg ON itemimg.itemId=item.itemId where itemLead=1;';
        const data = await runSQL(sq1);
        const data1 = await runSQL(sq2);
        res.status(200).json({ data, data1 })
        // console.log(sq1)
      }
      catch (error) {
        res.status(500);
      }
      // Get data from your database
      break;
      // case "POST":
      // try {
        
      //   // 新增商品內容
      //   const sq1 = `INSERT INTO favorite (${keys},itemId,firmId) VALUES (${values},"${id}","${id}")`;
      //   console.log(sq1);
      //   runSQL(sq1);
      //   res.status(200).json({ message: "ok" });
      // } catch (error) {
      //   res.status(500);
      // }
      // break;
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}