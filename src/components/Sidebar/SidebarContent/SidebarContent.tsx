import React from "react";

interface SidebarContentProps {
  title: string;
  thumb: string;
}

export function SidebarContent({ title, thumb }: SidebarContentProps) {
  return (
    <div className="sidebar-item-content">
      {thumb && (
        <div className="sidebar-item-content__thumb">
          <img src={thumb} alt={title} />
        </div>
      )}

      <div className="sidebar-item-content__title">
        <h3>{title}</h3>
      </div>
    </div>
  );
}
