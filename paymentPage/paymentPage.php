<?php

    include_once('config.php');

    

     if(isset($_GET['location']) && isset($_GET['fromDate']) && isset($_GET['toDate']) && isset($_GET['carName'])){
        session_start();

        // $location = $_GET['location'];
        // $fromDate = $_GET['fromDate'];
        // $toDate = $_GET['toDate'];
        $fromDate = explode("-", $_GET['fromDate']);
        $toDate = explode("-", $_GET['toDate']);
        $carName = $_GET['carName'];

        $pricePerDay = 0;

        // GET THE PRICE PER DAY FROM DATABASE
        $SQL_FOR_CAR_PRICE = "SELECT pricePerDay
                            FROM car
                            WHERE carName = '$carName'";

        $sql_success = mysqli_query($CONNECTION, $SQL_FOR_CAR_PRICE);

        while($RESULT = mysqli_fetch_array($sql_success)){
            $pricePerDay = (float) $RESULT['pricePerDay'];
        }

        // CALCULATE PRICE
        $price = ($toDate[2] - $fromDate[2]) * $pricePerDay;


        $rentalPageData = array($_GET['location'], $_GET['fromDate'], $_GET['toDate'], $_GET['carName'], $price);
        $_SESSION['rentalPageData'] = $rentalPageData;

        // var_dump($_SESSION['rentalPageData']);

        // echo "have value from rentalPage.php";

        // echo $_SESSION['rentalPageData'][2];

        // header("Location: http://localhost/Web%20Project%20ICT600/paymentPage/paymentPage.php");
    }
?>




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,300&family=Roboto:wght@400;500&display=swap" rel="stylesheet">
    <link href='https://css.gg/chevron-left-o.css' rel='stylesheet'>
    <link href='https://css.gg/chevron-right-o.css' rel='stylesheet'>
    <link href='https://css.gg/close.css' rel='stylesheet'>
    <link rel="stylesheet" href="stylePayment.css">
    <script defer src="paymentScript.js"></script>
    <title>Rental Page</title>
</head>
<body>
    <header>
        <span class="header_span_title">RentalX</span>
        <ul class="header_ul_button">
            <li>username</li>
            <li>Log out</li>
        </ul>
    </header>
    <main>
        <div class="main_title">
            <div class="main_title_title">BEST SERVICES</div>
            <div class="main_title_description">Explore Our Top Deal From <br> Top-Rated Dealer</div>
        </div>
        <div class="main_div_rentSelect">
            </div>
            
            <div class="main_div_carToggle">
            </div>

        </div>
        
        <div class="background-popup"></div>

        <div class="main_div_paymentContainer payment-active">
            <a href="http://localhost/Web%20Project%20ICT600/rentalPage/rentalPage.php"><i class="gg-close iconClosePayment"></i></a>
            <p>Credit Card Details</p>
            <img src="card_debit.png" alt="card debit">
            <form action="http://localhost/Web%20Project%20ICT600/rent_and_payment.php" method="POST" name="paymentForm">
                <label for="price">Price</label>
                <span>RM <?php echo $price ?></span>
                <label for="cardName">Name on Card</label>
                <input type="text" name="cardName" placeholder="Your Name on Card" required>
                <label for="cardNumber">Card Number</label>
                <input type="number" name="cardNumber" placeholder="xxxx xxxx xxxx xxxx" required>
                <div>
                    <object data="visa.svg" type="image/svg+xml" class="visaCardIcon"></object>
                    <object data="mastercard.svg" type="image/svg+xml" class="masterCardIcon"></object>
                </div>
                <label for="expirationDate">Expiration Date</label>
                <div>
                    <input type="number" name="cardMonth" min="0" max="99" placeholder="01" required>
                    <input type="number" name="cardYear" min="2010" max="2025" placeholder="2010" required>
                </div>            
                <label for="securityCode">Security Code</label>
                <input type="number" name="cardSecurityCode" min="0" max="999" placeholder="253" required>
                <button class="btnPay">Pay</button>
            </form>
        </div>
    </main>
</body>
</html>