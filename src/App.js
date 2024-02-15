import CountextProvider from "./context/ContextProvidere";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <CountextProvider>
        <Counter />
      </CountextProvider>
    </>
  );
}

export default App;
