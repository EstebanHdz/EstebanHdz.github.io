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
		form.insertAdjacentHTML("beforeend", '</br><img src="http://quicklatex.com/cache3/0a/ql_534106eca71e9b7b33689bea587f510a_l3.png"/></br>');
	}else if(ecuacion == 'COL2'){
		//img.src = '..imgs/gasesIdeales/2.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img src="http://quicklatex.com/cache3/69/ql_2bb04a70cc654e76585f0ffdf902e069_l3.png" /></br>');
	}else if(ecuacion == 'COL3'){
		form.insertAdjacentHTML("beforeend", '</br><img src="http://quicklatex.com/cache3/9b/ql_d9a288c8d4ee0cf3081aef4fce124e9b_l3.png" /></br>');
	}else if(ecuacion == 'COL4'){
		//img.src = '..imgs/gasesIdeales/4.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img src="http://quicklatex.com/cache3/b4/ql_1853edf3b78f743a303481bb4a6106b4_l3.png" /></br>');
	}else if(ecuacion == 'COL5'){
		//img.src = '..imgs/gasesIdeales/4.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img src="http://quicklatex.com/cache3/bc/ql_114aade448240f0c71408b48a3a92cbc_l3.png" /></br>');
	}
}

function insertImageQUIN(){
	if(ecuacion == 'QUIN1'){ 
		//img.src = 'imgs/gasesIdeales/1.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img src="http://quicklatex.com/cache3/10/ql_29c9df163c9ee128079263b9db9fd410_l3.png"/></br>');
	}else if(ecuacion == 'QUIN2'){
		//img.src = '..imgs/gasesIdeales/2.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img src="http://quicklatex.com/cache3/f1/ql_1fae0a6eec638f630eebe30af6589bf1_l3.png" /></br>');
	}else if(ecuacion == 'QUIN3'){
		form.insertAdjacentHTML("beforeend", '</br><img src="http://quicklatex.com/cache3/27/ql_44d5e2a66450cd98ba77e77f213e9a27_l3.png" /></br>');
	}else if(ecuacion == 'QUIN4'){
		//img.src = '..imgs/gasesIdeales/4.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img src="http://quicklatex.com/cache3/f1/ql_c4dde6f80833d0e7c4f5f896164c15f1_l3.png" /></br>');
	}else if(ecuacion == 'QUIN5'){
		//img.src = '..imgs/gasesIdeales/4.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img src="http://quicklatex.com/cache3/8f/ql_9d779c05ecdf56080b570aa89d823d8f_l3.png" /></br>');
	}else if(ecuacion == 'QUIN6'){
		//img.src = '..imgs/gasesIdeales/4.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img src="http://quicklatex.com/cache3/28/ql_a740447899618526eb645f2f2b045c28_l3.png" /></br>');
	}
}

function insertImageMMN(){
	if(ecuacion == 'MMN1'){ 
		//img.src = 'imgs/gasesIdeales/1.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img src="http://quicklatex.com/cache3/43/ql_870355ba7af827db732af9fd851e4b43_l3.png"/></br>');
	}else if(ecuacion == 'MMN2'){
		//img.src = '..imgs/gasesIdeales/2.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img src="http://quicklatex.com/cache3/c4/ql_f42d81f536d3662f644c7280f66be7c4_l3.png" /></br>');
	}else if(ecuacion == 'MMN3'){
		form.insertAdjacentHTML("beforeend", '</br><img src="http://quicklatex.com/cache3/6e/ql_8c101fb7160d844f9242d445c01d666e_l3.png" /></br>');
	}else if(ecuacion == 'MMN4'){
		//img.src = '..imgs/gasesIdeales/4.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img src="http://quicklatex.com/cache3/65/ql_351dd578fa90ae82e5bd5b22e38cd165_l3.png" /></br>');
	}else if(ecuacion == 'MMN5'){
		//img.src = '..imgs/gasesIdeales/4.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img src="http://quicklatex.com/cache3/17/ql_f39be28c217f4ded0b40ff39efebf717_l3.png" /></br>');
	}else if(ecuacion == 'MMN6'){
		//img.src = '..imgs/gasesIdeales/4.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img src="http://quicklatex.com/cache3/bc/ql_beb80058b9de9550f9c4ad12340650bc_l3.png" /></br>');
	}else if(ecuacion == 'MMN7'){
		//img.src = '..imgs/gasesIdeales/4.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img src="http://quicklatex.com/cache3/40/ql_be642aae62642afe30778f3811f90c40_l3.png" /></br>');
	}
}

