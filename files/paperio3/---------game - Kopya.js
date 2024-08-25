$('#left').html('');
  
var gamemode = '';
var canliskor = 0;
// CLIENT TARAFI VERİ GÖNDERİMİ

function soketle(x){
	 console.log("socket is open");		
	 
}

function puanKaydet(a,b,c,d,e) {
	$(".saveScore").attr('onclick','');
    var e = {'oyuncu': a,'puan':b,'time':c,'oldurulen':d,'skor':e};
    jQuery.ajax({
        type: "POST",
        url: "saveScore.py",
        data: e,
        success: function(z) {
		var alarm = z.split("|");
            if(alarm[0]==0){
				alert(alarm[1]);
				s_saved();
				$(".saveScore").attr('onclick','');
			} else {
				
				
				s_saved();
				$(".saveScore").attr('onclick','');
				soketle("<div style='color:green'><b>"+a+"</b> saved score: <b>"+b+"</b></div>");
			}
        }
    })
	
	
}

var ulke = $("#myUlke").val();
					
					
function isEmpty(str) {
    return (!str || /^\s*$/.test(str));
}
window.lastTimePress = new Date();

function timePressCheck() {
    let now = new Date();
    let time = Math.floor((now.getTime() - window.lastTimePress.getTime()));
    return (time >= (140 * 100 / game_speed))
}

function timePressSet() {
    let now = new Date();
    window.lastTimePress.setTime(now.getTime())
}

 
ts = +Cookies.get('paperio_topscore');

if (isNaN(ts)) {
    ts = 0
}
var myScore = 0;
var top_sco_re = ts;
var my_sco_re = 0;
var game_timer = 0;
var game_timer_c = 0;
var killed_other = 0;
var killed_total = 0;

var grid_width = 90;
var grid_height = 70;
 
var game_timer_0 = +new Date();

function game_is_over_main() {
   
    if (game_mode == 'paper2') {
        var paper2_results = window.paper2_results;
        window.paper2_results.win;
        playtime = paper2_results.time / 1000;
        playtime_m = Math.floor(playtime / 60);
        if (playtime_m < 10) {
            playtime_m = '0' + playtime_m
        }
        playtime_s = Math.floor(playtime - playtime_m * 60);
        if (playtime_s < 10) {
            playtime_s = '0' + playtime_s
        }
        new_top = paper2_results.newBest;
        top_sco_re = paper2_results.best;
        my_sco_re = paper2_results.score;
        killed_other = paper2_results.kills
    } else {
        game_timer_2 = +new Date();
        playtime = Math.floor((game_timer_2 - game_timer) / 1000);
        playtime_m = Math.floor(playtime / 60);
        if (playtime_m < 10) {
            playtime_m = '0' + playtime_m
        }
        playtime_s = Math.floor(playtime - playtime_m * 60);
        if (playtime_s < 10) {
            playtime_s = '0' + playtime_s
        }
        //afg_aftergame();
        if (my_sco_re > top_sco_re) {
            top_sco_re = my_sco_re;
            new_top = true
        } else {
            new_top = false
        }
        Cookies.set('paperio_topscore', top_sco_re, {
            expires: 30
        })
    }
    
	$('#game_over').empty();
	
	//$('.orta1').hide();
	
	/* if (game_mode == 'paper2') {
        $('<img src="' + paper2_results.image + '" height="130" width="130" style="display: block;margin: 10px auto 20px;zoom: 1;transform: scale(0.5);">').appendTo('#game_over').hide().delay(500).fadeIn(1000);
    } */
	$('.main2').hide().fadeIn(1000);
    $('<div class="gameover"></div>').appendTo('#game_over');
    $('<div class="go_sc">YOUR SCORE:</div>').appendTo('#game_over').hide().delay(1000).fadeIn(1000);
    $('<div class="da_sc">' + my_sco_re.toFixed(2) + '%</div>').appendTo('#game_over').hide().delay(1000).fadeIn(1000);
	
    if (new_top) {
        $('<div class="go_bs"><span>NEW </span>BEST SCORE:</div>').appendTo('#game_over').hide().delay(1500).fadeIn(1000);
    } else {
        $('<div class="go_bs">BEST SCORE:</div>').appendTo('#game_over').hide().delay(1500).fadeIn(1000);
    }
    $('<div class="da_bs">' + top_sco_re.toFixed(2) + '%</div>').appendTo('#game_over').hide().delay(1500).fadeIn(1000);
    $('<div class="go_pt">TIME PLAYED:</div>').appendTo('#game_over').hide().delay(2000).fadeIn(1000);
    $('<div class="da_pt">' + playtime_m + ':' + playtime_s + '</div>').appendTo('#game_over').hide().delay(2000).fadeIn(1000);
    $('<div class="go_pk">PLAYERS KILLED:</div>').appendTo('#game_over').hide().delay(2500).fadeIn(1000);
    $('<div class="da_pk">' + killed_other + '</div>').appendTo('#game_over').hide().delay(2500).fadeIn(1000);
    $('#game_over').show();
	$('.animiescontainer').show();
	olduk();
	  
	//soketle("olum","x");


	var olu = killed_other;
		if(olu == 0){
		olu=1;
		} 
    myScore = my_sco_re; 
	var rsyr = Math.floor(Math.random() * (500 - 1) + 1);
	var myPoint = myScore.toFixed(2)*olu*(15000/playtime.toFixed(0));		

	var nikname = $('#nickname').val();
	if(nikname==""){
		nikname = "paperio_"+rsyr;
	}
	
 soketle("<div style='color:red'><b>"+nikname+"</b> is died, Score: <b>"+myPoint.toFixed(0)+"</b></div>");
	$("#minimap").hide();
	
	//puanKaydet('undefined','0.00','00:13','0','0.00')
 //$('<div style="display:none;" class="button saveScore" onclick="puanKaydet(\'\');">'+d_score_save+'</div>').appendTo('#finish_game').show();

 
	$('.saveScore').attr('onclick','puanKaydet(\''+nikname+'\',\''+myPoint.toFixed(2)+'\',\''+playtime_m + ':' + playtime_s+'\',\''+killed_other+'\',\''+myScore.toFixed(2)+'\')');
	//$('.saveScore').show();
	//$('.playAgain').hide().delay(3000).fadeIn(1000);
	//$('.changeMode').show();
  
 }
 


 
var newgame_loaded = null;

function showLoad() {
    $(".play").hide();
    $(".loader").show();
    $('.mode').addClass("disabled");
    setTimeout(showResetUI, 10 * 1000)
}

function showResetUI() {
    $(".noConnectBtn").show();
    $(".noConnectText").show()
}

var canliisim = 'xxx';

function game_start(again) {

 
	
	$(".animiescontainer").hide();
	
 if(window.location.host=="geometry.lol"){
		
		
    if (newgame_loaded === false) return;
    newgame_loaded = true;
    modesReady = true;
 
    if (typeof afg_do !== 'undefined') {
        afg_do()
    } else {
        game_starter()
    }
 	}else {
		alert("server error!");
	}  
	
	}
// baslat
function game_starter(byLoad = false) {
    if (game_mode == 'paper2') {
        if (window.paper2) {
            $('.main').hide();
			 $('.main2').hide();
            $('#game_over').hide();
             window.paper2.start()
        } else {
            window.setTimeout(game_starter, 100)
        }
        return
    }
    if (!newgame_loaded || !modesReady) {
        window.setTimeout(game_starter, 100);
        return
    }


    newgame_loaded = null;
    var docScale = parseFloat(document.body.style.zoom);
    window.addWidth = document.body.clientWidth * 0.5 * docScale - document.body.clientWidth * 0.5;
    ;
    if (window.obstaclesOn === true) {
        obstaclesMake()
    }

    grid_scale = 1;
    prev_scale = 1;
    $('#left').hide();
    $('#right').hide();
    $('#bottom').hide();
    $('#share').hide();
    $('#links').hide();
    $('#cpmstar_anchor').hide();
    $('div').each(function(i) {
        if ((this.style.zIndex == 100) && ((this.style.left == '0px') || (this.style.right == '0px'))) {
            this.style.display = 'none'
        }
    });
    pause = false;
    game_timer = +new Date();
    game_timer_c = 0;
    killed_other = 0;
	
    killed_total = 0;
	
}


 
$('#nickname').on('keyup', function(e) {
    if (e.keyCode == 13 && $('.main').is(':visible')) {
        $('.playButon').trigger('click')
    }
});
function resetPage() {
    location.reload()
}

function screen_sizes() {
    if (game_mode == 'blocks') return;
    $('#paperio #outer_grid').css({
        'width': grid_width * 30 + $('#paperio').width(),
        'height': grid_height * 30 + $('#paperio').height()
    });
    $('#paperio #grid').css({
        'width': grid_width * 30,
        'height': grid_height * 30,
        'left': $(window).width() / 2 / document.body.style.zoom,
        'top': $('#paperio').height() / 2
    })
}


$(document).ready(function() {
    //screen_sizes()
});
$(window).on('resize', function() {
   // screen_sizes()
});
// window.autoResizeZoom = true;
// if (window.autoResizeZoom == true) window.zoomInterval = setInterval(setZoom, 140);

function setZoom() {
    if ($('.grow').is(":visible") == false && $('#game_over').is(":visible") == false) {
        document.body.style.zoom = 1 / window.devicePixelRatio;
        screen_sizes()
    } else {
        document.body.style.zoom = 1
    }
}
//window.setZoom = setZoom;

 
var game_challenge = 0;
var obstaclesOn = false;
var game_speed = 500;
var mpd =0;
var spd = 800;
function serverSelect(caption, gamemode) {
   if(caption=="ffa"){
		spd = 800;
	} else if(caption=="speed"){
		spd = 1600;
	} else if(caption=="jet"){
		spd = 3000;
	} else {
		spd = 800;
	}
	
	game_mode = gamemode;
    $('.selectedServer').html(caption);

    switch (game_mode) {
        case 'paper2':
            if (!Path2D) {
                $(".play").hide()
            }

    }
    window.game_speed = game_speed
}

