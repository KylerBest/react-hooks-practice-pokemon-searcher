import React from "react";

function Search({setSearch}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" placeholder="Search for Pokemon" onChange={e => setSearch(e.target.value.toLowerCase())} />
      </div>
    </div>
  );
}

export default Search;
