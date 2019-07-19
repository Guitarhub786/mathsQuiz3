console.log("slm");


function checkBtn(evt){


    switch(evt) {
        case 'enter':
            checkAnswer();
            break;
        case 'C':
            clearAnswer();
            break;
        case 'delete':
            deleteAnswer();
            break;
        default:
             document.getElementById("myInput").value += evt;
    }

  }

  function checkAnswer() {
      console.log("function checkAnswer");
  }

  function clearAnswer() {
      document.getElementById("myInput").value = "";
  }

  function deleteAnswer() {
    tmpString = document.getElementById("myInput").value
    tmpString = tmpString.slice(0, -1);
    document.getElementById("myInput").value = tmpString;
}