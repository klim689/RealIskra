
const resultTemp = document.getElementById('temp');
const resultDateTime = document.getElementById('datetime');

async function fetchData() {
  const apiUrl = 'http://172.16.1.33:3000';

  const options = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };

  try {
    const response = await fetch(apiUrl, options);

    if (!response.ok) {
      throw new Error(
        `Ошибка при выполнении запроса. Статус: ${response.status}`
      );
    }

    const data = await response.json();
    resultPress.textContent = data['Pressure, mbar'];
    resultTemp.textContent = data['Temperature, Celsius'];
    resultDateTime.textContent = data['DateTime'];

    console.log(data);
  } catch (error) {
    console.log('Ошибка:', error.message);
  }
}
setInterval(fetchData, 60000);
