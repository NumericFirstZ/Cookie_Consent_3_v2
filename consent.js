const cookieBanner = document.querySelector(".cookie_banner_container");
const cookieBtn = document.querySelector(".button3");
function localkeeper(){
    if (!localStorage.getItem("bannerDisplayed"))
        cookieBanner.classList.add("active");
    localStorage.setItem("bannerDisplayed", "true");
    cookieBanner.remove();
}

if (localStorage.getItem("bannerDisplayed") != null) {
    cookieBanner.remove();
}