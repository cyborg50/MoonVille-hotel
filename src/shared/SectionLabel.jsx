import { T } from "../../theme";

export default function SectionLabel({ title, subtitle }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
      <h2 style={{ fontFamily: T.serif }}>{title}</h2>
      <p style={{ color: T.goldDim }}>{subtitle}</p>
    </div>
  );
}