import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button } from "flowbite-react";

const Post = () => {
  const params = useParams();
  const { id } = params;

  const [details, setDetails] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setDetails(data));

    console.log(details);
  }, []);

  return (
    <div>
      {
        <Card >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>{details && details["title"]}</p>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p>{ details && details["body"]}</p>
          </p>
          <Button color="warning">
            <p>Edit</p>
          </Button>

          <Button color="failure">
            <p>Delete</p>
          </Button>
        </Card>
      }
    </div>
  );
};

export default Post;
