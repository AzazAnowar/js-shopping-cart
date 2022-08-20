document.getElementById('phone-btn-plus').addEventListener('click', function(){
    const newPhoneNumbers = updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumbers);

    calculateSubTotal();
});

document.getElementById('phone-btn-minus').addEventListener('click', function(){
    const newPhoneNumbers = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumbers);

    calculateSubTotal()
});


// calculating total items added or minus
function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-input-field');
    const phoneNumberString = phoneNumberField.value;
    const phoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;
    if(isIncrease === true){
        newPhoneNumber = phoneNumber + 1;
    }else{
        newPhoneNumber = phoneNumber - 1;
    }

    phoneNumberField.value = newPhoneNumber;

    return newPhoneNumber;
}

// calculateing total price of indevidual items
function updatePhoneTotalPrice(newPhoneNumbers){
    const phoneTotalprice = newPhoneNumbers * 1219;
    const phopeTotalElement = document.getElementById('phone-total');
    phopeTotalElement.innerText = phoneTotalprice;
}