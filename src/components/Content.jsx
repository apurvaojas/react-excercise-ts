import React from "react";
import Item from "./Item";

export default function Content(props) {
  return (
    <div className="row">
      {props.characters.map((char, idx) => (
        <div className="col-sm-6 col-md-4" key={char.id} >
          <Item character={char} />
        </div>
      ))}
    </div>
  );
}
