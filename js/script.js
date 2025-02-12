function convertToFahrenheit() {
    const celsius = document.getElementById('txtAwal').value;
    if (!isNaN(celsius) && celsius !== '') {
        const fahrenheit = (parseFloat(celsius) * 9 / 5) + 32;
        document.getElementById('txtHasil').value = fahrenheit.toFixed(2);
        document.getElementById('calculation').value = `${celsius}°C × (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
    } else {
        alert('Masukkan suhu yang valid dalam Celsius.');
    }
}

function resetFields() {
    document.getElementById('txtAwal').value = '';
    document.getElementById('txtHasil').value = '';
    document.getElementById('calculation').value = '';
}

function reverseConversion() {
    resetFields();
    if (document.getElementById('lblAwal').innerText === 'Celsius (°C):') {
        document.getElementById('lblAwal').innerText = 'Fahrenheit (°F):';
        document.getElementById('lblHasil').innerText = 'Celsius (°C):';
    } else {
        document.getElementById('lblAwal').innerText = 'Celsius (°C):';
        document.getElementById('lblHasil').innerText = 'Fahrenheit (°F):';
        
    }
}

function convertSuhu() {
    if (document.getElementById('lblAwal').innerText === 'Celsius (°C):') {
        convertToFahrenheit();
    } else {
        convertToCelsius();
    }
}

function convertToCelsius() {
    const fahrenheit = document.getElementById('txtAwal').value;
    if (!isNaN(fahrenheit) && fahrenheit !== '') {
        const celsius = (parseFloat(fahrenheit) - 32) * 5 / 9;
        document.getElementById('txtHasil').value = celsius.toFixed(2);
        document.getElementById('calculation').value = `${fahrenheit}°F - 32 × (5/9) = ${celsius.toFixed(2)}°C`;
    } else {
        alert('Masukkan suhu yang valid dalam Fahrenheit.');
    }
}
