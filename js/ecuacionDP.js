var emptyField;

function solveEcGI1 (){
	var form = document.getElementById("form");
	var respuesta = checkform(form);
	if(respuesta == "fail" || respuesta == "fail2"){
		alert("Dejar solo un campo vacio para resolver la ecuación!");
	}else if(respuesta == "var1"){
		var var2 = document.getElementById("var2").value;
		var var3 = document.getElementById("var3").value;
		var var4 = document.getElementById("var4").value;
		
		var res = (var3 * var4)/var2;
		alert("Respuesta = "+res);
	}else if(respuesta == "var2"){
		var var1 = document.getElementById("var1").value;
		var var3 = document.getElementById("var3").value;
		var var4 = document.getElementById("var4").value;
		
		var res = (var3 * var4)/var1;
		alert("Respuesta = "+res);
	}else if(respuesta == "var3"){
		var var1 = document.getElementById("var1").value;
		var var2 = document.getElementById("var2").value;
		var var4 = document.getElementById("var4").value;
		
		var res = (var2 * var1)/var4;
		alert("Respuesta = "+res);
	}else if(respuesta == "var4"){
		var var1 = document.getElementById("var1").value;
		var var3 = document.getElementById("var3").value;
		var var2 = document.getElementById("var2").value;
		
		var res = (var2 * var1)/var3;
		alert("Respuesta = "+res);
	}
}

function solveEcGI2 (){
	var form = document.getElementById("form");
	var respuesta = checkform(form);
	if(respuesta == "fail" || respuesta == "fail2"){
		alert("Dejar solo un campo vacio para resolver la ecuación!");
	}else if(respuesta == "var1"){
		var var2 = document.getElementById("var2").value;
		var var3 = document.getElementById("var3").value;
		var var4 = document.getElementById("var4").value;
		
		var res = (var3 * var2)/var4;
		alert("Respuesta = "+res);
	}else if(respuesta == "var2"){
		var var1 = document.getElementById("var1").value;
		var var3 = document.getElementById("var3").value;
		var var4 = document.getElementById("var4").value;
		
		var res = (var1 * var4)/var3;
		alert("Respuesta = "+res);
	}else if(respuesta == "var3"){
		var var1 = document.getElementById("var1").value;
		var var2 = document.getElementById("var2").value;
		var var4 = document.getElementById("var4").value;
		
		var res = (var4 * var1)/var2;
		alert("Respuesta = "+res);
	}else if(respuesta == "var4"){
		var var1 = document.getElementById("var1").value;
		var var3 = document.getElementById("var3").value;
		var var2 = document.getElementById("var2").value;
		
		var res = (var2 * var3)/var1;
		alert("Respuesta = "+res);
	}
}

function solveEcGI3 (){
	var form = document.getElementById("form");
	var respuesta = checkform(form);
	if(respuesta == "fail" || respuesta == "fail2"){
		alert("Dejar solo un campo vacio para resolver la ecuación!");
	}else if(respuesta == "var1"){
		var var2 = document.getElementById("var2").value;
		var var3 = document.getElementById("var3").value;
		var var4 = document.getElementById("var4").value;
		var var5 = document.getElementById("var5").value;
		var var6 = document.getElementById("var6").value;
		
		var res = (var3 * var5 * var4)/(var6 * var2);
		alert("Respuesta = "+res);
	}else if(respuesta == "var2"){
		var var1 = document.getElementById("var1").value;
		var var3 = document.getElementById("var3").value;
		var var4 = document.getElementById("var4").value;
		var var5 = document.getElementById("var5").value;
		var var6 = document.getElementById("var6").value;
		
		var res = (var3 * var5 * var4)/(var6 * var1);
		alert("Respuesta = "+res);
	}else if(respuesta == "var3"){
		var var1 = document.getElementById("var1").value;
		var var2 = document.getElementById("var2").value;
		var var4 = document.getElementById("var4").value;
		var var5 = document.getElementById("var5").value;
		var var6 = document.getElementById("var6").value;
		
		var res = (var6 * var1 * var2)/(var4 * var5);
		alert("Respuesta = "+res);
	}else if(respuesta == "var4"){
		var var1 = document.getElementById("var1").value;
		var var3 = document.getElementById("var3").value;
		var var2 = document.getElementById("var2").value;
		var var6 = document.getElementById("var6").value;
		var var5 = document.getElementById("var5").value;
		
		var res = (var1 * var2 * var6)/(var3 * var5);
		alert("Respuesta = "+res);
	}else if(respuesta == "var5"){
		var var1 = document.getElementById("var1").value;
		var var3 = document.getElementById("var3").value;
		var var2 = document.getElementById("var2").value;
		var var4 = document.getElementById("var4").value;
		var var6 = document.getElementById("var6").value;
		
		var res = (var1 * var2 * var6)/(var3 * var4);
		alert("Respuesta = "+res);
	}else if(respuesta == "var6"){
		var var1 = document.getElementById("var1").value;
		var var2 = document.getElementById("var2").value;
		var var3 = document.getElementById("var3").value;
		var var4 = document.getElementById("var4").value;
		var var5 = document.getElementById("var5").value;
		
		var res = (var3 * var5 * var4)/(var1 * var2);
		alert("Respuesta = "+res);
	}
}

