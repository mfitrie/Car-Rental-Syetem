<?php 
    include_once('config.php');

    session_start();

    if(isset($_POST['cardName']) && isset($_POST['cardNumber']) && isset($_POST['cardMonth']) && isset($_POST['cardYear']) && isset($_POST['cardSecurityCode'])){
        $cardName = $_POST['cardName'];
        $cardNumber = $_POST['cardNumber'];
        $cardMonth = $_POST['cardMonth'];
        $cardYear = $_POST['cardYear'];
        $cardSecurityCode = $_POST['cardSecurityCode'];


        // foreach($_SESSION['rentalPageData'] as $i){
        //     echo $i,'<br>';
        // }

        echo $cardName.'<br>';
        echo $cardNumber.'<br>';
        echo $cardMonth.'<br>';
        echo $cardYear.'<br>';
        echo $cardSecurityCode.'<br>';
        echo date("Y-m-d");

        
        $sessionValue = $_SESSION['userFirstName'];
        echo 'Session Value = '. $sessionValue;


        $PAYMENT_SQL = "INSERT INTO payment(totalPrice ,cardNumber ,cardName ,expirationMonth, expirationYear, securityCode, status, sessionRentalPage)
        VALUES (300.00,'$cardNumber','$cardName','$cardMonth','$cardYear', $cardSecurityCode, 'Success', '$sessionValue')";

        $success = mysqli_query($CONNECTION, $PAYMENT_SQL);

        if($success){
            // header('Location: http://localhost/Web%20Project%20ICT600/frontPage/index.php');
            // while()

            $location = $_SESSION['rentalPageData'][0];
            $fromDate = $_SESSION['rentalPageData'][1];
            $toDate = $_SESSION['rentalPageData'][2];
            $carName = $_SESSION['rentalPageData'][3];
            $todayDate = date("Y-m-d");

            $user_id = user_id($CONNECTION, $sessionValue);
            $car_id = car_id($CONNECTION, $_SESSION['rentalPageData'][3]);
            $payment_id = payment_id($CONNECTION, $sessionValue);



            //////////////////////////////////////////// INSERT DATA INTO RENTING TABLE ////////////////////////////////////////////
            $RENTING_SQL = "INSERT INTO renting(location  ,fromDate  ,toDate  ,userID , carID, paymentid, todayDate)
            VALUES ('$location', '$fromDate', '$toDate', $user_id, $car_id, $payment_id, '$todayDate')";

            $renting_success = mysqli_query($CONNECTION, $RENTING_SQL);

            if($renting_success){
                $UPDATING_CAR_STATUS = "update car 
                                        set `returnStatus` = 'Rent'
                                        where carid in (
                                            select carid
                                            from renting
                                            where userID = $user_id
                                        )";

                $updating_car_success = mysqli_query($CONNECTION, $UPDATING_CAR_STATUS);
                if($updating_car_success){
                    header('Location: http://localhost/Web%20Project%20ICT600/rentalPage/afterRent.php');
                }

                echo "failed to UPDATE the data in CAR TABLE";
                
            }else{
                echo "failed to insert the data to RENTING TABLE";
            }

            //////////////////////////////////////////// INSERT DATA INTO RENTING TABLE ////////////////////////////////////////////
            
            
        }else{
            echo "failed to insert the data to PAYMENT TABLE";
        }

        // $location = $_SESSION['rentalPageData'][0];
        // $fromDate = $_SESSION['rentalPageData'][1];
        // $toDate = $_SESSION['rentalPageData'][2];
        // $carName = $_SESSION['rentalPageData'][3];
        // $todayDate = date("Y-m-d");

        // echo $location.'<br>';
        // echo $fromDate.'<br>';
        // echo $toDate.'<br>';
        // echo $carName.'<br>';
        // echo $todayDate.'<br>';

        // $user_id = user_id($CONNECTION, $sessionValue);
        // $car_id = car_id($CONNECTION, $_SESSION['rentalPageData'][3]);
        // $payment_id = payment_id($CONNECTION, $sessionValue);

        // echo $user_id.'<br>';
        // echo $car_id.'<br>';
        // echo $payment_id.'<br>';


        mysqli_close($CONNECTION);



        // echo 'USER ID = '.user_id($CONNECTION, $sessionValue).'<br>';
        // echo 'CAR ID = '.car_id($CONNECTION, $_SESSION['rentalPageData'][3]).'<br>';
        // echo 'PAYMENT ID = '.payment_id($CONNECTION, $sessionValue).'<br>';

    }





    function car_id($CONNECTION, $carName){
            $CARID_SQL = "SELECT carid FROM car WHERE carName = '$carName'";
            $CARID_QUERY = mysqli_query($CONNECTION, $CARID_SQL);
            $car_id = null;

            while($RESULT_CARID = mysqli_fetch_array($CARID_QUERY)){
                $car_id = $RESULT_CARID['carid'];
            }
            return $car_id;
    }

    function user_id($CONNECTION, $sessionValue){
            $USERID_SQL = "SELECT userid FROM customer WHERE firstName = '$sessionValue'";
            $USERID_QUERY = mysqli_query($CONNECTION, $USERID_SQL);
            $userid = null;

            // GET THE USER ID
            while($RESULT_USERID = mysqli_fetch_array($USERID_QUERY)){
                $userid = $RESULT_USERID['userid'];
            }
            return $userid;
    }


    function payment_id($CONNECTION, $sessionValue){
        $PAYMENTID_SQL = "SELECT paymentID FROM payment WHERE sessionRentalPage = '$sessionValue'";
            $PAYMENTID_QUERY = mysqli_query($CONNECTION, $PAYMENTID_SQL);
            $payment_id = null;

            while($RESULT_PAYMENTID = mysqli_fetch_array($PAYMENTID_QUERY)){
                $payment_id = $RESULT_PAYMENTID['paymentID'];
            }
            // echo 'PAYMENT ID = '.$payment_id;
            return $payment_id;
    }

    
?>