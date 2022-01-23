<?php 
    include_once('infoRent.php');
    include_once('config.php');
    
    session_start();

    $email = $_POST['email'];
    $password = $_POST['password'];

    if(isset($email) && isset($password)){
        $SQL = "SELECT firstName FROM customer WHERE email = '$email' ";
        $QUERY = mysqli_query($CONNECTION, $SQL);

        while($CUSTOMER_RESULT = mysqli_fetch_array($QUERY)){
            $_SESSION['userFirstName'] = $CUSTOMER_RESULT['firstName'];
            // echo $CUSTOMER_RESULT['firstName'];

        }
        mysqli_close($CONNECTION);
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
    <link rel="stylesheet" href="styleRental.css">
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script defer src="scriptRental.js"></script>
    <title>Rental Page</title>
</head>
<body>
    <header>
        <span class="header_span_title">RentalX</span>
        <ul class="header_ul_button">
            <li>Mr. <?php echo $_SESSION['userFirstName'] ?></li>
            <div class="dropdown">
                <li>Current Rent</li>
                <div class="List-rent-card">
                    <p>No car rent yet. Find a nice car and rent it ;)</p>
                    <!-- <div class="dropdownContainer">
                        <img src="ford_mustang.png" alt="car">
                        <div>
                            <span class="carName">ford mustang</span>
                            <span class="rentDate">From <span class="fromDate">11/2/2020</span> to <span class="toDate">2/11/2021</span></span>
                        </div>
                    </div> -->
                    
                </div>
            </div>
            <a href="http://localhost/Web%20Project%20ICT600/frontPage/logout.php"><li>Log out</li></a>
        </ul>
    </header>
    <main>
        <div class="main_title">
            <div class="main_title_title">BEST SERVICES</div>
            <div class="main_title_description">Explore Our Top Deal From <br> Top-Rated Dealer</div>
        </div>
        <div class="main_div_rentSelect">
            <div class="main_rentSelect_card">
            <?php 
                    foreach($CAR_DIV as $div){
                        echo $div;
                    }
            ?>
                
            </div>
            
            <div class="main_div_carToggle">
                <i class="gg-chevron-left-o iconLeft"></i>
                <i class="gg-chevron-right-o iconRight"></i>
            </div>

        </div>
        <div class="main_div_rentalFormContainer">
            <div class="main_rentalFormContainer_carImage">
                <!-- <img src="Car_Image/honda_civic.png" alt="honda-civic"> -->
            </div>
            <i class="gg-close iconCloseForm"></i>
            <form action="#" class="main_rentalFormContainer_rentalForm">
                <span>Choose your booking</span>
                <label for="location">Location</label>
                <select name="location">
                    <option value="Kuala Lumpur">Kuala Lumpur</option>
                    <option value="Shah Alam">Shah Alam</option>
                    <option value="Klang">Klang</option>
                    <option value="Rawang">Rawang</option>
                    <option value="Kota Damansara">Kota Damansara</option>
                </select>
                <label for="fromDate">From Date</label>
                <input type="date" name="fromDate">
                <label for="toDate">To Date</label>
                <input type="date" name="toDate">
                <label for="vehicleName">Vehicle Name</label>
                <span class="vehicleName" name="vehicleName"></span>
                <button>Confirm Booking</button>
            </form>
        </div>
        <div class="background-popup">

        </div>

        <div class="main_div_paymentContainer">
            <i class="gg-close iconClosePayment"></i>
            <p>Credit Card Details</p>
            <img src="/card_debit.png" alt="card debit">
            <form action="#">
                <label for="price">Price</label>
                <span>RM 0000</span>
                <label for="cardName">Name on Card</label>
                <input type="text" name="cardName" placeholder="Your Name on Card">
                <label for="cardNumber">Card Number</label>
                <input type="number" name="cardNumber" placeholder="xxxx xxxx xxxx xxxx" required>
                <div>
                    <object data="/visa.svg" type="image/svg+xml" class="visaCardIcon"></object>
                    <object data="/mastercard.svg" type="image/svg+xml" class="masterCardIcon"></object>
                </div>
                <label for="expirationDate">Expiration Date</label>
                <div>
                    <input type="number" name="cardMonth" min="0" max="99" placeholder="01">
                    <input type="number" name="cardYear" min="2010" max="2025" placeholder="2010">
                </div>            
                <label for="securityCode">Security Code</label>
                <input type="number" name="cardSecurityCode" min="0" max="999" placeholder="253">
                <button>Pay</button>
            </form>
        </div>
    </main>
</body>
</html>