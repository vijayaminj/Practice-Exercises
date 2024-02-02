let product=[
    {name:"",price:500,pic:"photo/pic3.jpeg"},
    {name:"shirt",price:600,pic:"photo/pic4.jpeg"},
    {name:"top",price:499,pic:"photo/pic6.jpeg"},
    {name:"jeans",price:900,pic:"photo/pic8.jpeg"},
    {name:"pasta",price:150,pic:"photo/pasta.jpg"},
    {name:"pizza",price:200,pic:"photo/pizza.jpg"},
    {name:"salad",price:100,pic:"photo/salad.jpg"},
    {name:"salad1",price:120,pic:"photo/salad1.jpg"},
    {name:"sandwiz",price:100,pic:"photo/sandwiz.jpg"},
    {name:"chicken",price:150,pic:"photo/tandoor.jpg"},
    {name:"tea",price:50,pic:"photo/tea.jpg"},
    {name:"tea",price:60,pic:"photo/tea1.jpg"},
    {name:"tea",price:55,pic:"photo/tea2.jpg"},
    {name:"tea",price:100,pic:"photo/tea3.jpeg"},

];

let container=document.querySelector(".container");

const postMethod=()=>{
    product.map((pro)=>{
        // console.log(pro);
        const proDiv=document.createElement("div");
        proDiv.classList.add("product");
        proDiv.innerHTML=` <div class="pic"><img src="${pro.pic}"></div>
        <h3>product name:${pro.name}</h3>
        <p>Price:${pro.price}</p>`;
        container.appendChild(proDiv);

    })
}
postMethod();

//search product
let text =document.querySelector(".text");
let btn=document.querySelector(".btn");

btn.addEventListener("click",()=>{
    searchpro(text.value);
});

const searchpro=(value)=>{

    let productbox=document.querySelectorAll(".product");
    let pname=document.getElementsByTagName("h3");
    for(let i=0;i<pname.length;i++){
        let match=productbox[i].getElementsByTagName("h3")[0];
        
        if(match){
            let textvalue=match.textContent || match.innerHTML;
            if(textvalue.indexOf(value)> -1){
                productbox[i].style.display="";
            }else {
                productbox[i].style.display="none";
            }
        }
    }

}



