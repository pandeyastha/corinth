import React from 'react'
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
        <div className="top">
            <div className="items">
                <h1>Categories</h1>
                <span>Women</span>
                <span>Men</span>
                <span>Shows</span>
                <span>Accessories</span>
                <span>New Arrivals</span>
            </div>
            <div className="items">
                <h1>Links</h1>
                <span>FAQ</span>
                <span>Pages</span>
                <span>Store</span>
                <span>Compare</span>
                <span>Cookies</span>
            </div>
            <div className="items">
                <h1>About</h1>
                <span>
                    This is a website created by Astha to make a new e-commerce platform for aesthetic fashion.
                    This is an initiative to use technology to make lives easier by providing good clothing options 
                    with wider accessibility.
                </span>
            </div>
            <div className="items">
                <h1>Contact</h1>
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Aliquam at quibusdam quas! Labore unde accusantium sed at similique minima 
                    repudiandae?</span>
            </div>
        </div>
        <div className="bottom">
            <div className="left">
                <span className="logo">CORINTH</span>
                <span className="copyright">
                    &copy; 2023 All Rights Reserved
                </span>
            </div>
            <div className="right">
                <img src="/img/payment.png" alt="payment helpers" />
            </div>
        </div>
    </div>
  );
};

export default Footer