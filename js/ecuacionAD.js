var ecuacion;
function startPage(){
	ecuacion = getParameterByName('ecu');
	type = getParameterByName('type');
	insert();
}

function insert(){
	var src = document.getElementById("type");
	var img = document.createElement("img");
	if(type == 'GI'){
		insertImageGI();
		insertFormGI();
	}else if(type == 'CCP'){
		insertImageCCP();
		insertFormCCP();
	}else if(type == 'CCV'){
		insertImageCCV();
		insertFormCCV();
	}else if(type == 'MMN'){
		insertImageMMN();
		insertFormMMN();
	}else if(type == 'QUIN'){
		insertImageQUIN();
		insertFormQUIN();
	}else if(type == 'COL'){
		insertImageCOL();
		insertFormCOL();
	}
}

function insertImageCOL(){
	if(ecuacion == 'COL1'){ 
		//img.src = 'imgs/gasesIdeales/1.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img class="img" src="C:/Users/Esteban/Desktop/becario/imgs/col/1.png" width = "200px"/></br>');
	}else if(ecuacion == 'COL2'){
		//img.src = '..imgs/gasesIdeales/2.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img class="img" src="C:/Users/Esteban/Desktop/becario/imgs/col/2.png" width = "200px"/></br>');
	}else if(ecuacion == 'COL3'){
		form.insertAdjacentHTML("beforeend", '</br><img class="img" src="C:/Users/Esteban/Desktop/becario/imgs/col/3.png" width = "200px"/></br>');
	}else if(ecuacion == 'COL4'){
		//img.src = '..imgs/gasesIdeales/4.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img class="img" src="C:/Users/Esteban/Desktop/becario/imgs/col/4.png" width = "200px"/></br>');
	}else if(ecuacion == 'COL5'){
		//img.src = '..imgs/gasesIdeales/4.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img class="img" src="C:/Users/Esteban/Desktop/becario/imgs/col/5.png" width = "200px"/></br>');
	}
}

function insertImageQUIN(){
	if(ecuacion == 'QUIN1'){ 
		//img.src = 'imgs/gasesIdeales/1.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img class="img" src="C:/Users/Esteban/Desktop/becario/imgs/quin/1.png" width = "200px"/></br>');
	}else if(ecuacion == 'QUIN2'){
		//img.src = '..imgs/gasesIdeales/2.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img class="img" src="C:/Users/Esteban/Desktop/becario/imgs/quin/2.png" width = "200px"/></br>');
	}else if(ecuacion == 'QUIN3'){
		form.insertAdjacentHTML("beforeend", '</br><img class="img" src="C:/Users/Esteban/Desktop/becario/imgs/quin/3.png" width = "200px"/></br>');
	}else if(ecuacion == 'QUIN4'){
		//img.src = '..imgs/gasesIdeales/4.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img class="img" src="C:/Users/Esteban/Desktop/becario/imgs/quin/4.png" width = "200px"/></br>');
	}else if(ecuacion == 'QUIN5'){
		//img.src = '..imgs/gasesIdeales/4.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img class="img" src="C:/Users/Esteban/Desktop/becario/imgs/quin/5.png" width = "200px"/></br>');
	}else if(ecuacion == 'QUIN6'){
		//img.src = '..imgs/gasesIdeales/4.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img class="img" src="C:/Users/Esteban/Desktop/becario/imgs/quin/6.png" width = "200px"/></br>');
	}
}

