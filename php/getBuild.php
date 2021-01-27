<?php
$serverName = "DESKTOP-BULKD2L\\ASDF, 1433"; //serverName\instanceName, portNumber (default is 1433)
$connectionInfo = array( "Database"=>"MyDataBase", "UID"=>"asdf", "PWD"=>"1234");
$conn = sqlsrv_connect( $serverName, $connectionInfo);

if( $conn ) {
    //  echo "Connection established.<br />";
}else{
     echo "Connection could not be established.<br />";
     die( print_r( sqlsrv_errors(), true));
}


$sql = "SELECT * FROM listProducts";
$stmt = sqlsrv_query( $conn, $sql );
if( $stmt === false) {
    die( print_r( sqlsrv_errors(), true) );
}
$sub_array = array();

while( $row = sqlsrv_fetch_array( $stmt ) ) {
    array_push($sub_array, [$row['name'],$row['count'],$row['dateOut']->format('Y-m-d')]);
}


$userData = $sub_array;
        $data['status'] = 'ok';
        $data['result'] = $userData;
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
