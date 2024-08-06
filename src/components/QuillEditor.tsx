import React, { useEffect, useRef } from "react";
import Quill from "quill";
import DOMPurify from "dompurify";
import "quill/dist/quill.snow.css";

interface QuillEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const QuillEditor: React.FC<QuillEditorProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<Quill | null>(null);

  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
        placeholder: placeholder || "Compose an epic...",
        modules: {
          toolbar: [
            [{ header: "1" }, { header: "2" }, { font: [] }],
            [{ list: "ordered" }, { list: "bullet" }],
            ["bold", "italic", "underline", "strike"],
            [{ color: [] }, { background: [] }],
            [{ script: "sub" }, { script: "super" }],
            [{ align: [] }],
            ["blockquote", "code-block"],
            ["link", "image", "video"],
            ["clean"],
          ],
        },
      });

      quillRef.current.on("text-change", () => {
        const html = quillRef.current!.root.innerHTML;
        const sanitizedHtml = DOMPurify.sanitize(html, {
          ALLOWED_TAGS: [
            "p",
            "br",
            "strong",
            "em",
            "u",
            "s",
            "h1",
            "h2",
            "ol",
            "ul",
            "li",
            "a",
            "img",
          ],
          ALLOWED_ATTR: ["href", "target", "src", "alt", "width", "height"],
        });
        onChange(sanitizedHtml);
      });

      // Sanitize initial value
      const sanitizedValue = DOMPurify.sanitize(value, {
        ALLOWED_TAGS: [
          "p",
          "br",
          "strong",
          "em",
          "u",
          "s",
          "h1",
          "h2",
          "ol",
          "ul",
          "li",
          "a",
          "img",
        ],
        ALLOWED_ATTR: ["href", "target", "src", "alt", "width", "height"],
      });
      quillRef.current.clipboard.dangerouslyPasteHTML(sanitizedValue);

      const quillContainer = editorRef.current.querySelector(".ql-container");
      if (quillContainer) {
        quillContainer.classList.add(
          "min-h-[300px]",
          "border",
          "border-gray-300",
          "rounded-lg",
          "p-4",
          "bg-white",
          "shadow-sm"
        );
      }

      const quillEditor = editorRef.current.querySelector(".ql-editor");
      if (quillEditor) {
        quillEditor.classList.add("min-h-[200px]", "prose", "max-w-none");
      }

      const toolbar = editorRef.current.querySelector(".ql-toolbar");
      if (toolbar) {
        toolbar.classList.add(
          "border",
          "border-gray-300",
          "rounded-t-lg",
          "bg-gray-50",
          "p-2"
        );
      }
    }
  }, [value, onChange, placeholder]);

  useEffect(() => {
    if (quillRef.current && quillRef.current.root.innerHTML !== value) {
      const sanitizedValue = DOMPurify.sanitize(value, {
        ALLOWED_TAGS: [
          "p",
          "br",
          "strong",
          "em",
          "u",
          "s",
          "h1",
          "h2",
          "ol",
          "ul",
          "li",
          "a",
          "img",
        ],
        ALLOWED_ATTR: ["href", "target", "src", "alt", "width", "height"],
      });
      quillRef.current.clipboard.dangerouslyPasteHTML(sanitizedValue);
    }
  }, [value]);

  return (
    <div className="quill-editor-wrapper">
      <style jsx global>{`
        .ql-editor img {
          display: inline-block;
          max-width: 100%;
          height: auto;
        }
        .ql-editor p {
          margin-bottom: 1em;
        }
      `}</style>
      <div className="quill-editor" ref={editorRef} />
    </div>
  );
};

export default QuillEditor;
