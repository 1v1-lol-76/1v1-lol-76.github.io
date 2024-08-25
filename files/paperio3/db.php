<?
error_reporting(1);
# db baglantısı
 
 
$host = "localhost";
$kullanici = "pain_papa";  
$sifre 	   = "31032532a";
$db_adi    = "pain_papa";


$mysite = "https://physical-geography.com/files/paperio3";

$db = mysqli_connect($host, $kullanici, $sifre, $db_adi);
//if (mysqli_connect_errno()) {	die('Hata Kodu: 01');  }
if(@$db){
$db->query("SET CHARACTER SET 'utf8mb4'");
$db->query("SET NAMES 'utf8mb4'");
}
 
$s1 = 3774;
$s2 = 3789;
 
function mobil(){
	
        $useragent=$_SERVER['HTTP_USER_AGENT'];
        if(preg_match('/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i',$useragent)||preg_match('/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i',substr($useragent,0,4))){ 
			return 1; //echo "mobile";
        }else{
           return 0; // echo "desktop";
        }
}
		
function rasgeleNick() {
	$isimler = array('elif','ergiiin','melike','Cansu','Simal','leo','Leydi','DolunaAY','selena','esraa','EMERSON', 'NELEO', '05032020', 'TERRORIST', 'SLITHERKING', 'AZERTY', 'MOGEKO', 'PLAY', 'FUFUFUFUFUFUFUFUFUFU', 'RIANNE', 'MALICE', 'DIE', 'GE', 'CHASUUUUUUUUUU', 'HBINJFR', 'BOI', 'BLANK', 'ROAN', 'BROKELILBABY', 'David J.', 'GOFGOL', 'KENZIE', 'NIGGER', 'COOL', 'RR', 'PAPA', 'ACTPAHN', 'BRUH', 'POOP', 'ASS', 'RAVENCLAW', 'FURY4LIFE', 'LEX305', 'YUYU', 'YEEEEEEEEEEEEEEET', 'TINYBLUETAPEWORM', 'WWW', 'NLE', 'SHANESAW', 'COOKIES', '69', 'CAT', 'GOAWAY', 'NNNN', 'MAL', 'JACKJACK', 'TINYBLUE', 'UID', 'MICHELLE', 'CLAY', 'POLLI', 'J', 'NOU', 'NAREK', 'SNAME', 'SLIMSHADY', 'SCOTLAND', 'GFGFG', 'KYLE', 'YOYO', 'AJ', 'SAM', 'I', 'HEY', 'GOOSE', 'SLITHERSPACE', 'HELLO', 'CORBAN', 'SOMEGUY', 'OOF', 'ANONYMOUS', 'AS', 'SUP', 'MASTER', 'FRISK', 'QBT', '76', 'JEREMY', 'MAMEN', 'WKIMORTALKM', 'PARYNHAR', 'JOHNWILKESBOOTH', 'CG', 'SIKEEEEEE', 'CARLIYONNA', 'NEWBIE', '2020', 'COOKIE', 'BISH', 'LA', 'HUSLEE', 'CAKEJELLO', 'SUPER', 'NOOB', 'BECARFULCHIREN', 'X', 'TTTT', 'SAD', 'NOTHING', 'HAILEY', 'EMM', 'YEEYEE', 'DEKU', 'NO', 'LEXI', 'KILLERSQUID48', 'HAYHAY', 'MILES', 'ISORULE', 'H', 'IRULE', 'BRO', 'INSCHOOL', 'GENOSANS', 'SLITHER', 'TY', 'STICKYCHIP', 'KERCH00', 'PRO', '666', '121356', 'BLACKPINK', '5346456', 'UNOOBIFUKILLME', 'U2', 'KIARA', 'GOATSAVAGE', 'SNAKE', 'FRED', 'FRAI', 'ABBY', 'BIGBOI', 'BILLYBOB', 'HI', 'RIP', 'JOEMAMA', 'YOURMOMGAY', 'OLOL', 'SEAN', 'MIKA', '55555', 'BOB', 'BIGBIO', 'BTS', 'MEME', 'KENDALL', 'CHIKILOVE08', 'VAKA', 'JOE', 'JORDAN', 'NYA', 'HAMSTER', 'TIM', 'DETH', 'EPICFREZZI', 'ELSIE', 'DOGYNB', 'CACA', 'BIGDADDY', 'VY', 'GRYFFINDOR', 'CHIKY', 'NTM', 'JAY', 'EEG', 'GINGERBREAD', 'SAILOR', 'BB', 'K', 'CROUCHY', 'CASINO', 'COOPER', 'IKILLU', 'WALOL', 'SHEEP', 'CHRIS', 'NGD', 'USUCK', 'DAVID', 'PUGGY', 'TARTARUS', 'BUMBLE', 'RAYDEN', 'FUKYOU', 'MATT', 'BUM', 'MEEP', 'FVFFGVFGB', 'XANDER', 'MOMMY', 'QUEENSNAKE', 'IDK', 'HQA', 'CHICKEN', 'URMOM', 'MERMAID', 'CHOCOLATE', 'IMBLUE', 'DEATH', 'SLIM', 'GFNRHYFDTYN', 'USER', 'IMANUTINU', 'COPPERHEAD', 'BORBIN', 'LEVI', 'WATERMELON', 'MANGLE', 'YOURMOMISGAY', 'WZXCVGBJHN', 'AYDEN', 'JAYDIN', 'BRUTUS', 'YOUR', 'MRY', '69696969696696969696', 'MRCLEAN69', 'SPERM', 'LOOPS', 'ZUHURA', 'JT', 'DEPRESSION', 'INQ', 'GIOGIO', 'DAMON', 'KSENIIA', 'BI', 'SOPHIA', 'NICKNAME', 'BBB', '123456789', 'TRANSFIXED', 'MACKENZIE', 'FART', 'TESSA', 'O', 'SOFIA', 'HYPER', 'TAYK', 'B', 'II', 'SATANSATANSATANSATAN', 'YY', 'LOLLA', 'SLITERKING', 'DWDW', 'HEWHOMUSTNOTBENAMED', 'SHUTTHEFRIDGE', 'JACOB1', 'JOURNEYYYYY', 'LAURA', 'YEIDY', 'TYLER', 'JASON', 'ITZBINY', 'JOSEISCOLORBLIND', 'KJ', 'KENOYT', 'KILLER', 'JJJ', 'SUSHISAM', 'VEGTA', 'PANDA', 'JMIKE', 'DVSFN', 'NICKY', 'DAD', 'MJ', 'FUFUFUFUFUFUFUFUF', 'SPLAT', 'SHELDON', 'OWO', 'OK', 'HELP', 'HUNTER', 'CRAINER', 'LIAM', 'EMER', 'TERRESSA', 'R', 'MALEKWILLWIN', 'THEATRE', 'OM', 'M', 'TURD', 'TTTAAA', 'RHRBM', 'SSSSSSSS', 'ABDEL1234', 'YOURMOM', 'SLIVER', 'DONTKILLMEBOTS', 'BREAD', 'LILLY', 'RAVEN', 'BIGFRED', 'JERRY', '535462983', 'CHAMELEON', 'C', 'ANGELA', 'GAYYYYY', 'FEET', 'GOODLOKIN', 'Bananaaa', 'BRANDON', 'GIRL', 'LOVE101', 'ABCATS', 'MARELLY', 'TEEHEE', 'BEO', 'MRDTTV', 'ICECUBE', 'UNICORN', 'ANA', 'HUKU', 'GDKFERS', 'BEEF', 'LOL', 'IKENUMA', 'NIKI', 'IMA', 'KKW', 'STEPBRO', 'OH', 'WINNER', 'MEEEEEE', 'PUPPY', 'LIFE', '2', 'TAYDEN', 'WHATT', 'JYDUD', 'ED', 'BEEBLE', 'HOPE', 'NANA', 'KIDD', 'GOAWAYORDIEE', 'KITKAT', 'SHYANNE', 'G', 'UHH', 'TYREE', 'LOKI', 'FE4RLICIA', 'LOSS', 'COLL', 'NLEEE', 'ZYHEIM', 'VITALINA', 'GO', 'DONOVAN', 'MADIE', 'XXXKINGRIP', 'RETARD', 'BOTO', 'BUTTHOLE', 'ROLANDO', 'OOOOOOOO', 'KILLMEIFYOUGAY', 'LOGAN', 'NAME', 'GG', 'REEE', 'MARSHMALLOW', 'MEMES', 'MICHAEL', '5', 'LILSMOKEY', 'TATIANA', 'ZERK', 'BRENDAN', 'KOBE', 'DOOM', 'WELSHCAKE', 'DARKSIDE', 'POOPOO', 'SPACE', 'HEYYYYYY', 'DADDY', 'FUNNEH', 'IEATPIZZA', 'MOONLIGHT', 'ME', 'BRENDEN', 'LANDEN', 'LIVE', 'JOSE', 'LLLLIIILLLYYYY', 'SLA', 'HYPERCORESZTUDIOS', 'SEAHAWK', 'ROMANOODLES', 'ALEX', 'WOLFQUEEN', 'KING', 'BENDOVER', 'TINY', 'HIIIIIIIIII', 'NICK', 'LUCARIOUS21', 'DANANA', 'YE', 'BRTR', 'CRISPYGRAPES', 'DARKDEADPOOL', 'MARI20LOCKETT', 'P1NK', 'DIRPYLIRPY', 'D', 'HELL', 'GYH89I0OPZAPL', 'HAHA', 'SINKLIFE', 'MMMMM', 'ZICLONE', 'JJJJJ', 'DSJHVNAKSDMCSDKXC', 'SLITHERGOD', 'HESUUUUUS', '333PRO', 'FLEX', 'SART', 'MEMELORD', 'HELLUR', 'DAKOTA', 'BOGGIER', 'CLO', 'AAAAAA', 'MARCO', 'JULIAN', 'TYSON', 'NIGERIA', 'TALIYAH', '1QUINCY', 'BOSS', 'BAILEY', 'ELISEY', 'YABOI', 'HHH', 'ADDY', 'HEIDI', 'KUADSBFJHWEBDFBJ', 'LUKAS', 'BUTT', 'YEET', 'AARON', 'GVYFT', 'BOT', 'KY', 'CATEARS', 'NEWUPDATES', 'MASTERPLAYER', 'CHARLI', 'BOOTY', 'ETHAN', 'CHUCKYDOLL', 'AMNESTY', 'ALIEN', 'ASDF', 'OLIVIA', 'FUN', 'KILL', 'ILIKETURTLEZ', 'JK', 'QUINCY', 'IMTHENEWGIRL', 'UR', 'NN', 'NIGGA', 'REEEEEEEEEE', 'POLICE', 'JL', 'FRIDAY', 'REN', 'NUGGETZ', 'GREEN', 'E', 'DEAD', 'PRESTONPLAYZ', 'SPEED', 'SAMSAM', 'IIIIIIII', 'EEEEEEEEEEEEEEEEEEEE', 'RARR', 'HOW', 'TIGGER', 'TRAPMEPLZ', 'DARK', 'SAKURA', 'TIMOTHY', 'TEST', 'XD', '1STPLACE', 'CALEB', 'MEL', 'MONEY', 'MEW', 'IO', 'REVAN', 'GEM', 'BEANS', 'YOINK', 'CHRISTIAN', 'GIVE', 'GIORUNO', 'PACKERS', 'SLIDE', 'BRYADEN', 'NOTSUPRISED', 'HYHDTU', 'BLEH', 'GAGE', 'NATALIA', 'ADRIANNA', 'MELLON', 'AJROLEX', 'CHICKINFONGER', 'BRBVEJHBNJHUGBYWHEUO', 'OOT', 'BEAST', 'MARIAH', 'YAAASSSS', 'HD', 'NOOB1234', 'NHMTRYWKNPTHW', 'YOUDEAD', 'SOPHIE', 'MEOW', 'BIG', 'MAKAYLA', 'HAAHERRRRR', 'SD', 'PINK', 'STEVEN', 'ALINAGAME', 'REEEEE', 'JANVI29', 'LLG', 'IS', 'APPLEJACKS', 'DANNA', 'YEETBOI', 'JILLIAN', 'RUDDDDDDDY', 'THE', 'CUPCAKE', 'TEDDYGAMER', 'STEPHENCURRY', 'USU', 'LATE', 'MYBUT', 'DADD', 'HH', 'BOBBLEGUM', 'COOLGAL', 'TTVBYTHEWAY', 'JAYCE', 'ZILLA', 'TAPEWORMCATCHER', 'KINGSPACE', 'ODOG', 'DEADROSES', 'SC', 'FOOTBALL', 'GAY', 'CHICA', 'DOMENIC', 'NINE', 'HOLY', '0O0', 'GAMERGIRL22', 'KINGRIGGS', 'REDNEC', 'REEEEEE', 'LILA', 'ROBOCCO', 'T', 'LUNA', 'HTTPSSLITHERSPACE', 'SLYTHERIN', 'SONIC', 'IT', 'KITTY', 'PACKZ', 'SIREEN', 'BROOKLYNN', 'IDUMB', 'SY', 'CH', 'IWERUIOP', 'STRAWBERRY', 'PRODICK', 'ZZ', 'SLITHER123345678910', 'DREAM', 'VOIDPANCAKE', 'XXXFANRIP', 'SAYED', '1ST', 'ARNA', 'FIONA', 'CHIKIN', 'YOMOMMA', 'IMOK', 'MIA', 'CHEZBORGOR', 'ZOYDEEN', 'SLITHERIO', 'LOSSER', 'HILO', 'BEC', 'YOUDIE', 'DOLUNAY', 'KEMAL', 'CRUZZZ', 'LUCAS', 'SLIME', 'SINK', 'WHOSURDADDY', 'MIKCHEZDURR09', 'KIRITO', 'UWU', 'COCKANDBALLS', 'JADE', 'URDAD', 'MEIE', 'AYY', 'DAVIDJ', 'SUPERRONKID', 'DANNY', 'JACK', 'CHASE', 'AAAAAAAAAA', 'ISAIAH', 'GREGGY', 'AUSTINISGAY', 'WOLFIE', 'STOOP', 'MOVELIKEASNAKE', 'MAGRO', 'BATMAN', 'MYJEFFY', 'WUS', 'BEESECHURGER', 'BILL', 'PP', 'CRAZY', 'OROROROROROROROR', 'TRASH', 'NATHANT', 'JHJMHMJHJ', 'DEADLYRAGDOLL', 'EATMYASS', 'ZOE', 'MXCM', 'ANNA', 'ROBLOX', 'JULIANA', 'WHAT', 'JAZZ', 'PIP', 'OMG', 'JESS', 'NICKSNAME', 'CMASTER584', 'NI', 'NIG', 'ASHANTI', 'FRE', 'HOLLEY', 'LALALALA', 'KI', 'BUB', 'ANN', 'FABRICIO', 'TREY', 'CRISPYWAFFELG', 'PEE', 'FOOD', 'NCT', 'HACKER', 'FISHER', 'SAVYYY', 'AHHH', 'ASIOSAMIGOS', 'RERTFTDT', 'EVA', 'ABBEY', 'TTVREPOOC', 'CASIDUS', 'MOCHEI', 'BTSIS', 'STUPID', 'ADAVEN', 'SHORTY', 'SPARKY', 'KKKLO', 'KRAZY', 'OOMP', 'ANTHONY', 'S', 'SKYLANDERHERO', 'AHVEWUVTEARITBERB5EU', 'PARCYJAKUP', 'CHOPY', 'JUIAN', 'NFKSJDN', 'TCGILBERT', 'JACKIECHAN', 'IVIBE', 'JOHNNY', 'IDGAF', 'THEDUO', 'AZUL', 'SSSSSSS', 'HUJJHG', 'JJ', 'MUSHROOM', 'OTESB', '565', 'IZZY', 'SMASTER', 'GOD', 'LIAMSNAK', 'OKBOOMER', 'ELI', 'DONUT21', 'TEHEHEHE', 'LOVE', 'BALA', 'KK', 'NNM', 'PETERPUG', 'YNW', 'LEO', 'WILDFIRE', 'HEEHEE', 'KNKK', 'LANDON', 'IEATYOU', 'M0NEY', 'HGV', 'BEEGIRL62', 'YOULLFLOATTOO', 'JAKIE', 'PAYTON', 'JAMES', 'LALA', 'RACHEL', 'BOO', 'SASUKEEUCHIHA', 'TABTAB', 'WOLFTOOTH', 'SLITHERPRO', 'CHE', 'OOOOH', 'TOKYOSREVENGE', 'BEST', 'LOADING', 'SDN', 'BELLA', 'DWI', 'EXTREME', 'VBSS', 'PLZ', 'VIIOOFVIOOFVII', 'HIIIIIIIIIIIIIIIIIII', 'SOUR', 'BANANA', 'TATSUYA', 'CARTER', 'DJ', 'CUTEOVERLOAD', 'KREWFAM4LIFETOAST', 'EDWDWD', 'DRAGON', 'IIIIIIIIIIIIIII', 'KJB', 'KNEEL', 'ASHER', 'INOTUCHU', 'ZEN', 'MARKO', '1111111', 'OPMAN10', 'HII', 'ABK', 'AROW135', 'JIM', 'XCVBNM', 'LJ', 'POPPER', 'ARRRRRRRRR', 'AD', 'TTT', 'PJ', 'JILL', 'REXY', 'BLUEQUUEN', 'HAVEN', 'VIHAAN', 'PARTYPOOPER', 'VIRTUALGOD', 'JIMIN', 'ANNIE', 'YASSQUEEN', 'BING', 'KONTOL', 'NOOOO', 'DIVINE', 'NKBO', 'YEERTTTTRTR', 'DUSTY', 'HIII', 'HOTDOG', 'SETH', 'CHEYENNE', 'RAINBOW', 'QUAN', 'FANDS', 'ANNEMARIE', 'JM', 'SIDETTE', 'WASGOOD', 'ALPHYS', 'KORLEAH', 'DOM', 'DACOBRA', 'JOJ', 'GOKU', 'BUTTBOY', 'BOBMANGO41', 'ONLY', 'ABC', 'AUSTYN', 'BITCHSNITCHRICTH', 'MIKE', 'DRE', '745585', 'BALLER', 'CECE', 'PAPER', 'F', 'GAYBOI', 'EVIE', 'SAVANNAH', 'COLE', 'ELCHJH', 'SLITHERED', 'SASMA', 'GANDHI', 'THEBRIGHTCOLORSCLUB', 'COOLGAL0827', 'REEEEEKID', '0000000000000000', 'DAILYDONUT', 'PIZZAROLLS', 'PS', 'JALISCO', 'DARIUSDAGOAT', 'JENNIFER', 'AL', 'KENNA', 'CC', 'KUMO', 'REALMADRID', 'MOJO', 'YV', 'XXX', 'HA', 'DUTS', 'TREEEEEEEEEEEEE', 'FGBUYR', 'JELLY', 'REEEEEEEE', '123', 'JETT', 'KLAYRRR', 'BIGBOY', 'FEED', 'DONTKILLMEH', 'OPPS', 'IM', 'IDKMYNAME', 'P', 'MARAINA', 'BREANALJ', 'LUCKY', '8987987', 'NOAH', 'FFF4', 'DA', 'VJDSIOFD', 'HAI', 'UMOM', 'XXXTEN', 'QWERTYUIOP', 'QUEEN', 'TITANIC', 'SLOGO', 'SARAH', 'LJH', 'DEANGELOGIANT22', 'BUTTMASTER', 'LILHAY', 'FREDDYFAZBEAR', 'ALASKA', '4', 'GGG', 'BE', 'CINNAMON', 'FISH', 'NICKGRR', 'TRASHIK', 'MOCHI', 'DEEZ', 'GHYCYVTY7', 'DOMINATE', 'POLAR', 'YOU', 'KOP', 'FABIAN', 'MITEK', 'JONATHAN', 'LAZERTAG', 'PEEPEEPOOPOO', 'PETEYTHEAWESOME', 'HR', 'TYRONE', 'EQ2EQ', 'HOWDY', 'CASSSSH', 'FOOT', 'HEART', 'SAMBO', 'MILLIE', 'ERIC', 'BEN', 'HYG', 'TIMOTY', 'BOBKILLER', 'ZOEY', 'EUPHORIA', 'LILLWIP', 'PLAYER', 'A', 'CAYDENT', 'TURTLE', 'CUMSOCK', 'MAC', 'QUESTION', 'THICKER', 'HAAAAAA', 'CYCLONE', 'CHC', 'MALEBUNS', 'ARNALDOY', 'PILL', 'ZARI', 'MMMM', 'COOKIEGUY', 'LUCY', 'KORONAVIRUS', 'TBNRFRAGS', 'FAT', 'WIERDDUDE', '6', 'TAKUACHE', '24357', 'PFKSD', 'TTVBCJBYTHEWAY', 'HEHEHEHEHEHEHEHEHEHE', 'BEETLEJUICE', 'BRIANNA', 'Y', 'ILIANA', 'CHARLY', 'TG', 'IDIOTA', 'ASAS', 'TECHBOY', 'STUPIDNONAME', 'LEA', '535', 'CUHH', 'HFYH', 'YOOOOOO', 'DEADLINE1276', 'IMNOTHERE', 'ERIE', 'HEHEHEHE', 'MONTY', 'ALLIE', 'SERPENTINE','yalaka','ahmet','marangoz ali','huseyin baba','eşek arısı','honey bee:)','fcuk u','get Backk','TuRTleMan','ILoveTurtLes :)','getRekT','kevin xD','LoL','⚡Heяø ⚡Heяø','Unkown Wolf','worm.ist_12','worm.ist_10','worm.ist_192','worm.ist_92','worm.ist_34','worm.ist_22','worm.ist_72','worm.ist_41','worm.ist_27','worm.ist_19','worm.ist_57','worm.ist_12','worm.ist_10','worm.ist_18','worm.ist_90','worm.ist_13','worm.ist_67','worm.ist_66','worm.ist_49','worm.ist_58','worm.ist_102','worm.ist_46','worm.ist_42','worm.ist_20','worm.ist_72','worm.ist_91','worm.ist_39','worm.ist_20','worm.ist_71','worm.ist_58','worm.ist_27','worm.ist_25','worm.ist_7','worm.ist_12','worm.ist_10','worm.ist_192','worm.ist_92','worm.ist_34','worm.ist_22','worm.ist_72','worm.ist_41','worm.ist_22','worm.ist_19','worm.ist_57','worm.ist_12','worm.ist_10','worm.ist_18','worm.ist_90','worm.ist_13','worm.ist_67','worm.ist_66','worm.ist_49','worm.ist_58','worm.ist_102','worm.ist_46','worm.ist_42','worm.ist_20','worm.ist_72','worm.ist_91','worm.ist_39','worm.ist_20','worm.ist_71','worm.ist_58','worm.ist_27','worm.ist_25','worm.ist_7','NΣXUS','𝓟𝓡𝐈𝓝𝓒𝓔','😈ϾṒṆṆΣϾṪḭṆḠ🐉','hacker','miray','ezgi nil','nice','zeus','sebassssss','JayyXx ','Jasonnnnnn','GÜŠTAVÖ','Help Me','Curvex.io','teampro','the_prof','Noob:)','MasterNoob:D','MƛƦƧӇMЄԼԼƠ','arcadego','bumbum','wunwun','RoYaL','TYT☢️SIRIUS','edgar amigo','köroğlu','adam ol','profesör','akıllı ol','to be yourself','paperrrr','im ok','you noobbb','i kill uu','go home',':)',':D','niKe','Mike','oscar','JuLia','missgirll','melissa','bnnr','amigos','loss','loser','slayer','marshmellow','santiago','santaFE','domingos','dominiq','tytsirius','agarboy','Galacticos','adios','CLaRis5a','Tempest','Julia','n0psa','SONLER','Vegas','sanik','FleXxx','bumbum','wunwun','im new','porterio','Woody','sara fan','PUMBA','exTreme','DUMB','Go home:)','levels','ArYa','mustafa kemal','король','начинающий','лучший','Cмертоносный','θανάσιμα','τουρκική','уровень','ok','levels','ArYa','ismail','kingcamo','pro','Timah','slayerlick','ÇeLik','Come Onnn','go go go','EsTeBAn','pAbLo','sharkk','sivasli','gre','luckyboy','nerdygirl','lucky Girl','kalimera','loll','wow!','championnnn','paperman','paperboy','paper man','paper space','space paper','paperiospace','leaderr','1 number','BrickRose','Prince','Jade','Beau','Smasher','Dazzle','Black Magic','Shrimp','Genie','Princess','Doggie','Bullseye','Butterfly','Fury Cutie','Jelly Rogue','Charisma','Bobo Indie','Wonder Bigshot','Freak','Cryo','Daydream','Zero','Indie','Bird','Twinkle Toes','Red Barber','Jewel','Lightning','Dash','Cyclone','Buck','Butch','Sketch','Flutters','Tiger','Bullseye','Hawk','Team >.<','Sara','jamie','K'); 
    return $isimler[rand ( 0 , count($isimler) -1)];
}


 # html yi çözer

