import React from 'react';
import './Footer.css';
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© 2023 My Website. All rights reserved.</p>
                <div className="social-icons">
                    <a href="#"><i className="fab fa-facebook fa"></i></a>
                    <a href="#"><i className="fab fa-twitter fa"></i></a>
                    <a href="#"><i className="fab fa-instagram fa"></i></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;