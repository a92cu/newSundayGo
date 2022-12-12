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
  console.log(req.body,req.body.timeData,req.query)
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
      if(req.body.timeData){
          console.log("yes Im run all")
          const sq2 = `UPDATE usertable SET userLoginEventTime="${req.body.timeData}",userLoginEventCount=${req.body.count} WHERE userId="u123456789"`;
          const data= await runSQL(sq2);
          if(req.body.discountdate){
            const sq3 = `INSERT INTO discountcoupon ( userId, coupon , couponName, couponEndTime,couponUse ) VALUES ("u123456789", 0.95 ,"九五折","${req.body.discountdate}",0)`;
            const data2=await runSQL(sq3);
          }
          res.status(200).json({});
      }else{
        console.log("no Im not run all")
        const sq2 = `UPDATE usertable SET userLoginEventCount="${req.body.count}" WHERE userId="u123456789"`;
        const data= await runSQL(sq2);
        res.status(200).json({data});
      }
      // console.log(req)
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
