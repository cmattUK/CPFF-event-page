<?php
    $success = false;
    $nameEmpty = false;
    $mailEmpty = false;
    $msgEmpty = false;
    $mailFalse = false;
    $errorMsg = false;
    $alias = false;

    $aliasName = $_POST['alias'];
    $name = $_POST['name'];
    $From = $_POST['email'];
    $message = $_POST['message'];
    $nameClean = strip_tags($name);
    $messageClean = strip_tags($message);

   //make sure email is valid
   function invalidEmail($email){
        $result;
        if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $result = true;
        }
        else{
            $result = false;
        }
        return $result;
    }
    if(isset($aliasName)){
        alias = true;
    }

    if(empty($nameClean)){
        $nameEmpty = true;
    } 
    
    if(empty($From)){
        $mailEmpty = true;
    } 
    
    if(empty($messageClean)){
        $msgEmpty = true;
    }
    if (invalidEmail($From) !== false){
        $mailFalse = true;
    }

    if((($nameEmpty== false) && ($mailEmpty== false) && ($msgEmpty== false) && ($mailFalse== false)) && ($alias== false)){
        $to = "mathin2@hotmail.com", "garry@cpff.ac.uk";
        $subject = "CPFF 37 Enquiry";
        $txt = "Contender, you have an email from ".$name.".\n\n".$message;
        $headers = "From: ".$From;
        mail($to,$subject,$txt,$headers);
        $success = true;
        echo "<p class='bg-green-500 p-6 mb-4 text-lg font-bold uppercase'><i class='far fa-check-circle'></i> Message sent!<span class='block text-white text-sm'> We'll be in touch shortly.</span></p>";
    }
    ?>
    <script>

        function scrollTopAnimated() {
            $('html, body').animate({
            scrollTop: $('#contactTop').offset().top
        }, 500, function() {  
        });
        }

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

        var nameEmpty = '<?php echo $nameEmpty ?>';
        var mailEmpty = '<?php echo $mailEmpty ?>';
        var msgEmpty = '<?php echo $msgEmpty ?>';
        var mailFalse = '<?php echo $mailFalse ?>';

    if((nameEmpty == true) || (mailEmpty == true) || (msgEmpty == true) || (mailFalse == true)){
        
        $('#errorMsg').html('<p class="bg-red-500 p-4 mb-4 text-normal text-white font-bold uppercase"><i class="fas fa-exclamation-circle"></i> Please fill out all the required fields!</p>');

        if(nameEmpty == true){
            scrollTopAnimated();
            dangerClass('#name');
            var pName = "p#" + 'name';
            if(!$(pName).length > 0){ 
                $('#name').after('<p id="name" class="text-red-500 text-xs italic">Please enter a name!</p>');
            }
            
        }else{
            clearClass('#name')
        }

        if(mailEmpty == true){
            scrollTopAnimated();
            dangerClass('#mail');
            var pName = "p#" + 'mail';
            if(!$(pName).length > 0){ 
                $('#mail').after('<p id="mail" class="text-red-500 text-xs italic">Please enter a valid email!</p>');
            }
            

        }else if(mailFalse == true){
            scrollTopAnimated();
            dangerClass('#mail');
            var pName = "p#" + 'mail';
            if(!$(pName).length > 0){ 
                $('#mail').after('<p id="mail" class="text-red-500 text-xs italic">Please enter a valid email!</p>');
            }
            
        }  
        else{
            clearClass('#mail');
        }

        if(msgEmpty == true){
            scrollTopAnimated();
            dangerClass('#msg');
            var pName = "p#" + 'msg';
            if(!$(pName).length > 0){ 
                $('#msg').after('<p id="msg" class="text-red-500 text-xs italic">Your message must be longer than 3 words!</p>');
            }   
        }  
        else{
            clearClass('#msg');
        }
        
    }else{
        scrollTopAnimated();
    
        $('#cpffContact').trigger("reset");
        clearClass('#msg');
        clearClass('#name');
        clearClass('#mail');
    }

    </script>