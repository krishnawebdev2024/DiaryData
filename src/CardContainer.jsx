import React, { useState, useEffect } from "react";
import Card from "./Card";
import PreviewModal from "./PreviewModal";

export const CardContainer = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null); // Store the selected card for preview

  const fetchData = () => {
    const response = localStorage.getItem("diaryData");
    if (response) {
      setFetchedData(JSON.parse(response));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePreview = (cardData) => {
    setSelectedCard(cardData); // Set the card data to preview
  };

  const handleClosePreview = () => {
    setSelectedCard(null); // Close the modal by clearing selected card
  };

  return (
    <div>
      <div className="flex mt-4 justify-center  max-w-screen-2xl mx-auto rounded-lg  ring-inset mb-4">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
          {fetchedData.map((data, index) => (
            <Card
              key={index}
              imageUrl={data.imageUrl}
              title={data.title}
              content={data.content}
              date={data.date}
              onPreview={handlePreview} // Pass the preview handler to the card
            />
          ))}
        </div>
      </div>

      {/* Render the PreviewModal component when a card is selected */}
      {selectedCard && (
        <PreviewModal cardData={selectedCard} onClose={handleClosePreview} />
      )}
    </div>
  );
};
