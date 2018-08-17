window.onload = function() {
    removeTranslateElement();
}

function removeTranslateElement() {
    $('.skiptranslate').remove();
    $('body').css({'top': '0px'});
}

function inputListener() {
    const text = document.getElementById('inputText').value;
    document.getElementById('resultText').innerHTML = text;
}

function copyResult() {
    var resultText = document.getElementById('resultText');
    // for Internet Explorer

    if(document.body.createTextRange) {
      var range = document.body.createTextRange();
      range.moveToElementText(resultText);
      range.select();
      document.execCommand("Copy");
    }
    else if(window.getSelection) {
      // other browsers

      var selection = window.getSelection();
      var range = document.createRange();
      range.selectNodeContents(resultText);
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand("Copy");
    }
}

function removeField() {
    $('#inputText').val('');
    $('#resultText').text('');
}

// warning alert
function warningAlert(title, content) {
	swal(title, content, "warning");
}
// error alert
function errorAlert(title, content) {
	swal(title, content, "error");
}
// success alert
function successAlert(title, content) {
	swal(title, content, "success");
}