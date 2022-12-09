import type { NextApiRequest, NextApiResponse } from 'next';
import { runSQL } from "../../../lib/mysql";


export default async function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id, name },
    method,
  } = req

  switch (method) {
    case 'GET':
        try{
            const sq1 = `SELECT item.itemFilter2, item.itemName,item.itemTotalStar,itemimg.itemImgUrl FROM item LEFT JOIN itemimg ON itemimg.itemId=item.itemId  WHERE itemimg.imgLead=1 ORDER by itemFilter2;`;
            const data = await runSQL(sq1);
            res.status(200).json({ data })
            // console.log(sq1)
        }
        catch(error){
            res.status(500);
        }
      // Get data from your database
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}