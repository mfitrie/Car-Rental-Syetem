<?php 
    include_once('config.php');

    session_start();

    $userFirstName = $_SESSION['userFirstName'];

    $data = array();

    // $data = array(
    //     'number' => array()
    // );

    
    // $data = array(
    //     'number' => array(
    //         'car_name' => null,
    //         'from_date' => null,
    //         'to_date' => null
    //     )
    // );

    $SQL_CAR_RENT = "SELECT carName, fromDate, toDate
                        FROM car
                        NATURAL JOIN renting
                        NATURAL JOIN customer
                        WHERE firstName = '$userFirstName' AND returnStatus != 'Not Rent';
                        ";

    $QUERY = mysqli_query($CONNECTION, $SQL_CAR_RENT);

    $number = 0;
    while($RESULT = mysqli_fetch_array($QUERY)){
        // array_push($data, $RESULT['carName'], $RESULT['fromDate'], $RESULT['toDate']);

        // $data['number'] = $number;
        // $data['number']['car_name'] = $RESULT['carName'];
        // $data['number']['from_date'] = $RESULT['fromDate'];
        // $data['number']['to_date'] = $RESULT['toDate'];

        array_push($data, array($RESULT['carName'], $RESULT['fromDate'], $RESULT['toDate']));


        // $number++;
        
    }

    // var_dump($data);

    echo json_encode($data);
?>