function insertImageMMN(){
	if(ecuacion == 'MMN1'){ 
		//img.src = 'imgs/gasesIdeales/1.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img class="img" src="C:/Users/Esteban/Desktop/becario/imgs/nnm/molality.png" width = "20%"/></br>');
	}else if(ecuacion == 'MMN2'){
		//img.src = '..imgs/gasesIdeales/2.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img class="img" src="C:/Users/Esteban/Desktop/becario/imgs/nnm/mass_percentage.png" width = "30%"" /></br>');
	}else if(ecuacion == 'MMN3'){
		form.insertAdjacentHTML("beforeend", '</br><img class="img" src="C:/Users/Esteban/Desktop/becario/imgs/nnm/ppm.png" width = "30%"" /></br>');
	}else if(ecuacion == 'MMN4'){
		//img.src = '..imgs/gasesIdeales/4.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img class="img" src="C:/Users/Esteban/Desktop/becario/imgs/nnm/molarity.png" width = "15%"" /></br>');
	}else if(ecuacion == 'MMN5'){
		//img.src = '..imgs/gasesIdeales/4.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img class="img" src="C:/Users/Esteban/Desktop/becario/imgs/nnm/titration.png" width = "20%"" /></br>');
	}else if(ecuacion == 'MMN6'){
		//img.src = '..imgs/gasesIdeales/4.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img class="img" src="C:/Users/Esteban/Desktop/becario/imgs/nnm/moles.png" width = "15%"" /></br>');
	}else if(ecuacion == 'MMN7'){
		//img.src = '..imgs/gasesIdeales/4.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img class="img" src="C:/Users/Esteban/Desktop/becario/imgs/nnm/normality.png" width = "25%"" /></br>');
	}else if(ecuacion == 'MMN8'){
		//img.src = '..imgs/gasesIdeales/4.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img class="img" src="C:/Users/Esteban/Desktop/becario/imgs/nnm/mole_percentage.png" width = "30%"/></br>');
	}else if(ecuacion == 'MMN9'){
		//img.src = '..imgs/gasesIdeales/4.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img class="img" src="C:/Users/Esteban/Desktop/becario/imgs/nnm/ppb.png" width = "30%"/></br>');
	}else if(ecuacion == 'MMN10'){
		//img.src = '..imgs/gasesIdeales/4.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img class="img" src="C:/Users/Esteban/Desktop/becario/imgs/nnm/mass_fraction.png" width = "30%"/></br>');
	}else if(ecuacion == 'MMN11'){
		//img.src = '..imgs/gasesIdeales/4.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img class="img" src="C:/Users/Esteban/Desktop/becario/imgs/nnm/molar_fraction.png" width = "30%"/></br>');
	}
}

function insertImageCCP(){
	if(ecuacion == 'CCP1'){ 
		//img.src = 'imgs/gasesIdeales/1.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img class="img" src="C:/Users/Esteban/Desktop/becario/imgs/ccp/1.png" width = "200px"/></br>');
	}else if(ecuacion == 'CCP2'){
		//img.src = '..imgs/gasesIdeales/2.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img class="img" src="C:/Users/Esteban/Desktop/becario/imgs/ccp/2.png" width = "300px"/></br>');
	}else if(ecuacion == 'CCP3'){
		form.insertAdjacentHTML("beforeend", '</br><img class="img" src="C:/Users/Esteban/Desktop/becario/imgs/ccp/3.png" width = "200px"/></br>');
	}else if(ecuacion == 'CCP4'){
		//img.src = '..imgs/gasesIdeales/4.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img class="img" src="C:/Users/Esteban/Desktop/becario/imgs/ccp/4.png" width = "350px"/></br>');
	}
}

function insertImageCCV(){
	if(ecuacion == 'CCV1'){ 
		//img.src = 'imgs/gasesIdeales/1.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img class="img" src="C:/Users/Esteban/Desktop/becario/imgs/ccv/1.png" width = "350px"/></br>');
	}else if(ecuacion == 'CCV2'){
		//img.src = '..imgs/gasesIdeales/2.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img class="img" src="C:/Users/Esteban/Desktop/becario/imgs/ccv/2.png" width = "400px"/></br>');
	}else if(ecuacion == 'CCV3'){
		form.insertAdjacentHTML("beforeend", '</br><img class="img" src="C:/Users/Esteban/Desktop/becario/imgs/ccv/3.png" width = "350px"/></br>');
	}else if(ecuacion == 'CCV4'){
		//img.src = '..imgs/gasesIdeales/4.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img class="img" src="C:/Users/Esteban/Desktop/becario/imgs/ccv/4.png" width = "300px"/></br>');
	}else if(ecuacion == 'CCV5'){
		//img.src = '..imgs/gasesIdeales/4.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img class="img" src="C:/Users/Esteban/Desktop/becario/imgs/ccv/5.png" width = "350px"/></br>');
	}
}

