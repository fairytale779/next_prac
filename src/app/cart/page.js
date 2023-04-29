import Link from "next/link";
import { price, name } from "./data";

export default function Cart() {
  let shoppingCart = ["Tomatoes", "Oil", "Rose", "Pasta"];
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem product={shoppingCart[0]} />
      <CartItem product={shoppingCart[1]} />
      <CartItem product={shoppingCart[2]} />
      <CartItem product={shoppingCart[3]} />
    </div>
  );
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.product}</p>
      <p>${price}</p>
      <p>1개</p>
    </div>
  );
}
