<?php 
$to = 'uniqo@mail.com'; // Put in your email address here
$subject  = "Contact Us Form"; // The default subject. Will appear by default in all messages. Change this if you want.

// User info (DO NOT EDIT!)
$name = stripslashes($_REQUEST['name']); // sender's name
$email = stripslashes($_REQUEST['email']); // sender's email
$subject = stripslashes($_REQUEST['type']); 
$phone = stripslashes($_REQUEST['number']); 
$message = stripslashes($_REQUEST['message']);



// The message you will receive in your mailbox
// Each parts are commented to help you understand what it does exaclty.
// YOU DON'T NEED TO EDIT IT BELOW BUT IF YOU DO, DO IT WITH CAUTION!
$msg .= "Name: ".$name."\r\n\n";  // add sender's name to the message
$msg .= "E-mail: ".$email."\r\n\n";  // add sender's email to the message
if(!empty($subject))
{
	$msg .= "Subject: ".$subject."\r\n\n";  // add sender's subject to the message
}
if(!empty($phone))
{
	$msg .= "phone: ".$phone."\r\n\n";  // add sender's phone to the message
}
if(!empty($message))
{
	$msg .= "Message: ".$message."\r\n\n";  // add sender's checkboxes to the message
}

$msg .= "\r\n\n"; 

$mail = @mail($to, $subject, $msg, "From:".$email);  // This command sends the e-mail to the e-mail address contained in the $to variable

if($mail) {
	header("Location:../../index.html");	
} else {
	echo 'Message could not be sent!';   //This is the message that will be shown when an error occured: the message was not send
}
?>