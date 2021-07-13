var i = 0;
var images = [];
var time = 2000;

images[0] = "/Images/bag1.jpg";
images[1] = "/Images/bag2.jpg";
images[2] = "/Images/bag3.jpg";
images[3] = "/Images/bag4.jpg";

function changeImage(){
    document.slide.src = images[i];
    
    if (i < images.length - 1){
        i++;
    }
    else{
        i = 0;
    }
    setTimeout("changeImage()",time);
}