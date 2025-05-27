import { useRef } from "react";
import "./modal.css";
import emailjs from "emailjs-com";
function Modal() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_3v0adfm", "template_xuxfz2k", form.current, "0MY99su4TeVzjftfS").then(
            (result) => {
                console.log(result.text);
                alert("Dėkojame, į jūsų žinutę bus atsakyta.");
            },
            (error) => {
                console.log(error.text);
                alert("Email sending failed.");
            }
        );
    };
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Susisiekite
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex justify-content-between flex-wrap ">
                                <div>
                                    <label for="input-name">Vardas</label>
                                    <br></br>
                                    <input type="text" placeholder="Vardas" name="name" id="input-name" />
                                </div>
                                <div>
                                    <label for="input-surname">Pavardė</label>
                                    <br></br>
                                    <input type="text" placeholder="Pavardė" name="surname" id="input-surname" />
                                </div>
                            </div>
                            <div className="  mt-2">
                                {" "}
                                <label for="input-email">El.Pastas</label>
                                <br></br>
                                <input type="email" id="input-email" name="email" placeholder="El. paštas" />
                            </div>
                            <textarea name="message" className="mt-2 w-100" placeholder="Klausimas" cols="30" rows="10" id="input-message"></textarea>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Uždaryti
                            </button>
                            <button type="submit" className="btn btn-primary">
                                Siųsti
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Modal;
