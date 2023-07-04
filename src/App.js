import React, { useState } from 'react';

function TempConverter() {
  const [celcius, setCelcius] = useState('');
  const [reamur, setReamur] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [kelvin, setKelvin] = useState('');
  const [rankine, setRankine] = useState('');

  const handleCelciusChange = (e) => {
    setCelcius(e.target.value);
  };

  const handleReamurChange = (e) => {
    setReamur(e.target.value);
  };

  const handleFahrenheitChange = (e) => {
    setFahrenheit(e.target.value);
  };

  const handleKelvinChange = (e) => {
    setKelvin(e.target.value);
  };

  const handleRankineChange = (e) => {
    setRankine(e.target.value);
  };

  const convertCelciusToRe_F_K_Ra = () => {
    const reamur = (celcius * 0.8).toFixed(2);
    const fahrenheit = (celcius * 1.8 + 32).toFixed(2);
    const kelvin = (celcius + 273.15).toFixed(2);
    const rankine = (celcius * 1.8 + 32 + 459.67).toFixed(2);

    setReamur(reamur);
    setFahrenheit(fahrenheit);
    setKelvin(kelvin);
    setRankine(rankine);
  };

  const convertReamurToC_F_K_Ra = () => {
    const celcius = (reamur * 1.25).toFixed(2);
    const fahrenheit = (reamur * 2.25 + 32).toFixed(2);
    const kelvin = (reamur * 1.25 + 273.15).toFixed(2);
    const rankine = (reamur * 2.25 + 32 + 459.67).toFixed(2);

    setCelcius(celcius);
    setFahrenheit(fahrenheit);
    setKelvin(kelvin);
    setRankine(rankine);
  };

  const convertFahrenheitToC_Re_K_Ra = () => {
    const celcius = ((fahrenheit - 32) / 1.8).toFixed(2);
    const reamur = ((fahrenheit - 32) / 2.25).toFixed(2);
    const kelvin = ((fahrenheit - 32) / 1.8 + 273.15).toFixed(2);
    const rankine = (fahrenheit + 459.67).toFixed(2);

    setCelcius(celcius);
    setReamur(reamur);
    setKelvin(kelvin);
    setRankine(rankine);
  };

  return (
    <div>
      <div className="text-4xl font-bold text-center p-4 m-2">
        <h1 id="header">TempConverter</h1>
      </div>
      <hr />
      <div>
        <p className="text-center mb-5 mt-5">Convert Any Temperatures Type Here!</p>
      </div>
      <hr className="mb-2" />
      <div>
        <ul className="grid gap-5 grid-cols-5 text-center p-4 text-2xl">
          <li className="text-white font-bold bg-blue-500 border-2 p-2 rounded-full border-solid border-blue-500">Celcius</li>
          <li className="text-white font-bold bg-red-500 border-2 p-2 rounded-full border-solid border-red-500">Réaumur</li>
          <li className="text-white font-bold bg-green-500 border-2 p-2 rounded-full border-solid border-green-500">Fahrenheit</li>
          <li className="text-white font-bold bg-orange-300 border-2 p-2 rounded-full border-solid border-orange-300">Kelvin</li>
          <li className="text-white font-bold bg-purple-500 border-2 p-2 rounded-full border-solid border-purple-500">Rankine</li>
        </ul>
      </div>
      <div>
        <ul>
          <form className="grid gap-5 grid-cols-5 text-center">
            <div className="flex justify-center">
              <div className="text-center">
                <input className="text-center border-2 border-blue-500 py-2 rounded-full" type="number" step="any" id="celciusInput" placeholder="Click Here..." value="" /><span className="font-bold"> °C</span>
                <input onClick={this.convertCelciusToRe_F_K_Ra} id="convertCelcius" type="button" value="Convert" className="hover:font-bold bg-blue-100/80 border-2 px-4 py-2 m-2 rounded-full hover:bg-blue-500 hover:text-white hover:ease duration-500 hover:border-blue-600 hover:px-5" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-center">
                <input className="text-center border-2 border-red-500 py-2 rounded-full" type="number" step="any" id="reamurInput" placeholder="Click Here..." value="" /><span className="font-bold"> °Re</span>
                <input onClick={this.convertReamurToC_F_K_Ra} id="convertReamur" type="button" value="Convert" className="hover:font-bold bg-red-100/80 border-2 px-4 py-2 m-2 rounded-full hover:bg-red-500 hover:text-white hover:ease duration-500 hover:border-red-600 hover:px-5" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-center">
                <input className="text-center border-2 border-green-500 py-2 rounded-full" type="number" step="any" id="fahrenheitInput" placeholder="Click Here..." value="" /><span className="font-bold"> °F</span>
                <input onClick={this.convertFahrenheitToC_Re_K_Ra} id="convertFahrenheit" type="button" value="Convert" className="hover:font-bold bg-green-100/80 border-2 px-4 py-2 m-2 rounded-full hover:bg-green-500 hover:text-white hover:ease duration-500 hover:border-green-600 hover:px-5" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-center">
                <input className="text-center border-2 border-orange-300 py-2 rounded-full" type="number" step="any" id="kelvinInput" placeholder="Click Here..." value="" /><span className="font-bold"> K</span>
                <input onClick={this.convertKelvinToC_Re_F_Ra} id="convertKelvin" type="button" value="Convert" className="hover:font-bold bg-orange-100/80 border-2 px-4 py-2 m-2 rounded-full hover:bg-orange-300 hover:text-white hover:ease duration-500 hover:border-orange-400 hover:px-5" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-center">
                <input className="text-center border-2 border-purple-500 py-2 rounded-full" type="number" step="any" id="rankineInput" placeholder="Click Here..." value="" /><span className="font-bold"> °Ra</span>
                <input onClick={this.convertRankineToC_Re_F_K} id="convertRankine" type="button" value="Convert" className="hover:font-bold bg-purple-100/80 border-2 px-4 py-2 m-2 rounded-full hover:bg-purple-500 hover:text-white hover:ease duration-500 hover:border-purple-600 hover:px-5" />
              </div>
            </div>
          </form>
        </ul>
      </div>
      <div className="text-center mt-20">
        <input onClick={this.reset} id="reset" type="submit" value="Reset All" className="hover:font-bold bg-red-100/80 border-2 px-4 py-2 rounded-full hover:bg-red-500 hover:text-white hover:ease duration-500 hover:border-red-300 hover:border-red-400 hover:px-20" />
      </div>
    </div>
  );
}

export default TempConverter;