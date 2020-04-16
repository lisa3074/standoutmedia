<?php
$name = $_POST['name'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$message = $_POST['message'];
$formcontent ="Fra: $name \n Email: $email \n Besked: $message";
$recipient ="iam@frontnd.ninja";
$subject ="contact form";
$mailheader = "Fra: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Tusind tak for din besked. Vi vender tilbage!";
?>


<style>
    body {
        background-color: #fff;
        text-align: center;
        font-family: sans-serif;
        font-size: 0.9rem;
        color: #000;
    }

    .tibaws {
        height: 35px;
        width: 120px;
        text-align: center;
        background-color: #7a0202;
        top: 1.9rem;
        box-shadow: 0px 1px 5px 1px #aaaaaa;
        right: 12rem;
        z-index: 10;
        margin: 0 auto;
    }

    .tilbage,
    a {
        text-decoration: none;
        font-family: sans-serif;
        font-size: 0.9rem;
        color: #fff;
        padding: 0.6rem 0;
        margin: 0;
        font-weight: 400;
    }

    .wrap {
        width: 100%;
    }

</style>
<br><br><br>
<div class="wrap">
    <a href="index.html">
        <div class="tibaws">
            <p class="tilbage">TILBAGE</p>
        </div>
    </a>
</div>
