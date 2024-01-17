function calculateTotalCost() {
    var cars = {
        "Polo Trendline": 870000,
        "Polo Highline": 1009000,
        "Virtus Treadline": 1105000,
        "Virtus Highline": 1308000,
        "Taigun Trendline": 1489000,
        "Taigun Highline": 1542000,
        "Taigun Topline": 1771000
    };

    var additionalcost = {
        "RTO": 113990,
        "Insurance": 47300,
        "TCS charges": 11000,
        "Additional Accessories": 15000
    };

    var carmodel = document.getElementById("carmodel").value;
    var carcost = cars[carmodel];
    var insurance = document.getElementById("insurance").checked;
    var accessor = document.getElementById("accessor").checked;
    var discount = document.getElementById("discount").value || 0;
    console.log(document.getElementById("discount").value)

    var errorMessages = document.getElementById("errorMessages");
    errorMessages.innerHTML = "";

    if (!insurance && !accessor && discount > 0) {
        errorMessages.innerHTML = "Either Insurance or Additional Accessories must be selected";
        return;
    }

    if (discount > 30000) {
        errorMessages.innerHTML = "Maximum dealor discount is 30000, If the amounte entered is greater than that discount considered is 30000";
        discount = 30000;
    }

    var totalcost = carcost + additionalcost["RTO"];
    totalcost += insurance ? additionalcost["Insurance"] : 0;
    totalcost += accessor ? additionalcost["Additional Accessories"] : 0;
    totalcost -= discount;
    console.log(totalcost)

    document.getElementById("totalcost").value = totalcost.toFixed(2);
}