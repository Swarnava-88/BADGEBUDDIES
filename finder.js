async function logJSONData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonData = await response.json();
    console.log(jsonData);
  }
  logJSONData();
  function htmlFun() {
    const card = document.getElementById('card');
    card.style.background='azure';
  }
  htmlFun()