function dehtml($veri)
{
	$temiz=trim($veri);
	$pis=htmlspecialchars_decode($temiz,ENT_QUOTES);
	return $pis;
}

# html ye dönüştür

function html($veri)
{
	$temiz=str_replace("  "," ",trim($veri));
	$giden=htmlspecialchars($temiz, ENT_QUOTES);
	return $giden;
}
function spam($x){
	if (preg_match('/(𒁝|penis|﷽|ass|𒅝|sperm|dick|𒄃|fuck|suck|4r5e|5h1t|5hit|a55|anal|anus|ar5e|arrse|arse|ass|ass-fucker|asses|assfucker|assfukka|asshole|assholes|asswhole|a_s_s|b!tch|b00bs|b17ch|b1tch|ballbag|balls|ballsack|bastard|beastial|beastiality|bellend|bestial|bestiality|bi+ch|biatch|bitch|bitcher|bitchers|bitches|bitchin|bitching|bloody|blow job|blowjob|blowjobs|boiolas|bollock|bollok|boner|boob|boobs|booobs|boooobs|booooobs|booooooobs|breasts|buceta|bugger|bum|bunny fucker|butt|butthole|buttmuch|buttplug|c0ck|c0cksucker|carpet muncher|cawk|chink|cipa|cl1t|clit|clitoris|clits|cnut|cock|cock-sucker|cockface|cockhead|cockmunch|cockmuncher|cocks|cocksuck|cocksucked|cocksucker|cocksucking|cocksucks|cocksuka|cocksukka|cok|cokmuncher|coksucka|coon|cox|crap|cum|cummer|cumming|cums|cumshot|cunilingus|cunillingus|cunnilingus|cunt|cuntlick|cuntlicker|cuntlicking|cunts|cyalis|cyberfuc|cyberfuck|cyberfucked|cyberfucker|cyberfuckers|cyberfucking|d1ck|damn|dick|dickhead|dildo|dildos|dink|dinks|dirsa|dlck|dog-fucker|doggin|dogging|donkeyribber|doosh|duche|dyke|ejaculate|ejaculated|ejaculates|ejaculating|ejaculatings|ejaculation|ejakulate|f u c k|f u c k e r|f4nny|fag|fagging|faggitt|faggot|faggs|fagot|fagots|fags|fanny|fannyflaps|fannyfucker|fanyy|fatass|fcuk|fcuker|fcuking|feck|fecker|felching|fellate|fellatio|fingerfuck|fingerfucked|fingerfucker|fingerfuckers|fingerfucking|fingerfucks|fistfuck|fistfucked|fistfucker|fistfuckers|fistfucking|fistfuckings|fistfucks|flange|fook|fooker|fuck|fucka|fucked|fucker|fuckers|fuckhead|fuckheads|fuckin|fucking|fuckings|fuckingshitmotherfucker|fuckme|fucks|fuckwhit|fuckwit|fudge packer|fudgepacker|fuk|fuker|fukker|fukkin|fuks|fukwhit|fukwit|fux|fux0r|f_u_c_k|gangbang|gangbanged|gangbangs|gaylord|gaysex|goatse|God|god-dam|god-damned|goddamn|goddamned|hardcoresex|hell|heshe|hoar|hoare|hoer|homo|hore|horniest|horny|hotsex|jack-off|jackoff|jap|jerk-off|jism|jiz|jizm|jizz|kawk|knob|knobead|knobed|knobend|knobhead|knobjocky|knobjokey|kock|kondum|kondums|kum|kummer|kumming|kums|kunilingus|l3i+ch|l3itch|labia|lust|lusting|m0f0|m0fo|m45terbate|ma5terb8|ma5terbate|masochist|master-bate|masterb8|masterbat*|masterbat3|masterbate|masterbation|masterbations|masturbate|mo-fo|mof0|mofo|mothafuck|mothafucka|mothafuckas|mothafuckaz|mothafucked|mothafucker|mothafuckers|mothafuckin|mothafucking|mothafuckings|mothafucks|mother fucker|motherfuck|motherfucked|motherfucker|motherfuckers|motherfuckin|motherfucking|motherfuckings|motherfuckka|motherfucks|muff|mutha|muthafecker|muthafuckker|muther|mutherfucker|n1gga|n1gger|nazi|nigg3r|nigg4h|nigga|niggah|niggas|niggaz|nigger|niggers|nob|nob jokey|nobhead|nobjocky|nobjokey|numbnuts|nutsack|orgasim|orgasims|orgasm|orgasms|p0rn|pawn|pecker|penis|penisfucker|phonesex|phuck|phuk|phuked|phuking|phukked|phukking|phuks|phuq|pigfucker|pimpis|piss|pissed|pisser|pissers|pisses|pissflaps|pissin|pissing|pissoff|poop|porn|porno|pornography|pornos|prick|pricks|pron|pube|pusse|pussi|pussies|pussy|pussys|rectum|retard|rimjaw|rimming|s hit|s.o.b.|sadist|schlong|screwing|scroat|scrote|scrotum|semen|sex|sh!+|sh!t|sh1t|shag|shagger|shaggin|shagging|shemale|shi+|shit|shitdick|shite|shited|shitey|shitfuck|shitfull|shithead|shiting|shitings|shits|shitted|shitter|shitters|shitting|shittings|shitty|skank|slut|sluts|smegma|smut|snatch|son-of-a-bitch|spac|spunk|s_h_i_t|t1tt1e5|t1tties|teets|teez|testical|testicle|tit|titfuck|tits|titt|tittie5|tittiefucker|titties|tittyfuck|tittywank|titwank|tosser|turd|tw4t|twat|twathead|twatty|twunt|twunter|v14gra|v1gra|vagina|viagra|vulva|w00se|wang|wank|wanker|wanky|whoar|whore|willies|willy|xrated)/i', $x)) { 
		$x = rasgeleNick(); 
	} else {
		$x = $x;
	}
	return $x;
}
 
