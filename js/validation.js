$(document).ready(function(){
var nameError = true;
var MailError = true;
var messageError = true;


    function dangerClass(inputName) {
        $(inputName).removeClass("border-gray-500");
        $(inputName).addClass("border-red-500");
    }

    function clearClass(inputName) {
        var selectedDiv = 'p#'+ $(inputName).attr('id');
        $(inputName).addClass("border-gray-500");
        $(inputName).removeClass("border-red-500");
        $(selectedDiv).remove();
    }

    function IsEmail(email) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!regex.test(email)) {
          return false;
        }else{
          return true;
        }
      }


      $("#name").on("input", function(){        
        if($(this).val().length < 3){
            nameError = true;
            dangerClass(this);
             var inputId = $(this).attr('id');
             var pName = "p#" + inputId;
             if(!$(pName).length > 0){ 
                $(this).after('<p id="'+ inputId +'" class="text-red-500 text-xs italic">Entry must be longer than three words!</p>');
             }
            }
             else{
            nameError = false;
            clearClass(this);
        }
          
  });

  $("#mail").on("input", function(){ 
    var inputId = $(this).attr('id');
    var pName = "p#" + inputId;
    
    if($(this).val().length < 3){
      MailError = true;   
        dangerClass(this);
         if(!$(pName).length > 0){
            $(this).after('<p id="'+ inputId +'" class="text-red-500 text-xs italic">Entry must be longer than three words!</p>');
         }
        }
    else{
        clearClass(this);
        var emailSub = $(this).val();
          if(IsEmail(emailSub)==false){
            formErrors = true;
            if(!$(pName).length > 0){
              dangerClass(this);
              $(this).after('<p id="'+ inputId +'" class="text-red-500 text-xs italic">Please enter a valid email!</p>');
            }
            return false;
          }else{
            MailError = false;   
            clearClass(this);
            return true;
          }
    }
      
  });

  $("#msg").on("input", function(){
    var inputId = $(this).attr('id');
    var pName = "p#" + inputId; 
    if($(this).val().length < 3){
      messageError = true;
      dangerClass(this);
      if(!$(pName).length > 0){
        $(this).after('<p id="'+ inputId +'" class="text-red-500 text-xs italic">Entry must be longer than three words!</p>');
      }
    }else{
      messageError = false;
      clearClass(this);
    }
  }); 

    $("#cpffContact").submit(function(e){
      e.preventDefault();

      if((nameError == false) && (MailError == false) && (messageError == false)){
        $('#errorMsg').html('');
        var name = $("#name").val();
        var From = $("#mail").val();
        var message = $("#msg").val();
        $("#errorMsg").load("code/contact_code.php", {
          name: name,
          message: message,
          email: From
          });

          nameError = true;
          MailError = true;
          messageError = true;
         
      }else{
      $('#errorMsg').html('<p class="bg-red-500 p-4 mb-4 text-normal text-white font-bold uppercase"><i class="fas fa-exclamation-circle"></i> Please fill out all the required fields!</p>');
        if(nameError == true){
          dangerClass('#name');
          var pName = "p#" + 'name';
          if(!$(pName).length > 0){ 
              $('#name').after('<p id="name" class="text-red-500 text-xs italic">Your name must be longer than three words</p>');
          }  

        }

        if(MailError == true){
          dangerClass('#mail');
          var pName = "p#" + 'mail';
          if(!$(pName).length > 0){ 
              $('#mail').after('<p id="mail" class="text-red-500 text-xs italic">Please enter an email!</p>');
          }  

        }
        var emailSub = $('#mail').val();

        if(IsEmail(emailSub)==false){
          dangerClass('#mail');
          var pName = "p#" + 'mail';
          if(!$(pName).length > 0){ 
              $('#mail').after('<p id="mail" class="text-red-500 text-xs italic">Please enter a valid email!</p>');
          } 

        }

        if(messageError == true){
          dangerClass('#msg');
          var pName = "p#" + 'msg';
          if(!$(pName).length > 0){ 
              $('#msg').after('<p id="msg" class="text-red-500 text-xs italic">Your message must be longer than three words!</p>');
          }  

        }
      }
    });
});
