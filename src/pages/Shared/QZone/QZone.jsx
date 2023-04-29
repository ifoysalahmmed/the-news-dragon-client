import React from "react";
import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qzone3 from "../../../assets/qZone3.png";

const QZone = () => {
  return (
    <div className="bg-secondary my-4 py-4 px-4">
      <h4>Q-Zone</h4>
      <div className="text-center">
        <img className="img-fluid" src={qzone1} alt="" />
        <img className="img-fluid" src={qzone2} alt="" />
        <img className="img-fluid" src={qzone3} alt="" />
      </div>
    </div>
  );
};

export default QZone;
