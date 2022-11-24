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
        const sq1 = `SELECT * FROM item WHERE itemId = ${id}`;
        const data = await runSQL(sq1);
        res.status(200).json({ data });
      } catch (error) {
        res.status(500);
      }
      break;
    case "POST":
      try {
        const keys = Object.keys(req.body).join(",");
        const values = Object.values(req.body)
          .map((i) => (typeof i === "string" ? `"${i}"` : i))
          .join(",");
        // 新增商品內容
        const sq1 = `INSERT INTO item (${keys}) VALUES (${values})`;
        console.log(sq1);
        runSQL(sq1);
        res.status(200).json({ message: "ok" });
      } catch (error) {
        res.status(500);
      }
      break;
    case "PUT":
      try {
        // 修改商品內容
        const { itemId, itemAddr, itemPrice, itemTotalStar } = req.body;
        const sq1 = `UPDATE item SET itemAddr="${itemAddr}",itemPrice=${itemPrice},itemTotalStar=${itemTotalStar} where itemId = ${id}`;
        console.log(sq1);
        runSQL(sq1);
        res.status(200).json({ message: "ok" });
      } catch (error) {
        res.status(500);
      }
      break;
    case "DELETE":
      try {
        // 刪除商品內容
        const sq1 = `DELETE FROM item WHERE itemId = ${id}`;
        console.log(sq1);
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
