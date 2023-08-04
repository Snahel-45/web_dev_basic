const calculateTemp = (event) => {
  event.preventDefault();

  const numberTemp = document.getElementById("temp").value;
  const tempSelected = document.getElementById("temp_diff");
  console.log(tempSelected);
  const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

  const celToFah = (cel) => {
    
    const fahrenheit = Math.round((cel * 9) / 5 + 32);
    return fahrenheit;
  };

 
  const fehToCel = (far) => {
    const celcious = Math.round(((Number(far) + 32) * 5) / 9);
    console.log(celcious);
    return celcious;
  };

  let result;

  console.log(numberTemp);
  if (valueTemp === "cel") {
    result = celToFah(numberTemp);

    document.getElementById(
      "resultContainer"
    ).innerHTML = `= ${result}°Fahrenheit`;
  } else {
    
    result = fehToCel(numberTemp);

    document.getElementById(
      "resultContainer"
    ).innerHTML = `= ${result}°Celsius`;
  }
};
