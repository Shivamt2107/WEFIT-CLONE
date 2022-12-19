
import { Box, Button, Checkbox, Input } from "@chakra-ui/react";

import { Button, Checkbox, Input } from "@chakra-ui/react";

import React from "react";
import "./Filters.scss";
import { useState } from "react";
const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  return (

    <Box
      justify="center"
      align="center"
      // border="1px solid black"
      width="35%"
    >
      <div className="app__search-container">
        <div className="app__search" style={{ marginTop: "2rem" }}>
          <Input
            className="app__search-input"
            size={["sm", "sm", "md", "md"]}
            placeholder="Search Exercises By Names"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button
            onClick={() => onSearch(query)}
            variant="outline"
            size={["sm", "sm", "md", "md"]}
          >
            Search
          </Button>
        </div>
      </div>
    </Box>

    <div className="app__search-container">
      <div className="app__checkbox" style={{marginTop:"2rem"}}>
        <Checkbox
          value="bodyPart"
          colorScheme="green"
          className="app__check-input"
        >
          Body Parts
        </Checkbox>
        <Checkbox
          value="target"
          className="app__check-input"
          colorScheme="green"
        >
          Target Muscles
        </Checkbox>
        <Checkbox
          value="equipment"
          className="app__check-input"
          colorScheme="green"
        >
          Equipments
        </Checkbox>
      </div>
      <div className="app__search"  style={{marginTop:"2rem"}}>
        <Input
          className="app__search-input"
          size={["sm", "sm", "md", "md"]}
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          onClick={() => onSearch(query)}
          variant="outline"
          size={["sm", "sm", "md", "md"]}
        >
          Search
        </Button>
      </div>
    </div>

  );
};

export default Search;
