import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function Zene_Felvétel() {
  const [nev, setNev] = useState("");
  const [banda, setBanda] = useState("");
  const [mufaj, setMufaj] = useState("");
  const [album, setAlbum] = useState("");

  function bekuld() {
    console.log(nev);
    console.log(banda);
    console.log(album);
    console.log(mufaj);

    toast("Sikeres beküldés!", {
      theme: "dark",
      closeButton: true,
      draggable: true,
      draggableDirection: "y",
      type: "success",
      style: {
        backgroundColor: "grey",
      },
    });
  }

  return (
    <div>
      <form action="">
        <h3>Zene Ajánlás</h3>
        <input
          id="nev"
          type="text"
          placeholder="Zene címe"
          required
          value={nev}
          onChange={(e) => setNev(e.target.value)}
        />
        <input
          id="banda"
          type="text"
          placeholder="Banda neve"
          required
          value={banda}
          onChange={(e) => setBanda(e.target.value)}
        />
        <input
          id="mufaj"
          type="text"
          placeholder="Műfaj"
          required
          value={mufaj}
          onChange={(e) => setMufaj(e.target.value)}
        />
        <input
          id="album"
          type="text"
          placeholder="Album neve"
          required
          value={album}
          onChange={(e) => setAlbum(e.target.value)}
        />
        <button type="button" onClick={bekuld}>
          Beküldés
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
