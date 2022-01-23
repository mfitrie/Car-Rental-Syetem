<?php 
    include_once('config.php');


    // SIGN UP

    $first_name = $_POST['firstName'];
    $last_Name = $_POST['lastName'];
    $Sign_up_email = $_POST['SignUp_email'];
    $Sign_up_password = $_POST['SignUp_password'];

    if(isset($first_name) && isset($last_Name) && isset($Sign_up_email) && isset($Sign_up_password)){

        $SQL = "INSERT INTO customer(firstName,lastName,email,password)
        VALUES ('$first_name','$last_Name','$Sign_up_email','$Sign_up_password');";

        $success = mysqli_query($CONNECTION, $SQL);

        if($success){
            header('Location: http://localhost/Web%20Project%20ICT600/frontPage/index.php');
        }else{
            echo "failed to insert the data";
        }
    }

    mysqli_close($CONNECTION);




?>