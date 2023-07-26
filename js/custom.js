// function onClassAddRemove(targetElement, typeOfClass, className) {
//     if (typeOfClass == 'add') {
//         document.getElementById(targetElement).classList.add(className);
//     }
//     if (typeOfClass == 'remove') {
//         document.getElementById(targetElement).classList.remove(className);
//     }
// }


// employment-section
function onEmploymentStatus(answer) {
    console.log(answer.value);

    if (answer.value == 'employmentStatus') {
        document.getElementById('nameEmployer').classList.add('d-none');
        document.getElementById('years').classList.add('d-none');
        document.getElementById('months').classList.add('d-none');
    }
    if (answer.value == 'employed') {
        document.getElementById('nameEmployer').classList.remove('d-none');
        document.getElementById('years').classList.remove('d-none');
        document.getElementById('months').classList.remove('d-none');
    }
    if (answer.value == 'selfemployed') {
        document.getElementById('nameEmployer').classList.add('d-none');
        document.getElementById('years').classList.remove('d-none');
        document.getElementById('months').classList.remove('d-none');
    }
}

// additional-real-estate-owned-section
function onRealEstate(answer) {
    console.log(answer.value);

    if (answer.value == 'realEstate') {
        document.getElementById('yes').classList.add('d-none');
        document.getElementById('no').classList.add('d-none');
    }
    if (answer.value == 'yes') {
        document.getElementById('properties').classList.remove('d-none');
    }
    if (answer.value == 'no') {
        document.getElementById('properties').classList.add('d-none');
    }
}

// additional-details
function onPayChild(answer) {
    console.log(answer.value);

    // do-you-pay-child-support-or-alimony
    if (answer.value == 'payChild') {
        document.getElementById('yes').classList.add('d-none');
        document.getElementById('no').classList.add('d-none');
    }
    if (answer.value == 'yes') {
        document.getElementById('permonth').classList.remove('d-none');
    }
    if (answer.value == 'no') {
        document.getElementById('permonth').classList.add('d-none');
    }
}

function onVeteran(answer) {
    console.log(answer.value);

    // are-you-a-veteran?
    if (answer.value == 'veteran') {
        document.getElementById('yes').classList.add('d-none');
        document.getElementById('no').classList.add('d-none');
    }
    if (answer.value == 'yes') {
        document.getElementById('dependents').classList.remove('d-none');
    }
    if (answer.value == 'no') {
        document.getElementById('dependents').classList.add('d-none');
    }
}

// co-borrower
function onCoBorrower() {
    var checkBox = document.getElementById("showCoBorrower");
    var hideCoBorrower = document.getElementById("hideCoBorrower");

    if (checkBox.checked == true) {
        hideCoBorrower.classList.remove('d-none');
    } else {
        hideCoBorrower.classList.add('d-none');
    }
}

function onBorrowerAddress() {
    var checkBox = document.getElementById("showBorrowerAddress");
    var hideBorrowerAddress = document.getElementById("hideBorrowerAddress");

    if (checkBox.checked == true) {
        hideBorrowerAddress.classList.add('d-none');
    } else {
        hideBorrowerAddress.classList.remove('d-none');
    }
}

// how-did-you-hear-about-us?
function onAboutUs(answer) {
    console.log(answer.value);

    if (answer.value == 'aboutUs') {
        document.getElementById('other').classList.add('d-none');
        document.getElementById('internet').classList.add('d-none');
        document.getElementById('friend').classList.add('d-none');
        document.getElementById('realtor').classList.add('d-none');
        document.getElementById('builder').classList.add('d-none');
    }
    if (answer.value == 'other') {
        document.getElementById('friendName').classList.add('d-none');
        document.getElementById('friendPhoneNumber').classList.add('d-none');
        document.getElementById('realtorName').classList.add('d-none');
        document.getElementById('realtorPhoneNumber').classList.add('d-none');
        document.getElementById('builderName').classList.add('d-none');
        document.getElementById('builderPhoneNumber').classList.add('d-none');
    }
    if (answer.value == 'internet') {
        document.getElementById('friendName').classList.add('d-none');
        document.getElementById('friendPhoneNumber').classList.add('d-none');
        document.getElementById('realtorName').classList.add('d-none');
        document.getElementById('realtorPhoneNumber').classList.add('d-none');
        document.getElementById('builderName').classList.add('d-none');
        document.getElementById('builderPhoneNumber').classList.add('d-none');
    }
    if (answer.value == 'friend') {
        document.getElementById('friendName').classList.remove('d-none');
        document.getElementById('friendPhoneNumber').classList.remove('d-none');
        document.getElementById('realtorName').classList.add('d-none');
        document.getElementById('realtorPhoneNumber').classList.add('d-none');
        document.getElementById('builderName').classList.add('d-none');
        document.getElementById('builderPhoneNumber').classList.add('d-none');
    }
    if (answer.value == 'realtor') {
        document.getElementById('friendName').classList.add('d-none');
        document.getElementById('friendPhoneNumber').classList.add('d-none');
        document.getElementById('realtorName').classList.remove('d-none');
        document.getElementById('realtorPhoneNumber').classList.remove('d-none');
        document.getElementById('builderName').classList.add('d-none');
        document.getElementById('builderPhoneNumber').classList.add('d-none');
    }
    if (answer.value == 'builder') {
        document.getElementById('friendName').classList.add('d-none');
        document.getElementById('friendPhoneNumber').classList.add('d-none');
        document.getElementById('realtorName').classList.add('d-none');
        document.getElementById('realtorPhoneNumber').classList.add('d-none');
        document.getElementById('builderName').classList.remove('d-none');
        document.getElementById('builderPhoneNumber').classList.remove('d-none');
    }
}

// signature
function onSignature(value) {
    var eSignFileArea = document.getElementById("esign-file-area");

    if (value.checked == true) {
        eSignFileArea.classList.remove('d-none');
    } else {
        eSignFileArea.classList.add('d-none');
    }
}

function onDigitalSignature(value) {
    var eSignFileArea = document.getElementById("e-sign-canvas");
    var fileSelectArea = document.getElementById("fileSelectArea");

    if (value.checked == true) {
        fileSelectArea.classList.remove('d-none');
        eSignFileArea.classList.add('d-none');
    } else {
        fileSelectArea.classList.add('d-none');
        eSignFileArea.classList.remove('d-none');
    }
}

function onChangeAdditionalIncome() {
    var inputBoxes = document.getElementById('additional-income-boxes');
    var inputField = document.createElement('div');
    inputField.innerHTML = '<input type="text" class="form-control mt-3" placeholder="Additional Monthly Income $..." />';
    inputBoxes.appendChild(inputField);
}