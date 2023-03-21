<!DOCTYPE html>
<html>
<head>
	<title>Movable Rectangle GUI Example</title>
	<style>
		.button {
			display: inline-block;
			padding: 10px;
			background-color: #333;
			color: white;
			border: none;
			border-radius: 5px;
			margin-right: 10px;
			cursor: pointer;
		}
	</style>
	<script>
		window.onload = function() {
			var gui = document.createElement('div');
			gui.id = 'gui';
			gui.style.position = 'fixed';
			gui.style.top = '100px';
			gui.style.right = '0';
			gui.style.width = '200px';
			gui.style.height = '150px';
			gui.style.backgroundColor = '#f0f0f0';
			gui.style.border = '1px solid #ccc';
			gui.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.3)';
			gui.style.cursor = 'move';
			gui.style.userSelect = 'none';

			var dragging = false;
			var offset = {x: 0, y: 0};

			gui.addEventListener('mousedown', function(e) {
				dragging = true;
				offset.x = e.offsetX;
				offset.y = e.offsetY;
			});

			document.addEventListener('mousemove', function(e) {
				if (dragging) {
					gui.style.top = (e.clientY - offset.y) + 'px';
					gui.style.right = (window.innerWidth - e.clientX - offset.x - gui.offsetWidth) + 'px';
				}
			});

			document.addEventListener('mouseup', function() {
				dragging = false;
			});

			var button1 = document.createElement('button');
			button1.id = 'button1';
			button1.className = 'button';
			button1.innerHTML = 'Button 1';
			button1.addEventListener('click', function() {
				// code to run when button1 is clicked
				alert('Button 1 clicked!');
			});
			gui.appendChild(button1);

			var button2 = document.createElement('button');
			button2.id = 'button2';
			button2.className = 'button';
			button2.innerHTML = 'Button 2';
			button2.addEventListener('click', function() {
				// code to run when button2 is clicked
				alert('Button 2 clicked!');
			});
			gui.appendChild(button2);

			document.body.appendChild(gui);
		};
	</script>
</head>
<body>
</body>
</html>
