

$(document).ready(function(){

    $("#createbutton").click(function(){
        var serializedData=$("#createform").serialize();
       
        
        $.ajax({
            url: $("#crateform").data('url'),
            data: serializedData,
            type: 'POST',
            success: function(response){
               $("#listoftask").append(

            '<div class="card mb-1" id="taskcard" data-id="'+response.amarvar.id +'"><div class="card.body">'+response.amarvar.title+'<button type="button" id="" class="close float-right"></button><span aria-hidden="true">&times;</span></div></div>'

               ) 

            }
            
        })
        $("#id_title").val('');     
    });


  $("#listoftask").on('click','#taskcard',function(){
      var dataidno=$(this).data('id');
      
      

      $.ajax({
          url: '/task/'+dataidno +'/completed/',
          data: {
            csrfmiddlewaretoken: $("input[name=csrfmiddlewaretoken]").val(),
            id: dataidno
          },
          type: 'POST',
          success: function(){
              var carditem=$('#taskcard[data-id="'+dataidno+'"]');
              carditem.css('text-decoration','line-through');
              

          }

      })
      

  }).on('click','#closebutton',function(event){
      event.stopPropagation();
      var dataid=$(this).data('no');
    

     

    $.ajax({

     url: '/task/'+dataid+'/delete/',
     data: {

        csrfmiddlewaretoken: $("input[name=csrfmiddlewaretoken]").val(),
        id: dataid
     },
     type: 'POST',
     dataType: 'json',
     success: function(){
         $('#taskcard[data-id="'+dataid+'"]').remove();
     }

    })



  })


});

