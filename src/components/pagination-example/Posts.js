import React, { useState } from "react";
import Pagination from "./Pagination";

function Posts(props) {
  const { posts } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      {posts.map((data, index) => (
        <div className="list" key={index}>
          <p>{data.title}</p>
        </div>
      ))}
      <Pagination
        postsPerPage={10}
        length={posts.length}
        currentPage={currentPage}
        handlePagination={handlePagination}
      />
    </>
  );
}

export default Posts;
