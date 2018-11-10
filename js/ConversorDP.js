function startPage(){
	document.getElementById("units").style.display = "none";
}

function getConversorType(){	
	var e = document.getElementById("types");
	var type = e.value;

	var element = document.getElementById("unitsButton");
	element.innerHTML = "";
	document.getElementById("selectUnits").innerHTML = "";
	document.getElementById("units").style.display = 'initial';
	
	if(type == 1){		
		HTMLLongitud();
		element.insertAdjacentHTML('beforeend', '<button class="btn btn-primary" id="unitButton" type = "submit" form = "getUnits" value = "Units" onclick = "convertLongitud()" data-toggle="modal" data-target="#resultadoModal">Convertir!</button>' );
	}else if(type == 2){
		HTMLTemperatura();
		element.insertAdjacentHTML('beforeend', '<button class="btn btn-primary" id="unitButton" type = "submit" form = "getUnits" value = "Units" onclick = "convertTemperatura()" data-toggle="modal" data-target="#resultadoModal">Convertir!</button>' );
	}else if(type == 3){
		HTMLMasa();
		element.insertAdjacentHTML('beforeend', '<button class="btn btn-primary" id="unitButton" type = "submit" form = "getUnits" value = "Units" onclick = "convertMasa()" data-toggle="modal" data-target="#resultadoModal">Convertir!</button>' );
	}else if(type == 4){
		HTMLVolumen();
		element.insertAdjacentHTML('beforeend', '<button class="btn btn-primary" id="unitButton" type = "submit" form = "getUnits" value = "Units" onclick = "convertVolumen()" data-toggle="modal" data-target="#resultadoModal">Convertir!</button>' );
	}else if (type == 5){
		HTMLArea();
		element.insertAdjacentHTML('beforeend', '<button class="btn btn-primary" id="unitButton" type = "submit" form = "getUnits" value = "Units" onclick = "convertArea()" data-toggle="modal" data-target="#resultadoModal">Convertir!</button>' );
	}else if(type == 6){
		HTMLPresion();
		element.insertAdjacentHTML('beforeend', '<button class="btn btn-primary" id="unitButton" type = "submit" form = "getUnits" value = "Units" onclick = "convertPresion()" data-toggle="modal" data-target="#resultadoModal">Convertir!</button>' );
	}else if(type == 7){
		HTMLFuerza();
		element.insertAdjacentHTML('beforeend', '<button class="btn btn-primary" id="unitButton" type = "submit" form = "getUnits" value = "Units" onclick = "convertFuerza()" data-toggle="modal" data-target="#resultadoModal">Convertir!</button>' );
	}else if(type == 8){
		HTMLAceleracion();
		element.insertAdjacentHTML('beforeend', '<button class="btn btn-primary" id="unitButton" type = "submit" form = "getUnits" value = "Units" onclick = "convertAceleracion()" data-toggle="modal" data-target="#resultadoModal">Convertir!</button>' );
	}else if(type == 9){
		HTMLDensidad();
		element.insertAdjacentHTML('beforeend', '<button class="btn btn-primary" id="unitButton" type = "submit" form = "getUnits" value = "Units" onclick = "convertDensidad()" data-toggle="modal" data-target="#resultadoModal">Convertir!</button>' );
	}else if(type == 10){
		HTMLEnergia();
		element.insertAdjacentHTML('beforeend', '<button class="btn btn-primary" id="unitButton" type = "submit" form = "getUnits" value = "Units" onclick = "convertEnergia()" data-toggle="modal" data-target="#resultadoModal">Convertir!</button>' );		
	}else if(type == 11){
		HTMLFlujo();
		element.insertAdjacentHTML('beforeend', '<button class="btn btn-primary" id="unitButton" type = "submit" form = "getUnits" value = "Units" onclick = "convertFlujo()" data-toggle="modal" data-target="#resultadoModal">Convertir!</button>' );	
	}else if(type == 12){
		HTMLPotencia();
		element.insertAdjacentHTML('beforeend', '<button class="btn btn-primary" id="unitButton" type = "submit" form = "getUnits" value = "Units" onclick = "convertPotencia()" data-toggle="modal" data-target="#resultadoModal">Convertir!</button>' );	
	}else if(type == 13){
		HTMLVelocidad();
		element.insertAdjacentHTML('beforeend', '<button class="btn btn-primary" id="unitButton" type = "submit" form = "getUnits" value = "Units" onclick = "convertVelocidad()" data-toggle="modal" data-target="#resultadoModal">Convertir!</button>' );
	}else if(type == 14){
		HTMLCoeficiente();
		element.insertAdjacentHTML('beforeend', '<button class="btn btn-primary" id="unitButton" type = "submit" form = "getUnits" value = "Units" onclick = "convertCoeficiente()" data-toggle="modal" data-target="#resultadoModal">Convertir!</button>' );
	}else if(type == 15){
		HTMLConductividad();
		element.insertAdjacentHTML('beforeend', '<button class="btn btn-primary" id="unitButton" type = "submit" form = "getUnits" value = "Units" onclick = "convertConductividad()" data-toggle="modal" data-target="#resultadoModal">Convertir!</button>' );
	}else if(type == 16){
		HTMLEspecifico();
		element.insertAdjacentHTML('beforeend', '<button class="btn btn-primary" id="unitButton" type = "submit" form = "getUnits" value = "Units" onclick = "convertEspecifico()" data-toggle="modal" data-target="#resultadoModal">Convertir!</button>' );
	}else if(type == 17){
		HTMLCalor();
		element.insertAdjacentHTML('beforeend', '<button class="btn btn-primary" id="unitButton" type = "submit" form = "getUnits" value = "Units" onclick = "convertCalor()" data-toggle="modal" data-target="#resultadoModal">Convertir!</button>' );
	}else if(type == 18){
		HTMLTasa();
		element.insertAdjacentHTML('beforeend', '<button class="btn btn-primary" id="unitButton" type = "submit" form = "getUnits" value = "Units" onclick = "convertTasa()" data-toggle="modal" data-target="#resultadoModal">Convertir!</button>' );
	}
}

function HTMLLongitud(){
	var element = document.getElementById("selectUnits");
	htmlString = "<option value = '1'>cm</option><option value = '2'>m</option><option value = '3'>km</option><option value = '4'>in</option><option value = '5'>ft</option><option value = '6'>yd</option><option value = '7'>millas</option>";

	element.insertAdjacentHTML('afterbegin', htmlString);
}

function HTMLTemperatura(){
	var element = document.getElementById("selectUnits");
	htmlString = "<option value = '1'>°C</option><option value = '2'>K</option><option value = '3'>°F</option><option value = '4'>R</option>";

	element.insertAdjacentHTML('afterbegin', htmlString);
}

function HTMLMasa(){
	var element = document.getElementById("selectUnits");
	htmlString = "<option value = '1'>ton</option><option value = '2'>kg</option><option value = '3'>gr</option><option value = '4'>lb</option><option value = '5'>onz</option>";

	element.insertAdjacentHTML('afterbegin', htmlString);
}

function HTMLVolumen(){
	var element = document.getElementById("selectUnits");
	htmlString = "<option value = '1'>cm&sup3</option><option value = '2'>L</option><option value = '3'>m&sup3</option><option value = '4'>onz</option><option value = '5'>gal</option><option value = '6'>in&sup3</option><option value = '7'>ft&sup3</option><option value = '8'>yd&sup3</option><option value = '9'>milla&sup3</option>";

	element.insertAdjacentHTML('afterbegin', htmlString);
}

function HTMLArea(){
	var element = document.getElementById("selectUnits");
	htmlString = "<option value = '1'>cm&sup2</option><option value = '2'>m&sup2</option><option value = '3'>km&sup2</option><option value = '4'>in&sup2</option><option value = '5'>ft&sup2</option><option value = '6'>yd&sup2</option><option value = '7'>milla&sup2</option><option value = '8'>hec&sup2</option>";

	element.insertAdjacentHTML('afterbegin', htmlString);
}

function HTMLPresion(){
	var element = document.getElementById("selectUnits");
	htmlString = "<option value = '1'>pascal</option><option value = '2'>kPa</option><option value = '3'>Mpa</option><option value = '4'>atm</option><option value = '5'>bar</option><option value = '6'>mmHg</option><option value = '7'>Psia</option><option value = '8'>lbft</option>";

	element.insertAdjacentHTML('afterbegin', htmlString);
}

function HTMLFuerza(){
	var element = document.getElementById("selectUnits");
	htmlString = "<option value = '1'>N</option><option value = '2'>dina</option><option value = '3'>kgf</option><option value = '4'>lbf</option><option value = '5'>poundal</option>";

	element.insertAdjacentHTML('afterbegin', htmlString);
}

function HTMLAceleracion(){
	var element = document.getElementById("selectUnits");
	htmlString = "<option value = '1'>cm/s&sup2</option><option value = '2'>m/s&sup2</option><option value = '3'>km/h&sup2</option><option value = '4'>in/s&sup2</option><option value = '5'>ft/s&sup2</option><option value = '6'>milla/h&sup2</option>";

	element.insertAdjacentHTML('afterbegin', htmlString);
}

function HTMLDensidad(){
	var element = document.getElementById("selectUnits");
	htmlString = "<option value = '1'>gr/cm&sup3</option><option value = '2'>kg/L</option><option value = '3'>kg/m&sup3</option><option value = '4'>lb/in&sup3</option><option value = '5'>lb/ft&sup3</option>";

	element.insertAdjacentHTML('afterbegin', htmlString);
}

function HTMLEnergia(){
	var element = document.getElementById("selectUnits");
	htmlString = "<option value = '1'>J</option><option value = '2'>kJ</option><option value = '3'>Nm</option><option value = '4'>kPa.m&sup3</option><option value = '5'>kW/h</option><option value = '6'>cal</option><option value = '7'>Cal</option><option value = '8'>kJ_kg</option><option value = '9'>Psia.ft&sup3</option><option value = '10'>lbf.ft</option><option value = '11'>BTU</option><option value = '12'>BTU_lb</option><option value = '13'>ft&sup2_s&sup2</option><option value = '14'>termia</option>";

	element.insertAdjacentHTML('afterbegin', htmlString);
}

function HTMLFlujo(){
	var element = document.getElementById("selectUnits");
	htmlString = "<option value = '1'>W_cm&sup2</option><option value = '2'>W_m&sup2</option><option value = '3'>BTU_htf&sup2</option>";

	element.insertAdjacentHTML('afterbegin', htmlString);
}

function HTMLPotencia(){
	var element = document.getElementById("selectUnits");
	htmlString = "<option value = '1'>W</option><option value = '2'>Js</option><option value = '3'>kW</option><option value = '4'>hp</option><option value = '5'>BTUh</option><option value = '6'>BTUmin</option><option value = '7'>BTUs</option><option value = '8'>lbfts</option><option value = '9'>hpcald</option><option value = '10'>kJh</option><option value = '11'>Tonrefri</option>";

	element.insertAdjacentHTML('afterbegin', htmlString);
}

function HTMLVelocidad(){
	var element = document.getElementById("selectUnits");
	htmlString = "<option value = '1'>cm/s</option><option value = '2'>m/s</option><option value = '3'>km/h</option><option value = '4'>in/s</option><option value = '5'>ft/s</option><option value = '6'>milla/h</option>";

	element.insertAdjacentHTML('afterbegin', htmlString);
}

function HTMLCoeficiente(){
	var element = document.getElementById("selectUnits");
	htmlString = "<option value = '1'>W/m&sup2 * °C</option><option value = '2'>W/m&sup2 * F</option><option value = '3'>BTU/h * ft&sup2 * F</option>";

	element.insertAdjacentHTML('afterbegin', htmlString);
}

function HTMLConductividad(){
	var element = document.getElementById("selectUnits");
	htmlString = "<option value = '1'>W/m * °C</option><option value = '2'>W/m * K</option><option value = '3'>BTU/h * ft * F</option>";

	element.insertAdjacentHTML('afterbegin', htmlString);
}

function HTMLCalor(){
	var element = document.getElementById("selectUnits");
	htmlString = "<option value = '1'>KJkg°C</option><option value = '2'>KJkg°K</option><option value = '3'>Jg°C</option><option value = '4'>BTUlbm°F</option><option value = '5'>BTUlbm°R</option>";

	element.insertAdjacentHTML('afterbegin', htmlString);
}

function HTMLEspecifico(){
	var element = document.getElementById("selectUnits");
	htmlString = "<option value = '1'>m&sup3 / kg</option><option value = '2'>L/kg</option><option value = '3'>cm&sup3 /g</option><option value = '4'>ft&sup3 /lbm</option>";

	element.insertAdjacentHTML('afterbegin', htmlString);
}

