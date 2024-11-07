import React, { useState } from 'react';

const BodyMass = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [error, setError] = useState('');

  const calcBmi = () => {
    if (!height || !weight || isNaN(height) || isNaN(weight)) {
      setError('Please use valid value.');
      setBmi(null);
      return;
    }

    const heightInMeters = height / 100;
    const calculatedBmi = weight / (heightInMeters * heightInMeters);
    setBmi(calculatedBmi.toFixed(2));
    setError('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h1 className="text-3xl font-bold text-center text-purple-500 mb-6">BMI Calculator</h1>

       
        <div className="mb-4">
          <label htmlFor="height" className="block text-sm font-semibold text-gray-700">Height (cm):</label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your height"
          />
        </div>

       
        <div className="mb-4">
          <label htmlFor="weight" className="block text-sm font-semibold text-gray-700">Weight (kg):</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your weight"
          />
        </div>

       
        <button
          onClick={calcBmi}
          className="w-full py-2 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-700 transition duration-300"
        >
          Calculate
        </button>

      
        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

       
        {bmi && (
          <div className="mt-6 text-center">
            <h2 className="text-2xl font-semibold text-purple-500">BMI: {bmi}</h2>
            <p className="text-lg text-gray-700">
              {bmi < 18.5
                ? 'UnderWeight'
                : bmi < 24.9
                ? 'Healty'
                : bmi < 29.9
                ? 'OverWeight'
                : 'Obese'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BodyMass;
