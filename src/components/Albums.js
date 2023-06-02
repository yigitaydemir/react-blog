import React, { useEffect } from "react";

const Albums = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((response) => response.json())
      .then((json) => console.log(json));
  });
  return <div>Albums</div>;
};

export default Albums;
