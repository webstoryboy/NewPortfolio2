<?php
    include "../connect/connect.php";

    $sql = "CREATE TABLE myComment (";
	$sql .= "myComment int(10) unsigned NOT NULL AUTO_INCREMENT,";
	$sql .= "youName varchar(20) NOT NULL,";
	$sql .= "youText varchar(50) NOT NULL,";
	$sql .= "regTime int(15) NOT NULL,";
	// $sql .= "star varchar(15) NOT NULL,";

	$sql .= "PRIMARY KEY (myComment)) CHARSET=utf8";

    $result = $connect -> query($sql);

    if( $result ){
        echo "Create Comment Complete";
    } else {
        echo "Create Comment False";
    }
?>