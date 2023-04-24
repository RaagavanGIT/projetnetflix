import React from "react";
import { useParams } from "react-router-dom";

function SearchResults() {
  const { searchQuery } = useParams();

  return (
    <div>
      <h1>Résultats de recherche pour "{searchQuery}"</h1>
    </div>
  );
}

export default SearchResults;
