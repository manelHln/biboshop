import React from 'react'
import { PromoBanner } from '../../assets/img'
import './offerbanner.css'

const OfferBanner = () => {
  return (
    <section id="banner" className="section-m1" style={{backgroundImage: `url(${PromoBanner})`}}>
        <h4>Profitez de nos promotions exceptionnelles !</h4>
        <h2>Des <span> offres exclusives</span> rien que pour vous ! </h2>
        <button className="normal">Voir plus</button>
    </section>
  )
}

export default OfferBanner