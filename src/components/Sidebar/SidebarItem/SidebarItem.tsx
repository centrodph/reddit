import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRedditList } from "selectors";
import { RedditPost } from "models";
import { SidebarHeader } from "../SidebarHeader/SidebarHeader";

export function SidebarItem({ item }: { item: RedditPost }) {
  const {
    data: { author, created_utc }
  } = item;

  return (
    <div className="sidebar-item">
      <SidebarHeader author={item.data.author} time={created_utc} />
    </div>
  );
}
