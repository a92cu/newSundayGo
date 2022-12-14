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
  // console.log(req.body)
  switch (method) {    
    case "PUT":
      try {
        // 修改會員帳號內容
        // const keys = Object.keys(req.body);
        // const values = Object.values(req.body).map((i, index) => {
        //   return typeof i === "string" ? `"${i}"`.trim() : i;
        // });
        // let query = "";
        // for (let j = 0; j < keys.length; j++) {
        //   query =
        //     query + keys[j] + "=" + values[j] + (j === keys.length - 1 ? "" : ",");
        // }
        const sq1 = `UPDATE usertable SET userAvatar = "${req.body}" where userId = "u123456789"`;
        // const sq1 = `UPDATE usertable SET ${query} where userId = "u123456789"`;
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
