<!DOCTYPE html>
<html>
<head>
	<title>Movable UI Example</title>
	<style>
		#ui {
			position: fixed;
			top: 100px;
			right: 0;
			width: 200px;
			height: 200px;
			background-color: #f0f0f0;
			border: 1px solid black;
			cursor: move;
			user-select: none;
		}
	</style>
	<script>
		window.onload = function() {
			var ui = document.getElementById('ui');
			var dragging = false;
			var offset = {x: 0, y: 0};

			ui.addEventListener('mousedown', function(e) {
				dragging = true;
				offset.x = e.offsetX;
				offset.y = e.offsetY;
			});

			document.addEventListener('mousemove', function(e) {
				if (dragging) {
					ui.style.top = (e.clientY - offset.y) + 'px';
					ui.style.right = (window.innerWidth - e.clientX - offset.x) + 'px';
				}
			});

			document.addEventListener('mouseup', function() {
				dragging = false;
			});
		};
	</script>
</head>
<body>
	<div id="ui">
		<h1>Movable UI Example</h1>
		<p>You can drag and drop this UI around the screen.</p>
	</div>
</body>
</html>