function ipVirgul($ip){
	#ip içinde virgül ara
	if( strpos($ip, ',') !== false ) {
		
		$i = explode(',', $ip);
		return end($i);
	} else {
		return $ip;
	}
	 
}
 
 
function myIP() 
{
	$ip;
	if (getenv("HTTP_CLIENT_IP"))
	$ip = getenv("HTTP_CLIENT_IP");
	else if(getenv("HTTP_X_FORWARDED_FOR")) 
	$ip = getenv("HTTP_X_FORWARDED_FOR");
	else if(getenv("REMOTE_ADDR"))
	$ip = getenv("REMOTE_ADDR");
	else
	$ip = 0; 
	return ipVirgul($ip);
}




### CURL ICERIK CEKME FONKSIYONU ################################################################# 
function icerik_cek($url){
	$url = $url;
	$ch = curl_init($url); 
	curl_setopt($ch, CURLOPT_URL, $url); 
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);  
	curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 3);
	$cikti = curl_exec($ch); 
	curl_close($ch);  
	return json_decode($cikti, true);
	 
}
	
function ulke_kodu($ip){
//d7120467d9f4417cb92fd9a3f5def805 
 
 
/* $icerik = icerik_cek("http://freegeoip.net/json/".$ip."");
return strtolower($icerik['country_code']); */

//$icerik = icerik_cek("https://api.ipgeolocation.io/ipgeo?apiKey=98430b66eef149538015e6a9ca710a4d&ip=".$ip."");


$icerik = icerik_cek("https://physical-geography.com/lesson1/geo3.php?ip=".$ip."");
return strtolower($icerik['ulke']);

}


