import React from "react";
import { navigate } from "@reach/router";
import { Formik, Field, Form } from "formik";

const PostForm = () => {
  const handleSubmit = values => {
    const submitPost = async () => {
      const csrfToken = document.querySelector("meta[name=csrf-token]").content;
      const response = await fetch("/api/posts", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/vnd.api+json",
          "X-CSRF-Token": csrfToken
        },
        body: JSON.stringify({
          data: {
            type: "posts",
            attributes: {
              body: values.body
            }
          }
        })
      });
      if (response.status === 201) {
        navigate("/");
      }
    };
    submitPost();
  };

  return (
    <section>
      <h2>New post</h2>
      <Formik
        initialValues={{ body: "" }}
        onSubmit={handleSubmit}
        render={() => (
          <Form>
            <Field type="text" name="body" />
            <button type="submit">Save</button>
          </Form>
        )}
      />
    </section>
  );
};

export default PostForm;
