export default function Skeleton() {
  const boxes = Array.from({ length: 6 });
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {boxes.map((_, i) => (
        <li
          key={i}
          style={{
            height: "40px",
            background: "#ddd",
            marginBottom: "8px",
            borderRadius: "4px",
          }}
        />
      ))}
    </ul>
  );
}
