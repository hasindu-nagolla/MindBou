import React from "react";

const Write = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6">
      {/* Publish බොත්තම (දකුණු පැත්තට වෙන්න තියෙනවා) */}
      <div className="flex justify-end mb-8">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors cursor-pointer">
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
        />

        {/* ලිපිය ලියන තැන */}
        <textarea
          placeholder="Tell your story..."
          className="text-xl bg-transparent outline-none text-gray-300 placeholder-gray-600 min-h-[500px] resize-none mt-4 leading-relaxed"
        ></textarea>
      </form>
    </div>
  );
};

export default Write;
