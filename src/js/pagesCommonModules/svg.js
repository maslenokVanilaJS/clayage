
//Asing Attributes
function setAttributes(elem, obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            elem[prop] = obj[prop];
        }
    }
};
//Uselles functions
  function drawsAnyPaths(selectorQuery,object){
    let anyPaths = document.querySelector(selectorQuery).contentDocument.querySelectorAll("path");
    for (let i = 0; i < anyPaths.length; i++) {
        let length = anyPaths[i].getTotalLength();
        anyPaths[i].style.stroke = object.color;
        anyPaths[i].style.strokeDasharray = length;
        anyPaths[i].style.strokeDashoffset = length;  
        function draw() {

            let drawingPaths = anyPaths[i].animate(
                [
                    { strokeDashoffset: `${length}` },

                    { strokeDashoffset: '0' },

                ],

                {
                    fill: "forwards",
                    duration: object.time
                }
            );
            
        };
        function fullFill() { anyPaths[i].style.fill = object.color; };
        function customFill() {
            let customPaths = document.querySelector(selectorQuery).contentDocument.querySelectorAll(object.pathSelector);
            for (let i = 0; i < customPaths.length; i++) {
                
                customPaths[i].style.fill =object.color;
                
                   };           };
        
        if(object.custom==false){
        draw();
    //setTimeout(fullFill,object.time);
 }
    else{
draw();
//setTimeout(customFill,object.time);
    }
    
   };
};

 function mouseOnSvg(selectorQuery,object){
    function drawJug(){
let jug=document.querySelector(selectorQuery).contentDocument.querySelectorAll(".Jug");
for(let i=0;i<jug.length;i++){
        let length = jug[i].getTotalLength();
    jug[i].style.strokeDasharray = length;
    jug[i].style.strokeDashoffset = length; 
    //jug[i].style.fill="none";
    jug[i].animate(
        [
            { strokeDashoffset: `${length}` },

            { strokeDashoffset: '0' },

        ],

        {
            fill: "forwards",
            duration: 3100
        }
    );
    };
        
    };
    function rotateSvgElement(object) {
        let element = document.querySelector(object.selectorQuery).contentDocument.querySelectorAll(object.elem);
        for (let i = 0; i < element.length;i++){
            element[i].animate([{ strokeDashoffset: '0' },
            {
                strokeDashoffset: '200'
            }],
                {
                    iterations: 5,
                    duration: 700
                });
        }
      
       
    };
    let svg = document.querySelector(selectorQuery);
    svg.onmouseover=function(){
        rotateSvgElement(object);
        drawJug();
    }; 
     
};
//Svg interactivity



   
    
    




//Aply interactivity
export default   function interactivity(){
window.onload=function(){
drawsAnyPaths(".ClayAgeLogo",{
time:2000,
custom:false,
pathSelector:".Fill",
color:"white"    
});
    
mouseOnSvg(".ClayAgeLogo",{
selectorQuery:".ClayAgeLogo",
elem:'.Circles'    
});
    

};};
interactivity();
export{drawsAnyPaths,mouseOnSvg};