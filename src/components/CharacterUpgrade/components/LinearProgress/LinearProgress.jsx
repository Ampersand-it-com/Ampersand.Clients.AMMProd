export default function LinearProgress({ value }) {
  return (
    <div
      className="MuiLinearProgress-root"
      style={{
        width: "100%",
        height: "8px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${Math.min(Math.max(value, 0), 100)}%`,
          height: "100%",
          backgroundColor: "currentColor",
          transition: "width 0.2s ease",
        }}
      />
    </div>
  );
}
