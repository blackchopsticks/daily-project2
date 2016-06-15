window.onload=function(){
/*首部JS文件*/
// (function (){
var dh=document.getElementById('dh');
var my=dh.getElementsByClassName('meiyong')[0];
var sz=dh.getElementsByClassName('sz')[0];
var dj=dh.getElementsByClassName('dj')[0];
var cs=dh.getElementsByClassName('cs')[0];
var xscs=dh.getElementsByClassName('xscs')[0];
var lis=dh.getElementsByTagName('li');
sz.onmouseover=function(){
	cs.style.display='block';
	dj.style.backgroundColor='#fff';
	dj.style.borderLeft='1px solid #DDDDDD';
	my.style.borderLeft='1px solid #DDDDDD';
	my.style.borderBottom='1px solid #DDDDDD';
	for(var i=0; i<$('.cs li').length; i++){
	if($('.cs li').eq(i).html()==$('.xscs').html()){
			$('.cs li').eq(i).css({color:'#fff',backgroundColor:'#C81623'});
		}
	}
}
sz.onmouseout=function(){
	cs.style.display='none';
	dj.style.backgroundColor='#F1F1F1';
	dj.style.borderLeft='1px solid #F1F1F1';
	my.style.borderLeft='';
	my.style.borderBottom='';
}
for(var i=0; i<lis.length; i++){
	lis[i].onclick=function(){
		for(var i=0; i<lis.length; i++){
			if(lis[i]==this){
				lis[i].style.color='#fff';
				lis[i].style.backgroundColor='#C81623';
				xscs.innerHTML=lis[i].innerHTML;
				cs.style.display='none';
			}else{
				lis[i].style.color='#666';
				lis[i].style.backgroundColor='';
			}
		}
	}
}
$('.cs li').mouseover(function(){
	var i=$('.cs li').index(this);
	$('.cs li').eq(i).css({color: '#C81623',backgroundColor:'#F4F4F4'});
})
$('.cs li').mouseout(function(){
	var i=$('.cs li').index(this);
	$('.cs li').eq(i).css({color: '#666',backgroundColor:'#fff'});
})
// })();
}


var wodejd=dh.getElementsByClassName('wodejd')[0];
var wdjd=dh.getElementsByClassName('wdjd')[0];
var my2=dh.getElementsByClassName('meiyong2')[0];
var zjll=dh.getElementsByClassName('zjll')[0];
wodejd.onmouseover=function(){
	zjll.style.display='block';
	wdjd.style.backgroundColor='#fff';
	wdjd.style.borderLeft='1px solid #DDDDDD';
	wdjd.style.borderRight='1px solid #DDDDDD';
	my2.style.backgroundColor='#DDDDDD';
}
wodejd.onmouseout=function(){
	zjll.style.display='none';
	wdjd.style.backgroundColor='#F1F1F1';
	wdjd.style.borderLeft='1px solid #F1F1F1';
	wdjd.style.borderRight='1px solid #F1F1F1';
	my2.style.backgroundColor='#F1F1F1';
}

var guzhjd=document.getElementsByClassName('guzhjd')[0];
var gzjd=document.getElementsByClassName('gzjd')[0];
guzhjd.onmouseover=function(){
	gzjd.style.borderLeft='1px solid #DDDDDD';
	gzjd.style.borderRight='1px solid #DDDDDD';
}
guzhjd.onmouseout=function(){
	gzjd.style.borderLeft='1px solid #F1F1F1';
	gzjd.style.borderRight='1px solid #F1F1F1';
}
/*首部JS文件结束*/

