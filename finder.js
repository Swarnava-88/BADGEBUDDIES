const cardString = '<div class="card"><img class="cardppf" src="https://yt3.ggpht.com/a/AATXAJzsHPys1EoSnxprcPapwsQsb1gr97KzKfnRBw=s900-c-k-c0xffffffff-no-rj-mo"/><h2>[[name]]</h2><h4><a href="mailto:[[email]]">MY EMAIL</a></h4><p>[[city]]</p><p class="subheading"><span>[[companyName]]</span><br>[[catchPhrase]]</p><h3><a href="tel:[[phone]]">CONTACT ME</a></h3><div class="social"><img src="https://pluspng.com/img-png/png-character--720.png" /> <img src="https://tse1.mm.bing.net/th?id=OIP.tFZ3oklHQr6IRqvVmpBzgAHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120"/><i class="fa-brands fa-facebook" style="color: #0f63f5"></i><img src="https://tse2.mm.bing.net/th?id=OIP.kTrMkv8COqSLGt5ZrG_ufwHaGr&pid=Api&P=0&h=180"/></div><hr /><div class="button-group"><button>HIRE ME</button><button>REPORT ACCOUNT</button></div></div>'
var cardContainer = document.getElementById('card-container')
console.log(cardContainer)
async function logJSONData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonData = await response.json();
  console.log(jsonData);
   for (let i = 0; i < jsonData.length; i++) {
    let updatedCardString = cardString.replace('[[name]]',jsonData[i].name);
    updatedCardString = updatedCardString.replace('[[email]]',jsonData[i].email);
    updatedCardString = updatedCardString.replace('[[city]]',jsonData[i].address.city);
    updatedCardString = updatedCardString.replace('[[companyName]]',jsonData[i].company.name);
    updatedCardString = updatedCardString.replace('[[catchPhrase]]',jsonData[i].company.catchPhrase);
    updatedCardString = updatedCardString.replace('[[phone]]',jsonData[i].phone);
    cardContainer.innerHTML = cardContainer.innerHTML + updatedCardString
  }
}
logJSONData();
function htmlFun() {
  const card = document.getElementById('card');
  card.style.background='azure';
}
htmlFun()
