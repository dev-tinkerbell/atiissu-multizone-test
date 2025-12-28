export default function HomePage() {
  return (
    <div>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}>Main App 홈페이지</h1>
      <p style={{ marginBottom: "10px" }}>Multi-zone 테스트 환경입니다.</p>
      <div style={{ marginTop: "20px" }}>
        <a
          href="/stories"
          style={{
            background: "#0070f3",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          스토리 보러가기 →1
        </a>
      </div>
    </div>
  );
}
