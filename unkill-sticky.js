/**
 * This is a Chrome Bookmarklet.
 * Copy the code below and add it into the URL field of the Bookmark in Chrome.
 */
javascript: ( () => {
	const elements = document.querySelectorAll( '[data-kill-unkill-sticky-is-hidden="true"]' );
	elements.forEach( element => {
		element.style.visibility = 'visible';
    delete element.dataset.killUnkillStickyIsHidden;
	} );
} )();