function HTMLTasa(){
	var element = document.getElementById("selectUnits");
	htmlString = "<option value = '1'>cm&sup3 / s</option><option value = '2'>L/min</option><option value = '3'>m&sup3 /s</option><option value = '4'>gal /min	</option><option value = '5'>ft&sup3 /s</option><option value = '6'>ft&sup3 /min</option>";

	element.insertAdjacentHTML('afterbegin', htmlString);
}

function validate(cantidad){	
	if(cantidad == ""){
		var element = document.getElementById("result");
		element.innerHTML = "";
		element.insertAdjacentHTML('afterbegin', "<h4>Favor de ingresar una cantidad valida...</h4>");
		return false;
	}else{
		return true;
	}
}

function convertLongitud(){
	var e = document.getElementById("selectUnits");
	var unit = e.value;
	
	var cantidad = document.getElementById("cantidad").value;
	
	if(validate(cantidad)){
<<<<<<< HEAD
=======
		
		//document.getElementById("resultAlert").style.display = "initial";
		
>>>>>>> 2356c65bc2b584bdb705240a939f5592432daa1e
		var element = document.getElementById("result");
		element.innerHTML = "";
		
		if(unit == 1){
			var m = cantidad/100;
			var km = cantidad/100000;
			var inc = cantidad/2.54;
			var ft = inc/12;
			var yd = inc/36;
			var milla = cantidad/160934.4;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" cm equivalen a:</h4></br>"+expFormat(m)+" m</br>"+expFormat(km)+" km</br>"+expFormat(inc)+" in</br>"+expFormat(ft)+" ft</br>"+expFormat(yd)+" yd</br>"+expFormat(milla)+" miles" );
		}else if(unit == 2){
			var cm = cantidad *100;
			var km = cm/100000;
			var inc = cm/2.54;
			var ft = inc/12;
			var yd = inc/36;
			var milla = cm/160934.4;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" m equivalen a:</h4></br>"+expFormat(cm)+" cm</br>"+expFormat(km)+" km</br>"+expFormat(inc)+" in</br>"+expFormat(ft)+" ft</br>"+expFormat(yd)+" yd</br>"+expFormat(milla)+" miles" );
		}else if(unit == 3){
			var cm = cantidad * 100000;
			var m = cm/100;
			var inc = cm/2.54;
			var ft = inc/12;
			var yd = inc/36;
			var milla = cm/160934.4;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" km equivalen a:</h4></br>"+expFormat(cm)+" cm</br>"+expFormat(m)+" m</br>"+expFormat(inc)+" in</br>"+expFormat(ft)+" ft</br>"+expFormat(yd)+" yd</br>"+expFormat(milla)+" miles" );
		}else if(unit == 4){
			var cm = cantidad * 2.54;     
            var m = cm / 100;
            var km = cm / 100000;
            var ft = cantidad / 12;
            var yd = cantidad / 36;
            var milla = cantidad / 63360;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" in equivalen a:</h4></br>"+expFormat(cm)+" cm</br>"+expFormat(m)+" m</br>"+expFormat(km)+" km</br>"+expFormat(ft)+" ft</br>"+expFormat(yd)+" yd</br>"+expFormat(milla)+" miles" );
		}else if(unit == 5){
			var cm = cantidad * 30.48;     
			var m = cm / 100;
			var km = m / 1000;
			var inc = cantidad * 12;
			var yd = inc / 36;
			var milla = inc / 63360;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" ft equivalen a:</h4></br>"+expFormat(cm)+" cm</br>"+expFormat(m)+" m</br>"+expFormat(km)+" km</br>"+expFormat(inc)+" in</br>"+expFormat(yd)+" yd</br>"+expFormat(milla)+" miles" );
		}else if(unit == 6){
			var cm = cantidad * 91.44;     
            var m = cm / 100;
            var km = cm / 100000;
            var inc = cantidad * 36;
            var ft = inc / 12;
            var milla = inc / 63360;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" yd equivalen a:</h4></br>"+expFormat(cm)+" cm</br>"+expFormat(m)+" m</br>"+expFormat(km)+" km</br>"+expFormat(inc)+" in</br>"+expFormat(ft)+" ft</br>"+expFormat(milla)+" miles" );
		}else if(unit == 7){
			var cm = (cantidad * 63360) * 2.54;     
            var m = cm / 100;
            var km = cm / 100000;
            var inc = cantidad * 63360;
            var ft = inc / 12;
            var yd = inc / 36;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" millas equivalen a:</h4></br>"+expFormat(cm)+" cm</br>"+expFormat(m)+" m</br>"+expFormat(km)+" km</br>"+expFormat(inc)+" in</br>"+expFormat(ft)+" ft</br>"+expFormat(yd)+" yd" );
		}
	}	
}

function convertTemperatura(){
	var e = document.getElementById("selectUnits");
	var unit = e.value;
	
	var cantidad = document.getElementById("cantidad").value;
	
	if(validate(cantidad)){
<<<<<<< HEAD
=======
		
		//document.getElementById("resultAlert").style.display = "initial";
		
>>>>>>> 2356c65bc2b584bdb705240a939f5592432daa1e
		var element = document.getElementById("result");
		element.innerHTML = "";
		
		if(unit == 1){
			var Kk = (cantidad + 273.15) *1;     
			var Ff = 9/5 * cantidad + 32;
			var Rr = Ff + 459.67;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" °C equivalen a:</h4></br>"+expFormat(Kk)+" K</br>"+expFormat(Ff)+" °F</br>"+expFormat(Rr)+" R" );
		}else if(unit == 2){
			var C = cantidad - 273.15;     
			var F = 9/5*C + 32;
			var R = F + 459.67;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" K equivalen a:</h4></br>"+expFormat(C)+" °C</br>"+expFormat(F)+" °F</br>"+expFormat(R)+" R" );
		}else if(unit == 3){
			var C = ( cantidad - 32)* 5/9;     
			var K = (C + 273.15)*1;
			var R = (cantidad + 459.67)*1;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" °F equivalen a:</h4></br>"+expFormat(C)+" °C</br>"+expFormat(K)+" K</br>"+expFormat(R)+" R" );
		}else if(unit == 4){
			var F = (cantidad - 459.67) *1;     
			var C = (F - 32)*5/9;
			var K = C + 273.15;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" R equivalen a:</h4></br>"+expFormat(F)+" °F</br>"+expFormat(C)+" °C</br>"+expFormat(K)+" K" );
		}
	}
}

function convertMasa(){
	var e = document.getElementById("selectUnits");
	var unit = e.value;
	
	var cantidad = document.getElementById("cantidad").value;
	
	if(validate(cantidad)){
<<<<<<< HEAD
=======
		
		//document.getElementById("resultAlert").style.display = "initial";
		
>>>>>>> 2356c65bc2b584bdb705240a939f5592432daa1e
		var element = document.getElementById("result");
		element.innerHTML = "";
		
		if(unit == 1){
			var kg = cantidad * 1000;     
			var gr = kg * 1000;
			var lb = kg * 2.20462;
			var onz = lb / 16;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" ton equivalen a:</h4></br>"+expFormat(kg)+" kg</br>"+expFormat(gr)+" gr</br>"+expFormat(lb)+" lb</br>"+expFormat(onz)+" onz");
		}else if(unit == 2){
			var ton = cantidad / 1000;     
			var gr = cantidad / 1000;
			var lb = cantidad * 2.20462;
			var onz = lb / 16;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" kg equivalen a:</h4></br>"+expFormat(ton)+" ton</br>"+expFormat(gr)+" gr</br>"+expFormat(lb)+" lb</br>"+expFormat(onz)+" onz");
		}else if(unit == 3){
			var kg = cantidad / 1000;     
			var ton = kg * 1000;
			var lb = kg * 2.20462;
			var onz = lb / 16;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" gr equivalen a:</h4></br>"+expFormat(kg)+" kg</br>"+expFormat(ton)+" ton</br>"+expFormat(lb)+" lb</br>"+expFormat(onz)+" onz");
		}else if(unit == 4){
			var kg = cantidad / 2.20462;
			var ton = kg * 1000;
			var gr = kg * 1000;     
			var onz = cantidad / 16;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" lb equivalen a:</h4></br>"+expFormat(kg)+" kg</br>"+expFormat(ton)+" ton</br>"+expFormat(gr)+" gr</br>"+expFormat(onz)+" onz");
		}else if(unit == 5){
			var lb = cantidad * 16;
			var kg = lb / 2.20462;
			var ton = kg * 1000;
			var gr = kg * 1000;     
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" onz equivalen a:</h4></br>"+expFormat(kg)+" kg</br>"+expFormat(ton)+" ton</br>"+expFormat(gr)+" gr</br>"+expFormat(lb)+" lb");
		}
	}
}

