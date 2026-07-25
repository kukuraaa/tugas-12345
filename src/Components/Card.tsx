import Lego from "../assets/Lego.jpg";

function Card() {
  return (
    <div className="card">
      <div className="card-top">
        <img src={Lego} alt="Foto Profil" />
        <div className="card-info">
          <h2>Nama : Siti Khumaera</h2>
          <p className="card-role">Divisi : Frontend Developer</p>
        </div>
      </div>

      <div className="card-bottom">
        <h3 className="card-photo-title">Information</h3>
        <p className="card-caption">
          𝜗ৎ Jelajahi berbagai koleksi LEGO mulai dari bunga, karakter, sampai berbagai karya seni yang unik dan menarik. 
          Di sini ada banyak pilihan LEGO yang bisa dirakit untuk mengisi waktu luang, dijadikan koleksi, atau bahkan jadi hadiah buat orang tersayang. 
          Setiap LEGO punya bentuk dan tema yang berbeda, jadi seru banget buat dipilih sesuai yang kamu suka.
        </p>
      </div>
    </div>
  );
}
export default Card;