function insertImageGI(){
	if(ecuacion == 'GI1'){ 
		//img.src = 'imgs/gasesIdeales/1.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img class="img" src="C:/Users/Esteban/Desktop/becario/imgs/gi/1.png" width = "150px"/></br>');
	}else if(ecuacion == 'GI2'){
		//img.src = '..imgs/gasesIdeales/2.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img class="img" src="C:/Users/Esteban/Desktop/becario/imgs/gi/2.png" width = "150px"/></br>');
	}else if(ecuacion == 'GI3'){
		form.insertAdjacentHTML("beforeend", '</br><img class="img" src="C:/Users/Esteban/Desktop/becario/imgs/gi/3.png" width = "150px"/></br>');
	}else if(ecuacion == 'GI4'){
		//img.src = '..imgs/gasesIdeales/4.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img class="img" src="C:/Users/Esteban/Desktop/becario/imgs/gi/4.png" width = "150px"/></br>');
	}else if(ecuacion == 'GI5'){
		//img.src = '..imgs/gasesIdeales/5.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img class="img" src="C:/Users/Esteban/Desktop/becario/imgs/gi/5.png" width = "150px"/></br>');
	}else if(ecuacion == 'GI6'){
		//img.src = '..imgs/gasesIdeales/6.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img class="img" src="C:/Users/Esteban/Desktop/becario/imgs/gi/6.png" width = "150px"/></br>');
	}else if(ecuacion == 'GI7'){
		//img.src = '..imgs/gasesIdeales/7.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img class="img" src="C:/Users/Esteban/Desktop/becario/imgs/gi/7.png" width = "150px"/></br>');
	}else if(ecuacion == 'GI8'){
		//img.src = '..imgs/gasesIdeales/8.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img class="img" src="C:/Users/Esteban/Desktop/becario/imgs/gi/8.png" width = "150px"/></br>');
	}else if(ecuacion == 'GI9'){
		//img.src = '..imgs/gasesIdeales/9.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img class="img" src="C:/Users/Esteban/Desktop/becario/imgs/gi/9.png" width = "150px"/></br>');
	}else if(ecuacion == 'GI10'){
		//img.src = '..imgs/gasesIdeales/10.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img class="img" src="C:/Users/Esteban/Desktop/becario/imgs/gi/10.png" width = "150px"/></br>');
	}
}

function insertFormGI(){
	if(ecuacion == 'GI1'){ 
		insertEcGI1();
	}else if(ecuacion == 'GI2'){
		insertEcGI2();
	}else if(ecuacion == 'GI3'){
		insertEcGI3();
	}else if(ecuacion == 'GI4'){
		insertEcGI4();
	}else if(ecuacion == 'GI5'){
		insertEcGI5();
	}else if(ecuacion == 'GI6'){
		insertEcGI6();
	}else if(ecuacion == 'GI7'){
		insertEcGI7();
	}else if(ecuacion == 'GI8'){
		insertEcGI8();
	}else if(ecuacion == 'GI9'){
		insertEcGI9();
	}else if(ecuacion == 'GI10'){
		insertEcGI10();
	}
}

function insertFormCCP(){
	if(ecuacion == 'CCP1'){ 
		insertEcCCP1();
	}else if(ecuacion == 'CCP2'){
		insertEcCCP2();
	}else if(ecuacion == 'CCP3'){
		insertEcCCP3();
	}else if(ecuacion == 'CCP4'){
		insertEcCCP4();
	}
}

function insertFormCCV(){
	if(ecuacion == 'CCV1'){ 
		insertEcCCV1();
	}else if(ecuacion == 'CCV2'){
		insertEcCCV2();
	}else if(ecuacion == 'CCV3'){
		insertEcCCV3();
	}else if(ecuacion == 'CCV4'){
		insertEcCCV4();
	}else if(ecuacion == 'CCV5'){
		insertEcCCV5();
	}
}

