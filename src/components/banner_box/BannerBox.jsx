import React from "react";

const BannerBox = ({ title, subTitle, text, buttonText, small, bgImg }) => {
  return (
    <div class="banner-box" style={{ backgroundImage: `url(${bgImg})` }}>
      {small && <h4>{title}</h4>}
      <h2>{subTitle}</h2>
      <span> {text}</span>
      {small && <button>{buttonText}</button>}
    </div>
  );
};

export default BannerBox;
