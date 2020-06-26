import React from "react";
import { Row, Col, Button } from "reactstrap";

const Main = (props) => {
  return (
    <>
      <Row noGutters className="text-center align-items-center pizza-cta">
        <Col>
          <p className="looking-for-pizza">
            If you're looking for great pizza
            <i className="fas fa-pizza-slice pizza-slice">{""}</i>
          </p>

          <Button
            color="none"
            className="book-table-btn"
            onClick={() => {
              props.setPage(1);
            }}
          >
            Book a Table
          </Button>
        </Col>
      </Row>
      <Row noGutters className="text-center big-img-container">
        <Col>
          <img
            src={require("../images/cafe.jpg")}
            alt="cafe"
            className="big-img"
          />
        </Col>
      </Row>
      <p>Main Page</p>
    </>
  );
};

export default Main;
