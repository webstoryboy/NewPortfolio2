<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
    include '../connect/connect.php';
    include '../connect/session.php';
    include '../connect/sessionCheck.php';

    $boardID = $_POST['boardID'];
    $boardTitle = $_POST['boardTitle'];
    $boardContent = $_POST['boardContent'];
    $boardPass = $_POST['boardPass'];

    // echo $boardID, $boardTitle, $boardContent, $boardPass;
    // echo "<pre>";
    // var_dump($_SESSION);
    // echo "</pre>";

    $boardTitle = $connect -> real_escape_string($boardTitle);
    $boardContent = $connect -> real_escape_string($boardContent);
    $memberID = $_SESSION['memberID'];

    $sql = "SELECT * FROM phpMember WHERE memberID = {$memberID}";
    $result = $connect -> query($sql);

    if($result){
        $info = $result -> fetch_array(MYSQLI_ASSOC);

        // echo "<pre>";
        // var_dump($info);
        // echo "</pre>";

        //아이디,비밀번호 확인
        if( $info['youPass'] == $boardPass &&  $info['memberID'] == $memberID){
            //업데이트
            $sql = "UPDATE phpBoard SET boardTitle = '{$boardTitle}', boardContent = '{$boardContent}' WHERE boardID = '{$boardID}'";
            $result = $connect -> query($sql);
        } else {
            echo "<script>alert('비밀번호가 일치하지 않습니다. 다시 한번 확인해주세요'); history.back(1);</script>";
        }
    }
?>

    <script>
        location.href="board.php";
    </script>
</body>
</html>