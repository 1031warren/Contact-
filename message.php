if(!empty($email) && !empty($message)){ //if email message field is not empty
    if(filter_var($email, FITER_VALIDATE_EMAIL)){ //if user entered email is valid 
     $receiver = "akw438@outlook.com"; //email receiver email address
     $subject = "From: $name <$email>"; //subject of the email 
     $body = "Name: $name\nEmail: $email\nPhone: $phone\nWebsite: $website\n\nMessage: $message\n\nRegards,\n$name";
     $sender = "From $email"; //sender email 
     if(mail($receiver, $subject, $body, $sneder)){ //mail() is a inbuilt php function to send mail 
        echo "Your message has been sent";
      }else{
        echo "Sorry, failed to send your message!";
      }
    }else{
      echo "Enter a valid email address!";

    }
 }else{
   echo "Email and password field is required!";
 }
?>
