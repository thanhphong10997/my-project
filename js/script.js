
$(document).ready(function() {


                    // Header Nav

function shopcartEffect() {                    
    $(".wrapper-shopcart").on ({
        click: function() {
            $(".shopcart-dropdown-has-product").fadeToggle();
        },
       
    })
}

shopcartEffect();



 

//   function userAccount() {

        $(".user-icon-link").on ({
            click: function() {

                $(".myModal-form-signin").fadeToggle();
                $(".myModal-overlay").fadeToggle();
            },

            blur: function() {
                $(".myModal-form-signin").fadeOut();
                $(".myModal-overlay").fadeOut();
            }
          
            
        })

    
//   }
//   userAccount(); 

                                    // Sort Price
$("input[type='text']").on("keyup", function(){
    var value = $(this).val().toLowerCase();
    console.log(value.indexOf());
    $(".product").filter(function() {
       var product = $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
       console.log(product)
    })
})
                                    

});