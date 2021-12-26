import React from "react";
import "./Companies.scss";
import CompanyCard from "./CompanyCard";
import disneyLogo from "../../../assets/imgs/logos/viewers-disney.png";
import marvelLogo from "../../../assets/imgs/logos/viewers-marvel.png";
import ngLogo from "../../../assets/imgs/logos/viewers-ng.png";
import pixarLogo from "../../../assets/imgs/logos/viewers-pixar.png";
import starwarsLogo from "../../../assets/imgs/logos/viewers-starwars.png";
import disney from "../../../assets/videos/disney.mp4";
import marvel from "../../../assets/videos/marvel.mp4";
import ng from "../../../assets/videos/ng.mp4";
import pixar from "../../../assets/videos/pixar.mp4";
import starwars from "../../../assets/videos/starwars.mp4";

const Companies = () => {
  return (
    <section className="section-companies companies">
      <CompanyCard logo={disneyLogo} video={disney} />
      <CompanyCard logo={marvelLogo} video={marvel} />
      <CompanyCard logo={ngLogo} video={ng} />
      <CompanyCard logo={pixarLogo} video={pixar} />
      <CompanyCard logo={starwarsLogo} video={starwars} />
    </section>
  );
};

export default Companies;