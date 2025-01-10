import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

const Home = () => {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    const fetchData = async () => {
      const [peopleRes, planetsRes, vehiclesRes] = await Promise.all([
        fetch("https://www.swapi.tech/api/people"),
        fetch("https://www.swapi.tech/api/planets"),
        fetch("https://www.swapi.tech/api/vehicles"),
      ]);

      setPeople((await peopleRes.json()).results);
      setPlanets((await planetsRes.json()).results);
      setVehicles((await vehiclesRes.json()).results);
    };

    fetchData();
  }, []);

  const isFavorite = (item) => {
    return favorites.some((fav) => fav.uid === item.uid);
  };

  const renderCards = (items, type) =>
    items.map((item) => (
      <div
        className="card m-3"
        style={{
          width: "18rem",
          borderRadius: "15px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        }}
        key={item.uid}
      >
        <img
          src={`https://starwars-visualguide.com/assets/img/${
            type === "people" ? "characters" : type
          }/${item.uid}.jpg`}
          className="card-img-top"
          alt={item.name}
          style={{ borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}
        />
        <div
          className="card-body text-center"
          style={{ backgroundColor: "#1e1e1e", color: "white" }}
        >
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">
            {item.species || "Sem descrição disponível."}
          </p>
          <div className="d-flex justify-content-center">
            <Link
              to={`/details/${type === "people" ? "people" : type}/${item.uid}`}
              className="btn btn-primary me-2"
            >
              Ler mais
            </Link>
            <button
              className={`btn ${
                isFavorite(item) ? "btn-danger" : "btn-outline-danger"
              }`}
              onClick={() => toggleFavorite(item)}
            >
              ❤️
            </button>
          </div>
        </div>
      </div>
    ));

  return (
    <div className="container mt-5 pb-">
      <h2 className="text-center text-white">Personagens</h2>
      <div className="d-flex flex-wrap justify-content-center pt-4">
        {renderCards(people, "people")}
      </div>
      <h2 className="text-center text-white mt-5">Planetas</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {renderCards(planets, "planets")}
      </div>
      <h2 className="text-center text-white mt-5">Veículos</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {renderCards(vehicles, "vehicles")}
      </div>
    </div>
  );
};

export default Home;
