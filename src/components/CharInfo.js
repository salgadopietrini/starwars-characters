import React from "react";

export default function CharInfo({ info }) {
  return (
    <div className="modalDiv">
      <div>Height: {info.height} cm</div>
      <div>Mass: {info.mass} kg</div>
      <div>Birthyear: {info.birth_year}</div>
    </div>
  );
}
