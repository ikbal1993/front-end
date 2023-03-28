document.getElementById("btlr").addEventListener("click",()=>{
    document.getElementsByClassName("form1")[0].reset()
})

document.getElementById("btls").addEventListener("click",(e)=>{
    e.preventDefault()
    
       let email= document.getElementById("t11").value

       let password=document.getElementById("t12").value
    
    if (email.trim()== "" || email.trim()==null) {
        alert("Please enter your Email. !!");
        return false
    }
     else if(password.trim()=="" || password.trim()==null){
        alert("Password is required. !!")
        return false
     }
     console.log(email+"    "+password)

     getToken().then((value)=>{
        return value.JSON
     }).then((response)=>{
        console.log(response)
     }).catch((err)=>{
        console.log(err)
        console.log("Something went wrong")
     })
    
})
async function getToken() {
    const url = 'http://localhost:8080/auth/token';
    const data = {
        email:document.getElementById("t11").value,
        password:document.getElementById("t12").value
    };
 
    const response = await fetch(url,{
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
         'Accept':'application/json',
        'Content-Type': 'application/json',
      },
      
      mode:'no-cors',
      
    });
  
    const result = await response.json();
    return result;
  }