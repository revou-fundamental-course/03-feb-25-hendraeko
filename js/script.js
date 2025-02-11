function convertToFahrenheit() {
    const celsius = document.getElementById('celsius').value;
    if (!isNaN(celsius) && celsius !== '') {
        const fahrenheit = (parseFloat(celsius) * 9 / 5) + 32;
        document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
        document.getElementById('calculation').innerText = `${celsius}°C × (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
    } else {
        alert('Masukkan suhu yang valid dalam Celsius.');
    }
}

function resetFields() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('calculation').innerText = '';
}

function reverseConversion() {
    const fahrenheit = document.getElementById('fahrenheit').value;
    if (!isNaN(fahrenheit) && fahrenheit !== '') {
        const celsius = (parseFloat(fahrenheit) - 32) * 5 / 9;
        document.getElementById('celsius').value = celsius.toFixed(2);
        document.getElementById('calculation').innerText = `${fahrenheit}°F - 32 × (5/9) = ${celsius.toFixed(2)}°C`;
    } else {
        alert('Masukkan suhu yang valid dalam Fahrenheit.');
    }
}
