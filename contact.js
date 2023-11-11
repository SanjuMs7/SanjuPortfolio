//contact javascript
let sendBtn=document.querySelector('#send');
let name_field= document.querySelector('#fullname');
let email_field= document.querySelector('#email_field');
let message_field= document.querySelector('#message_field');

let inputBox=document.querySelectorAll('.inputBox');

sendBtn.addEventListener('click',()=>{
           
   if(name_field.value=="")
   {
    
    document.querySelector('#fullname').placeholder="Enter your Full name";
    document.querySelector('#fullname').style.borderColor="red";

   }
    else if(email_field.value=="")
    {
        document.querySelector('#email_field').placeholder="Enter your Email Id";
        document.querySelector('#email_field').style.borderColor="red";

    }
    else if(message_field.value=="")
    {
        document.querySelector('#message_field').placeholder="Enter your message";
        document.querySelector('#message_field').style.borderColor="red";
    }
    if(name_field.value!=""&&email_field.value!=""&&message_field.value!="")
    {
        document.querySelector('#send').innerHTML="Sent !";
        setTimeout(()=>{
		        document.querySelector('#send').innerHTML="Send";
              },4000);
                
                 inputBox.forEach((value)=>{
                     value.style.borderColor="green";
                 })
    }
    else{
        document.querySelector('#send').innerHTML="Enter the details !";
        setTimeout(()=>{
            document.querySelector('#send').innerHTML="Send";
          },2000);

         
           
    }
    
}) 
name_field.addEventListener('keydown',()=>{
    document.querySelector('#fullname').style.borderColor="white"; 
})
email_field.addEventListener('keydown',()=>{
    document.querySelector('#email_field').style.borderColor="white"; 
})
message_field.addEventListener('keydown',()=>{
    document.querySelector('#message_field').style.borderColor="white"; 
})