function insertImageCCP(){
	if(ecuacion == 'CCP1'){ 
		//img.src = 'imgs/gasesIdeales/1.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img src="http://quicklatex.com/cache3/73/ql_f1d1da0196aa22065ced369413b46173_l3.png"/></br>');
	}else if(ecuacion == 'CCP2'){
		//img.src = '..imgs/gasesIdeales/2.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img src="http://quicklatex.com/cache3/a5/ql_a1c867be6c0f637da4a0a9c1cbc7c6a5_l3.png" /></br>');
	}else if(ecuacion == 'CCP3'){
		form.insertAdjacentHTML("beforeend", '</br><img src="http://quicklatex.com/cache3/30/ql_152e7813a52c6d50e7cedaac09ef9530_l3.png" /></br>');
	}else if(ecuacion == 'CCP4'){
		//img.src = '..imgs/gasesIdeales/4.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img src="http://quicklatex.com/cache3/05/ql_deab3bcc33c99c69cee705ceb53c6805_l3.png" /></br>');
	}
}

function insertImageCCV(){
	if(ecuacion == 'CCV1'){ 
		//img.src = 'imgs/gasesIdeales/1.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img src="http://quicklatex.com/cache3/94/ql_e3d6c213ffab4bd2acb56148fec0a494_l3.png"/></br>');
	}else if(ecuacion == 'CCV2'){
		//img.src = '..imgs/gasesIdeales/2.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img src="http://quicklatex.com/cache3/ed/ql_43088aed3cb0564fd06396ca6bb320ed_l3.png" /></br>');
	}else if(ecuacion == 'CCV3'){
		form.insertAdjacentHTML("beforeend", '</br><img src="http://quicklatex.com/cache3/7a/ql_9e9d044421a2692ca2078a035c65af7a_l3.png" /></br>');
	}else if(ecuacion == 'CCV4'){
		//img.src = '..imgs/gasesIdeales/4.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img src="http://quicklatex.com/cache3/2c/ql_0ff32297f86e518482afc44a7ad9232c_l3.png" /></br>');
	}else if(ecuacion == 'CCV5'){
		//img.src = '..imgs/gasesIdeales/4.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img src="http://quicklatex.com/cache3/b1/ql_db85f5e71ca83b9401a82764490474b1_l3.png" /></br>');
	}
}

