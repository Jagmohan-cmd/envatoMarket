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


let display = document.querySelectorAll(".display");
let changeIcon = document.getElementsByClassName("change");

display.forEach((item) => {

    item.addEventListener("click", () => {
        let toggle = item.getAttribute("data-val")
        if(toggle == "false"){
        item.setAttribute("data-val" , "true");

        }
        else{
            item.setAttribute("data-val" , "false");
        }

        if(item.getAttribute("data-val") == "true"){
            item.nextElementSibling.style.display = "block"
            item.style.backgroundColor = "#264B63";
            item.style.color = "white";
            item.childNodes[1].className = "fa-solid fa-arrow-up-long";

        }
        else{
            item.nextElementSibling.style.display = "none"
            item.style.backgroundColor = "#FEFBEA";
            item.style.color = "black";
            item.childNodes[1].className = "fa-solid fa-chevron-down";
        }
    })
   
})





