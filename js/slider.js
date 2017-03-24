$ (document).ready(function(){
	// show the first img in all slideshows by default 
	var slideshows = $('.slideshow-img');
	for (var i = 0; i < slideshows.length; i++){
		var foo = slideshows.eq(i).children('img');
		foo.eq(0).show();
	}

	// var currentSlideShow = {
	// 	slideIndex: '',
	// 	slideCount: 0;
	// };
	
	// create a var to keep track of the 
	// index of the img we want to work with
	var currentSlideIndex = 0;
	// create a var to store the number of images in our slideshow
	var slideCount = $('.slideshow-img img').length;

/*	doSlides = function (direction){
		// hide the currentSlide
		$('.slideshow-img img').eq(currentSlideIndex).hide();
		// increase currentSlideIndex by 1
		// only IF you're not on your last slide 
		// use slideCount to account for additional images 
		if (direction === 'next'){
			if (currentSlideIndex < slideCount - 1){
				currentSlideIndex = currentSlideIndex + 1;
			}
			else {
					currentSlideIndex = 0; 
			}
		} else {
			if(currentSlideIndex === 0){
				console.log('at zero');
				currentSlideIndex = slideCount -1;
			} else {
				currentSlideIndex = currentSlideIndex -1;
			}

		};
		// show the currentSlideIndex
		$('.slideshow-img img').eq(currentSlideIndex).show();
		console.log('currentSlideIndex set to: ' + currentSlideIndex);
	};*/

	doAnySlides = function (direction, currentSlideShow){
		var currentSlideShow = currentSlideShow;
		// hide the currentSlide
		$('.slideshow-img#' + currentSlideShow + ' img').eq(currentSlideIndex).hide();
		// increase currentSlideIndex by 1
		// only IF you're not on your last slide 
		// use slideCount to account for additional images 
		if (direction === 'next'){
			if (currentSlideIndex < slideCount - 1){
				currentSlideIndex = currentSlideIndex + 1;
			}
			else {
					currentSlideIndex = 0; 
			}
		} else {
			if(currentSlideIndex === 0){
				console.log('at zero');
				currentSlideIndex = slideCount -1;
			} else {
				currentSlideIndex = currentSlideIndex -1;
			}

		};
		// show the currentSlideIndex
		$('.slideshow-img#' + currentSlideShow + ' img').eq(currentSlideIndex).show();
		console.log('currentSlideShow: ' + currentSlideShow)
		console.log('currentSlideIndex set to: ' + currentSlideIndex);
	};


	$('.js-next').on('click', function(event){
		event.preventDefault();
		var currentSlideShow = $(this).data('currentslideshow')
		console.log(currentSlideShow)
			doAnySlides('next', currentSlideShow);
	});

	$('.js-previous').on('click', function(event){
		event.preventDefault();
		var currentSlideShow = $(this).data('currentslideshow')
		console.log(currentSlideShow)
				doAnySlides('prev', currentSlideShow);
	});

	//$('.js-autoplay').on('click', function(){
	//	autoPlay = setInterval(function(){
	//		// console.log ('we win');
	//		doSlides('next');
	//	}, 1000);
	//});

	//$('.js-pause').on('click', function(){
	//	clearInterval(autoPlay);
	//});

}); // end document ready
	