function insertImageGI(){
	if(ecuacion == 'GI1'){ 
		//img.src = 'imgs/gasesIdeales/1.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img src="http://latex.codecogs.com/gif.latex?P_{1}V_{1}&space;=&space;P_{2}V_{2}" title="P_{1}V_{1} = P_{2}V_{2}" /></br>');
	}else if(ecuacion == 'GI2'){
		//img.src = '..imgs/gasesIdeales/2.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img src="http://quicklatex.com/cache3/1f/ql_a8778c7377434fb82bdbb171e829f71f_l3.png" /></br>');
	}else if(ecuacion == 'GI3'){
		form.insertAdjacentHTML("beforeend", '</br><img src="http://quicklatex.com/cache3/11/ql_9975d7ce927dca2bbacf0b173182ba11_l3.png" /></br>');
	}else if(ecuacion == 'GI4'){
		//img.src = '..imgs/gasesIdeales/4.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img src="http://quicklatex.com/cache3/45/ql_1e95551e16bafc8d6f411d7baa43db45_l3.png" /></br>');
	}else if(ecuacion == 'GI5'){
		//img.src = '..imgs/gasesIdeales/5.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img src="http://quicklatex.com/cache3/ed/ql_f088934b4fd5d91f281b5e15301393ed_l3.png" /></br>');
	}else if(ecuacion == 'GI6'){
		//img.src = '..imgs/gasesIdeales/6.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img src="http://quicklatex.com/cache3/a1/ql_1e58f6ac4e8546875108641cd2ffd6a1_l3.png" /></br>');
	}else if(ecuacion == 'GI7'){
		//img.src = '..imgs/gasesIdeales/7.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img src="http://quicklatex.com/cache3/2e/ql_1ce58931864043cb3e5426738def522e_l3.png" /></br>');
	}else if(ecuacion == 'GI8'){
		//img.src = '..imgs/gasesIdeales/8.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img src="http://quicklatex.com/cache3/76/ql_459f2cd9c6ce956c4d2dc2a1e80a0176_l3.png" /></br>');
	}else if(ecuacion == 'GI9'){
		//img.src = '..imgs/gasesIdeales/9.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img src="http://quicklatex.com/cache3/03/ql_f24fafe9a7fbeb1ef1f285dc47823e03_l3.png" /></br>');
	}else if(ecuacion == 'GI10'){
		//img.src = '..imgs/gasesIdeales/10.jpg';
		form.insertAdjacentHTML("beforeend", '</br><img src="http://quicklatex.com/cache3/d7/ql_4ffec5e43770c4a53c03a7b0dba4e0d7_l3.png" /></br>');
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
	form.insertAdjacentHTML("beforeend", '<input id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>i: ');		
	form.insertAdjacentHTML("beforeend", '<input id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>Kb: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>m: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var4" name = "var4" type = "number">');		
	form.insertAdjacentHTML("beforeend", '</br><button id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcCOL1()">Resolver</button>');
}

function insertEcCOL2(){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'Tb<sub>soln</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>Tb<sub>solv</sub>: ');		
	form.insertAdjacentHTML("beforeend", '<input id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>Tb: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br><button id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcCOL2()">Resolver</button>');
}

function insertEcCOL3(){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'Tf: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>i: ');		
	form.insertAdjacentHTML("beforeend", '<input id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>Kf: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>m: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var4" name = "var4" type = "number">');		
	form.insertAdjacentHTML("beforeend", '</br><button id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcCOL3()">Resolver</button>');
}

function insertEcCOL4(){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'Tf<sub>soln</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>Tf<sub>solv</sub>: ');		
	form.insertAdjacentHTML("beforeend", '<input id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>Tf: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br><button id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcCOL4()">Resolver</button>');
}

function insertEcCOL5(){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'pi: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>i: ');		
	form.insertAdjacentHTML("beforeend", '<input id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>M: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>R: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var4" name = "var4" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>T: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var4" name = "var5" type = "number">');		
	form.insertAdjacentHTML("beforeend", '</br><button id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcCOL5()">Resolver</button>');
}

function insertEcQUIN1(){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'A<sub>0</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>A<sub>f</sub>: ');		
	form.insertAdjacentHTML("beforeend", '<input id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>K: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>t: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var4" name = "var4" type = "number">');		
	form.insertAdjacentHTML("beforeend", '</br><button id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcQUIN1()">Resolver</button>');
}

function insertEcQUIN2(){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 't<sub>1/2</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>K: ');		
	form.insertAdjacentHTML("beforeend", '<input id = "var2" name = "var2" type = "number">');		
	form.insertAdjacentHTML("beforeend", '</br><button id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcQUIN2()">Resolver</button>');
}

function insertEcQUIN3(){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 't<sub>1/2</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>K: ');		
	form.insertAdjacentHTML("beforeend", '<input id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>A<sub>0</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var3" name = "var3" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br><button id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcQUIN3()">Resolver</button>');
}

