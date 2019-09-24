import React from "react";
import { useSelector } from "react-redux";
import { selectActive } from "selectors";

export function Content() {
  const post = useSelector(selectActive);
  if (!post)
    return (
      <div className="content">
        <h1>Select content</h1>
      </div>
    );
  const {
    data: { title, thumbnail }
  } = post;
  return (
    <div className="content">
      <h1>{title}</h1>
      {thumbnail && (
        <img
          src={thumbnail}
          alt=""
          style={{ maxWidth: "100%", margin: "1rem" }}
        />
      )}
    </div>
  );
}
