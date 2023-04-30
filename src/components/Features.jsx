import React from "react";
import FeatureBox from "./feature_box/FeatureBox";
import {
  OrderFood,
  FastDelivery,
  Jar,
  Support,
  Sales,
  Personnal,
} from "../assets/img";

const features = [
  {
    img: OrderFood,
    title: "Commande en ligne",
  },
  {
    img: FastDelivery,
    title: "Livraison rapide",
  },
  {
    img: Jar,
    title: "Economie d'argent",
  },
  {
    img: Support,
    title: "Assistance 24/7",
  },
  {
    img: Sales,
    title: "Promotions",
  },
  {
    img: Personnal,
    title: "Vente simplifiee",
  },
];

const Features = () => {
  return (
    <div id="feature" class="section-p1 slide-top">
      {features.map((feature) => (
        <FeatureBox img={feature.img} title={feature.title} />
      ))}
    </div>
  );
};

export default Features;
