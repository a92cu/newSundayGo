import $ from "jquery";
import { useEffect } from "react";
export const receiptPage = () => {
    useEffect(() => {
        $('#qrcode').qrcode('https://www.google.com.tw');

        $("#pdfDownload").click(function () {

            html2canvas($("#downloadReceipt")[0]).then((canvas) => {
                var data = canvas.toDataURL('image/png');
                var docDefinition = {
                    content: [{
                        image: data,
                        width: 595
                    }],
                    pageSize: 'A7',
                    pageMargins: [0, 20, 0, 0]
                };

                pdfMake.createPdf(docDefinition).download('name.pdf');
            });
        });

    })
    return (
        <>
            <div id="downloadReceipt">
                <div className="receiptTitle">
                    <img src="./images/群組 1.png" alt="" />憑證
                </div>
                <br />
                <div className="receiptBody">
                    <h3>台灣嘉義｜三隻小豬觀光農場門票</h3>
                    <p> 使用日：<span>2022-11-27</span> </p>
                    <p>訂單編號：<span>21KK218456622</span> </p>
                    <p>數量：<span>4張</span> </p>
                </div>
                <br />
                <div className="receiptQR">
                    <div id="qrcode"></div>
                    <div id="code"></div>
                    <br />
                    <button id="pdfDownload" class="receiptBtn">憑證下載</button>
                </div>
            </div>


        </>
    )
}
export default receiptPage