import React, { useState } from "react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6">
      {/* උඩින්ම තියෙන Profile විස්තර */}
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* පින්තූරය (Avatar) */}
        <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-md">
          JD
        </div>

        {/* නම සහ විස්තර */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold text-white mb-2">John Doe</h1>
          <p className="text-gray-400 mb-4">
            Passionate writer and technology enthusiast. I love sharing my
            thoughts on web development and design.
          </p>
          <button
            onClick={() => setIsEditing(true)}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-lg transition-colors border border-gray-600 cursor-pointer"
          >
            Edit Profile
          </button>
        </div>
      </div>

      {/* එයා ලියපු ලිපි පෙන්නන තැන */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
          My Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* මේවා පස්සේ Database එකෙන් එන විදිහට හදමු, දැනට නිකන් කොටු 2ක් දාමු */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-gray-500 transition-colors cursor-pointer">
            <h3 className="text-xl font-bold text-white mb-2">
              How to learn React
            </h3>
            <p className="text-gray-400 text-sm">Published on May 20, 2026</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-gray-500 transition-colors cursor-pointer">
            <h3 className="text-xl font-bold text-white mb-2">
              Tailwind vs CSS
            </h3>
            <p className="text-gray-400 text-sm">Published on May 22, 2026</p>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal එක */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-gray-700 p-8 rounded-xl w-full max-w-md shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">Edit Profile</h2>

            <form className="flex flex-col gap-4">
              <div>
                <label className="block text-gray-400 text-sm mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue="John Doe"
                  className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg outline-none border border-gray-700 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-1">Bio</label>
                <textarea
                  defaultValue="Passionate writer..."
                  className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg outline-none border border-gray-700 focus:border-blue-500 h-24 resize-none"
                ></textarea>
              </div>

              <div className="flex gap-4 mt-4">
                {/* මේ බොත්තම එබුවම State එක ආයෙත් false වෙලා Popup එක වැහෙනවා */}
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 rounded-lg transition-colors cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition-colors cursor-pointer"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
