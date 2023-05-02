import "./style.css";
import { IconX } from "@tabler/icons-react";

const Announcement = () => {
  return (
    <div className="bg-gray-900 announcement-main">
      <div className="flex justify-center items-center">
        <img
          src="./images/us.png"
          alt="us-flag"
          className="announcement-flag-img"
        />
        <span className="text-white text-title1">
          Download our app to track your cattle and easily list on our
          marketplace for free.
        </span>
      </div>
      <div className="flex justify-center items-center">
        <span className="text-white text-title1">Get on Google Play</span>
        <img
          src="./images/googleplay.png"
          alt="google-play"
          className="announcement-google-play-img"
        />
        <span className="text-white announcement-responsive-title">
          Download our app from GooglePlay
        </span>
      </div>
      <IconX className="text-gray-300 w-4 mr-5 announcement-close" />
    </div>
  );
};

export default Announcement;
