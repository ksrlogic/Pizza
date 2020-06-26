import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Nav } from "reactstrap";

import Main from "./components/Main";
import Book from "./components/Book";
import Thankyou from "./components/Thankyou";

function App() {
  const [page, setPage] = useState(0);

  return (
    <>
      <Navbar setPage={setPage} />
      {page === 0 ? <Main setPage={setPage} /> : null}
      {page === 1 ? <Book setPage={setPage} /> : null}
      {page === 2 ? <Thankyou /> : null}
    </>
  );
}

export default App;
