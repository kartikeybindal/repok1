$(document).ready(function(){


    let btnNode=$('#btn1');
    btnNode.click(function(){
        let label=btnNode.html();
        if(label=='Add to cart'){
            $('#prd2').hide(2000,function(){ 
                $('#prd3').hide(2000,function(){
                    $('#prd4').hide(2000,function(){
                    btnNode.html("Added");
            
        });
    });
});
    }
    else{
        $('#img1').show(2000,function(){ 
            $('#').show(2000,function(){
                $('#img3').show(2000,function(){
                btnNode.html("Add to cart");
        
    });
});
});    }
    });
    $('#btn2').click(function(){
        $('#img1').toggle(2000,function(){ 
            $('#img2').toggle(2000,function(){
                $('#img3').toggle(2000)
});
});
    });
    $("#btn3").click(function(){
        $("#img4").fadeTo(5000, 0.4);
        $("#img5").fadeTo(5000, 0.8);
      });

      
});