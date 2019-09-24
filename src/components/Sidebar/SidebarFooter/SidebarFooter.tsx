import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { dismissRedditPost } from "actions";

interface SidebarFooterProps {
  comments: number;
  id: string;
}

export function SidebarFooter({ comments, id }: SidebarFooterProps) {
  const dispatch = useDispatch();
  const onDismiss = useCallback(
    (e: React.MouseEvent<Element>) => {
      e.stopPropagation();
      dispatch(dismissRedditPost(id));
    },
    [id]
  );
  return (
    <div className="sidebar-item-footer">
      <div className="sidebar-item-footer__comments">
        <button className='btn-dismiss' onClick={onDismiss}><div>Dismiss</div></button>
      </div>
      <div className="sidebar-item-footer__comments">{`${comments} comments`}</div>
    </div>
  );
}
