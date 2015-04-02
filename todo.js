

var myapp = angular.module('myapp', ['ngTouch']);

myapp.controller('TodoCtrl', function ($scope) {
	$scope.totalTodos = 4;

	$scope.todos = [
	{text:'Learn Angular', done:false, style:''}, 
	{text:'Build an app', done:false, style:''}
	];

	setInterval(function () {
		$scope.$apply();
	}, 1000);

	$scope.getTodos = function () {
		if (!window.list) {
			return [];
		}

		var arr = [];
		for (var i = 0, n = window.list.length; i < n; i++) {
			arr.push(window.list.get(i));
		}
		return arr;
	};

	$scope.getTotalTodos = function() {
		console.log(window.list && window.list.length);
		return window.list ? window.list.length : 0;
	};

	$scope.clearCompleted = function() {
		$scope.todos = _.filter($scope.todos, function(todo){
			return !todo.done;
		})
	};

	$scope.swiped = function(which) {
		console.log($scope.todos[which]);
	};


	var addDrag = function() {
		var elements = document.querySelectorAll('.item');
		  for ( var i=0, len = elements.length; i < len; i++ ) {
		    var el = elements[i];
		    el.style.display = 'block';
		    // el.style.top = window.list[i].top;
		    // el.style.left = window.list[i].left;
		    var draggie = new Draggabilly( el, {
		      handle: '.handle'
		    });

		    //draggie will fire an event when dragging has ended, dragend

		    //you need to update the todo that was dragged, top and left properties
		  }
	};


	$scope.addTodo = function (){

		if (!window.list) { return; }

		// $scope.todos.push({
		// 	text:$scope.formTodoText,
		// 	done:false,
		// 	top:Math.floor(Math.random() * 400) + 'px',
		// 	left:Math.floor(Math.random() * 400) + 'px',
		// 	style:''
		// });
		window.list.insert(0, {
			text:$scope.formTodoText,
			done:false,
			// top:Math.floor(Math.random() * 400) + 'px',
			// left:Math.floor(Math.random() * 400) + 'px',
			// style:''
		})
		$scope.formTodoText = '';

		// $scope.changeColor = function(){
		// 	console.log('clicked');
		// };

		// $scope.tap = function(){
		
		// }

		setTimeout(addDrag, 100);

	};


	setTimeout(addDrag, 500);
})

// var elements = document.getElementById('dragMe');
// 	Hammer(elements).on('drag', function(event) {
// 		alert('drag');
// 	});

// 	var options = {
//   dragLockToAxis: true,
//   dragBlockHorizontal: true
// };
// var hammertime = new Hammer(element, options);
// hammertime.on("dragleft dragright swipeleft swiperight", function(ev){
// 		alert('drag');
//  	});


