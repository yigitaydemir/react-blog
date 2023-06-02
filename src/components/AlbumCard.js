import React from "react";
import { Card } from "flowbite-react";

const AlbumCard = ({id, title, url}) => {
  return (
    <Card
      imgAlt="#"
      imgSrc={url}
      className="max-w-sm m-2"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>{title}</p>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </p>
    </Card>
  );
};

export default AlbumCard;
