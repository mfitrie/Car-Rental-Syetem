<?php 

    if(isset($_SESSION['rentalPageData'])){
        unset($_SESSION['rentalPageData']);
        // session_destroy();
    }
    include_once('rentalPage.php');
?>

<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script>
    
    Swal.fire({
        icon: 'success',
        title: 'Awesome',
        text: 'You have successfully rent a car!',
        showConfirmButton: false,
        timer: 1500
        });
</script>