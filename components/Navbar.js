import Link from 'next/link'
// import { signIn, signOut, useSession } from 'next-auth/client'


import { useCookies } from "react-cookie";

function Navbar() {
    const [cookie, setCookie, removeCookie] = useCookies(["user", "firm"])

    const RemoveCookie = () => {
        removeCookie('user');
        removeCookie('firm');

        setTimeout(() => {
            Router.replace("/company");
        }, 10);
    };

    if (Object.keys(cookie).length === 0) {
        return (
            <div className="header">
                <img
                    src="./images/群組 1.png"
                    alt="logo"
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
                    <a href="http://localhost:3000/login" className="loginbutton">
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
        )
    } else {
        return (
            <div className="header">
                <img
                    src="/images/群組 1.png"
                    alt=""
                    // width={20} height={20}
                    style={{
                        width: 90,
                        top: -8,
                        position: "relative"
                    }}
                />
                <div className="header-right">
                    <a href="#">美食</a>
                    <a href="#">景點</a>
                    <a href="#">活動</a>
                    <a href="#">住宿</a>
                    <a href="#">交通</a>
                    <a href="#">
                        <img
                            src="/images/cart.png"
                            alt=""
                            width={20} height={20} />
                    </a>
                    <a href="/memberCenter">會員中心</a>
                    <a href="/login" className="loginbutton" onClick={RemoveCookie}>
                        登出
                    </a>
                </div>
                <form className="example" action="">
                    <input type="text" placeholder="Search.." name="search" />
                    <button type="submit">
                        <i className="fa fa-search"></i>
                    </button>
                </form>
            </div>
        );
    }

}

export default Navbar