function convertVolumen(){
	var e = document.getElementById("selectUnits");
	var unit = e.value;
	
	var cantidad = document.getElementById("cantidad").value;
	
	if(validate(cantidad)){
<<<<<<< HEAD
=======
		
		//document.getElementById("resultAlert").style.display = "initial";
		
>>>>>>> 2356c65bc2b584bdb705240a939f5592432daa1e
		var element = document.getElementById("result");
		element.innerHTML = "";
		
		if(unit == 1){
			var L = cantidad / 1000; 
			var m3 = cantidad / 1000000;	
            var onz = ((cantidad / (2.54^3))/(231))*128;
            var gal = (cantidad / (2.54^3))/(231);
            var in3 = cantidad / (2.54^3);
            var ft3 = (cantidad / (30.48^3));
            var yd3 = (cantidad / (91.44^3));
            var milla3 = (cantidad / (160934.4^3)); 
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" cm&sup3 equivalen a:</h4></br>"+expFormat(L)+" L</br>"+expFormat(m3)+" m&sup3</br>"+expFormat(onz)+" onz</br>"+expFormat(gal)+" gal</br>"+expFormat(in3)+" in&sup3</br>"+expFormat(ft3)+" ft&sup3</br>"+expFormat(yd3)+" yd&sup3</br>"+expFormat(milla3)+" milla&sup3" );
		}else if(unit == 2){
			var cm3 = cantidad * 1000;     
            var m3 = cm3 / 1000000;
            var onz = ((cm3 / (2.54^3))/(231))*128;
            var gal = (cm3 / (2.54^3))/(231);
            var in3 = cm3 / (2.54^3);
            var ft3 = (cm3 / (30.48^3));
            var yd3 = (cm3 / (91.44^3));
            var milla3 = (cm3 / (160934.4^3));  
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" L equivalen a:</h4></br>"+expFormat(cm3)+" cm&sup3</br>"+expFormat(m3)+" m&sup3</br>"+expFormat(onz)+" onz</br>"+expFormat(gal)+" gal</br>"+expFormat(in3)+" in&sup3</br>"+expFormat(ft3)+" ft&sup3</br>"+expFormat(yd3)+" yd&sup3</br>"+expFormat(milla3)+" milla&sup3" );
		}else if(unit == 3){
			var cm3 = cantidad * 1000000;
            var L = cm3 / 1000;     
            var onz = ((cm3 / (2.54^3))/(231))*128;
            var gal = (cm3 / (2.54^3))/(231);
            var in3 = cm3 / (2.54^3);
            var ft3 = (cm3 / (30.48^3));
            var yd3 = (cm3 / (91.44^3));
            var milla3 = (cm3 / (160934.4^3));
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" m&sup3 equivalen a:</h4></br>"+expFormat(L)+" L</br>"+expFormat(cm3)+" cm&sup3</br>"+expFormat(onz)+" onz</br>"+expFormat(gal)+" gal</br>"+expFormat(in3)+" in&sup3</br>"+expFormat(ft3)+" ft&sup3</br>"+expFormat(yd3)+" yd&sup3</br>"+expFormat(milla3)+" milla&sup3" );
		}
		else if(unit == 4){
			var cm3 = ((cantidad * (2.54^3))*(231))/128;
			var L = cm3 / 1000;   
            var m3 = cm3 / 1000000;
            var gal = (cm3 / (2.54^3))/(231);
            var in3 = cm3 / (2.54^3);
            var ft3 = (cm3 / 30.48^3);
            var yd3 = (cm3 / 91.44^3);
            var milla3 = (cm3 / 160934.4^3); 
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" onz equivalen a:</h4></br>"+expFormat(L)+" L</br>"+expFormat(m3)+" m&sup3</br>"+expFormat(cm3)+" cm&sup3</br>"+expFormat(gal)+" gal</br>"+expFormat(in3)+" in&sup3</br>"+expFormat(ft3)+" ft&sup3</br>"+expFormat(yd3)+" yd&sup3</br>"+expFormat(milla3)+" milla&sup3" );
		}else if(unit == 5){
			var cm3 = (cantidad * (2.54^3))*(231);
            var L = cm3 / 1000;     
            var m3 = cm3 / 1000000;
            var onz = ((cm3 / (2.54^3))/(231))*128;
            var in3 = cm3 / (2.54^3);
            var ft3 = cm3 / (30.48^3);
            var yd3 = cm3 / (91.44^3);
            var milla3 = (cm3 / (160934.4^3)); 
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" gal equivalen a:</h4></br>"+expFormat(cm3)+" cm&sup3</br>"+expFormat(m3)+" m&sup3</br>"+expFormat(onz)+" onz</br>"+expFormat(L)+" L</br>"+expFormat(in3)+" in&sup3</br>"+expFormat(ft3)+" ft&sup3</br>"+expFormat(yd3)+" yd&sup3</br>"+expFormat(milla3)+" milla&sup3" );
		}else if(unit == 6){
		    var cm3 = cantidad * (2.54^3);
			var L = cm3 / 1000; 
			var m3 = cm3 / 1000000;
			var onz = ((cm3 / (2.54^3))/(231))*128;
			var gal = (cm3 / (2.54^3))/(231);
			var ft3 = (cm3 / 30.48^3);
			var yd3 = (cm3 / 91.44^3);
			var milla3 = (cm3 / (160934.4^3));  
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" in&sup3 equivalen a:</h4></br>"+expFormat(cm3)+" cm&sup3</br>"+expFormat(m3)+" m&sup3</br>"+expFormat(onz)+" onz</br>"+expFormat(gal)+" gal</br>"+expFormat(L)+" L</br>"+expFormat(ft3)+" ft&sup3</br>"+expFormat(yd3)+" yd&sup3</br>"+expFormat(milla3)+" milla&sup3" );
		}else if(unit == 7){
			var cm3 = (cantidad * (28316.846));
            var L = cm3 / 1000;     
            var m3 = cm3 / 1000000;
            var onz = L / 0.0295735296;
            var gal = L / 3.785411784;
            var in3 = cm3 / 16.387;
            var yd3 = (cantidad / 27);
            var milla3 = (cm3 / (160934.4^3));
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" ft&sup3 equivalen a:</h4></br>"+expFormat(cm3)+" cm&sup3</br>"+expFormat(m3)+" m&sup3</br>"+expFormat(onz)+" onz</br>"+expFormat(gal)+" gal</br>"+expFormat(L)+" L</br>"+expFormat(in3)+" in&sup3</br>"+expFormat(yd3)+" yd&sup3</br>"+expFormat(milla3)+" milla&sup3" );
		}else if(unit == 8){
			var cm3 = (cantidad * (91.44^3));
            var L = cm3 / 1000;     
            var m3 = cm3 / 1000000;
            var onz = ((cm3 / (2.54^3))/(231))*128;
            var gal = (cm3 / (2.54^3))/(231);
            var in3 = cm3 / (2.54^3);
            var ft3 = (cm3 / 30.48^3);
            var milla3 = (cm3 / (160934.4^3));
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" yd&sup3 equivalen a:</h4></br>"+expFormat(cm3)+" cm&sup3</br>"+expFormat(m3)+" m&sup3</br>"+expFormat(onz)+" onz</br>"+expFormat(gal)+" gal</br>"+expFormat(L)+" L</br>"+expFormat(in3)+" in&sup3</br>"+expFormat(ft3)+" ft&sup3</br>"+expFormat(milla3)+" milla&sup3");
		}
		else if(unit == 9){
			var cm3 = (cantidad * (160934.4^3));
            var L = cm3 / 1000;     
            var m3 = cm3 / 1000000;
            var onz = ((cm3 / (2.54^3))/(231))*128;
            var gal = (cm3 / (2.54^3))/(231);
            var in3 = cm3 / (2.54^3);
            var ft3 = (cm3 / 30.48^3);
            var yd3 = (cm3 / 91.44^3);
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" mill&sup3 equivalen a:</h4></br>"+expFormat(cm3)+" cm&sup3</br>"+expFormat(m3)+" m&sup3</br>"+expFormat(onz)+" onz</br>"+expFormat(gal)+" gal</br>"+expFormat(L)+" L</br>"+expFormat(in3)+" in&sup3</br>"+expFormat(ft3)+" ft&sup3</br>"+expFormat(yd3)+" yd&sup3" );
		}
	}
}

//PROBLEMA CON IN2
function convertArea(){
	var e = document.getElementById("selectUnits");
	var unit = e.value;
	var cantidad = document.getElementById("cantidad").value;
	
	if(validate(cantidad)){
<<<<<<< HEAD
=======
		
		//document.getElementById("resultAlert").style.display = "initial";
		
>>>>>>> 2356c65bc2b584bdb705240a939f5592432daa1e
		var element = document.getElementById("result");
		element.innerHTML = "";
		
		if(unit == 1){
			var m2 = cantidad / 10000; 
            var km2 = cantidad / 10000000000;
            var in2 = cantidad / (2.54 * 2.54);
            var ft2 = cantidad / (30.48^2);
            var yd2 = cantidad / (91.44^2);
			var milla2 = cantidad / (160934.4^2);
            var hec2 = cantidad / 100000000;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" cm&sup2 equivalen a:</h4></br>"+expFormat(m2)+" m&sup2</br>"+expFormat(km2)+" km&sup2</br>"+expFormat(in2)+" in&sup2</br>"+expFormat(ft2)+" ft&sup2</br>"+expFormat(yd2)+" yd&sup3</br>"+expFormat(milla2)+" milla&sup2</br>"+expFormat(hec2)+" hec&sup2" );
		}else if(unit == 2){
			var cm2 = cantidad * 10000; 
            var km2 = cm2 / 10000000000;
            var in2 = cm2 / (2.54 * 2.54);
            var ft2 = cm2 / (30.48^2);
            var yd2 = cm2 / (91.44^2);
            var milla2 = cm2 / (160934.4^2);
            var hec2 = cm2 / 100000000;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" m&sup2 equivalen a:</h4></br>"+expFormat(cm2)+" cm&sup2</br>"+expFormat(km2)+" km&sup2</br>"+expFormat(in2)+" in&sup2</br>"+expFormat(ft2)+" ft&sup2</br>"+expFormat(yd2)+" yd&sup3</br>"+expFormat(milla2)+" milla&sup2</br>"+expFormat(hec2)+" hec&sup2" );
		}else if(unit == 3){
			var cm2 = cantidad * 10000000000;     
            var m2 = cm2 / 10000;     
            var in2 = cm2 / (2.54 * 2.54);
            var ft2 = cm2 / (30.48^2);
            var yd2 = cm2 / (91.44^2);
            var milla2 = cm2 / (160934.4^2);
            var hec2 = cm2 / 100000000;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" km&sup2 equivalen a:</h4></br>"+expFormat(cm2)+" cm&sup2</br>"+expFormat(m2)+" m&sup2</br>"+expFormat(in2)+" in&sup2</br>"+expFormat(ft2)+" ft&sup2</br>"+expFormat(yd2)+" yd&sup3</br>"+expFormat(milla2)+" milla&sup2</br>"+expFormat(hec2)+" hec&sup2" );
		}
		else if(unit == 4){
			var cen = cantidad * 6.4516;     
			var m2 = cen / 10000;
            var km2 = cen / 10000000000;
            var ft2 = cen / (30.48^2);
            var yd2 = cen / (91.44^2);
			var milla2 = cen / (160934.4^2);
            var hec2 = cen / 100000000;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" km&sup2 equivalen a:</h4></br>"+expFormat(cen)+" cm&sup2</br>"+expFormat(m2)+" m&sup2</br>"+expFormat(km2)+" km&sup2</br>"+expFormat(ft2)+" ft&sup2</br>"+expFormat(yd2)+" yd&sup3</br>"+expFormat(milla2)+" milla&sup2</br>"+expFormat(hec2)+" hec&sup2" );
		}
		else if(unit == 5){
			var cm2 = cantidad * (30.48^2);     
			var m2 = cm2 / 10000;
            var km2 = cm2 / 10000000000;
            var in2 = cm2 / (2.54 * 2.54);
            var yd2 = cm2 / (91.44^2);
			var milla2 = cm2 / (160934.4^2);
            var hec2 = cm2 / 100000000;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" ft&sup2 equivalen a:</h4></br>"+expFormat(cm2)+" cm&sup2</br>"+expFormat(m2)+" m&sup2</br>"+expFormat(km2)+" km&sup2</br>"+expFormat(in2)+" in&sup2</br>"+expFormat(yd2)+" yd&sup3</br>"+expFormat(milla2)+" milla&sup2</br>"+expFormat(hec2)+" hec&sup2" );
		}else if(unit == 6){
			var cm2 = cantidad * (91.44^2);     
			var m2 = cm2 / 10000;
            var km2 = cm2 / 10000000000;
            var in2 = cantidad * 1296;
            var ft2 = cm2 / (30.48^2);
			var milla2 = cm2 / (160934.4^2);
            var hec2 = cm2 / 100000000;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" yd&sup2 equivalen a:</h4></br>"+expFormat(cm2)+" cm&sup2</br>"+expFormat(m2)+" m&sup2</br>"+expFormat(km2)+" km&sup2</br>"+expFormat(in2)+" in&sup2</br>"+expFormat(ft2)+" ft&sup3</br>"+expFormat(milla2)+" milla&sup2</br>"+expFormat(hec2)+" hec&sup2" );
		}else if(unit == 7){
			var cm2 = cantidad * (160934.4^2);     
            var m2 = cm2 / 10000;
            var km2 = cm2 / 10000000000;
            var in2 = cm2 / (2.54 * 2.54);
            var ft2 = cm2 / (30.48^2);
            var yd2 = cm2 / (91.44^2);
            var hec2 = cm2 / 100000000
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" milla&sup2 equivalen a:</h4></br>"+expFormat(cm2)+" cm&sup2</br>"+expFormat(m2)+" m&sup2</br>"+expFormat(km2)+" km&sup2</br>"+expFormat(in2)+" in&sup2</br>"+expFormat(ft2)+" ft&sup3</br>"+expFormat(yd2)+" yd&sup2</br>"+expFormat(hec2)+" hec&sup2" );
		}else if(unit == 8){
			cm2 = cantidad * 100000000;     
            m2 = cm2 / 10000;
            km2 = cm2 / 10000000000;
            in2 = cm2 / (2.54 * 2.54);
            ft2 = cm2 / (30.48^2);
            yd2 = cm2 / (91.44^2);
            milla2 = cm2 / (160934.4^2);
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" hec&sup2 equivalen a:</h4></br>"+expFormat(cm2)+" cm&sup2</br>"+expFormat(m2)+" m&sup2</br>"+expFormat(km2)+" km&sup2</br>"+expFormat(in2)+" in&sup2</br>"+expFormat(ft2)+" ft&sup3</br>"+expFormat(yd2)+" yd&sup2</br>"+expFormat(milla2)+" milla&sup2" );
		}
	}
}

