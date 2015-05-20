(function() {
	var backendUrl = "http://localhost:3000";

	$("input[name=rss-load-button]").on("click", function(){
		var action = "/loadfeed"
		var rss_feed = $("input[name=rss-feed]").val();

		$.get( backendUrl + action + "?rssfeed=" + encodeURIComponent(rss_feed) )
		.done(function(res) {
			
			$("#news-container").empty();

			for(var i = 0; res.length > i; i++ ) {
				
				var elementHtml = "<div class='news-item'>" +
									"<h2>" + res[i].title + "</h2>" +	
									"<p>" + res[i].content + "</p>" +
									"<a href='" + res[i].link + "' target='_new'>Read more<a/>"
									"</div>";
				
				var newsElement = $(elementHtml);

				$("#news-container").append(newsElement);
			}
		});
	});
})();