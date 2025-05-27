import { Outlet, NavLink } from "react-router-dom";
import "./Main.css";
import Modal from "./Modal1/Modal1.jsx";
import logo from "../assets/imgs/logo.png";

function Main() {
    return (
        <div id="main-wrap">
            <nav className="navbar navbar-expand-lg bg-bg-body-tertiary bg-opacity-50">
                <div className="container-fluid d-flex flex-wrap flex-column flex-sm-row gap-2 gap-sm-0">
                    <div className="d-flex  align-items-center" id="nav-brand">
                        <a className="navbar-brand fs-2 fw-bold" href="#">
                            DVDental
                        </a>
                        <div id="logo-wrap" className="d-none d-sm-block">
                            <img src={logo} alt="" className="img-fluid shadow rounded-2" />
                        </div>
                        <div className="d-flex flex-row flex-md-column ms-2 gap-2 " id="nav-icons">
                            <a href="tel:+37068231907" className="text-decoration-none  icon-link icon-link-hover text-dark">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-telephone-outbound"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5" />
                                </svg>
                                <p className="m-0 d-none d-md-block">Skambinti</p>
                            </a>
                            <button className="p-0 m-0 border-0" id="nav-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <a href="#" className="text-decoration-none icon-link icon-link-hover text-dark">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-envelope-arrow-down"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4.5a.5.5 0 0 1-1 0V5.383l-7 4.2-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-1.99zm1 7.105 4.708-2.897L1 5.383zM1 4v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1" />
                                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-1.646a.5.5 0 0 1-.722-.016l-1.149-1.25a.5.5 0 1 1 .737-.676l.28.305V11a.5.5 0 0 1 1 0v1.793l.396-.397a.5.5 0 0 1 .708.708z" />
                                    </svg>
                                    <p className="m-0 d-none d-md-block ">Email@email.com</p>
                                </a>
                            </button>
                        </div>
                    </div>
                    <button
                        className="navbar-toggler border"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav gap-3 ms-auto me-0 me-lg-5">
                            <li className="nav-item dropdown" id="navbar-dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Paslaugos
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/" className={({ isActive }) => (isActive ? "active-nav-link nav-link" : "nav-link")} aria-current="page" href="#">
                                    Pagrindinis
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contacts" className={({ isActive }) => (isActive ? "active-nav-link nav-link" : "nav-link")} href="#">
                                    Kontaktai
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/more" className={({ isActive }) => (isActive ? "active-nav-link nav-link" : "nav-link")} href="#">
                                    Daugiau
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div id="outlet">
                <Outlet />
            </div>
            <Modal />

            <footer className="bg-dark py-4">
                <div className="container d-flex justify-content-between flex-column flex-md-row">
                    <div id="footer-1">
                        <div className="d-flex gap-2 align-items-center mb-3 mb-lg-0 justify-content-center justify-content-md-start">
                            <h3 className="text-white">DVDental</h3>
                            <div id="footer-logo">
                                <img src={logo} alt="" className="img-fluid  rounded-2" />
                            </div>
                        </div>
                        <p className="text-white text-center text-md-start">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus non ratione reprehenderit provident enim nesciunt distinctio.
                            Iusto ab adipisci aspernatur.
                        </p>
                        <a href="#" className="text-secondary icon-link icon-link-hover text-decoration-none" id="footer-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-c-circle" viewBox="0 0 16 16">
                                <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512" />
                            </svg>
                            DVDental UAB.
                        </a>
                    </div>
                    <div id="footer-2"></div>
                </div>
            </footer>
        </div>
    );
}

export default Main;
