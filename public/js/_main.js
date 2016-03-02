var consoleMessgae = "Well hello there! Thanks for taking a look under the hood! If you haven't noticed yet this site is running on node and express. You might be thinking 'Thats a little over kill for a portfolio site, this guy is not very smart with choosing tools.' And yes it probably is overkill for a portfolio site but it was a fun challenge to learn a little express and node and to test out the keystone.js cms. So I hope you enjoy my site and if you have any feedback please let me know by clicking the contact tab.";


function isScrolledIntoView(elem){
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top + 400;
    var elemBottom = elemTop + $elem.height() - 600;

    if((elemBottom <= docViewBottom) && (elemTop >= docViewTop)){
    	$elem.addClass('bring-in');
    } else {
    	$elem.removeClass('bring-in');
    }
}

$(window).scroll(function(){
	$('.project').each(function(){
		isScrolledIntoView($(this));
	});
});


$(document).ready(function() {
	console.log(consoleMessgae);

	$('.project').each(function(){
		isScrolledIntoView($(this));
	});
});