# Ulke Kodundan Ulke Adi
function kod_ulkeadi( $code ){
    $code = strtoupper($code);
    $country = '';
    if( $code == 'AA' ) $country = 'USA';
	if( $code == 'AF' ) $country = 'Afghanistan';
    if( $code == 'AX' ) $country = 'Aland Islands';
    if( $code == 'AL' ) $country = 'Albania';
    if( $code == 'DZ' ) $country = 'Algeria';
    if( $code == 'AS' ) $country = 'American Samoa';
    if( $code == 'AD' ) $country = 'Andorra';
    if( $code == 'AO' ) $country = 'Angola';
    if( $code == 'AI' ) $country = 'Anguilla';
    if( $code == 'AQ' ) $country = 'Antarctica';
    if( $code == 'AG' ) $country = 'Antigua and Barbuda';
    if( $code == 'AR' ) $country = 'Argentina';
    if( $code == 'AM' ) $country = 'Armenia';
    if( $code == 'AW' ) $country = 'Aruba';
    if( $code == 'AU' ) $country = 'Australia';
    if( $code == 'AT' ) $country = 'Austria';
    if( $code == 'AZ' ) $country = 'Azerbaijan';
    if( $code == 'BS' ) $country = 'Bahamas the';
    if( $code == 'BH' ) $country = 'Bahrain';
    if( $code == 'BD' ) $country = 'Bangladesh';
    if( $code == 'BB' ) $country = 'Barbados';
    if( $code == 'BY' ) $country = 'Belarus';
    if( $code == 'BE' ) $country = 'Belgium';
    if( $code == 'BZ' ) $country = 'Belize';
    if( $code == 'BJ' ) $country = 'Benin';
    if( $code == 'BM' ) $country = 'Bermuda';
    if( $code == 'BT' ) $country = 'Bhutan';
    if( $code == 'BO' ) $country = 'Bolivia';
    if( $code == 'BA' ) $country = 'Bosnia and Herzegovina';
    if( $code == 'BW' ) $country = 'Botswana';
    if( $code == 'BV' ) $country = 'Bouvet Island (Bouvetoya)';
    if( $code == 'BR' ) $country = 'Brazil';
    if( $code == 'IO' ) $country = 'British Indian Ocean';
    if( $code == 'VG' ) $country = 'British Virgin Islands';
    if( $code == 'BN' ) $country = 'Brunei';
    if( $code == 'BG' ) $country = 'Bulgaria';
    if( $code == 'BF' ) $country = 'Burkina Faso';
    if( $code == 'BI' ) $country = 'Burundi';
    if( $code == 'KH' ) $country = 'Cambodia';
    if( $code == 'CM' ) $country = 'Cameroon';
    if( $code == 'CA' ) $country = 'Canada';
    if( $code == 'CV' ) $country = 'Cape Verde';
    if( $code == 'KY' ) $country = 'Cayman Islands';
    if( $code == 'CF' ) $country = 'African Republic';
    if( $code == 'TD' ) $country = 'Chad';
    if( $code == 'CL' ) $country = 'Chile';
    if( $code == 'CN' ) $country = 'China';
    if( $code == 'CX' ) $country = 'Christmas Island'; 
    if( $code == 'CC' ) $country = 'Cocos (Keeling) Islands';
    if( $code == 'CO' ) $country = 'Colombia';
    if( $code == 'KM' ) $country = 'Comoros the';
    if( $code == 'CD' ) $country = 'Congo';
    if( $code == 'CG' ) $country = 'Congo the';
    if( $code == 'CK' ) $country = 'Cook Islands';
    if( $code == 'CR' ) $country = 'Costa Rica';
    if( $code == 'CI' ) $country = 'Cote dIvoire';
    if( $code == 'HR' ) $country = 'Croatia';
    if( $code == 'CU' ) $country = 'Cuba';
    if( $code == 'CY' ) $country = 'Cyprus';
    if( $code == 'CZ' ) $country = 'Czech Republic';
    if( $code == 'DK' ) $country = 'Denmark';
    if( $code == 'DJ' ) $country = 'Djibouti';
    if( $code == 'DM' ) $country = 'Dominica';
    if( $code == 'DO' ) $country = 'Dominican Republic';
    if( $code == 'EC' ) $country = 'Ecuador';
    if( $code == 'EG' ) $country = 'Egypt';
    if( $code == 'SV' ) $country = 'El Salvador';
    if( $code == 'GQ' ) $country = 'Equatorial Guinea';
    if( $code == 'ER' ) $country = 'Eritrea';
    if( $code == 'EE' ) $country = 'Estonia';
    if( $code == 'ET' ) $country = 'Ethiopia';
    if( $code == 'FO' ) $country = 'Faroe Islands';
    if( $code == 'FK' ) $country = 'Falkland Islands (Malvinas)';
    if( $code == 'FJ' ) $country = 'Fiji the Fiji Islands';
    if( $code == 'FI' ) $country = 'Finland';
    if( $code == 'FR' ) $country = 'France';
    if( $code == 'GF' ) $country = 'French Guiana';
    if( $code == 'PF' ) $country = 'French Polynesia';
    if( $code == 'TF' ) $country = 'French Southern Territories';
    if( $code == 'GA' ) $country = 'Gabon';
    if( $code == 'GM' ) $country = 'Gambia the';
    if( $code == 'GE' ) $country = 'Georgia';
    if( $code == 'DE' ) $country = 'Germany';
    if( $code == 'GH' ) $country = 'Ghana';
    if( $code == 'GI' ) $country = 'Gibraltar';
    if( $code == 'GR' ) $country = 'Greece';
    if( $code == 'GL' ) $country = 'Greenland';
    if( $code == 'GD' ) $country = 'Grenada';
    if( $code == 'GP' ) $country = 'Guadeloupe';
    if( $code == 'GU' ) $country = 'Guam';
    if( $code == 'GT' ) $country = 'Guatemala';
    if( $code == 'GG' ) $country = 'Guernsey';
    if( $code == 'GN' ) $country = 'Guinea';
    if( $code == 'GW' ) $country = 'Guinea-Bissau';
    if( $code == 'GY' ) $country = 'Guyana';
    if( $code == 'HT' ) $country = 'Haiti';
    if( $code == 'HM' ) $country = 'Heard Island and McDonald Islands';
    if( $code == 'VA' ) $country = 'Holy See (Vatican City State)';
    if( $code == 'HN' ) $country = 'Honduras';
    if( $code == 'HK' ) $country = 'Hong Kong';
    if( $code == 'HU' ) $country = 'Hungary';
    if( $code == 'IS' ) $country = 'Iceland';
    if( $code == 'IN' ) $country = 'India';
    if( $code == 'ID' ) $country = 'Indonesia';
    if( $code == 'IR' ) $country = 'Iran';
    if( $code == 'IQ' ) $country = 'Iraq';
    if( $code == 'IE' ) $country = 'Ireland';
    if( $code == 'IM' ) $country = 'Isle of Man';
    if( $code == 'IL' ) $country = 'Israel';
    if( $code == 'IT' ) $country = 'Italy';
    if( $code == 'JM' ) $country = 'Jamaica';
    if( $code == 'JP' ) $country = 'Japan';
    if( $code == 'JE' ) $country = 'Jersey';
    if( $code == 'JO' ) $country = 'Jordan';
    if( $code == 'KZ' ) $country = 'Kazakhstan';
    if( $code == 'KE' ) $country = 'Kenya';
    if( $code == 'KI' ) $country = 'Kiribati';
    if( $code == 'KP' ) $country = 'Korea';
    if( $code == 'KR' ) $country = 'Korea';
    if( $code == 'KW' ) $country = 'Kuwait';
    if( $code == 'KG' ) $country = 'Kyrgyz Republic';
    if( $code == 'LA' ) $country = 'Lao';
    if( $code == 'LV' ) $country = 'Latvia';
    if( $code == 'LB' ) $country = 'Lebanon';
    if( $code == 'LS' ) $country = 'Lesotho';
    if( $code == 'LR' ) $country = 'Liberia';
    if( $code == 'LY' ) $country = 'Libyan Arab Jamahiriya';
    if( $code == 'LI' ) $country = 'Liechtenstein';
    if( $code == 'LT' ) $country = 'Lithuania';
    if( $code == 'LU' ) $country = 'Luxembourg';
    if( $code == 'MO' ) $country = 'Macao';
    if( $code == 'MK' ) $country = 'Macedonia';
    if( $code == 'MG' ) $country = 'Madagascar';
    if( $code == 'MW' ) $country = 'Malawi';
    if( $code == 'MY' ) $country = 'Malaysia';
    if( $code == 'MV' ) $country = 'Maldives';
    if( $code == 'ML' ) $country = 'Mali';
    if( $code == 'MT' ) $country = 'Malta';
    if( $code == 'MH' ) $country = 'Marshall Islands';
    if( $code == 'MQ' ) $country = 'Martinique';
    if( $code == 'MR' ) $country = 'Mauritania';
    if( $code == 'MU' ) $country = 'Mauritius';
    if( $code == 'YT' ) $country = 'Mayotte';
    if( $code == 'MX' ) $country = 'Mexico';
    if( $code == 'FM' ) $country = 'Micronesia';
    if( $code == 'MD' ) $country = 'Moldova';
    if( $code == 'MC' ) $country = 'Monaco';
    if( $code == 'MN' ) $country = 'Mongolia';
    if( $code == 'ME' ) $country = 'Montenegro';
    if( $code == 'MS' ) $country = 'Montserrat';
    if( $code == 'MA' ) $country = 'Morocco';
    if( $code == 'MZ' ) $country = 'Mozambique';
    if( $code == 'MM' ) $country = 'Myanmar';
    if( $code == 'NA' ) $country = 'Namibia';
    if( $code == 'NR' ) $country = 'Nauru';
    if( $code == 'NP' ) $country = 'Nepal';
    if( $code == 'AN' ) $country = 'Netherlands Antilles';
    if( $code == 'NL' ) $country = 'Netherlands';
    if( $code == 'NC' ) $country = 'New Caledonia';
    if( $code == 'NZ' ) $country = 'New Zealand';
    if( $code == 'NI' ) $country = 'Nicaragua';
    if( $code == 'NE' ) $country = 'Niger';
    if( $code == 'NG' ) $country = 'Nigeria';
    if( $code == 'NU' ) $country = 'Niue';
    if( $code == 'NF' ) $country = 'Norfolk Island';
    if( $code == 'MP' ) $country = 'Northern Mariana Islands';
    if( $code == 'NO' ) $country = 'Norway';
    if( $code == 'OM' ) $country = 'Oman';
    if( $code == 'PK' ) $country = 'Pakistan';
    if( $code == 'PW' ) $country = 'Palau';
    if( $code == 'PS' ) $country = 'Palestinian Territory';
    if( $code == 'PA' ) $country = 'Panama';
    if( $code == 'PG' ) $country = 'Papua New Guinea';
    if( $code == 'PY' ) $country = 'Paraguay';
    if( $code == 'PE' ) $country = 'Peru';
    if( $code == 'PH' ) $country = 'Philippines';
    if( $code == 'PN' ) $country = 'Pitcairn Islands';
    if( $code == 'PL' ) $country = 'Poland';
    if( $code == 'PT' ) $country = 'Portugal';
    if( $code == 'PR' ) $country = 'Puerto Rico';
    if( $code == 'QA' ) $country = 'Qatar';
    if( $code == 'RE' ) $country = 'Reunion';
    if( $code == 'RO' ) $country = 'Romania';
    if( $code == 'RU' ) $country = 'Russia';
    if( $code == 'RW' ) $country = 'Rwanda';
    if( $code == 'BL' ) $country = 'Saint Barthelemy';
    if( $code == 'SH' ) $country = 'Saint Helena';
    if( $code == 'KN' ) $country = 'Saint Kitts and Nevis';
    if( $code == 'LC' ) $country = 'Saint Lucia';
    if( $code == 'MF' ) $country = 'Saint Martin';
    if( $code == 'PM' ) $country = 'Saint Pierre and Miquelon';
    if( $code == 'VC' ) $country = 'Saint Vincent';
    if( $code == 'WS' ) $country = 'Samoa';
    if( $code == 'SM' ) $country = 'San Marino';
    if( $code == 'ST' ) $country = 'Sao Tome and Principe';
    if( $code == 'SA' ) $country = 'Saudi Arabs)';
    if( $code == 'SN' ) $country = 'Senegal';
    if( $code == 'RS' ) $country = 'Serbia';
    if( $code == 'SC' ) $country = 'Seychelles';
    if( $code == 'SL' ) $country = 'Sierra Leone';
    if( $code == 'SG' ) $country = 'Singapore';
    if( $code == 'SK' ) $country = 'Slovakia (Slovak Republic)';
    if( $code == 'SI' ) $country = 'Slovenia';
    if( $code == 'SB' ) $country = 'Solomon Islands';
    if( $code == 'SO' ) $country = 'Somalia, Somali Republic';
    if( $code == 'ZA' ) $country = 'South Africa';
    if( $code == 'GS' ) $country = 'South Georgia';
    if( $code == 'ES' ) $country = 'Spain';
    if( $code == 'LK' ) $country = 'Sri Lanka';
    if( $code == 'SD' ) $country = 'Sudan';
    if( $code == 'SR' ) $country = 'Suriname';
    if( $code == 'SJ' ) $country = 'Svalbard';
    if( $code == 'SZ' ) $country = 'Swaziland';
    if( $code == 'SE' ) $country = 'Sweden';
    if( $code == 'CH' ) $country = 'Switzerland';
    if( $code == 'SY' ) $country = 'Syrian Arab Republic';
    if( $code == 'TW' ) $country = 'Taiwan';
    if( $code == 'TJ' ) $country = 'Tajikistan';
    if( $code == 'TZ' ) $country = 'Tanzania';
    if( $code == 'TH' ) $country = 'Thailand';
    if( $code == 'TL' ) $country = 'Timor-Leste';
    if( $code == 'TG' ) $country = 'Togo';
    if( $code == 'TK' ) $country = 'Tokelau';
    if( $code == 'TO' ) $country = 'Tonga';
    if( $code == 'TT' ) $country = 'Trinidad and Tobago';
    if( $code == 'TN' ) $country = 'Tunisia';
    if( $code == 'TR' ) $country = 'Türkiye';
    if( $code == 'TM' ) $country = 'Turkmenistan';
    if( $code == 'TC' ) $country = 'Turks and Caicos Islands';
    if( $code == 'TV' ) $country = 'Tuvalu';
    if( $code == 'UG' ) $country = 'Uganda';
    if( $code == 'UA' ) $country = 'Ukraine';
    if( $code == 'AE' ) $country = 'United Arab Emirates';
    if( $code == 'GB' ) $country = 'United Kingdom';
    if( $code == 'US' ) $country = 'U.S.A.';
    if( $code == 'UM' ) $country = 'Minor Outlying Islands';
    if( $code == 'VI' ) $country = 'Virgin Islands';
    if( $code == 'UY' ) $country = 'Uruguay';
    if( $code == 'UZ' ) $country = 'Uzbekistan';
    if( $code == 'VU' ) $country = 'Vanuatu';
    if( $code == 'VE' ) $country = 'Venezuela';
    if( $code == 'VN' ) $country = 'Vietnam';
    if( $code == 'WF' ) $country = 'Wallis and Futuna';
    if( $code == 'EH' ) $country = 'Western Sahara';
    if( $code == 'YE' ) $country = 'Yemen';
    if( $code == 'ZM' ) $country = 'Zambia';
    if( $code == 'ZW' ) $country = 'Zimbabwe';
    if( $country == '') $country = $code;
    return $country;
}    
  




