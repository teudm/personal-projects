async function getIP() { 
  const results = await fetch("https://ipgeolocation.abstractapi.com/v1/?api_key=21d4e4e32847477d95000667d303676b");
  const object = await results.json();
  const { latitude, longitude } = object;
  const data = `lon=${longitude}&lat=${latitude}`
  document.querySelector('.cidade').innerHTML = `${object.city} (obtido pelo seu IP)`;
  getAirQuality(data);
  getTemp(data);
}

async function getAirQuality(ip) { 
  const results = await fetch(`https://air-quality.p.rapidapi.com/current/airquality?${ip}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "10d3cd0f18mshc8b1d9ee530df50p15e653jsnfdfec84df86c",
      "x-rapidapi-host": "air-quality.p.rapidapi.com"
    }
  });
  const object = await results.json();
  const { data } = object;
  document.querySelector('.iqar').innerHTML = data[0].aqi;
  document.querySelector('.qualidade').innerHTML = testAqi(data[0].aqi);
}

async function getTemp(ip) {
  const results = await fetch(`https://weatherbit-v1-mashape.p.rapidapi.com/current?${ip}&lang=pt`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "10d3cd0f18mshc8b1d9ee530df50p15e653jsnfdfec84df86c",
      "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com"
    }
  });
  const object = await results.json();
  const { data } = object;
  document.querySelector('.temp').innerHTML = `${data[0].weather.description} (${data[0].temp}ºC)`;
}

function testAqi(aqi) {
  let qualidadeDoAr = 'Bom';
  if (aqi >50 && aqi <= 100) {
    qualidadeDoAr = 'Moderado';
  } else if (aqi > 100 && aqi <= 150) {
    qualidadeDoAr = 'Ruim';
  } else if (aqi > 150 && aqi <= 200) {
    qualidadeDoAr = 'Muito ruim';
  } else if (aqi > 200 && aqi <= 300) {
    qualidadeDoAr = 'Péssimo';
  } else if (aqi > 300) {
    qualidadeDoAr = 'Sangue de Jesus tem poder, como cê tá respirando???';
  }
  return qualidadeDoAr;
}