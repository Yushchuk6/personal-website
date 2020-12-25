import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ReactMarkdown from "react-markdown";
import "./EditPage.css";

function autoresize() {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
  this.scrollTop = this.scrollHeight;
  window.scrollTo(window.scrollLeft, this.scrollTop + this.scrollHeight);
}

function EditPage() {
  const [input, setInput] = useState();

  var resizingTextareas = [].slice.call(
    document.querySelectorAll("textarea[autoresize]")
  );

  resizingTextareas.forEach(function (textarea) {
    textarea.addEventListener("input", autoresize, false);
  });

  return (
    <div className="editpage">
      <div className="editpage-container container flexbox-center">
        <textarea
          autoresize="true"
          className="edit-text content-container"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
        <ReactMarkdown source={input} className="markdown content-container" />
      </div>
    </div>
  );
}

export default EditPage;
