import React from "react";
import { useSelector } from "react-redux";
import { selectIsVisited } from "selectors";
import { RootState } from "models";

interface SidebarHeaderProps {
  author: string;
  time: number;
  id: string;
}

export function SidebarHeader({ author, time, id }: SidebarHeaderProps) {
  const visited = useSelector((state: RootState) => selectIsVisited(state, id));
  return (
    <div className="sidebar-item-header">
      <div className="sidebar-item-header__author">{author}</div>
      <div className="sidebar-item-header__time">{time}</div>
    </div>
  );
}
