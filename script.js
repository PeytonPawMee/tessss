document.getElementById("bookingForm").addEventListener("submit", function(event){

event.preventDefault();

let name = document.getElementById("name").value;

document.getElementById("confirmation").innerText =
"Thanks " + name + "! Your ride with Wheelys has been booked (mock booking).";

});
