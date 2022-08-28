document.querySelector("form").addEventListener("submit",function(event){
    let newsarr=JSON.parse(localStorage.getItem("login"))||[]
        event.preventDefault();
        // console.log("hi")
        let personName=document.querySelector("#name").value;
        let personNum=document.querySelector("#phone").value;
        let personEmail=document.querySelector("#email").value;
        
        let newsObj={
            personName,
            personNum,
            personEmail
        }
        if(personName=="" || personNum=="" || personEmail==""){
            alert("some credential is missing")
        }else{
            newsarr.push(newsObj)
            localStorage.setItem("login",JSON.stringify(newsarr))
        }
    })