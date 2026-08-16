//Koppla händelsen till knappen med ID "enterbtn"
document.getElementById("enterbtn").addEventListener("click", function(){


// Hämtar om checkboxen är förkryssad eller inte
let vip = document.getElementById("vipcheckbox").checked;

// Omvandlar texten från inputfältet till ett nummer
let age = Number(document.getElementById("ageinput").value)

// Om personen är VIP släpps de in direkt 
if (vip) {
alert("Welcome in my best VIP customer :)")
}else {
    // Om personen inte är VIP så måste de vara 18 eller äldre för att komma in
if (age >= 18) {
    alert("Access granted")
} else {
    alert("Access denied")
}
}


})


