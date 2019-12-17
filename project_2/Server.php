<?php

include_once 'database.php';
$db = new database();

if(isset($_POST['oblects'])){
    $data = $_POST['oblects'];
    print_r($data['data']);
    foreach ($data['data'] as $value){
        $target = "No Target Is Given ";
        if(array_key_exists('target',$value)){
            print_r("test");
            $target = $value['target']['location']['href'];
//            var_dump($value['target']['location']['href']);
        }

        $event = new event($value['name'] , $value['dNow'] , $value['type'], json_encode($target));
        echo json_encode($db->InsertRow($event));

    }

}

if(isset($_GET['getAll'])){
//    echo $_GET['getAll'];
    echo (json_encode( $db->getAllRecords()));
}