function insertFormMMN(){
	if(ecuacion == 'MMN1'){ 
		insertEcMMN1();
	}else if(ecuacion == 'MMN2'){
		insertEcMMN2();
	}else if(ecuacion == 'MMN3'){
		insertEcMMN3();
	}else if(ecuacion == 'MMN4'){
		insertEcMMN4();
	}else if(ecuacion == 'MMN5'){
		insertEcMMN5();
	}else if(ecuacion == 'MMN6'){
		insertEcMMN6();
	}else if(ecuacion == 'MMN7'){
		insertEcMMN7();
	}else if(ecuacion == 'MMN8'){
		insertEcMMN8();
	}else if(ecuacion == 'MMN9'){
		insertEcMMN9();
	}else if(ecuacion == 'MMN10'){
		insertEcMMN10();
	}else if(ecuacion == 'MMN11'){
		insertEcMMN11();
	}
}

function insertFormQUIN(){
	if(ecuacion == 'QUIN1'){ 
		insertEcQUIN1();
	}else if(ecuacion == 'QUIN2'){
		insertEcQUIN2();
	}else if(ecuacion == 'QUIN3'){
		insertEcQUIN3();
	}else if(ecuacion == 'QUIN4'){
		insertEcQUIN4();
	}else if(ecuacion == 'QUIN5'){
		insertEcQUIN5();
	}else if(ecuacion == 'QUIN6'){
		insertEcQUIN6();
	}
}

function insertFormCOL(){
	if(ecuacion == 'COL1'){ 
		insertEcCOL1();
	}else if(ecuacion == 'COL2'){
		insertEcCOL2();
	}else if(ecuacion == 'COL3'){
		insertEcCOL3();
	}else if(ecuacion == 'COL4'){
		insertEcCOL4();
	}else if(ecuacion == 'COL5'){
		insertEcCOL5();
	}
}

function insertEcCOL1(){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'Tb: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>i: ');		
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>Kb: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>m: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var4" name = "var4" type = "number">');		
	form.insertAdjacentHTML("beforeend", '</br><button class="btn btn-primary btn-lg" id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcCCP1()">Resolver</button>');
}

function insertEcCOL2(){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'Tb<sub>soln</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>Tb<sub>solv</sub>: ');		
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>Tb: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br><button class="btn btn-primary btn-lg" id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcCOL2()">Resolver</button>');
}

function insertEcCOL3(){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'Tf: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>i: ');		
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>Kf: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>m: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var4" name = "var4" type = "number">');		
	form.insertAdjacentHTML("beforeend", '</br><button class="btn btn-primary btn-lg" id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcCCP1()">Resolver</button>');
}

function insertEcCOL4(){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'Tf<sub>soln</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>Tf<sub>solv</sub>: ');		
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>Tf: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br><button class="btn btn-primary btn-lg" id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcCOL4()">Resolver</button>');
}

function insertEcCOL5(){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'pi: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>i: ');		
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>M: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>R: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var4" name = "var4" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>T: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var5" name = "var5" type = "number">');		
	form.insertAdjacentHTML("beforeend", '</br><button class="btn btn-primary btn-lg" id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcCOL5()">Resolver</button>');
}

function insertEcQUIN1(){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'A<sub>0</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>A<sub>f</sub>: ');		
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>K: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>t: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var4" name = "var4" type = "number">');		
	form.insertAdjacentHTML("beforeend", '</br><button class="btn btn-primary btn-lg" id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcQUIN1()">Resolver</button>');
}

function insertEcQUIN2(){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 't<sub>1/2</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>K: ');		
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var2" name = "var2" type = "number">');		
	form.insertAdjacentHTML("beforeend", '</br><button class="btn btn-primary btn-lg" id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcQUIN2()">Resolver</button>');
}

