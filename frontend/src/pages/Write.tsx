import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Write = () => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handlePublish = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (!title || !content) {
      alert("Plese write something before publishing...");
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/articles`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${auth?.token}`
        },
        body: JSON.stringify({ title, content }),
      });

      if (response.ok) {
        alert("Article Published Successfully! 🎉");
        navigate("/");
      } else {
        alert("Failed to publish article.");
      }
    } catch (err) {
      alert("server errror");
    }
  }



  return (
    <div className="max-w-4xl mx-auto mt-10 p-6">
      {/* Publish බොත්තම (දකුණු පැත්තට වෙන්න තියෙනවා) */}
      <div className="flex justify-end mb-8">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors cursor-pointer" onClick={handlePublish}>
          Publish Article
        </button>
      </div>

      <form className="flex flex-col gap-6">
        {/* මාතෘකාව ලියන තැන */}
        <input
          type="text"
          placeholder="Title..."
          className="text-5xl font-bold bg-transparent outline-none text-white placeholder-gray-600 border-l-4 border-transparent focus:border-gray-500 pl-4 transition-colors"
          autoFocus
          value={title} onChange={(e) => setTitle(e.target.value)}
        />

        {/* ලිපිය ලියන තැන */}
        <textarea
          placeholder="Tell your story..."
          className="text-xl bg-transparent outline-none text-gray-300 placeholder-gray-600 min-h-[500px] resize-none mt-4 leading-relaxed"
          value={content} onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </form>
    </div>
  );
};

export default Write;
