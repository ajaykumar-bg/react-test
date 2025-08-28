import React, { useState, useEffect } from "react";
import "./PaginationExample.css";
import Posts from "./Posts";

function PaginationExample() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  console.log("posts", posts);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Posts posts={posts} />
    </>
  );
}

export default PaginationExample;
