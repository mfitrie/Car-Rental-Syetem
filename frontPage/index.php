
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,300&family=Roboto:wght@400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <link href='https://css.gg/close.css' rel='stylesheet'>
    <script defer src="script.js"></script>
    <script defer src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <title>Car rental</title>
</head>
<body>
    <header>
        <span class="header_span_title">RentalX</span>
        <ul class="header_ul_button">
            <li>Sign up</li>
            <li>Sign in</li>
        </ul>
    </header>
    <main>
        <div class="main_div_box">
            <div class="main_div_title">
                <span>Looking for a rental car?</span>
            </div>
            <div class="main_div_description">
                Discover RentalX car rental options in Malaysia with Rent a Car Select from a range of car options and local special.
            </div>
        </div>
        <div class="main_div_pictureBox">
            <div class="main_pictureBox_picture">
                <img src="car_lexus.png" alt="car picture">
            </div>
        </div>
    </main>
    <div class="div_signUp">
        <div class="signUp_image">
            <object data="RentalX.svg" type="image/svg+xml" class="SignUpTitle"></object>
        </div>
        <div class="signUp_form">
        <i class="gg-close iconCloseSignUp"></i>
            <form action="registration.php" method="POST" name="SignUpForm">
                <span>Sign Up</span>
                <input type="text" name="firstName" placeholder="First Name" required>
                <input type="text" name="lastName" placeholder="Last Name" required>
                <input type="email" name="SignUp_email" placeholder="Email" required>
                <input type="password" name="SignUp_password" placeholder="Password" required>
                <button class="btn_submitSignUp">Sign up</button>
            </form>
        </div>
    </div>

   <div class="div_signIn ">
       <div class="signUp_image signInImage">
        <object data="RentalX.svg" type="image/svg+xml" class="SignUpTitle"></object>
       </div>
       <div class="signIn_form">
        <i class="gg-close iconCloseSignIn"></i>
           <form action="http://localhost/Web%20Project%20ICT600/rentalPage/rentalPage.php" method="POST" name="SignInForm">
               <span>Sign In</span>
               <input type="email" name="email" class="email" placeholder="Email" required>
               <input type="password" name="password" class="password" placeholder="Password" required>
               <button class="btn_submitSignIn">Sign in</button>
           </form>
       </div>
   </div>

   <div class="background-popup">

   </div>
</body>
</html>