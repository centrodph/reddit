import React from "react";

interface SidebarHeaderProps {
  author: string;
  time: number;
}

export function SidebarHeader({ author, time }: SidebarHeaderProps) {
  return (
    <div className="sidebar-item-header">
      <div className="sidebar-item-header__author">{author}</div>
      <div className="sidebar-item-header__time">{time}</div>
    </div>
  );
}
