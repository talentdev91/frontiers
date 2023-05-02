const Steps = () => {
  return (
    <div className="step-main">
      <div className="step-desc">
        <span className="step-title1 mb-1">TRUSTED LIVESTOCK MARKETPLACE</span>
        <span className="step-title2 mb-6">
          Why buy & sell on Frontiers Market?
        </span>
        <div className="step-option">
          <div className="step-option-sell">
            <span className="step-option-sell-text">I’m here for selling</span>
          </div>
          <div className="step-option-buy">
            <span className="step-option-buy-text">I’m here for buying</span>
          </div>
        </div>
      </div>
      {/* md:grid-cols-2 */}
      <div className="step-contain-main">
        {/* Hassle Free Selling */}
        <div className="flex">
          <div className="step-contain-bar-main mr-4 flex flex-col items-center">
            <div className="step-contain-bar-icon"></div>
            <div className="h-full w-px step-contain-bar"></div>
          </div>
          <div className="step-contain-text-main flex flex-row">
            <div className="flex-1 relative pb-8">
              <p className="step-contain-text1 ">SELL AS YOU LIKE</p>
              <p className="step-contain-text2 mb-3">Hassle-Free Selling</p>
              <p className="step-contain-text3">
                Your cattle don’t leave the ranch until the buyer picks them up.
                Cut down on transport, cattle shrink, and disease exposure while
                buying directly from trusted ranchers across the USA.
              </p>
            </div>
            <div className="step-contain-image flex-1">
              <img
                src="./images/steps/image1.png"
                alt="image1"
                className="m-auto"
              />
            </div>
          </div>
        </div>
        {/* Sell to Nationwide Buyers */}
        <div className="flex">
          <div className="step-contain-bar-main mr-4 flex flex-col items-center">
            <div className="step-contain-bar-icon"></div>
            <div className="h-full w-px step-contain-bar"></div>
          </div>
          <div className="step-contain-text-main flex flex-row">
            <div className="flex-1 relative pb-8">
              <p className="step-contain-text1 ">SELL WHEREVER YOU LIKE</p>
              <p className="step-contain-text2 mb-3">
                Sell To Nationwide Buyers
              </p>
              <p className="step-contain-text3">
                Sell to anyone from industry giants to small-scale operations
                wanting to buy your product. Ensure fair, competitive prices in
                the national market and be seen by thousands of potential
                buyers.
              </p>
            </div>
            <div className="step-contain-image flex-1">
              <img
                src="./images/steps/image2.png"
                alt="image2"
                className="m-auto"
              />
            </div>
          </div>
        </div>
        {/* Benefit from our support */}
        <div className="flex">
          <div className="step-contain-bar-main mr-4 flex flex-col items-center">
            <div className="step-contain-bar-icon"></div>
          </div>
          <div className="step-contain-last-text-main flex flex-row">
            <div className="flex-1 relative pb-8">
              <p className="step-contain-text1 ">SELL & BUY SAFELY</p>
              <p className="step-contain-text2 mb-3">
                Benefit from our support
              </p>
              <p className="step-contain-text3">
                Discuss animal health and history, negotiate prices, and learn
                about operations directly from the seller. View reviews from
                previous buyers.
              </p>
            </div>
            <div className="step-contain-image flex-1">
              <img
                src="./images/steps/image3.png"
                alt="image3"
                className="m-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
