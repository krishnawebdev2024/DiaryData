import React from "react";

const PreviewModal = ({ cardData, onClose }) => {
  if (!cardData) return null; // Don't render if there's no card data

  return (
    <div className="fixed rounded-lg inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="relative bg-white p-8 rounded-lg max-w-6xl w-full shadow-lg max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className=" absolute top-4 right-4 p-2  rounded-lg  shadow-2xl bg-slate-600 text-white  hover:text-white hover:bg-red-500  text-2xl"
        >
          Close
        </button>

        {/* Card Content */}
        <figure>
          <img
            className="w-full min-h-10 object-cover rounded-lg"
            src={cardData.imageUrl}
            alt={cardData.title}
          />
        </figure>
        <div className="mt-4">
          <h2 className="text-2xl font-bold">{cardData.title}</h2>
          <p className="mt-2 text-gray-600">{cardData.content}</p>
          <p className="mt-2 text-gray-500">Date: {cardData.date}</p>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
