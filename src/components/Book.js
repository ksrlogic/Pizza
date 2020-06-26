import React, { useState } from "react";
import {
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DromdownItem,
  Input,
  Button,
} from "reactstrap";

import Table from "./Table";

const Book = () => {
  const [totalTables, setTotalTables] = useState([]);

  // User's Selections
  const [selections, setSelections] = useState({
    table: {
      name: null,
      id: null,
    },
    date: new Date(),
    time: null,
    location: "Any Location",
    size: 0,
  });

  // User's booking Default

  const [booking, setBooking] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [locations] = useState(["Any Location", "Patio", "Inside", "Bar"]);
  const [times] = useState([
    "9AM",
    "10AM",
    "11AM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
  ]);

  //Basic reservation "validation"

  const [reservationError, setReservationError] = useState(falsecdo);

  const getDate = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const date =
      months[selection.date.getMonth()] +
      " " +
      selection.date.getDate() +
      " " +
      selection.date.getFullYear();

    let time = selection.time > 12 ? time + 12 + ":00" : time + ":00";
    console.log(time);
    const datetime = new Date(date + " " + time);
    return datetime;
  };

  const getEmptyTables = (_) => {
    let tables = totalTables.filter((table) => table.isAvailable);
    return tables.length;
  };
  return (
    <div>
      <p>Bookign Page</p>
      <Table />
    </div>
  );
};

export default Book;
