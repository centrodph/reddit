import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewRedditPost, removeRedditPost } from "actions";
import { RedditPost, RootState } from "models";
import { selectDismissing } from "selectors";
import { SidebarHeader } from "../SidebarHeader/SidebarHeader";
import { SidebarFooter } from "../SidebarFooter/SidebarFooter";
import { SidebarContent } from "../SidebarContent/SidebarContent";

export function SidebarItem({ item }: { item: RedditPost }) {
  const {
    data: { author, created_utc, id, num_comments, thumbnail, title }
  } = item;

  const dismissing = useSelector((state: RootState) =>
    selectDismissing(state, id)
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (dismissing)
      setTimeout(() => {
        dispatch(removeRedditPost(id));
      }, 1000);
  }, [dismissing, id]);
  function handleClick(e: any) {
    if (e.key === "Enter" || e.key === undefined)
      dispatch(viewRedditPost(item));
  }

  return (
    <div
      className={`sidebar-item ${dismissing ? "slide-out" : ""}`}
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyPress={handleClick}
      style={{
        "--time": "0.8s",
      } as any}
    >
      <SidebarHeader author={author} time={created_utc} id={id} />
      <SidebarContent thumb={thumbnail} title={title} />
      <SidebarFooter comments={num_comments} id={id} />
    </div>
  );
}
