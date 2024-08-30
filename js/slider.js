var numero = 5 ; // image de depart
var nbreImg = 5 ; // nombre total d'images




$('#suivant').click(
    function(){
        numero = numero+1 ;
        if(numero > nbreImg){       
            numero = 1 ;
        }
        changeText() ;
        $('header').css( "background-image", "url(images/slider/poisson"+numero+".jpg)" ) ;

        $('#resultat').html(numero) ;
    }
)
    
$('#precedent').click(
    function(){
        numero = numero-1 ;
        if(numero < 1){       
            numero = nbreImg ;
        }
        changeText() ;
        $('header').css( "background-image", "url(images/slider/poisson"+numero+".jpg)" ) ;
        
        $('#resultat').html(numero) ;
    }
)


function changeText(){
    if (numero == 1){
        $('header .ombre p').html("Consultez la totalité de <a href=''>Nos produits</a> en ligne")
        mouvBoule1()
        $('header').css( "background-position", "bottom" ) ;
        balAnim(1)
    }
    if (numero == 2){
        $('header .ombre p').html("lancez votre <a href=''>Commande</a> a distance sur notre site")
        mouvBoule2()
        $('header').css( "background-position", "center" ) ;

        balAnim(2)
      
    }
    if (numero == 3){
        $('header .ombre p').html("Choissez le mode de <a href=''>Livraison</a> qui vous convient le mieux")
        mouvBoule3()
        $('header').css( "background-position", "top" ) ;

        balAnim(3)
    }
    if (numero == 4){
        $('header .ombre p').html("<a href=''>Inscrivez</a> vous sur votre site pour rester informer")
        mouvBoule4()
        $('header').css( "background-position", "center" ) ;

        balAnim(4)
    }
    if (numero == 5){
        $('header .ombre p').html("Faites vos <a href=''>commandes</a> en ligne sur notre site web et vous <a href=''>livrez</a>")
        mouvBoule5()
        $('header').css( "background-position", "top" ) ;

        balAnim(5)
    }
}

function mouvBoule1(){
    $(".bulle-haut").animate({top: '90', left: '-350'}, 350) 
    $(".bulle-bas").animate({bottom: '40', left: '1200'}, 350) ;   
}

function mouvBoule2(){
    $(".bulle-haut").animate({top: '390', left: '-150'}, 350) 
    $(".bulle-bas").animate({bottom: '340', left: '1200'}, 350) ;   
}

function mouvBoule3(){
    $(".bulle-haut").animate({top: '-60', left: '1000'}, 350) 
    $(".bulle-bas").animate({bottom: '-60', left: '-80'}, 350) ;   
}

function mouvBoule4(){
    $(".bulle-haut").animate({top: '190', left: '-350'}, 350) 
    $(".bulle-bas").animate({bottom: '140', left: '1200'}, 350) ;   
}

function mouvBoule5(){
    $(".bulle-haut").animate({top: '-60', left: '-80'}, 350) 
    $(".bulle-bas").animate({bottom: '-60', left: '1000'}, 350) ;   
}

function slideSuivant (){
    numero = numero + 1 ;
    if(numero > nbreImg){       
        numero = 1 ;
    }
    changeText() ;
    $('header').css( "background-image", "url(images/slider/poisson"+numero+".jpg)" ) ;
    $('#resultat').html(numero) ;
}



function balAnim(actu){
    for(var i = 1 ; i <= 5 ; i++){

        
        $('.bal-'+i).css("background","white")
        .css("width","10px")
        .css("height","10px")

        $('.bal-'+actu).css("background","rgba(64, 224, 208, 0.473)")
        .css("width","15px")
        .css("height","15px")
        // .css("margin-top","+50px")

    }
}

setInterval(function() { slideSuivant(); }, 10000);


