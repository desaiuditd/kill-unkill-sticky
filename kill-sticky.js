/**
 * This is a Chrome Bookmarklet.
 * Copy the code below and add it into the URL field of the Bookmark in Chrome.
 *
 * Dashes are converted to camelCase. dataset.camelCase in JS becomes data-camel-case in DOM.
 * Ref: https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes#JavaScript_access
 */
javascript: ( () => {
	const elements = document.querySelectorAll( 'body *' );
	elements.forEach( element => {
		if ( getComputedStyle( element ).position !== 'fixed' ) {
			return;
		}
		element.style.visibility = 'hidden';
		element.dataset.killUnkillStickyIsHidden = 'true'
	} );
} )();