function solveEcGI5 (){
	var form = document.getElementById("form");
	var respuesta = checkform(form);
	if(respuesta == "fail" || respuesta == "fail2"){
		alert("Dejar solo un campo vacio para resolver la ecuación!");
	}else if(respuesta == "var1"){
		var var2 = document.getElementById("var2").value;
		var var3 = document.getElementById("var3").value;
		
		var res = (var2 / var3);
		alert("Respuesta = "+res);
	}else if(respuesta == "var2"){
		var var1 = document.getElementById("var1").value;
		var var3 = document.getElementById("var3").value;
		
		var res = (var1 * var3);
		alert("Respuesta = "+res);
	}else if(respuesta == "var3"){
		var var1 = document.getElementById("var1").value;
		var var2 = document.getElementById("var2").value;
		
		var res = var2/var1;
		alert("Respuesta = "+res);
	}
}

function solveEcGI6 (){
	var form = document.getElementById("form");
	var respuesta = checkform(form);
	if(respuesta == "fail" || respuesta == "fail2"){
		alert("Dejar solo un campo vacio para resolver la ecuación!");
	}else if(respuesta == "var1"){
		var var2 = document.getElementById("var2").value;
		var var3 = document.getElementById("var3").value;
		var var4 = document.getElementById("var4").value;
		var var5 = document.getElementById("var5").value;
		
		var res = (var3 * var2)/(var5 * var4);
		alert("Respuesta = "+res);
	}else if(respuesta == "var2"){
		var var1 = document.getElementById("var1").value;
		var var3 = document.getElementById("var3").value;
		var var4 = document.getElementById("var4").value;
		var var5 = document.getElementById("var5").value;
		
		var res = (var1 * var5 * var4)/(var3);
		alert("Respuesta = "+res);
	}else if(respuesta == "var3"){
		var var1 = document.getElementById("var1").value;
		var var2 = document.getElementById("var2").value;
		var var4 = document.getElementById("var4").value;
		var var5 = document.getElementById("var5").value;
		
		var res = (var5 * var1 * var4)/(var2);
		alert("Respuesta = "+res);
	}else if(respuesta == "var4"){
		var var1 = document.getElementById("var1").value;
		var var3 = document.getElementById("var3").value;
		var var2 = document.getElementById("var2").value;
		var var5 = document.getElementById("var5").value;
		
		var res = (var2 * var3)/(var1 * var5);
		alert("Respuesta = "+res);
	}else if(respuesta == "var5"){
		var var1 = document.getElementById("var1").value;
		var var3 = document.getElementById("var3").value;
		var var2 = document.getElementById("var2").value;
		var var4 = document.getElementById("var4").value;
		
		var res = (var3 * var2)/(var1 * var4);
		alert("Respuesta = "+res);
	}
}

