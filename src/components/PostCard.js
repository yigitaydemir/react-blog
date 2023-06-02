import React from "react";
import { Card, Button } from "flowbite-react";

const PostCard = ({id, title, body}) => {
  return (
    <Card className="max-w-sm m-2">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>{title}</p>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <p>
          {body}
        </p>
      </p>
      <Button>
        <p>Read more</p>
      </Button>
    </Card>
  );
};

export default PostCard;
