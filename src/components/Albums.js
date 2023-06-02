import React, { useEffect, useState } from "react";
import AlbumCard from "./AlbumCard";

const Albums = () => {
  const [albums, setAlbums] = useState()

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((response) => response.json())
      .then((data) => setAlbums(data));
  });

  return (
    <div className="p-4 flex flex-wrap justify-center w-full m-auto">
      {albums?.map((album) => (
        <AlbumCard id={album.id} url={album.thumbnailUrl} title={album.title}></AlbumCard>
      ))}
    </div>
  )
};

export default Albums;
