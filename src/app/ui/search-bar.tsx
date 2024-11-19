import { useState } from "react";

export default function SearchBar({ search, onChange }) {
  return (
    <div>
      <input
        type="search"
        placeholder="Search"
        value={search}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
