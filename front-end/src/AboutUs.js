import { useEffect, useState } from "react";

const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5002";

export default function AboutUs() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE}/about`)
      .then((r) => r.json())
      .then(setData)
      .catch((e) => console.error("About fetch failed:", e));
  }, []);

  if (!data) return <p>Loading…</p>;

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", lineHeight: 1.6 }}>
      <h1>About Us</h1>
      <img
        src={data.imageUrl}          // resolves to the FRONT-END host: /Alex.jpg
        alt={data.name}
        width="500"
        style={{ display: "block", margin: "16px auto", borderRadius: 12 }}
      />
      <h3>{data.name}</h3>
      <p style={{ marginTop: 0, color: "#666" }}>{data.title}</p>
      {data.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
    </div>
  );
}