### Bayrak Çek #################################################################################### 

function bayrakUrl($id){
	global $db,$mysite;
	$sorgu = $db->query("select * from skorlar where id='".$id."'");
	$veri  = $sorgu->fetch_assoc();
 
	   if(strtolower($veri["ulke"])==""){
		   return '<img width="16" height="12" class="c_flag" src="'.$mysite.'/c_none.webp" alt="Unknown" title="Unknown!" />';
	   } else { 
		   return '<img width="16" height="12" class="c_flag" src="'.$mysite.'/countries/'.strtolower($veri["ulke"]).'.webp" alt="'.$veri["ulke_adi"].'"  title="'.$veri["ulke_adi"].'"/>';
	   }
}


### Bayrak Ulke Çek #################################################################################### 

function bayrakUlke($id){
	global $db;
	$sorgu = $db->query("select * from skorlar where id='".$id."'");
	$veri  = $sorgu->fetch_assoc();
 
	   if(strtolower($veri["ulke"])==""){
		   return 'Unknown!';
	   } else { 
		   return $veri["ulke_adi"];
	   }
}
 
 
 ### ZAMAN FONKSIYONU X DAKIKA, SAAT, HAFTA, AY, YIL ONCE ###############################################

function zaman_kisa($zaman){
$zaman_farki 	= time()-$zaman;
$saniye 		=$zaman_farki;
$dakika 		= round($zaman_farki/60);
$saat 			= round($zaman_farki/3600);
$gun 			= round($zaman_farki/86400);
$hafta 			= round($zaman_farki/604800);
$ay 			= round($zaman_farki/2629743);
$yil 			= round($zaman_farki/31556926);

if ($saniye <= 59){
	if($saniye==0 || $saniye==1){
	return "now";
	} else {
		return $saniye." seconds ago";
		}
}elseif ($dakika <= 59){
	if($dakika==1){
	return $dakika." minute ago";
	} else {
	return $dakika." minutes ago";
	}
}elseif ($saat <= 23){
	if($saat==1){
	return $saat." hour ago";
	} else {
	return $saat." hours ago";
	}
}elseif ($gun <= 6){
	if($gun==1){
	return $gun." day ago";
	} else {
	return $gun." days ago";
	}
}elseif ($hafta <= 3){
	if($hafta==1){
	return $hafta." week ago";
	} else {
	return $hafta." weeks ago";
	}
}elseif ($ay <= 11){
	if($ay==1){
	return $ay." month ago";
	} else {
	return $ay." months ago";
	}
}else {
	if($yil==1){
	return $yil." year ago";
	} else {
	return $yil." years ago";
	}}
} 


### K sistem FONKSIYONU ####################################################################################

function ksistem( $n, $precision = 2 ) {
	if ($n < 900) {
		// 0 - 900
		$n_format = number_format($n, $precision);
		$suffix = '';
	} else if ($n < 900000) {
		// 0.9k-850k
		$n_format = number_format($n / 1000, $precision);
		$suffix = 'K';
	} else if ($n < 900000000) {
		// 0.9m-850m
		$n_format = number_format($n / 1000000, $precision);
		$suffix = 'M';
	} else if ($n < 900000000000) {
		// 0.9b-850b
		$n_format = number_format($n / 1000000000, $precision);
		$suffix = 'B';
	} else {
		// 0.9t+
		$n_format = number_format($n / 1000000000000, $precision);
		$suffix = 'T';
	}
  	if ( $precision > 0 ) {
		$dotzero = '.' . str_repeat( '0', $precision );
		$n_format = str_replace( $dotzero, '', $n_format );
	}
	return $n_format . $suffix;
}
?>