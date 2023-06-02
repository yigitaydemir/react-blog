import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";

const Posts = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="p-4 flex flex-wrap justify-center w-full m-auto">
        {posts?.map((post) => (
            <PostCard id={post.id} title={post.title} body={post.body}></PostCard>
        ))}
    </div>
  )
};

export default Posts;