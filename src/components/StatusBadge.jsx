export default function StatusBadge({ label, color }) {
  return (
    <span
      className="status-badge"
      style={{
        color,
        backgroundColor: `${color}14`,
      }}
    >
      {label}
    </span>
  );
}
