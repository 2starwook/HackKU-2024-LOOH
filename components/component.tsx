"use client";

import "../app/globals.css";

import React, { useEffect, useState } from "react";

function Component() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5328/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => {
        setMessage(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setMessage("Error fetching data");
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl">Welcome!</h1>
      <div dangerouslySetInnerHTML={{ __html: message }}></div>
    </div>
  );
}

export default Component;
