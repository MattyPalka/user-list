import React, { useState } from "react";

const Search = () => {
  const [value, setValue] = useState("");
  return (
    <input
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};

export default Search;
