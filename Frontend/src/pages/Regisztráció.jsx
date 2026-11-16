import React, { useState } from "react";

export default function Regisztáció() {
  

  return (
    <div>
      <h3>Regisztráció</h3>
      <input type="text" placeholder="felhasználónév" />
      <input type="text" placeholder="email" />
      <input type="text" placeholder="jelszó" />
      <button type="button">Regisztráció</button>
    </div>
  );
}
