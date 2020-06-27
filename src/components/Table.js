import React from "react";
import {Row, Col} from "reactstrap"

const Table = (props) => {

  const getRow1 = () => {
    let chairs = []
    for (var i = 0; i < Math.ceil(props.chair / 2); i ++){
      chairs.push(
        <span
          key={i}
          className={props.empty ? "empty-table" : "full-table"}
        >

        </span>
      )
    }
    return chairs
  }

  const getRow2 = () => {
    let chairs2 = []
    for (var i = 0; i < Math.floor(props.chair / 2); i ++){
      chairs2.push(
        <span
          key={i}
          className={props.empty ? "empty-table" : "full-table"}
        >

        </span>
      )
    }
    return chairs2
  }

  return (
    <div className="table-container">
      <Col
      className={props.empty ? "table selectable-table" : "table"}
      onClick={() => {
        props.empty ? 
        props.selectTable(props.name, props.id)
        : console.log("tried to select full table")
      }}
      >
      
      </Col>
      <p>Table</p>
    </div>
  );
};

export default Table;
