import React from "react";
import { useRef } from "react";
function Modal() {
    const recipientMail = useRef(null);
    const handleSendEmail = () => {
        const email = "linaszilinskasas@gmail.com";
        const subject = "Message from Website";
        const body = encodeURIComponent(document.getElementById("emailMsg").value);
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    };

    return (
        <div>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Modal title
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body ">
                            <label htmlFor="phoneText">Jusu tel.nr</label>
                            <input type="tel" className="w-100" id="phoneText"></input>
                            <br></br>
                            <br></br>
                            <label for="emailMsg">Jusu Zinute</label>
                            <textarea rows="10" className="w-100" id="emailMsg"></textarea>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Uzdaryti
                            </button>
                            <button type="button" onClick={handleSendEmail} className="btn btn-primary">
                                Siusti Pasta
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
