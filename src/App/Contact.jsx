import React from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  return (
    <div className="contact">
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>Contact</h1>
      <p>
        Aliquam iaculis a nisi sed ornare. Sed venenatis tellus vel consequat
        congue. In bibendum vestibulum orci et feugiat.
      </p>
    </div>
  );
}

export default Contact;
