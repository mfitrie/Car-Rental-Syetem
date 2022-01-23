<?php 
    session_start();
    if(isset($_SESSION['userFirstName'])){
        unset($_SESSION['userFirstName']);
        session_destroy();
        include_once('index.php');
    }

    
?>


<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script>
    
    Swal.fire({
        icon: 'success',
        title: 'Great',
        text: 'Log out successful!',
        showConfirmButton: false,
        timer: 1500
        });
</script>