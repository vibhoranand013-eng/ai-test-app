"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [file, setFile] = useState(null);
  const router = useRouter();

  const fakeUpload = async () => {
    const questions = [
      {
        chapter: "Electrostatics",
        question: "SI unit of electric field is?",
        options: ["N/C", "J/C", "V", "C/N"],
        answer: "A",
        solution: "Electric field = Force/Charge, so unit is N/C"
      }
    ];
    localStorage.setItem("questions", JSON.stringify(questions));
    router.push("/test");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Upload Question PDF</h1>
      <input type="file" />
      <br /><br />
      <button onClick={fakeUpload}>Generate Test</button>
    </div>
  );
                         }
