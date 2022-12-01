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
  switch (method) {
    case "DELETE":
      try {
        // 刪除商品內容
        const sq1 = `DELETE FROM favorite WHERE favId = "${req.body}"`;
        // const sq1 = `DELETE FROM favorite WHERE favId = ?;`;
        runSQL(sq1);
        res.status(200).json({ message: "ok" });
        console.log(req)
      } catch (error) {
        res.status(500);
      }
      break;    
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
