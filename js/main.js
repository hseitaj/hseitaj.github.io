/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

// document.getElementById('status').innerHTML = "Sending...";
// formData = {
//   'name': $('input[name=name]').val(),
//   'email': $('input[name=email]').val(),
//   'subject': $('input[name=subject]').val(),
//   'message': $('textarea[name=message]').val()
// };


// $.ajax({
//   url: "mail.php",
//   type: "POST",
//   data: formData,
//   success: function (data, textStatus, jqXHR) {

//     $('#status').text(data.message);
//     if (data.code) //If mail was sent successfully, reset the form.
//       $('#contact-form').closest('form').find("input[type=text], textarea").val("");
//   },
//   error: function (jqXHR, textStatus, errorThrown) {
//     $('#status').text(jqXHR);
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
	const sidebarToggle = document.getElementById("sidebarToggle");
	const wrapper = document.getElementById("wrapper");
	const sideNav = document.getElementById("sideNav");
	const mainContent = document.getElementById("main-content"); // Ensure this id matches the id of your main content element

	if (sidebarToggle && wrapper && sideNav && mainContent) {
	  sidebarToggle.addEventListener("click", () => {
		const isCollapsed = wrapper.classList.toggle("collapsed");
		sidebarToggle.classList.toggle("is-active");
		sideNav.classList.toggle("collapsed");
		if (isCollapsed) {
		  mainContent.style.transform = "translateX(-8.5rem)"; // Default transform when sidebar is collapsed
		} else {
		  mainContent.style.transform = "translateX(0)"; // Adjusted transform when sidebar is expanded
		}
	  });
	}
  });

document.querySelectorAll(".carousel-item").forEach((item) => {
	item.addEventListener("mouseover", function () {
	const projectId = this.dataset.projectId;
	const projectTitle = document.querySelector(
		`#${projectId} strong`
	).textContent;
	this.querySelector(".carousel-caption h5").textContent =
		projectTitle;
	});
});

document.addEventListener("DOMContentLoaded", (event) => {
	const form = document.querySelector("#feedback-form");

	form.addEventListener("submit", function (e) {
	e.preventDefault();
	const formData = new FormData(form);

	fetch("/", {
		method: "POST",
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body: new URLSearchParams(formData).toString(),
	})
		.then(() => {
		const formMessage = document.getElementById("form-message");
		formMessage.innerHTML = "Thank you for your submission!";
		formMessage.className = "alert alert-success";
		})
		.catch(() => {
		const formMessage = document.getElementById("form-message");
		formMessage.innerHTML = "An error occurred";
		formMessage.className = "alert alert-danger";
		});
	});

});

document.querySelectorAll('.fancy-btn').forEach((btn) => {
	btn.addEventListener('mousemove', (e) => {
	  const rect = btn.getBoundingClientRect();
	  const x = e.clientX - rect.left - rect.width / 2;
	  const y = e.clientY - rect.top - rect.height / 2;
	  btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
	});
	btn.addEventListener('mouseleave', () => {
	  btn.style.transform = 'translate(0, 0)';
	});
  });
  

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

	// Collapse responsive navbar when toggler is visible
    // const hamburger = document.body.querySelector('.hamburger');
    // const responsiveNavItems = [].slice.call(
    //     document.querySelectorAll('#navbarResponsive .nav-link')
    // );
    // responsiveNavItems.map(function (responsiveNavItem) {
    //     responsiveNavItem.addEventListener('click', () => {
    //         if (window.getComputedStyle(hamburger).display !== 'none') {
    //             hamburger.click();
    //         }
    //     });
    // });

    // Toggle hamburger animation
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active');
    });

	// New code for handling nav link clicks
    // const navLinks = document.querySelectorAll('.nav-link');
    // navLinks.forEach(link => {
    //     link.addEventListener('click', () => {
    //         if (window.innerWidth < 992) {
    //             // This assumes that your hamburger button has the class 'hamburger'
    //             const hamburger = document.querySelector('.hamburger');
    //             if (hamburger) {
    //                 hamburger.click();
    //             }
    //         }
    //     });
    // });
});

// Listen for window resize events
window.addEventListener('resize', function() {
	const sidebarToggle = document.getElementById('sidebarToggle');
	const wrapper = document.getElementById('wrapper');
	const sideNav = document.getElementById('sideNav');
	const mainContent = document.getElementById('main-content'); // Ensure this id matches the id of your main content element
	const width = window.innerWidth;
  
	if (width >= 992) {
	  // Window width is greater than or equal to 992px
	  if (wrapper.classList.contains('collapsed')) {
		// If sidebar is collapsed, reset styles to default
		wrapper.classList.remove('collapsed');
		sidebarToggle.classList.remove('is-active');
		sideNav.classList.remove('collapsed');
		mainContent.style.transform = 'none';
		// mainContent.style.paddingLeft = '17rem';
	  }
	  sidebarToggle.style.display = 'block'; // Show the custom sidebar toggle
	} else {
	  // Window width is less than 992px
	  sidebarToggle.style.display = 'none'; // Hide the custom sidebar toggle
	  mainContent.style.paddingLeft = '0'; // Reset padding-left
	}
  });
  