function insertEcQUIN3(){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 't<sub>1/2</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>K: ');		
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>A<sub>0</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var3" name = "var3" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br><button class="btn btn-primary btn-lg" id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcQUIN3()">Resolver</button>');
}

function insertEcQUIN4(){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'A: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>A<sub>0</sub>: ');		
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>K: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>t: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var4" name = "var4" type = "number">');		
	form.insertAdjacentHTML("beforeend", '</br><button class="btn btn-primary btn-lg" id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcQUIN4()">Resolver</button>');
}

function insertEcQUIN5(){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 't<sub>1/2</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>A<sub>0</sub>: ');		
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>K: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var3" name = "var3" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br><button class="btn btn-primary btn-lg" id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcQUIN5()">Resolver</button>');
}

function insertEcQUIN6(){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'A<sub>0</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>A ');		
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>K: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>t: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var4" name = "var4" type = "number">');		
	form.insertAdjacentHTML("beforeend", '</br><button class="btn btn-primary btn-lg" id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcQUIN6()">Resolver</button>');
}

function insertEcMMN1 (){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'm: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>n: ');		
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>kg<sub>solv</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br><button class="btn btn-primary btn-lg" id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcCCP3()">Resolver</button>');
}

function insertEcMMN2 (){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'w: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>w<sub>solute</sub>: ');		
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>w<sub>solvent</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br><button class="btn btn-primary btn-lg" id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcMMN2()">Resolver</button>');
}

function insertEcMMN3 (){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'ppm: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>w<sub>solute</sub>: ');		
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>w<sub>solvent</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br><button class="btn btn-primary btn-lg" id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcMMN3()">Resolver</button>');
}

function insertEcMMN4 (){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'M1: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>V1 ');		
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>M2: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>V2: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var4" name = "var4" type = "number">');		
	form.insertAdjacentHTML("beforeend", '</br><button class="btn btn-primary btn-lg" id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcGI1()">Resolver</button>');
}

function insertEcMMN5 (){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'M: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>n: ');		
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>V: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br><button class="btn btn-primary btn-lg" id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcCCP3()">Resolver</button>');
}

function insertEcMMN6 (){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'n: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>w: ');		
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>MW: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br><button class="btn btn-primary btn-lg" id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcCCP3()">Resolver</button>');
}

function insertEcMMN7 (){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'N: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>w: ');		
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>charge: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>MW: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var4" name = "var4" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>V:');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var5" name = "var5" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br><button class="btn btn-primary btn-lg" id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcMMN7()">Resolver</button>');
}

function insertEcMMN8 (){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'n: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>n<sub>solute</sub>: ');		
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>n<sub>solvent</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br><button class="btn btn-primary btn-lg" id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcMMN2()">Resolver</button>');
}

function insertEcMMN9 (){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'ppb: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>W<sub>solute</sub>: ');		
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>W<sub>solvent</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br><button class="btn btn-primary btn-lg" id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcMMN9()">Resolver</button>');
}

function insertEcMMN10 (){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'X: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>W<sub>solute</sub>: ');		
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>W<sub>solvent</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br><button class="btn btn-primary btn-lg" id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcMMN10()">Resolver</button>');
}

function insertEcMMN11 (){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'Y: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>n<sub>solute</sub>: ');		
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>n<sub>solvent</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br><button class="btn btn-primary btn-lg" id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcMMN10()">Resolver</button>');
}

function insertEcCCV1(){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'q<sub>water</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>m: ');		
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>Cp: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>T: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var4" name = "var4" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br><button class="btn btn-primary btn-lg" id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcCCP1()">Resolver</button>');
}

function insertEcCCV2(){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'q<sub>calorimeter</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>m: ');		
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>Cp<sub>calorimeter</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>T: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var4" name = "var4" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br><button class="btn btn-primary btn-lg" id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcCCP1()">Resolver</button>');
}

function insertEcCCV3(){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'q<sub>rxn</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>q<sub>water</sub>: ');		
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>q<sub>calorimeter</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br><button class="btn btn-primary btn-lg" id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcCCP4()">Resolver</button>');
}

