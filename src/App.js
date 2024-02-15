import Item from "./components/Item";
import Cart from "./components/Cart";
import CartContext from "./context/ContextProvider";

function App() {
  const item = "Items";
  return (
    <>
      <CartContext>
        <h1>{item}</h1>
        <Item productName="Mackbook" price={91000} />
        <Item productName="iPhone" price={68000} />
        <Cart />
      </CartContext>
    </>
  );
}

export default App;
