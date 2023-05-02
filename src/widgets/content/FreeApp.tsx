const FreeApp = () => {
  return (
    <div className="freeapp-main">
      <div className="freeapp-main-content w-full">
        <div className="freeapp-main-left-content self-center w-full">
          <div className="freeapp-text1 mt-2 mb-1">
            Livestock in your pocket
          </div>
          <div className="freeapp-text2 mt-8">
            Track & sell your livestock via our free app
          </div>
          <div className="freeapp-main-left-btn flex justify-center items-center">
            <img
              src="./images/freeappplay.png"
              alt="imagephoto"
              className="freeapp-main-left-btn1 rounded-lg pr-4"
            />
            <img
              src="./images/freeappstore.png"
              alt="imagephoto"
              className="freeapp-main-left-btn2 rounded-lg"
            />
          </div>
          <div className="freeapp-main-left-text2 flex items-center justify-start relative">
            <img
              src="./images/avatars/avatar1.png"
              alt="imagephoto"
              sizes="(max-width: 768px)"
              className="rounded-lg freeapp-main-left-avatar1"
            />
            <img
              src="./images/avatars/avatar2.png"
              alt="imagephoto"
              sizes="(max-width: 768px)"
              className="rounded-lg freeapp-main-left-avatar2"
            />
            <img
              src="./images/avatars/avatar3.png"
              alt="imagephoto"
              sizes="(max-width: 768px)"
              className="rounded-lg freeapp-main-left-avatar3"
            />
            <span className="freeapp-main-left-text1">
              Trusted by the biggest U.S. ranchers
            </span>
            <img src="./images/us.png" alt="logo" className="header-logo-img" />
          </div>
        </div>
        <div className="relative w-full">
          <img
            src="./images/freeappimage.png"
            alt="imagephoto"
            className="mx-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default FreeApp;
