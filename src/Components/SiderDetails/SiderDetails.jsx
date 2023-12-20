import profilepic from "../../assets/k.png";
import "./SiderDetails.scss";

const SiderDetails = () => {
  return (
    <div className="siderdetails">
      <div className="imagecontainer">
        <img src={profilepic} alt="" />
        <h3 className="name">Kirttinath Ojha</h3>
      </div>
      <div className="sideritems"></div>
    </div>
  );
};

export default SiderDetails;
