let ChemistryTab = angular.module('ChemistryTab', []);

ChemistryTab.controller('appCtrl', ['$http', function($http) {
  let $this = this;
  $http.get('words.json').then(function(data) {
    let molecules = data.data;
    let index = Math.floor(Math.random() * molecules.length);
    $this.molecule = molecules[index];
  }, function(error) {
    $this.molecule = {
      name: "Error!",
      description: error
    }
  });
  
}]);