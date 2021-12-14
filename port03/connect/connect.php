<?php
    $host = "localhost";
    $user = "wndus2408";
    $pw = "wkwhsrka25!";
    $db = "wndus2408";
    $connect = new mysqli($host, $user, $pw, $db);
    $connect -> set_charset("utf8");

    // if(mysqli_connect_errno()){
    //     echo "Database Connect False";
    // } else {
    //     echo "Database Connect True";
    // }
?>