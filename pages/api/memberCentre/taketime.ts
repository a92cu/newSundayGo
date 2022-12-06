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
        const sq1 = `SELECT * FROM usertable WHERE userId="u123456789"`;
        const data= await runSQL(sq1);
        res.status(200).json({data});
      } catch (error) {
        res.status(500);
      }
    break;
    case "PUT":
    try {
      // 刪除商品內容
      const sq2 = `UPDATE usertable SET userLoginEventTime="${req.body.timeData}" WHERE userId="u123456789"`;
      const sq3 = `INSERT INTO discountcoupon ( userId, coupon , couponName, couponStartTime,couponUse ) VALUES ("u123456789", 0.95 ,"九五折","${req.body.discountdate}",0)`;
      const data= await runSQL(sq2);
      const data2=await runSQL(sq3);
      // console.log(req)
      res.status(200).json({data,data2});
    } catch (error) {
      res.status(500);
    }
    // case "POST":
    // try {
    //   刪除商品內容
    //   const sq1 = `UPDATE usertable SET userLoginEventTime="2022-12-02" WHERE userId="u123456789"`;
    //   const data= await runSQL(sq1);
    //   console.log(req)
    //   res.status(200).json({data});
    // } catch (error) {
    //   res.status(500);
    // }
    break;    
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
