function inputWithNumber(id){
    const inputId = document.getElementById(id).value;
    const inputNumber =parseFloat(inputId);
    return inputNumber;
};

function innerTextWithNumber(id){
    const textId = document.getElementById(id).innerText;
    const innerNumber =parseFloat(textId);
    return innerNumber;
};


