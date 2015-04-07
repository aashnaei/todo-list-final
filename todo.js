

var myapp = angular.module('myapp', ['ngTouch']);

myapp.controller('TodoCtrl', function ($scope) {
	$scope.totalTodos = 4;

	$scope.todos = [
		new TodoElement({text:'Learn Angular', done:false, style:''}), 
		new TodoElement({text:'Build an app', done:false, style:''})
	];

	setInterval(function () {
		$scope.$apply();
	}, 500);

	function TodoElement(options) {
		this.text = options.text;
		this.color = options.color;
		this.done = options.done;
	}

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

	$scope.todoChecked = function (i) {
		if (!window.list) { console.error('list does not exist'); return; }
		var todo = new TodoElement(window.list.get(i));
		todo.done = !todo.done;
		window.list.set(i, todo);
	};

	$scope.setColor = function (i, color) {
		if (!window.list) { console.error('List does not exist'); return; }
		var todo = new TodoElement(window.list.get(i));
		todo.color = color;
		window.list.set(i, todo);

		// $scope.showActions = !$scope.showActions;
	};

	$scope.getTotalTodos = function() {
		return window.list ? window.list.length : 0;
	};

	$scope.clearCompleted = function() {
		// window.list = _.filter(window.list, function(todo){
		// 	return !todo.done;
		// })

		// Keep looping until there isn't any "done" todo left.
		//
		// 1. loop through the list, add to separate array: new TodoElement(window.list.get(i))
		// 2. set that array to _.filter(thatArray, function (todo) { return !todo.done })
		// 3. call window.list.clear()
		// 4. loop through that other array, and add them to the list
		//    - by doing: list.insert(0, thatArray[i])

	 	  var something = [];
	 	  for (var i = 0; i < 10; i++){
	 	  something[i] = new TodoElement(window.list.get(i));
	 	  something[i] = _.filter(something, function (todo) { return !todo.done });
	 	  
	 	}

	 	window.list.clear()

	 	
	 	  for (var i = 0; i < 10; i++){

		 	  list.insert(0, something);
		 	  console.log("jeje");
		 	}

 	};

	$scope.swiped = function(which) {
	};

	//swipe option
	$scope.showActions = false;

	$scope.showOption = function () {
	   $scope.showActions = !$scope.showActions;
	   console.log("you swiped")
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

		addDrag();

	};

angular.module('drag', []).
directive('draggable', function($document) {
  return function(scope, element, attr) {
    var startX = 0, startY = 0, x = 0, y = 0;
    element.css({
     position: 'relative',
     border: '1px solid red',
     backgroundColor: 'lightgrey',
     cursor: 'pointer',
     display: 'block',
     width: '65px'
    });
    element.on('mousedown', function(event) {
      // Prevent default dragging of selected content
      event.preventDefault();
      startX = event.screenX - x;
      startY = event.screenY - y;
      $document.on('mousemove', mousemove);
      $document.on('mouseup', mouseup);
    });

    function mousemove(event) {
      y = event.screenY - startY;
      x = event.screenX - startX;
      element.css({
        top: y + 'px',
        left:  x + 'px'
      });
    }

    function mouseup() {
      $document.off('mousemove', mousemove);
      $document.off('mouseup', mouseup);
    }
  };
});


	// setTimeout(addDrag, 500);
});




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



// window.onload = function() {

//   var items = document.querySelectorAll('.item');
  
//   for ( var i=0, len = items.length; i < len; i++ ) {
//     var item = items[i];
//     var draggie = new Draggabilly( item, {
//       handle: '.handle',
//       //containment: '.todoList'
//     });
//   }

// };







