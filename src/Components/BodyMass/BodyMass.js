import React, { useState } from 'react';

const BodyMass = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [error, setError] = useState('');

  const calcBmi = () => {
    if (!height || !weight || isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      setError('Please enter valid height and weight values.');
      setBmi(null);
      return;
    }

   
    const heightInMeters = height / 100;
    const calculatedBmi = weight / (heightInMeters * heightInMeters);
    setBmi(calculatedBmi.toFixed(2));
    setError('');
  };

 
  const getBmiStatus = () => {
    if (bmi < 18.5) return { text: 'Underweight', color: 'text-blue-500' };
    if (bmi < 24.9) return { text: 'Healthy', color: 'text-green-500' };
    if (bmi < 29.9) return { text: 'Overweight', color: 'text-yellow-500' };
    return { text: 'Obese', color: 'text-red-500' };
  };
  return (
   
    <div className="mx-auto container bg-white p-8 rounded-lg w-full sm:w-[90%] lg:w-[70%] shadow-lg flex gap-8">
    <div className="flex-1">
      <h1 className="text-4xl font-bold text-center text-purple-500 mb-4">BMI Categories</h1>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-purple-100">
            <th className="p-2 border-b text-2xl font-semibold text-purple-500">BMI Range</th>
            <th className="p-2 border-b text-2xl font-semibold text-purple-500">Category</th>
            <th className="p-2 border-b text-2xl font-semibold text-purple-500">Health Risk</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          <tr className="hover:bg-gray-100 ">
            <td className="p-2 border-b">Under 18.5</td>
            <td className="p-2 border-b">Underweight</td>
            <td className="p-2 border-b">Low</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="p-2 border-b">18.5 - 24.9</td>
            <td className="p-2 border-b">Normal weight</td>
            <td className="p-2 border-b">Average</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="p-2 border-b">25.0 - 29.9</td>
            <td className="p-2 border-b">Overweight</td>
            <td className="p-2 border-b">Moderate</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="p-2 border-b">30.0 and above</td>
            <td className="p-2 border-b">Obesity</td>
            <td className="p-2 border-b">High</td>
          </tr>
        </tbody>
      </table>
    </div>
  
   
    <div className="flex-1">
      <h1 className="text-4xl font-bold text-center text-purple-500 mb-6">BMI Calculator</h1>
  
      <div className="mb-4">
        <label htmlFor="height" className="block text-2xl font-semibold text-purple-500">Height (cm):</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-2/3 p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter your height"
        />
      </div>
      <div className="mb-4 ">
        <label htmlFor="weight" className="block text-2xl font-semibold text-purple-500">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-2/3  p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter your weight"
        />
      </div>
      <button
        onClick={calcBmi}
        className="w-2/3  text-2xl py-2 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-700 transition duration-300"
      >
        Calculate
      </button>
      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
      {bmi && (
        <div className="mt-6 text-center">
          <h2 className="text-2xl font-semibold text-purple-500">BMI: {bmi}</h2>
          <p className={`text-2xl mt-2 ${getBmiStatus().color}`}>{getBmiStatus().text}</p>
        </div>
      )}
    </div>
  </div>
  

  
  );
};

export default BodyMass;
