import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} inline className="searchBox  my-2">
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products..."
        variant="outline-dark"
        className="mr-sm-2 ml-sm-5 search"
      ></Form.Control>
      <Button
        type="submit"
        variant="outline-dark"
        className="p-2 ml-2 searchButton"
      >
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