function convertPresion(){
	var e = document.getElementById("selectUnits");
	var unit = e.value;
	
	var cantidad = document.getElementById("cantidad").value;
	
	if(validate(cantidad)){
<<<<<<< HEAD
=======
		
		//document.getElementById("resultAlert").style.display = "initial";
		
>>>>>>> 2356c65bc2b584bdb705240a939f5592432daa1e
		var element = document.getElementById("result");
		element.innerHTML = "";
		
		if(unit == 1){
			var kPa = cantidad / 1000;     
            var Mpa = kPa / 1000;
            var atm = cantidad / 101325;
            var bar = cantidad / 100000;
            var mmHg = atm * 760;
            var Psia = cantidad / 6894.76;
            var lbft = Psia * 144;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" pascal equivalen a:</h4></br>"+expFormat(kPa)+" kPa</br>"+expFormat(Mpa)+" Mpa</br>"+expFormat(atm)+" atm</br>"+expFormat(bar)+" bar</br>"+expFormat(mmHg)+" mmHg</br>"+expFormat(Psia)+" Psia</br>"+expFormat(lbft)+" lbft" );
		}else if(unit == 2){
			var pascal = cantidad * 1000;     
            var Mpa = cantidad / 1000;
            var atm = pascal / 101325;
            var bar = pascal / 100000;
            var mmHg = atm * 760;
            var Psia = pascal / 6894.76;
            var lbft = Psia * 144;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" kPa equivalen a:</h4></br>"+expFormat(pascal)+" Pascal</br>"+expFormat(Mpa)+" Mpa</br>"+expFormat(atm)+" atm</br>"+expFormat(bar)+" bar</br>"+expFormat(mmHg)+" mmHg</br>"+expFormat(Psia)+" Psia</br>"+expFormat(lbft)+" lbft" );
		}else if(unit == 3){
			var pascal = cantidad * 1000000;     
            var kPa = cantidad * 1000;
            var atm = pascal / 101325;
            var bar = pascal / 100000;
            var mmHg = atm * 760;
            var Psia = pascal / 6894.76;
            var lbft = Psia * 144;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" Mpa equivalen a:</h4></br>"+expFormat(pascal)+" Pascal</br>"+expFormat(kPa)+" kPa</br>"+expFormat(atm)+" atm</br>"+expFormat(bar)+" bar</br>"+expFormat(mmHg)+" mmHg</br>"+expFormat(Psia)+" Psia</br>"+expFormat(lbft)+" lbft" );
		}else if(unit == 4){
			var pascal = cantidad * 101325;     
            var kPa = cantidad * 101.325;
            var Mpa = kPa / 1000;
            var bar = pascal / 100000;
            var mmHg = cantidad * 760;
            var Psia = pascal / 6894.76;
            var lbft = Psia * 144;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" atm equivalen a:</h4></br>"+expFormat(pascal)+" Pascal</br>"+expFormat(kPa)+" kPa</br>"+expFormat(Mpa)+" Mpa</br>"+expFormat(bar)+" bar</br>"+expFormat(mmHg)+" mmHg</br>"+expFormat(Psia)+" Psia</br>"+expFormat(lbft)+" lbft" );
		}else if(unit == 5){
			var pascal = cantidad * 100000;     
            var kPa = pascal / 1000;
            var Mpa = kPa / 1000;
            var atm = cantidad / 1.01325;
            var mmHg = atm * 760;
            var Psia = pascal / 6894.76;
            var lbft = Psia * 144
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" bar equivalen a:</h4></br>"+expFormat(pascal)+" Pascal</br>"+expFormat(kPa)+" kPa</br>"+expFormat(Mpa)+" Mpa</br>"+expFormat(atm)+" atm</br>"+expFormat(mmHg)+" mmHg</br>"+expFormat(Psia)+" Psia</br>"+expFormat(lbft)+" lbft" );
		}else if(unit == 6){
			var pascal = (cantidad * 101325) / 760;     
            var kPa = pascal / 1000;
            var Mpa = kPa / 1000;
            var atm = cantidad / 760;
            var bar = pascal / 100000;
            var Psia = pascal / 6894.76;
            var lbft = Psia * 144;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" mmHg equivalen a:</h4></br>"+expFormat(pascal)+" Pascal</br>"+expFormat(kPa)+" kPa</br>"+expFormat(Mpa)+" Mpa</br>"+expFormat(atm)+" atm</br>"+expFormat(bar)+" bar</br>"+expFormat(Psia)+" Psia</br>"+expFormat(lbft)+" lbft" );
		}else if(unit == 7){
			var pascal = cantidad * 6894.76;     
            var kPa = pascal / 1000;
            var Mpa = kPa / 1000;
            var atm = cantidad * 0.068046;
            var bar = pascal / 100000;
            var mmHg = atm * 760;
            var lbft = cantidad * 144;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" Psia equivalen a:</h4></br>"+expFormat(pascal)+" Pascal</br>"+expFormat(kPa)+" kPa</br>"+expFormat(Mpa)+" Mpa</br>"+expFormat(atm)+" atm</br>"+expFormat(bar)+" bar</br>"+expFormat(mmHg)+" mmHg</br>"+expFormat(lbft)+" lbft" );
		}else if(unit == 8){
			var pascal = (cantidad * 6894.76)/144;     
            var kPa = pascal / 1000;
            var Mpa = kPa / 1000;
            var atm = pascal / 101325;
            var bar = pascal / 100000;
            var mmHg = atm * 760;
            var Psia = cantidad / 144;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" lbft equivalen a:</h4></br>"+expFormat(pascal)+" Pascal</br>"+expFormat(kPa)+" kPa</br>"+expFormat(Mpa)+" Mpa</br>"+expFormat(atm)+" atm</br>"+expFormat(bar)+" bar</br>"+expFormat(mmHg)+" mmHg</br>"+expFormat(Psia)+" Psia" );
		}
	}
}

function convertFuerza(){
	var e = document.getElementById("selectUnits");
	var unit = e.value;
	
	var cantidad = document.getElementById("cantidad").value;
	
<<<<<<< HEAD
	if(validate(cantidad)){		
=======
	if(validate(cantidad)){
		
		//document.getElementById("resultAlert").style.display = "initial";
		
>>>>>>> 2356c65bc2b584bdb705240a939f5592432daa1e
		var element = document.getElementById("result");
		element.innerHTML = "";
		
		if(unit == 1){
			var dina = cantidad * 100000;     
            var kgf = cantidad / 9.80665;
            var lbf = cantidad * (.224801);
            var poundal = (cantidad * (.224801)) * (32.174);
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" N equivalen a:</h4></br>"+expFormat(dina)+" dina</br>"+expFormat(kgf)+" kgf</br>"+expFormat(lbf)+" lbf</br>"+expFormat(poundal)+" poundal" );
		}else if(unit == 2){
			var N = cantidad / 100000; 
            var kgf = N / 9.80665;
            var lbf = N * (.224801);
            var poundal = (N * (.224801)) * (32.174);
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" dina equivalen a:</h4></br>"+expFormat(N)+" N</br>"+expFormat(kgf)+" kgf</br>"+expFormat(lbf)+" lbf</br>"+expFormat(poundal)+" poundal" );
		}else if(unit == 3){
			var N =  cantidad * 9.80665;
            var dina = N * 100000;     
            var lbf = N * (.224801);
            var poundal = (N * (.224801)) * (32.174); 
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" kgf equivalen a:</h4></br>"+expFormat(N)+" N</br>"+expFormat(dina)+" dina</br>"+expFormat(lbf)+" lbf</br>"+expFormat(poundal)+" poundal" );
		}else if(unit == 4){
			var N =  cantidad / (.224801);
            var dina = N * 100000;     
            var kgf = N / 9.80665;
            var poundal = (N * (.224801)) * (32.174);
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" lbf equivalen a:</h4></br>"+expFormat(N)+" N</br>"+expFormat(dina)+" dina</br>"+expFormat(kgf)+" kgf</br>"+expFormat(poundal)+" poundal" );
		}else if(unit == 5){
			var N = (cantidad / (.224801)) / (32.174);
            var dina = N * 100000;     
            var kgf = N / 9.80665;
            var lbf = N * (.224801);
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" poundal equivalen a:</h4></br>"+expFormat(N)+" N</br>"+expFormat(dina)+" dina</br>"+expFormat(kgf)+" kgf</br>"+expFormat(lbf)+" lbf" );
		}
	}
}

function convertAceleracion(){
	var e = document.getElementById("selectUnits");
	var unit = e.value;
	
	var cantidad = document.getElementById("cantidad").value;
	
	if(validate(cantidad)){
<<<<<<< HEAD
=======
		
		//document.getElementById("resultAlert").style.display = "initial";
		
>>>>>>> 2356c65bc2b584bdb705240a939f5592432daa1e
		var element = document.getElementById("result");
		element.innerHTML = "";
		
		if(unit == 1){
			var ms2 = (cantidad) / 100;
            var kmh2 = ((cantidad) / 100000) * (3600^2);
            var ins2 = (cantidad) / 2.54;
            var fts2 = (cantidad) / 30.48;
            var millah2 = ((cantidad / 2.54)/63360) * 3600^2;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" cm/s&sup2 equivalen a:</h4></br>"+expFormat(ms2)+" m/s&sup2</br>"+expFormat(kmh2)+" km/h&sup2</br>"+expFormat(ins2)+" in/s&sup2</br>"+expFormat(fts2)+" ft/s&sup2</br>"+expFormat(millah2)+" milla/h&sup2" );
		}else if(unit == 2){
			var cms2 = (cantidad) * 100;
            var kmh2 = ((cms2) / 100000) * (3600^2);
            var ins2 = (cms2) / 2.54;
            var fts2 = (cms2) / 30.48;
            var millah2 =((cms2 / 2.54)/63360) * 3600^2; 
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" m/s&sup2 equivalen a:</h4></br>"+expFormat(cms2)+" cm/s&sup2</br>"+expFormat(kmh2)+" km/h&sup2</br>"+expFormat(ins2)+" in/s&sup2</br>"+expFormat(fts2)+" ft/s&sup2</br>"+expFormat(millah2)+" milla/h&sup2" );
		}else if(unit == 3){
			var cms2 = ((cantidad) * 100000) / (3600^2); 
            var ms2 = (cms2) / 100;
            var ins2 = (cms2) / 2.54;
            var fts2 = (cms2) / 30.48;
            var millah2 = ((cms2 / 2.54)/63360) * 3600^2;  
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" km/s&sup2 equivalen a:</h4></br>"+expFormat(cms2)+" cm/s&sup2</br>"+expFormat(ms2)+" m/h&sup2</br>"+expFormat(ins2)+" in/s&sup2</br>"+expFormat(fts2)+" ft/s&sup2</br>"+expFormat(millah2)+" milla/h&sup2" );
		}else if(unit == 4){
			var cms2 = (cantidad) * 2.54;
            var ms2 = (cms2) / 100;
            var kmh2 = ((cms2) / 100000) * (3600^2);
            var fts2 = (cms2) / 30.48;
            var millah2 = ((cms2 / 2.54)/63360) * 3600^2;  
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" in/s&sup2 equivalen a:</h4></br>"+expFormat(cms2)+" cm/s&sup2</br>"+expFormat(ms2)+" m/h&sup2</br>"+expFormat(kmh2)+" km/h&sup2</br>"+expFormat(fts2)+" ft/s&sup2</br>"+expFormat(millah2)+" milla/h&sup2" );
		}else if(unit == 5){
			var cms2 = (cantidad) * 30.48;
            var ms2 = cms2 / 100;
            var kmh2 = ((cms2) / 100000) * (3600^2);
            var ins2 = (cms2) / 2.54;
            var millah2 = ((cms2 / 2.54)/63360) * 3600^2;

			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" ft/s&sup2 equivalen a:</h4></br>"+expFormat(cms2)+" cm/s&sup2</br>"+expFormat(ms2)+" m/h&sup2</br>"+expFormat(kmh2)+" km/h&sup2</br>"+expFormat(ins2)+" in/s&sup2</br>"+expFormat(millah2)+" milla/h&sup2" );			
		}else if(unit == 6){
			var cms2 = ((cantidad * 2.54)*63360) / 3600^2;
            var ms2 = (cms2) / 100;
            var kmh2 = ((cms2) / 100000) * (3600^2);
            var ins2 = (cms2) / 2.54;
            var fts2 = (cms2) / 30.48;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" milla/h&sup2 equivalen a:</h4></br>"+expFormat(cms2)+" cm/s&sup2</br>"+expFormat(ms2)+" m/h&sup2</br>"+expFormat(kmh2)+" km/h&sup2</br>"+expFormat(ins2)+" in/s&sup2</br>"+expFormat(fts2)+" ft/s&sup2" );			
		}
	}
}

function convertDensidad(){
	var e = document.getElementById("selectUnits");
	var unit = e.value;
	
	var cantidad = document.getElementById("cantidad").value;
	
	if(validate(cantidad)){
<<<<<<< HEAD
=======
		
		//document.getElementById("resultAlert").style.display = "initial";
		
>>>>>>> 2356c65bc2b584bdb705240a939f5592432daa1e
		var element = document.getElementById("result");
		element.innerHTML = "";
		
		if(unit == 1){
			var kgL = cantidad*1;
			var kgm3 = cantidad * 1000;
			var lbin3 = ((cantidad * 2.20462)/1000)*(2.54^3);   
			var lbft3 = ((cantidad * 2.20462)/1000)*(30.48^3);
		
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" gr/cm&sup3 equivalen a:</h4></br>"+expFormat(kgL)+" kg/L</br>"+expFormat(kgm3)+" kg/m&sup3</br>"+expFormat(lbin3)+" lb/in&sup3</br>"+expFormat(lbft3)+" lb/ft&sup3" );
		}else if(unit == 2){
			var grcm3 = cantidad;
			var kgm3 = grcm3 * 1000;
			var lbin3 = ((grcm3 * 2.20462)/1000)*(2.54^3);   
			var lbft3 = ((grcm3 * 2.20462)/1000)*(30.48^3);
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" kg/L equivalen a:</h4></br>"+expFormat(grcm3)+" g/cm&sup3</br>"+expFormat(kgm3)+" kg/m&sup3</br>"+expFormat(lbin3)+" lb/in&sup3</br>"+expFormat(lbft3)+" lb/ft&sup3" );
		}else if(unit == 3){
			var grcm3 = cantidad / 1000;
			var kgL = grcm3;
			var lbin3 = ((grcm3 * 2.20462)/1000)*(2.54^3);   
			var lbft3 = ((grcm3 * 2.20462)/1000)*(30.48^3);
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" kg/m&sup3 equivalen a:</h4></br>"+expFormat(grcm3)+" g/cm&sup3</br>"+expFormat(kgL)+" kg/L</br>"+expFormat(lbin3)+" lb/in&sup3</br>"+expFormat(lbft3)+" lb/ft&sup3" );
		}else if(unit == 4){
			var grcm3 = ((cantidad / 2.20462)*1000)/(2.54^3);
			var kgL = grcm3;
			var kgm3 = grcm3 * 1000;
			var lbft3 = ((grcm3 * 2.20462)/1000)*(30.48^3);
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" lb/in&sup3 equivalen a:</h4></br>"+expFormat(grcm3)+" g/cm&sup3</br>"+expFormat(kgL)+" kg/L</br>"+expFormat(kgm3)+" kg/m&sup3</br>"+expFormat(lbft3)+" lb/ft&sup3" );
		}else if(unit == 5){
			var grcm3 = ((cantidad / 2.20462)*1000)/(30.48^3);
			var kgL = grcm3;
			var kgm3 = grcm3 * 1000;
			var lbin3 = ((grcm3 * 2.20462)/1000)*(2.54^3); 

			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" lb/ft&sup3 equivalen a:</h4></br>"+expFormat(grcm3)+" g/cm&sup3</br>"+expFormat(kgL)+" kg/L</br>"+expFormat(kgm3)+" kg/m&sup3</br>"+expFormat(lbin3)+" lb/in&sup3" );			
		}
	}
}

