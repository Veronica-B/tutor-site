var left_ArrowId = document.getElementById('left-arrow');
var right_ArrowId = document.getElementById('right-arrow');
var img=document.getElementById('img');
var i= 0;

//0 1 2
var images= ['images/img1.jpg', 'images/img2.jpg', 'images/img3.jpg'];
//10000 is equaled to 10 seconds.
var time= 10000;




function change_Image(){
    img.src =images[i];

    switch(i){
        case 0:
        i=i+1;
        break;

        case 1:
        i=i+1;
        break;

        case 2:
        i=2;
        break;    
    }
}


function change_Image_Reverse(){
    img.src =images[i];
        switch(i){
            case 0:
            i=0;
            break;

            case 1:
            i=i-1;
            break;
 
            case 2:
            i=i-1;
            break;    
        }
}

    
setTimeout("change_Image()", time);


//loads the slideshow when the window loads
window.onload=change_Image;

left_ArrowId.addEventListener("click", change_Image_Reverse);

right_ArrowId.addEventListener("click", change_Image);



