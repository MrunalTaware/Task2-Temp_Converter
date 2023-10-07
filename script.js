const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const ConvertButton = document.querySelector('.ConvertButton');
const ResetButton = document.querySelector('.ResetButton');
const ChangeButton = document.querySelector('.ChangeButton');
const C = document.querySelector('.C');
const F = document.querySelector('.F');

const swap = () => {
    if(C.innerHTML === '°C')
    {
        C.innerHTML = '°F';
        F.innerHTML = '°C';
        converter.placeholder = " Temprature in °F";
    }
    else {
        F.innerHTML = '°F';
        C.innerHTML = '°C';
        converter.placeholder = " Temprature in °C";
    };
};

const reset = () => {
    converter.value = '';
    result.innerHTML = '';
}

const convert = () => {
    if(/^(-?)(\d+)(\.{1}\d+)?$/.test(converter.value)) {
        result.style.color = "black"
        if(C.innerHTML === '°C'){
            let value =(converter.value * 1.8) + 32;
            result.innerHTML = `${converter.value}°C is equal to ${value.toFixed(2)}°F`;
        } else {
            let value = (converter.value - 32 ) / 1.8;
            result.innerHTML = `${converter.value}°F is equal to ${value.toFixed(2)}°C`;
        }
    } else if (converter.value == '')
    {
        result.style.color = "#993300"
        result.innerHTML = 'Enter number';
    }
    else {
        result.style.color = "#993300"
        result.innerHTML = 'Enter only numbers !!';
    }
}

ChangeButton.addEventListener('click',swap);
ResetButton.addEventListener('click', reset);
ConvertButton.addEventListener('click',convert);