import { useContext } from "react";
import Header from "../../Components/Header";
import { CartContext } from "../../providers/cart";
import { CartContainer, CartResume, MainContainer } from "./style";

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <>
      <Header />
      <MainContainer>
        <CartContainer>
          {cart &&
            cart.map((item) => {
              return (
                <li>
                  <img src={item.image} alt={`Foto do ${item.name}`} />
                  <h2>{item.name}</h2>
                  <span>R$ {item.price.toFixed(2).replace(".", ",")}</span>
                </li>
              );
            })}
        </CartContainer>
        <CartResume>
          <h2>Resumo do pedido:</h2>
          <span>
            {cart.length} {cart.length !== 1 ? "produtos" : "produto"}{" "}
          </span>
          <span>
            R${" "}
            {cart &&
              cart
                .reduce((prev, curr) => {
                  console.log(curr, prev);
                  return curr.price + prev;
                }, 0)
                .toFixed(2)
                .replace(".", ",")}
          </span>
        </CartResume>
      </MainContainer>
    </>
  );
}

export default Cart;