function solveEcGI7 (){
	var form = document.getElementById("form");
	var respuesta = checkform(form);
	if(respuesta == "fail" || respuesta == "fail2"){
		alert("Dejar solo un campo vacio para resolver la ecuación!");
	}else if(respuesta == "var1"){
		var var2 = document.getElementById("var2").value;
		var var3 = document.getElementById("var3").value;
		
		var res = (var2 * var3);
		alert("Respuesta = "+res);
	}else if(respuesta == "var2"){
		var var1 = document.getElementById("var1").value;
		var var3 = document.getElementById("var3").value;
		
		var res = var1 / var3;
		alert("Respuesta = "+res);
	}else if(respuesta == "var3"){
		var var1 = document.getElementById("var1").value;
		var var2 = document.getElementById("var2").value;
		
		var res = var1/var2;
		alert("Respuesta = "+res);
	}
}

function solveEcGI8 (){
	var form = document.getElementById("form");
	var respuesta = checkform(form);
	if(respuesta == "fail" || respuesta == "fail2"){
		alert("Dejar solo un campo vacio para resolver la ecuación!");
	}else if(respuesta == "var1"){
		var var2 = document.getElementById("var2").value;
		var var3 = document.getElementById("var3").value;
		var var4 = document.getElementById("var4").value;
		var var5 = document.getElementById("var5").value;
		
		var res = (var3 * var2 * var4)/var5;
		alert("Respuesta = "+res);
	}else if(respuesta == "var2"){
		var var1 = document.getElementById("var1").value;
		var var3 = document.getElementById("var3").value;
		var var4 = document.getElementById("var4").value;
		var var5 = document.getElementById("var5").value;
		
		var res = (var1 * var5)/(var3 * var4);
		alert("Respuesta = "+res);
	}else if(respuesta == "var3"){
		var var1 = document.getElementById("var1").value;
		var var2 = document.getElementById("var2").value;
		var var4 = document.getElementById("var4").value;
		var var5 = document.getElementById("var5").value;
		
		var res = (var5 * var1)/(var4 * var2);
		alert("Respuesta = "+res);
	}else if(respuesta == "var4"){
		var var1 = document.getElementById("var1").value;
		var var3 = document.getElementById("var3").value;
		var var2 = document.getElementById("var2").value;
		var var5 = document.getElementById("var5").value;
		
		var res = (var1 * var5)/(var3 * var2);
		alert("Respuesta = "+res);
	}else if(respuesta == "var5"){
		var var1 = document.getElementById("var1").value;
		var var3 = document.getElementById("var3").value;
		var var2 = document.getElementById("var2").value;
		var var4 = document.getElementById("var4").value;
		
		var res = (var3 * var2 * var4)/(var1);
		alert("Respuesta = "+res);
	}
}

function solveEcGI9 (){
	var form = document.getElementById("form");
	var respuesta = checkform(form);
	if(respuesta == "fail" || respuesta == "fail2"){
		alert("Dejar solo un campo vacio para resolver la ecuación!");
	}else if(respuesta == "var1"){
		var var2 = document.getElementById("var2").value;
		var var3 = document.getElementById("var3").value;
		var var4 = document.getElementById("var4").value;
		
		var res = Math.sqrt(var3 / var4) * var2;
		alert("Respuesta = "+res);
	}else if(respuesta == "var2"){
		var var1 = document.getElementById("var1").value;
		var var3 = document.getElementById("var3").value;
		var var4 = document.getElementById("var4").value;
		
		var res = var1 / Math.sqrt(var3 / var4);
		alert("Respuesta = "+res);
	}else if(respuesta == "var3"){
		var var1 = document.getElementById("var1").value;
		var var2 = document.getElementById("var2").value;
		var var4 = document.getElementById("var4").value;
		
		var res = Math.sqrt(var1 / var2) * var4;
		alert("Respuesta = "+res);
	}else if(respuesta == "var4"){
		var var1 = document.getElementById("var1").value;
		var var3 = document.getElementById("var3").value;
		var var2 = document.getElementById("var2").value;
		
		var res = var3 / Math.sqrt(var1 / var2);
		alert("Respuesta = "+res);
	}
}

