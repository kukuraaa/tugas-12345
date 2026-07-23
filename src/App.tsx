import "./App.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import Card from "./Components/Card";
import ProductCard from "./Components/ProductCard";
import Counter from "./Components/Counter";

import flower from "./assets/building.jpg";
import bunny from "./assets/Bunny.jpg";
import keychain from "./assets/Illit Keychain.jpg";
import lego from "./assets/olivia.jpg";
import shoes from "./assets/puma.jpg";
import mug from "./assets/mug.jpg";

function App() {
  return (
    <>
      <Header />

      <main className="container">
        <Sidebar />

        <div className="content">
          <Card />

          <Counter />

          <h2>Daftar Produk</h2>

          <div className="products">
            <ProductCard
              nama="Flower Bouquet Building Set"
              harga="Rp450.000"
              gambar={flower}
            />

            <ProductCard
              nama="IKEA Bunny"
              harga="Rp199.000"
              gambar={bunny}
            />

            <ProductCard
              nama="Illit Keychain"
              harga="Rp75.000"
              gambar={keychain}
            />

            <ProductCard
              nama="Olivia Rodrigo LEGO"
              harga="Rp850.000"
              gambar={lego}
            />

            <ProductCard
              nama="Puma Shoes"
              harga="Rp1.200.000"
              gambar={shoes}
            />

            <ProductCard
              nama="Starbucks Kyoto Mug"
              harga="Rp120.000"
              gambar={mug}
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;