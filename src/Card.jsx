import React from "react";

const Card = ({ imageUrl, title, content, date, onPreview }) => {
  return (
    <div className="relative w-auto bg-[#F0F1FA] rounded-lg overflow-hidden hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <figure className="w-full h-48">
        <img
          className="w-full h-full object-cover rounded-lg shadow-sm overflow-hidden"
          src={imageUrl}
          alt={title}
        />
      </figure>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2 line-clamp-1">{title}</h2>
        <p className="text-gray-600 mb-4 line-clamp-1">{content}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{date}</span>
          <button
            onClick={() => onPreview({ imageUrl, title, content, date })}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
