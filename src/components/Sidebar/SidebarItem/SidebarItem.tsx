import React from "react";
import { useDispatch } from "react-redux";
import { viewRedditPost } from "actions";
import { RedditPost } from "models";
import { SidebarHeader } from "../SidebarHeader/SidebarHeader";
import { SidebarFooter } from "../SidebarFooter/SidebarFooter";
import { SidebarContent } from "../SidebarContent/SidebarContent";

export function SidebarItem({ item }: { item: RedditPost }) {
  const {
    data: { author, created_utc, id, num_comments, thumbnail, title }
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
      <SidebarHeader author={author} time={created_utc} id={id} />
      <SidebarContent thumb={thumbnail} title={title}/>
      <SidebarFooter comments={num_comments} id={id} />
    </div>
  );
}
