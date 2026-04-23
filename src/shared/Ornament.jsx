import { T } from "../../theme";

export default function Ornament() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{ flex: 1, height: "1px", background: T.goldBorder }} />
      ✦
      <div style={{ flex: 1, height: "1px", background: T.goldBorder }} />
    </div>
  );
}