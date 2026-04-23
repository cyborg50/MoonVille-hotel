import { useState } from "react";
import { T } from "../../theme";

export default function GhostBtn({ children, onClick }) {
  const [hover, setHover] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        border: `0.5px solid ${hover ? T.gold : T.goldBorder}`,
        color: hover ? T.goldLight : T.gold,
        background: hover ? "rgba(210,185,140,0.1)" : "transparent",
        padding: "10px 25px",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}