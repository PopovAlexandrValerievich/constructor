<?php
 var_dump($_FILES);
// Create image instance
// $dest = imagecreatefrompng('1.png');
// $src = imagecreatefrompng($_FILES["file"]["name"]);

// // Copy and merge
// imagecopymerge($dest, $src, 220, 220, 0, 0, 340, 280, 100); 
// header('Content-Type: image/png');
// imagepng($dest);

// imagedestroy($dest);
// imagedestroy($src);

// $mail = new PHPMailer\PHPMailer\PHPMailer();

// //Enable SMTP debugging.
// $mail->SMTPDebug = 3;
// //Set PHPMailer to use SMTP.
// $mail->isSMTP();
// //Set SMTP host name
// $mail->Host = "smtp.mail.ru";
// //Set this to true if SMTP host requires authentication to send email
// $mail->SMTPAuth = true;
// //Provide username and password
// $mail->Username = "despero_rx93@mail.ru";
// $mail->Password = "Riq9frkTqyGcitLyrv8e";
// //If SMTP requires TLS encryption then set it
// $mail->SMTPSecure = "ssl";
// //Set TCP port to connect to
// $mail->Port = 465;

// $mail->From = "despero_rx93@mail.ru";
// $mail->FromName = "Alexandr Popov";

// $mail->addAddress("reg@popovalexandr.ru", "Recepient Name");
// $mail->addAttachment($folder); //Filename is optional
// $mail->addAttachment($file["file"]["tmp_name"],$file["file"]["name"]); //Filename is optional
// $mail->isHTML(true);

// $mail->Subject = "Subject Text";
// $mail->Body = "<i>Mail body in HTML</i>";
// $mail->AltBody = "This is the plain text version of the email content";

// //var_dump($_FILES["file"]["tmp_name"])
// try {
// $mail->send();
// echo "Message has been sent successfully";
// } catch (Exception $e) {
// echo "Mailer Error: " . $mail->ErrorInfo;
// }

?>