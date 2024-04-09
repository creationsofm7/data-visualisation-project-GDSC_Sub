'use client';

import React from "react";
import * as d3 from "d3";
import { geoPath, geoAlbersUsa } from "d3-geo";
import { useEffect, useRef } from "react";

function Maps() {
  const ref = useRef();

  useEffect(() => {
    const projection = geoAlbersUsa();
    const path = geoPath().projection(projection);

    d3.csv("/us.csv").then((us) => {
      const svg = d3.select(ref.current);
      svg
        .append("g")
        .selectAll("path")
        .data(us.features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("class", "state");
    });
  }, []);

  return (
    <div>
      <svg width={960} height={600} ></svg>
    </div>
  );
}

export default Maps;
