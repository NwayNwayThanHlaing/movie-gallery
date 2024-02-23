"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // data fetch
    fetch("http://localhost:3001/")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
      });
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <p>Message: {message}</p>
    </div>
  );
}
