
document.querySelector("#left").addEventListener("click",myfun)

let arr=JSON.parse(localStorage.getItem("news"))||[]
function myfun(event){
    event.preventDefault();
    console.log("hi")
    let latest_news=document.querySelector("#news").value;
    let photos=document.querySelector("#photos").value;

    let obj={
        latest_news,
        photos
    }
    arr.push(obj)
    localStorage.setItem("news",JSON.stringify(arr))
}