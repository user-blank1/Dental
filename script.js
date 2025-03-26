//COntrol the navbar expansion and paragraph under it
let toggleNav = document.querySelector(".navbar-toggler");
let container = document.querySelector(".container1");
let isMenuOn = false;
let reg = document.getElementById("registruotis");
function toggleMargin() {
    if (isMenuOn === false) {
        if (window.innerWidth < 992) {
            container.style.marginTop = "265px";
            console.log(container.style.marginTop);
            isMenuOn = true;
        }
    } else if (isMenuOn === true) {
        container.style.marginTop = "170px";
        console.log(container.style.marginTop);
        isMenuOn = false;
    }
}
function resetMarginOnResize() {
    if (isMenuOn === true) {
        document.querySelector(".navbar-collapse").classList.remove("show");
    }

    if (window.innerWidth > 1200) {
        container.style.marginTop = "0px";
        reg.innerText = "Regstruotis Apsilankymui";
    } else {
        container.style.marginTop = "170px";
        if (window.innerWidth < 1200 && window.innerWidth > 992) {
            reg.innerText = "Regstruotis";
        } else {
            reg.innerText = "Regstruotis apsilankymui";
        }
    }
}
toggleNav.onclick = toggleMargin;
window.addEventListener("resize", resetMarginOnResize);

//change svg color in the navbar section upon hovering
let svgContacts = document.querySelectorAll(".span3");
svgContacts.forEach((svg) => {
    let svg1 = svg.parentNode.querySelector(".svg-contacts");
    svg.addEventListener("mouseover", () => {
        svg1.style.fill = "white";
    });
    svg.addEventListener("mouseout", () => {
        svg1.style.fill = "black";
    });
});
// modal1 after send:
document.addEventListener("DOMContentLoaded", () => {
    let sendBtn = document.getElementById("modal1-siusti");
    let afterSendDiv = document.getElementById("after-send-modal-1");
    let beforeSendDiv = document.getElementById("firstModalBeforeSend");
    let susisiektiBtn = document.getElementById("susisiektiBtn");
    sendBtn.onclick = () => {
        beforeSendDiv.style.setProperty("display", "none", "important");
        afterSendDiv.style.display = "block";
        sendBtn.style.display = "none";
    };
    susisiektiBtn.onclick = () => {
        beforeSendDiv.style.setProperty("display", "block");
        afterSendDiv.style.display = "none";
        sendBtn.style.display = "block";
    };
});