function convertEnergia(){
	var e = document.getElementById("selectUnits");
	var unit = e.value;
	
	var cantidad = document.getElementById("cantidad").value;
	
	if(validate(cantidad)){
<<<<<<< HEAD
=======
		
		//document.getElementById("resultAlert").style.display = "initial";
		
>>>>>>> 2356c65bc2b584bdb705240a939f5592432daa1e
		var element = document.getElementById("result");
		element.innerHTML = "";
		
		if(unit == 1){
			var kJ = cantidad / 1000;    
            var Nm = cantidad *1; 
            var kPam3 = cantidad / 1000;
            var kWh = (cantidad / 1000)/ 3600;
            var cal = cantidad/ 4.184;
            var Cal = cantidad / 4184;
            var kJ_kg = cantidad;
            var Psiaft3 = (cantidad/ 1055.0559) * 5.40395;
            var lbfft = (((cantidad / 1055.0559) * 5.40395) * 778.169)/5.40395;
            var BTU = cantidad/ 1055.0559;
            var BTU_lb = cantidad * .430;
            var ft2_s2 = (cantidad * .430)*25037;
            var termia = (cantidad / 1055.0559)*100000;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" J equivalen a:</h4></br>"+expFormat(kJ)+" kJ</br>"+expFormat(Nm)+" Nm</br>"+expFormat(kPam3)+" kPsm.m&sup3</br>"+expFormat(kWh)+" kW/h</br>"+expFormat(cal)+" cal</br>"+expFormat(Cal)+" Cal</br>"+expFormat(kJ_kg)+" kJ_kg</br>"+expFormat(Psiaft3)+" Psia.ft&sup3</br>"+expFormat(lbfft)+" lbf.ft</br>"+expFormat(BTU)+" BTU</br>"+expFormat(BTU_lb)+" BTU_lb</br>"+expFormat(ft2_s2)+" ft&sup2_s&sup2</br>"+expFormat(termia)+" termia" );
		}else if(unit == 2){
			var J = cantidad * 1000;
            var Nm = J; 
            var kPam3 = J / 1000;
            var kWh = (J / 1000)/ 3600;
            var cal = J / 4.184;
            var Cal = J / 4184;
            var kJ_kg = J;
            var Psiaft3 = (J / 1055.0559) * 5.40395;
            var lbfft = (((J / 1055.0559) * 5.40395) * 778.169)/5.40395;
            var BTU = J / 1055.0559;
            var BTU_lb = J * .430;
            var ft2_s2 = (J * .430)*25037;
            var termia = (J / 1055.0559)*100000;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" kJ equivalen a:</h4></br>"+expFormat(J)+" J</br>"+expFormat(Nm)+" Nm</br>"+expFormat(kPam3)+" kPsm.m&sup3</br>"+expFormat(kWh)+" kW/h</br>"+expFormat(cal)+" cal</br>"+expFormat(Cal)+" Cal</br>"+expFormat(kJ_kg)+" kJ_kg</br>"+expFormat(Psiaft3)+" Psia.ft&sup3</br>"+expFormat(lbfft)+" lbf.ft</br>"+expFormat(BTU)+" BTU</br>"+expFormat(BTU_lb)+" BTU_lb</br>"+expFormat(ft2_s2)+" ft&sup2_s&sup2</br>"+expFormat(termia)+" termia" );
		}else if(unit == 3){
			var J = cantidad*1;
            var kJ = J / 1000;    
            var kPam3 = J / 1000;
            var kWh = (J / 1000)/ 3600;
            var cal = J / 4.184;
            var Cal = J / 4184;
            var kJ_kg = J;
            var Psiaft3 = (J / 1055.0559) * 5.40395;
            var lbfft = (((J / 1055.0559) * 5.40395) * 778.169)/5.40395;
            var BTU = J / 1055.0559;
            var BTU_lb = J * .430;
            var ft2_s2 = (J * .430)*25037;
            var termia = (J / 1055.0559)*100000;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" Nm equivalen a:</h4></br>"+expFormat(J)+" J</br>"+expFormat(kJ)+" kJ</br>"+expFormat(kPam3)+" kPsm.m&sup3</br>"+expFormat(kWh)+" kW/h</br>"+expFormat(cal)+" cal</br>"+expFormat(Cal)+" Cal</br>"+expFormat(kJ_kg)+" kJ_kg</br>"+expFormat(Psiaft3)+" Psia.ft&sup3</br>"+expFormat(lbfft)+" lbf.ft</br>"+expFormat(BTU)+" BTU</br>"+expFormat(BTU_lb)+" BTU_lb</br>"+expFormat(ft2_s2)+" ft&sup2_s&sup2</br>"+expFormat(termia)+" termia" );
		}else if(unit == 4){
			var J = cantidad * 1000;
            var kJ = J / 1000;    
            var Nm = J ; 
            var kWh = (J / 1000)/ 3600;
            var cal = J / 4.184;
            var Cal = J / 4184;
            var kJ_kg = J;
            var Psiaft3 = (J / 1055.0559) * 5.40395;
            var lbfft = (((J / 1055.0559) * 5.40395) * 778.169)/5.40395;
            var BTU = J / 1055.0559;
            var BTU_lb = J * .430;
            var ft2_s2 = (J * .430)*25037;
            var termia = (J / 1055.0559)*100000;
		
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" kPa.m&sup3 equivalen a:</h4></br>"+expFormat(J)+" J</br>"+expFormat(kJ)+" kJ</br>"+expFormat(Nm)+" Nm</br>"+expFormat(kWh)+" kW/h</br>"+expFormat(cal)+" cal</br>"+expFormat(Cal)+" Cal</br>"+expFormat(kJ_kg)+" kJ_kg</br>"+expFormat(Psiaft3)+" Psia.ft&sup3</br>"+expFormat(lbfft)+" lbf.ft</br>"+expFormat(BTU)+" BTU</br>"+expFormat(BTU_lb)+" BTU_lb</br>"+expFormat(ft2_s2)+" ft&sup2_s&sup2</br>"+expFormat(termia)+" termia" );
		}else if(unit == 5){
			var J = (cantidad * 1000)* 3600;
            var kJ = J / 1000;    
            var Nm = J ; 
            var kPam3 = J / 1000;
            var cal = J / 4.184;
            var Cal = J / 4184;
            var kJ_kg = J;
            var Psiaft3 = (J / 1055.0559) * 5.40395;
            var lbfft = (((J / 1055.0559) * 5.40395) * 778.169)/5.40395;
            var BTU = J / 1055.0559;
            var BTU_lb = J * .430;
            var ft2_s2 = (J * .430)*25037;
            var termia = (J / 1055.0559)*100000;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" kW/h equivalen a:</h4></br>"+expFormat(J)+" J</br>"+expFormat(kJ)+" kJ</br>"+expFormat(Nm)+" Nm</br>"+expFormat(kPam3)+" kPa.m&sup3</br>"+expFormat(cal)+" cal</br>"+expFormat(Cal)+" Cal</br>"+expFormat(kJ_kg)+" kJ_kg</br>"+expFormat(Psiaft3)+" Psia.ft&sup3</br>"+expFormat(lbfft)+" lbf.ft</br>"+expFormat(BTU)+" BTU</br>"+expFormat(BTU_lb)+" BTU_lb</br>"+expFormat(ft2_s2)+" ft&sup2_s&sup2</br>"+expFormat(termia)+" termia" );
		}else if(unit == 6){
			var J = cantidad * 4.184;
            var kJ = J / 1000;    
            var Nm = J ; 
            var kPam3 = J / 1000;
            var kWh = (J / 1000)/ 3600;
            var Cal = J / 4184;
            var kJ_kg = J;
            var Psiaft3 = (J / 1055.0559) * 5.40395;
            var lbfft = (((J / 1055.0559) * 5.40395) * 778.169)/5.40395;
            var BTU = J / 1055.0559;
            var BTU_lb = J * .430;
            var ft2_s2 = (J * .430)*25037;
            var termia = (J / 1055.0559)*100000;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" cal equivalen a:</h4></br>"+expFormat(J)+" J</br>"+expFormat(kJ)+" kJ</br>"+expFormat(Nm)+" Nm</br>"+expFormat(kPam3)+" kPa.m&sup3</br>"+expFormat(kWh)+" kW/h</br>"+expFormat(Cal)+" Cal</br>"+expFormat(kJ_kg)+" kJ_kg</br>"+expFormat(Psiaft3)+" Psia.ft&sup3</br>"+expFormat(lbfft)+" lbf.ft</br>"+expFormat(BTU)+" BTU</br>"+expFormat(BTU_lb)+" BTU_lb</br>"+expFormat(ft2_s2)+" ft&sup2_s&sup2</br>"+expFormat(termia)+" termia" );
		}else if(unit == 7){
			var Cal =cantidad*1;
			var J = Cal  * 4184;
            var kJ = J / 1000;     
            var Nm = J ; 
            var kPam3 = J / 1000;
            var kWh = (J / 1000)/ 3600;
            var cal = J / 4.184;
            var kJ_kg = J;
            var Psiaft3 = (J / 1055.0559) * 5.40395;
            var lbfft = (((J / 1055.0559) * 5.40395) * 778.169)/5.40395;
            var BTU = J / 1055.0559;
            var BTU_lb = J * .430;
            var ft2_s2 = (J * .430)*25037;
            var termia = (J / 1055.0559)*100000;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" Cal equivalen a:</h4></br>"+expFormat(J)+" J</br>"+expFormat(kJ)+" kJ</br>"+expFormat(Nm)+" Nm</br>"+expFormat(kPam3)+" kPa.m&sup3</br>"+expFormat(kWh)+" kW/h</br>"+expFormat(cal)+" cal</br>"+expFormat(kJ_kg)+" kJ_kg</br>"+expFormat(Psiaft3)+" Psia.ft&sup3</br>"+expFormat(lbfft)+" lbf.ft</br>"+expFormat(BTU)+" BTU</br>"+expFormat(BTU_lb)+" BTU_lb</br>"+expFormat(ft2_s2)+" ft&sup2_s&sup2</br>"+expFormat(termia)+" termia" );
		}else if(unit == 8){
			var J =cantidad*1;
            var kJ = J / 1000;    
            var Nm = J ; 
            var kPam3 = J / 1000;
            var kWh = (J / 1000)/ 3600;
            var cal = J / 4.184;
            var Cal = J / 4184;
            var Psiaft3 = (J / 1055.0559) * 5.40395;
            var lbfft = (((J / 1055.0559) * 5.40395) * 778.169)/5.40395;
            var BTU = J / 1055.0559;
            var BTU_lb = J * .430;
            var ft2_s2 = (J * .430)*25037;
            var termia = (J / 1055.0559)*100000;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" kJ_kg equivalen a:</h4></br>"+expFormat(J)+" J</br>"+expFormat(kJ)+" kJ</br>"+expFormat(Nm)+" Nm</br>"+expFormat(kPam3)+" kPa.m&sup3</br>"+expFormat(kWh)+" kW/h</br>"+expFormat(cal)+" cal</br>"+expFormat(Cal)+" cal</br>"+expFormat(Psiaft3)+" Psia.ft&sup3</br>"+expFormat(lbfft)+" lbf.ft</br>"+expFormat(BTU)+" BTU</br>"+expFormat(BTU_lb)+" BTU_lb</br>"+expFormat(ft2_s2)+" ft&sup2_s&sup2</br>"+expFormat(termia)+" termia" );
		}else if(unit == 9){
			var J = (cantidad * 1055.0559) / 5.40395;
            var kJ = J / 1000;    
            var Nm = J ; 
            var kPam3 = J / 1000;
            var kWh = (J / 1000)/ 3600;
            var cal = J / 4.184;
            var Cal = J / 4184;
            var kJ_kg = J;
            var lbfft = (((J / 1055.0559) * 5.40395) * 778.169)/5.40395;
            var BTU = J / 1055.0559;
            var BTU_lb = J * .430;
            var ft2_s2 = (J * .430)*25037;
            var termia = (J / 1055.0559)*100000;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" Psia.ft&sup3 equivalen a:</h4></br>"+expFormat(J)+" J</br>"+expFormat(kJ)+" kJ</br>"+expFormat(Nm)+" Nm</br>"+expFormat(kPam3)+" kPa.m&sup3</br>"+expFormat(kWh)+" kW/h</br>"+expFormat(cal)+" cal</br>"+expFormat(Cal)+" cal</br>"+expFormat(kJ_kg)+" kJ_kg</br>"+expFormat(lbfft)+" lbf.ft</br>"+expFormat(BTU)+" BTU</br>"+expFormat(BTU_lb)+" BTU_lb</br>"+expFormat(ft2_s2)+" ft&sup2_s&sup2</br>"+expFormat(termia)+" termia" );
		}else if(unit == 10){
			var J = (((cantidad * 1055.0559) / 5.40395) / 778.169)*5.40395;
            var kJ = J / 1000;    
            var Nm = J ; 
            var kPam3 = J / 1000;
            var kWh = (J / 1000)/ 3600;
            var cal = J / 4.184;
            var Cal = J / 4184;
            var kJ_kg = J;
            var Psiaft3 = (J / 1055.0559) * 5.40395;
            var BTU = J / 1055.0559;
            var BTU_lb = J * .430;
            var ft2_s2 = (J * .430)*25037;
            var termia = (J / 1055.0559)*100000;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" lbf.ft equivalen a:</h4></br>"+expFormat(J)+" J</br>"+expFormat(kJ)+" kJ</br>"+expFormat(Nm)+" Nm</br>"+expFormat(kPam3)+" kPa.m&sup3</br>"+expFormat(kWh)+" kW/h</br>"+expFormat(cal)+" cal</br>"+expFormat(Cal)+" cal</br>"+expFormat(kJ_kg)+" kJ_kg</br>"+expFormat(Psiaft3)+" Psia.ft&sup3</br>"+expFormat(BTU)+" BTU</br>"+expFormat(BTU_lb)+" BTU_lb</br>"+expFormat(ft2_s2)+" ft&sup2_s&sup2</br>"+expFormat(termia)+" termia" );
		}else if(unit == 11){
			var J = cantidad * 1055.0559;
            var kJ = J / 1000;    
            var Nm = J ; 
            var kPam3 = J / 1000;
            var kWh = (J / 1000)/ 3600;
            var cal = J / 4.184;
            var Cal = J / 4184;
            var kJ_kg = J;
            var Psiaft3 = (J / 1055.0559) * 5.40395;
            var lbfft = (((J / 1055.0559) * 5.40395) * 778.169)/5.40395;
            var BTU_lb = J * .430;
            var ft2_s2 = (J * .430)*25037;
            var termia = (J / 1055.0559)*100000;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" BTU equivalen a:</h4></br>"+expFormat(J)+" J</br>"+expFormat(kJ)+" kJ</br>"+expFormat(Nm)+" Nm</br>"+expFormat(kPam3)+" kPa.m&sup3</br>"+expFormat(kWh)+" kW/h</br>"+expFormat(cal)+" cal</br>"+expFormat(Cal)+" cal</br>"+expFormat(kJ_kg)+" kJ_kg</br>"+expFormat(Psiaft3)+" Psia.ft&sup3</br>"+expFormat(lbfft)+" lbf.ft</br>"+expFormat(BTU_lb)+" BTU_lb</br>"+expFormat(ft2_s2)+" ft&sup2_s&sup2</br>"+expFormat(termia)+" termia" );
		}else if(unit == 12){
			var J = cantidad / .430;
            var kJ = J / 1000;    
            var Nm = J ; 
            var kPam3 = J / 1000;
            var kWh = (J / 1000)/ 3600;
            var cal = J / 4.184;
            var Cal = J / 4184;
            var kJ_kg = J;
            var Psiaft3 = (J / 1055.0559) * 5.40395;
            var lbfft = (((J / 1055.0559) * 5.40395) * 778.169)/5.40395;
            var BTU = J / 1055.0559;
            var ft2_s2 = (J * .430)*25037;
            var termia = (J / 1055.0559)*100000;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" BTU_lb equivalen a:</h4></br>"+expFormat(J)+" J</br>"+expFormat(kJ)+" kJ</br>"+expFormat(Nm)+" Nm</br>"+expFormat(kPam3)+" kPa.m&sup3</br>"+expFormat(kWh)+" kW/h</br>"+expFormat(cal)+" cal</br>"+expFormat(Cal)+" cal</br>"+expFormat(kJ_kg)+" kJ_kg</br>"+expFormat(Psiaft3)+" Psia.ft&sup3</br>"+expFormat(lbfft)+" lbf.ft</br>"+expFormat(BTU)+" BTU</br>"+expFormat(ft2_s2)+" ft&sup2_s&sup2</br>"+expFormat(termia)+" termia" );
		}else if(unit == 13){
			var J = (cantidad / .430)/25037;
            var kJ = J / 1000;    
            var Nm = J ; 
            var kPam3 = J / 1000;
            var kWh = (J / 1000)/ 3600;
            var cal = J / 4.184;
            var Cal = J / 4184;
            var kJ_kg = J;
            var Psiaft3 = (J / 1055.0559) * 5.40395;
            var lbfft = (((J / 1055.0559) * 5.40395) * 778.169)/5.40395;
            var BTU = J / 1055.0559;
            var BTU_lb = J * .430;
            var termia = (J / 1055.0559)*100000;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" ft2_s2 equivalen a:</h4></br>"+expFormat(J)+" J</br>"+expFormat(kJ)+" kJ</br>"+expFormat(Nm)+" Nm</br>"+expFormat(kPam3)+" kPa.m&sup3</br>"+expFormat(kWh)+" kW/h</br>"+expFormat(cal)+" cal</br>"+expFormat(Cal)+" cal</br>"+expFormat(kJ_kg)+" kJ_kg</br>"+expFormat(Psiaft3)+" Psia.ft&sup3</br>"+expFormat(lbfft)+" lbf.ft</br>"+expFormat(BTU)+" BTU</br>"+expFormat(BTU_lb)+" BTU_lb</br>"+expFormat(termia)+" termia" );
		}else if(unit == 14){
			var J = (cantidad * 1055.0559)/100000;
            var kJ = J / 1000;    
            var Nm = J ; 
            var kPam3 = J / 1000;
            var kWh = (J / 1000)/ 3600;
            var cal = J / 4.184;
            var Cal = J / 4184;
            var kJ_kg = J;
            var Psiaft3 = (J / 1055.0559) * 5.40395;
            var lbfft = (((J / 1055.0559) * 5.40395) * 778.169)/5.40395;
            var BTU = J / 1055.0559;
            var BTU_lb = J * .430;
            var ft2_s2 = (J * .430)*25037;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" termia equivalen a:</h4></br>"+expFormat(J)+" J</br>"+expFormat(kJ)+" kJ</br>"+expFormat(Nm)+" Nm</br>"+expFormat(kPam3)+" kPa.m&sup3</br>"+expFormat(kWh)+" kW/h</br>"+expFormat(cal)+" cal</br>"+expFormat(Cal)+" cal</br>"+expFormat(kJ_kg)+" kJ_kg</br>"+expFormat(Psiaft3)+" Psia.ft&sup3</br>"+expFormat(lbfft)+" lbf.ft</br>"+expFormat(BTU)+" BTU</br>"+expFormat(BTU_lb)+" BTU_lb</br>"+expFormat(ft2_s2)+" ft&sup2_s&sup2" );
		}
	}
}

