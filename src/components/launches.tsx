import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";
import { useEffect } from "react";
import { fetchLaunches, selectAllLaunches } from "../store/launchesSlice";
import { Launche } from "../models/launches";
import spaceRocket from "../assets/spaceRocket.png";

function Launches() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchLaunches());
  }, []);

  const launcheList: [] = useSelector(selectAllLaunches);

  console.log(launcheList);

  const renderedNews = launcheList?.map((launch: Launche) => (
    <div key={launch.id} className="launche">
      <img src={launch.links.patch.small || spaceRocket} alt="" />
      <div>
        <h3>{launch.name}</h3>
        <p>Launched on {new Date(launch.date_unix * 1000).toDateString()}</p>

        {/* <a href={launch.links.article}><i>More info about {launch.name}</i></a> */}
      </div>
    </div>
  ));

  return (
    <div>
      <h1>Follow the launches!</h1>
      {renderedNews}
    </div>
  );
}

export default Launches;
