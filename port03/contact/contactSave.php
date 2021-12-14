<?php

include "PHPMailer.php"; 
include "SMTP.php";

$contactFrom = $_POST['contactFrom'];
$contactTo = $_POST['contactTo'];
$contactSubject = $_POST['contactSubject'];
$contactContent = $_POST['contactContent'];

$mail = new PHPMailer();
$mail->isSMTP();

//Enable SMTP debugging
//SMTP::DEBUG_OFF = off (for production use)
//SMTP::DEBUG_CLIENT = client messages
//SMTP::DEBUG_SERVER = client and server messages
$mail->SMTPDebug = SMTP::DEBUG_SERVER;
$mail->Host = 'smtp.naver.com';
$mail->Port = 465;
$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
$mail->SMTPAuth = true;
$mail->CharSet = 'UTF-8'; 
$mail->Username = 'wndus24088';
$mail->Password = 'wkwhsrka25!';
$mail->setFrom('wndus24088@naver.com', 'Port1');
$mail->addReplyTo($contactFrom, '안녕하세요!');
$mail->addAddress('wndus24088@naver.com', 'jooyeon');
$mail->Subject = $contactSubject;
//$mail->msgHTML(file_get_contents('contents.html'), __DIR__);
$mail->msgHTML($contactContent);
$mail->Body = "<html>
<body>
<h3> mail : $contactFrom</h3>
 <p>$contactContent</p>
</body>
</html>";
//$mail->addAttachment('../assets/img/post01.jpg');
$mail->AltBody = $contactContent;
//send the message, check for errors
if (!$mail->send()) {
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message sent!';
}


?>

<script>
location.href="../index3.html";
</script>