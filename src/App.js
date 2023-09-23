import React, {useState} from "react";
import "./styles.css";
const someCalculatesValue = (functionName, count, handleClick) => {
	return(
		<div style={{
      backgroundColor: count > 5 ? "orange" : "transparent"
    }} className="function">
      <p>My {functionName}, count is {count}</p>
      <button onClick={() => handleClick(functionName)}>Update</button>
    </div>
	);
};

const OrdinaryFunction = ({ count, handleClick }) => {
  return someCalculatesValue("OrdinaryFunction", count, handleClick);
};

const CrazyFunction = ({ count, handleClick }) => {
  return someCalculatesValue("CrazyFunction", count, handleClick);
};

export default function App(){
  const [ordinaryFCount, setOrdinaryFCount] = useState(5);
  const [crazyFCount, setCrazyFCount] = useState(5);

  const resetCounts = () => {
    setOrdinaryFCount(5);
    setCrazyFCount(5);
  };

  const handleClick = (functionName) => {
    if (functionName === "OrdinaryFunction") {
      console.log("I'm called from OrdinaryFunction");
      <div className="function" style={{backgroundColor: "yellow"}}/>
      setOrdinaryFCount(ordinaryFCount + 1);
    } else if (functionName === "CrazyFunction") {
      console.log("I'm called from CrazyyFunction");
      setCrazyFCount(crazyFCount + 1);
    }
  };
	return(
		<div className="App">
      
      <OrdinaryFunction count={ordinaryFCount} handleClick={handleClick} />
      <CrazyFunction count={crazyFCount} handleClick={handleClick} />
      <button onClick={resetCounts}>Reset All Counts to 5</button>
    </div>
	);
}
