window.onload = function() {
    const selectElement = document.getElementsByClassName('goog-te-combo')[0];
    triggerHtmlEvent(selectElement, 'change');
    removeTranslateElement();
}

function removeTranslateElement() {
    $('.skiptranslate').hide();
    $('body').css({'top': '0px'});
}

function triggerHtmlEvent(element, eventName) {
    var event;
    if(document.createEvent) {
        event = document.createEvent('HTMLEvents');
        event.initEvent(eventName, true, true);
        element.dispatchEvent(event);
    } else {
        event = document.createEventObject();
        event.eventType = eventName;
        element.fireEvent('on' + event.eventType, event);
    } 
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
