<?php

   $array = array("firstname" => "", "name" => "", "email" => "", "phone" => "", "message" => "", "isSuccess" => false, "firstnameError" => "", "nameError" => "", "emailError" => "", "phoneError" => "", "messageError" => ""); 
     
     $emailTo = "oussama.eddahri.1@gmail.com";
     if($_SERVER["REQUEST_METHOD"] == "POST"){
     $array["firstname"] = verifyinput($_POST["firstname"]);
     $array["name"] = verifyinput($_POST["name"]);
     $array["email"] = verifyinput($_POST["email"]);
     $array["phone"] = verifyinput($_POST["phone"]);
     $array["message"] = verifyinput($_POST["message"]);
     $array["isSuccess"] = true;
         $emailText = "";
     
     if(empty($array["firstname"])){
    $array["firstnameError"] = "Please Enter Your Fistname !";
    $array["isSuccess"] = false;
     } else {$emailText .= "FirstName: {$array["firstname"]}\n";}
     if(empty($array["name"])){
      $array["nameError"] = "Please Enter Your Name !";
      $array["isSuccess"] = false;
     } else { $emailText .= "Name: {$array["name"]}\n";}
     if(!isEmail($array["email"])){
     $array["emailError"] = "Please Enter A Valide Email !";
         $array["isSuccess"] = false;
     } else { $emailText .= "Email: {$array["email"]}\n";}
    if(!isPhone($array["phone"])){
    $array["phoneError"] = "Please Enter A Valid Phone Number";
         $array["isSuccess"] = false;
    } else { $emailText .= "Phone Number: {$array["phone"]}\n";}
    if(empty($array["message"])){
    $array["messageError"] = "Please Enter Your Message !";
    $array["isSuccess"] = false;
     } else { $emailText .= "Message: {$array["message"]}\n"; }
        if($array["isSuccess"]){
        $headers = "From: {$array["firstname"]} {$array["name"]} <{$array["email"]}>\r\nReply-To: {$array["email"]}";
        mail($emailTo, "Axa Message SITEWEB",$emailText,$headers); 
        }
         echo json_encode($array);
}
     function isPhone($var){
     return preg_match("/^[0-9 ]*$/",$var);
     }
     function verifyinput($var){
     $var = trim($var);
     $var = stripslashes($var);
     $var = htmlspecialchars($var);
         return $var;
     }
     function isEmail($var)
     {
         return filter_var($var,FILTER_VALIDATE_EMAIL);
     }
    
?>

