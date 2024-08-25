<?php

function _ajax_() {
   return (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && ($_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest'));
}
if(!(_ajax_())){
@header("location:".$_SERVER["DOCUMENT_ROOT"]."/lesson1/");
die();
}

require $_SERVER["DOCUMENT_ROOT"]."/lesson1/db.php";

$surecler	   = array("today","thisweek","thismonth","thisyear","all");
$surec 		   = $_POST["times"];

if(!in_array($surec,$surecler)){
	die("0|There was no need to change the codes!");
}

	   if($surec=="today"){
	$ara_zaman = 86400;
	$baslik    = "Top 10 / Today";
} else if($surec=="thisweek"){
	$ara_zaman = 86400*7;
	$baslik    = "Top 10 / Weekly";
} else if($surec=="thismonth"){
	$ara_zaman = 86400*30;
	$baslik    = "Top 10 / Monthly";
} else if($surec=="thisyear"){
	$ara_zaman = 86400*365;
	$baslik    = "Top 10 / All";
} else if($surec=="all"){
	$ara_zaman = 86400*16436;
	$baslik    = "Top 10 / All";
}

$simdiki_zaman = time();
$fark		   = $simdiki_zaman - $ara_zaman;
$calistir = $db->query("SELECT s.* FROM skorlar s JOIN (SELECT MAX(puan) puan, oyuncu FROM skorlar WHERE tarih > ".$fark." GROUP BY oyuncu ) skorlar USING(puan ,oyuncu) ORDER BY puan DESC LIMIT 10");
//$calistir = $db->query("select * from skorlar order by puan desc limit 10");
if($calistir){
	echo "1|".$baslik."|";
} 
?>
 
 
<? 
$i=1;
while($skoroku=$calistir->fetch_assoc()){ 
if($skoroku["oyuncu"]!=""){
?>
<li class="lii anim"  style="--delay: <?=floatval($i/50)?>s" title="<?=zaman_kisa($skoroku['tarih']);?>" onclick="detay('<?=$skoroku['id'];?>');">
<span><?=$i;?></span>
<p title="<?=bayrakUlke($skoroku['id']);?>"><?=bayrakUrl($skoroku['id']);?></p>
<div class="winner"><?=mb_substr(spam($skoroku['oyuncu']),0,25);?></div>
<i><?=ksistem($skoroku['puan']);?></i>
<div style="display:none;" class="taym"><?=$skoroku['time'];?></div>
<div style="display:none;" class="area"><?=$skoroku['skor'];?>%</div>
</li>
<? } $i++; }?>