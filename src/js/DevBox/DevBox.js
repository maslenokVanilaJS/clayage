
function s_(string){
    return document.querySelector(`.${string}`);
};
function s_All(string){
    return document.querySelectorAll(`.${string}`);
};


function showBox(s){
 
s("Footer-DevLink").addEventListener("mouseover",()=>{
s("DevBox").classList.add("DevBox__Show");
});
s("Footer-DevLink").addEventListener("mouseout",()=>{
    s("DevBox").classList.remove("DevBox__Show");
    });
};
showBox(s_);
