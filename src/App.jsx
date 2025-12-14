import Banner from "./Component/Banner/Banner";
import Header from "./Component/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Banner/>

      {/* Dummy content to test scroll */}
      <div className="h-[200vh] bg-neutral-900 text-white pt-24">
        Scroll to see header background change
      </div>
    </>
  );
}

export default App;
