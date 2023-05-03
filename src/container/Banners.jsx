import React from "react";
import BannerBox from "../components/banner_box/BannerBox";
import { Banner } from "../assets/img";

const banners = [
  {
    title: "Des offres incroyables",
    subTitle: "Achetez 4 Articles et Gagnez 1 Article de plus",
    text: "Offres limitées, ne les manquez pas !",
    buttonText: "Voir plus",
    bgImg: Banner,
  },
  {
    title: "Spring/summer",
    subTitle: "Prochainement disponible",
    text: "Meilleure gadget classique en vente chez BiBo Shop",
    buttonText: "Collection",
    bgImg: Banner,
  },
];

const banners2 = [
  {
    subTitle: "Achetez 4 Articles et Gagnez 1 Article de plus",
    text: "Offres limitées, ne les manquez pas !",
    buttonText: "Voir plus",
    bgImg: Banner,
  },
  {
    subTitle: "Prochainement disponible",
    text: "Meilleure gadget classique en vente chez BiBo Shop",
    buttonText: "Collection",
    bgImg: Banner,
  },
  {
    subTitle: "Prochainement disponible",
    text: "Meilleure gadget classique en vente chez BiBo Shop",
    buttonText: "Collection",
    bgImg: Banner,
  },
];

const Banners = () => {
  return (
    <>
      <section id="sm-banner" class="section-p1">
        {banners.map((banner) => (
          <BannerBox
            title={banner.title}
            text={banner.text}
            subTitle={banner.subTitle}
            bgImg={banner.bgImg}
            buttonText={banner.buttonText}
            small
          />
        ))}
      </section>
      <section id="banner3">
        {banners2.map((banner) => (
          <BannerBox
            text={banner.text}
            subTitle={banner.subTitle}
            bgImg={banner.bgImg}
            buttonText={banner.buttonText}
          />
        ))}
      </section>
    </>
  );
};

export default Banners;
