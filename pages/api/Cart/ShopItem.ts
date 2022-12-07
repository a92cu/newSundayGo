import type { NextApiRequest, NextApiResponse } from "next";
import { runSQL } from "../../../lib/mysql";
export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    method,
  } = req;
  // console.log(req.query,req.method);
  switch (method) {
    case "GET":
      try {
        // 取得商品內容
        const sq1 = 'SELECT * FROM `itemimg` Left JOIN `item` ON itemimg.itemId=item.itemId WHERE imgLead=1 ;';
        const data = await runSQL(sq1);
        // console.log(data);
        res.status(200).json({ data });
      } catch (error) {
        res.status(500);
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