function convertFlujo(){
	var e = document.getElementById("selectUnits");
	var unit = e.value;
	
	var cantidad = document.getElementById("cantidad").value;
	
	if(validate(cantidad)){
<<<<<<< HEAD
=======
		
		//document.getElementById("resultAlert").style.display = "initial";
		
>>>>>>> 2356c65bc2b584bdb705240a939f5592432daa1e
		var element = document.getElementById("result");
		element.innerHTML = "";
		
		if(unit == 1){
			var W_m2 = cantidad * 100000;
            var BTU_hft2 = (cantidad * 100000) * 0.3171;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" W_cm&sup2 equivalen a:</h4></br>"+expFormat(W_m2)+" W_m&sup2</br>"+expFormat(BTU_hft2)+" BTU_hft&sup2" );
		}else if(unit == 2){
			var W_cm2 = cantidad / 100000;
			var BTU_hft2 = (cantidad * 100000) * 0.3171
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" W_m&sup2 equivalen a:</h4></br>"+expFormat(W_cm2)+" W_cm&sup2</br>"+expFormat(BTU_hft2)+" BTU_hft&sup2" );
		}else if(unit == 3){
			var W_cm2 = (cantidad / 100000) / 0.3171;
            var W_m2 = W_cm2 * 100000
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" BTU_hft&sup2 equivalen a:</h4></br>"+expFormat(W_cm2)+" W_cm&sup2</br>"+expFormat(W_m2)+" W_m&sup2" );
		}
	}
}