!function() {
    "use strict";
    function b(t) {
        return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    function p(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i)
        }
    }
    function h(t, e, n) {
        return e && i(t.prototype, e),
        n && i(t, n),
        t
    }
    function e(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }),
        e && n(t, e)
    }
    function o(t) {
        return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        )(t)
    }
    function n(t, e) {
        return (n = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
            t
        }
        )(t, e)
    }
    function l(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    function u(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? l(t) : e
    }
    function _(t, e) {
        return function(t) {
            if (Array.isArray(t))
                return t
        }(t) || function(t, e) {
            var n = []
              , i = !0
              , s = !1
              , a = void 0;
            try {
                for (var r, o = t[Symbol.iterator](); !(i = (r = o.next()).done) && (n.push(r.value),
                !e || n.length !== e); i = !0)
                    ;
            } catch (t) {
                s = !0,
                a = t
            } finally {
                try {
                    i || null == o.return || o.return()
                } finally {
                    if (s)
                        throw a
                }
            }
            return n
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }
    function w(t) {
        return function(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++)
                    n[e] = t[e];
                return n
            }
        }(t) || function(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))
                return Array.from(t)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    var t, B, s, a, c, f, R, r, k = Math.pow(2, -26), x = function(t) {
        return Math.abs(t) <= k
    }, M = function(t, e) {
        return Math.abs(t - e) <= k
    }, S = function(t, e, n, i) {
        return t * i - e * n
    }, D = function(t, e, n) {
        return Math.min(t, e) - k <= n && n <= Math.max(t, e) + k
    }, A = function(t, e, n, i) {
        var s;
        return e < t && (s = t,
        t = e,
        e = s),
        i < n && (s = n,
        n = i,
        i = s),
        Math.min(e, i) - Math.max(t, n)
    }, d = performance || Date, H = d.now.bind(d), v = 1, m = function(t, e, n, i) {
        for (var s = 2 * Math.PI, a = s / n, r = [], o = 0; o < s - k; o += a)
            r.push(new E(t + Math.cos(o) * i,e + Math.sin(o) * i));
        return r
    }, y = function(t, e, n) {
        return "#".concat(function(t) {
            var n = "";
            return t.forEach(function(t) {
                var e = t.toString(16);
                n += e.length < 2 ? "0".concat(e) : e
            }),
            n
        }(function(t) {
            var e, n, i, s, a, r, o, l, h = t.h, u = t.s, c = t.v;
            if (h = Math.max(0, Math.min(360, h)),
            u = Math.max(0, Math.min(100, u)),
            c = Math.max(0, Math.min(100, c)),
            c /= 100,
            0 == (u /= 100))
                return e = n = i = c,
                [Math.round(255 * e), Math.round(255 * n), Math.round(255 * i)];
            switch (r = c * (1 - u),
            o = c * (1 - u * (a = (h /= 60) - (s = Math.floor(h)))),
            l = c * (1 - u * (1 - a)),
            s) {
            case 0:
                e = c,
                n = l,
                i = r;
                break;
            case 1:
                e = o,
                n = c,
                i = r;
                break;
            case 2:
                e = r,
                n = c,
                i = l;
                break;
            case 3:
                e = r,
                n = o,
                i = c;
                break;
            case 4:
                e = l,
                n = r,
                i = c;
                break;
            default:
                e = c,
                n = r,
                i = o
            }
            return [Math.round(255 * e), Math.round(255 * n), Math.round(255 * i)]
        }({
            h: t,
            s: e,
            v: n
        })))
    }, E = function() {
        function n(t, e) {
            p(this, n),
            this.cell = null,
            this.segments = [],
            this.set(t, e)
        }
        return h(n, [{
            key: "set",
            value: function(t, e) {
                return this.x = t || 0,
                this.y = e || (0 === e ? 0 : this.x),
                this
            }
        }, {
            key: "commit",
            value: function(t) {
                if (-1 === this.segments.indexOf(t) && this.segments.push(t),
                !this.cell) {
                    var e = n.space.cell(this);
                    e.commit(this),
                    this.cell = e
                }
            }
        }, {
            key: "remove",
            value: function(t) {
                var e = this.segments.indexOf(t);
                this.segments.splice(e, 1),
                this.cell && !this.segments.length && this.cell.remove(this)
            }
        }, {
            key: "add",
            value: function(t) {
                return this.x += t.x,
                this.y += t.y,
                this
            }
        }, {
            key: "sub",
            value: function(t) {
                return this.x -= t.x,
                this.y -= t.y,
                this
            }
        }, {
            key: "mul",
            value: function(t) {
                return this.x *= t.x,
                this.y *= t.y,
                this
            }
        }, {
            key: "mulScalar",
            value: function(t) {
                return this.x *= t,
                this.y *= t,
                this
            }
        }, {
            key: "magnitude",
            value: function() {
                var t = this.x
                  , e = this.y;
                return Math.sqrt(t * t + e * e)
            }
        }, {
            key: "normalize",
            value: function() {
                var t = this.magnitude();
                return t && this.mulScalar(1 / t),
                this
            }
        }, {
            key: "clone",
            value: function() {
                return new n(this.x,this.y)
            }
        }, {
            key: "copy",
            value: function(t) {
                return this.x = t.x,
                this.y = t.y,
                this
            }
        }, {
            key: "distance",
            value: function(t) {
                return Math.sqrt(this.distance2(t))
            }
        }, {
            key: "distance2",
            value: function(t) {
                var e = this.x - t.x
                  , n = this.y - t.y;
                return e * e + n * n
            }
        }, {
            key: "dot",
            value: function(t) {
                return this.x * t.x + this.y * t.y
            }
        }, {
            key: "rotate",
            value: function(t) {
                var e = this.x
                  , n = this.y
                  , i = Math.cos(t)
                  , s = Math.sin(t);
                return this.x = e * i - n * s,
                this.y = e * s + n * i,
                this
            }
        }, {
            key: "angle",
            value: function(t) {
                return Math.atan2(this.x * t.y - t.x * this.y, this.dot(t))
            }
        }, {
            key: "invert",
            value: function() {
                return this.mulScalar(-1)
            }
        }, {
            key: "equal",
            value: function(t) {
                return M(this.x, t.x) && M(this.y, t.y)
            }
        }]),
        n
    }(), g = function() {
        function n(t, e) {
            p(this, n),
            this.points = [],
            this.x = t,
            this.y = e
        }
        return h(n, [{
            key: "commit",
            value: function(t) {
                this.points.push(t)
            }
        }, {
            key: "remove",
            value: function(t) {
                var e = this.points
                  , n = e.indexOf(t);
                -1 !== n && e.splice(n, 1)
            }
        }]),
        n
    }(), T = function() {
        function a(t, e, n) {
            p(this, a),
            this.width = t,
            this.height = e,
            this.center = new E(t / 2,e / 2),
            this.size = n,
            this.w = Math.ceil(t / n),
            this.h = Math.ceil(e / n),
            this.cells = [];
            for (var i = 0; i < this.h; i++)
                for (var s = 0; s < this.w; s++)
                    this.cells.push(new g(s,i))
        }
        return h(a, [{
            key: "count",
            value: function() {
                var e = 0;
                return this.cells.forEach(function(t) {
                    e += t.points.length
                }),
                e
            }
        }, {
            key: "cell",
            value: function(t) {
                return this.getCell(Math.floor(t.x / this.size), Math.floor(t.y / this.size))
            }
        }, {
            key: "getCell",
            value: function(t, e) {
                return this.cells[t + e * this.w]
            }
        }, {
            key: "checkPoint",
            value: function(e) {
                return this.cell(e).points.find(function(t) {
                    return t.equal(e)
                }) || e
            }
        }, {
            key: "segmentsCount",
            value: function() {
                for (var e = {}, t = 0; t < this.h; t++)
                    for (var n = 0; n < this.w; n++)
                        this.getCell(n, t).points.forEach(function(t) {
                            t.segments.forEach(function(t) {
                                return e[t.id] = t
                            })
                        });
                return e
            }
        }, {
            key: "intersections",
            value: function(n) {
                for (var t = this.cell(n.start), e = this.cell(n.end), i = Math.min(t.x, e.x), s = Math.max(t.x, e.x), a = Math.min(t.y, e.y), r = Math.max(t.y, e.y), o = v++, l = [], h = a; h <= r; h++)
                    for (var u = i; u <= s; u++)
                        this.getCell(u, h).points.forEach(function(t) {
                            t.segments.forEach(function(t) {
                                t.mark !== o && (l.push(t),
                                t.mark = o)
                            })
                        });
                var c = [];
                return l.forEach(function(t) {
                    var e = t.intersect(n);
                    e && c.push(e)
                }),
                c
            }
        }]),
        a
    }(), P = function() {
        function n(t, e) {
            p(this, n),
            t.equal(e),
            this.mark = 0,
            this.shape = null,
            this.start = t,
            this.end = e,
            this.calc()
        }
        return h(n, [{
            key: "calc",
            value: function() {
                var t = this.start
                  , e = this.end;
                this.vector = e.clone().sub(t);
                var n = t.y - e.y
                  , i = e.x - t.x
                  , s = Math.sqrt(n * n + i * i);
                n /= s,
                i /= s,
                this.a = n,
                this.b = i,
                this.c = -(n * t.x + i * t.y)
            }
        }, {
            key: "clone",
            value: function() {
                return new n(this.start,this.end)
            }
        }, {
            key: "reverse",
            value: function() {
                var t = this.start;
                return this.start = this.end,
                this.end = t,
                this.calc(),
                this
            }
        }, {
            key: "commit",
            value: function(t) {
                return this.shape = t,
                this.start.commit(this),
                this.end.commit(this),
                this
            }
        }, {
            key: "remove",
            value: function() {
                this.shape = null,
                this.start.remove(this),
                this.end.remove(this)
            }
        }, {
            key: "length",
            value: function() {
                return this.vector.magnitude()
            }
        }, {
            key: "zn",
            value: function(t) {
                var e = t.a
                  , n = t.b
                  , i = this.a
                  , s = this.b;
                return S(e, n, i, s)
            }
        }, {
            key: "intersect",
            value: function(t) {
                var e = t.a
                  , n = t.b
                  , i = t.c
                  , s = t.start
                  , a = t.end
                  , r = this.a
                  , o = this.b
                  , l = this.c
                  , h = this.start
                  , u = this.end
                  , c = S(e, n, r, o);
                if (!x(c)) {
                    var f = -S(i, n, l, o) / c
                      , d = -S(e, i, r, l) / c
                      , p = D(s.x, a.x, f) && D(s.y, a.y, d) && D(h.x, u.x, f) && D(h.y, u.y, d) && new E(f,d);
                    return !!p && {
                        point: h.equal(p) && h || u.equal(p) && u || s.equal(p) && s || a.equal(p) && a || p,
                        segment: this,
                        distance: p.distance2(s),
                        overlay: !1,
                        zn: Math.sign(c)
                    }
                }
                var v = A(s.x, a.x, h.x, u.x)
                  , m = A(s.y, a.y, h.y, u.y);
                if (x(S(e, i, r, l)) && x(S(n, i, o, l)) && -k <= v && -k <= m) {
                    var y;
                    if (k <= v || k <= m)
                        return {
                            point: y = D(h.x, u.x, s.x) && D(h.y, u.y, s.y) ? h.equal(s) && h || u.equal(s) && u || s : s.distance2(h) >= s.distance2(u) ? u : h,
                            segment: this,
                            distance: y.distance2(s),
                            overlay: !0,
                            zn: 0
                        };
                    var g = h.equal(s) || h.equal(a) ? h : u;
                    return {
                        point: g,
                        segment: this,
                        distance: g.distance2(s),
                        overlay: !1,
                        zn: 0
                    }
                }
                return !1
            }
        }, {
            key: "has",
            value: function(t) {
                return this.start === t || this.end === t
            }
        }, {
            key: "owner",
            get: function() {}
        }]),
        n
    }(), q = function(t, e, n) {
        var i = t.x - n.x
          , s = t.y - n.y
          , a = e.x - n.x
          , r = e.y - n.y;
        if (0 < s * r)
            return 1;
        var o = i * r - s * a
          , l = x(o) ? 0 : Math.sign(o);
        return 0 === l ? i * a <= 0 ? 0 : 1 : s < 0 ? -l : r < 0 ? l : 1
    }, C = function() {
        function i(t) {
            p(this, i),
            this.segments = [],
            this.owner = null;
            for (var e = t.length, n = 0; n < e; )
                this.segments.push(new P(t[n++],t[n < e ? n : 0]));
            this.updateBounds()
        }
        return h(i, [{
            key: "commit",
            value: function(t) {
                var e = this;
                t && (this.owner = t),
                this.segments.forEach(function(t) {
                    return t.commit(e)
                })
            }
        }, {
            key: "remove",
            value: function() {
                this.segments.forEach(function(t) {
                    return t.remove()
                })
            }
        }, {
            key: "reverse",
            value: function() {
                return this.segments.reverse(),
                this.segments.forEach(function(t) {
                    return t.reverse()
                }),
                this
            }
        }, {
            key: "insert",
            value: function(e, t) {
                if (!e.has(t)) {
                    var n = this.segments.findIndex(function(t) {
                        return t === e
                    })
                      , i = new P(e.start,t).commit(this)
                      , s = new P(t,e.end).commit(this);
                    e.remove(),
                    this.segments.splice(n, 1, i, s)
                }
            }
        }, {
            key: "hasPoint",
            value: function(e) {
                return this.segments.some(function(t) {
                    return t.has(e)
                })
            }
        }, {
            key: "findSegment",
            value: function(e) {
                return this.segments.findIndex(function(t) {
                    return t.start === e
                })
            }
        }, {
            key: "splice",
            value: function(t, e, n) {
                var i;
                (i = this.segments).splice.apply(i, [e, n - e].concat(w(t.segments))).forEach(function(t) {
                    return t.remove()
                }),
                t.commit(this)
            }
        }, {
            key: "unsplice",
            value: function(t, e, n) {
                var i = this.segments.splice(e, n - e);
                this.remove(),
                this.segments = i.concat(t.reverse().segments),
                t.commit(this)
            }
        }, {
            key: "left",
            value: function(t, e, n) {
                for (var i, s = this, a = [], r = 0; r < t.length - 1; r++)
                    a.push(new P(t[r],t[r + 1]));
                var o = (i = this.segments).splice.apply(i, [e, n - e].concat(a));
                a.forEach(function(t) {
                    return t.commit(s)
                }),
                o.forEach(function(t) {
                    return t.remove()
                })
            }
        }, {
            key: "right",
            value: function(t, e, n) {
                for (var i = this, s = [], a = 0; a < t.length - 1; a++)
                    s.push(new P(t[a],t[a + 1]));
                var r = this.segments.splice(e, n - e);
                this.remove(),
                s.reverse().forEach(function(t) {
                    return t.reverse().commit(i)
                }),
                this.segments = r.concat(s)
            }
        }, {
            key: "points",
            value: function() {
                return this.segments.map(function(t) {
                    return t.start
                })
            }
        }, {
            key: "intersections",
            value: function(n) {
                var i = [];
                return 1 < this.segments.length && this.segments.forEach(function(t) {
                    var e = t.intersect(n);
                    e && i.push(e)
                }),
                i.sort(function(t, e) {
                    return t.distance - e.distance
                }),
                i
            }
        }, {
            key: "inside",
            value: function(t) {
                for (var e = this.segments.length, n = 1, i = 0; i < e; i++) {
                    var s = this.segments[i]
                      , a = s.start
                      , r = s.end
                      , o = q(a, r, t);
                    if (0 === o)
                        return !0;
                    n *= o
                }
                return 1 !== n
            }
        }, {
            key: "rawSquare",
            value: function() {
                var i = 0;
                return this.segments.forEach(function(t) {
                    var e = t.start
                      , n = t.end;
                    i += (e.x + n.x) * (n.y - e.y)
                }),
                i / 2
            }
        }, {
            key: "square",
            value: function() {
                var t = this.rawSquare();
                return t < 0 && (t *= -1),
                t
            }
        }, {
            key: "calcPath",
            value: function() {
                var t = new Path2D
                  , e = this.segments
                  , n = e.length
                  , i = e[0].start;
                t.moveTo(i.x, i.y);
                for (var s = 1; s < n; s++) {
                    var a = e[s].start;
                    t.lineTo(a.x, a.y)
                }
                t.closePath(),
                this.path = t,
                this.updateBounds()
            }
        }, {
            key: "updateBounds",
            value: function() {
                var s = 1 / 0
                  , a = -1 / 0
                  , r = 1 / 0
                  , o = -1 / 0;
                this.segments.forEach(function(t) {
                    var e = t.start
                      , n = e.x
                      , i = e.y;
                    s = Math.min(s, n),
                    a = Math.max(a, n),
                    r = Math.min(r, i),
                    o = Math.max(o, i)
                }),
                this.bounds = {
                    left: s,
                    right: a,
                    top: r,
                    bottom: o
                }
            }
        }]),
        i
    }(), I = function() {
        function l(t, e) {
            if (p(this, l),
            !t) {
                var n = window.innerWidth / 2
                  , i = window.innerHeight / 2
                  , s = .85 * Math.min(n, i)
                  , a = 2 * Math.PI
                  , r = a / 200;
                t = [];
                for (var o = 0; o < a - k; o += r)
                    t.push(new E(n + Math.cos(o) * s,i + Math.sin(o) * s))
            }
            this.radius = e,
            this.polygon = new C(t)
        }
        return h(l, [{
            key: "intersections",
            value: function(t) {
                return this.polygon.intersections(t).filter(function(t) {
                    return !t.overlay
                })
            }
        }]),
        l
    }(), O = function() {
        function o(t, e, n, i, s, a, r) {
            p(this, o),
            this.text = t,
            this.color = e,
            this.unit = n,
            this.position = i,
            this.velocity = s,
            this.duration = a,
            this.time = a,
            this.fading = r
        }
        return h(o, [{
			



            key: "update",
            value: function(t) {
				
                this.time -= t,
                0 < this.time && this.position.add(this.velocity.clone().mulScalar(t / 1e3))
            }
        }, {
            key: "draw",
            value: function(t, e) {


                var n, i = Math.floor(255 * ((n = this.time / this.duration) * n * n * (n * (6 * n - 15) + 10))).toString(16);
                i.length < 2 && (i = "0" + i);
                var s = this.unit ? this.unit.position.clone().add(this.position) : this.position
                  , a = ~~(38 / window.devicePixelRatio);
               // t.fillStyle = "".concat(this.color).concat(this.fading ? i : ""),
                t.fillStyle = "#000",
                t.font = "bold ".concat(a, "px arial"),
                t.textAlign = "center",
                t.textBaseline = "middle",
                t.fillText(this.text, s.x * e, s.y * e)
            }
        }]),
        o
    }(), j = ((t = new Path2D).moveTo(-1, -1),
    t.lineTo(1, -1),
    t.lineTo(1, 1),
    t.lineTo(-1, 1),
    t.closePath(),
    t), L = function() {
        function l(t, e, n, i, s, a, r, o) {
            p(this, l),
            this.color = t,
            this.position = e,
            this.velocity = n,
            this.acceleration = o,
            this.rotate = i,
            this.scale = s,
            this.vscale = a,
            this.rotation = Math.random() * Math.PI * 2,
            this.time = r
        }
        return h(l, [{
            key: "update",
            value: function(t) {


                this.time -= t;
                var e = t / 1e3;
                0 < this.time && (this.acceleration && this.velocity.add(this.acceleration.clone().mulScalar(e)),
                this.position.add(this.velocity.clone().mulScalar(e)),
                this.rotation += this.rotate * e,
                this.scale += this.vscale * e)
            }
        }, {
            key: "draw",
            value: function(t) {
                var e = this.position
                  , n = e.x
                  , i = e.y
                  , s = this.rotation
                  , a = this.color
                  , r = this.scale;
                t.save(),
                t.translate(n, i),
                t.rotate(s),
                t.scale(r, r),
                t.fillStyle = a,
                t.fill(j),
                t.restore()
            }
        }]),
        l
    }(), z = function() {
        function d(t, e) {
            var n = this;
            p(this, d),
            this.up = !1,
            this.down = !1,
            this.left = !1,
            this.right = !1,
            this.modifiers = {
                shift: !1,
                ctrl: !1,
                alt: !1,
                meta: !1
            },
            this.mouse = null,
            this.lastMouse = null,
            this.buttons = {
                left: !1,
                middle: !1,
                right: !1
            },
            (this.keyboardModeSwitch = e).get();
            var i = function(t) {
                return t.preventDefault()
            };
            t.addEventListener("contextmenu", i, !1);
            var s = function(t) {
                return n.onKeyChange(t, !0)
            }
              , a = function(t) {
                return n.onKeyChange(t, !1)
            };
            window.addEventListener("keydown", s, !1),
            window.addEventListener("keyup", a, !1);
            var r = function(t) {
                return n.onMouseChange(t, !0)
            }
              , o = function(t) {
                return n.onMouseChange(t, !1)
            }
              , l = function() {
                n.lastMouse = n.mouse,
                n.mouse = null
            }
              , h = function(t) {
                null === n.mouse && (n.mouse = {}),
                n.mouse.x = t.pageX,
                n.mouse.y = t.pageY
            }
              , u = function(t) {
                h(t);
                var e = t.buttons;
                n.buttons = {
                    left: !!(1 & e),
                    middle: !!(4 & e),
                    right: !!(2 & e)
                }
            };
            t.addEventListener("mouseenter", u, !1),
            t.addEventListener("mousemove", h, !1),
            t.addEventListener("mouseleave", l, !1),
            t.addEventListener("mousedown", r, !1),
            t.addEventListener("mouseup", o, !1);
            var c = function() {
                n.lastMouse = n.mouse,
                n.mouse = null
            }
              , f = function(t) {
                null === n.mouse && (n.mouse = {});
                var e = t.changedTouches[0];
                n.mouse.x = e.clientX,
                n.mouse.y = e.clientY
            };
            t.addEventListener("touchstart", f, !1),
            t.addEventListener("touchmove", f, !1),
            t.addEventListener("touchend", c, !1),
            t.addEventListener("touchcancel", c, !1),
            this.dispose = function() {
                t.removeEventListener("contextmenu", i, !1),
                window.removeEventListener("keydown", s, !1),
                window.removeEventListener("keyup", a, !1),
                t.removeEventListener("mouseenter", u, !1),
                t.removeEventListener("mousemove", h, !1),
                t.removeEventListener("mouseleave", l, !1),
                t.removeEventListener("mousedown", r, !1),
                t.removeEventListener("mouseup", o, !1),
                t.removeEventListener("touchstart", touchHandler, !1),
                t.removeEventListener("touchmove", touchHandler, !1)
            }
        }
        return h(d, [{
            key: "pressed",
            value: function() {
                return this.up || this.down || this.left || this.right
            }
        }, {
            key: "onKeyChange",
            value: function(t, e) {
                if (t.target === document.body) {
                    switch (t.keyCode) {
                    case 38:
                    case 87:
                        this.up = e;
                        break;
                    case 40:
                    case 83:
                        this.down = e;
                        break;
                    case 37:
                    case 65:
                        this.left = e;
                        break;
                    case 39:
                    case 68:
                        this.right = e;
                        break;
                    case 67:
                        e || this.keyboardModeSwitch.switch()
                    }
                    this.modifiers.shift = t.shiftKey,
                    this.modifiers.ctrl = t.ctrlKey,
                    this.modifiers.alt = t.altKey,
                    this.modifiers.meta = t.metaKey
                }
            }
        }, {
            key: "onMouseChange",
            value: function(t, e) {
                switch (t.button) {
                case 0:
                    this.buttons.left = e;
                    break;
                case 1:
                    this.buttons.middle = e;
                    break;
                case 2:
                    this.buttons.right = e
                }
            }
        }]),
        d
    }(), 
	//ayarlar
	K = {
        baseRadius: 180,
        baseCount: 60,
        minScale: 0.3,
        maxScale: 0.6,
        trackWidth: 60,
        unitSpeed: 290,
        spawnTimeout: 3e3,
        prepareCounter: 1e3,
        baseHeight: 2
    }, 
	
	W = function(t, e, n) {
        t.fillStyle = n,
        t.fill(e)
    }, F = function(t, e, n, i, s) {
        var a = e.polygon.path;
        t.fillStyle = i,
        t.fill(a)
    }, Q = function(t, e, n, i, s, a) {
        var r = K.trackWidth;
        n.polyline.segments.length && (t.lineWidth = r + (s ? 2 : 0),
        t.strokeStyle = e,
        t.stroke(n.polyline.path))
    }, 
	
	U = ((s = new Path2D).moveTo(-24, -24),
    s.lineTo(-8, -8),
    s.lineTo(0, -24),
    s.lineTo(8, -8),
    s.lineTo(24, -24),
    s.lineTo(16, 8),
    s.lineTo(-16, 8),
    s.closePath(),
    s), G = ((a = new Path2D).moveTo(0, -14),
    a.lineTo(10, -12),
    a.lineTo(14, -6),
    a.lineTo(12, 4),
    a.lineTo(8, 6),
    a.lineTo(6, 12),
    a.lineTo(0, 14),
    a.lineTo(-6, 12),
    a.lineTo(-8, 6),
    a.lineTo(-12, 4),
    a.lineTo(-14, -6),
    a.lineTo(-10, -12),
    a.closePath(),
    a.arc(-6, -2, 4, 0, 2 * Math.PI, !0),
    a.closePath(),
    a.arc(6, -2, 4, 0, 2 * Math.PI, !0),
    a.closePath(),
    a.moveTo(0, 2),
    a.lineTo(-4, 6),
    a.lineTo(0, 8),
    a.lineTo(4, 6),
    a.closePath(),
    a), J = function(t, e, n) {
        var i = K.trackWidth;
        if (n.image) {
            var s = n.image.naturalWidth || n.image.width
              , a = n.image.naturalHeight || n.image.height
              , r = i * e.skin.avatar.scale * n.scale / s;
            t.save(),
            t.translate(e.position.x, e.position.y - K.baseHeight * n.level),
            t.rotate(e.direction + Math.PI / 2),
            t.translate((e.skin.avatar.x + n.x) * i, (e.skin.avatar.y + n.y) * i);
            var o = 0;
            if ("target" === n.direction) {
                var l = e.target.clone().sub(e.position);
                o += Math.atan2(l.y, l.x) - e.direction
            }
            "billboard" === n.direction && (o += -e.direction - Math.PI / 2),
            n.rotation && (o += .0174533 * n.rotation),
            o && t.rotate(o),
            t.drawImage(n.image, s * r * -n.pivot.x, a * r * -n.pivot.y, s * r, a * r),
            t.restore()
        }
    }, N = function() {
        function n(t, e) {
            p(this, n),
            this.unit = t,
            this.merges = [],
            this.polygon = new C(e),
            this.polygon.commit(this),
            this.calcSquare(),
            this.polygon.calcPath()
        }
        return h(n, [{
            key: "calcPath",
            value: function() {
                this.path = new Path2D;
                var t = this.polygon.segments
                  , e = t.length
                  , n = t[0].start;
                this.path.moveTo(n.x, n.y);
                for (var i = 1; i < e; i++) {
                    var s = t[i].start;
                    this.path.lineTo(s.x, s.y)
                }
                return this.path.closePath(),
                this.path
            }
        }, {
            key: "calcSquare",
            value: function() {
                this.square = this.polygon.square()
            }
        }, {
            key: "remove",
            value: function() {
                this.polygon.remove()
            }
        }, {
            key: "handleIntersect",
            value: function(t, e, n, i) {
                e === this.unit ? this.handleSelfIntersect(t, e, n, i) : this.handleEnemyIntersect(t, e, n, i)
            }
        }, {
            key: "handleSelfIntersect",
            value: function(t, e, n, i) {
                if (!t.overlay) {
                    var s = t.point
                      , a = t.segment;
                    if (e.in === this) {
                        if (t.zn < 0)
                            return;
                        if (s.equal(n.end))
                            return;
                        this.polygon.insert(a, s),
                        e.track.polyline.add(s),
                        e.in = null
                    } else {
                        if (0 < t.zn)
                            return;
                        if (s.equal(n.start))
                            return;
                        if (e.in)
                            return;
                        this.polygon.insert(a, s),
                        e.track.polyline.add(s),
                        e.track.polyline.end && i.handleReturn(e),
                        e.in = this,
                        e.track.remove()
                    }
                }
            }
        }, {
            key: "handleEnemyIntersect",
            value: function(t, e, n, i) {
                var s = t.point
                  , a = t.segment;
                if (e.in === this) {
                    if (t.zn < 0)
                        return;
                    this.polygon.insert(a, s),
                    e.track.polyline.add(s),
                    e.track.intersect(t, this, !1),
                    e.in = null
                } else {
                    if (0 < t.zn)
                        return;
                    if (t.overlay)
                        return;
                    if (s.equal(n.end))
                        return;
                    if (e.in)
                        return;
                    this.polygon.insert(a, s),
                    e.track.polyline.add(s),
                    e.track.intersect(t, this, !0),
                    e.in = this
                }
            }
        }]),
        n
    }(), X = function() {
        function e(t) {
            p(this, e),
            this.owner = t || null,
            this.start = null,
            this.end = null,
            this.segments = [],
            this.bounds = {
                left: 1 / 0,
                right: -1 / 0,
                top: 1 / 0,
                bottom: -1 / 0
            },
            this.path = new Path2D
        }
        return h(e, [{
            key: "commit",
            value: function(e) {
                this.segments.forEach(function(t) {
                    return t.commit(e)
                })
            }
        }, {
            key: "remove",
            value: function() {
                this.segments.forEach(function(t) {
                    return t.remove()
                })
            }
        }, {
            key: "reverse",
            value: function() {
                if (this.segments.reverse().forEach(function(t) {
                    return t.reverse()
                }),
                this.end) {
                    var t = this.start;
                    this.start = this.end,
                    this.end = t
                }
                return this
            }
        }, {
            key: "clone",
            value: function() {
                var t = new e;
                return t.segments = this.segments.map(function(t) {
                    return t.clone()
                }),
                t.start = this.start,
                t.end = this.end,
                Object.assign(t.bounds, this.bounds),
                t
            }
        }, {
            key: "updateBounds",
            value: function(t) {
                var e = t.x
                  , n = t.y;
                this.bounds.left = Math.min(this.bounds.left, e),
                this.bounds.right = Math.max(this.bounds.right, e),
                this.bounds.top = Math.min(this.bounds.top, n),
                this.bounds.bottom = Math.max(this.bounds.bottom, n)
            }
        }, {
            key: "add",
            value: function(t) {
                var e = this.end || this.start;
                if (!e || !e.equal(t)) {
                    var n = t.x
                      , i = t.y;
                    if (this.end)
                        return this.segments.push(new P(this.end,t).commit(this)),
                        this.end = t,
                        this.updateBounds(t),
                        void this.path.lineTo(n, i);
                    if (this.start)
                        return this.segments.push(new P(this.start,t).commit(this)),
                        this.end = t,
                        this.updateBounds(t),
                        void this.path.lineTo(n, i);
                    this.start = t,
                    this.updateBounds(t),
                    this.path.moveTo(n, i)
                }
            }
        }, {
            key: "points",
            value: function() {
                var t = this.segments.map(function(t) {
                    return t.start
                });
                return this.end && t.push(this.end),
                t
            }
        }]),
        e
    }(), Y = function() {
        function e(t) {
            p(this, e),
            this.polyline = new X(this),
            this.unit = t,
            this.intersections = [],
            this.isTrack = !0
        }
        return h(e, [{
            key: "intersect",
            value: function(e, t, n) {
                var i = this.intersections.find(function(t) {
                    return t.point.equal(e.point)
                });
                i ? i.intersections.push({
                    intersection: e,
                    base: t,
                    enter: n
                }) : this.intersections.push({
                    point: e.point,
                    intersections: [{
                        intersection: e,
                        base: t,
                        enter: n
                    }]
                })
            }
        }, {
            key: "remove",
            value: function() {
                this.polyline.remove(),
                this.polyline = new X(this),
                this.intersections = []
            }
        }, {
            key: "handleIntersect",
            value: function(t, e, n, i) {
                e === this.unit ? !0 !== t.overlay && t.point === this.polyline.segments[this.polyline.segments.length - 1].end || (this.unit.position = t.point,
                i.kill(this.unit)) : i.kill(this.unit, e)
            }
        }, {
            key: "owner",
            get: function() {}
        }]),
        e
    }(), V = function() {
        function i(t, e, n) {
            p(this, i),
            this.states = t,
            this.state = "",
            this.payload = n,
            this.context = {},
            this.change(e)
        }
        return h(i, [{
            key: "change",
            value: function(t) {
                var e = this.states[this.state];
                e && e.leave && (this.context = e.leave(this.payload, this.context) || this.context);
                var n = this.states[t];
                n && (this.state = t,
                this.context = n.enter && n.enter(this.payload, this.context) || this.context,
                this.update())
            }
        }, {
            key: "update",
            value: function() {
                var t = this.states[this.state]
                  , e = t && t.update(this.payload, this.context);
                e && this.change(e)
            }
        }]),
        i
    }(), Z = {
        idle: {
            update: function() {
                return Math.random() < .25 ? "cut" : "exit"
            }
        },
        cut: {
            enter: function(t) {
                var e = t.position.clone().sub(t.game.space.center)
                  , n = e.magnitude()
                  , i = new P(t.position,e.normalize().mulScalar(t.game.border.radius - n + 10).add(t.position))
                  , s = t.base.polygon.intersections(i)
                  , a = {};
                return a.exitPoint = s.sort(function(t, e) {
                    return t.distance - e.distance
                })[0].point,
                a
            },
            update: function(t, e) {
                if (t.in !== t.base)
                    return "capture";
                var n = t.position.distance(t.game.space.center);
                if (t.game.border.radius - n < 1)
                    return "idle";
                t.target = e.exitPoint
            }
        },
        exit: {
            enter: function(t) {
                var e, n = {}, i = 1 / 0, s = t.base.polygon.segments.length, a = K.unitSpeed;
                for (n.minDistance = a; void 0 === e; ) {
                    for (var r = 0; r < 1; r++) {
                        var o = ~~(Math.random() * s)
                          , l = t.base.polygon.segments[o].start.distance(t.position);
                        l < i && a < l && (i = l,
                        e = o)
                    }
                    a *= .75
                }
                return n.exitPoint = t.base.polygon.segments[e].start,
                n
            },
            update: function(e, t) {
                if (e.in !== e.base)
                    return "capture";
                var n = e.base.polygon.segments.length
                  , i = t.minDistance
                  , s = ~~(Math.random() * n)
                  , a = e.base.polygon.segments[s].start
                  , r = a.distance(e.position)
                  , o = t.exitPoint.distance(e.position);
                i < r && r < o ? t.exitPoint = a : (Object.values(t.exitPoint.segments).some(function(t) {
                    return t && t.shape === e.base.polygon
                }) || (t.exitPoint = a),
                e.target && e.target.distance(e.game.space.center) > e.game.border.radius - 1 && (t.exitPoint = a)),
                e.target = t.exitPoint
            }
        },
        capture: {
            enter: function(i, t) {
                var e = t.exitPoint
                  , n = K.unitSpeed
                  , s = i.base.polygon.segments
                  , a = (1 + Math.random()) * n
                  , r = Math.sign(Math.random() - .5) || 1
                  , o = 0
                  , l = s.findIndex(function(t) {
                    return t.start.equal(e)
                });
                if (-1 === l) {
                    var h = 1 / 0
                      , u = 0;
                    if (s.forEach(function(t, e) {
                        var n = t.start.distance2(i.position);
                        n < h && (h = n,
                        u = e)
                    }),
                    e = s[u].start,
                    t.exitPoint = e,
                    -1 === (l = s.findIndex(function(t) {
                        return t.start.equal(e)
                    })))
                        throw console.log("exitPoint", e),
                        new Error("Сегмент не найден. Баг в грязном хаке!!!")
                }
                for (var c = !1; o < a; ) {
                    if (o = s[l].start.distance(e),
                    (l += r) >= s.length) {
                        if (l = 0,
                        c)
                            break;
                        c = !0
                    }
                    if (l < 0) {
                        if (l = s.length - 1,
                        c)
                            break;
                        c = !0
                    }
                }
                var f = s[l].start
                  , d = f.clone().sub(e)
                  , p = e.clone().add(d.clone().mulScalar(.5))
                  , v = (.5 + Math.random()) * n
                  , m = d.clone().rotate(-r * Math.PI / 2).normalize().mulScalar(v)
                  , y = p.add(m);
                i.target = y,
                t.targets = [f],
                t.sign = r,
                t.returnPoint = f
            },
            update: function(e, t) {
                if (e.in === e.base)
                    return "idle";
                if (!Object.values(t.returnPoint.segments).some(function(t) {
                    return t && t.shape === e.base.polygon
                }))
                    return "back";
                if (e.game.units.some(function(t) {
                    return t !== e && e.position.distance(t.position) < K.unitSpeed
                }))
                    return "back";
                if (e.target.distance(e.game.space.center) > e.game.border.radius + 18)
                    return "back";
                if (e.position.distance2(e.target) < 400) {
                    var n = t.targets.shift();
                    if (!n)
                        return "back";
                    e.target = n
                }
            }
        },
        back: {
            enter: function(i, t) {
                var e = i.base.polygon.segments
                  , n = t.exitPoint
                  , s = t.sign
                  , a = 1 / 0
                  , r = 0;
                e.forEach(function(t, e) {
                    var n = t.start.distance2(i.position);
                    n < a && (a = n,
                    r = e)
                });
                var o = e[r].start;
                if (n)
                    for (; o.distance2(n) < 100; )
                        (r += s) >= e.length && (r = 0),
                        r < 0 && (r = e.length - 1),
                        o = e[r].start;
                i.target = o
            },
            update: function(t, e) {
                if (t.in === t.base)
                    return "idle"
            }
        }
    }, tt = function() {
        function s(t, e, n, i) {
            p(this, s),
            this.name = t,
            this.direction = 0,
            this.position = e,
            this.base = new N(this,n),
            this.skin = i,
            this.lastSquare = this.base.square,
            this.in = this.base,
            this.track = new Y(this),
            this.target = null,
            this.respawn = !1,
            this.statistics = {
                kills: 0
            }
        }
        return h(s, [{
            key: "movement",
            value: function() {
                return this.target && this.target.clone().sub(this.position).normalize()
            }
        }, {
            key: "speed",
            get: function() {}
        }]),
        s
    }(), et = function(t) {
        function a(t, e, n, i) {
            var s;
            return p(this, a),
            (s = u(this, o(a).call(this, t, e, n, i))).lastSquare = s.base.square,
            s
        }
        return e(a, tt),
        h(a, [{
            key: "update",
            value: function(t) {
                this.respawn || (this.target = t.direction.clone().mulScalar(50).add(this.position))
            }
        }]),
        a
    }(), nt = function(t) {
        function r(t, e, n, i, s) {
            var a;
            return p(this, r),
            (a = u(this, o(r).call(this, t, n, i, s))).targets = [],
            a.game = e,
            a.fsm = new V(Z,"exit",l(a)),
            a
        }
        return e(r, tt),
        h(r, [{
            key: "update",
            value: function() {
                this.fsm.update()
            }
        }]),
        r
    }(), it = Math.cos(0), st = Math.sin(0), at = function(t) {
        var e = Math.cos(t)
          , n = Math.sin(t);
        return new E(it * e - st * n,it * n + st * e)
    }, rt = function() {
		//değişkenler
        function u(t, e, n, i, s, a, r, o) {
            var l = this;
            if (p(this, u),
            f = K.minScale,
            c = K.maxScale,
            R = K.trackWidth,
			this.azs = K.minScale,
            this.controller = new z(t,o),
            this.skinManager = i,
            this.nameManager = r,
            this.space = e,
		 
            this.maxUnits = s,
            this.view = t,
            this.border = n,
            this.player = null,
            this.units = [],
            this.mouse = new E,
            this.direction = new E(1,0),
            this.keyboard = !1,
            this.fakeMouse = null,
            this.labels = [],
            this.scale = c,
            this.square = this.border.polygon.square(),
            this.gameOverCallback = a,
            this.actived = !1,
            this.needSuspendSpawn = !0,
            this.suspendSpawn = !1,
            this.generateParticles = !1,
            this.particles = [],
            this.border.polygon.calcPath(),
            t) {
                var h = function() {
                    l.view.width = window.innerWidth,
                    l.view.height = window.innerHeight
                };
                window.addEventListener("resize", h, !1),
                h()
            }
            this.stats = {
                fps: 0,
                ut: 0,
                ait: 0,
                st: 0,
                rt: 0
            },
            this.timings = {
                updateStartTime: 0,
                updateEndTime: 0,
                aiStartTime: 0,
                aiEndTime: 0,
                spawnStartTime: 0,
                spawnEndTime: 0,
                renderStartTime: 0,
                renderEndTime: 0
            }
        }
        return h(u, [{
            key: "addPlayer",
            value: function(t) {
                this.units.push(t),
                this.player = t
            }
        }, {
            key: "addUnit",
            value: function(t) {
                this.units.push(t)
            }
        }, {
            key: "getspawnPosition",
            value: function(t) {
                for (var e = this.space.center, n = this.border.radius, i = 2 * K.baseRadius,
				s = i * (this.player ? 3 - this.player.base.square / this.square * 2 : 3), 
				a = s * s, r = e.clone().add(new E(0,t ? n - 3 * i + Math.random() * (2 * i) : Math.random() * (n - i)).rotate(Math.random() * Math.PI * 2)), o = 0; o < this.units.length; o++) {
                    var l = this.units[o];
                    if (l.base.polygon.inside(r))
                        return;
                    if (l.base.polygon.segments.some(function(t) {
                        return r.distance2(t.start) < a
                    }))
                        return;
                    if (l.track.polyline.segments.some(function(t) {
                        return r.distance2(t.start) < a
                    }))
                        return
                }
                return r
            }
        }, {
            key: "spawnBot",
            value: function(t) {
                var e = this;
                if (this.actived) {
                    if (this.suspendSpawn)
                        return;
                    if (this.needSuspendSpawn)
                        return this.suspendSpawn = !0,
                        void setTimeout(function() {
                            e.needSuspendSpawn = !1,
                            e.suspendSpawn = !1
                        }, (1 + Math.random()) * K.spawnTimeout)
                }
                if (this.nameManager.pool.length) {
                    var n = this.getspawnPosition(t);
                    n && (this.addUnit(new nt(this.nameManager.get(),this,n,m(n.x, n.y, K.baseCount, K.baseRadius),this.skinManager.get())),
                    this.needSuspendSpawn = !0,
                    this.suspendSpawn = !1)
                } else
                    this.nameManager.request()
            }
        }, {
            key: "spawnPlayer",
            value: function(t, e) {
                for (var n, i = 0; !n; )
                    50 < ++i && (i = 0,
                    this.units.length && this.kill(this.units[0])),
                    n = this.getspawnPosition();
                if (n) {
                    var s = this.skinManager.get(e, !0);
                    if (!s) {
                        var a = this.units.find(function(t) {
                            return t.skin.name === e
                        });
                        a ? (s = a.skin,
                        a.skin = this.skinManager.get()) : s = this.skinManager.get("", !0)
                    }
						var nickek = Math.floor(Math.random() * (500 - 1) + 1);

						var nickim = $("#nickname").val();

						if(isEmpty(nickim)){
							nickim="paperio_"+nickek;
						} else {
							// elleme
						}
						canliisim = nickim;	
                    var r = new et(t || nickim,n,m(n.x, n.y, K.baseCount, K.baseRadius),s);
                    this.addPlayer(r),
                    this.scale = 3 - r.base.square / this.square * (c - f),
                    this.startTime = Date.now();
					
					soketle("<div><b>"+nickim+"</b> is playing now.</div>");
					$("#minimap").fadeIn();
                }
            }
        }, {
            key: "genKillParticles",
            value: function(s, t, a) {
                var r = this;
                if (this.generateParticles) {
                    var o = 0;
                    t.forEach(function(t) {
                        if (5 < (o += t.vector.magnitude())) {
                            o = 0;
                            var e = t.vector.clone().normalize().rotate(Math.sign(Math.random() - .5) * Math.PI / 2).mulScalar(25 + 100 * Math.random());
                            .25 < Math.random() && e.mulScalar(.1);
                            var n = (a ? 6 : 2) * (6 + 5 * Math.random())
                              , i = new L(s.skin.colors.particles[~~(Math.random() * s.skin.colors.particles.length)],t.start.clone(),e,2 * Math.PI * (1 + Math.random()) * Math.sign(Math.random() - 2.5 || 1),n,.9 * -n,1e3);
                            r.particles.push(i)
                        }
                    })
                }
            }
        }, {
            key: "gameOver",
            value: function(t) {
                var e = this
                  , s = 1 / 0
                  , a = 0
                  , r = 1 / 0
                  , o = 0;
                this.player.base.polygon.segments.forEach(function(t) {
                    var e = t.start
                      , n = e.x
                      , i = e.y;
                    s = Math.min(s, n),
                    a = Math.max(a, n),
                    r = Math.min(r, i),
                    o = Math.max(o, i)
                });
                var n = a - s
                  , i = o - r
                  , l = Math.max(n, i)
                  , h = new E(s + n / 2,r + i / 2)
                  , u = 475 / l
                  , c = document.createElement("canvas");
				  
                c.width = 500,
                c.height = 500;
                var f = c.getContext("2d");
                f.scale(u, u),
                f.translate(250 / u - h.x, 250 / u - h.y),
                f.translate(0, 5 / u),
                W(f, this.player.base.polygon.path, this.player.skin.colors.back),
                f.translate(0, -10 / u),
                W(f, this.player.base.polygon.path, this.player.skin.pattern || this.player.skin.colors.main);
                var d = c.toDataURL("image/png")
                  , p = {
                    game: this,
                    score: t ? 100 : this.player.base.square / this.square * 100,
                    best: this.best,
                    time: Date.now() - this.startTime,
                    kills: this.player.statistics.kills,
                    image: d,
                    win: t
                };
                setTimeout(function() {
                    t && e.kill(e.player, void 0, t),
                    e.player = null,
                    e.gameOverCallback && e.gameOverCallback(p)
                }, 1e3)
            }
        }, {
            key: "kill",
            value: function(e, t, n) {
                e.death = !0,
                this.skinManager && this.skinManager.release(e.skin),
                this.units.forEach(function(t) {
                    t !== e && t.in === e.base && (t.in = null)
                }),
                this.genKillParticles(e, e.track.polyline.segments),
                this.genKillParticles(e, e.base.polygon.segments, !0),
                e.track.remove(),
                e.base.remove();
                var i = this.units.findIndex(function(t) {
                    return t === e
                });
			
			
                this.units.splice(i, 1),
                t && (t.statistics.kills++,
				
                t === this.player && this.labels.push(new O("Kill",e.skin.colors.main,t,new E(0,-180),new E(0,-100),1e3,!0))),
                n || e !== this.player || this.gameOver()
            }
        }, {
            key: "getMovement",
            value: function(t, e) {
                var n = []
                  , i = e.movement();
                if (!i)
                    return n;
                i.mulScalar(spd * t / 1e3);
                var s = at(e.direction)
                  , a = Math.atan2(s.x * i.y - i.x * s.y, s.dot(i))
                  , r = 2 * Math.PI * t / 1e3;
                Math.abs(a) > r && (a = r * Math.sign(a)),
                e.direction += a;
                for (var o = at(e.direction).mulScalar(spd * t / 1e3), l = new P(e.position,e.position.clone().add(o)), h = this.border.intersections(l); h.length; ) {
                    var u = void 0
                      , c = l.vector;
                    if (2 === h.length) {
                        var f = h[0].segment.vector;
                        u = 0 < Math.atan2(c.x * f.y - f.x * c.y, c.dot(f)) ? h[0] : h[1]
                    } else
                        u = h[0];
                    var d = u
                      , p = d.segment
                      , v = d.point
                      , m = p.vector;
                    if (Math.atan2(c.x * m.y - m.x * c.y, c.dot(m)) < 0)
                        break;
                    if (!x(u.distance)) {
                        var y = new P(l.start,v);
                        n.push(y)
                    }
                    var g = (l = new P(v,l.end)).vector
                      , k = m.clone().normalize().mulScalar(g.dot(m) / m.magnitude());
                    l = new P(v,v.clone().add(k)),
                    h = this.border.intersections(l)
                }
                return n.push(l),
                n
            }
        }, {
            key: "update",
            value: function(n) {
				
				
 


                var g = this;
				
				

                if (this.timings.updateStartTime = H(),
                this.controller.pressed())
                    if (this.keyboard = Object.assign({}, this.controller.mouse),
                    this.controller.keyboardModeSwitch.mode2) {
                        var t = 0;
                        (this.controller.up || this.controller.left) && (t = -1),
                        (this.controller.down || this.controller.right) && (t = 1),
                        t && this.direction.rotate(n * t * .003)
                    } else {
                        var e = new E;
                        if (this.controller.up && e.add(new E(0,-1)),
                        this.controller.down && e.add(new E(0,1)),
                        this.controller.left && e.add(new E(-1,0)),
                        this.controller.right && e.add(new E(1,0)),
                        e.magnitude()) {
                            var i = Math.atan2(this.direction.x * e.y - e.x * this.direction.y, this.direction.x * e.x + this.direction.y * e.y)
                              , s = n * Math.sign(i) * .003;
                            this.direction.rotate(Math.abs(s) > Math.abs(i) ? i : s)
                        }
                    }
                else
                    this.controller.mouse ? (!this.keyboard || this.keyboard.x !== this.controller.mouse.x && this.keyboard.y !== this.controller.mouse.y) && (this.keyboard = null,
                    this.direction = new E(this.controller.mouse.x,this.controller.mouse.y).sub(new E(this.view.width / 2,this.view.height / 2)).normalize()) : !this.keyboard && this.controller.lastMouse && (this.direction = new E(this.controller.lastMouse.x,this.controller.lastMouse.y).sub(new E(this.view.width / 2,this.view.height / 2)).normalize());
                var a = this.player;
                if (this.timings.aiStartTime = H(),
                this.units.forEach(function(t) {
                    return t.update(g)
                }),
                this.timings.aiEndTime = H(),
                this.units.slice().forEach(function(m) {
                    if (!m.death)
                        for (var y = g.getMovement(n, m), t = function() {
                            if (m.death)
                                return {
                                    v: void 0
                                };
                            var h = y.shift()
                              , t = g.space.intersections(h)
                              , n = [];
                            t.forEach(function(e) {
                                var t = n.findIndex(function(t) {
                                    return t.point.equal(e.point)
                                });
                                if (-1 === t)
                                    n.push({
                                        point: e.point,
                                        intersections: [e]
                                    });
                                else {
                                    if (e.point !== n[t].point)
                                        if (e.point.cell) {
                                            if (n[t].point.cell)
                                                throw new Error("Бывает ли такое?");
                                            n[t].point = e.point,
                                            n[t].intersections.forEach(function(t) {
                                                t.point = e.point
                                            })
                                        } else
                                            e.point = n[t].point;
                                    n[t].intersections.push(e)
                                }
                            }),
                            t.forEach(function(t) {
                                t.distance = h.start.distance2(t.point)
                            }),
                            t.sort(function(t, e) {
                                return t.distance - e.distance
                            });
                            var e = []
                              , i = null
                              , s = -1;
                            if (t.forEach(function(t) {
                                M(t.distance, s) || (i = [],
                                s = t.distance,
                                e.push(i)),
                                i.push(t)
                            }),
                            e.forEach(function(o) {
                                var l = [];
                                o.forEach(function(t) {
                                    var e = t.segment.shape;
                                    e && -1 === l.indexOf(e) && l.push(e)
                                });
                                for (var t = function() {
                                    var t = l.findIndex(function(t) {
                                        return t.owner === m.in
                                    });
                                    if (0 < t) {
                                        var e = l[0];
                                        l[0] = l[t],
                                        l[t] = e
                                    }
                                    var n = l.findIndex(function(t) {

                                        return t.owner.isTrack;
                                    });
                                    if (0 < n) {
                                        var i = l[0];
                                        l[0] = l[n],
                                        l[n] = i
                                    }
                                    var s = l.shift()
                                      , a = [];
                                    for (o.forEach(function(t) {
                                        t.segment.shape === s && a.push(t)
                                    }); !m.death && a.length; ) {
                                        a.sort(function(t, e) {
                                            return m.in ? e.zn - t.zn : t.zn - e.zn
                                        });
                                        var r = a.shift();
                                        r.segment.shape && !s.owner.unit.death && s.owner.handleIntersect(r, m, h, g)
                                    }
                                }; l.length; )
                                    t()
                            }),
                            m.death)
                                return {
                                    v: void 0
                                };
                            var a = h.end;
                            if (m.in !== m.base && m.track.polyline.add(a),
                            m.position = a,
                            g.generateParticles && !y.length && m.in && m.in !== m.base) {
                                var r = Math.sign(Math.random() - .5)
                                  , o = m.skin.avatar.scale * R
                                  , l = h.vector.clone().normalize().rotate(r * Math.random() * (Math.PI / 30)).mulScalar(3 * K.unitSpeed + Math.random() * K.unitSpeed)
                                  , u = h.vector.clone().rotate(Math.PI / 2).normalize().mulScalar(r * Math.random() * o / 2)
                                  , c = h.vector.clone().normalize().mulScalar(o / 2)
                                  , f = h.vector.clone().normalize().mulScalar(-6 * K.unitSpeed)
                                  //, d = m.in.unit.skin.colors.particles
                                   , d = ["#fff", "#000", "#fff", "#000"]
                                  , p = 15 * Math.random()
                                  , v = new L(d[~~(Math.random() * d.length)],h.start.clone().add(u).add(c).add(new E(0,-K.baseHeight)),l,Math.PI + Math.random() * Math.PI,p,-3 * p,650,f);
                                g.particles.push(v)
                            }
                        }; y.length; ) {
                            var e = t();
                            if ("object" === b(e))
                                return e.v
                        }
                }),a) {
					
				 
                    var r = (a.base.square - a.lastSquare) / this.square * 100;
                    a.lastSquare = a.base.square,
                    .01 <= r && this.labels.push(new O("+".concat(r.toFixed(2), "%"),
					a.skin.colors.back,a,new E(0,-155),new E(0,-180),1e3,!0))
					 
                }
                this.units.sort(function(t, e) {
                    return e.base.square - t.base.square
                }),
                this.labels = this.labels.filter(function(t) {
                    return t.update(n),
                    0 < t.time
                }),
                this.particles = this.particles.filter(function(t) {
                    return t.update(n),
                    0 < t.time
                });
                var o = (a ? c - a.base.square / this.square * (c - f) : .5) - this.scale;
				
 
                this.scale += o * n / 80; // animasyon
				



			
                a && .9999 < a.base.square / this.square && this.gameOver(!0),
                this.timings.spawnStartTime = H(),
                this.units.length < this.maxUnits && this.spawnBot(.3 < Math.random()),
                this.timings.spawnEndTime = H(),
                this.timings.updateEndTime = H()
            }
        }, {
            key: "render", // #render
            value: function(t) {
                var o = this;
                this.timings.renderStartTime = H();
				
				
				
				
				
				
				
				
				
				
				
				
				
				// minimap...
				// minimap...
				// minimap...
				// minimap...
				
                 var e = this.view;
				 
                if (e) {
		 
 
					var minimap = document.getElementById('minimap');
					var mimi = minimap.getContext('2d');
					minimap.width = 180;
					minimap.height = 180;
                    //var l = e.getContext("2d"),


                        n = window.devicePixelRatio
                      , h = e.width * n
                      , i = e.height * n
                      , s = Math.sqrt(h * h + i * i) / Math.sqrt(2455780)
                      , a = 0.0112 //minimap zoom
                      //, a = this.scale * s / n / 58 //minimap zoom
                      , r = this.player ? this.player.position : this.space.center
                      , u = 0					  
                      , c = 0
                      , f = r.x - e.width / 2 / a
                      , d = r.x + e.width / 2 / a
                      , p = r.y - e.height / 2 / a
                      , v = r.y + e.height / 2 / a
                      , m = function(t) {
                        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
                        return D(f - e, d + e, t.x) && D(p - e, v + e, t.y)
                    }
                      , y = function(t) {
                        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
					
					
                        return 0 < A(t.bounds.left - e, t.bounds.right + e, f, d) && 0 < A(t.bounds.top - e, t.bounds.bottom + e, p, v)
						
						
					};
						
						
						
						
                    mimi.resetTransform(),
                    mimi.clearRect(0, 0, e.width, e.height),
                    mimi.translate(-u, -c),
                    mimi.scale(a, a),
                    mimi.translate(0, -K.baseHeight),
                /*     this.units.forEach(function(t) {
						
                        y(t.base.polygon, R) && W(mimi, t.base.polygon.path, t.skin.pattern || t.skin.colors.main)
                    }), */
                    mimi.lineCap = "round",
                    mimi.globalCompositeOperation = "destination-out",
					
                    this.units.forEach(function(t) {
						
                        var e = t.track.polyline,
						n = e.start;
                        e.bounds;
						                        									
 
                   /*      n && (Q(mimi, "#111", t.track, t.position),
                       
					   // n && y(t.track.polyline, R) && (Q(mimi, "#111", t.track, t.position),
						
						// nick yazısı nikname nickname
                        mimi.save(),
						
                        mimi.globalCompositeOperation = "destination-over",
						
                        mimi.clip(t.base.polygon.path),
                        Q(mimi, t.skin.pattern || t.skin.colors.main, t.track, t.position, !0),
                        mimi.restore()) */
                    }),
                    mimi.translate(0, K.baseHeight),
                    mimi.globalCompositeOperation = "source-over",
           
		   
					
					
					// nikname nickname username
                /*     this.units.forEach(function(t) {
						
					              									
 
 						
					 
                        !function(t, e, n) {
                            var i = ~~(25 / window.devicePixelRatio);
                            t.save(),
                            t.translate(e.position.x, e.position.y),
                            t.scale(1.001 / n, 1.001 / n),
                            t.font = "bold ".concat(i, "px arial"),
								t.shadowColor="black";
								t.shadowBlur=0;
								t.lineWidth=5;
								t.textAlign = "center",
								t.textBaseline = "bottom",

							
								t.shadowBlur=0,
								t.textAlign = "center",
								t.textBaseline = "bottom",
					 			 t.strokeText(e.name+"", 0, -100 * n),

						    	t.fillStyle = "#fff",

 
								t.fillText(e.name+"", 0, -100 * n),
								t.restore()


                        }(mimi, t, a)
                    }), */
                    mimi.globalCompositeOperation = "destination-over",
                    this.units.forEach(function(e) {
						
                        m(e.position, 4 * R) && (mimi.save(),
                        e.skin.avatar.bottomLayers.forEach(function(t) {
							
                            return J(mimi, e, t)
                        }),
                        mimi.restore())
                    }),
                    mimi.globalAlpha = .6,
                    this.units.forEach(function(t) {
                        t.in !== t.base && y(t.track.polyline, R) && Q(mimi, t.skin.pattern || t.skin.colors.main, t.track, t.position)
                    }),
                    mimi.globalAlpha = 1,
                    this.units.forEach(function(t) {
                        y(t.base.polygon, R) && W(mimi, t.base.polygon.path, t.skin && t.skin.back || t.skin.colors.back)
                    }),
                // F(mimi, this.border, 0, "#fff"), // oyun alanı
				
                    //mimi.translate(0, 5),
                    F(mimi, this.border, 0, "#fff"), // arka plan
                    mimi.translate(0, -5),
                 /*    mimi.fillStyle = function(t, e) {
                 return B || ((B = t.createLinearGradient(e.width / 2, 0, e.width / 2, e.height)).addColorStop(0, "#202020"),
                        B.addColorStop(.5, "#202020"),
                        B.addColorStop(1, "#202020")),
                        B  
                    }(mimi, this.space), */
                    mimi.fillRect(h / -2, i / -2, this.space.width + h, this.space.height + i),
                    mimi.lineJoin = "round",

                    mimi.globalCompositeOperation = "source-over",
                    mimi.lineJoin = "butt",
                    mimi.lineCap = "butt",
					 
                /*     this.particles.forEach(function(t) {
                        return m(t.position, R) && t.draw(mimi)
                    }), */
                   mimi.scale(1 / a, 1 / a),
                    this.labels.forEach(function(t) {
                        //return t.draw(mimi, a)
                    }),
                    mimi.scale(a, a);
                    var g = this.units[0];
                    g && function(t, e, n) {
                        var i = window.devicePixelRatio
                          , s = ~~(20 / i);
                        t.save(),
                        t.translate(e.position.x, e.position.y),
                        t.scale(1 / (n * i*2), 1 / (n * i*2)),
                        t.fillStyle = "#ffff00",
                        t.strokeStyle = "#111",
                        t.lineJoin = "round",
                        t.lineWidth = 4,
                        t.translate(0, -10 * n * i),
                        t.translate(0, -4),
                        t.translate(0, -s * i),
                        t.translate(0, -20),
                        t.fill(U),
                        t.stroke(U),
                        t.restore()
                    }(mimi, g, a);
                    var k = g && g.base.square / this.square;
                    mimi.resetTransform();
               
			   
                    mimi.scale(1 / n, 1 / n);
                 			
                   
			
			
                /*     if (!P && this.player && !this.player.death) {
                        var I = this.units.findIndex(function(t) {
                            return t === o.player
                        });
                        T(this.player, I + 1, 6, k)
                    }
					 */
					
                    
                    this.timings.renderEndTime = H();
                    var j = function(t, e) {
                        return .95 * t + .05 * e
                    }
                      , L = this.stats
                      , z = this.timings;
                    L.fps = j(L.fps, 1e3 / t),
                    L.ut = j(L.ut, z.updateEndTime - z.updateStartTime),
                    L.ait = j(L.ait, z.aiEndTime - z.aiStartTime),
                    L.st = j(L.st, z.spawnEndTime - z.spawnStartTime),
                    L.rt = j(L.rt, z.renderEndTime - z.renderStartTime);
					
					
                }
				
				
				
				
				// minimap...
				// minimap...
				
				// minimap...
				
				// minimap...
				
				
				
				
				
		               if (e) {


				
				
                    var l = e.getContext("2d"),


                        n = window.devicePixelRatio
                      , h = e.width * n
                      , i = e.height * n
                      , s = Math.sqrt(h * h + i * i) / Math.sqrt(2455780)
                      , a = this.scale * s / n
                      , r = this.player ? this.player.position : this.space.center
                      , u = r.x * a - e.width / 2
                      , c = r.y * a - e.height / 2
                      , f = r.x - e.width / 2 / a
                      , d = r.x + e.width / 2 / a
                      , p = r.y - e.height / 2 / a
                      , v = r.y + e.height / 2 / a
                      , m = function(t) {
                        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
                        return D(f - e, d + e, t.x) && D(p - e, v + e, t.y)
                    }
                      , y = function(t) {
                        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
                        return 0 < A(t.bounds.left - e, t.bounds.right + e, f, d) && 0 < A(t.bounds.top - e, t.bounds.bottom + e, p, v)
                    };
						
						
						
						
                    l.resetTransform(),
                    l.clearRect(0, 0, e.width, e.height),
                    l.translate(-u, -c),
                    l.scale(a, a),
                    l.translate(0, -K.baseHeight),
                    this.units.forEach(function(t) {
						
                        y(t.base.polygon, R) && W(l, t.base.polygon.path, t.skin.pattern || t.skin.colors.main)
                    }),
                    l.lineCap = "round",
                    l.globalCompositeOperation = "destination-out",
					
                    this.units.forEach(function(t) {
						
                        var e = t.track.polyline,
						n = e.start;
                        e.bounds;
						                        									
 
                        n && (Q(l, "#111", t.track, t.position),
                       
					   // n && y(t.track.polyline, R) && (Q(l, "#111", t.track, t.position),
						
						// nick yazısı nikname nickname
                        l.save(),
						
                        l.globalCompositeOperation = "destination-over",
						
                        l.clip(t.base.polygon.path),
                        Q(l, t.skin.pattern || t.skin.colors.main, t.track, t.position, !0),
                        l.restore())
                    }),
                    l.translate(0, K.baseHeight),
                    l.globalCompositeOperation = "source-over",
                    this.units.forEach(function(e) {
						
                        m(e.position, 4 * R) && (l.save(),
                        e.skin.avatar.topLayers.forEach(function(t) {
                            return J(l, e, t) 
							
                        }),
                        l.restore())
                    }),
					
					
					
					// nikname nickname username
                    this.units.forEach(function(t) {
						
					              									
 
 						
					 
                        !function(t, e, n) {
                            var i = ~~(25 / window.devicePixelRatio);
                            t.save(),
                            t.translate(e.position.x, e.position.y),
                            t.scale(1.001 / n, 1.001 / n),
                            t.font = "bold ".concat(i, "px arial"),
								t.shadowColor="black";
								t.shadowBlur=0;
								t.lineWidth=5;
								t.textAlign = "center",
								t.textBaseline = "bottom",

							
								t.shadowBlur=0,
								t.textAlign = "center",
								t.textBaseline = "bottom",
					 			 t.strokeText(e.name+"", 0, -100 * n),

						    	t.fillStyle = "#fff",

 
								t.fillText(e.name+"", 0, -100 * n),
								t.restore()


                        }(l, t, a)
                    }),
                    l.globalCompositeOperation = "destination-over",
                    this.units.forEach(function(e) {
						
                        m(e.position, 4 * R) && (l.save(),
                        e.skin.avatar.bottomLayers.forEach(function(t) {
							
                            return J(l, e, t)
                        }),
                        l.restore())
                    }),
                    l.globalAlpha = .6,
                    this.units.forEach(function(t) {
                        t.in !== t.base && y(t.track.polyline, R) && Q(l, t.skin.pattern || t.skin.colors.main, t.track, t.position)
                    }),
                    l.globalAlpha = 1,
                    this.units.forEach(function(t) {
                        y(t.base.polygon, R) && W(l, t.base.polygon.path, t.skin && t.skin.back || t.skin.colors.back)
                    }),
                 F(l, this.border, 0, "#eee"), // oyun alanı
				
                    //l.translate(0, 5),
                    F(l, this.border, 0, "#ff0000"), // arka plan
                    l.translate(0, -5),
                    l.fillStyle = function(t, e) {
                 return B || ((B = t.createLinearGradient(e.width / 2, 0, e.width / 2, e.height)).addColorStop(0, "#202020"),
                        B.addColorStop(.5, "#202020"),
                        B.addColorStop(1, "#202020")),
                        B  
                    }(l, this.space),
                    l.fillRect(h / -2, i / -2, this.space.width + h, this.space.height + i),
                    l.lineJoin = "round",
                    l.globalCompositeOperation = "source-over",
                    l.globalCompositeOperation = "source-over",
                    l.lineJoin = "butt",
                    l.lineCap = "butt",
					 
                    this.particles.forEach(function(t) {
                        return m(t.position, R) && t.draw(l)
                    }),
                    l.scale(1 / a, 1 / a),
                    this.labels.forEach(function(t) {
                        return t.draw(l, a)
                    }),
                    l.scale(a, a);
                    var g = this.units[0];
                    g && function(t, e, n) {
                        var i = window.devicePixelRatio
                          , s = ~~(50 / i);
                        t.save(),
                        t.translate(e.position.x, e.position.y),
                        t.scale(1 / (n * i), 1 / (n * i)),
                        t.fillStyle = "#ffff00",
                        t.strokeStyle = "#111",
                        t.lineJoin = "round",
                        t.lineWidth = 4,
                        t.translate(0, -10 * n * i),
                        t.translate(0, -4),
                        t.translate(0, -s * i),
                        t.translate(0, -60),
                        t.fill(U),
                        t.stroke(U),
                        t.restore()
                    }(l, g, a);
                    var k = g && g.base.square / this.square;
                    l.resetTransform();
                    var b = function(t, e, n, i, s, a) {
                        var r = _(a, 4)
                          , o = r[0]
                          , l = r[1]
                          , h = r[2]
                          , u = r[3];
                        t.beginPath(),
                        t.moveTo(e + o, n),
                        t.lineTo(e + i - l, n),
                        t.quadraticCurveTo(e + i, n, e + i, n + l),
                        t.lineTo(e + i, n + s - h),
                        t.quadraticCurveTo(e + i, n + s, e + i - h, n + s),
                        t.lineTo(e + u, n + s),
                        t.quadraticCurveTo(e, n + s, e, n + s - u),
                        t.lineTo(e, n + o),
                        t.quadraticCurveTo(e, n, e + o, n),
                        t.closePath(),
                        t.fill()
                    };
                    l.scale(1 / n, 1 / n);
						 var ezgi = this.view;
                if (ezgi) {

                      var n = window.devicePixelRatio;
                      var genislik = ezgi.width * n;
                      var yukseklik = ezgi.height * n;

  
				}			
                    for (var w, x = function(t, e, n) {
                        return n < t ? t : e < n ? e : n
                    }(9 / 16, 16 / 9, h / i), M = 9 / 16 - 16 / 9, S = h / (-(1.75 + 1.75 * x) / M), E = S / 2, T = function(t, e, n, i) {
                       

				if(genislik/2<600){
					   var s = 16 + 90 * n
                          , a = t.base.square / o.square / i * E;
                        w && w - .05 * E < a && (a = w - .05 * E);
 						
						
								var r = h - (E + (w = a));
								l.fillStyle = "#00000011",
								b(l, r, 12 + s, S, 70, [18, 0, 0, 18]),
								l.fillStyle = t.skin.colors.back,
								b(l, r, 12 + s, S, 70, [18, 0, 0, 18]),
								l.fillStyle = t.skin.colors.main,
								b(l, r, s, S, 70, [18, 0, 0, 18]),
								l.fillStyle = t.skin.colors.nick,
								l.font = "bold ".concat(40, "px arial"),
								l.textAlign = "left",
								l.textBaseline = "top";
						} else {
							  var s = 16 + 46 * n
                          , a = t.base.square / o.square / i * E;
                        w && w - .05 * E < a && (a = w - .05 * E);
                        var r = h - (E + (w = a));
						
								   
								l.fillStyle = "#00000011",
								b(l, r, 16 + s, S, 36, [18, 0, 0, 18]),
								l.fillStyle = t.skin.colors.back,
								b(l, r, 4 + s, S, 36, [18, 0, 0, 18]),
								l.fillStyle = t.skin.colors.main,
								b(l, r, s, S, 36, [18, 0, 0, 18]),
								l.fillStyle = t.skin.colors.nick,
								l.font = "bold ".concat(20, "px arial"),
								l.textAlign = "left",
								l.textBaseline = "middle";
							
						}
						
						// king kral lider
						if(e==1){
							l.fillText("".concat("👑 "+e, "— ").concat((t.base.square / o.square * 100).toFixed(2), "% ").concat(t.name), 18 + r, 18 + s + 2);
						}else{
							l.fillText("".concat(e, "— ").concat((t.base.square / o.square * 100).toFixed(2), "% ").concat(t.name), 18 + r, 18 + s + 2);
						}
                    }, P = !1, q = 0; q < 5; q++) {
                        var C = this.units[q];
                        C && (C === this.player && (P = !0),
                        T(C, q + 1, q, k))
                    }
                    if (!P && this.player && !this.player.death) {
                        var I = this.units.findIndex(function(t) {
                            return t === o.player
                        });
                        T(this.player, I + 1, 6, k)
                    }
					
					
                    if (this.player) {
						
		if(genislik/2<600){
			
						l.fillStyle = "#00000022",
						b(l, 0, yukseklik+300, S, 40, [0, 20, 20, 0]);
						var O = .25 * S + this.player.base.square / this.square * S * .75;
						l.fillStyle = this.player.skin.colors.back,
						b(l, 0, yukseklik+300, O, 36, [0, 18, 18, 0]),
						l.fillStyle = this.player.skin.colors.main,
						b(l, 0, yukseklik+300, O, 36, [0, 18, 18, 0]),
						
						l.fillStyle = this.player.skin.colors.nick,
						l.font = "bold ".concat(60, "px arial"),
						l.textAlign = "left",
						l.textBaseline = "middle",
						l.fillText("🏆 ".concat((this.player.base.square / this.square * 100).toFixed(2), "%"), 18, 60),
						l.fillStyle = "#00000088",

/* 
						l.fillStyle = "#58c921", 
						b(l, 0, yukseklik-200, 170, 36, [0, 18, 18, 0]),
						l.font = "bold ".concat(20, "px arial"), 
						l.fillStyle = "#fff", 
						l.textBaseline = "top",
						l.fillText("🏆 Best: ".concat(this.best.toFixed(2), "%"), 3, 70);
 */
						
						
						
						l.fillStyle = this.player.skin.colors.nick, 
						l.font = "bold ".concat(60, "px arial"), 

						l.textBaseline = "middle", 
						l.fillText("💀 ".concat(this.player.statistics.kills), 18, 140),
						// canlı yayın		
						canliskor = (this.player.base.square / this.square * 100).toFixed(2);			 
						//console.log('Nick:' + canliisim + ' Skor:' +canliskor);

  
		}else{
			
			    l.fillStyle = "#00000022",
                        b(l, 0, 16, S, 40, [0, 20, 20, 0]);
                        var O = .25 * S + this.player.base.square / this.square * S * .75;
                        l.fillStyle = this.player.skin.colors.back,
                        b(l, 0, 20, O, 36, [0, 18, 18, 0]),
                        l.fillStyle = this.player.skin.colors.main,
                        b(l, 0, 14, O, 36, [0, 18, 18, 0]),
                        l.fillStyle = this.player.skin.colors.nick,
                        l.font = "bold ".concat(22, "px arial"),
                        l.textAlign = "left",
                        l.textBaseline = "middle",
                        l.fillText("".concat((this.player.base.square / this.square * 100).toFixed(2), "%"), 18, 36),
                        l.fillStyle = "#00000088",
						
                       
							 	 l.fillStyle = "#111", 
							b(l, 0, 60, 170, 36, [0, 18, 18, 0]),
							l.font = "bold ".concat(20, "px arial"), 
							 l.fillStyle = "#fff", 
							l.textBaseline = "top", l.fillText("🏆 Best: ".concat(this.best.toFixed(2), "%"), 3, 70);
							 
							 
							 l.fillStyle = "#111", 
							b(l, 0, 100, 130, 36, [0, 18, 18, 0]),
                             
                                l.fillStyle = "#fff", 
								l.font = "bold ".concat(20, "px arial"), 
								
								l.textBaseline = "middle", 
								l.fillText("💀 Kills: ".concat(this.player.statistics.kills), 3, 120),
					// canlı yayın		
					 canliskor = (this.player.base.square / this.square * 100).toFixed(2);			 
                     
   
			
		}
					}
                    this.timings.renderEndTime = H();
                    var j = function(t, e) {
                        return .95 * t + .05 * e
                    }
                      , L = this.stats
                      , z = this.timings;
                    L.fps = j(L.fps, 1e3 / t),
                    L.ut = j(L.ut, z.updateEndTime - z.updateStartTime),
                    L.ait = j(L.ait, z.aiEndTime - z.aiStartTime),
                    L.st = j(L.st, z.spawnEndTime - z.spawnStartTime),
                    L.rt = j(L.rt, z.renderEndTime - z.renderStartTime);
					
					
                }		
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
            }
        }, {
            key: "checkSegments",
            value: function(t) {
                this.units.forEach(function(t) {
                    t.base.polygon.segments.length,
                    t.track.polyline.segments.length
                });
                var e = this.space.segmentsCount();
                Object.keys(e).length
            }
        }, {
            key: "handleReturn",
            value: function(g) {
                var k = this;
                if (!g.death) {
                    var e = g.track.polyline.clone()
                      , t = g.base
                      , n = t.polygon.segments.findIndex(function(t) {
                        return t.start === e.start
                    })
                      , i = t.polygon.segments.findIndex(function(t) {
                        return t.start === e.end
                    })
                      , s = Math.min(i, n)
                      , a = Math.max(i, n);
                    s !== n && e.reverse();
                    var r = e.points()
                      , o = t.polygon.points()
                      , l = o.splice.apply(o, [s, a - s + 1].concat(w(r)));
                    l.shift(),
                    l.pop(),
                    l.reverse(),
                    l.push.apply(l, w(r));
                    var h, u = new C(l);
                    u.rawSquare() < 0 ? (h = new C(o.reverse()),
                    t.polygon.unsplice(e, s, a)) : (h = u,
                    t.polygon.splice(e, s, a)),
                    t.square += h.square(),
                    t.polygon.calcPath(),
                    this.units.filter(function(t) {
                        return t !== g
                    }).forEach(function(t) {
                        t.death || (t.in === t.base && h.inside(t.position) && k.kill(t, g),
                        t.track.polyline.start && h.inside(t.track.polyline.start) && k.kill(t, g))
                    });
                    for (var c = [], f = g.track.polyline.segments, d = f.length, p = function(e) {
                        var n = e === d ? f[e - 1].end : f[e].start
                          , t = n.segments.filter(function(t) {
                            return t.shape.owner !== g.track && t.shape.owner !== g.base && t.start === n
                        });
                        if (t.length) {
                            var i = t.map(function(t) {
                                return {
                                    owner: t.shape.owner,
                                    point: n,
                                    segment: t,
                                    index: e
                                }
                            });
                            if (c.length) {
                                var s = c.filter(function(e) {
                                    return i.some(function(t) {
                                        return t.owner === e.owner
                                    })
                                });
                                if (s.length) {
                                    var a = s[0]
                                      , r = i.find(function(t) {
                                        return t.owner === a.owner
                                    });
                                    !function(t) {
                                        var e = t.owner
                                          , n = t.startT
                                          , i = t.endT
                                          , s = t.startPoint
                                          , a = t.endPoint
                                          , r = t.enter
                                          , o = t.leave;
                                        if (r.shape !== e.polygon && (r = e.polygon.segments.find(function(t) {
                                            return t.start === s
                                        })),
                                        o.shape !== e.polygon && (o = e.polygon.segments.find(function(t) {
                                            return t.start === a
                                        })),
                                        r !== o) {
                                            var l = g.track.polyline.points().splice(n, i - n + 1)
                                              , h = e.polygon.segments.findIndex(function(t) {
                                                return t === r
                                            })
                                              , u = e.polygon.segments.findIndex(function(t) {
                                                return t === o
                                            })
                                              , c = Math.min(u, h)
                                              , f = Math.max(u, h);
                                            c !== h && l.reverse();
                                            var d = e.polygon.points()
                                              , p = d.splice.apply(d, [c, f - c + 1].concat(w(l)));
                                            p.shift(),
                                            p.pop(),
                                            p.push.apply(p, w(l.slice().reverse()));
                                            var v, m = new C(p), y = new C(d);
                                            v = e.unit.in === e.unit.base && m.inside(e.unit.position) || e.unit.in !== e.unit.base && m.inside(e.unit.track.polyline.start) ? (e.polygon.right(l, c, f),
                                            y) : (e.polygon.left(l, c, f),
                                            m),
                                            e.square -= v.square(),
                                            e.polygon.calcPath(),
                                            k.units.forEach(function(t) {
                                                e.unit !== t && t.in === e && v.inside(t.position) && (t.in = null)
                                            })
                                        }
                                    }({
                                        owner: a.owner,
                                        enter: a.segment,
                                        startPoint: a.point,
                                        startT: a.index,
                                        leave: r.segment,
                                        endPoint: r.point,
                                        endT: r.index
                                    });
                                    var o = g.track.intersections.find(function(t) {
                                        return t.point.equal(n)
                                    }).intersections.filter(function(t) {
                                        return t.base === a.owner
                                    });
                                    1 !== o.length && !1 !== o[o.length - 1].enter || (i = i.filter(function(t) {
                                        return t.owner !== a.owner
                                    }))
                                }
                                c = i
                            } else {
                                var l = g.track.intersections.find(function(t) {
                                    return t.point.equal(n)
                                });
                                if (!l)
                                    return {
                                        v: !1
                                    };
                                c = i.filter(function(e) {
                                    var t = l.intersections.filter(function(t) {
                                        return t.base === e.owner
                                    });
                                    return !!t.length && t[t.length - 1].enter
                                })
                            }
                        }
                    }, v = 0; v <= d; v++) {
                        var m = p(v);
                        if ("object" === b(m))
                            return m.v
                    }
                    this.units.forEach(function(t) {
                        g !== t && h.inside(t.position) && (t.in = g.base)
                    })
                }
            }
        }]),
        u
    }(), ot = K.trackWidth * K.maxScale, lt = {
        level: 0,
        scale: 1,
        x: 0,
        y: 0,
        pivot: {
            x: .5,
            y: .5
        },
        direction: "",
        rotation: 0,
        image: null
    }, ht = {
        scale: 1,
        x: 0,
        y: 0,
        layers: []
    }, ut = {
        main: "black",
        back: "black",
        nick: "black",
        particles: ["black"]
    }, ct = {
        name: "",
        colors: ut,
        pattern: null,
        avatar: null
    }, ft = document.createElementNS("http://www.w3.org/2000/svg", "svg"), dt = function t(r, o, e) {
        var l = this;
        if (p(this, t),
        Object.assign(this, ct, o),
        this.colors = Object.assign({}, ut, o.colors),
        this.pattern = null,
        o.pattern) {
            var h = new Image;
			// skin buyukluğu bases
            h.onload = function() {
                var t = h.width
                  , e = h.height
                  , n = 500 / t * K.maxScale * (o.pattern.scale || 1)
                  , i = document.createElement("canvas");
				 
                i.width = ~~(t * n),
                i.height = ~~(e * n),
                i.getContext("2d").drawImage(h, 0, 0, i.width, i.height),
                l.pattern = r.getContext("2d").createPattern(i, "repeat");
                var s = 1 / K.maxScale
                  , a = ft.createSVGMatrix().scale(s, s);
                l.pattern.setTransform && l.pattern.setTransform(a)
            }
            ,
            h.src = e + o.pattern.url
        }
        var n = function(t, e) {
            var n = document.createElement("canvas");
		
            n.width = ot,
            n.height = ot;
            var i = n.getContext("2d");
            return i.fillStyle = e,
            i.fillRect(0, 0, ot, ot),
            i.fillStyle = t,
            i.fillRect(ot / 6, ot / 6, 2 / 3 * ot, 2 / 3 * ot),
            n
        };
        o.avatar ? (this.avatar = Object.assign({}, ht, o.avatar),
        this.avatar.layers = (o.avatar.layers || []).map(function(t) {
            var r = Object.assign({}, lt, t);
            r.pivot = Object.assign({
                x: .5,
                y: .5
            }, t.pivot);
            var o = new Image;
            return o.src = e + r.url,
            o.onload = function() {
                var t = o.naturalWidth || o.width
                  , e = o.naturalHeight || o.height
                  , n = ot * l.avatar.scale * r.scale / t
                  , i = ~~(t * n)
                  , s = ~~(e * n)
                  , a = document.createElement("canvas");
                a.width = i,
                a.height = s,
                a.getContext("2d").drawImage(o, 0, 0, i, s),
                r.image = a
            }
            ,
            r
        })) : this.avatar = Object.assign({}, ht, {
            layers: [Object.assign({}, lt, {
                image: n(this.colors.back, this.colors.back)
            }), Object.assign({}, lt, {
                level: 1,
                image: n(this.colors.main, this.colors.back)
            })]
        }),
        this.avatar.topLayers = this.avatar.layers.filter(function(t) {
            return 1 <= t.level
        }).sort(function(t, e) {
            return t.level - e.level
        }),
        this.avatar.bottomLayers = this.avatar.layers.filter(function(t) {
            return t.level < 1
        }).sort(function(t, e) {
            return e.level - t.level
        })
    }, pt = function() {
        function t(a) {
            var r = this;
            p(this, t),
            this.view = a,
            this.available = [],
            this.used = [];
            [0, 30, 60, 120, 175, 200, 220, 240, 260, 280, 320].forEach(function(t) {
                var e = y(t, 70, 100)
                  , n = y(t, 70, 95)
                  , i = y(t, 70, 80)
                  , s = y(t, 70, 60);
                r.available.push(new dt(a,{
                    colors: {
                        main: n,
                        back: i,
                        nick: s,
                        particles: [e, n, i, s]
                    }
                }))
            })
        }
        return h(t, [{
            key: "add",
            value: function(t, e) {
                var n = this;
                t.forEach(function(t) {
                    return n.available.push(new dt(n.view,t,e))
                })
            }
        }, {
            key: "get",
            value: function(e, t) {
                "default" === e && (e = "");
                var n, i = this.available.length;
                if (!i)
                    throw new Error("Запас скинов исчерпан");
                if (e)
                    n = this.available.findIndex(function(t) {
                        return t.name === e
                    });
                else if (t) {
                    var s = this.available.filter(function(t) {
                        return t.name === e
                    })
                      , a = s[~~(Math.random() * s.length)];
                    n = this.available.indexOf(a)
                } else
                    n = ~~(Math.random() * i);
                if (0 <= n) {
                    var r = this.available.splice(n, 1)[0];
                    return this.used.push(r),
                    r
                }
            }
        }, {
            key: "release",
            value: function(t) {
                var e = this.used.indexOf(t);
                -1 !== e && this.used.splice(e, 1),
                this.available.push(t)
            }
        }]),
        t
    }(), vt = function() {
        function e(t) {
            p(this, e),
            this.pool = [],
            this.requested = !1,
            this.callback = function() {
                return t && t.prepare()
            }
        }
        return h(e, [{
            key: "get",
            value: function() {
                return this.pool.shift()
            }
        }, {
            key: "request",
            value: function() {
                var i = this;
                if (!this.requested) {
                    this.requested = !0;
                    var t = 10 - this.pool.length;
                    $.ajax({
                        url: "paper2.php",
                        method: "POST",
                        data: {
                            length: t
                        },
                        success: function(t) {
                            i.requested = !1,
                            i.pool = i.pool.concat(t.names),
                            i.callback && (i.callback(),
                            i.callback = null)
                        },
                        error: function(t, e, n) {
                            i.requested = !1
                        }
                    })
                }
            }
        }]),
        e
    }(), mt = function() {
        function t() {
            p(this, t),
            this.mode2 = !1
        }
        return h(t, [{
            key: "get",
            value: function() {
                return "undefined" != typeof Cookies && void 0 !== Cookies.get("paper2_keyboard_mode2") && (this.mode2 = "true" === Cookies.get("paper2_keyboard_mode2")),
                this.mode2
            }
        }, {
            key: "switch",
            value: function() {
                this.mode2 = !this.mode2,
                "undefined" != typeof Cookies && Cookies.set("paper2_keyboard_mode2", this.mode2)
            }
        }]),
        t
    }();
		
 		if(window.location.host=="geometry.lol"){

    if (Path2D) {
		// oyun alanı
        var yt = new T(16000,16000,100);
        E.space = yt;
        var gt = new E(8000,8000)
          , kt = .95 * Math.min(gt.x, gt.y)
          , bt = new I(m(gt.x, gt.y, 300, kt),kt)
          , wt = {}
          , xt = 0
          , Mt = function(t) {
            var e = t.game
              , n = t.score
              , i = t.best
              , s = (t.time,
            t.kills,
            t.image,
            t.win);
            t.newBest = !1,
            i < n && ("undefined" != typeof Cookies && Cookies.set("paper3_best", n),
            t.newBest = !0,
            t.best = n),
            s && (xt = 0,
            wt.prepare()),
            e.view.style.display = "none",
            e.generateParticles = !1,
            e.actived = !1,
            window.paper2_results = t,
            window.game_is_over_main()
        }
          , St = ((r = document.createElement("canvas")).style.display = "none",
        r.style.width = "100%",
        r.style.height = "100%",
        r.style.position = "absolute",
        r.style.top = "50%",
        r.style.left = "50%",
        r.style.transform = "translate(-50%, -50%)",
        document.body.appendChild(r),
		  
		
        r)
		 
          , Et = new vt(wt)
          , Tt = new pt(St)
          , Pt = new mt;
		  
 

  

			 
			  
        $.ajax({
            url: "skins/skins.json",
            method: "GET",
            success: function(t) {
                Et.request(),
                Tt.add(t, "skins/");
                var e, a, r = new rt(St,yt,bt,Tt,10,Mt,Et,Pt), n = !1, i = K.spawnTimeout;
                K.spawnTimeout = 0,
                wt.prepare = function() {
                    e = setInterval(function() {
                        Et.pool.length && (r.update(1e3 / 60 * 2 + Math.random()),
                        ++xt > K.prepareCounter && clearInterval(e))
                    }, 1e3 / 60)
                }
                ,
                wt.start = function() {
					
                    for (r.best = "undefined" != typeof Cookies && Cookies.get("paper3_best") ? parseFloat(Cookies.get("paper3_best")) : 0,
                    r.view.style.display = "block",
                    r.controller.keyboardModeSwitch.get(),
                    clearInterval(e); xt < K.prepareCounter; xt++)
                        r.update(1e3 / 60 * 2 + Math.random());
                    K.spawnTimeout = i;
				/*
					////////////// 
					// var t = (function(t) {
                        // return useId === "tank";
                    // }); 
					///////////
				*/                  
				
				  r.spawnPlayer("undefined" != typeof Cookies && Cookies.get("myNick"), Cookies.get("mySkin")),
                    r.generateParticles = !0,
                    r.actived = !0,
                    n || (n = !0,
                    a = performance.now() - 1e3 / 60,
                    function t() {
                        var e = performance.now()
                          , n = e - a;
                        !r.actived && 500 < n && (n = 1e3 / 60 + Math.random());
                        for (var i = n; 0 < n; )
                            if (2e3 / 60 < n) {
                                var s = Math.random() + 2e3 / 60;
                                n - s < 1e3 / 60 && (s = Math.random() + 25),
                                n -= s,
                                r.update(s)
                            } else
                                r.update(n),
                                n = 0;
                        r.actived && r.render(i),
                        a = e,
                        requestAnimationFrame(t)
                    }())
                }
                ,
                window.paper2 = wt
            }
        })
  } else window.paper2 = {
        noSupport: !0
    }
		  } else {
			alert("server error!");
		} 
}();


