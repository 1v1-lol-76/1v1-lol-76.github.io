<?php
header('Content-type: text/plain; charset=utf8');
include("SxGeo.php");
$geo = new SxGeo('SxGeo.dat');
$ip = $_GET["ip"];
$json["ulke"] = $geo->get($ip);
echo json_encode($json);       
?> 
