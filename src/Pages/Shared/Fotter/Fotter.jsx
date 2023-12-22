import React from "react";
import {
    FaAppStore,
  FaApple,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";

const Fotter = () => {
  return (
    <div className="">
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Make to do</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
          <header className="footer-title">Follow Us</header>
          <div className="flex gap-4">
            <a className="link link-hover text-2xl">
              <FaFacebook></FaFacebook>{" "}
            </a>
            <a className="link link-hover text-2xl">
              <FaInstagram></FaInstagram>
            </a>
            <a className="link link-hover text-2xl">
              <FaLinkedinIn></FaLinkedinIn>
            </a>
            <a className="link link-hover text-2xl">
              <FaYoutube></FaYoutube>
            </a>
            <a className="link link-hover text-2xl">
              <FaTwitter></FaTwitter>
            </a>
          </div>
          <div className="flex gap-3 flex-col  md:flex-row">
          <a className="btn ">
        <BiLogoPlayStore className="text-3xl"></BiLogoPlayStore>
            <div>
              get in <br />
              Google play
            </div>
          </a>
          
          <a className="btn ">
        <FaApple className="text-3xl"></FaApple>
            <div>
              Dalownload on the <br />
              App Store
            </div>
          </a>
          </div>
       
        </nav>
      </footer>
    </div>
  );
};

export default Fotter;
