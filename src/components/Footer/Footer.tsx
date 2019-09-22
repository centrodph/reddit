import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAppVersion, selectRedditLoading } from "selectors";
import { getRedditPost } from "actions";
import { Sidebar, Content } from "components";

export function Footer({ version }: { version: number }) {
  return (
    <div className="footer">
      <a href="https://github.com/centrodph/reddit" target="_blank">
        GitHub - {version}
      </a>
    </div>
  );
}
