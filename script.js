let numbers = document.querySelectorAll(".num");

numbers.forEach((number)=> {
    let startPoint = 0;

    let endPonit = Number(number.getAttribute("data-val"));
    console.log(endPonit);

    let counter = setInterval( function() {
        startPoint += 1;

        number.textContent = startPoint;
        if(startPoint == endPonit){
            clearInterval(counter);
        }
    }, 50)
})


let dropDown_services = document.getElementById("dropDown-services");
let dropDown_pages = document.getElementById("dropDown-pages")

let service_list = document.getElementById("service-list");
let pages_list = document.getElementById("pages-list");


dropDown_services.addEventListener("mouseenter",()=>{
    service_list.style.visibility = "visible";
})

dropDown_services.addEventListener("mouseleave",()=>{
    service_list.style.visibility = "hidden";
})

service_list.addEventListener("mouseenter",()=>{
    service_list.style.visibility = "visible";
})

service_list.addEventListener("mouseleave",()=>{
    service_list.style.visibility = "hidden";
})

/////////////////////  SERVICE LIST TOGGLE IS ENDED HERE /////////////////////

dropDown_pages.addEventListener("mouseenter",()=>{
    pages_list.style.visibility = "visible";
})

dropDown_pages.addEventListener("mouseleave",()=>{
    pages_list.style.visibility = "hidden";
})

pages_list.addEventListener("mouseenter",()=>{
    pages_list.style.visibility = "visible";
})

pages_list.addEventListener("mouseleave",()=>{
    pages_list.style.visibility = "hidden";
})

/////////////////////  PAGES LIST TOGGLE IS ENDED HERE /////////////////////

