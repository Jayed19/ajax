

$(document).ready(function(){

    $("#createbutton").click(function(){
        var serializedData=$("#createform").serialize();
       
        
        $.ajax({
            url: $("#crateform").data('url'),
            data: serializedData,
            type: 'POST',
            success: function(response){
               $("#listoftask").append(

            '<div class="card mb-1"><div class="card.body">'+response.amarvar.title+'<button type="button" id="" class="close float-right"></button><span aria-hidden="true">&times;</span></div></div>'

               ) 

            }
            
        })



        $("#crateform")[0].reset();
        
    });

});

