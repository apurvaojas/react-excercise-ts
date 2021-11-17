import React from "react";


export default function Item(props: {character: {[key: string]: string}}) {
  const {
    character: { image, name, species, gender, origin, status, id }
  } = props;
  return (
    
      <li>{name}</li>
  );
}
