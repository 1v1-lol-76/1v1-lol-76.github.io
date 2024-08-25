<?php
require $_SERVER["DOCUMENT_ROOT"]."/lesson1/db.php";
function _ajax_() {
   return (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && ($_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest'));
}

if(!(_ajax_())){
@header("location:".$_SERVER["DOCUMENT_ROOT"]."lesson1/");
die();
}
 
function dktosn($x) {
	$sec = 0;
	foreach (array_reverse(explode(':', $x)) as $k => $v) $sec += pow(60, $k) * $v;
	return $sec;
}

$puan 			 = round($_POST["puan"],2); 
$oyuncu			 = strip_tags($_POST["oyuncu"]);
$time			 = strip_tags($_POST["time"]);
$oldurulen		 = strip_tags($_POST["oldurulen"]);
$skor			 = strip_tags($_POST["skor"]);

if($skor>100){
	die("thanks...");
}
  
$ulke   = ulke_kodu(myIP());

if($ulke == "aa"){
	$ulke="us";
}if($ulke == "tr"){
	$ulke="us";
}

if($ulke == "ru"){
	die("Thanks!");
}

$ulke_adi    = kod_ulkeadi($ulke);



/* if($ulke == "tr"){
	die("0|Hello Türkiye!");
} */


if($oldurulen==0){
   $oldurulen = 1;	
}

$dogru_puan = round($skor * $oldurulen * (15000 / dktosn($time)),2);

/*
puan: 3679.75
time: 01:19
oldurulen: 1
skor: 19.38
*/
if($puan<1000){
	//die("Your score must be 1000 or higher!");
}
 

if($dogru_puan<480000){
	
/* echo $dogru_puan."x".$puan;  */

 
if(1==1){
	
	//if($puan == $dogru_puan){
	 
	//formul => myScore.toFixed(2)*olu*(15000/playtime);
	
	$ekle = $db->query("insert into skorlar (oyuncu, puan, ip,tarih,ulke,ulke_adi,time,oldurulen,skor) 
								values('".$oyuncu."', '".$dogru_puan."', '".myIP()."','".time()."','".$ulke."','".$ulke_adi."','".$time."','".$oldurulen."','".$skor."')");
						 		//values('".$oyuncu."', '".$puan."', '".myIP()."','".time()."','".$ulke."','".$ulke_adi."','".$time."','".$oldurulen."','".$skor."')");

	if ($ekle) {
		echo 1;
	} else {
		echo "0|Error try again!";
	}
} else {
	echo "0|SCORE SAVED!!";
}
  
  
  
} else {
	echo "1|Maybe :)";
	//echo "0|Youre very genius? But im more genius =)";
}

 
?>
