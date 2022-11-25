import { privateDecrypt } from "crypto";
import Image from "next/image";
// import { runSQL } from "../../lib/mysql";
import ReceiptPage from "./components/receiptPage.jsx";
import Script from "next/script";


export default function CartDetails(){
    return(
        <>  
            <ReceiptPage/>
            <Script src="/js/html2canvas.js" />
            <Script src="/js/pdfmake.js" />

        </>
    )
}