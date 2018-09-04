/*делаем принт в канвасе*/
var canvas = document.getElementById('c1');
var ctx =canvas.getContext('2d');

/*Внутри canvas нужно отслеживать движение мыши*/
canvas.onmousemove = function(event){
	var x = event.offsetX;
	var y = event.offsetY;
	/*В текущий момент времени,когда мышь двигается,в той координате где мышь,
	отрисовываю прямогульник размером 10 на 10пикселей*/
	ctx.fillRect(x,y, 10, 10);


}







