function getTextElementValueBtId(elementId){
    const phopeTotalElement = document.getElementById(elementId);
    const currentPhoneTotalStr = phopeTotalElement.innerText;
    const currentPhoneTota = parseInt(currentPhoneTotalStr);
    return currentPhoneTota;
}

function setTextElementById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal(){
    //calsulate total
    const currentPhoneTota = getTextElementValueBtId('phone-total');
    const currentCaseTotla = getTextElementValueBtId('case-total');
    const currentSubTotal = currentPhoneTota + currentCaseTotla;

    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = currentSubTotal;

    // calculateing tax 10%
    const taxAmountstr = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountstr);
    setTextElementById('tax-amount', taxAmount);

    // calculateing total amount
    const totalAmount = currentSubTotal + taxAmount;
    setTextElementById('final-totla', totalAmount);
}