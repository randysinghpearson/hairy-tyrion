(function() {
	var backendUrl = "http://localhost:8080";

	$("input[name=rss-load-button]").on("click", function(){
		var action = "/loadfeed"
		var rss_feed = $("input[name=rss-feed]").val();

		$.get( backendUrl + action + "?rssfeed=" + encodeURIComponent(rss_feed) )
		.done(function(res) {
			console.log(res);
		});

	});

})();