function insertEcCCV4(){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'q<sub>gram</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>q<sub>rxn</sub>: ');		
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>q<sub>sample</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br><button class="btn btn-primary btn-lg" id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcCCP3()">Resolver</button>');
}

function insertEcCCV5(){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'q<sub>molar</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>q<sub>rxn</sub>: ');		
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>q<sub>sample</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>MW<sub>solute</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var4" name = "var4" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br><button class="btn btn-primary btn-lg" id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcCCV5()">Resolver</button>');
}

function insertEcCCP1(){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'q<sub>solution</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>m: ');		
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>s: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>T: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var4" name = "var4" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br><button class="btn btn-primary btn-lg" id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcCCP1()">Resolver</button>');
}

function insertEcCCP2(){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'q<sub>calorimetry</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>C<sub>calorimeter</sub>: ');		
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>T: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br><button class="btn btn-primary btn-lg" id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcCCP2()">Resolver</button>');
}

function insertEcCCP3(){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'q<sub>molar</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>q<sub>reaction</sub>: ');		
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>n<sub>H<sub>2</sub>O</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br><button class="btn btn-primary btn-lg" id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcCCP3()">Resolver</button>');
}

function insertEcCCP4(){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'q<sub>reaction</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>q<sub>solution</sub>: ');		
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>q<sub>calorimeter</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br><button class="btn btn-primary btn-lg" id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcCCP4()">Resolver</button>');
}

function insertEcGI1 (){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'P1: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>V1: ');		
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>P2: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>V2: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var4" name = "var4" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br><button class="btn btn-primary btn-lg" id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcGI1()">Resolver</button>');
}

function insertEcGI2 (){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'P1: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>T1: ');		
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>P2: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>T2: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var4" name = "var4" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br><button class="btn btn-primary btn-lg" id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcGI2()">Resolver</button>');
}

function insertEcGI3 (){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'P1: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>V1: ');		
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>T1: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>P2: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var4" name = "var4" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>V2: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var5" name = "var5" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>T2: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var6" name = "var6" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br><button class="btn btn-primary btn-lg" id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcGI3()">Resolver</button>');
}

function insertEcGI4 (){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'V1: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>T1: ');		
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>V2: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>T2: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var4" name = "var4" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br><button class="btn btn-primary btn-lg" id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcGI2()">Resolver</button>');
}

function insertEcGI5 (){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'X<sub>i</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>n<sub>i</sub>: ');		
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>n<sub>t</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br><button class="btn btn-primary btn-lg" id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcGI5()">Resolver</button>');
}

function insertEcGI6 (){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'p: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>P: ');		
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>MW: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>R: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var4" name = "var4" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>T: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var5" name = "var5" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br><button class="btn btn-primary btn-lg" id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcGI6()">Resolver</button>');
}

function insertEcGI7 (){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'P<sub>i</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>X<sub>i</sub>: ');		
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>P<sub>T</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br><button class="btn btn-primary btn-lg" id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcGI7()">Resolver</button>');
}

function insertEcGI8 (){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'P<sub>A</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>n<sub>A</sub>: ');		
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>R: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>T: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var4" name = "var4" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>V: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var5" name = "var5" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br><button class="btn btn-primary btn-lg" id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcGI8()">Resolver</button>');
}

function insertEcGI9 (){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'u<sub>1</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>u<sub>2</sub>: ');		
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>MW<sub>1</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>MW<sub>2</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var4" name = "var4" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br><button class="btn btn-primary btn-lg" id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcGI9()">Resolver</button>');
}

function insertEcGI10 (){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'u<sub>rms</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>R: ');		
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var2" name = "var2" type = "number" value = "8.314" readonly>');	
	form.insertAdjacentHTML("beforeend", '</br>T: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>MW: ');
	form.insertAdjacentHTML("beforeend", '<input class = "form-control" id = "var4" name = "var4" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br><button class="btn btn-primary btn-lg" id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcGI10()">Resolver</button>');
}


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

