const carousel = document.querySelector(".caroussel") ;
firstImg  = carousel.querySelectorAll("img")[0] ;
arrowIcons = document.querySelectorAll(".wrapper i") ;

let isDragStart = false ;
let prevPageX , prevScrollLeft , positionDiff ;
let isDragging = false ;

const showHideIons = () => {
    let scrollWidth  = carousel.scrollWidth - carousel.clientWidth ;

    if( carousel.scrollLeft == 0 ) {
        arrowIcons[0].style.display = "none" ;
    }
    else{
        arrowIcons[0].style.display = "block" ;
    }

    if( carousel.scrollLeft == scrollWidth ) {
        arrowIcons[1].style.display = "none" ;
    }
    else{
        arrowIcons[1].style.display = "block" ;
    }
    // arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block" ;
}

// alert(firstImgWidht) ;

arrowIcons.forEach( icon => {
    icon.addEventListener("click", () => {
        
        let firstImgWidht = firstImg.clientWidth + 14 ; //largeur plus marge

        if(icon.id == "left"){
            carousel.scrollLeft -= firstImgWidht ;
        }
        else{
            carousel.scrollLeft += firstImgWidht ;
        }

        //carousel.scrollLeft += icon.id == "left" ? -firstImgWidht : firstImgWidht ;

        setTimeout(() => showHideIons() , 400 )  ;

    }) ;
});

const autoSlide = () => {

    if (carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth)) return ;


    positionDiff = Math.abs(positionDiff) ;
    let firstImgWidth = firstImg.clientWidth + 14 ;
    let valDifference = firstImgWidth - positionDiff ;
    
    if(carousel.scrollLeft > prevScrollLeft){     
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff ;
    }

    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff ;

}

const dragStart = (e) => {
    //mise a jour des variables lors du down mouse
    isDragStart = true ;
    prevPageX = e.pageX || e.touched[0].pageX ;
    prevScrollLeft = carousel.scrollLeft ;
    // console.log(carousel.scrollLeft) ;
}

const dragging = (e) => {
    if(!isDragStart) return ;
    e.preventDefault() ;
    isDragging = true ;
    positionDiff = (e.pageX || e.touched[0].pageX )- prevPageX ;
    carousel.scrollLeft = prevScrollLeft - positionDiff;  
    carousel.classList.add("dragging") ;
    showHideIons()
}

const dragStop = () => {
    isDragStart = false ;
    carousel.classList.remove("dragging") ;

    // if(!isDragging) return ;
    // isDragging = true ;
    autoSlide() ;
}

carousel.addEventListener("mousedown",dragStart) ;
carousel.addEventListener("touchstart",dragStart) ;

carousel.addEventListener("mousemove",dragging) ;
carousel.addEventListener("touchmove",dragStart) ;

carousel.addEventListener("mouseup",dragStop) ;
carousel.addEventListener("mouseleave",dragStop) ;
carousel.addEventListener("touchend",dragStart) ;