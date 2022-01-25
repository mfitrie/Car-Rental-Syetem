<?php 
    include_once('config.php');

    session_start();

    if(isset($_GET['car_name']) && isset($_GET['fromDate']) && isset($_GET['toDate']) && isset($_SESSION['userFirstName'])){

        $carName = $_GET['car_name'];
        $fromDate = $_GET['fromDate'];
        $toDate = $_GET['toDate'];
        $sessionRental = $_SESSION['userFirstName'];

        $todayDate = date("Y-m-d");


        echo $todayDate.'<br>';
        echo $carName.'<br>';
        echo $fromDate.'<br>';
        echo $toDate.'<br>';
        echo $sessionRental.'<br>';


        $UPDATE_RETURN_DATE_SQL = "UPDATE renting
                SET returnDate = '$todayDate'
                WHERE carid in (
                    SELECT carid 
                    FROM car
                    WHERE carName = '$carName'
                ) AND userid in (
                    SELECT userid
                    FROM customer
                    WHERE firstName = '$sessionRental'
                )";

        $update_renting_success = mysqli_query($CONNECTION, $UPDATE_RETURN_DATE_SQL); 

        if($update_renting_success){
            // echo "renting update success";
            $UPDATE_CAR_STATUS = "UPDATE car
                                    SET returnStatus = 'Not Rent'
                                    WHERE carName = '$carName'
                                    AND carid in (
                                    SELECT carid
                                    FROM renting
                                    WHERE userid in (
                                        select userid 
                                        from customer
                                        where firstName = '$sessionRental'
                                        )
                                    )
                                    ";
            
            $update_car_success = mysqli_query($CONNECTION, $UPDATE_CAR_STATUS);
            if($update_car_success){
                header("Location: http://localhost/Web%20Project%20ICT600/rentalPage/rentalPage.php");
            }else{
                echo "update car status FAILED";
            }

        }else{
            echo "renting update FAILED";
        }

        mysqli_close($CONNECTION);

    }
?>