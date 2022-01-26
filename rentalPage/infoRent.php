<?php 
    include_once('config.php');

    $QUERY = mysqli_query($CONNECTION,"SELECT carName, carValue, pricePerDay FROM car");

    $imageCar = [
        'honda_civic.png',
    'ford_mustang.png',
    'nissan_gtr.png',
    'honda_jazz.png',
    'toyota_vios.png',
    'perodua_aruz.png',
    'perodua_myvi.png'
    ];

    $data = [];
    $carValue = [];
    $pricePerDay = [];

    $CAR_DIV = [];

    while($RESULT = mysqli_fetch_array($QUERY)){
        array_push($data, $RESULT['carName']);
        array_push($carValue, $RESULT['carValue']);
        array_push($pricePerDay, $RESULT['pricePerDay']);
    }

    // var_dump($data);
    // var_dump($carValue);
    // var_dump($pricePerDay);

    for($i=0; $i<sizeof($data); $i++){

        $text = "<div class='main_card_car card_property' data-id='$data[$i]'>";
        $text.="<div class='main_card_imageHolder'>";
        $text.="<img src='$imageCar[$i]' alt='$data[$i]'>";
        $text.="</div>";
        $text.="<div class='main_card_carTitle'>";
        $text.= "$data[$i]";
        $text.="</div>";
        $text.="<div class='main_card_price'>";
        $text.="<span class='price'> RM $carValue[$i] | </span>";
        $text.="<span class='pricePerMonth'>RM $pricePerDay[$i]  <span class='month'>/ day</span></span>";
        $text.="</div>";
        $text.="<button class='btnRent'>";
        $text.="Rent Now";
        $text.="</button>";
        $text.="</div>";

        array_push($CAR_DIV, $text);
    }

    // echo $CAR_DIV[3];








    function cardDiv($data, $carValue, $pricePerDay, $CAR_DIV, $i){
        // $text = "<div class='main_card_car1 card_property' data-id='$data[$i]'>";
        // $text.="<div class='main_card_imageHolder'>";
        // $text.="<img src='honda_civic.png' alt='$data[$i]'>";
        // $text.="</div>";
        // $text.="<div class='main_card_carTitle'>";
        // $text.= "$data[$i];";
        // $text.="</div>";
        // $text.="<div class='main_card_price'>";
        // $text.="<span class='price'> RM $carValue[$i] | </span>";
        // $text.="<span class='pricePerMonth'>RM $pricePerDay[$i];  <span class='month'>/ day</span></span>";
        // $text.="</div>";
        // $text.="<button class='btnRent'>";
        // $text.="Rent Now";
        // $text.="</button>";
        // $text.="</div>";
        
        // array_push($CAR_DIV, $text);
    }

?>