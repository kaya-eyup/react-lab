export default function ErrorMessage({ message }: { message: string }) {
  return (
    <div
      role="alert"
      style={{
        padding: "1rem",
        backgroundColor: "#fee2e2",
        color: "#991b1b",
        borderRadius: "8px",
      }}
    >
      <strong>⚠️ Bir Sorun Oluştu:</strong>
      <p>{message}</p>
    </div>
  );
}
