function chamgeBG() {

    let htmlElement = document.getElementsByTagName("html")[0];
    let h1 = document.getElementsByTagName("h1")[0];
    let span = document.getElementsByClassName("span_describe");
    let a = document.getElementsByClassName("a-siteLink");
    let backGroundImage = getComputedStyle(htmlElement).backgroundImage.slice(-10, -6);
    let siteLogo = document.getElementById("logo");
    let header = document.getElementById("global_header");

    if (backGroundImage === "dark") {
        siteLogo.setAttribute("src", "img/funny_sites_red.png");
        header.style.backgroundColor = "#ff0000"
        htmlElement.style.backgroundImage = "url(img/webb.png)";
        h1.style.color = "#000"
        for (let i = 0; i < span.length; i++) {
            span[i].style.backgroundColor = "#191970";
            span[i].classList.remove("a");
            a[i].classList.remove("x");
        }

    } else {
        siteLogo.setAttribute("src", "img/funny_sites_blue.png");
        header.style.backgroundColor = "#1C00FD"
        htmlElement.style.backgroundImage = "url(img/webb-dark.png)";
        h1.style.color = "#fff"
        for (let i = 0; i < span.length; i++) {
            span[i].style.backgroundColor = "#c71585";
            span[i].classList.add("a");
            a[i].classList.add("x");
        }
    }
}
