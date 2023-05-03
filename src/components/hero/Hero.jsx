import React from 'react'
import {BannerBg} from '../../assets/img'
import './hero.css'

const Hero = () => {
  return (
    <section id="hero" style={{backgroundImage: `url(${BannerBg})`}} >
        <h4>Offres incroyables sur une large gamme de produits </h4>
        <h2>Ne les manquez pas! </h2>
        <h1>Des cadeaux pour tous </h1>
        <p>Parcourez notre sélection de produits et trouvez le cadeau parfait</p>
        <button>Achetez maintenant</button>
    </section>
  )
}

export default Hero