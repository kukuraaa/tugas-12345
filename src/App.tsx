import "./App.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import Card from "./Components/Card";
import ProductCard from "./Components/ProductCard";
import Counter from "./Components/Counter";
import Form from "./Components/Form";

import barbie from "./assets/barbie.png";
import building from "./assets/building.jpg";
import van from "./assets/LEGO Van Gogh.jpg";
import lego from "./assets/Olivia Rodrigo's LEGO sets.jpg";
import way from "./assets/MilkyWay LEGO.png";
import japan from "./assets/japan LEGO.png";

function App() {
  return (
    <>
      <Header />

      <main className="container">
        <Sidebar />

        <div className="content">
          <Card />

          <h2>Daftar Produk</h2>

          <div className="products">

            <ProductCard
              nama="Botanical Flower Bouquet"
              harga="Rp699.000"
              gambar={building}
            />

              <ProductCard
              nama="Princess Castle & Royal Pets"
              harga="Rp450.000"
              gambar={barbie}
            />

              <ProductCard
              nama="Olivia Rodrigo's Guitar"
              harga="Rp850.000"
              gambar={lego}
            />

            <ProductCard
              nama="The Starry Night Art"
              harga="Rp75.000"
              gambar={van}
            />

            <ProductCard
              nama="The Milky Way Galaxy"
              harga="Rp1.200.000"
              gambar={way}
            />

            <ProductCard
              nama="Japanese Cherry Blossom Landscape"
              harga="Rp920.000"
              gambar={japan}
            />
            <Counter />
          </div>
            <Form />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;