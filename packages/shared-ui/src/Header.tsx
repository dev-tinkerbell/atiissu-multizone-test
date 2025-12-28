export function Header() {
  return (
    <header
      style={{
        background: "#333",
        color: "white",
        padding: "20px",
        marginBottom: "20px",
      }}
    >
      <nav style={{ display: "flex", gap: "20px" }}>
        <a href="/" style={{ color: "white" }}>
          홈
        </a>
        <a href="/stories" style={{ color: "white" }}>
          스토리
        </a>
      </nav>
    </header>
  );
}
