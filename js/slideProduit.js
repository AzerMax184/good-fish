
var posXC = $(".produit-center").css("left") ; 
var posYC = $(".produit-center").css("top") ;
var widthC = $(".produit-center").css("width") ;
var heightC = $(".produit-center").css("height") ;

var posXL = $(".produit-left").css("left") ;
var posYL = $(".produit-left").css("top") ;
var widthL = $(".produit-left").css("width") ;
var heightL = $(".produit-left").css("height") ;

var posXR = $(".produit-right").css("left") ;
var posYR = $(".produit-right").css("top") ;
var widthR = $(".produit-right").css("width") ;
var heightR = $(".produit-right").css("height") ;


// alert("center x:" + posXC + " --- y:" + posYC + " --- w:" + widthC + " --- h:" + heightC) ;
// alert("left x:" + posXL + " --- y:" + posYL + " --- w:" + widthL + " --- h:" + heightL) ;
// alert("right x:" + posXR + " --- y:" + posYR + " --- w:" + widthR + " --- h:" + heightR) ;

// alert( parseInt(posXC) + 100 )

function animateLeft(){

    $(".produit-center").animate({top: parseInt(posYL) - 50, left: parseInt(posXL) - 50}, 500)
                        .css( "width", widthL) 
                        .css( "height", heightL) ;

    $(".produit-left").animate({top: parseInt(posYL) - 50, left: parseInt(posXL) - 50}, 500)
                      .css("display","none")
                      //.fadeOut("show")
    
    alert( $(".info-principal").css("height"))
                
}

function animateRight(){
    // alert("Animation")
}


$(".fleche-left").click(
    function(){
        animateLeft()
    }
)

$(".fleche-right").click(
    function(){
        animateRight()
    }
)