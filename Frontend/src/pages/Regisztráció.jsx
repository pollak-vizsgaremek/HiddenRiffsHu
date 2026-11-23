import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Regisztáció() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  //TODO: TÖRÖLD KI MAJD
  function submit() {
    console.log(username, "username");
    console.log(password, "password");
    console.log(email, "email");

    toast("Sikeres regisztáció", {
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
    <>
      <div>
        <div className="navbar"></div>
        <h3>Regisztráció</h3>
        <input
          id="username"
          type="text"
          placeholder="felhasználónév"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          id="email"
          type="text"
          placeholder="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id="password"
          type="text"
          placeholder="jelszó"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={submit}>
          Regisztráció
        </button>
      </div>
      <ToastContainer />
    </>
  );
}