function solveEcGI10 (){
	var form = document.getElementById("form");
	var respuesta = checkform(form);
	if(respuesta == "fail" || respuesta == "fail2"){
		alert("Dejar solo un campo vacio para resolver la ecuación!");
	}else if(respuesta == "var1"){
		var var2 = document.getElementById("var2").value;
		var var3 = document.getElementById("var3").value;
		var var4 = document.getElementById("var4").value;
		
		var res = Math.sqrt((3 * var2 * var3) / var4);
		alert("Respuesta = "+res);
	}else if(respuesta == "var3"){
		var var1 = document.getElementById("var1").value;
		var var2 = document.getElementById("var2").value;
		var var4 = document.getElementById("var4").value;
		
		var res = (var4 * var1 * var1) / (3 * var2);
		alert("Respuesta = "+res);
	}else if(respuesta == "var4"){
		var var1 = document.getElementById("var1").value;
		var var3 = document.getElementById("var3").value;
		var var2 = document.getElementById("var2").value;
		
		var res = (3 * var2 * var3) / (var1 * var1);
		alert("Respuesta = "+res);
	}
}

function solveEcCCP1(){
	var form = document.getElementById("form");
	var respuesta = checkform(form);
	if(respuesta == "fail" || respuesta == "fail2"){
		alert("Dejar solo un campo vacio para resolver la ecuación!");
	}else if(respuesta == "var1"){
		var var2 = document.getElementById("var2").value;
		var var3 = document.getElementById("var3").value;
		var var4 = document.getElementById("var4").value;
		
		var res = var3 * var4 * var2;
		alert("Respuesta = "+res);
	}else if(respuesta == "var2"){
		var var1 = document.getElementById("var1").value;
		var var3 = document.getElementById("var3").value;
		var var4 = document.getElementById("var4").value;
		
		var res = var1 / (var4 * var3);
		alert("Respuesta = "+res);
	}else if(respuesta == "var3"){
		var var1 = document.getElementById("var1").value;
		var var2 = document.getElementById("var2").value;
		var var4 = document.getElementById("var4").value;
		
		var res = var1/ (var4 * var2);
		alert("Respuesta = "+res);
	}else if(respuesta == "var4"){
		var var1 = document.getElementById("var1").value;
		var var3 = document.getElementById("var3").value;
		var var2 = document.getElementById("var2").value;
		
		var res = var1/ (var3 * var2);
		alert("Respuesta = "+res);
	}
}

function solveEcCCP2(){
	var form = document.getElementById("form");
	var respuesta = checkform(form);
	if(respuesta == "fail" || respuesta == "fail2"){
		alert("Dejar solo un campo vacio para resolver la ecuación!");
	}else if(respuesta == "var1"){
		var var2 = document.getElementById("var2").value;
		var var3 = document.getElementById("var3").value;
		
		var res = var3 * var2;
		alert("Respuesta = "+res);
	}else if(respuesta == "var2"){
		var var1 = document.getElementById("var1").value;
		var var3 = document.getElementById("var3").value;
		
		var res = var1 / var3;
		alert("Respuesta = "+res);
	}else if(respuesta == "var3"){
		var var1 = document.getElementById("var1").value;
		var var2 = document.getElementById("var2").value;
		
		var res = var1/ var2;
		alert("Respuesta = "+res);
	}
}

function solveEcCCP3(){
	var form = document.getElementById("form");
	var respuesta = checkform(form);
	if(respuesta == "fail" || respuesta == "fail2"){
		alert("Dejar solo un campo vacio para resolver la ecuación!");
	}else if(respuesta == "var1"){
		var var2 = document.getElementById("var2").value;
		var var3 = document.getElementById("var3").value;
		
		var res = var2/var3;
		alert("Respuesta = "+res);
	}else if(respuesta == "var2"){
		var var1 = document.getElementById("var1").value;
		var var3 = document.getElementById("var3").value;
		
		var res = var1 * var3;
		alert("Respuesta = "+res);
	}else if(respuesta == "var3"){
		var var1 = document.getElementById("var1").value;
		var var2 = document.getElementById("var2").value;
		
		var res = var2/ var1;
		alert("Respuesta = "+res);
	}
}

