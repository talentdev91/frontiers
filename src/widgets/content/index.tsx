import SearchLiveStock from "./SearchLiveStock";
import Letter from "./Letter";
import Steps from "./Steps";
import Category from "./Category";
import Feature from "./Feature";
import FreeApp from "./FreeApp";
import Howto from "./howto";
import Prefooter from "./Prefooter";
import "../style.css";

const BodyContent = () => {
  return (
    <>
      <SearchLiveStock />
      <Feature />
      <Steps />
      <Category />
      <Howto />
      <Letter />
      <FreeApp />
      <Prefooter />
    </>
  );
};

export default BodyContent;
