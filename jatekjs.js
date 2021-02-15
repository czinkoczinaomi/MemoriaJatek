
var tomb=[];
var elso=true;
var elozo;
var mostani;
var alap="kepek/kartya_alap.jpg";
var pontok=0;
var lepesSzam;



function fordit(){
    lepesSzam++;
    
    for (var i = 0; i<$("#jatekter img").length; i++) {
        
        if ($(this).src===tomb[i]) {
            $("#jatekter img").eq(i).attr("src", tomb[i]);
            if (lepesSzam===1) {
                elozo=i;
             }else{
                 mostani=i;
             }
           
            
        }
        
        
    }
    
     !elso;
    $(this).off( "click");
}
function visszafordit(){
    $("#jatekter img").eq(mostani).attr("src", alap);
    $("#jatekter img").eq(elozo).attr("src", alap);
     for (var i = 0; i<$("#jatekter img").length; i++) {
        if ($(this).src===alap) {
            $("#jatekter img").eq(i).on("click", ellenoriz);

            
        }
    
}}
function kever(){
    tomb.sort(function(a, b){return 0.5 - Math.random();});
}

function ellenoriz(){
    fordit();
    if (lepesSzam===2 && tomb[mostani]===tomb[elozo]) {
        pontok++;
        
    }else{
        $(this).off( "click");
        setTimeout(visszafordit, 1000);
    }
    lepesSzam=0;
    if (pontok===6) {
        alert('nyertél!');
    }
}
function kezd(){
    for (var i = 0; i<$("#jatekter img").length; i++) {
        $("#jatekter img").eq(i).attr("src", alap);
        $("#jatekter img").eq(i).on("click", ellenoriz);
        
    }
    
    console.log("itt vagyok");
     kever();
     pontok=0;
}
$(function(){
    init();
});
function init(){
    console.log("itt vagyok");
    for (var i = 0; i < 12; i++) {
         $("#jatekter").append("<img>");
    }
    tomb=["kepek/kartya_1.jpg", "kepek/kartya_2.jpg", "kepek/kartya_3.jpg", "kepek/kartya_4.jpg",
        "kepek/kartya_5.jpg", "kepek/kartya_6.jpg", "kepek/kartya_1.jpg",
        "kepek/kartya_2.jpg", "kepek/kartya_3.jpg", "kepek/kartya_4.jpg", "kepek/kartya_5.jpg", "kepek/kartya_6.jpg"];
    $("#kezd").on("click", kezd);}
    
