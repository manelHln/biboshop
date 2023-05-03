import React from 'react'
import { Playstore } from '../../assets/img'
import './footer.css';

const Footer = () => {
  return (
    <footer class="section-p1">
    <div class="row">
        <div class="col">
            <a class="navbar-logo" href="index.html">
                BiBo shop
            </a>
            <h4>Contact</h4>
            <p><strong>Adresse:</strong> 562 Wellington Road Steet 32 San Fransisco</p>
            <p><strong>Telephone:</strong> +229 52 88 63 66</p>
            <p><strong>Heures:</strong> 24/7</p>
            <div class="follow">
                <h4>Suivez Nous</h4>
                <p class="icon">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-pinterest"></i>
                    <i class="fab fa-youtube"></i>

                </p>
            </div>

        </div>
        <div class="col">
            <h4>A Propos de Nous</h4>
            <a href="#">A Propos</a><br />
            <a href="#">Information sur la livraison</a><br />
            <a href="#">Politiques de Confidentialité</a><br />
            <a href="#">Termes & Conditions</a><br />
            <a href="#">Contact</a>

        </div>
        <div class="col">
            <h4>Mon compte</h4>
            <a href="#">Se connecter</a><br />
            <a href="#">Voir la carte</a><br />
            <a href="#">Ma liste de souhait</a><br />
            <a href="#">Suivre ma commande</a><br />
            <a href="#">Aide</a>
        </div>
        <div class="col app">
            <h4>Installez l'App</h4>
            <p>Sur App Store ou Google Play</p>
            <img src={Playstore} class="app-img" alt="" />
            <p>Moyens de Paiement Sécurisé</p>
            <img src="img/pay2.png" class="pay-img" alt="" />
        </div>
    </div>


    <div class="copyright">
        <p>@ 2023 , BiBoshop etc</p>
    </div>

</footer>
  )
}

export default Footer