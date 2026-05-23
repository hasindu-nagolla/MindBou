import React from "react";
import { useParams } from "react-router-dom";

const ArticleView = () => {
  const { id } = useParams();
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-gray-800 rounded-lg">
      <h1 className="text-4xl font-bold text-white mb-4">
        Reading Article: {id}
      </h1>

      <div className="flex items-center gap-4 text-gray-400 text-sm mb-8 border-b border-gray-700 pb-4">
        <span>By John Doe</span>
        <span>•</span>
        <span>May 23, 2026</span>
      </div>

      <div className="text-gray-300 leading-relaxed space-y-4">
        <p>
          This is a placeholder text for the article content. When we connect
          the backend, the real content will appear here.
        </p>
        <p>
          React and Tailwind make it so easy to build beautiful interfaces
          quickly. The combination of component-based architecture and
          utility-first CSS is extremely powerful.
        </p>
      </div>
    </div>
  );
};

export default ArticleView;
