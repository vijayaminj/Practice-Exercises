let movies=[
    {name:"Name",genre:"Genre",boPrice:"Box Office (INR)",srPrice:"Satellite Rights (INR)",
    ottPrice:"OTT Rights (INR)",mrPrice:"Music Rights (INR)"},
    {name:"Dhoom",genre:"Drama",boPrice:500,srPrice:120,ottPrice:70,mrPrice:20},
    {name:"DDL",genre:"Romance",boPrice:550,srPrice:130,ottPrice:80,mrPrice:25},
    {name:"3 Idiots",genre:"Comedy",boPrice:600,srPrice:140,ottPrice:90,mrPrice:30},
    {name:"Padmavat",genre:"Historical",boPrice:700,srPrice:160,ottPrice:100,mrPrice:40},
    {name:"Golmal",genre:"Drama",boPrice:800,srPrice:180,ottPrice:110,mrPrice:50},
];

console.log(movies);
let table=document.getElementById("main");
for(let user of movies){
    console.log(user);
    let tr=document.createElement("tr");
   
        let td1=document.createElement("td");
        td1.textContent=user.name;
        tr.appendChild(td1);
        let td2=document.createElement("td");
        td2.textContent=user.genre;
        tr.appendChild(td2);
        let td3=document.createElement("td");
        td3.textContent=user.boPrice;
        tr.appendChild(td3);
        let td4=document.createElement("td");
        td4.textContent=user.srPrice;
        tr.appendChild(td4);
        let td5=document.createElement("td");
        td5.textContent=user.ottPrice;
        tr.appendChild(td5);
        let td6=document.createElement("td");
        td6.textContent=user.mrPrice;
        tr.appendChild(td6);
    
    
    table.appendChild(tr);
}
