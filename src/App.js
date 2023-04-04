/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import logo from './img/logo.svg';
import illustration from './img/illustration-intro.svg';
import avatarAnisha from './img/avatar-anisha.png';
import avatarAliBravo from './img/avatar-ali.png';
import avatarRichard from './img/avatar-richard.png';
import logoWhite from './img/logo-white.svg';
import fbIcon from './img/icon-facebook.svg';
import instaIcon from './img/icon-instagram.svg';
import twitterIcon from './img/icon-twitter.svg';
import youtubeIcon from './img/icon-youtube.svg';
import pinterestIcon from './img/icon-pinterest.svg';

const App = () => {
  const [isClicked, setIsClicked] = useState(false);

  const hamburger = (e) => {
    setIsClicked(!isClicked);
  };
  return (
    <>
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="pt-2">
            <img src={logo} alt="logo" />
          </div>
          {/* list */}
          <div className="hidden md:flex space-x-6">
            <a href="./" className="hover:text-darkGrayishBlue">
              Pricing
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Product
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              About Us
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Careers
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Community
            </a>
          </div>
          {/* button */}
          <div>
            <a
              href=""
              className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full hover:bg-brightRedLight "
            >
              Get Started
            </a>
          </div>

          {/* hamburger icon */}
          <button
            id="menu-btn"
            className={`${isClicked ? 'open' : 'null'
              } block hamburger md:hidden focus:outline-none`}
            onClick={hamburger}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        {/* mobile menu */}
        <div className="md:hidden">
          <div
            id="menu"
            className={`${isClicked ? 'flex' : 'hidden'
              } absolute flex-col items-center self-end  py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}
          >
            <a href="#">Pricing</a>
            <a href="#">Products</a>
            <a href="#">About Us</a>
            <a href="#">Career</a>
            <a href="#">Community</a>
          </div>
        </div>
      </nav>

      <section id="hero">
        <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:flex-row md:space-y-0">
          {/* left item */}
          <div className="flex flex-col mb-32 space-y-10 md:w-1/2">
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
              Lorem ipsum dolor sit amet consectetur.
            </h1>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laudantium sunt magni ex molestiae libero temporibus. Sequi
              debitis nostrum itaque id optio voluptatum tempora iure magnam
              fugit facere. Nisi, fugit consectetur.
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href=""
                className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full hover:bg-brightRedLight "
              >
                Get Started
              </a>
            </div>
          </div>

          {/* image */}
          <div className="md:w-1/2">
            <img src={illustration} alt="intro" />
          </div>
        </div>
      </section>

      <section id="features">
        <div className="flex container flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
          {/* what's different */}
          <div className="flex flex-col space-y-10 md:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
              What's different about manage ?
            </h2>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Manage lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Numquam, rem saepe. Ducimus quae doloremque fugiat.
            </p>
          </div>

          {/* numbered list */}
          <div className="flex flex-col space-y-8 md:w-1/2">
            {/* items*/}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded l full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    01
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Track company-wide progress
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Track company-wide progress
                </h3>
                <p className="text-darkGrayishBlue">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati mollitia ad in nemo voluptatem impedit ipsum harum
                  inventore id. Magni quae qui nulla fugiat deleniti odit cum
                  iusto, corrupti autem!
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded l full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    02
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Advanced build-in reports
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Advanced build-in reports
                </h3>
                <p className="text-darkGrayishBlue">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati mollitia ad in nemo voluptatem impedit ipsum harum
                  inventore id. Magni quae qui nulla fugiat deleniti odit cum
                  iusto, corrupti autem!
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded l full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    03
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Everything you need in one place
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Everything you need in one place
                </h3>
                <p className="text-darkGrayishBlue">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati mollitia ad in nemo voluptatem impedit ipsum harum
                  inventore id. Magni quae qui nulla fugiat deleniti odit cum
                  iusto, corrupti autem!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials">
        {/* containr for heading and testm blocks */}
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
          {/* heading */}
          <h2 className="text-4xl font-bold text-center">
            What's Different About Manage ?
          </h2>
          {/* testm container */}
          <div className="flex flex-col mt-24 space-y-6 md:flex-row md:space-x-6">
            {/* testm 1 */}
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img src={avatarAnisha} className="w-16 -mt-14" alt="avatar" />
              <h5 className="text-lg font-bold">Anisha Li</h5>
              <p className="text-sm text-darkGrayishBlue">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam reiciendis illo ea adipisci atque aperiam eligendi,
                ipsum enim eveniet quas libero vitae mollitia nisi expedita
                necessitatibus minima, doloremque molestias veniam.
              </p>
            </div>
            {/* testm 2 */}
            <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
              <img src={avatarAliBravo} className="w-16 -mt-14" alt="avatar" />
              <h5 className="text-lg font-bold">Ali Bravo</h5>
              <p className="text-sm text-darkGrayishBlue">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam reiciendis illo ea adipisci atque aperiam eligendi,
                ipsum enim eveniet quas libero vitae mollitia nisi expedita
                necessitatibus minima, doloremque molestias veniam.
              </p>
            </div>
            {/* testm 3 */}
            <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
              <img src={avatarRichard} className="w-16 -mt-14" alt="avatar" />
              <h5 className="text-lg font-bold">Richard Watts</h5>
              <p className="text-sm text-darkGrayishBlue">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam reiciendis illo ea adipisci atque aperiam eligendi,
                ipsum enim eveniet quas libero vitae mollitia nisi expedita
                necessitatibus minima, doloremque molestias veniam.
              </p>
            </div>
          </div>
          {/* button */}
          <div className="my-16">
            <a
              href=""
              className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full hover:bg-brightRedLight"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      <section id="cta" className="bg-brightRed">
        {/* flex container */}
        <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
          {/* heading */}
          <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
            Simplify how your team work today
          </h2>
          {/* button */}
          <div>
            <a
              href=""
              className="p-3 px-6 pt-2 text-brightRed bg-white rounded-full hover:bg-gray-300 shadow-2xl baseline"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-veryDarkBlue">
        {/* flex container */}
        <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          {/* logo and social links container */}
          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            {/* logo */}
            <div className="mx-auto text-center my-6 text-white md:hidden">
              Copyright &copy; All Rights Reserved
            </div>
            <div>
              <img src={logoWhite} className="mt-6 h-8" alt="logo" />
            </div>
            {/* social links container */}
            <div className="flex justify-center space-x-4">
              {/* link 1*/}
              <a href="#">
                <img src={fbIcon} alt="" className="h-8" />
              </a>
              {/* link 2*/}
              <a href="#">
                <img src={youtubeIcon} alt="" className="h-8" />
              </a>
              {/* link 3*/}
              <a href="#">
                <img src={twitterIcon} alt="" className="h-8" />
              </a>
              {/* link 4*/}
              <a href="#">
                <img src={pinterestIcon} alt="" className="h-8" />
              </a>
              {/* link 5*/}
              <a href="#">
                <img src={instaIcon} alt="" className="h-8" />
              </a>
            </div>
          </div>
          {/* list container */}
          <div className="flex justify-around space-x-32">
            {/* first col */}
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-brightRed">
                Home
              </a>
              <a href="#" className="hover:text-brightRed">
                Pricing
              </a>
              <a href="#" className="hover:text-brightRed">
                Products
              </a>
              <a href="#" className="hover:text-brightRed">
                About
              </a>
            </div>
            {/* second col */}
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-brightRed">
                Careers
              </a>
              <a href="#" className="hover:text-brightRed">
                Community
              </a>
              <a href="#" className="hover:text-brightRed">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* input container */}
          <div className="flex flex-col justify-between">
            <form>
              <div className="flex space-x-3">
                <input
                  type="text"
                  className="flex-1 px-4 rounded-full focus:outline-none"
                  placeholder="Updated in your inbox"
                />
                <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                  Go
                </button>
              </div>
            </form>
            <div className="hidden text-white md:block">
              Copyright &copy; All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
