import React from "react";
import { NavLink } from "react-router-dom";

const MainMenu = () => (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Inazuma Eleven App</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
      <a class="nav-link"><NavLink exact to="/">Home</NavLink></a>
      </li>
      <li class="nav-item">
      <a class="nav-link"><NavLink exact to="/personajes">Personajes</NavLink></a>
      </li>
      <li class="nav-item">
      <a class="nav-link"><NavLink exact to="/contacto">Contacto</NavLink></a>
      </li>
    </ul>
  </div>
</nav>
)

export default MainMenu;
