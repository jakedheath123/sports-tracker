import React, { useEffect } from "react";
import { connect } from "react-redux";

import "./LaunchesList.css";
import { getLaunches } from "../../actions";
import LaunchesCard from "./LaunchesCard";
import Loader from "../Loader/Loader";

const Launches = ({ getLaunches, launchesList: { isLoading, launches } }) => {
  useEffect(() => {
    getLaunches();
  }, [getLaunches]);

  if (isLoading) return <Loader />;

  return (
    <main className="launches-container">
      <header className="launches-header">
        <h1>Launches</h1>
      </header>
      <aside className="launches-keys">
        <p>
          <i className="square icon" style={{ color: "green" }} /> = Success
        </p>
        <p>
          <i className="square icon" style={{ color: "red" }} /> = Fail
        </p>
      </aside>
      <section className="launches-card">
        {launches.map(launch => {
          return <LaunchesCard key={launch.flight_number} launch={launch} />;
        })}
      </section>
    </main>
  );
};

const mapStateToProps = state => {
  return {
    launchesList: state.launches
  };
};

export default connect(mapStateToProps, {
  getLaunches
})(Launches);
