import cartGreen from "./cartGreen.png";
import { useNavigate } from "react-router-dom";
import { TotalContainer, StyledHeader } from "./style";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";

function Header() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <h1
        onClick={() => {
          navigate("../home");
        }}
      >
        KenzieShop
      </h1>
      <TotalContainer>
        <img src={cartGreen} alt={"Icone carrinho"} />
        <span
          onClick={() => {
            navigate("../cart");
          }}
        >
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
      </TotalContainer>
    </StyledHeader>
  );
}

export default Header;