/*第二部分*/
var focus=document.getElementById('focus');
var hfjpd=focus.getElementsByClassName('hfjpd')[0];
var xmdycd=hfjpd.getElementsByClassName('xmdycd')[0];
var ul=hfjpd.getElementsByTagName('ul')[0];
var lis=ul.getElementsByTagName('li');
var timer1=null,timer2=null;
var xmdycd_bottomhf=xmdycd.getElementsByClassName('xmdycd_bottomhf')[0];
var chongz=xmdycd_bottomhf.getElementsByClassName('chongz')[0];
var hfcz=chongz.getElementsByClassName('hfcz');
var hfll=xmdycd_bottomhf.getElementsByClassName('hfll')[0];
var hfllspan=hfll.getElementsByTagName('span');
var xmdycd_bottomjp=xmdycd.getElementsByClassName('xmdycd_bottomjp')[0];
var hfll02=xmdycd_bottomjp.getElementsByClassName('hfll')[0];
var hfllspan02=hfll02.getElementsByTagName('span');
var chongz02=xmdycd_bottomjp.getElementsByClassName('chongz')[0];
var hfcz02=chongz02.getElementsByClassName('hfcz');

var xmdycd_bottomdyp=xmdycd.getElementsByClassName('xmdycd_bottomdyp')[0];
var hfll03=xmdycd_bottomdyp.getElementsByClassName('hfll')[0];
var hfllspan03=hfll03.getElementsByTagName('span');
var mdyp=xmdycd_bottomdyp.getElementsByClassName('mdyp')[0];
var zzry=xmdycd_bottomdyp.getElementsByClassName('zzry');

var xmdycd_bottomyx=xmdycd.getElementsByClassName('xmdycd_bottomyx')[0];
var hfll04=xmdycd_bottomyx.getElementsByClassName('hfll')[0];
var hfllspan04=hfll04.getElementsByTagName('span');
var chongz04=xmdycd_bottomyx.getElementsByClassName('chongz')[0];
var hfcz04=chongz04.getElementsByClassName('hfcz');


for(var i=0; i<hfllspan.length; i++){
	hfllspan[i].onmouseover=function(){
		for(var i=0; i<hfllspan.length; i++){
			if(hfllspan[i]==this){
				chongz.scrollTop=hfcz[0].offsetHeight*i;
				hfllspan[i].style.background='url(image/hfcz.png) center 0 no-repeat';
				hfllspan[i].style.color='#fff';
			}else{
				hfllspan[i].style.background='';
				hfllspan[i].style.color='';
			}
		}
	}
}

for(var i=0; i<hfllspan02.length; i++){
	hfllspan02[i].onmouseover=function(){
		for(var i=0; i<hfllspan02.length; i++){
			if(hfllspan02[i]==this){
				chongz02.scrollTop=hfcz02[0].offsetHeight*i;
				hfllspan02[i].style.background='url(image/hfcz.png) center 0 no-repeat';
				hfllspan02[i].style.color='#fff';
			}else{
				hfllspan02[i].style.background='';
				hfllspan02[i].style.color='';
			}
		}
	}
}
// (zzry[0].offsetHeight+4)
for(var i=0; i<hfllspan03.length; i++){
	hfllspan03[i].onmouseover=function(){
		for(var i=0; i<hfllspan03.length; i++){
			if(hfllspan03[i]==this){
				mdyp.scrollTop=(zzry[0].offsetHeight+4)*i;
				hfllspan03[i].style.background='url(image/hfcz.png) center 0 no-repeat';
				hfllspan03[i].style.color='#fff';
			}else{
				hfllspan03[i].style.background='';
				hfllspan03[i].style.color='';
			}
		}
	}
}

for(var i=0; i<hfllspan04.length; i++){
	hfllspan04[i].onmouseover=function(){
		for(var i=0; i<hfllspan04.length; i++){
			if(hfllspan04[i]==this){
				chongz04.scrollTop=hfcz04[0].offsetHeight*i;
				hfllspan04[i].style.background='url(image/hfcz.png) center 0 no-repeat';
				hfllspan04[i].style.color='#fff';
			}else{
				hfllspan04[i].style.background='';
				hfllspan04[i].style.color='';
			}
		}
	}
}

