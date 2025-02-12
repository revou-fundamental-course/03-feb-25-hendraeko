// fungsi untuk merubah suhu dari Celsius ke Fahrenheit
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

// fungsi untuk merubah suhu dari Fahrenheit ke Celsius
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

// fungsi untuk mereset form
function resetAll() {
    emptyFields(); // memanggil fungsi untuk mengosongkan form
    resetFields(); // memanggil fungsi resetFields
}

// fungsi untuk mengosongkan form
function emptyFields() {
    document.getElementById('txtAwal').value = '';
    document.getElementById('txtHasil').value = '';
    document.getElementById('calculation').value = '';
}

// fungsi untuk mereset form menjadi seperti semula
function resetFields() {
    document.getElementById('lblAwal').innerText = 'Celsius (°C):';
    document.getElementById('lblHasil').innerText = 'Fahrenheit (°F):';
    document.getElementById('sectionCtoF').style.display = 'block';
    document.getElementById('sectionFtoC').style.display = 'none';
    document.getElementById('introCtoF').style.display = 'block';
    document.getElementById('introFtoC').style.display = 'none';
}

// fungsi untuk membalikkan form
function reverseConversion() {
    emptyFields();
    if (document.getElementById('lblAwal').innerText === 'Celsius (°C):') {
        document.getElementById('lblAwal').innerText = 'Fahrenheit (°F):';
        document.getElementById('lblHasil').innerText = 'Celsius (°C):';
        document.getElementById('sectionCtoF').style.display = 'none';
        document.getElementById('sectionFtoC').style.display = 'block';
        document.getElementById('introCtoF').style.display = 'none';
        document.getElementById('introFtoC').style.display = 'block';
    } else {
        document.getElementById('lblAwal').innerText = 'Celsius (°C):';
        document.getElementById('lblHasil').innerText = 'Fahrenheit (°F):';
        document.getElementById('sectionCtoF').style.display = 'block';
        document.getElementById('sectionFtoC').style.display = 'none';
        document.getElementById('introCtoF').style.display = 'block';
        document.getElementById('introFtoC').style.display = 'none';
    }
}

// fungsi untuk merubah suhu
function convertSuhu() {
    if (document.getElementById('lblAwal').innerText === 'Celsius (°C):') {
        convertToFahrenheit(); // memanggil fungsi untuk merubah suhu dari Celsius ke Fahrenheit
    } else {
        convertToCelsius(); // memanggil fungsi untuk merubah suhu dari Fahrenheit ke Celsius
    }
}
