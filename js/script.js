$(window).bind('load',function(){
	
	$(".menuAnim").menuDropAnimation();
	
	
	$("#menuViewport,#work-area").height($(window).height()-110);
	//$("#menuViewport,#work-area,.row-scroller").niceScroll();
	//$("#wells").niceScroll();
	$("#menuViewport,#work-area,#graph-bot,#wells").niceScroll();
	
	$(window).resize(function(e) {
		$("#menuViewport,#work-area").height($(window).height()-110);
		$("#menuViewport,#work-area,#graph-bot,#wells").niceScroll();
	});
	
	
	
	$(document).on('click','.leftpanel nav ul > li a',function(){
		$('.leftpanel nav ul > li a').removeClass('selected');
		$(this).addClass('selected');
		if($("div:nth-child(1) span:nth-child(2)",this).html() == null){var c = ""}else{var c = " - "+$("div:nth-child(1) span:nth-child(2)",this).html();}
		$(".dashboard-heading").html($("div:nth-child(1) span:nth-child(1)",this).html()+c)
	});
	
	
	
	$(document).on('click','.row-block .rows',function(e) {
		$(".collapsible").removeClass('open');
		$(this).next().addClass('open');	
	});
	
	$(document).on('click','.collapsible .col4 span',function(){
		$(".collapsible").removeClass('open');
	}); 
	
	
	$(document).on('click','.body .bot-row span.delete',function(){
		$(this).parent().parent().parent().parent().animate({height:0, opacity:0},function(){
			$(this).remove();
		});	
	});
	
	
	$("#food").animate({width:"30%"},2000);
	$("#bills").animate({width:"50%"},2000);
	$("#transport").animate({width:"80%"},2000);
	$("#other").animate({width:"90%"},2000);
	
	
	
	
	$(".time-drop input").click(function(e) {
		$(".time-drop.t").css({opacity:1, height:296+"px", marginTop:0+"px"});
	});
	
	var v = 0;
	$(".time-dropdown").click(function(e) {
		v = 1;
		$(".time-drop.t").css({opacity:1, height:296+"px", marginTop:0+"px"});
	});
	
	
	$("html").click(function(event) {
		//alert("hello");
		if(v){
			if(!$(event.target).is(".time-dropdown") && !$(event.target).is(".ui-datepicker-prev") && !$(event.target).is(".ui-datepicker-next") && !$(event.target).is(".ui-icon-circle-triangle-w") && !$(event.target).is(".ui-icon-circle-triangle-e")){
				$(".time-drop.t").css({opacity:0, height:0+"px", marginTop:-30+"px"});
				
			}
			else
			{
				$(".time-drop.t").css({opacity:1, height:296+"px", marginTop:0+"px"});
				
			}
			v = 0;
		}
		
	});
	
	
	
	
	
	
	$("html").click(function(event) {
		//alert("hello");
		if(!$(event.target).is(".time-drop input")){
			
		}else{
			$(".time-drop.t").css({opacity:1, height:296+"px", marginTop:0+"px"});
		}
	});
	
	
	$("html").click(function(event) {
		if(!$(event.target).is(".ui-datepicker") && !$(event.target).is(".time-drop input") && !$(event.target).is(".ui-datepicker-prev") && !$(event.target).is(".ui-datepicker-next") && !$(event.target).is(".ui-icon-circle-triangle-w") && !$(event.target).is(".ui-icon-circle-triangle-e")){
			$('.datepicker').datepicker("hide");
		}
	});
	
	
	
	$("html").click(function(event) {
		if(!$(event.target).is(".date")){
			$('.date').datepicker("hide");
		}
	});
	
	
	
	
	
	$(".time-dropdown .from").click(function(e) {
		//$(".datepicker",this).trigger('click');
		$( ".datepicker" ).datepicker();
	});
	
	
	
	
	
	$(".datepicker").datepicker({
		dateFormat: 'mm/dd/y',
		showAnim: "fadeIn",
		beforeShow: function (input, inst) {
			var rect = input.getBoundingClientRect();
			setTimeout(function () {
				$("#ui-datepicker-div").css({top: $(".datepicker").offset().top + 'px', left: ($(".datepicker").offset().left - 275) + 'px'});
			}, 10);
    	}
	});
	
	
	
	
	
	
	
	
	$(".date").datepicker({
		//dateFormat: 'mm/dd',
		dateFormat:'M d',
		showAnim: "fadeIn",
		beforeShow: function (input, inst) {
			var rect = input.getBoundingClientRect();
			setTimeout(function () {
				$("#ui-datepicker-div").css({left: ($(".date").offset().left - 95) + 'px'});
			}, 10);
    	}
	});
	
	
	
	
	
	
	
	$("#myonoffswitch1").toggleSwitch();
	$("#myonoffswitch2").toggleSwitch();
	$("#myonoffswitch3").toggleSwitch();
	$("#myonoffswitch4").toggleSwitch();
	$("#myonoffswitch5").toggleSwitch();
	
	//$("#selectbox1").selectbox();
	//$("#selectbox2").selectbox();
	$("#selectbox1, #selectbox2, #selectbox3").selectbox();
	
	
	
	
	
	
	/*--------------Month-scroller--------------------------*/
	var move = 0;
	$(document).on('click',".lightbox-popup #left1",function(e) {
		move += 50;
		if(move>0){move = 0;}
		$(".lightbox-popup .months .inside .month-scroller").stop().animate({left:move},"slow");
	});
	
	$(document).on('click',".lightbox-popup #right1",function(e) {
		move -= 50;
		if(move<-($(".lightbox-popup .months .inside .month-scroller").width()-$(".lightbox-popup .months .inside").width()))
		{
			move = -($(".lightbox-popup .months .inside .month-scroller").width()-$(".lightbox-popup .months .inside").width());
		}
		$(".lightbox-popup .months .inside .month-scroller").stop().animate({left:move},"slow");
	});
	
	
	/*--------------Month-scroller--------------------------*/
	
	
	
	/*---------menu select-------------*/
	$(document).on('click',".lightbox-popup .menu",function(e) {
		var id = $(this).attr("data-id");
		$("#popup-heading").html($(this).html());
		$(".lightbox-popup .main-bdy").removeClass("show");
		$(".lightbox-popup #bdy"+id).addClass("show");
		$(".lightbox-popup .menu").removeClass("selected");
		$(this).addClass("selected");
	});
	
	
	
	
	
	
	$(document).on('click','.lightbox-popup .ln',function(){
		$(".lightbox-popup .collaps").removeClass('open');
		$(this).next().addClass('open');
		$(".lightbox-popup .ln span.plus.animate").removeClass('animate');
		$("span.plus",this).addClass('animate');
		
		
	});
	
	
	
	
	$(document).on('click','.lightbox-popup .lightbox-popup-rightpanel .rightpanel-header .close',function(){
		$(".overlay").fadeOut();
		$(".lightbox-popup").removeClass('show');
	});
	
	
	$(document).on('click','.profile-dropdown .notific.a, .setting-icon',function(){
		$(".overlay").fadeIn();
		$(".lightbox-popup").addClass('show');
	});
	
	
	$(document).on('change','.datepicker',function(){
		$("#since").html("From:"+$("#date-from").val() + " - To:" +  $("#date-to").val());
	});
	
	
	$(document).on('change','#date-to',function(){
		$(".time-drop.t").css({opacity:0, height:0+"px", marginTop:-30+"px"});
	});
	
	
	
	$(document).on('click','.time-drop.t div.mn',function(){
		$('#since').html($(this).html());
	});
	
	
	$(document).on('click','.body .bottom-section.income .month .mnln',function(){
		$('.body .bottom-section.income .month .mnln').removeClass("selected");
		$(this).addClass('selected');
	});
	
	
	
	
	$(document).on('click','.body .time-drop.tran .op',function(){
		$("#allcat").html($(".d",this).html());
	});
	
	
	
	$(document).on('click','.body .bot-row .col4 a',function(){
		$(".collapsible").removeClass('open');
	});
	
	
	
	$(document).on('click','.save-btn',function(){
		$(".collaps").removeClass('open');
		$(this).parent().parent().prev().find(".plus").removeClass("animate");
	});
	
	
	
	
	
	
	
	
	
	
	$(document).on('click','.edt',function(){
		$(".lightbox-popup .section4 .frm input:disabled").removeAttr('disabled');
		$(this).fadeOut();
		$(".edt1").fadeIn();
	});
	
	
	$(document).on('click','.edt1',function(){
		$(".confirm-box,.overlay2").fadeIn();
	});
	
	
	
	$(document).on('click','.confirm-box .d3',function(){
		$(".confirm-box,.overlay2").fadeOut();
		$(".edt1").fadeOut();
		$(".edt").fadeIn();
	});
	
	
	
	
	
	
	var income = ['5000','5000','8686','6536','7445','4534','6565','3223', '8797','2341', '1231', '2312'];
	var expense = ['4534','5675','4353','7867','3242','6575','5675','3453', '2132','1231', '5345', '2312'];
	var totalNet = 8000;
	
	for(var i = 0; i<=12-1; i++)
	{
		var net = income[i] - expense[i];
		
		if(net<0){
			var netGet = expense[i] - income[i];
			if(netGet==0){
				var percentage = 100;
			}else{
				var percentage = (netGet/totalNet)*100;
			}
			$("#gr"+(i+1)+" .bl").stop().animate({width:percentage+"%"},2000);
		}else{
			var netGet = income[i] - expense[i];
			if(netGet==0){
				var percentage = 100;
			}else{
				var percentage = (netGet/totalNet)*100;
			}
			$("#gr"+(i+1)+" .br").stop().animate({width:percentage+"%"},2000);
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	var rw = 1;
	$(".show-more-btn").click(function(e) {
		rw++;
		var hold = '<div class="blocks" id="blocks'+rw+'"><div class="rows">\
								<div class="image"><img src="images/shape4.png" alt="image"></div>\
								<div class="text">\
									<h2>Eliana’s Cafe</h2>\
									<p>Thu <img src="images/dot.png" width="3" height="3" alt="dot"> Jan 28th</p>\
								</div>\
								<div class="misc">\
									<h3>$12.05</h3>\
									<p>Checking - 4228</p>\
								</div>\
							</div>\
							<div class="rows">\
								<div class="image"><img src="images/shape3.png" alt="image"></div>\
								<div class="text">\
									<h2>Comcast</h2>\
									<p>Thu <img src="images/dot.png" width="3" height="3" alt="dot"> Jan 28th</p>\
								</div>\
								<div class="misc">\
									<h3>$12.05</h3>\
									<p>Checking - 4228</p>\
								</div>\
							</div>\
							<div class="rows">\
								<div class="image"><img src="images/shape4.png" alt="image"></div>\
								<div class="text">\
									<h2>Uber</h2>\
									<p>Thu <img src="images/dot.png" width="3" height="3" alt="dot"> Jan 28th</p>\
								</div>\
								<div class="misc">\
									<h3>$12.05</h3>\
									<p>Checking - 4228</p>\
								</div>\
							</div>\
							<div class="rows">\
								<div class="image"><img src="images/dollar.png" alt="image"></div>\
								<div class="text">\
									<h2>PayPal</h2>\
									<p>Thu <img src="images/dot.png" width="3" height="3" alt="dot"> Jan 28th</p>\
								</div>\
								<div class="misc">\
									<h3 class="green">+$2250.05</h3>\
									<p>Checking - 4228</p>\
								</div>\
							</div>\
							<div class="rows">\
								<div class="image"><img src="images/shape5.png" alt="image"></div>\
								<div class="text">\
									<h2>Fed Ex</h2>\
									<p>Thu <img src="images/dot.png" width="3" height="3" alt="dot"> Jan 28th</p>\
								</div>\
								<div class="misc">\
									<h3>$12.05</h3>\
									<p>Checking - 4228</p>\
								</div>\
							</div>\
							<div class="rows">\
								<div class="image"><img src="images/shap1.png" alt="image"></div>\
								<div class="text">\
									<h2>Eliana’s Cafe</h2>\
									<p>Thu <img src="images/dot.png" width="3" height="3" alt="dot"> Jan 28th</p>\
								</div>\
								<div class="misc">\
									<h3>$12.05</h3>\
									<p>Checking - 4228</p>\
								</div>\
							</div>\
							<div class="rows">\
								<div class="image"><img src="images/shape3.png" alt="image"></div>\
								<div class="text">\
									<h2>Comcast</h2>\
									<p>Thu <img src="images/dot.png" width="3" height="3" alt="dot"> Jan 28th</p>\
								</div>\
								<div class="misc">\
									<h3>$12.05</h3>\
									<p>Checking - 4228</p>\
								</div>\
							</div>\
							<div class="rows">\
								<div class="image"><img src="images/shape5.png" alt="image"></div>\
								<div class="text">\
									<h2>IKEA</h2>\
									<p>Thu <img src="images/dot.png" width="3" height="3" alt="dot"> Jan 28th</p>\
								</div>\
								<div class="misc">\
									<h3>$12.05</h3>\
									<p>Checking - 4228</p>\
								</div>\
							</div>\
							<div class="rows">\
								<div class="image"><img src="images/dollar.png" alt="image"></div>\
								<div class="text">\
									<h2>PayPal</h2>\
									<p>Thu <img src="images/dot.png" width="3" height="3" alt="dot"> Jan 28th</p>\
								</div>\
								<div class="misc">\
									<h3 class="green">+$12.05</h3>\
									<p>Checking - 4228</p>\
								</div>\
							</div>\
							<div class="rows">\
								<div class="image"><img src="images/shap1.png" alt="image"></div>\
								<div class="text">\
									<h2>Eliana’s Cafe</h2>\
									<p>Thu <img src="images/dot.png" width="3" height="3" alt="dot"> Jan 28th</p>\
								</div>\
								<div class="misc">\
									<h3>$12.05</h3>\
									<p>Checking - 4228</p>\
								</div>\
							</div></div>';
		
		
		$("#transaction").append(hold);
		$("#blocks"+rw).css("opacity",0).height(0);
		$("#blocks"+rw).animate({opacity:1, height:710},'medium');
	});
	

	
});


jQuery.fn.menuDropAnimation = function(){
	var object = $(this);
	object.addClass("animate");
}