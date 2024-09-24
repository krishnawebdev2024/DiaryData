import React, { useState } from "react";

const StoreDataForm = ({ onClose }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10)); // Default to today's date

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing diary data from localStorage
    const existingData = JSON.parse(localStorage.getItem("diaryData")) || [];

    // Create new entry object
    const newEntry = {
      imageUrl,
      title,
      content,
      date, // Include date in the entry
    };

    // Add new entry to existing data
    const updatedData = [...existingData, newEntry];

    // Store updated data back in localStorage
    localStorage.setItem("diaryData", JSON.stringify(updatedData));

    // Clear form fields after submission
    setImageUrl("");
    setTitle("");
    setContent("");
    setDate(new Date().toISOString().slice(0, 10)); // Reset date to today

    //alert("Data saved successfully!");
    //refreshData();
    //onClose(); // Close the form after submission
    //window.location.reload();
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Add New Diary Entry</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="imageUrl"
          >
            Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter image URL"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter title"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="content"
          >
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter content"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="date"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Save Entry
        </button>
        <button
          onClick={() => {
            onClose(); // Call the close function to hide the form
            window.location.reload(); // Reload the page
          }}
          className="w-full mt-2 bg-slate-400 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Close
        </button>
      </form>
    </div>
  );
};

export default StoreDataForm;