function solveEcCCP4(){
	var form = document.getElementById("form");
	var respuesta = checkform(form);
	if(respuesta == "fail" || respuesta == "fail2"){
		alert("Dejar solo un campo vacio para resolver la ecuación!");
	}else if(respuesta == "var1"){
		var var2 = document.getElementById("var2").value;
		var var3 = document.getElementById("var3").value;
		
		var res = -(Number(var2)+Number(var3));
		alert("Respuesta = "+res);
	}else if(respuesta == "var2"){
		var var1 = document.getElementById("var1").value;
		var var3 = document.getElementById("var3").value;
		
		var res = -(Number(var1)+Number(var3));
		alert("Respuesta = "+res);
	}else if(respuesta == "var3"){
		var var1 = document.getElementById("var1").value;
		var var2 = document.getElementById("var2").value;
		
		var res = -(Number(var1)+Number(var2));
		alert("Respuesta = "+res);
	}
}

function solveEcCCV5(){
	var form = document.getElementById("form");
	var respuesta = checkform(form);
	if(respuesta == "fail" || respuesta == "fail2"){
		alert("Dejar solo un campo vacio para resolver la ecuación!");
	}else if(respuesta == "var1"){
		var var2 = document.getElementById("var2").value;
		var var3 = document.getElementById("var3").value;
		var var4 = document.getElementById("var4").value;
		
		var res = (var2 / var3) * var4;
		alert("Respuesta = "+res);
	}else if(respuesta == "var2"){
		var var1 = document.getElementById("var1").value;
		var var3 = document.getElementById("var3").value;
		var var4 = document.getElementById("var4").value;
		
		var res = (var1 * var3) / var4;
		alert("Respuesta = "+res);
	}else if(respuesta == "var3"){
		var var1 = document.getElementById("var1").value;
		var var2 = document.getElementById("var2").value;
		var var4 = document.getElementById("var4").value;
		
		var res = (var2 * var4)/ var1;
		alert("Respuesta = "+res);
	}else if(respuesta == "var4"){
		var var1 = document.getElementById("var1").value;
		var var3 = document.getElementById("var3").value;
		var var2 = document.getElementById("var2").value;
		
		var res = (var1 * var3) / var2;
		alert("Respuesta = "+res);
	}
}

function solveEcMMN2(){
	var form = document.getElementById("form");
	var respuesta = checkform(form);
	if(respuesta == "fail" || respuesta == "fail2"){
		alert("Dejar solo un campo vacio para resolver la ecuación!");
	}else if(respuesta == "var1"){
		var var2 = document.getElementById("var2").value;
		var var3 = document.getElementById("var3").value;
		
		var res = (var2 / (var3 + var2)) * 100;
		alert("Respuesta = "+res);
	}else if(respuesta == "var2"){
		var var1 = document.getElementById("var1").value;
		var var3 = document.getElementById("var3").value;
		
		var res = -((var1 * var3)/(var1 - 100));
		alert("Respuesta = "+res);
	}else if(respuesta == "var3"){
		var var1 = document.getElementById("var1").value;
		var var2 = document.getElementById("var2").value;
		
		var res = ((100/ var1) - 1) * var3;
		alert("Respuesta = "+res);
	}
}

function solveEcMMN3(){
	var form = document.getElementById("form");
	var respuesta = checkform(form);
	if(respuesta == "fail" || respuesta == "fail2"){
		alert("Dejar solo un campo vacio para resolver la ecuación!");
	}else if(respuesta == "var1"){
		var var2 = document.getElementById("var2").value;
		var var3 = document.getElementById("var3").value;
		
		var res = (var2 / (var3 + var2)) * 1000000;
		alert("Respuesta = "+res);
	}else if(respuesta == "var2"){
		var var1 = document.getElementById("var1").value;
		var var3 = document.getElementById("var3").value;
		
		var res = -((var1 * var3)/(var1 - 1000000));
		alert("Respuesta = "+res);
	}else if(respuesta == "var3"){
		var var1 = document.getElementById("var1").value;
		var var2 = document.getElementById("var2").value;
		
		var res = ((1000000/ var1) - 1) * var3;
		alert("Respuesta = "+res);
	}
}

