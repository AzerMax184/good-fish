
var toggle = document.querySelector('.toggle') ;
var body = document.querySelector('body') ;
toggle.addEventListener('click',function(){
    body.classList.toggle('open') ;
    // alert('bon');
 
})

// toggle.addEventListener('click',function(){
//     body.classList.toggle('open') ;
//     // alert('bon');
 
// })


$(' .accueil , .apropos , .produit ,  .commande , .livraison , .sincrire ').click(
    function(){
        body.classList.toggle('open') ;
    }
)


