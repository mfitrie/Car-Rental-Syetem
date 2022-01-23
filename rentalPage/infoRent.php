<?php 
    include_once('config.php');

    $QUERY = mysqli_query($CONNECTION,"SELECT carName, carValue, pricePerDay FROM car");
    $data = [];
    $carValue = [];
    $pricePerDay = [];

    while($RESULT = mysqli_fetch_array($QUERY)){
        array_push($data, $RESULT['carName']);
        array_push($carValue, $RESULT['carValue']);
        array_push($pricePerDay, $RESULT['pricePerDay']);
    }

    // var_dump($data);
    // var_dump($carValue);
    // var_dump($pricePerDay);

?>