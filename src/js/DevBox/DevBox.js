//querySelector
function s_(string){
    return document.querySelector(`.${string}`);
};
//querySelectorAll
function s_All(string){
    return document.querySelectorAll(`.${string}`);
};


function showBox(s){
 
s("Footer-Developer").addEventListener("mouseover",()=>{

s("DevBox").classList.add("DevBox__Show");
s("DevBox").classList.remove("DevBox__Hide");

});
s("DevBox-Close").addEventListener("click",()=>{
  //  s("DevBox").classList.remove("DevBox__Show");
    s("DevBox").classList.add("DevBox__Hide");

    });
};
showBox(s_);
