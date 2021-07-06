'use strict'

{

    let siteInfo = [];

    // Get funny sites infomations from CSV file
    function getInfoFromCSV() {

        // Create XMLHttpRrequest object to read file by HTTP
        var req = new XMLHttpRequest();

        // Select target file
        req.open("get", 'csv/funny_sites.csv', true);

        // Send HTTP request
        req.send(null);

        // Call convertCSVtoArray
        req.onload = function () {
            // 渡されるのは読み込んだCSVデータ
            convertCSVtoArray(req.responseText);
        }
    }

    // 読み込んだCSVデータを二次元配列に変換する関数convertCSVtoArray()の定義
    function convertCSVtoArray(str) {

        // 改行を区切り文字として行を要素とした配列を生成
        var tmp = str.split("\n");

        for (var i = 0; i < tmp.length - 1; i++) {

            var splittmp = tmp[i].split(",");

            siteInfo.push({
                "name": splittmp[0],
                "link": splittmp[1],
                "img": splittmp[2],
                "describe": splittmp[3]
            })
        }

        createSiteList()
    }

    function createSiteList() {
        for (let index = 0; index < siteInfo.length; index++) {

            //li要素の生成
            let li = document.createElement("li");
            li.setAttribute("class", "effect");

            //a要素の生成
            let a = document.createElement("a");
            a.setAttribute("href", siteInfo[index].link);
            a.setAttribute("target", "_blank");
            a.setAttribute("rel", "noopener");

            //img要素の生成
            let img = document.createElement("img");
            img.setAttribute("src", "img/" + siteInfo[index].img)

            //p要素の生成
            let p = document.createElement("p");
            p.textContent = siteInfo[index].name;

            //span要素の生成
            let span = document.createElement("span");
            span.textContent = siteInfo[index].describe;

            a.appendChild(img);
            a.appendChild(p);
            a.appendChild(span);
            li.appendChild(a);

            const siteList = document.getElementById("site_list");
            siteList.appendChild(li)
        }
    }

    getInfoFromCSV(); //最初に実行される

}