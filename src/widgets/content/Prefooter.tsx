const Prefooter = () => {
  return (
    <div className="prefooter-main">
      <div className="prefooter-text1">TRUSTED LIVESTOCK MARKETPLACE</div>
      <div className="prefooter-text2">Buying is safe here</div>
      <div className="flex items-stretch justify-center">
        <div className="grid grid-cols-1 gap-4 dark:text-white sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          <div>
            <div className="prefooter-item-logo-main mb-2">
              <img
                src="./images/prefooter/icon1.png"
                alt="imagephoto"
                className="ml-4"
              />
            </div>
            <div className="prefooter-item-text1 ml-4">You’re the boss</div>
            <div className="prefooter-item-text2 ml-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <div>
            <div className="prefooter-item-logo-main mb-2">
              <img
                src="./images/prefooter/icon2.png"
                alt="imagephoto"
                className="ml-4"
              />
            </div>
            <div className="prefooter-item-text1 ml-4">Shipping nationwide</div>
            <div className="prefooter-item-text2 ml-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <div>
            <div className="prefooter-item-logo-main mb-2">
              <img
                src="./images/prefooter/icon3.png"
                alt="imagephoto"
                className="ml-4"
              />
            </div>
            <div className="prefooter-item-text1 ml-4">Market resources</div>
            <div className="prefooter-item-text2 ml-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <div>
            <div className="prefooter-item-logo-main mb-2">
              <img
                src="./images/prefooter/icon4.png"
                alt="imagephoto"
                className="ml-4"
              />
            </div>
            <div className="prefooter-item-text1 ml-4">Buyer’s assistance</div>
            <div className="prefooter-item-text2 ml-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prefooter;
