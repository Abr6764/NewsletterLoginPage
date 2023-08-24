let email = document.getElementById("email");
let subscriberId = document.getElementById("subscriberId");
let btn = document.getElementById("subscribe_btn");
let errMsg = document.getElementById("err_msg");
let main = document.getElementById("main");
let success_msg = document.getElementById("success_msg");
let homebtn = document.querySelector(".dismissbtn");
let valid = false;
// btn to validate the input email
btn.addEventListener('click',Validate);

//eventListener t validate input email when press  "Enter" key
/*email.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      Validate();
      if(valid === false){
        clearErr();
      } 
    }
});*/

//listener to clear the errmsg for re entering the email
email.addEventListener('focus',clearErr);

//listener to go to reloaded home page
homebtn.addEventListener("click",function(){
    success_msg.style.display = "none";

    main.style.display="flex";
    valid = false;
    clearErr();
});
//function to clear the errmsg
function clearErr(){

    email.value = "";
    email.style.color = "hsl(231, 7%, 60%)";
    errMsg.style.display = "none";
}
//validate function to validate the email
function Validate(){
    
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(mailformat)){
        main.style.display="none";
        success_msg.style.display = "flex";
        subscriberId.textContent = email.value; 
        valid = true;
    }
    else{
        
        errMsg.style.display = "block";
        email.style.color = "red";
        valid = false;
    }
      
    
};
