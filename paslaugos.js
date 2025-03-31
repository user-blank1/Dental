let button = document.querySelector(".navbar-toggler");
let isToggled = false;
let iframe = document.querySelector("iframe");
button.onclick = () => {
    if (isToggled === false) {
        if (window.innerWidth < 769) {
            iframe.style.marginTop = "200px";
            isToggled = true;
        }
    } else {
        if (window.innerWidth < 769) {
            iframe.style.marginTop = "0px";
            isToggled = false;
        }
    }
};

resetMarginOnResize = () => {
    if (isToggled === true) {
        iframe.style.marginTop = "0px";
        isToggled = false;
    }
};
window.addEventListener("resize", resetMarginOnResize);
