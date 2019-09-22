import React from "react";

export function Footer({ version }: { version: number }) {
  return (
    <div className="footer">
      <a href="https://github.com/centrodph/reddit" target="_blank">
        GitHub - {version}
      </a>
    </div>
  );
}
