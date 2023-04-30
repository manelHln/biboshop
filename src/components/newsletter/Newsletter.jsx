import React from "react";
import { NewsletterImg } from "../../assets/img";

const Newsletter = () => {
  return (
    <section
      id="newsletter"
      className="section-p1 section-m1"
      style={{ backgroundImage: `url(${NewsletterImg}),`, marginBottom: '20px' }}
    >
      <div className="newsText">
        <h4>Inscrivez-vous à notre newsletter</h4>
        <p>
          Recevez nos <span> offres exclusives </span> et nos dernières
          nouvelles{" "}
        </p>
      </div>
      <div className="newsForm">
        <input type="text" placeholder="Votre Email" />
        <button type="submit"> S'inscrire</button>
      </div>
    </section>
  );
};

export default Newsletter;
