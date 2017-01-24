$('document').ready(function(){
	$('#query-term').val("");
	$('#show-input button').on('click',function(){
		var topic = $('#query-term').val();
var wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="+topic+"&limit=15&callback=wikiCallback";
		$.ajax({
			url: wikiUrl,
			dataType: "jsonp",
			success: function(response){
				$('#wiki-article ul').html("");
				for(var i=0;i<response[1].length;i++){
					
					var title = response[1][i];
					var snippet = response[2][i];
					var article_link = response[3][i];
					$('#wiki-article ul').append(
						"<li class='wiki-list'><a href="+article_link+" target='_blank'>"+title+"</a><p>"+snippet+"</p>"
					);
				}
			}
	});
	});
});