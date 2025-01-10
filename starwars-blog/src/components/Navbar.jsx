import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

const Navbar = () => {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img
            src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG12.png"
            alt="Star Wars Logo"
            style={{ width: "140px", height: "auto" }}
          />
        </Link>
        <div className="dropdown">
          <button
            className="btn btn-warning dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favoritos ({favorites.length})
          </button>
          <ul className="dropdown-menu">
            {favorites.map((item) => (
              <li key={item.uid}>
                <span className="dropdown-item">
                  {item.name}
                  <button
                    className="btn btn-sm btn-danger ms-2"
                    onClick={() => toggleFavorite(item)}
                  >
                    ❌
                  </button>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
