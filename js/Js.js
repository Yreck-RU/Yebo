
const parent_original = document.querySelector('.header-flex');
const parent = document.querySelector('.heder__menu');
const item = document.querySelector('.header-left');

const parent_origina2 = document.querySelector('.header-flex');
const parent2 = document.querySelector('.heder__menu');
const item2 = document.querySelector('.header-bootom');
const viewport_width_n1 =Math.max(document.documentElement.clientWidth);
if (viewport_width_n1 <= 540) {
		if (!item.classList.contains('done')) {
			parent.insertBefore(item, parent.children[2]);
			item.classList.add("done");
		}
	} else {
		if (item.classList.contains('done')) {
			parent_original.insertBefore(item , parent_original.children[0]);
			item.classList.remove('done');
		}
	}
	if (viewport_width_n1 <= 540) {
		if (!item2.classList.contains('done')) {
			parent2.insertBefore(item2, parent2.children[2]);
			item2.classList.add("done");
		}
	} else {
		if (item2.classList.contains('done')) {
			parent_origina2.insertBefore(item2 , parent_origina2.children[2]);
			item2.classList.remove('done');
		}
	}
//Слушаем зменения размера браузера
window.addEventListener('resize' , function (event){

	const viewport_width =Math.max(document.documentElement.clientWidth);

	if (viewport_width <= 540) {
		if (!item.classList.contains('done')) {
			parent.insertBefore(item, parent.children[2]);
			item.classList.add("done");
		}
	} else {
		if (item.classList.contains('done')) {
			parent_original.insertBefore(item , parent_original.children[0]);
			item.classList.remove('done');
		}
	}

//=========================================================

	if (viewport_width <= 540) {
		if (!item2.classList.contains('done')) {
			parent2.insertBefore(item2, parent2.children[2]);
			item2.classList.add("done");
		}
	} else {
		if (item2.classList.contains('done')) {
			parent_origina2.insertBefore(item2 , parent_origina2.children[2]);
			item2.classList.remove('done');
		}
	}
//============================================================
});
//КОД для бургера=====================================================================================
$(document).ready(function() {
	$('.heder__burger').click(function(event) {
		$('.heder__burger,.heder__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
//Код для адаптива изображений
function ibg(){
		let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}
ibg();




$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:true,
		slidesToShow:1,
		autoplay: false,
		speed:1000,
		autoplaySpeed:800,
	});
});