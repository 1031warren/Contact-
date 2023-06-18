

const form = document.querySelector("form"),
statusTxt = form.querySelector("buttom-area span");

form.onsubmit = (e)=>{
  e.preventDefault(); //allowing form to submit
  statusTxt.style.color = "red";
  statusTxt.style.display = "block";

  let xhr = new XMLHttpRequest(); //creating new xml object 
  xhr.open("POST", "message.php", true); //sending post request to message.php file 
  xhr.onload = ()=>{ //once ajax loaded
    if(xhr.readyState == 4 && xhr.status == 200){ //if ajax repsonse status is 200 & ready status is 4 means there is no error 
       let response = xhr.response; //storing ajax a response variable 
       if(response.indexOf("Enter a valid email address!") != -1 || response.indexOf("Sorry, failed to send your message!"))
         statusTxt.style.color = "red";
    }else{
      form.reset();
      setTimeout(()=>{
         statusTxt.style.display = "none";
       }, 3000); //hide the statusTxt after 3 seconds if the msg is sent

       statusTxt.innerText = response;
    }
  }
  let formData = new FormData(form); //creating new FormData obj. This obj is used to send form data 
  xhr.send(formData); //sending form data 
}