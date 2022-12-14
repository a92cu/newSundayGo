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
        const sql = `SELECT * FROM itemimg WHERE itemId = "${id}"`;
        const imgListRaw = (await runSQL(sql)) as any;
        const imgList = [];
        imgListRaw.forEach((item: any) => {
          item.itemImgUrl = new TextDecoder("utf-8").decode(item.itemImgUrl);
          imgList.push({ ...item });
        });
        res.status(200).json({ data: imgList });
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
        const sql = `INSERT INTO itemimg (${keys},imgId) VALUES (${values},"${id}")`;
        runSQL(sql);
        res.status(200).json({ message: "ok" });
      } catch (error) {
        res.status(500);
      }
      break;
    case "PUT":
      try {
        // 修改商品內容
        const keys = Object.keys(req.body);
        const values = Object.values(req.body).map((i, index) => {
          return typeof i === "string" ? `"${i}"`.trim() : i;
        });
        let query = "";
        for (let j = 0; j < keys.length; j++) {
          query =
            query +
            keys[j] +
            "=" +
            values[j] +
            (j === keys.length - 1 ? "" : ",");
        }
        const sql = `UPDATE itemimg SET ${query} where imgId = "${id}"`;
        runSQL(sql);
        res.status(200).json({ message: "ok" });
      } catch (error) {
        res.status(500);
      }
      break;
    case "DELETE":
      try {
        // 刪除商品內容
        const sql = `DELETE FROM itemimg WHERE imgId = "${id}"`;
        runSQL(sql);
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
