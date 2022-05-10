pole11.src="img/mama.png";
var steps=1;
var levels=1;
function mama_go(event){
    switch(event.key){
        case 'ArrowRight':
            if(steps<8){
                idImg=document.getElementById('pole'+levels+steps);
                idImg.src="img/spacer.gif"
                steps++;
                idImg=document.getElementById('pole'+levels+steps);
                idImg.src="img/mama.png"
            }
            break;
        case 'ArrowLeft':
            if(steps>1){
                idImg=document.getElementById('pole'+levels+steps);
                idImg.src="img/spacer.gif"
                steps--;
                idImg=document.getElementById('pole'+levels+steps);
                idImg.src="img/mama.png"
            }
            break;
        case 'ArrowUp':
            if (levels>1){
                idImg=document.getElementById('pole'+levels+steps);
                idImg.src="img/spacer.gif"
                levels--;
                idImg=document.getElementById('pole'+levels+steps);
                idImg.src="img/mama.png"
            }
            break;
        case 'ArrowDown':
            if(levels<3){
                idImg=document.getElementById('pole'+levels+steps);
                idImg.src="img/spacer.gif"
                levels++;
                idImg=document.getElementById('pole'+levels+steps);
                idImg.src="img/mama.png"
            }
            break;


    }
}
document.addEventListener('keydown',mama_go)