/*global document , console ,window ,alert*/
/*jslint plusplus : true , evil : true */
/* eslint no-console: "off" */
var myHeight = document.getElementById('car-height'),
    myWidth = document.getElementById('car-width'),
    myColor = document.getElementById('my-color');
var myTable = document.getElementById('red'),
    mySubmit = document.getElementById('btn'),
    myDownload = document.getElementById('download'),
    myImport = document.getElementById('important'),
    myBackChange = document.getElementById('choiseback');
    

mySubmit.addEventListener('click', function (e) {
    'use strict';
    if(myHeight.value > 94 || myWidth.value > 94){
        alert("يجب ادخال قيم اصغر من 95"); }
    else if (window.screen.width <= 320 & myWidth.value > 15 ){
        alert("في الشاشتك تستطيع انشاء فقط 15 مربع في العرض")
    }
     else if (window.screen.width <= 375 & myWidth.value > 18 ){
        alert("في الشاشتك تستطيع انشاء فقط 18 مربع في العرض")
    }else if (window.screen.width <= 425 & myWidth.value > 21 ){
       alert("في الشاشتك تستطيع انشاء فقط 21 مربع في العرض")
    }else if (window.screen.width <= 768 & myWidth.value > 38 ){
        alert("في الشاشتك تستطيع انشاء فقط 38 مربع في العرض")
    } 
     else if(myHeight.value > 0 & myWidth.value > 0){
    console.log('the client was submit the graid dimention');
    myTable.innerHTML = '';
    e.preventDefault();
    myImport.style='display:none';
    myBackChange.style='display:none';
    myDownload.style='display:none';
    makeTable();
    window.scrollTo(0,600);
   
    }
    else{
        alert("يجب ادخال بيانات");
    }
});
myTable.addEventListener('click', function (e) {
    'use strict';
   if (e.target.nodeName === 'TD') {
       e.target.style.backgroundColor = myColor.value;
       myDownload.style='display:bloc';
       myBackChange.style='display:bloc';
      
   } 
});
myTable.addEventListener('dblclick', function (e) {
    'use strict';
   if (e.target.nodeName === 'TD') {
       e.target.style.backgroundColor = "";
   } 
});
function myNewcolor(){
myTable.addEventListener('click', function (e) {
    'use strict';
   if (e.target.nodeName === 'TD') {
       e.target.style.backgroundColor = "";
   } 
});
    }
function myNewcolor2(){
myTable.addEventListener('click', function (e) {
    'use strict';
   if (e.target.nodeName === 'TD') {
       e.target.style.backgroundColor = myColor.value;
   } 
});
    }
function makeTable() {
    'use strict';
    var i,j;
    for (i= 0;i < myHeight.value; i++){
        var height = myTable.insertRow(i);
        for(j = 0; j < myWidth.value; j++){
             height.insertCell(j);
        }
    }
    
}

function changeBack(){
    var color = document.getElementById('backcolor').value;
        document.querySelector('tbody').style.backgroundColor=color;
    
}
function removeBack(){
    var color = document.getElementById('backcolor').value;
        document.querySelector('tbody').style='none';
    
}