const bar=document.querySelector(".bar");
const cross=document.querySelector(".cross");
bar.addEventListener("click",()=>{
    const listbox=document.querySelector(".listitems")
    listbox.classList.toggle("open");
    if("open"){
        cross.style.display="block";
        bar.style.display="none";

    }  
    cross.addEventListener("click",()=>{
        bar.style.display="block";
        cross.style.display="none";
        listbox.classList.remove("open");
    })
})
const key="2042c039e0194388a5e6036c97a4f033";
const url="https://newsapi.org/v2/everything?q=";

window.addEventListener("load",()=>{
    newsFetch("India");
})
function reload(){
    window.location.reload();
}
async function newsFetch(query){
    const response= await fetch(`${url}${query}&apiKey=${key}`);
    const data=await response.json();
    console.log(data);
    getNewData(data.articles)

}
function getNewData(articles){
    const container=document.querySelector("#card-container");
    const template=document.querySelector("#template-card");

    container.innerHTML="";
    articles.forEach(article => {
        console.log(article);
        if(!article.urlToImage) return;
        const clonetemplate=template.content.cloneNode(true);
        dataFillTemplate(clonetemplate,article)
        container.appendChild(clonetemplate);
    });
}
function dataFillTemplate(clonetemplate,article){
    const newspic=clonetemplate.querySelector("#news-pic");
    const newstitle=clonetemplate.querySelector("#title");
    const newsdate=clonetemplate.querySelector("#date");
    const newsDetail=clonetemplate.querySelector("#news-detail");
   
    newspic.src=article.urlToImage;
    newstitle.innerHTML=article.title;
    const date=new Date(article.publishedAt).toLocaleDateString();
    newsdate.innerHTML=`${article.source.name} Date ${date}`;
    newsDetail.innerHTML=article.description;
    clonetemplate.firstElementChild.addEventListener("click",()=>{
        window.open(article.url,"_blank");
    })

}

let selectednav=null;
function navItemclick(id){
    newsFetch(id);
    const navItem=document.getElementById(id)
    selectednav?.classList.remove("active");
    selectednav=navItem;
    selectednav?.classList.add("active");

}
const input=document.querySelector("#inputNews");
const btn=document.querySelector("#btn");
btn.addEventListener("click",()=>{
    let query=input.value;
    newsFetch(query);
    selectednav?.classList.remove("active");
    selectednav=null;
})