for(var i=0; i<4; i++){
	lis[i].onmouseover=function(ev){
		var Event=ev||window.event;
		var from=Event.fromElement||Event.relatedTarget;
		while(from){
			if(this==from){
				return false;
			}
			from=from.parentNode;
		}
		clearInterval(timer1);
		clearInterval(timer2);
		clearInterval(timer3);
		clearInterval(timer4);
		for(var i=0; i<4; i++){
			if(lis[i]==this){
				var start=-4;
				var end=-213;
				var step=0;
				var stepmax=7;
				var everystep=(end-start)/stepmax;
				timer2=setTimeout(function(){
					timer1=setInterval(function(){
						step++;
						if(step==7){
							step=0;
							clearInterval(timer1);
						}
						start+=everystep;
						xmdycd.style.marginTop=start+'px';
					},30)
				},500)
				xmdycd_top_spans[i].style.borderBottom='1px solid #fff';
				xmdycd_top_spans[i].style.borderTop='2px solid #C81623';
				xmdycd_bottom.scrollTop=xmdycd_bottom_h1s[1].offsetHeight*i;
			}else{
				xmdycd_top_spans[i].style.borderTop='';
			}
		}
	}
}


var xmdycd_top=xmdycd.getElementsByClassName('xmdycd_top')[0];
var xmdycd_bottom=xmdycd.getElementsByClassName('xmdycd_bottom')[0];
var xmdycd_top_spans=xmdycd_top.getElementsByTagName('span');
var xmdycd_bottom_h1s=xmdycd_bottom.getElementsByTagName('h1');
var xmdycd_bottominner=xmdycd_bottom.getElementsByClassName('xmdycd_bottominner')[0];
var vars1=xmdycd_bottominner.getElementsByTagName('var');
var timer3=null,timer4=null;
for(var i=0; i<vars1.length; i++){
	vars1[i].onclick=function(){
		for(var i=0; i<vars1.length; i++){
			if(vars1[i]==this){
				var start=-213;
				var end=-4;
				var step=0;
				var stepmax=7;
				var everystep=(end-start)/stepmax;
				clearInterval(timer1);
				clearInterval(timer2);
				clearInterval(timer3);
				clearInterval(timer4);
				timer3=setTimeout(function(){
					timer4=setInterval(function(){
						step++;
						if(step==7){
							step=0;
							clearInterval(timer1);
						}
						start+=everystep;
						xmdycd.style.marginTop=start+'px';
					},30)
				},500)
			}
		}
	}
}


function inner(){
	for(var i=0; i<xmdycd_top_spans.length; i++){
		xmdycd_top_spans[i].onmouseover=function(){
			for(var i=0; i<xmdycd_top_spans.length; i++){
				if(xmdycd_top_spans[i]==this){
					xmdycd_bottom.scrollTop=xmdycd_bottom_h1s[1].offsetHeight*i;
					xmdycd_top_spans[i].style.color='#A4121D';
					xmdycd_top_spans[i].style.borderBottom='1px solid #fff';
					xmdycd_top_spans[i].style.borderTop='2px solid #C81623';
				}
			}
		}
		xmdycd_top_spans[i].onmouseout=function(){
			for(var i=0; i<xmdycd_top_spans.length; i++){
				xmdycd_top_spans[i].style.color='#666';
				xmdycd_top_spans[i].style.borderBottom='1px solid #e8e8e7';
				xmdycd_top_spans[i].style.borderTop='';
			}
		}
		xmdycd_bottom_h1s[i].onmouseover=function(){
			for(var i=0; i<xmdycd_top_spans.length; i++){
				if(xmdycd_bottom_h1s[i]==this){
					xmdycd_top_spans[i].style.borderBottom='1px solid #fff';
					xmdycd_top_spans[i].style.borderTop='2px solid #C81623';
				}
			}
		}
		xmdycd_bottom_h1s[i].onmouseout=function(){
			for(var i=0; i<xmdycd_top_spans.length; i++){
				xmdycd_top_spans[i].style.borderBottom='1px solid #e8e8e7';
				xmdycd_top_spans[i].style.borderTop='';
			}
		}
	}
}
inner();



