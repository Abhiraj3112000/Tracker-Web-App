import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import Card from "./components/card.js";

//data contents
class CardContent {
  constructor(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
  }
}
let demoTitle = "Demo Title";
let demoDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet, consectetur adipiscing elit.  ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus eros nunc, eget rhoncus lorem sodales sed. Nullam volutpat lobortis leo, in tincidunt velit. Vestibulum vel malesuada justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus eros nunc, eget rhoncus lorem sodales sed. Nullam volutpat lobortis leo, in tincidunt velit. Vestibulum vel malesuada justo. ";
const cardContents = [
  new CardContent(1, demoTitle, demoDescription),
  new CardContent(2, demoTitle, demoDescription),
  new CardContent(3, demoTitle, demoDescription),
];

//styles
const styleMainGrid = {
  backgroundColor: "#D27685",
  minHeight: "100vh",
  width: "100%",
  margin: "0",
  padding: "0",
};
const styleColumn = ({color}={color:"#fff"}) => {
  return {
      maxWidth: "300px",
      backgroundColor: color,
      margin: "5px",
      minHeight: "80vh",
  };
};


//rendered app
export default function App() {
  return (
    <Grid style={styleMainGrid}>
      <Col xs={12}>
        <Row center="xs" xs={12}>
          <Col
            xs={12}
            sm={12}
            md={3}
            style={styleColumn({color:"#ABC270"})}
          >
            {cardContents.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                description={item.description}
              />
            ))}
          </Col>
          <Col
            xs={12}
            sm={12}
            md={3}
            style={styleColumn({color:"#898121"})}
          >
            {cardContents.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                description={item.description}
              />
            ))}
          </Col>
          <Col
            xs={12}
            sm={12}
            md={3}
            style={styleColumn({color:"#4C4B16"})}
          >
            {cardContents.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                description={item.description}
              />
            ))}
          </Col>
        </Row>
      </Col>
    </Grid>
  );
}