function solveEcMMN7(){
	var form = document.getElementById("form");
	var respuesta = checkform(form);
	if(respuesta == "fail" || respuesta == "fail2"){
		alert("Dejar solo un campo vacio para resolver la ecuación!");
	}else if(respuesta == "var1"){
		var var2 = document.getElementById("var2").value;
		var var3 = document.getElementById("var3").value;
		var var4 = document.getElementById("var4").value;
		var var5 = document.getElementById("var5").value;
		
		var res = (var2 * var3) / (var4 * var5);
		alert("Respuesta = "+res);
	}else if(respuesta == "var2"){
		var var1 = document.getElementById("var1").value;
		var var3 = document.getElementById("var3").value;
		var var4 = document.getElementById("var4").value;
		var var5 = document.getElementById("var5").value;
		
		var res = (var1 * var4 * var5) / var3;
		alert("Respuesta = "+res);
	}else if(respuesta == "var3"){
		var var1 = document.getElementById("var1").value;
		var var2 = document.getElementById("var2").value;
		var var4 = document.getElementById("var4").value;
		var var5 = document.getElementById("var5").value;
		
		var res = (var1 * var4 * var5) / var2;
		alert("Respuesta = "+res);
	}else if(respuesta == "var4"){
		var var1 = document.getElementById("var1").value;
		var var3 = document.getElementById("var3").value;
		var var2 = document.getElementById("var2").value;
		var var5 = document.getElementById("var5").value;
		
		var res = (var2 * var3) / (var1 * var5);
		alert("Respuesta = "+res);
	}else if(respuesta == "var5"){
		var var1 = document.getElementById("var1").value;
		var var3 = document.getElementById("var3").value;
		var var2 = document.getElementById("var2").value;
		var var4 = document.getElementById("var4").value;
		
		var res = (var2 * var3) / (var1 * var4);
		alert("Respuesta = "+res);
	}
}

function solveEcQUIN1(){
	var form = document.getElementById("form");
	var respuesta = checkform(form);
	if(respuesta == "fail" || respuesta == "fail2"){
		alert("Dejar solo un campo vacio para resolver la ecuación!");
	}else if(respuesta == "var1"){
		var var2 = document.getElementById("var2").value;
		var var3 = document.getElementById("var3").value;
		var var4 = document.getElementById("var4").value;
		
		var res = var2 * ((Math.E)^(var3 * var4));
		alert("Respuesta = "+res);
	}else if(respuesta == "var2"){
		var var1 = document.getElementById("var1").value;
		var var3 = document.getElementById("var3").value;
		var var4 = document.getElementById("var4").value;
		
		var res = var1 * ((Math.E)^(-var3 * var4));
		alert("Respuesta = "+res);
	}else if(respuesta == "var3"){
		var var1 = document.getElementById("var1").value;
		var var2 = document.getElementById("var2").value;
		var var4 = document.getElementById("var4").value;
		
		var res = (Math.log(var1/var2))/var4;
		alert("Respuesta = "+res);
	}else if(respuesta == "var4"){
		var var1 = document.getElementById("var1").value;
		var var3 = document.getElementById("var3").value;
		var var2 = document.getElementById("var2").value;
		
		var res = (Math.log(var1/var2))/var3;
		alert("Respuesta = "+res);
	}
}

function solveEcQUIN2(){
	var form = document.getElementById("form");
	var respuesta = checkform(form);
	if(respuesta == "fail" || respuesta == "fail2"){
		alert("Dejar solo un campo vacio para resolver la ecuación!");
	}else if(respuesta == "var1"){
		var var2 = document.getElementById("var2").value;
		
		var res = 0.693/var2;
		alert("Respuesta = "+res);
	}else if(respuesta == "var2"){
		var var1 = document.getElementById("var1").value;
		
		var res = 0.693/var1;
		alert("Respuesta = "+res);
	}
}

function solveEcQUIN3(){
	var form = document.getElementById("form");
	var respuesta = checkform(form);
	if(respuesta == "fail" || respuesta == "fail2"){
		alert("Dejar solo un campo vacio para resolver la ecuación!");
	}else if(respuesta == "var1"){
		var var2 = document.getElementById("var2").value;
		var var3 = document.getElementById("var3").value;
		
		var res = 1/(var2 * var3);
		alert("Respuesta = "+res);
	}else if(respuesta == "var2"){
		var var1 = document.getElementById("var1").value;
		var var3 = document.getElementById("var3").value;
		
		var res = 1/(var1 * var3);
		alert("Respuesta = "+res);
	}else if(respuesta == "var3"){
		var var1 = document.getElementById("var1").value;
		var var2 = document.getElementById("var2").value;
		
		var res = 1/(var1 * var2);
		alert("Respuesta = "+res);
	}
}

