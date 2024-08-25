<!DOCTYPE html>
<html>
<head>
<title>Ws Test</title>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js"></script>
<style>
body{}
#h1{}
#mesaj{}
</style>
</head>

<body>

<h1 id="h1"></h1>
<p id="mesaj"></p>
<script type="text/javascript" src="reconnecting-websocket.js"></script>
<script>
var soket = new ReconnectingWebSocket('ws://147.135.36.41:2223');
	soket.timeoutInterval = 2000;
 

soket.onopen = function(){
	baslikYazdir("BAĞLANDI");
};

soket.onclose = function(){
	baslikYazdir("BAĞLANTI KESİLDİ");
	 
};



function baslikYazdir(baslik){
	$("#h1").text(baslik);
}

function mesajYazdir(mesaj){
	$("#mesaj").append(mesaj+"<br>");
}

 

</script>

<style>

ul.liste{
	list-style: none;
	padding: 0;
	margin: 0;
	font-family: arial;
	position: relative;
	display: inline-block;
	font-size: 15px;
	width: 300px !important;
}
ul.liste li{
	clear: both;
	margin-bottom: 1px;
	background: #e8e8e8;
	display: flex;
	align-items: center;
	border-radius: 2px;
	padding: 0px 0px;
	width: 100%;
	height: 25px;
}
ul.liste li span{
	background: #239a1c;
	font-size: 13px;
	color: #fff;
	float: right;
	height: 25px;
	border-radius: 2px;
	margin-right: 0px;
	position: absolute;
	right: 0;
	line-height: 25px;
	padding: 0 10px;
}
ul.liste li div.sira{
	display: inline;
	float: left;
	padding: 0;
	margin-right: 10px;
	margin-left: 10px;
}

ul.liste li div.nick{
	display: inline;
	float: left;
	font-weight: 700;
	color: #444;
	margin-right: 10px;
}
ul.liste li img{
	display: inline-block;
	width: 24px;
	float: left;
	margin-right: 10px;
}
</style> 
<ul class="liste">...</ul>

<script type="text/javascript" src="reconnecting-websocket.js"></script>
<script>
var soket = new ReconnectingWebSocket('ws://147.135.36.41:2223');
	soket.timeoutInterval = 2000;
 

soket.onopen = function(){
	//baslikYazdir("BAĞLANDI");
	console.log("baglandı");
};

soket.onclose = function(){
	console.log("baglantı kesildi");
	 
};




// CLIENT TARAFI VERİ OKUMA

soket.onmessage = function(e){
 
 
 //console.log('server: ', JSON.parse(e.data));
var veriler =  JSON.parse(e.data);

console.log(veriler);
 

var liste = '';
	var i = 0; 
	 
	 
 	$.each(e, function() {
			i++;
 			liste +='<li><div class="sira">'+i+'</div> <img style="width:24px;" src="flags/'+veriler.ulke+'.png" /> <div class="nick">'+veriler.nick+'</div> <span>'+veriler.skor+'%</span></li>';
		})
	$(".liste").html(liste);
 


};
 
</script>


</body>
</html>