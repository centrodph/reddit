import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRedditList } from "selectors";
import { SidebarItem } from "./SidebarItem/SidebarItem";

export function Sidebar() {
  const dispatch = useDispatch();
  const list = useSelector(selectRedditList);

  return (
    <div className="sidebar">
      <div className="sidebar__scroll">
        {list.map((item, key) => (
          <SidebarItem item={item} key={key} />
        ))}
      </div>
    </div>
  );
}
