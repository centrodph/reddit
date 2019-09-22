import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAppVersion, selectRedditLoading } from "selectors";
import { getRedditPost } from "actions";
import { Sidebar, Content } from "components";

export function Header() {
  const dispatch = useDispatch();
  const loading = useSelector(selectRedditLoading);
  useEffect(() => {
    dispatch(getRedditPost());
  }, []);
  return (
    <div className="header">
        Reddit
    </div>
  );
}
