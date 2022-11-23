import { useRouter } from "next/router";

import { getItem } from "../../../lib/mysql";
import { format } from "date-fns";

export default function ItemPage(props) {
  const router = useRouter();
  const id = router.query.id as string;
  console.log(props);
  return (
    <>
      <div className="header">
        <img
          src="./images/群組 1.png"
          alt=""
          style={{ width: 90, top: -8, position: "relative" }}
        />
        <div className="header-right">
          <a href="#">美食</a>
          <a href="#">景點</a>
          <a href="#">活動</a>
          <a href="#">住宿</a>
          <a href="#">交通</a>
          <a href="#">
            <img src="./images/cart.png" style={{ width: 25 }} />
          </a>
          <a href="#divOne" className="loginbutton">
            登入|註冊
          </a>
        </div>
        <form className="example" action="">
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="main-carousel" data-flickity='{ "wrapAround": true }'>
        {props.imgList.map(
          (i) =>
            i.itemLead == "1" && (
              <div className="carousel-cell" key={i.imgId}>
                <img src={`${i.itemImgUrl}`} alt="" />
              </div>
            )
        )}
        {props.imgList.map((i) => (
          <div className="carousel-cell" key={i.imgId}>
            <img src={`${i.itemImgUrl}`} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}
export async function getStaticPaths(props) {
  const sq1 = "SELECT * FROM item";
  const data: any = await getItem(sq1);
  const paths = data.map((item) => ({
    params: { id: `${item.itemId}` },
  }));

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const sq1 = `SELECT * FROM item WHERE itemId = ${params.id}`;
  const sq3 = `SELECT * FROM itemimg WHERE itemId = ${params.id}`;
  // The value of the `props` key will be
  const imgList: any = [];

  const data = (await getItem(sq1))[0];
  const imgListRaw: any = await getItem(sq3);

  imgListRaw.forEach((item: any) => {
    imgList.push({ ...item });
  });

  data.itemListedDate = format(data.itemListedDate, "yyyy-MM-dd");

  return {
    props: {
      ...data,
      imgList,
    },
  };
}
