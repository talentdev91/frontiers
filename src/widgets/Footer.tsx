import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-text1">Let’s keep in touch!</div>
      <div className="footer-text2">info@frontiersmarket.com</div>
      <div className="footer-content1 flex justify-between items-center mb-8">
        <span className="footer-text2">+1 512-387-4314</span>
        <div className="footer-icon-main flex justify-center items-center">
          <IconBrandFacebook className="footer-icon-facebook" />
          <IconBrandTwitter className="footer-icon-twitter" />
          <IconBrandInstagram className="footer-icon-instagram" />
          <IconBrandLinkedin
            className="footer-icon-linkedin"
            width={30}
            height={30}
          />
        </div>
      </div>
      <div className="footer-last-text flex justify-between items-center">
        <div className="footer-text-policy flex justify-center items-center">
          <span className="footer-text3 mr-4">Terms of Service</span>
          <span className="footer-text3">Privacy Policy</span>
        </div>
        <div className="footer-text3 footer-copyright">
          Copyright © Frontiers Market 2023. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
