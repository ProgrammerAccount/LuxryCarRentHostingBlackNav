let element = document.getElementById("slider");
let index = 1;
let slider = function () {
    element.style.opacity = "0";
    setTimeout(function(){element.style.backgroundImage = "url('img/slider/"+index+".jpg')";},300)
    setTimeout(function(){element.style.opacity = "1";},600)

    index++;
    if (index > 3)
        index = 1;
        
};
setInterval(slider, 5000);