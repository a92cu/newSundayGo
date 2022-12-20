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
      case 'POST':
        try{
            console.log(req.body.data)
            const sq1 = `SELECT * FROM item LEFT JOIN itemimg ON itemimg.itemId=item.itemId where imgLead=1 and item.itemFilter3="${req.body.data}";`;
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
    default:
      res.setHeader('Allow', ['GET', 'PUT',"POST"])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}