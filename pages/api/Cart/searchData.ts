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
  console.log(req.body.searchResult)
  switch (method) {
    case "POST":
      try {
        // 取得商品內容
        const sq1 = `SELECT * FROM item LEFT JOIN itemimg ON itemimg.itemId=item.itemId where imgLead=1 and (item.itemTitle LIKE "%${req.body.searchResult}%" OR item.itemFilter1 LIKE "%${req.body.searchResult}%" OR item.itemFilter2 LIKE "%${req.body.searchResult}%");`;
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