import React from "react";
import LatestNews from "../components/latestNews/LatestNews";
import Launches from "../components/launches";

function Home() {
  return (
    <React.Fragment>
      <div className="latestNews">
        <LatestNews />
      </div>
      <div className="launches">
        <Launches />
      </div>
    </React.Fragment>
  );
}

export default Home;
