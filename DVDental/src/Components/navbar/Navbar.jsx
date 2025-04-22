import React from "react";
import logo from "../../assets/imgs/logo.png";
import "./Navbar.css";
function Navbar({ onToggle }) {
    return (
        <div className="position-relative">
            <nav className="navbar navbar-expand-lg border border-dark bg-opacity-25 bg-dark position-absolute">
                <div className="container" id="container-1">
                    <div className="d-flex flex-row gap-lg-0 gap-4 align-items-center justify-content-start justify-content-lg-between">
                        <a className="navbar-brand fw-bold fs-3 mb-0 me-0" href="#">
                            DVDental
                        </a>
                        <div className="d-flex flex-column justify-content-center ms-0">
                            <p className=" icon-link icon-link-hover text-reset text-decoration-none m-0" id="link1">
                                <span className="">+37069129012</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-telephone"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                </svg>
                            </p>
                            <p className="icon-link icon-link-hover text-reset text-decoration-none m-0" id="link2">
                                <span className="">&nbsp;Email@email.com</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-envelope-arrow-up-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zm.192 8.159 6.57-4.027L8 9.586l1.239-.757.367.225A4.49 4.49 0 0 0 8 12.5c0 .526.09 1.03.256 1.5H2a2 2 0 0 1-1.808-1.144M16 4.697v4.974A4.5 4.5 0 0 0 12.5 8a4.5 4.5 0 0 0-1.965.45l-.338-.207z" />
                                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.354 1.25 1.25a.5.5 0 0 1-.708.708L13 12.207V14a.5.5 0 0 1-1 0v-1.717l-.28.305a.5.5 0 0 1-.737-.676l1.149-1.25a.5.5 0 0 1 .722-.016" />
                                </svg>
                            </p>
                        </div>
                        <div id="img-container-1">
                            <img src={logo} className="w-100 rounded-2"></img>
                        </div>
                    </div>
                    <button
                        className="navbar-toggler "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={onToggle}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav gap-xl-5 ms-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <a className="nav-link active fs-4 fw-bold" aria-current="page" href="#">
                                    Pagrindinis
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-4 fw-bold" href="#">
                                    Kontaktai
                                </a>
                            </li>{" "}
                            <li className="nav-item">
                                <a className="nav-link fs-4 fw-bold" href="#">
                                    Galerija
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