function convertPotencia(){
	var e = document.getElementById("selectUnits");
	var unit = e.value;
	
	var cantidad = document.getElementById("cantidad").value;
	
	if(validate(cantidad)){
<<<<<<< HEAD
=======
		
		//document.getElementById("resultAlert").style.display = "initial";
		
>>>>>>> 2356c65bc2b584bdb705240a939f5592432daa1e
		var element = document.getElementById("result");
		element.innerHTML = "";
		
		if(unit == 1){
			var Js = cantidad *1;    
            var kW = cantidad / 1000; 
            var hp = (cantidad * .00134102208959509);
            var BTUh = ( cantidad * 3.41214163312794);
            var BTUmin = ( cantidad * 3.41214163312794) / 60;
            var BTUs = ( cantidad * 3.41214163312794) / 3600;
            var lbfts = ( cantidad * .737562149277299);
            var hpcald = BTUh /(33481.6397750679);
            var kJh = (cantidad * 3.6);
            var Tonrefri = (( cantidad * 3.41214163312794) / 60)/200;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" W equivalen a:</h4></br>"+expFormat(Js)+" Js</br>"+expFormat(kW)+" kW</br>"+expFormat(hp)+" hp</br>"+expFormat(BTUh)+" BTUm</br>"+expFormat(BTUmin)+" BTUmin</br>"+expFormat(BTUs)+" BTUs</br>"+expFormat(lbfts)+" lbfts</br>"+expFormat(hpcald)+" hpcald</br>"+expFormat(kJh)+" kJh</br>"+expFormat(Tonrefri)+" Tonrefri");
		}else if(unit == 2){
			var W = cantidad *1;
            var kW = W / 1000; 
            var hp = (W * .00134102208959509);
            var BTUh = ( W * 3.41214163312794);
            var BTUmin = ( W * 3.41214163312794) / 60;
            var BTUs = ( W * 3.41214163312794) / 3600;
            var lbfts = ( W * .737562149277299);
            var hpcald = BTUh /(33481.6397750679);
            var kJh = (W * 3.6);
            var Tonrefri = (( W * 3.41214163312794) / 60)/200;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" Js equivalen a:</h4></br>"+expFormat(W)+" W</br>"+expFormat(kW)+" kW</br>"+expFormat(hp)+" hp</br>"+expFormat(BTUh)+" BTUm</br>"+expFormat(BTUmin)+" BTUmin</br>"+expFormat(BTUs)+" BTUs</br>"+expFormat(lbfts)+" lbfts</br>"+expFormat(hpcald)+" hpcald</br>"+expFormat(kJh)+" kJh</br>"+expFormat(Tonrefri)+" Tonrefri");
		}else if(unit == 3){
			var W = cantidad * 1000;
            var Js = W;    
            var hp = (W * .00134102208959509);
            var BTUh = ( W * 3.41214163312794);
            var BTUmin = ( W * 3.41214163312794) / 60;
            var BTUs = ( W * 3.41214163312794) / 3600;
            var lbfts = ( W * .737562149277299);
            var hpcald = BTUh /(33481.6397750679);
            var kJh = (W * 3.6);
            var Tonrefri = (( W * 3.41214163312794) / 60)/200;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" kW equivalen a:</h4></br>"+expFormat(W)+" W</br>"+expFormat(Js)+" Js</br>"+expFormat(hp)+" hp</br>"+expFormat(BTUh)+" BTUm</br>"+expFormat(BTUmin)+" BTUmin</br>"+expFormat(BTUs)+" BTUs</br>"+expFormat(lbfts)+" lbfts</br>"+expFormat(hpcald)+" hpcald</br>"+expFormat(kJh)+" kJh</br>"+expFormat(Tonrefri)+" Tonrefri");
		}else if(unit == 4){
			var W = (cantidad / .00134102208959509);
            var Js = W;    
            var kW = W / 1000; 
            var BTUh = ( W * 3.41214163312794);
            var BTUmin = ( W * 3.41214163312794) / 60;
            var BTUs = ( W * 3.41214163312794) / 3600;
            var lbfts = ( W * .737562149277299);
            var hpcald = BTUh /(33481.6397750679);
            var kJh = (W * 3.6);
            var Tonrefri = (( W * 3.41214163312794) / 60)/200
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" hp equivalen a:</h4></br>"+expFormat(W)+" W</br>"+expFormat(kW)+" kW</br>"+expFormat(Js)+" Js</br>"+expFormat(BTUh)+" BTUm</br>"+expFormat(BTUmin)+" BTUmin</br>"+expFormat(BTUs)+" BTUs</br>"+expFormat(lbfts)+" lbfts</br>"+expFormat(hpcald)+" hpcald</br>"+expFormat(kJh)+" kJh</br>"+expFormat(Tonrefri)+" Tonrefri");
		}else if(unit == 5){
			var W = ( cantidad / 3.41214163312794);
            var Js = W;    
            var kW = W / 1000; 
            var hp = (W * .00134102208959509);
            var BTUmin = ( W * 3.41214163312794) / 60;
            var BTUs = ( W * 3.41214163312794) / 3600;
            var lbfts = ( W * .737562149277299);
            var hpcald = cantidad /(33481.6397750679);
            var kJh = (W * 3.6);
            var Tonrefri = (( W * 3.41214163312794) / 60)/200;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" BTUh equivalen a:</h4></br>"+expFormat(W)+" W</br>"+expFormat(kW)+" kW</br>"+expFormat(Js)+" Js</br>"+expFormat(hp)+" hp</br>"+expFormat(BTUmin)+" BTUmin</br>"+expFormat(BTUs)+" BTUs</br>"+expFormat(lbfts)+" lbfts</br>"+expFormat(hpcald)+" hpcald</br>"+expFormat(kJh)+" kJh</br>"+expFormat(Tonrefri)+" Tonrefri");
		}else if(unit == 6){
			var W = (cantidad / 3.41214163312794) * 60;
            var Js = W;    
            var kW = W / 1000; 
            var hp = (W * .00134102208959509);
            var BTUh = ( W * 3.41214163312794);
            var BTUs = ( W * 3.41214163312794) / 3600;
            var lbfts = ( W * .737562149277299);
            var hpcald = BTUh /(33481.6397750679);
            var kJh = (W * 3.6);
            var Tonrefri = (( W * 3.41214163312794) / 60)/200
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" BTUmin equivalen a:</h4></br>"+expFormat(W)+" W</br>"+expFormat(kW)+" kW</br>"+expFormat(Js)+" Js</br>"+expFormat(hp)+" hp</br>"+expFormat(BTUh)+" BTUh</br>"+expFormat(BTUs)+" BTUs</br>"+expFormat(lbfts)+" lbfts</br>"+expFormat(hpcald)+" hpcald</br>"+expFormat(kJh)+" kJh</br>"+expFormat(Tonrefri)+" Tonrefri");
		}else if(unit == 7){
			var W = (cantidad / 3.41214163312794) * 3600;
            var Js = W;    
            var kW = W / 1000; 
            var hp = (W * .00134102208959509);
            var BTUh = ( W * 3.41214163312794);
            var BTUmin = ( W * 3.41214163312794) / 60;
            var lbfts = ( W * .737562149277299);
            var hpcald = BTUh /(33481.6397750679);
            var kJh = (W * 3.6);
            var Tonrefri = (( W * 3.41214163312794) / 60)/200;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" BTUs equivalen a:</h4></br>"+expFormat(W)+" W</br>"+expFormat(kW)+" kW</br>"+expFormat(Js)+" Js</br>"+expFormat(hp)+" hp</br>"+expFormat(BTUh)+" BTUh</br>"+expFormat(BTUmin)+" BTUmin</br>"+expFormat(lbfts)+" lbfts</br>"+expFormat(hpcald)+" hpcald</br>"+expFormat(kJh)+" kJh</br>"+expFormat(Tonrefri)+" Tonrefri");
		}else if(unit == 8){
			var W = ( cantidad / .737562149277299);
            var Js = W;    
            var kW = W / 1000; 
            var hp = (W * .00134102208959509);
            var BTUh = ( W * 3.41214163312794);
            var BTUmin = ( W * 3.41214163312794) / 60;
            var BTUs = ( W * 3.41214163312794) / 3600;
            var hpcald = BTUh /(33481.6397750679);
            var kJh = (W * 3.6);
            var Tonrefri = (( W * 3.41214163312794) / 60)/200;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" lbfts equivalen a:</h4></br>"+expFormat(W)+" W</br>"+expFormat(kW)+" kW</br>"+expFormat(Js)+" Js</br>"+expFormat(hp)+" hp</br>"+expFormat(BTUh)+" BTUh</br>"+expFormat(BTUmin)+" BTUmin</br>"+expFormat(BTUs)+" BTUs</br>"+expFormat(hpcald)+" hpcald</br>"+expFormat(kJh)+" kJh</br>"+expFormat(Tonrefri)+" Tonrefri");
		}else if(unit == 9){
			var W = ( cantidad /  3.41214163312794)*(33481.6397750679);
            var Js = W;    
            var kW = W / 1000; 
            var hp = (W * .00134102208959509);
            var BTUh = ( W * 3.41214163312794);
            var BTUmin = ( W * 3.41214163312794) / 60;
            var BTUs = ( W * 3.41214163312794) / 3600;
            var lbfts = ( W * .737562149277299);
            var kJh = (W * 3.6);
            var Tonrefri = (( W * 3.41214163312794) / 60)/200;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" hpcal equivalen a:</h4></br>"+expFormat(W)+" W</br>"+expFormat(kW)+" kW</br>"+expFormat(Js)+" Js</br>"+expFormat(hp)+" hp</br>"+expFormat(BTUh)+" BTUh</br>"+expFormat(BTUmin)+" BTUmin</br>"+expFormat(BTUs)+" BTUs</br>"+expFormat(lbfts)+" lbfts</br>"+expFormat(kJh)+" kJh</br>"+expFormat(Tonrefri)+" Tonrefri");
		}else if(unit == 10){
			var W = (cantidad / 3.6);
            var Js = W;    
            var kW = W / 1000; 
            var hp = (W * .00134102208959509);
            var BTUh = ( W * 3.41214163312794);
            var BTUmin = ( W * 3.41214163312794) / 60;
            var BTUs = ( W * 3.41214163312794) / 3600;
            var lbfts = ( W * .737562149277299);
            var hpcald = BTUh /(33481.6397750679);
            var Tonrefri = (( W * 3.41214163312794) / 60)/200;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" kJh equivalen a:</h4></br>"+expFormat(W)+" W</br>"+expFormat(kW)+" kW</br>"+expFormat(Js)+" Js</br>"+expFormat(hp)+" hp</br>"+expFormat(BTUh)+" BTUh</br>"+expFormat(BTUmin)+" BTUmin</br>"+expFormat(BTUs)+" BTUs</br>"+expFormat(lbfts)+" lbfts</br>"+expFormat(hpcald)+" hpcal</br>"+expFormat(Tonrefri)+" Tonrefri");
		}else if(unit == 11){
			var W =  (( cantidad / 3.41214163312794) * 60)*200;
            var Js = W;    
            var kW = W / 1000; 
            var hp = (W * .00134102208959509);
            var BTUh = ( W * 3.41214163312794);
            var BTUmin = ( W * 3.41214163312794) / 60;
            var BTUs = ( W * 3.41214163312794) / 3600;
            var lbfts = ( W * .737562149277299);
            var hpcald = BTUh /(33481.6397750679);
            var kJh = (W * 3.6);
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" Tonrefri equivalen a:</h4></br>"+expFormat(W)+" W</br>"+expFormat(kW)+" kW</br>"+expFormat(Js)+" Js</br>"+expFormat(hp)+" hp</br>"+expFormat(BTUh)+" BTUh</br>"+expFormat(BTUmin)+" BTUmin</br>"+expFormat(BTUs)+" BTUs</br>"+expFormat(lbfts)+" lbfts</br>"+expFormat(hpcald)+" hpcal</br>"+expFormat(kJh)+" kJh");
		}
	}
}

function convertVelocidad(){
	var e = document.getElementById("selectUnits");
	var unit = e.value;
	
	var cantidad = document.getElementById("cantidad").value;
	
	if(validate(cantidad)){
<<<<<<< HEAD
=======
		
		//document.getElementById("resultAlert").style.display = "initial";
		
>>>>>>> 2356c65bc2b584bdb705240a939f5592432daa1e
		var element = document.getElementById("result");
		element.innerHTML = "";
		
		if(unit == 1){
			var ms = (cantidad) / 100;
            var kmh = ((cantidad) / 100000) * (3600);
            var ins = (cantidad) / 2.54;
            var fts = (cantidad) / 30.48;
            var millah = ((cantidad / 2.54)/63360) * 3600; 
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" cm/s equivalen a:</h4></br>"+expFormat(ms)+" m/s</br>"+expFormat(kmh)+" km/h</br>"+expFormat(ins)+" in/s</br>"+expFormat(fts)+" ft/s</br>"+expFormat(millah)+" milla/h" );
		}else if(unit == 2){
			var cms = (cantidad) * 100;
            var kmh = ((cms) / 100000) * (3600);
            var ins = (cms) / 2.54;
            var fts = (cms) / 30.48;
            var millah = ((cms / 2.54)/63360) * 3600;

			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" m/s equivalen a:</h4></br>"+expFormat(cms)+" cm/s</br>"+expFormat(kmh)+" km/h</br>"+expFormat(ins)+" in/s</br>"+expFormat(fts)+" ft/s</br>"+expFormat(millah)+" milla/h" );			
		}else if(unit == 3){
			var cms = ((cantidad) * 100000) / (3600); 
            var ms = (cms) / 100;
            var ins = (cms) / 2.54;
            var fts = (cms) / 30.48;
            var millah = ((cms / 2.54)/63360) * 3600;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" km/h equivalen a:</h4></br>"+expFormat(cms)+" cm/s</br>"+expFormat(ms)+" m/s</br>"+expFormat(ins)+" in/s</br>"+expFormat(fts)+" ft/s</br>"+expFormat(millah)+" milla/h" );			
		}else if(unit == 4){
			var cms = (cantidad) * 2.54;
            var ms = (cms) / 100;
            var kmh = ((cms) / 100000) * (3600);
            var fts = (cms) / 30.48;
            var millah = ((cms / 2.54)/63360) * 3600;   

			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" in/s equivalen a:</h4></br>"+expFormat(cms)+" cm/s</br>"+expFormat(ms)+" m/s</br>"+expFormat(kmh)+" km/h</br>"+expFormat(fts)+" ft/s</br>"+expFormat(millah)+" milla/h" );						
		}else if(unit == 5){
			var cms = (cantidad) * 30.48;
            var ms = (cms) / 100;
            var kmh = ((cms) / 100000) * (3600);
            var ins = (cms) / 2.54;
            var millah = ((cms / 2.54)/63360) * 3600; 
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" ft/s equivalen a:</h4></br>"+expFormat(cms)+" cm/s</br>"+expFormat(ms)+" m/s</br>"+expFormat(kmh)+" km/h</br>"+expFormat(ins)+" in/s</br>"+expFormat(millah)+" milla/h" );						
		}else if(unit == 6){
			var cms = ((cantidad * 2.54)*63360) / 3600;
            var ms = (cms) / 100;
            var kmh = ((cms) / 100000) * (3600);
            var ins = (cms) / 2.54;
            var fts = (cms) / 30.48;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" milla/h equivalen a:</h4></br>"+expFormat(cms)+" cm/s</br>"+expFormat(ms)+" m/s</br>"+expFormat(kmh)+" km/h</br>"+expFormat(ins)+" in/s</br>"+expFormat(fts)+" ft/s" );						
		}
	}
}

