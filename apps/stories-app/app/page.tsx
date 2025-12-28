export default function StoriesPage() {
  return (
    <div>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}>Stories App</h1>
      <p style={{ marginBottom: "10px" }}>이벤트와 스토리를 관리하는 독립 앱입니다.</p>
      <div
        style={{
          background: "#f0f0f0",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>🎉 현재 진행중인 이벤트1</h2>
        <ul style={{ listStyle: "disc", marginLeft: "20px" }}>
          <li>크리스마스 특별 할인</li>
          <li>신년맞이 이벤트</li>
          <li>겨울 브랜드 스토리</li>
        </ul>
      </div>
      <div style={{ marginTop: "20px" }}>
        <a
          href="/"
          style={{
            background: "#666",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          ← 홈으로 돌아가기
        </a>
      </div>
    </div>
  );
}
