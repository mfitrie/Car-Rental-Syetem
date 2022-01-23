<?php  
    $SERVERNAME = 'localhost';
    $USERNAME = 'root';
    $PASSWORD = 'root';
    $DBNAME = 'car_rental_system';

    
    $CONNECTION = mysqli_connect($SERVERNAME, $USERNAME, $PASSWORD, $DBNAME, '3308');
    
    if(mysqli_connect_error()){
        echo 'Connect failed';
    }else{
        // echo 'Connect successfully';
    }
?>