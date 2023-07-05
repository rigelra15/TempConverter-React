import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [celciusInput, setCelciusInput] = useState("")
  const [reamurInput, setReamurInput] = useState("")
  const [fahrenheitInput, setFahrenheitInput] = useState("")
  const [kelvinInput, setKelvinInput] = useState("")
  const [rankineInput, setRankineInput] = useState("")

  function convertCelciusToRe_F_K_Ra() {
    var celciusElement = document.getElementById("celciusInput").value;
    if (celciusElement === "") {
        document.getElementById("celciusInput").value = celciusElement;
    }
    // ============================================
    
    var reamurElement = document.getElementById("reamurInput").value;
    if (reamurElement === "" || reamurElement !== "") {
        var CelciusToReamur = parseFloat(celciusElement) * 4 / 5;
        document.getElementById("reamurInput").value = CelciusToReamur;
    }
    
    var fahrenheitElement = document.getElementById("fahrenheitInput").value;
    if (fahrenheitElement === "" || fahrenheitElement !== "") {
        var CelciusToFahrenheit = (parseFloat(celciusElement) * 9 / 5) + 32;
        document.getElementById("fahrenheitInput").value = CelciusToFahrenheit;
    }
    
    var kelvinElement = document.getElementById("kelvinInput").value;
    if (kelvinElement === "" || kelvinElement !== "") {
        var CelciusToKelvin = parseFloat(celciusElement) + 273.15;
        document.getElementById("kelvinInput").value = CelciusToKelvin;
        document.getElementById("convertKelvin").style.display = "none";
    }
    
    var rankineElement = document.getElementById("rankineInput").value;
    if (rankineElement === "" || rankineElement !== "") {
        var CelciusToRankine = (parseFloat(celciusElement) + 273.15) * 9 / 5;
        document.getElementById("rankineInput").value = CelciusToRankine;
        document.getElementById("convertRankine").style.display = "none";
    }
  }

  function convertReamurToC_F_K_Ra() {
    var reamurElement = document.getElementById("reamurInput").value;
    if (reamurElement === "") {
        document.getElementById("reamurInput").value = reamurElement;
    }
    // ============================================

    var celciusElement = document.getElementById("celciusInput").value;
    if (celciusElement === "" || celciusElement !== "") {
        var ReamurToCelcius = parseFloat(reamurElement) * 5 / 4;
        document.getElementById("celciusInput").value = ReamurToCelcius;
    }

    var fahrenheitElement = document.getElementById("fahrenheitInput").value;
    if (fahrenheitElement === "" || fahrenheitElement !== "") {
        var ReamurToFahrenheit = (parseFloat(reamurElement) * 9 / 4) + 32;
        document.getElementById("fahrenheitInput").value = ReamurToFahrenheit;
    }

    var kelvinElement = document.getElementById("kelvinInput").value;
    if (kelvinElement === "" || kelvinElement !== "") {
        var ReamurToKelvin = (parseFloat(reamurElement) * 5 / 4) + 273.15;
        document.getElementById("kelvinInput").value = ReamurToKelvin;
    }

    var rankineElement = document.getElementById("rankineInput").value;
    if (rankineElement === "" || rankineElement !== "") {
        var ReamurToRankine = (parseFloat(reamurElement) * 9 / 4) + 491.67;
        document.getElementById("rankineInput").value = ReamurToRankine;
    }
  }

  function convertFahrenheitToC_Re_K_Ra() {
    var fahrenheitElement = document.getElementById("fahrenheitInput").value;
    if (fahrenheitElement === "") {
        document.getElementById("fahrenheitInput").value = fahrenheitElement;
    }
    // ============================================
    
    var celciusElement = document.getElementById("celciusInput").value;
    if (celciusElement === "" || celciusElement !== "") {
        var FahrenheitToCelcius = (parseFloat(fahrenheitElement) - 32) * 5/9;
        document.getElementById("celciusInput").value = FahrenheitToCelcius;
    }

    var reamurElement = document.getElementById("reamurInput").value;
    if (reamurElement === "" || reamurElement !== "") {
        var FahrenheitToReamur = (parseFloat(fahrenheitElement) - 32) * 4/9;
        document.getElementById("reamurInput").value = FahrenheitToReamur;
    }

    var kelvinElement = document.getElementById("kelvinInput").value;
    if (kelvinElement === "" || kelvinElement !== "") {
        var FahrenheitToKelvin = (parseFloat(fahrenheitElement) + 459.67) * 5/9;
        document.getElementById("kelvinInput").value = FahrenheitToKelvin;
    }

    var rankineElement = document.getElementById("rankineInput").value;
    if (rankineElement === "" || rankineElement !== "") {
        var FahrenheitToRankine = parseFloat(fahrenheitElement) + 459.67;
        document.getElementById("rankineInput").value = FahrenheitToRankine;
    }
  }

  function convertKelvinToC_Re_F_Ra() {
    var kelvinElement = document.getElementById("kelvinInput").value;
    if (kelvinElement === "") {
        document.getElementById("kelvinInput").value = kelvinElement;
    }
    // ============================================
    
    var celciusElement = document.getElementById("celciusInput").value;
    if (celciusElement === "" || celciusElement !== "") {
        var KelvinToCelcius = (parseFloat(kelvinElement) - 273.15);
        document.getElementById("celciusInput").value = KelvinToCelcius;
    }
    
    var reamurElement = document.getElementById("reamurInput").value;
    if (reamurElement === "" || reamurElement !== "") {
        var KelvinToReamur = (parseFloat(kelvinElement) - 273.15) * 4/5;
        document.getElementById("reamurInput").value = KelvinToReamur;
    }
    
    var fahrenheitElement = document.getElementById("fahrenheitInput").value;
    if (fahrenheitElement === "" || fahrenheitElement !== "") {
        var KelvinToFahrenheit = (parseFloat(kelvinElement) * 9/5) - 459.67;
        document.getElementById("fahrenheitInput").value = KelvinToFahrenheit;
    }

    var rankineElement = document.getElementById("rankineInput").value;
    if (rankineElement === "" || rankineElement !== "") {
        var KelvinToRankine = parseFloat(kelvinElement) * 9/5;
        document.getElementById("rankineInput").value = KelvinToRankine;
    }
  }

  function convertRankineToC_Re_F_K() {
    var rankineElement = document.getElementById("rankineInput").value;
    if (rankineElement === "") {
        document.getElementById("rankineInput").value = rankineElement;
    }
    // ============================================
    
    var celciusElement = document.getElementById("celciusInput").value;
    if (celciusElement === "" || celciusElement !== "") {
        var RankineToCelcius = (parseFloat(rankineElement) - 491.67) * 5/9;
        document.getElementById("celciusInput").value = RankineToCelcius;
    }
    
    var reamurElement = document.getElementById("reamurInput").value;
    if (reamurElement === "" || reamurElement !== "") {
        var RankineToReamur = (parseFloat(rankineElement) - 491.67) * 4/9;
        document.getElementById("reamurInput").value = RankineToReamur;
    }
    
    var fahrenheitElement = document.getElementById("fahrenheitInput").value;
    if (fahrenheitElement === "" || fahrenheitElement !== "") {
        var RankineToFahrenheit = parseFloat(rankineElement) - 459.67;
        document.getElementById("fahrenheitInput").value = RankineToFahrenheit;
    }
    
    var kelvinElement = document.getElementById("kelvinInput").value;
    if (kelvinElement === "" || kelvinElement !== "") {
        var RankineToKelvin = parseFloat(rankineElement) * 5/9;
        document.getElementById("kelvinInput").value = RankineToKelvin;
    }
    
  }

  function reset() {
    alert("Do you want to reset all?");

    document.getElementById("celciusInput").value = "";
    document.getElementById("reamurInput").value = "";
    document.getElementById("fahrenheitInput").value = "";
    document.getElementById("kelvinInput").value = "";
    document.getElementById("rankineInput").value = "";

    document.getElementById("convertCelcius").style.display = "inline-block";
    document.getElementById("convertReamur").style.display = "inline-block";
    document.getElementById("convertFahrenheit").style.display = "inline-block";
    document.getElementById("convertKelvin").style.display = "inline-block";
    document.getElementById("convertRankine").style.display = "inline-block";

    document.getElementById("celciusInput").placeholder = "Click Here...";
    document.getElementById("reamurInput").placeholder = "Click Here...";
    document.getElementById("fahrenheitInput").placeholder = "Click Here...";
    document.getElementById("kelvinInput").placeholder = "Click Here...";
    document.getElementById("rankineInput").placeholder = "Click Here...";
  }
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
                  <input onClick={convertCelciusToRe_F_K_Ra} id="convertCelcius" type="button" value="Convert" className="hover:font-bold bg-blue-100/80 border-2 px-4 py-2 m-2 rounded-full hover:bg-blue-500 hover:text-white hover:ease duration-500 hover:border-blue-600 hover:px-5" />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="text-center">
                  <input className="text-center border-2 border-red-500 py-2 rounded-full" type="number" step="any" id="reamurInput" placeholder="Click Here..." value="" /><span className="font-bold"> °Re</span>
                  <input onClick={convertReamurToC_F_K_Ra} id="convertReamur" type="button" value="Convert" className="hover:font-bold bg-red-100/80 border-2 px-4 py-2 m-2 rounded-full hover:bg-red-500 hover:text-white hover:ease duration-500 hover:border-red-600 hover:px-5" />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="text-center">
                  <input className="text-center border-2 border-green-500 py-2 rounded-full" type="number" step="any" id="fahrenheitInput" placeholder="Click Here..." value="" /><span className="font-bold"> °F</span>
                  <input onClick={convertFahrenheitToC_Re_K_Ra} id="convertFahrenheit" type="button" value="Convert" className="hover:font-bold bg-green-100/80 border-2 px-4 py-2 m-2 rounded-full hover:bg-green-500 hover:text-white hover:ease duration-500 hover:border-green-600 hover:px-5" />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="text-center">
                  <input className="text-center border-2 border-orange-300 py-2 rounded-full" type="number" step="any" id="kelvinInput" placeholder="Click Here..." value="" /><span className="font-bold"> K</span>
                  <input onClick={convertKelvinToC_Re_F_Ra} id="convertKelvin" type="button" value="Convert" className="hover:font-bold bg-orange-100/80 border-2 px-4 py-2 m-2 rounded-full hover:bg-orange-300 hover:text-white hover:ease duration-500 hover:border-orange-400 hover:px-5" />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="text-center">
                  <input className="text-center border-2 border-purple-500 py-2 rounded-full" type="number" step="any" id="rankineInput" placeholder="Click Here..." value="" /><span className="font-bold"> °Ra</span>
                  <input onClick={convertRankineToC_Re_F_K} id="convertRankine" type="button" value="Convert" className="hover:font-bold bg-purple-100/80 border-2 px-4 py-2 m-2 rounded-full hover:bg-purple-500 hover:text-white hover:ease duration-500 hover:border-purple-600 hover:px-5" />
                </div>
              </div>
            </form>
          </ul>
        </div>
        <div className="text-center mt-20">
          <input onClick={reset} id="reset" type="submit" value="Reset All" className="hover:font-bold bg-red-100/80 border-2 px-4 py-2 rounded-full hover:bg-red-500 hover:text-white hover:ease duration-500 hover:border-red-300 hover:border-red-400 hover:px-20" />
        </div>
      </div>
  );
}

