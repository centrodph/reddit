import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAppVersion } from "selectors";
import { getRedditPost } from "actions";

export function Sidebar() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRedditPost());
  }, []);
  return <div className="sidebar">sidebar</div>;
}
