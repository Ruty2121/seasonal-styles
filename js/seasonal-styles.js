$("document").ready(function(){
    $('.seasons a').click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        var season = $(this).attr("href");//contents of href attribute of this element
        alert(season);
    });
});

switch(season){

case "Spring":{
    $("html").css("background-color", "pink");
    $("#wear").attr("src","images/###");
    $("#logo").attr("src","images/###");
    $("header h3").text("Spring is here!");

};
break;

case "Summer":{
    $("html").css("background-color", "yellow");
    $("#wear").attr("src","images/###");
    $("#logo").attr("src","images/###");
    $("header h3").text("Spring is here!");

};
break;

case "Fall":{
    $("html").css("background-color", "brown");
    $("#wear").attr("src","images/###");
    $("#logo").attr("src","images/###");
    $("header h3").text("Spring is here!");

};
break;

case "Winter":{
    $("html").css("background-color", "blue");
    $("#wear").attr("src","images/###");
    $("#logo").attr("src","images/###");
    $("header h3").text("Spring is here!");

};
break;

case "Default":{
    $("html").css("background-color", "grey");
    $("#wear").attr("src","images/###");
    $("#logo").attr("src","images/###");
    $("header h3").text("Spring is here!");

};
break;


};