export default App;

// import React, { useState } from 'react';

// function App() {
//   const [input, setInput] = useState('');
//   const [result, setResult] = useState('');

//   const handleInputChange = (e) => {
//     setInput(e.target.value);
//   };

//   const handleConvertCelcius = () => {
//     setResult(`Converting ${input} Celcius...`);
//     // Add your conversion logic for Celcius here
//   };

//   const handleConvertReamur = () => {
//     setResult(`Converting ${input} Reamur...`);
//     // Add your conversion logic for Reamur here
//   };

//   const handleConvertFahrenheit = () => {
//     setResult(`Converting ${input} Fahrenheit...`);
//     // Add your conversion logic for Fahrenheit here
//   };

//   const handleConvertKelvin = () => {
//     setResult(`Converting ${input} Kelvin...`);
//     // Add your conversion logic for Kelvin here
//   };

//   const handleConvertRankine = () => {
//     setResult(`Converting ${input} Rankine...`);
//     // Add your conversion logic for Rankine here
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={input}
//         onChange={handleInputChange}
//         placeholder="Input Temperature"
//       />
//       <button onClick={handleConvertCelcius}>Convert to Celcius</button>
//       <button onClick={handleConvertReamur}>Convert to Reamur</button>
//       <button onClick={handleConvertFahrenheit}>Convert to Fahrenheit</button>
//       <button onClick={handleConvertKelvin}>Convert to Kelvin</button>
//       <button onClick={handleConvertRankine}>Convert to Rankine</button>
//       <p>{result}</p>
//     </div>
//   );
// }

// export default App;
