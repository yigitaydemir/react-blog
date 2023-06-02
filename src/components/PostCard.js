import React from "react";
import { Card, Button } from "flowbite-react";
import { Link } from "react-router-dom";

const PostCard = ({ id, title, body }) => {
  return (
    <Card className="max-w-sm m-2">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>{title}</p>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <p>{body}</p>
      </p>
      <Link to={`/${id}`} className="m-auto">
        <Button>
          <p>Read more</p>
        </Button>
      </Link>
    </Card>
  );
};

export default PostCard;
