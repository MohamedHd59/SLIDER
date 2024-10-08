const images =['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'];
let i = 0;
let interval;
function One(){
    const index = document.getElementById('projecteur');
    index.src=images[i];
}

function First(){
    i=0;
    One();
}
function Last(){
    i=images.length-1;
    One();

}
function Next (){
    if(i>=images.length-1){
        i=0;
        One();
    }
    else{
        i++;
        One();
    }
}
function Back(){
    if(i<=0){
        i=images.length-1;
        One();
    }
    else{
        i--;
        One();

    }
}
function autoSlide() {
    interval= setInterval(() => {Next();}, 1000); 
}
function Stop() {
    clearInterval(interval);   
    
}

