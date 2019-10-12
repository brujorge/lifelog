import React from "react";

import styles from "./styles.module.css";

const PostItem = ({ body }) => (
  <article className={styles.postItem}>{body}</article>
);

export default PostItem;
