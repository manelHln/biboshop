import React from "react";
import { ProductSingle01 } from "../assets/img";
import Product from "./product/Product";

const products = [
  {
    id: 1,
    desc: "Couche pour enfant reutilisable ecologique",
    img: ProductSingle01,
    price: 30000,
  },
  {
    id: 2,
    desc: "Couche pour enfant reutilisable ecologique",
    img: ProductSingle01,
    price: 30000,
  },
  {
    id: 3,
    desc: "Couche pour enfant reutilisable ecologique",
    img: ProductSingle01,
    price: 30000,
  },
  {
    id: 4,
    desc: "Couche pour enfant reutilisable ecologique",
    img: ProductSingle01,
    price: 30000,
  },
  {
    id: 5,
    desc: "Couche pour enfant reutilisable ecologique",
    img: ProductSingle01,
    price: 30000,
  },
  {
    id: 6,
    desc: "Couche pour enfant reutilisable ecologique",
    img: ProductSingle01,
    price: 30000,
  },
];

const Products = () => {
  return (
    <section id="product1" class="section-p1">
      <h2>Produits Populaires</h2>
      <p>
        Explorez nos produits les plus populaires et rejoignez la communauté de
        nos clients satisfaits !
      </p>
      <div class="pro-container" id="pro-container">
        {products.map((product) => (
          <Product
            key={product.id}
            desc={product.desc}
            price={product.price}
            img={product.img}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
