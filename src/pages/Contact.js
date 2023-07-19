import React from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Contact Page</h1>
      <p>
        Welcome to the tutorial! We'll be building a small, but feature-rich app
        that lets you keep track of your contacts. We expect it to take between
        30-60m if you're following along.
      </p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home Page
      </button>
    </>
  );
}
