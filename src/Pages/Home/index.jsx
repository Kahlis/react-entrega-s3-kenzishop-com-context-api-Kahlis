import React from "react";
import { useContext } from "react";
import Header from "../../Components/Header";
import { CartContext } from "../../providers/cart";
import { CatalogueContext } from "../../providers/catalogue";
import { DescriptionField, ProductCard } from "./style";

function Home() {
  const { addToCart } = useContext(CartContext);
  const { catalogue } = useContext(CatalogueContext);

  return (
    <>
      <Header />
      <ul>
        {catalogue.map((item) => (
          <ProductCard>
            <h2>{item.name}</h2>
            <img src={item.image} alt={`Foto do ${item.name}`} />
            <DescriptionField>
              <span>R$ {item.price.toFixed(2).replace(".", ",")}</span>
              <p>{item.details}</p>
            </DescriptionField>
            <button
              onClick={() => {
                addToCart(item);
              }}
            >
              Comprar
            </button>
          </ProductCard>
        ))}
      </ul>
    </>
  );
}

export default Home;
