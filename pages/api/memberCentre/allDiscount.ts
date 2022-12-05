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
  console.log(req.body.date)
  switch (method) {
    case "GET":
      try {
        // 刪除商品內容
        const sq1 = `SELECT * FROM discountcoupon WHERE userId="u123456789"`;
        const data= await runSQL(sq1);
        res.status(200).json({data});
      } catch (error) {
        res.status(500);
      }
    break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
