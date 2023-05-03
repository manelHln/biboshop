import React from "react";
import './featurebox.css';

const FeatureBox = ({ img, title }) => {
  return (
    <div class="fe-box">
      <img class="img1" src={img} alt="" />
      <h6>{title}</h6>
    </div>
  );
};

export default FeatureBox;
