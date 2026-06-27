import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ArticleView = () => {
  const { id } = useParams();
  
  // State
  const [article, setArticle] = useState<any>(null);

  // පිටුව ලෝඩ් වෙද්දී Backend එකෙන් ලිපිය අරන් එනවා
  useEffect(() => {
    const fetchSingleArticle = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/articles/${id}`);
        const data = await response.json();

        if (response.ok) {
          setArticle(data);
        }
      } catch (err) {
        console.error("Error fetching article");
      }
    };

    fetchSingleArticle();
  }, [id]);

  // ඩේටාබේස් එකෙන් ඩේටා එනකම් මේක පෙන්නනවා
  if (!article) {
    return <div className="text-white text-center mt-20 text-2xl font-bold">Loading Article... ⏳</div>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-gray-800 rounded-lg">
      <h1 className="text-4xl font-bold text-white mb-4">
        {/* මෙතනින් ඇත්ත මාතෘකාව එනවා */}
        {article.title}
      </h1>

      <div className="flex items-center gap-4 text-gray-400 text-sm mb-8 border-b border-gray-700 pb-4">
        {/* මෙතනින් ලිව්ව කෙනාගේ ඇත්ත නම එනවා */}
        <span>By {article.author?.username || 'Unknown Author'}</span>
        <span>•</span>
        {/* මෙතනින් ඇත්ත දිනය එනවා */}
        <span>{new Date(article.createdAt).toLocaleDateString()}</span>
      </div>

      <div className="text-gray-300 leading-relaxed space-y-4">
        {/* මෙතනින් ඇත්ත අන්තර්ගතය එනවා. (whitespace-pre-wrap දැම්මම Enter ඔබපු තැන්වල ඡේද හැදෙනවා) */}
        <p className="whitespace-pre-wrap">{article.content}</p>
      </div>
    </div>
  );
};

export default ArticleView;
