import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {

  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try{
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/articles`);
        const data = await response.json();

        if (response.ok){
          setArticles(data);
        }
      }catch(err){
        console.log("error ftching artcls")
      }
    };

    fetchArticles();
  }, [])


  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-5xl font-bold text-center text-blue-500">
        Welcome to the MindBou
      </h1>
      <p className="text-center text-gray-400 mt-4">
        Discover and share amazing articles with the world.
      </p>
      <div className="flex justify-center gap-4 mt-8">
        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
        >
          Start Reading
        </Link>
        <Link
          to="/write"
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-lg border border-gray-700 transition-colors"
        >
          Write Article
        </Link>
      </div>

      {/* Articles List */}
      <div className="mt-16 mb-10">
        <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-2">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* මෙතනට තමයි අපි අර ලිපි ටික දාන්නේ */}
          {articles.map((article) => (
            <div
              key={article._id}
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors flex flex-col justify-between"
            >
              <div>
                {/*Category එක වෙනුවට අපි ලියපු කෙනාගේ (Author) නම පෙන්නනවා*/}
                <span className="text-blue-400 text-sm font-semibold">{article.author?.name}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{article.title}</h3>

                <p className="text-gray-400 text-sm mb-4">
                  {article.content ? article.content.substring(0, 60): ""}...
                </p>

              <Link
                to={`/article/${article._id}`}
                className="text-blue-500 hover:text-blue-400 text-sm font-bold mt-4 inline-block"
              >
                Read More →
              </Link>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;