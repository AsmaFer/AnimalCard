$(document).ready(function(){
    $("#discover_btn").click(function(){
        $("#main").animate({left:"22.5%"},400); 
        $("#main").animate({left:"30%"},500); 
        $("#AnimalFiche").css("visibility","hidden");
        $("#AnimalFiche").animate({left:"25%"},400);
        
        $("#AnimalDesc").animate({left:"17%"},400);
        $("#AnimalDesc").animate({left:"30%"},500);
        $("#AnimalDesc").css("visibility","visible");
    }); 
    
    $("#done_btn").click(function(){
        $("#main").animate({left:"77.5%"},400); 
        $("#main").animate({left:"70%"},500);
        $("#AnimalDesc").css("visibility","hidden");
        $("#AnimalDesc").animate({left:"75%"},400);
        
        $("#AnimalFiche").animate({left:"83.5%"},400);
        $("#AnimalFiche").animate({left:"70%"},500);
        $("#AnimalFiche").css("visibility","visible");
    });
});








