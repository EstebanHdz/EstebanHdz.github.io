function solveInterpolation(){
	var form = document.getElementById("form");
	var respuesta = checkform(form);
	if(respuesta == "fail"){
		alert("Dejar solo un campo vacio para resolver la ecuación!");
	}else if(respuesta == "xo"){
		var var2 = document.getElementById("yo").value;
		var var3 = document.getElementById("x").value;
		var var4 = document.getElementById("y").value;
		var var5 = document.getElementById("x1").value;
		var var6 = document.getElementById("y1").value;
		
		var res = ((var4 * var5) - (var2 * var5) + (var2 * var3) - (var6 * var3))/(var4 - var6);
		alert("Respuesta = "+res);
	}else if(respuesta == "yo"){
		var var1 = document.getElementById("xo").value;
		var var3 = document.getElementById("x").value;
		var var4 = document.getElementById("y").value;
		var var5 = document.getElementById("x1").value;
		var var6 = document.getElementById("y1").value;
		
		var res = (var4 * (var5 - var1) + var6 * (var1 - var3))/(var5 - var3);
		alert("Respuesta = "+res);
	}else if(respuesta == "x"){
		var var1 = document.getElementById("xo").value;
		var var2 = document.getElementById("yo").value;
		var var4 = document.getElementById("y").value;
		var var5 = document.getElementById("x1").value;
		var var6 = document.getElementById("y1").value;
		
		var res = (var4 * (var1 - var5) + (var2 * var5) - (var6 * var1))/(var2 - var6);
		alert("Respuesta = "+res);
	}else if(respuesta == "y"){
		var var1 = document.getElementById("xo").value;
		var var2 = document.getElementById("yo").value;
		var var3 = document.getElementById("x").value;
		var var5 = document.getElementById("x1").value;
		var var6 = document.getElementById("y1").value;
		
		x = (var6-var2);
		y = (var5 - var1);
		z = (var3 - var1);
		var res = (var2)*1 + ((x/y) * (z));
		alert("Respuesta = "+res);
	}else if(respuesta == "x1"){
		var var1 = document.getElementById("xo").value;
		var var2 = document.getElementById("yo").value;
		var var3 = document.getElementById("x").value;
		var var4 = document.getElementById("y").value;
		var var6 = document.getElementById("y1").value;
		
		var res = ((var4 * var1) - (var2 * var3) - (var6 * var1) + (var3 * var6))/(var4*1 - var2*1);
		alert("Respuesta = "+res);
	}else if(respuesta == "y1"){
		var var1 = document.getElementById("xo").value;
		var var2 = document.getElementById("yo").value;
		var var3 = document.getElementById("x").value;
		var var4 = document.getElementById("y").value;
		var var6 = document.getElementById("x1").value;
		
		var res = ((var4 * (var1 - var6)) + (var2 * (var6 - var3)))/(var1 - var3);
		alert("Respuesta = "+res);
	}
}

function checkform(form) {
    var inputs = form.getElementsByTagName('input');
	var counter = 0;
    for (var i = 0; i < inputs.length; i++) {
        if(inputs[i].value == ""){
			counter++;
			emptyField = inputs[i].name;
		 }        
    }
	
	if(counter > 1 || counter == 0){
		//alert("Favor de llenar tres campos!");
		return "fail";
	}else{
		return emptyField;
	}			
}