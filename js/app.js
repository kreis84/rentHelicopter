$(document).ready(
function(){
	APP.init();
});

var APP = (function()
{
	let elementToLoadTo = $('main');
	function getSubpages(url)
	{
		$.ajax({url: url,
				dataType: 'html'})
			.done(function (result)
			{
				elementToLoadTo.html(result);
			})
			.fail(function(error)
			{
				elementToLoadTo.text(error.statusText);
			});

	}

	return{
		init: function()
		{
			getSubpages('subpages/main.html');
			$('nav li').on('click', function(){ 
						getSubpages($(this).attr('data-url'));
					});
		}
	}

})();