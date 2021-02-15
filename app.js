const celciusInput = document.querySelector('#celcius > input');
const fahrenhiteInput = document.querySelector('#fahrenhite > input');
const kelvinInput = document.querySelector('#kelvin > input');

function roundNum (num){
    return Math.round(num*100)/100; 
}

function celsiuceToFahrenhiteAndKelvin (){
    const cTemp = +celciusInput.value,
          fTemp = (cTemp*(9/5)+32),
          kTemp = cTemp + 273.15;
    fahrenhiteInput.value = roundNum(fTemp);
    kelvinInput.value = roundNum(kTemp);
}

function fahrenhiteTocelsiuceAndKelvin(){
    const fTemp = +fahrenhiteInput.value,
          cTemp = (fTemp - 32)* (5/9),
          kTemp = ((fTemp - 32)* (5/9)) + 273.15;
    celciusInput.value = roundNum(cTemp);
    kelvinInput.value = roundNum(kTemp); 
}

function kelvinTocelsiuceAndFahrenhite(){
    const kTemp = +kelvinInput.value,
          cTemp = kTemp - 273.15,
          fTemp = (kTemp - 273.15) * 9/5 + 32;
    celciusInput.value = roundNum(cTemp);
    fahrenhiteInput.value = roundNum(fTemp); 
}
function main () {
    celciusInput.addEventListener('input', celsiuceToFahrenhiteAndKelvin);
    fahrenhiteInput.addEventListener('input', fahrenhiteTocelsiuceAndKelvin);
    kelvinInput.addEventListener('input', kelvinTocelsiuceAndFahrenhite);
}
main();

