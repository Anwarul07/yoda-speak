// var ask = prompt(" what is your Identity Mr ?");
// var reply = "Ok Permission Granted! & Welcome Mr " + ask;
// alert(reply);

var bttn = document.querySelector("#btnTranslate");
var inputText = document.querySelector("#textinput");
var outputbtn = document.querySelector("#btnOutput");
bttn.addEventListener("click", clickHandler);

function clickHandler() {
  console.clear();
  console.log(textinput.value);
 

  // calling process

  var inputText = textinput.value;

  fetch(translationUrl(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      btnOutput.innerText = translatedText;
    })
    .catch(errorHandler);
}

var serverURL = "https://api.funtranslations.com/translate/yoda.json";

function translationUrl(input) {
  return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
  console.log("Error !", error);
  alert("Error please try again");
}