function insertEcQUIN4(){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'A: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>A<sub>0</sub>: ');		
	form.insertAdjacentHTML("beforeend", '<input id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>K: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>t: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var4" name = "var4" type = "number">');		
	form.insertAdjacentHTML("beforeend", '</br><button id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcQUIN4()">Resolver</button>');
}

function insertEcQUIN5(){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 't<sub>1/2</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>A<sub>0</sub>: ');		
	form.insertAdjacentHTML("beforeend", '<input id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>K: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var3" name = "var3" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br><button id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcQUIN5()">Resolver</button>');
}

function insertEcQUIN6(){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'A<sub>0</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>A ');		
	form.insertAdjacentHTML("beforeend", '<input id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>K: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>t: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var4" name = "var4" type = "number">');		
	form.insertAdjacentHTML("beforeend", '</br><button id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcQUIN6()">Resolver</button>');
}

function insertEcMMN1 (){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'm: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>n: ');		
	form.insertAdjacentHTML("beforeend", '<input id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>kg<sub>solv</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br><button id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcCCP3()">Resolver</button>');
}

function insertEcMMN2 (){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'w: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>w<sub>solute</sub>: ');		
	form.insertAdjacentHTML("beforeend", '<input id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>w<sub>solvent</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br><button id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcMMN2()">Resolver</button>');
}

function insertEcMMN3 (){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'ppm: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>w<sub>solute</sub>: ');		
	form.insertAdjacentHTML("beforeend", '<input id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>w<sub>solvent</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br><button id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcMMN3()">Resolver</button>');
}

function insertEcMMN4 (){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'M1: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>V1 ');		
	form.insertAdjacentHTML("beforeend", '<input id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>M2: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>V2: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var4" name = "var4" type = "number">');		
	form.insertAdjacentHTML("beforeend", '</br><button id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcGI1()">Resolver</button>');
}

function insertEcMMN5 (){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'M: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>n: ');		
	form.insertAdjacentHTML("beforeend", '<input id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>V: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br><button id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcCCP3()">Resolver</button>');
}

function insertEcMMN6 (){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'n: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>w: ');		
	form.insertAdjacentHTML("beforeend", '<input id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>MW: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br><button id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcCCP3()">Resolver</button>');
}

function insertEcMMN7 (){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'N: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>w: ');		
	form.insertAdjacentHTML("beforeend", '<input id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>charge: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>MW: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var4" name = "var4" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>V:');
	form.insertAdjacentHTML("beforeend", '<input id = "var5" name = "var5" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br><button id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcMMN7()">Resolver</button>');
}

function insertEcCCV1(){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'q<sub>water</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>m: ');		
	form.insertAdjacentHTML("beforeend", '<input id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>Cp: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>T: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var4" name = "var4" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br><button id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcCCP1()">Resolver</button>');
}

function insertEcCCV2(){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'q<sub>calorimeter</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>m: ');		
	form.insertAdjacentHTML("beforeend", '<input id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>Cp<sub>calorimeter</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>T: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var4" name = "var4" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br><button id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcCCP1()">Resolver</button>');
}

function insertEcCCV3(){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'q<sub>rxn</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>q<sub>water</sub>: ');		
	form.insertAdjacentHTML("beforeend", '<input id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>q<sub>calorimeter</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br><button id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcCCP4()">Resolver</button>');
}

function insertEcCCV4(){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'q<sub>gram</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>q<sub>rxn</sub>: ');		
	form.insertAdjacentHTML("beforeend", '<input id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>q<sub>sample</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br><button id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcCCP3()">Resolver</button>');
}

function insertEcCCV5(){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'q<sub>molar</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>q<sub>rxn</sub>: ');		
	form.insertAdjacentHTML("beforeend", '<input id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>q<sub>sample</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>MW<sub>solute</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var4" name = "var4" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br><button id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcCCV5()">Resolver</button>');
}

function insertEcCCP1(){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'q<sub>solution</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>m: ');		
	form.insertAdjacentHTML("beforeend", '<input id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>s: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>T: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var4" name = "var4" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br><button id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcCCP1()">Resolver</button>');
}

