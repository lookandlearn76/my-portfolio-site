var $about = $('#aboutSection');
var $thumbnail1 = $('#aboutSection .thumbnail');
var $titles = $('#peekSection .titles');
var $titles1 = $('#aboutSection .titles');
var $find = $('#findSection');
var $find2 = $('#findSection .find2');
var $titles2 = $('#findSection .titles');
$about.waypoint(function(){
$about.addClass('animated fadeIn');
$titles.addClass('animated fadeIn');
$about.css('opacity', 1);
$titles.css('opacity', 1);

}, {offset: '50%'});

$thumbnail1.waypoint(function(){
$thumbnail1.addClass('animated fadeIn');
$titles1.addClass('animated fadeIn');
$thumbnail1.css('opacity', 1);
$titles1.css('opacity', 1);

}, {offset: '50%'});

$find.waypoint(function(){
$find2.addClass('animated fadeIn');
$titles2.addClass('animated fadeIn');
$find2.css('opacity', 1);
$titles2.css('opacity', 1);


}, {offset: '50%'});


$(document).ready(function(){
	setListen();
});

function setListen(){
	$('li a.first').click(function(one){
		one.preventDefault();
		var sectionID = one.currentTarget.id + "Section";
		$('html body').animate({
			scrollTop: $('#' + sectionID).offset().top
		}, 1000)
	})
};

$(document).ready(function(){
	burgerOpen();
});

function burgerOpen(){
	$("a.menu-icon-anchor").on("click", function(one){
		one.preventDefault();
		$("#navbar").toggleClass("open")
	});
};

$("#navbar a").click(function () {
	 if ($("#btnCollapse").css('display')!='none')
	 $("#btnCollapse").click();
});

var modal = document.getElementById("modal");

var modal2 = document.getElementById("open-modal");

var btn = document.getElementsByClassName("open-modal")[0];

var span = document.getElementsByClassName('close')[0];

$(document).ready(function() {
	modal.style.display="none";
})

btn.onclick = function() {
	modal.style.display="block";
}

modal2.onclick=function(){
	modal.style.display="block";
}

span.onclick = function(){
	modal.style.display="none";
}

window.onclick= function(event){
	if(event.target== modal){
		modal.style.display="none";
	}
}
