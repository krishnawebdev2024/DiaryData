import React from "react";

const Preview = ({ data, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-3/4 max-w-2xl">
        <h2 className="text-xl font-bold mb-4">{data.title}</h2>
        <img
          src={data.imageUrl}
          alt={data.title}
          className="mb-4 w-full h-48 object-cover rounded-lg"
        />
        <p className="text-gray-600 mb-4">{data.content}</p>
        <p className="text-sm text-gray-500">Date: {data.date}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Preview;
