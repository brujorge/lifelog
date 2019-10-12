import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";

import PostItem from "./PostItem";
import styles from "./styles.module.css";

const PostList = () => {
  const [searchParam, setSearchParam] = useState("");
  const [posts, setPosts] = useState([]);
  const [initialPosts, setInitialPosts] = useState([]);
  useEffect(() => {
    const requestPosts = async () => {
      const response = await fetch("/api/posts");
      const { data } = await response.json();
      setInitialPosts(data);
      setPosts(data);
    };
    requestPosts();
  }, []);

  useEffect(() => {
    const filterPosts = () => {
      if (searchParam === "") {
        setPosts(initialPosts);
        return;
      }
      const filteredPosts = initialPosts.filter(post =>
        post.attributes.body.includes(searchParam)
      );
      setPosts(filteredPosts);
    };
    filterPosts();
  }, [searchParam]);

  const handleChange = event => {
    setSearchParam(event.target.value);
  };
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Link to="/add" className={styles.newPostButton}>
          New post
        </Link>
        <input
          name="searchParam"
          value={searchParam}
          onChange={handleChange}
          className={styles.searchInput}
          placeholder="Search..."
        />
      </header>
      <ul className={styles.postList}>
        {posts.map(post => (
          // Make attributes camelCase
          <PostItem
            key={post.attributes["created-at"]}
            body={post.attributes.body}
          />
        ))}
      </ul>
    </div>
  );
};

export default PostList;
