import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRedditList } from "selectors";
import { RedditPost } from "models";
import { SidebarHeader } from "../SidebarHeader/SidebarHeader";
import { viewRedditPost } from "actions";

export function SidebarItem({ item }: { item: RedditPost }) {
  const {
    data: { author, created_utc }
  } = item;
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(viewRedditPost(item));
  }

  return (
    <div
      className="sidebar-item"
      role="button"
      tabIndex={0}
      onClick={handleClick}
    >
      <SidebarHeader author={item.data.author} time={created_utc} />
    </div>
  );
}
