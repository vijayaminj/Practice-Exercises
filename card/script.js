const details=[
    {name:"meena",designation:"Frontend Developer",pic:"pic1.png",btn:"about me",
    about:" I have more than 3 years experience of  this filed"},
    {name:"mohan",designation:"software engineer",pic:"pic2.png",btn:"about me",
    about:"I have more than 3 years experience of  this filed"},
    {name:"john",designation:"data analitics",pic:"pic2.png",btn:"about me",
    about:" I have more than 3 years experience of  this filed"},
];

let container=document.querySelector(".container");

details.map((pro)=>{
    let box=document.createElement("div");
    box.classList.add("card");
    box.innerHTML=`<div class="topbox"><img src="${pro.pic} "></div>
    <div class="downbox"><h3>${pro.name} </h3>
    <p>${pro.designation} </p>
    <span class="star">
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    </span>    
    <p>${pro.about} </p>
    <div class="socialIcon">
    <a href=""><i class="fa-brands fa-linkedin "></i></a>
    <a href=""><i class="fa-brands fa-github"></i></a>
    <a href=""><i class="fa-brands fa-square-twitter"></i></a>
    <a href=""><i class="fa-brands fa-square-instagram"></i></a></div>     
    <button>${pro.btn}</button>
    </div>`;
    container.appendChild(box);

})

