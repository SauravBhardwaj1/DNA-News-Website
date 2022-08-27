
document.querySelector("#news").addEventListener("click",myfun)

let arr=JSON.parse(localStorage.getItem("news1"))||[]
function myfun(event){
    event.preventDefault();
    let latest_news=document.querySelector("#news").value;
    let photos=document.querySelector("#photos").value;

    let obj=[
        {
            latest_news: "https://www.dnaindia.com/headlines",
        },
        {
            photos: "https://www.dnaindia.com/photo-gallery",
        }
    
    ]
    arr.push(obj)
    localStorage.setItem("news1",JSON.stringify(arr))
}
