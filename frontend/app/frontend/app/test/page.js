"use client";
import { useEffect, useState } from "react";

export default function Test() {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const q = JSON.parse(localStorage.getItem("questions"));
    setQuestions(q || []);
  }, []);

  if (!questions.length) return <p>Loading...</p>;

  const q = questions[index];

  return (
    <div style={{ padding: 20 }}>
      <h2>{q.question}</h2>

      {q.options.map((o, i) => {
        const label = ["A","B","C","D"][i];
        let color = "lightgray";
        if (selected) {
          if (label === q.answer) color = "lightgreen";
          else if (label === selected) color = "salmon";
        }
        return (
          <button
            key={i}
            onClick={() => setSelected(label)}
            style={{ display: "block", margin: 10, background: color }}
          >
            {label}. {o}
          </button>
        );
      })}

      {selected && (
        <p><b>Solution:</b> {q.solution}</p>
      )}
    </div>
  );
  }
