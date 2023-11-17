import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post/Post";
import Suggestions from "./Suggestions";
import "./Timeline.css";

const getRandomImage = () => {
  return axios.get("https://source.unsplash.com/random");
};

function Timeline() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUnsplashData = async () => {
      try {
        const unsplashData = await Promise.all([
          getRandomImage(),
          getRandomImage(),
          getRandomImage(),
          getRandomImage(),
        ]);

        const newPosts = unsplashData.map((response) => ({
          user: "unsplash_user",
          postImage: response.request.responseURL,
          likes: Math.floor(Math.random() * 100),
          timestamp: "2d",
        }));

        setPosts(newPosts);
      } catch (error) {
        console.error("Error fetching Unsplash data", error);
      }
    };

    fetchUnsplashData();
  }, []);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post, index) => (
            <Post
              key={index}
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
