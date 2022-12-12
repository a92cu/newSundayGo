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
        const sql = `SELECT * FROM ordertable WHERE itemId = "${id}"`;
        const data = await runSQL(sql);
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
