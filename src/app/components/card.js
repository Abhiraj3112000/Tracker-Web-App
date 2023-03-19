"use client"; // marks this component as a client component

import React, { useState } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import "../styles.css";

//common styles
const styleDashedRadius = {
  border: "3px dashed #000",
  borderRadius: "5px",
};

//specific styles
const styleMainGrid = {
  ...styleDashedRadius,
  margin: "10px",
  padding: "0",
};
const styleCardHeader = ({ isExpanded } = { isExpanded: false }) => {
  return {
    backgroundColor: "#BBD6B8",
    padding: "10px",
    transition: isExpanded === false && "border-radius 1s ease",
    borderRadius: isExpanded ? "5px 5px 0 0" : "5px",
  };
};
const styleCardFooter = ({ isExpanded } = { isExpanded: false }) => {
  return {
    height: isExpanded ? "200px" : "0",
    transition: "height 0.3s ease",
    borderRadius: "0 0 5px 5px",
    backgroundColor: "#94AF9F",
    overflow: "scroll",
  };
};

//card component
function Card(props) {
  const [expanded, setExpanded] = useState(false);
  const handleMouseEnter = () => {
    setExpanded(true);
  };

  const handleMouseLeave = () => {
    setExpanded(false);
  };
  return (
    <Grid onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Col xs={12} style={styleMainGrid}>
        <Col xs={12} style={styleCardHeader({ isExpanded: expanded })}>
          <Row center="xs">{props.title}</Row>
        </Col>
        <Col
          className="scrollable-container"
          center="xs"
          xs={12}
          style={styleCardFooter({ isExpanded: expanded })}
        >
          <Row center="xs">{props.description}</Row>
        </Col>
      </Col>
    </Grid>
  );
}

export default Card;