function solveEcQUIN4(){
	var form = document.getElementById("form");
	var respuesta = checkform(form);
	if(respuesta == "fail" || respuesta == "fail2"){
		alert("Dejar solo un campo vacio para resolver la ecuación!");
	}else if(respuesta == "var1"){
		var var2 = document.getElementById("var2").value;
		var var3 = document.getElementById("var3").value;
		var var4 = document.getElementById("var4").value;
		
		var res = var2/((var2 * var3 * var4) + 1);
		alert("Respuesta = "+res);
	}else if(respuesta == "var2"){
		var var1 = document.getElementById("var1").value;
		var var3 = document.getElementById("var3").value;
		var var4 = document.getElementById("var4").value;
		
		var res = var1/(1 - (var1 * var3 * var4));
		alert("Respuesta = "+res);
	}else if(respuesta == "var3"){
		var var1 = document.getElementById("var1").value;
		var var2 = document.getElementById("var2").value;
		var var4 = document.getElementById("var4").value;
		
		var res = (var2 - var1)/(var1 * var2 * var4);
		alert("Respuesta = "+res);
	}else if(respuesta == "var4"){
		var var1 = document.getElementById("var1").value;
		var var3 = document.getElementById("var3").value;
		var var2 = document.getElementById("var2").value;
		
		var res = (var2 - var1)/(var1 * var2 * var3);
		alert("Respuesta = "+res);
	}
}

function solveEcQUIN5(){
	var form = document.getElementById("form");
	var respuesta = checkform(form);
	if(respuesta == "fail" || respuesta == "fail2"){
		alert("Dejar solo un campo vacio para resolver la ecuación!");
	}else if(respuesta == "var1"){
		var var2 = document.getElementById("var2").value;
		var var3 = document.getElementById("var3").value;
		
		var res = var2/(2 * var3);
		alert("Respuesta = "+res);
	}else if(respuesta == "var2"){
		var var1 = document.getElementById("var1").value;
		var var3 = document.getElementById("var3").value;
		
		var res = var1 * var3 * 2;
		alert("Respuesta = "+res);
	}else if(respuesta == "var3"){
		var var1 = document.getElementById("var1").value;
		var var2 = document.getElementById("var2").value;
		
		var res = var2/(2 * var1);
		alert("Respuesta = "+res);
	}
}

function solveEcQUIN6(){
	var form = document.getElementById("form");
	var respuesta = checkform(form);
	if(respuesta == "fail" || respuesta == "fail2"){
		alert("Dejar solo un campo vacio para resolver la ecuación!");
	}else if(respuesta == "var1"){
		var var2 = document.getElementById("var2").value;
		var var3 = document.getElementById("var3").value;
		var var4 = document.getElementById("var4").value;
		
		var res = (var3 * var4) + var2;
		alert("Respuesta = "+res);
	}else if(respuesta == "var2"){
		var var1 = document.getElementById("var1").value;
		var var3 = document.getElementById("var3").value;
		var var4 = document.getElementById("var4").value;
		
		var res = var1 - (var3 * var4);
		alert("Respuesta = "+res);
	}else if(respuesta == "var3"){
		var var1 = document.getElementById("var1").value;
		var var2 = document.getElementById("var2").value;
		var var4 = document.getElementById("var4").value;
		
		var res = (var1 - var2)/var4;
		alert("Respuesta = "+res);
	}else if(respuesta == "var4"){
		var var1 = document.getElementById("var1").value;
		var var3 = document.getElementById("var3").value;
		var var2 = document.getElementById("var2").value;
		
		var res = (var1 - var2)/var3;
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
	
	if(counter > 1){
		//alert("Favor de llenar tres campos!");
		return "fail";
	}else if(counter == 0){
		return "fail2";
	}else{
		return emptyField;
	}			
}