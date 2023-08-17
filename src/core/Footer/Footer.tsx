import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {FooterContent, MyFooter, SocialIconRef} from "./StyledFooter";

const Footer = () => {
    return (
        <MyFooter>
            <FooterContent>
                <p>© 2023 My Website. All rights reserved.</p>
                <div>
                    <SocialIconRef href="#"><i className="fab fa-facebook fa"></i></SocialIconRef>
                    <SocialIconRef href="#"><i className="fab fa-twitter fa"></i></SocialIconRef>
                    <SocialIconRef href="#"><i className="fab fa-instagram fa"></i></SocialIconRef>
                </div>
            </FooterContent>
        </MyFooter>
    );
}

export default Footer;