jQuery(document).ready(function($){
	//set animation timing
	var animationDelay = 2500,
		//loading bar effect
		barAnimationDelay = 3800,
		barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
		//letters effect
		lettersDelay = 50,
		//type effect
		typeLettersDelay = 150,
		selectionDuration = 500,
		typeAnimationDelay = selectionDuration + 800,
		//clip effect 
		revealDuration = 600,
		revealAnimationDelay = 1500;
	
	initHeadline();
	

	function initHeadline() {
		//insert <i> element for each letter of a changing word
		singleLetters($('.cd-headline.letters').find('b'));
		//initialise headline animation
		animateHeadline($('.cd-headline'));
	}

	function singleLetters($words) {
		$words.each(function(){
			var word = $(this),
				letters = word.text().split(''),
				selected = word.hasClass('is-visible');
			for (i in letters) {
				if(word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
				letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
			}
		    var newLetters = letters.join('');
		    word.html(newLetters).css('opacity', 1);
		});
	}

	function animateHeadline($headlines) {
		var duration = animationDelay;
		$headlines.each(function(){
			var headline = $(this);
			
			if(headline.hasClass('loading-bar')) {
				duration = barAnimationDelay;
				setTimeout(function(){ headline.find('.cd-words-wrapper').addClass('is-loading') }, barWaiting);
			} else if (headline.hasClass('clip')){
				var spanWrapper = headline.find('.cd-words-wrapper'),
					newWidth = spanWrapper.width() + 10
				spanWrapper.css('width', newWidth);
			} else if (!headline.hasClass('type') ) {
				//assign to .cd-words-wrapper the width of its longest word
				var words = headline.find('.cd-words-wrapper b'),
					width = 0;
				words.each(function(){
					var wordWidth = $(this).width();
				    if (wordWidth > width) width = wordWidth;
				});
				headline.find('.cd-words-wrapper').css('width', width);
			};

			//trigger animation
			setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
		});
	}

	function hideWord($word) {
		var nextWord = takeNext($word);
		
		if($word.parents('.cd-headline').hasClass('type')) {
			var parentSpan = $word.parent('.cd-words-wrapper');
			parentSpan.addClass('selected').removeClass('waiting');	
			setTimeout(function(){ 
				parentSpan.removeClass('selected'); 
				$word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
			}, selectionDuration);
			setTimeout(function(){ showWord(nextWord, typeLettersDelay) }, typeAnimationDelay);
		
		} else if($word.parents('.cd-headline').hasClass('letters')) {
			var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
			hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
			showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

		}  else if($word.parents('.cd-headline').hasClass('clip')) {
			$word.parents('.cd-words-wrapper').animate({ width : '2px' }, revealDuration, function(){
				switchWord($word, nextWord);
				showWord(nextWord);
			});

		} else if ($word.parents('.cd-headline').hasClass('loading-bar')){
			$word.parents('.cd-words-wrapper').removeClass('is-loading');
			switchWord($word, nextWord);
			setTimeout(function(){ hideWord(nextWord) }, barAnimationDelay);
			setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('is-loading') }, barWaiting);

		} else {
			switchWord($word, nextWord);
			setTimeout(function(){ hideWord(nextWord) }, animationDelay);
		}
	}

	function showWord($word, $duration) {
		if($word.parents('.cd-headline').hasClass('type')) {
			showLetter($word.find('i').eq(0), $word, false, $duration);
			$word.addClass('is-visible').removeClass('is-hidden');

		}  else if($word.parents('.cd-headline').hasClass('clip')) {
			$word.parents('.cd-words-wrapper').animate({ 'width' : $word.width() + 10 }, revealDuration, function(){ 
				setTimeout(function(){ hideWord($word) }, revealAnimationDelay); 
			});
		}
	}

	function hideLetter($letter, $word, $bool, $duration) {
		$letter.removeClass('in').addClass('out');
		
		if(!$letter.is(':last-child')) {
		 	setTimeout(function(){ hideLetter($letter.next(), $word, $bool, $duration); }, $duration);  
		} else if($bool) { 
		 	setTimeout(function(){ hideWord(takeNext($word)) }, animationDelay);
		}

		if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
			var nextWord = takeNext($word);
			switchWord($word, nextWord);
		} 
	}

	function showLetter($letter, $word, $bool, $duration) {
		$letter.addClass('in').removeClass('out');
		
		if(!$letter.is(':last-child')) { 
			setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration); 
		} else { 
			if($word.parents('.cd-headline').hasClass('type')) { setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('waiting'); }, 200);}
			if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay) }
		}
	}

	function takeNext($word) {
		return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
	}

	function takePrev($word) {
		return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
	}

	function switchWord($oldWord, $newWord) {
		$oldWord.removeClass('is-visible').addClass('is-hidden');
		$newWord.removeClass('is-hidden').addClass('is-visible');
	}
});

.social-buttons {
	display: flex;
	gap: 1rem; /* space between the buttons */
	margin-top: 2rem;
  }
  
  /* The fancy button base */
  .fancy-btn {
	position: relative;
	display: inline-flex;
	align-items: center;
	gap: 8px; /* space between icon and text */
	padding: 0.75rem 1.25rem;
	font-size: 1rem;
	font-weight: 600;
	text-decoration: none;
	color: #fff;
	background: #333; /* base background color */
	border-radius: 4px;
	overflow: hidden;
	transition: color 0.3s ease;
  }
  
  /* Icon sizing inside the button */
  .fancy-btn i {
	font-size: 1.2rem;
  }
  
  /* Diagonal color sweep effect */
  .fancy-btn::before {
	content: "";
	position: absolute;
	top: 0;
	left: -50%;
	width: 0;
	height: 100%;
	background: #3498db; /* highlight color (blue) */
	transform: skewX(-15deg);
	transition: all 0.5s ease;
	z-index: -1; /* behind the text */
  }
  
  /* Hover styles */
  .fancy-btn:hover {
	color: #fff; /* keep text white */
  }
  
  .fancy-btn:hover::before {
	width: 200%;
	left: 0;
  }
  