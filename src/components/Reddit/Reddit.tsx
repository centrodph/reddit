import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAppVersion } from "selectors";
import { getRedditPost } from "actions";

export function Reddit() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Reddit");
    dispatch(getRedditPost())
  }, []);
  return <div className="App">clean app</div>;
}