var focus_tmd=document.getElementById('focus_tmd');
var focus_tp=document.getElementById('focus_tp');
var lis1=focus_tp.getElementsByTagName('li');
var focus_sz=document.getElementById('focus_sz');
var lis2=focus_sz.getElementsByTagName('li');
var zdj=focus_tmd.getElementsByTagName('p')[0];
var ydj=focus_tmd.getElementsByTagName('p')[1];
var timer1=null,timer2=null,num=0;
function move(num){
	clearInterval(timer1);
	for(var i=0; i<lis1.length; i++){
		lis1[i].style.opacity=0;
		lis2[i].style.backgroundColor='#3e3e3e';
	}
	lis2[num].style.backgroundColor='#B61B1F';
	var ind=0;
	timer1=setInterval(function (){
		ind+=0.1;
		if (ind>=1){
			ind=1;
			clearInterval(timer1);
		}
		lis1[num].style.opacity=ind;
	},50);
}
function automove() {
	num++;
	if (num>=lis1.length){
		num=0;
		move(num);
	};
	move(num);
};
timer2=setInterval(automove,3000);
for (var i=0; i<lis1.length; i++){
	lis2[i].index=i;
	lis2[i].onmouseover=function (){
		clearInterval(timer2);
		num=this.index;
		move(num);
	}
	lis2[i].onmouseout=function (){
		timer2=setInterval(automove,3000);
	}
}
zdj.onclick=function () {
	clearInterval(timer2);
	num--;
	if (num<0) {
		num=lis1.length-1;
	};
	move(num);
	timer2=setInterval(automove,3000);
}
ydj.onclick=function () {
	clearInterval(timer2);
	num++;
	if (num>=lis1.length){
		num=0;
	};
	move(num);
	timer2=setInterval(automove,3000);
}

var focus=document.getElementById('focus');
var focus_left01=focus.getElementsByClassName('focus_left01');
var focus_wrap=focus.getElementsByClassName('focus_wrap');
var focus_left01right=focus.getElementsByClassName('focus_left01right');
var em01=focus.getElementsByClassName('em01');
var span01=focus.getElementsByClassName('span01');
var span02=focus.getElementsByClassName('span02');
var body=document.getElementsByTagName('body')[0];

for(var i=0; i<em01.length; i++){
	focus_left01[i].onmouseover=function(){
		var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
		for(var i=0; i<em01.length; i++){
			if(focus_left01[i]==this){
				if (focus.offsetTop<scrollTop) {
					this.parentNode.style.position="";
					focus_left01right[i].style.position="fixed";
					focus_left01right[i].style.left="281px";
					focus_left01right[i].style.top="0";
				} else{
					this.parentNode.style.position="relative";
				};
				focus_left01right[i].style.display='block';
				focus_left01[i].style.backgroundColor='#F7F7F7';
				focus_left01[i].style.backgroundColor='#F7F7F7';
				focus_left01[i].style.borderLeft='1px solid #C81623';
				span02[i].style.backgroundColor='#F7F7F7';
				em01[i].style.color='#B61D1D';
				span01[i].style.display='none';
			}else{
				span02[i].style.backgroundColor='#c81623';
				focus_left01right[i].style.display='none';

				focus_left01right[i].style.position="absolute";
				focus_left01right[i].style.left="211px";
				focus_left01right[i].style.top="0px";
				
				focus_left01[i].style.backgroundColor='#C81623';
				focus_left01[i].style.borderLeft='';
				em01[i].style.color='#fff';
				span01[i].style.display='block';
			}
		}
	}
	focus_left01[i].onmouseout=function(){
		for(var i=0; i<em01.length; i++){
			if(focus_left01[i]==this){
				span02[i].style.backgroundColor='#c81623';
				focus_left01right[i].style.display='none';
				focus_left01[i].style.backgroundColor='#C81623';
				focus_left01[i].style.borderLeft='';
				em01[i].style.color='#fff';
				span01[i].style.display='block';
			}
		}
	}
}

/*第二部分结束*/