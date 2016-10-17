var app = angular.module('app', []);
app.controller('nutritionController', function($scope, $http){

  var promise = $http.get( "/api/foods");
	promise.success(function(data, status, headers, config) {
		$scope.foods = data;
		$scope.selected.push({})
		console.log($scope.selected);
	});

  promise.error(function(data, status, headers, config) {
	   alert("Error al cargar la lista de alimentos");
	});

	$scope.agregar = function(){
		$scope.selected.push({})
	}

	$scope.eliminar = function(index){
		array.splice(index, 1);
	}

	$scope.actualizarTotal = function(){
		//console.log($scope.selected);
		console.log($scope.total);
		$scope.total = {};
		$scope.total.calorias = 0;
		$scope.total.agua = 0.0;
		$scope.total.proteina = 0.0;
		$scope.total.grasa = 0.0;
		$scope.total.cho = 0.0;
		$scope.total.fibra = 0;
		$scope.total.ceniza = 0.0;
		$scope.total.calcio = 0;
		$scope.total.fosforo = 0;
		$scope.total.hierro = 0.0;
		$scope.total.vitamina_a_er = 0;
		$scope.total.tiamina = 0.00;
		$scope.total.riboflavina = 0.00;
		$scope.total.niacina = 0.0;
		$scope.total.vitamina_c = 0;
		for(var i = 0; i < $scope.selected.length; i++){
			var seleccionado = $scope.selected[i];
			$scope.total.calorias += parseInt((seleccionado.cantidad * seleccionado.option.calorias) / 100);
			$scope.total.agua += parseFloat(((seleccionado.cantidad * seleccionado.option.agua) / 100).toFixed(1));
			$scope.total.proteina += parseFloat(((seleccionado.cantidad * seleccionado.option.proteina) / 100).toFixed(1));
			$scope.total.grasa += parseFloat(((seleccionado.cantidad * seleccionado.option.grasa) / 100).toFixed(1));
			$scope.total.cho += parseFloat(((seleccionado.cantidad * seleccionado.option.cho) / 100).toFixed(1));
			$scope.total.fibra += parseFloat(((seleccionado.cantidad * seleccionado.option.fibra) / 100).toFixed(1));
			$scope.total.ceniza += parseFloat(((seleccionado.cantidad * seleccionado.option.ceniza) / 100).toFixed(1));
			$scope.total.calcio += parseInt((seleccionado.cantidad * seleccionado.option.calcio) / 100);
			$scope.total.fosforo += parseInt((seleccionado.cantidad * seleccionado.option.fosforo) / 100);
			$scope.total.ceniza += parseFloat(((seleccionado.cantidad * seleccionado.option.ceniza) / 100).toFixed(1));
			$scope.total.hierro += parseFloat(((seleccionado.cantidad * seleccionado.option.hierro) / 100).toFixed(1));
			$scope.total.vitamina_a_er += parseInt((seleccionado.cantidad * seleccionado.option.vitamina_a_er) / 100);
			$scope.total.tiamina += parseFloat(((seleccionado.cantidad * seleccionado.option.tiamina) / 100).toFixed(2));
			$scope.total.riboflavina += parseFloat(((seleccionado.cantidad * seleccionado.option.riboflavina) / 100).toFixed(2));
			$scope.total.niacina += parseFloat(((seleccionado.cantidad * seleccionado.option.niacina) / 100).toFixed(2));
			$scope.total.vitamina_c += parseInt((seleccionado.cantidad * seleccionado.option.vitamina_c) / 100);
		}
	}

  $scope.nombre = "Comida";
	$scope.foods = [];
	$scope.selected = [];

	$scope.total = {}
	
	console.log($scope.nombre)

});