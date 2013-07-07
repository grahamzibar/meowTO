/* TODO: send message to background.js here */

// #recentComments > .excerpt
// #comments > .entry-body

(function MeowTO(d) {
	var VOCABULARY = [
		'meow',
		'meow-meow',
		'meeow',
		'meowmeow',
		'meww',
		'm\'ow',
		'meow'
	];
	var VOCABULARY_LENGTH = VOCABULARY.length;
	
	var _recentComments = d.getElementById('recentcomments');
	var _comments = d.getElementById('comments');
	
	var getRandomCatNoise = function() {
		var random = Math.random();
		if (random === 1)
			return VOCABULARY[VOCABULARY_LENGTH - 1];
		return VOCABULARY[Math.floor(random * (VOCABULARY_LENGTH))];
	};
	
	var getMeows = function(text) {
		var words = text.split(' ');
		text = '';
		var size = words.length;
		for (var i = 0; i < size; i++) {
			var noise = getRandomCatNoise();
			text += noise;
			text += ' ';
		}
		return text;
	};
	
	var convertComments = function(list) {
		var size = list.length;
		for (var i = 0; i < size; i++) {
			var comment = list[i];
			comment.innerHTML = getMeows(comment.innerHTML);
		}
	};
	
	console.log('Meow Check:', _recentComments, _comments);
	if (_recentComments)
		convertComments(_recentComments.getElementsByClassName('excerpt'));
	
	if (_comments)
		convertComments(_comments.getElementsByClassName('entry-body'));
	
})(window.document);