"use strict";
window.onload = function () {
    const estimateBtn = document.getElementById("estimateBtn");
    estimateBtn.onclick = estimateBtnClicked;
}

function estimateBtnClicked() {
    // get value for days from <input> element
    const rentalDaysField = document.getElementById("rentalDays");
    let rentalDays = Number(rentalDaysField.value);
    // get value for car rental from <input> element
    let carRental = rentalDays * 29.99
    
   
    // NOW THAT Base Car Rental IS CALCULATED... Calculate options costs...
    let options = 0;
    const tollTagCheckbox = document.getElementById("tollTag");
    if (tollTagCheckbox.checked == true) {
        options += (3.95 * rentalDays);
    }
    const gpsCheckbox = document.getElementById("gps");
    if (gpsCheckbox.checked == true) {
        options += (2.95 * rentalDays);
    }
    const rdACheckbox = document.getElementById("rdA");
    if (rdACheckbox.checked == true) {
        options += (2.95 * rentalDays);
    }

    let surcharge = 0;

    const yesUnderXXVBtn = document.getElementById("yesUnderXXV")
    if (yesUnderXXVBtn.checked == true) {
        surcharge = carRental * .30
    }


    let totalDue = carRental + options + surcharge;
    // put car rental in <p id="carRebtal">
    const carRentalPara = document.getElementById("carRental");
    carRentalPara.innerHTML = "Your base charge is " + carRental.toFixed(2);
    // put options in <p id="benefitsCost">
    const optionsPara = document.getElementById("options");
    optionsPara.innerHTML = "Your optional charges cost $" + options.toFixed(2);
    // put surcharge in <p id="surcharge">
    const surchargePara = document.getElementById("surcharge");
    surchargePara.innerHTML = "Your surcharge is $" + surcharge.toFixed(2);
    // put total due total in <p id="netPay">
    const totalDuePara = document.getElementById("totalDue");
    totalDuePara.innerHTML = "Your Total Due is $" + totalDue.toFixed(2);

}
