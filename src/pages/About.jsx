import React from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import aboutUsList from "../datas/about-us-list.json";

const About = () => {
  return (
    <>
      <Banner
        image="/images/montains.png"
        overlayOpacity={0.3}
        alt="Image des montagnes"
      />
      <div className="collapse-container">
        {aboutUsList.map(item => (
          <Collapse
            key={item.id}
            title={item.title}
            content={item.content}
            aria-label={`Informations sur ${item.title}`}
          />
        ))}
      </div>
    </>
  );
};

export default About;