function insertEcCCP2(){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'q<sub>calorimetry</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>C<sub>calorimeter</sub>: ');		
	form.insertAdjacentHTML("beforeend", '<input id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>T: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br><button id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcCCP2()">Resolver</button>');
}

function insertEcCCP3(){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'q<sub>molar</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>q<sub>reaction</sub>: ');		
	form.insertAdjacentHTML("beforeend", '<input id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>n<sub>H<sub>2</sub>O</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br><button id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcCCP3()">Resolver</button>');
}

function insertEcCCP4(){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'q<sub>reaction</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>q<sub>solution</sub>: ');		
	form.insertAdjacentHTML("beforeend", '<input id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>q<sub>calorimeter</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br><button id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcCCP4()">Resolver</button>');
}

function insertEcGI1 (){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'P1: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>V1: ');		
	form.insertAdjacentHTML("beforeend", '<input id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>P2: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>V2: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var4" name = "var4" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br><button id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcGI1()">Resolver</button>');
}

function insertEcGI2 (){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'P1: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>T1: ');		
	form.insertAdjacentHTML("beforeend", '<input id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>P2: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>T2: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var4" name = "var4" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br><button id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcGI2()">Resolver</button>');
}

function insertEcGI3 (){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'P1: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>V1: ');		
	form.insertAdjacentHTML("beforeend", '<input id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>T1: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>P2: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var4" name = "var4" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>V2: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var5" name = "var5" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>T2: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var6" name = "var6" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br><button id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcGI3()">Resolver</button>');
}

function insertEcGI4 (){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'V1: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>T1: ');		
	form.insertAdjacentHTML("beforeend", '<input id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>V2: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>T2: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var4" name = "var4" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br><button id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcGI2()">Resolver</button>');
}

function insertEcGI5 (){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'X<sub>i</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>n<sub>i</sub>: ');		
	form.insertAdjacentHTML("beforeend", '<input id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>n<sub>t</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br><button id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcGI5()">Resolver</button>');
}

function insertEcGI6 (){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'p: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>P: ');		
	form.insertAdjacentHTML("beforeend", '<input id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>MW: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>R: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var4" name = "var4" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>T: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var5" name = "var5" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br><button id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcGI6()">Resolver</button>');
}

function insertEcGI7 (){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'P<sub>i</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>X<sub>i</sub>: ');		
	form.insertAdjacentHTML("beforeend", '<input id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>P<sub>T</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br><button id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcGI7()">Resolver</button>');
}

function insertEcGI8 (){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'P<sub>A</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>n<sub>A</sub>: ');		
	form.insertAdjacentHTML("beforeend", '<input id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>R: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>T: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var4" name = "var4" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>V: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var5" name = "var5" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br><button id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcGI8()">Resolver</button>');
}

function insertEcGI9 (){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'u<sub>1</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>u<sub>2</sub>: ');		
	form.insertAdjacentHTML("beforeend", '<input id = "var2" name = "var2" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br>MW<sub>1</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>MW<sub>2</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var4" name = "var4" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br><button id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcGI9()">Resolver</button>');
}

function insertEcGI10 (){
	var src = document.getElementById("form");
	form.insertAdjacentHTML("beforeend", 'u<sub>rms</sub>: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var1" name = "var1" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>R: ');		
	form.insertAdjacentHTML("beforeend", '<input id = "var2" name = "var2" type = "number" value = "8.314" readonly>');	
	form.insertAdjacentHTML("beforeend", '</br>T: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var3" name = "var3" type = "number">');
	form.insertAdjacentHTML("beforeend", '</br>MW: ');
	form.insertAdjacentHTML("beforeend", '<input id = "var4" name = "var4" type = "number">');	
	form.insertAdjacentHTML("beforeend", '</br><button id = "buttonType" type = "submit" form = "getType" value = "Type" onclick="solveEcGI10()">Resolver</button>');
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

