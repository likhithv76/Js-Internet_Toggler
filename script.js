let message = document.getElementById("message");

let messageOnline = ()=>{
    message.textContent = "Internet Connection Available"
    message.style.cssText = "color:white; font-weight:bold;background-color:transparent";
    background.style.cssText = "background-image: url('Assets/internet3.gif'); background-repeat:no-repeat; background-size:110vw;";
}
let messageOffline = () =>{
    message.textContent = "No Internet Connection";
    message.style.cssText = "color:white;font-weight:bold;background-color:transparent";
    background.style.cssText = "background-image: url('Assets/giphy.gif'); background-repeat:no-repeat; background-size:100%";
};

if (window.navigator.onLine){
    messageOnline();
}
else{
    messageOffline();
}

window.addEventListener("online", messageOnline);
window.addEventListener("offline",messageOffline);