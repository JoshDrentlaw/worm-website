<?php
    // Define vars and set to empty values
    $email = $worms = $compost = $delivery = $comment = "";

    $email_to = "drumbum4life@gmail.com";
    $email_subject = "Test form submit.";

    // Trim and remove unwanted chars from submission
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $email = sanitize($_POST["email"]);
        $worms = sanitize($_POST["worms"]);
        $compost = sanitize($_POST["compost"]);
        $delivery = sanitize($_POST["deliveryOption"]);
        $comment = sanitize($_POST["comment"]);
    }

    function sanitize($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    // Begin constructing email
    $email_message = "Form details below.\n\n";

    function clean_string($string) {
        $bad = array("content-type", "bcc:", "to:", "cc:", "href");
        return str_replace($bad, "", $string);
    }

    $email_message .= "Email: ".clean_string($email)."\n"; 
    $email_message .= "Worms: ".clean_string($worms)."\n"; 
    $email_message .= "Compost: ".clean_string($compost)."\n"; 
    $email_message .= "Delivery Option: ".clean_string($delivery)."\n"; 
    $email_message .= "Comment: ".clean_string($comment)."\n";

    // Create email headers
    $headers = 'From: ' . $email_to . "\r\n" . 
        'Reply-To: ' . $email . "\r\n" . 
        'X-Mailer: PHP/' . phpversion();
    mail($email_to, $email_subject, $email_message, $headers);
?>

Thank you for contaction us.