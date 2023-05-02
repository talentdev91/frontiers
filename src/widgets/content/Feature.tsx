import FeatureChild from "../components/FeatureChild";

const Feature = () => {
  const imgData = [
    "../images/cards/card1.png",
    "../images/cards/card2.png",
    "../images/cards/card3.png",
    "../images/cards/card1.png",
  ];
  const strData = [
    ["1/12", "10 Brahman", "$1,225 / head"],
    ["1/8", "6 Brangus", "$1,400 / head"],
    ["1/20", "8 Beefmaster", "$1,200 / head"],
    ["1/12", "10 Brahman", "$1,225 / head"],
  ];

  return (
    <div className="feature-main">
      <span className="feadture-title mb-2">ships nationwide</span>
      <div className="flex justify-between mb-11">
        <span className="feadture-list-title mb-2">Featured listings</span>
        <span className="feadture-list-showall mb-2">See all</span>
      </div>
      <div className="overflow-x-auto overflow-hidden flex justify-between">
        {strData.map((data, key) => (
          <FeatureChild imgUrl={imgData[key]} data={data} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Feature;
