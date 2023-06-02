import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const params = useParams();
  const { id } = params;

  const [details, setDetails] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setDetails(data));

      console.log(details)
  }, []);

  return (
    <div>
    {Object.keys(details || {}).map((key) => (
      <p key={key}>
        {key}: {details[key]}
      </p>
    ))}
  </div>
  );
};

export default Post;
