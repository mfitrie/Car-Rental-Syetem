<?php 
    include_once('config.php');

    $QUERY = mysqli_query($CONNECTION, "SELECT email, password FROM customer");

    $data = [];

    while($RESULT = mysqli_fetch_array($QUERY)){
        array_push($data, array(
            $RESULT['email'], $RESULT['password']
        ));
    }
    mysqli_close($CONNECTION);


    echo json_encode($data);








?>