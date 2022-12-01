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
    case "GET":
      try {
        // 取得商品內容
        const sq1 = `SELECT * FROM ordertable WHERE orderNumber = "${id}"`;
        const data = await runSQL(sq1);
        res.status(200).json({ data });
      } catch (error) {
        res.status(500);
      }
      break;
    case "PUT":
      try {
        // 修改評價內容
        const keys = Object.keys(req.body);
        const values = Object.values(req.body).map((i, index) => {
          return typeof i === "string" ? `"${i}"`.trim() : i;
        });
        let query = "";
        for (let j = 0; j < keys.length; j++) {
          query =
            query + keys[j] + "=" + values[j] + (j === keys.length - 1 ? "" : ",");
        }
        const sq1 = `UPDATE orderTable SET ${query} where orderNumber = "${id}"`;
        runSQL(sq1);
        res.status(200).json({ message: "ok" });
      } catch (error) {
        res.status(500);
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