function convertCoeficiente(){
	var e = document.getElementById("selectUnits");
	var unit = e.value;
	
	var cantidad = document.getElementById("cantidad").value;
	
	if(validate(cantidad)){
<<<<<<< HEAD
=======
		
		//document.getElementById("resultAlert").style.display = "initial";
		
>>>>>>> 2356c65bc2b584bdb705240a939f5592432daa1e
		var element = document.getElementById("result");
		element.innerHTML = "";
		
		if(unit == 1){
			var Wm2F = cantidad;
			var BTUhft2F = (cantidad*3.41214147993575)/(10.7639104167097*1.8);
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" W/m&sup2 * °C equivalen a:</h4></br>"+expFormat(Wm2F)+" W/m&sup2 * F</br>"+expFormat(BTUhft2F)+" BTU/h * ft&sup2 * F" );
		}else if(unit == 2){
			var Wm2C = cantidad;
			var BTUhft2F = (Wm2C*3.41214147993575)/(10.7639104167097*1.8);
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" W/m&sup2 * F equivalen a:</h4></br>"+expFormat(Wm2C)+" W/m&sup2 * °C</br>"+expFormat(BTUhft2F)+" BTU/h * ft&sup2 * F" );
		}else if(unit == 3){
			var Wm2C = (cantidad/(10.7639104167097*1.8))/3.41214147993575;
			var Wm2F = Wm2C;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" BTU/h * ft&sup2 * F equivalen a:</h4></br>"+expFormat(Wm2C)+" W/m&sup2 * °C</br>"+expFormat(Wm2F)+" W/m&sup2 * F" );
		}
	}
}

function convertConductividad(){
	var e = document.getElementById("selectUnits");
	var unit = e.value;
	
	var cantidad = document.getElementById("cantidad").value;
	
	if(validate(cantidad)){
<<<<<<< HEAD
=======
		
		//document.getElementById("resultAlert").style.display = "initial";
		
>>>>>>> 2356c65bc2b584bdb705240a939f5592432daa1e
		var element = document.getElementById("result");
		element.innerHTML = "";
		
		if(unit == 1){
			var WmK = cantidad *1;
			var BTUhftF = (cantidad*3.41214147993575)/(3.280839895*1.8);
		
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" W/m * °C equivalen a:</h4></br>"+expFormat(WmK)+" W/m * K</br>"+expFormat(BTUhftF)+" BTU/h * ft * F" );
		}else if(unit == 2){
			var WmC = cantidad*1;
			var BTUhftF =(WmC*3.41214147993575)/(3.280839895*1.8);
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" W/m * K equivalen a:</h4></br>"+expFormat(WmC)+" W/m * °C</br>"+expFormat(BTUhftF)+" BTU/h * ft * F" );
		}else if(unit == 3){
			var WmC =(cantidad*(3.280839895*1.8))/3.41214147993575;
			var WmK = WmC
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" BTU/h * ft * F equivalen a:</h4></br>"+expFormat(WmC)+" W/m * °C</br>"+expFormat(WmK)+" W/m * K" );
		}
	}
}

function convertEspecifico(){
	var e = document.getElementById("selectUnits");
	var unit = e.value;
	
	var cantidad = document.getElementById("cantidad").value;
	
	if(validate(cantidad)){
<<<<<<< HEAD
=======
		
		//document.getElementById("resultAlert").style.display = "initial";
		
>>>>>>> 2356c65bc2b584bdb705240a939f5592432daa1e
		var element = document.getElementById("result");
		element.innerHTML = "";
		
		if(unit == 1){
			var Lkg = cantidad*1000;
			var cm3g = cantidad*1000;
			var ft3lbm = cantidad*16.01846335;
		  
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" m&sup3 /kg equivalen a:</h4></br>"+expFormat(Lkg)+" L/kg</br>"+expFormat(cm3g)+" cm&sup3 /g</br>"+expFormat(ft3lbm)+" ft&sup3 /lbm");
		}else if(unit == 2){
			var m3kg = cantidad/1000;
			var cm3g = m3kg*1000;
			var ft3lbm = m3kg*16.01846335;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" L/kg equivalen a:</h4></br>"+expFormat(m3kg)+" m&sup3 /kg</br>"+expFormat(cm3g)+" cm&sup3 /g</br>"+expFormat(ft3lbm)+" ft&sup3 /lbm");
		}else if(unit == 3){
			var m3kg = cantidad/1000;
			var Lkg = m3kg*1000;
			var ft3lbm = m3kg*16.01846335;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" cm&sup3 /g equivalen a:</h4></br>"+expFormat(m3kg)+" m&sup3 /kg</br>"+expFormat(Lkg)+" L/kg /g</br>"+expFormat(ft3lbm)+" ft&sup3 /lbm");
		}else if(unit == 4){
			var m3kg = cantidad/16.01846335;
			var Lkg = m3kg*1000;
			var cm3g = m3kg*1000;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" ft&sup3 /lbm equivalen a:</h4></br>"+expFormat(m3kg)+" m&sup3 /kg</br>"+expFormat(Lkg)+" L/kg</br>"+expFormat(cm3g)+" cm&sup3/g");
		}
	}
}

function convertCalor(){
	var e = document.getElementById("selectUnits");
	var unit = e.value;
	
	var cantidad = document.getElementById("cantidad").value;
	
	if(validate(cantidad)){
<<<<<<< HEAD
=======
		
		//document.getElementById("resultAlert").style.display = "initial";
		
>>>>>>> 2356c65bc2b584bdb705240a939f5592432daa1e
		var element = document.getElementById("result");
		element.innerHTML = "";
		
		if(unit == 1){
			var kJkgK = cantidad*1;
			var JgC = cantidad*1;
			var BTUlbmF = 4.1868*cantidad;
			var BTUlbmR = 1.055056*cantidad/(0.45359237*1.8);
	  
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" kJkg°C equivalen a:</h4></br>"+expFormat(kJkgK)+" kJkg°K</br>"+expFormat(JgC)+" Jg°C</br>"+expFormat(BTUlbmF)+" BTUlbm°F</br>"+expFormat(BTUlbmR)+" BTUlbm°R");
		}else if(unit == 2){
			var kJkgC = cantidad*1;
			var JgC = kJkgC*1;
			var BTUlbmF = 4.1868*kJkgC;
			var BTUlbmR = 1.055056*kJkgC/(0.45359237*1.8);
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" kJkg°K equivalen a:</h4></br>"+expFormat(kJkgC)+" kJkg°C</br>"+expFormat(JgC)+" Jg°C</br>"+expFormat(BTUlbmF)+" BTUlbm°F</br>"+expFormat(BTUlbmR)+" BTUlbm°R");
		}else if(unit == 3){
			var kJkgC = cantidad*1;
			var kJkgK = kJkgC*1;
			var BTUlbmF = 4.1868*kJkgC;
			var BTUlbmR = 1.055056*kJkgC/(0.45359237*1.8);
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" JgC equivalen a:</h4></br>"+expFormat(kJkgC)+" kJkg°C</br>"+expFormat(kJkgK)+" kJkg°K</br>"+expFormat(BTUlbmF)+" BTUlbm°F</br>"+expFormat(BTUlbmR)+" BTUlbm°R");
		}else if(unit == 4){
			var kJkgC = 4.1868/cantidad;
			var kJkgK = kJkgC;
			var JgC = kJkgC;
			var BTUlbmR = 1.055056*kJkgC/(0.45359237*1.8);
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" BTUlbmF equivalen a:</h4></br>"+expFormat(kJkgC)+" kJkg°C</br>"+expFormat(kJkgK)+" kJkg°K</br>"+expFormat(JgC)+" Jg°C</br>"+expFormat(BTUlbmR)+" BTUlbm°R");
		}else if(unit == 5){
			var kJkgC = 1.8/0.45359237*(cantidad/1.055056);
			var kJkgK = kJkgC;
			var JgC = kJkgC;
			var BTUlbmF = 4.1868*kJkgC;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" BTUlbmR equivalen a:</h4></br>"+expFormat(kJkgC)+" kJkg°C</br>"+expFormat(kJkgK)+" kJkg°K</br>"+expFormat(JgC)+" Jg°C</br>"+expFormat(BTUlbmF)+" BTUlbm°F");
		}
	}
}

function convertTasa(){
	var e = document.getElementById("selectUnits");
	var unit = e.value;
	
	var cantidad = document.getElementById("cantidad").value;
	
	if(validate(cantidad)){
<<<<<<< HEAD
=======
		
		//document.getElementById("resultAlert").style.display = "initial";
		
>>>>>>> 2356c65bc2b584bdb705240a939f5592432daa1e
		var element = document.getElementById("result");
		element.innerHTML = "";
		
		if(unit == 1){
			var Lmin = cantidad * (60/1000);
			var m3s = cantidad /1000000;
			var galmin = (cantidad / (2.54^3))/(231)*60;
			var ft3s = (cantidad / (30.48^3));
			var ft3min = (cantidad/ (30.48^3))*60;
	 
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" cm&sup3 /s equivalen a:</h4></br>"+expFormat(Lmin)+" L/min</br>"+expFormat(m3s)+" m&sup3 /s</br>"+expFormat(galmin)+" gal/min</br>"+expFormat(ft3s)+" ft&sup3 /s</br>"+expFormat(ft3min)+"ft&sup3 /min");
		}else if(unit == 2){
			var cm3s = cantidad / (60*1000);
			var m3s = cm3s /1000000;
			var galmin = (cm3s / (2.54^3))/(231)*60;
			var ft3s = (cm3s / (30.48^3));
			var ft3min = (cm3s / (30.48^3))*60;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" L/min equivalen a:</h4></br>"+expFormat(cm3s)+" cm&sup3/s</br>"+expFormat(m3s)+" m&sup3 /s</br>"+expFormat(galmin)+" gal/min</br>"+expFormat(ft3s)+" ft&sup3 /s</br>"+expFormat(ft3min)+"ft&sup3 /min");
		}else if(unit == 3){
			var cm3s = cantidad *1000000;
			var Lmin = cm3s * (60/1000);
			var galmin = (cm3s / (2.54^3))/(231)*60;
			var ft3s = (cm3s / (30.48^3));
			var ft3min = (cm3s / (30.48^3))*60;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" m&sup3/s equivalen a:</h4></br>"+expFormat(cm3s)+" cm&sup3/s</br>"+expFormat(Lmin)+" L/min</br>"+expFormat(galmin)+" gal/min</br>"+expFormat(ft3s)+" ft&sup3 /s</br>"+expFormat(ft3min)+"ft&sup3 /min");
		}else if(unit == 4){
			var cm3s = (cantidad *(2.54^3))*(231)/60;
			var Lmin = cm3s * (60/1000);
			var m3s = cm3s /1000000;
			var ft3s = (cm3s / (30.48^3));
			var ft3min = (cm3s / (30.48^3))*60;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" gal/min equivalen a:</h4></br>"+expFormat(cm3s)+" cm&sup3/s</br>"+expFormat(Lmin)+" L/min</br>"+expFormat(m3s)+" m&sup3/s</br>"+expFormat(ft3s)+" ft&sup3 /s</br>"+expFormat(ft3min)+"ft&sup3 /min");
		}else if(unit == 5){
			var cm3s = (cantidad * (30.48^3));
			var Lmin = cm3s * (60/1000);
			var m3s = cm3s /1000000;
			var galmin = (cm3s / (2.54^3))/(231)*60;
			var ft3min = (cm3s / (30.48^3))*60;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" ft&sup3/s equivalen a:</h4></br>"+expFormat(cm3s)+" cm&sup3/s</br>"+expFormat(Lmin)+" L/min</br>"+expFormat(m3s)+" m&sup3/s</br>"+expFormat(galmin)+" gal/min</br>"+expFormat(ft3min)+"ft&sup3 /min");
		}else if(unit == 6){
			var cm3s = (cantidad * (30.48^3))/60;
			var Lmin = cm3s * (60/1000);
			var m3s = cm3s /1000000;
			var galmin = (cm3s / (2.54^3))/(231)*60;
			var ft3s = (cm3s / (30.48^3));
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" ft&sup3/min equivalen a:</h4></br>"+expFormat(cm3s)+" cm&sup3/s</br>"+expFormat(Lmin)+" L/min</br>"+expFormat(m3s)+" m&sup3/s</br>"+expFormat(galmin)+" gal/min</br>"+expFormat(ft3s)+"ft&sup3 /s");
		}
	}
}

function expFormat(number){

	number *= 1;
	if(number < 0.0001)
		return number.toExponential(4);
	else
		return number.toFixed(4);
}