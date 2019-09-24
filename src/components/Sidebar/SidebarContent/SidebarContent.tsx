import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectIsVisited } from "selectors";
import { RootState } from "models";
import { unixTimestampToDate } from "utils";

interface SidebarContentProps {
  title: string;
  thumb: string;
}

export function SidebarContent({ title, thumb }: SidebarContentProps) {
  return (
    <div className="sidebar-item-content">
      {thumb && (
        <div className="sidebar-item-content__thumb">
          <img src={thumb} />
        </div>
      )}

      <div className="sidebar-item-content__title">
        <h3>{title}</h3>
      </div>
    </div>
  );
}
