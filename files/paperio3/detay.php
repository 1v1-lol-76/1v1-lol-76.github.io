<?php

function _ajax_() {
   return (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && ($_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest'));
}
if(!(_ajax_())){
@header("location:".$_SERVER["DOCUMENT_ROOT"]."");
die();
}

require $_SERVER["DOCUMENT_ROOT"]."/db.php";

$id 		   = $_POST["id"];
$calistir 	   = $db->query("SELECT * FROM skorlar where id='".$id."'"); 
$detay		   = $calistir->fetch_assoc();

if($calistir->num_rows>0){	
echo "1|".$detay["oyuncu"]."|Score: <i>".ksistem($detay["puan"])."</i>|".$detay["tarih"]."|".$detay["ulke"]."|Country: <i>".$detay["ulke_adi"]."</i>|Time: <i>".$detay["time"]."</i>|Killed: <i>".$detay["oldurulen"]."</i>|Area: <i>".$detay["skor"]."%</i>";	
} else{
echo "0|Error!";
} 

?>
