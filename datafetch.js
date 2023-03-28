document.getElementById("btr").addEventListener("click",()=>{
    document.getElementsByClassName("form")[0].reset()
})

document.getElementById("bts").addEventListener("click",(e)=>{
                  e.preventDefault()
	    let t1=document.getElementById("t1").value;
		let t2=document.getElementById("t2").value;
		let t3=document.getElementById("t3").value;
		let t4=document.getElementById("t4").value;
		let t5=document.getElementById("t5").value;
		let t6=document.getElementById("t6")
        let t7=document.getElementById("t7")
        let t8=document.getElementById("t7")

        let sex = "";
		
        if (t1.trim()== "") {
			alert("Please enter your name.");
			return false
		}
		else if (!/\S+@\S+\.\S+/.test(t3)) {
			alert("Please enter a valid email address.");
			return false
		}
		else if (t2.trim()== "") {
			alert("Please enter a valid Username.");
			return false
		}
		else if (t4.trim()=="" ) {
			
			alert("Please enter a valid password.");
			return false
		}
		else if (t5!=t4 ) {
			
			alert("Please Confirm!! password Mismatch.");
			return false
		}

        if ((t7.checked==false) && (t6.checked==false)) {
			
			alert("please Select your gender")
            return false
        } 
        else{

             if (t6.checked==true) {
			
                sex=document.getElementById("t6").value;
            }
            else if (t7.checked==true) {
                
                sex=document.getElementById("t7").value
            }
        
        }

     let student = {
        name:t1,
        username:t2,
        email:t3,
        password:t4,
        gender:sex
     }
   saveLead(student)
   document.getElementsByClassName("form")[0].reset()
                
})

let saveLead = (student)=>{

    fetch('http://localhost:8080/register/save',{
        method:"POST",
        body:JSON.stringify(student),
        // body:new FormData(document.getElementById("myForm")),
        headers: {
            'accept':'application/json',
            'Content-Type': 'application/json'
        },
        mode: 'no-cors'
    }).then((value)=>{
        if(value.status==200){
            alert("Successfully Registration Done")
        }
        if(value.status==208){
                     alert("Data is already existed try new one")
        }
    }).catch((err)=>{
        console.log("error  !!")
    })
   
}


//Either we can write async await / or direct fetch both return both promise value
    //  response.then((value)=>{
        
    //     if(value.status==200){
    //        alert("Successfully Registration Done")
    //     }

    //     if(value.status==208){
    //         alert("Data is already existed try new one")
    //     }
    //  }).catch((err)=>{
    //     alert("something Went Wrong !! ")
    //  })
    // }
