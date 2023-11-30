var userName = prompt("Enter your Name: ")
var phoneNumber = prompt("Enter your contact Number: ")
var email = prompt("Enter your email address: ")
var password = prompt("Enter your password: ")
var con_pass = prompt("Confirm Password: ")

if(!userName || !phoneNumber || !email || !password || !con_pass){
    alert("Error: Please fill in the all input fields")
}
else if(password !== con_pass){
    alert("Error: Password donot match. please try again")
}
else{
    alert("You are successfully Registered")
}
