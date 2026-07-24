import Lego from "../assets/Lego.jpg";

function Card() {
  return (
    <div className="card">
      <img src={Lego} alt="Foto Profil" />
      <h2>Khumaera</h2>
      <p>Frontend Developer</p>
    </div>
  );
}
export default Card;