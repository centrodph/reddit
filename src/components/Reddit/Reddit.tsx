import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAppVersion, selectRedditLoading } from "selectors";
import { getRedditPost } from "actions";
import { Sidebar, Content } from "components";

export function Reddit() {
  const dispatch = useDispatch();
  const loading = useSelector(selectRedditLoading);
  useEffect(() => {
    dispatch(getRedditPost());
  }, []);
  return (
    <div className="reddit-main">
      {loading && "loading"}
      <Sidebar />
      <Content />
    </div>
  );
}
