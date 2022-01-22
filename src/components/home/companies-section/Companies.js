import React from "react";
import "./Companies.scss";
import CompanyCard from "./CompanyCard";
import {
  disneyLogo,
  marvelLogo,
  ngLogo,
  pixarLogo,
  starwarsLogo,
  disney,
  marvel,
  ng,
  pixar,
  starwars,
} from "./companiesImports";

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
