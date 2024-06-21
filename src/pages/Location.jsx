import React from "react";
import { useParams, Navigate } from "react-router-dom";
import logements from "../datas/logements.json";
import Slideshow from "../components/Slideshow";
import Tag from "../components/Tag";
import Collapse from "../components/Collapse";

const Location = () => {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    return <Navigate to="/error-404" />;
  }

  const splitName = (name) => {
    const words = name.split(" ");
    const middleIndex = Math.floor(words.length / 2);
    const firstLine = words.slice(0, middleIndex).join(" ");
    const secondLine = words.slice(middleIndex).join(" ");
    return [firstLine, secondLine];
  };

  const [firstLine, secondLine] = splitName(logement.host.name);

  return (
    <div className="location-content">
      <Slideshow images={logement.pictures} />
      <div className="location-details">
        <div className="title-info">
          <div className="title-section">
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
            <div className="tags">
              {logement.tags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>
          </div>
        </div>
        <div className="host-info">
          <div className="host">
            <span>
              {firstLine}
              <br />
              {secondLine}
            </span>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
          <div className="rating">
            {Array.from({ length: 5 }, (_, i) => (
              <span
                key={i}
                className={i < logement.rating ? "filled-star" : ""}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="information">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>
        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
};

export default Location;
