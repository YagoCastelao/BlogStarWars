import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { type, id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch(`https://www.swapi.tech/api/${type}/${id}`);
      setDetails((await res.json()).result);
    };

    fetchDetails();
  }, [type, id]);

  if (!details) return <p>Carregando...</p>;

  return (
    <div className="container mt-4">
      <h1>{details.properties.name}</h1>
      <img
        src={`https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`}
        alt={details.properties.name}
        className="img-fluid"
      />
      <p>{details.description || "Descrição não disponível."}</p>
    </div>
  );
};

export default Details;
