import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAppVersion } from "selectors";
import { getRedditPost } from "actions";

export function Content() {
  
  return <div className="content">Content</div>;
}
