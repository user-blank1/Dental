// modal1 after send:
document.addEventListener("DOMContentLoaded", () => {
    let sendBtn = document.getElementById("modal1-siusti");
    let afterSendDiv = document.getElementById("after-send-modal-1");
    let beforeSendDiv = document.getElementById("firstModalBeforeSend");
    let susisiektiBtn = document.getElementById("susisiektiBtn");
    const textArea = document.getElementById("textarea-1");
    const mail = document.getElementById("pastas");
    const telnr = document.getElementById("tel-nr");
    const name = document.getElementById("vardas");
    const surname = document.getElementById("pavarde");
    let grizti = document.getElementById("back");

    sendBtn.onclick = () => {
        let details = [textArea.value, mail.value, telnr.value, name.value, surname.value];
        let isEmpty = details.includes("");
        if (isEmpty === true) {
            alert("Iveskite visus laukus");
            return;
        }
        beforeSendDiv.style.setProperty("display", "none", "important");
        afterSendDiv.style.display = "block";
        sendBtn.style.display = "none";
    };

    grizti.onclick = () => {
        beforeSendDiv.style.setProperty("display", "block");
        afterSendDiv.style.display = "none";
        sendBtn.style.display = "block";
    };
});
