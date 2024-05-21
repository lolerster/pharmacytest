<?php

header("Access-Control-Allow-Origin: *");
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $to = "ted.hui.zhang@gmail.com";
    $headers = "From: $name <$email>";

    if (mail($to, $subject, $message, $headers)) {
        http_response_code(200);
    } else {
        http_response_code(500);
    }
} else {
    http_response_code(405); // Method Not Allowed
}
?>
