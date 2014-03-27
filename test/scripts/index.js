(function() {
	'use strict';

	var module = angular.module('ngBloodhoundTest', ['bloodhound']);

	module.controller('MainCtrl', function($scope, Bloodhound) {
		var bh = new Bloodhound({
			name: 'people',
			local: [
				{
					firstName: 'Joe',
					lastName: 'Schmoe'
				},
				{
					firstName: 'Jim',
					lastName: 'Bob'
				},
				{
					firstName: 'Franken',
					lastName: 'Stein'
				}
			],
			datumTokenizer: function(datum) {
				return _.toArray(datum);
			},
			queryTokenizer: Bloodhound.tokenizers.whitespace
		});

		bh.initialize();

		$scope.search = function(term) {
			bh.get(term, function(results) {
				$scope.results = results;
			});
		};
	});
})();