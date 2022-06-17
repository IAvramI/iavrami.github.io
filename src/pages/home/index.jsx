import React from "react";
import { SearchProvider } from "../../utils/contexts/searchContext";
import "./home.css";
import ImgGirl from "../../components/img_girl";
import Search from "../../components/search";
import DisplayText from "../../components/display_text";

const Home = () => {
  return (
    <SearchProvider>
      <div className="home">
        <div className="text">
          <h1 className="h1">Reach your website goals faster</h1>
          <p className="p1">
            Small businesses, ecommerce/retail, digital agencies, and education
            companies have been flocking to us since 2005. <br />
            <b> Find out why!</b>
          </p>
          <Search />
          <DisplayText />
        </div>
        <div>
          <ImgGirl />
        </div>
      </div>
    </SearchProvider>
  );
};

export default Home;
