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
        공통 컴포넌트 수정 빌드 테스트
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
