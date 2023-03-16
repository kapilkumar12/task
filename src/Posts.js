import React, { useEffect, useState } from "react";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await fetch("https://dummyjson.com/posts", {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
      },
    });

    setPosts(await response.json());
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row p-4 ">
          {posts.map((element) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12 shadow-lg p-3 mb-5 bg-white rounded">
                <div className=" d-flex gap-4">
                  <div className="">
                    <h3>{element.title}</h3>
                    <p>{element.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Posts;
