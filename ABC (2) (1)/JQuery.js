$(document).ready(function(){


    let btnNode=$('#btn');
    btnNode.click(function(){
        let label=btnNode.html();
        if(label=='Hide'){
            $('#img1').hide(2000,function(){ 
                $('#img2').hide(2000,function(){
                    $('#img3').hide(2000,function(){
                    btnNode.html("Show");
            
        });
    });
});
    }
    else{
        $('#img1').show(2000,function(){ 
            $('#img2').show(2000,function(){
                $('#img3').show(2000,function(){
                btnNode.html("Hide");
        
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