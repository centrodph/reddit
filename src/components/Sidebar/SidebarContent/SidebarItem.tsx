import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectIsVisited } from "selectors";
import { RootState } from "models";
import { unixTimestampToDate } from "utils";

interface SidebarHeaderProps {
  author: string;
  time: number;
  id: string;
}

export function SidebarHeader({ author, time, id }: SidebarHeaderProps) {
  const visited = useSelector((state: RootState) => selectIsVisited(state, id));
  const date = useMemo(() => unixTimestampToDate(time), [time]);
  return (
    <div className="sidebar-item-header">
      <div
        className={`sidebar-item-header__viewed ${visited ? "visited" : "new"}`}
      ></div>
      <div className="sidebar-item-header__author">{author}</div>
      <div className="sidebar-item-header__time">{date}</div>
    </div>
  );
}
