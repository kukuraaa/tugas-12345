import { useState } from "react";

function Form() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");

  const [hasil, setHasil] = useState({
    nama: "",
    email: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (nama.trim() === "" || email.trim() === "") {
      setError("Nama dan Email wajib diisi!");
      return;
    }

    setError("");

    setHasil({
      nama,
      email,
    });

    // Mengosongkan input setelah submit
    setNama("");
    setEmail("");
  };

  const handleReset = () => {
    setNama("");
    setEmail("");
    setHasil({
      nama: "",
      email: "",
    });
    setError("");
  };

  return (
    <div className="form-container">
      <h2>Form Kontak</h2>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Nama</label>

          <input
            type="text"
            placeholder="Masukkan Nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Email</label>

          <input
            type="email"
            placeholder="Masukkan Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {error && <p className="error">{error}</p>}

        <div className="button-group">
          <button type="submit">
            Submit
          </button>

          <button
            type="button"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </form>

      <div className="hasil">
        <h3>Hasil</h3>

        <p>
          <strong>Nama :</strong> {hasil.nama}
        </p>

        <p>
          <strong>Email :</strong> {hasil.email}
        </p>
      </div>
    </div>
  );
}

export default Form;