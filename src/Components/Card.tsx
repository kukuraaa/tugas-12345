import humahuma from "../assets/humahuma.jpeg";

function Card() {
  return (
    <div className="card">
      <img src={humahuma} alt="Foto Profil" />
      <h2>Khumaera</h2>
      <p>Frontend Developer</p>
    </div>
  );
}
export default Card;