import React, { useState } from "react";
import Hero from './hero';

export default function App() {
  const [receiptImage, setReceiptImage] = useState(null);
  const [itemizedList, setItemizedList] = useState([]);

  const handleReceiptUpload = (event) => {
    // Implement OCR component to extract text from receipt image
    // and set the itemized list
    const text = "Example item 1 $10.00\nExample item 2 $20.00";
    setItemizedList(parseItemizedList(text));

    // Set the receipt image
    const file = event.target.files[0];
    setReceiptImage(URL.createObjectURL(file) as any);
  };

  const parseItemizedList = (text) => {
    // Split the text into lines
    const lines = text.trim().split("\n");

    // Parse each line into an object with the item name and price
    const items = lines.map((line) => {
      const [name, price] = line.trim().split(/\s+/);
      return { name, price: parseFloat(price) };
    });

    return items;
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Hero />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-4">Scan your receipt</h1>

        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="receipt">
            Upload a photo of your receipt
          </label>
          <div className="relative">
            <input
              className="opacity-0 absolute z-10 w-full h-full"
              type="file"
              accept="image/*"
              onChange={handleReceiptUpload}
            />
            <div className="bg-white border border-gray-300 rounded-md py-2 px-4 flex items-center justify-center">
              {receiptImage ? (
                <img src={receiptImage} alt="Receipt" className="h-40" />
              ) : (
                <span className="text-gray-400">
                  Drag and drop or click to upload
                </span>
              )}
            </div>
          </div>
        </div>

        {itemizedList.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-2">Itemized List</h2>
            <ul className="bg-white rounded-lg shadow-md divide-y divide-gray-200">
              {itemizedList.map((item: any) => (
                <li key={item.name} className="px-4 py-3">
                  <div className="flex justify-between items-center">
                    <div className="font-medium">{item.name}</div>
                    <div className="font-bold">${item.price.toFixed(2)}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <footer className="bg-white border-t border-gray-300 py-6"></footer>
  </div>
  );
 }
