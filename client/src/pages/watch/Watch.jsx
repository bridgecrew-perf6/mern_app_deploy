import { ArrowBackOutlined, MovieRounded } from '@material-ui/icons';
import React, { Component } from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function Watch() {
  const location = useLocation();
  const movie = location.state.movie;
  console.log(location);
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video
        src={movie.video}
        className="video"
        autoPlay
        progress
        controls
      ></video>
    </div>
  );
}

//export default Watch;
