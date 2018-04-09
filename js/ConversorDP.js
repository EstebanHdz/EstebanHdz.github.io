function startPage(){
	document.getElementById("units").style.display = "none";
	document.getElementById("resultAlert").style.display = "none";
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
		element.insertAdjacentHTML('beforeend', '<button id="unitButton" type = "submit" form = "getUnits" value = "Units" onclick = "convertLongitud()">Convertir!</button>' );
	}else if(type == 2){
		HTMLTemperatura();
		element.insertAdjacentHTML('beforeend', '<button id="unitButton" type = "submit" form = "getUnits" value = "Units" onclick = "convertTemperatura()">Convertir!</button>' );
	}else if(type == 3){
		HTMLMasa();
		element.insertAdjacentHTML('beforeend', '<button id="unitButton" type = "submit" form = "getUnits" value = "Units" onclick = "convertMasa()">Convertir!</button>' );
	}else if(type == 4){
		HTMLVolumen();
		element.insertAdjacentHTML('beforeend', '<button id="unitButton" type = "submit" form = "getUnits" value = "Units" onclick = "convertVolumen()">Convertir!</button>' );
	}else if (type == 5){
		HTMLArea();
		element.insertAdjacentHTML('beforeend', '<button id="unitButton" type = "submit" form = "getUnits" value = "Units" onclick = "convertArea()">Convertir!</button>' );
	}else if(type == 6){
		HTMLPresion();
		element.insertAdjacentHTML('beforeend', '<button id="unitButton" type = "submit" form = "getUnits" value = "Units" onclick = "convertPresion()">Convertir!</button>' );
	}else if(type == 7){
		HTMLFuerza();
		element.insertAdjacentHTML('beforeend', '<button id="unitButton" type = "submit" form = "getUnits" value = "Units" onclick = "convertFuerza()">Convertir!</button>' );
	}else if(type == 8){
		HTMLAceleracion();
		element.insertAdjacentHTML('beforeend', '<button id="unitButton" type = "submit" form = "getUnits" value = "Units" onclick = "convertAceleracion()">Convertir!</button>' );
	}else if(type == 9){
		HTMLDensidad();
		element.insertAdjacentHTML('beforeend', '<button id="unitButton" type = "submit" form = "getUnits" value = "Units" onclick = "convertDensidad()">Convertir!</button>' );
	}else if(type == 10){
		HTMLEnergia();
		element.insertAdjacentHTML('beforeend', '<button id="unitButton" type = "submit" form = "getUnits" value = "Units" onclick = "convertEnergia()">Convertir!</button>' );		
	}else if(type == 11){
		HTMLFlujo();
		element.insertAdjacentHTML('beforeend', '<button id="unitButton" type = "submit" form = "getUnits" value = "Units" onclick = "convertFlujo()">Convertir!</button>' );	
	}else if(type == 12){
		HTMLPotencia();
		element.insertAdjacentHTML('beforeend', '<button id="unitButton" type = "submit" form = "getUnits" value = "Units" onclick = "convertPotencia()">Convertir!</button>' );	
	}else if(type == 13){
		HTMLVelocidad();
		element.insertAdjacentHTML('beforeend', '<button id="unitButton" type = "submit" form = "getUnits" value = "Units" onclick = "convertVelocidad()">Convertir!</button>' );
	}else if(type == 14){
		HTMLCoeficiente();
		element.insertAdjacentHTML('beforeend', '<button id="unitButton" type = "submit" form = "getUnits" value = "Units" onclick = "convertCoeficiente()">Convertir!</button>' );
	}else if(type == 15){
		HTMLConductividad();
		element.insertAdjacentHTML('beforeend', '<button id="unitButton" type = "submit" form = "getUnits" value = "Units" onclick = "convertConductividad()">Convertir!</button>' );
	}else if(type == 16){
		HTMLEspecifico();
		element.insertAdjacentHTML('beforeend', '<button id="unitButton" type = "submit" form = "getUnits" value = "Units" onclick = "convertEspecifico()">Convertir!</button>' );
	}else if(type == 17){
		HTMLCalor();
		element.insertAdjacentHTML('beforeend', '<button id="unitButton" type = "submit" form = "getUnits" value = "Units" onclick = "convertCalor()">Convertir!</button>' );
	}else if(type == 18){
		HTMLTasa();
		element.insertAdjacentHTML('beforeend', '<button id="unitButton" type = "submit" form = "getUnits" value = "Units" onclick = "convertTasa()">Convertir!</button>' );
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
		alert("Favor de ingresar una cantidad");
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
		
		document.getElementById("resultAlert").style.display = "initial";
		
		var element = document.getElementById("result");
		element.innerHTML = "";
		
		if(unit == 1){
			var m = cantidad/100;
			var km = cantidad/100000;
			var inc = cantidad/2.54;
			var ft = inc/12;
			var yd = inc/36;
			var milla = cantidad/160934.4;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" cm equivalen a:</h4></br>"+m.toFixed(4)+" m</br>"+km.toFixed(4)+" km</br>"+inc.toFixed(4)+" in</br>"+ft.toFixed(4)+" ft</br>"+yd.toFixed(4)+" yd</br>"+milla.toFixed(4)+" miles" );
			//alert("Resultados:\n"+m+" m\n"+km+" km\n"+inc+" in\n"+ft+" ft\n"+yd+" yd\n"+milla+" miles");
		}else if(unit == 2){
			var cm = cantidad *100;
			var km = cm/100000;
			var inc = cm/2.54;
			var ft = inc/12;
			var yd = inc/36;
			var milla = cm/160934.4;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" m equivalen a:</h4></br>"+cm.toFixed(4)+" cm</br>"+km.toFixed(4)+" km</br>"+inc.toFixed(4)+" in</br>"+ft.toFixed(4)+" ft</br>"+yd.toFixed(4)+" yd</br>"+milla.toFixed(4)+" miles" );
		}else if(unit == 3){
			var cm = cantidad * 100000;
			var m = cm/100;
			var inc = cm/2.54;
			var ft = inc/12;
			var yd = inc/36;
			var milla = cm/160934.4;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" km equivalen a:</h4></br>"+cm.toFixed(4)+" cm</br>"+m.toFixed(4)+" m</br>"+inc.toFixed(4)+" in</br>"+ft.toFixed(4)+" ft</br>"+yd.toFixed(4)+" yd</br>"+milla.toFixed(4)+" miles" );
		}else if(unit == 4){
			var cm = cantidad * 2.54;     
            var m = cm / 100;
            var km = cm / 100000;
            var ft = cantidad / 12;
            var yd = cantidad / 36;
            var milla = cantidad / 63360;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" in equivalen a:</h4></br>"+cm.toFixed(4)+" cm</br>"+m.toFixed(4)+" m</br>"+km.toFixed(4)+" km</br>"+ft.toFixed(4)+" ft</br>"+yd.toFixed(4)+" yd</br>"+milla.toFixed(4)+" miles" );
		}else if(unit == 5){
			var cm = cantidad * 30.48;     
			var m = cm / 100;
			var km = m / 1000;
			var inc = cantidad * 12;
			var yd = inc / 36;
			var milla = inc / 63360;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" ft equivalen a:</h4></br>"+cm.toFixed(4)+" cm</br>"+m.toFixed(4)+" m</br>"+km.toFixed(4)+" km</br>"+inc.toFixed(4)+" in</br>"+yd.toFixed(4)+" yd</br>"+milla.toFixed(4)+" miles" );
		}else if(unit == 6){
			var cm = cantidad * 91.44;     
            var m = cm / 100;
            var km = cm / 100000;
            var inc = cantidad * 36;
            var ft = inc / 12;
            var milla = inc / 63360;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" yd equivalen a:</h4></br>"+cm.toFixed(4)+" cm</br>"+m.toFixed(4)+" m</br>"+km.toFixed(4)+" km</br>"+inc.toFixed(4)+" in</br>"+ft.toFixed(4)+" ft</br>"+milla.toFixed(4)+" miles" );
		}else if(unit == 7){
			var cm = (cantidad * 63360) * 2.54;     
            var m = cm / 100;
            var km = cm / 100000;
            var inc = cantidad * 63360;
            var ft = inc / 12;
            var yd = inc / 36;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" millas equivalen a:</h4></br>"+cm.toFixed(4)+" cm</br>"+m.toFixed(4)+" m</br>"+km.toFixed(4)+" km</br>"+inc.toFixed(4)+" in</br>"+ft.toFixed(4)+" ft</br>"+yd.toFixed(4)+" yd" );
		}
	}	
}

function convertTemperatura(){
	var e = document.getElementById("selectUnits");
	var unit = e.value;
	
	var cantidad = document.getElementById("cantidad").value;
	
	if(validate(cantidad)){
		
		document.getElementById("resultAlert").style.display = "initial";
		
		var element = document.getElementById("result");
		element.innerHTML = "";
		
		if(unit == 1){
			var Kk = cantidad + 273.15;     
			var Ff = 9/5 * cantidad + 32;
			var Rr = Ff + 459.67;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" °C equivalen a:</h4></br>"+Kk+" K</br>"+Ff.toFixed(4)+" °F</br>"+Rr.toFixed(4)+" R" );
		}else if(unit == 2){
			var C = cantidad - 273.15;     
			var F = 9/5*C + 32;
			var R = F + 459.67;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" K equivalen a:</h4></br>"+C.toFixed(4)+" °C</br>"+F.toFixed(4)+" °F</br>"+R+" R" );
		}else if(unit == 3){
			var C = ( cantidad - 32)* 5/9;     
			var K = C + 273.15;
			var R = cantidad + 459.67;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" °F equivalen a:</h4></br>"+C.toFixed(4)+" °C</br>"+K.toFixed(4)+" K</br>"+R+" R" );
		}else if(unit == 4){
			var F = cantidad - 459.67;     
			var C = (F - 32)*5/9;
			var K = C + 273.15;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" R equivalen a:</h4></br>"+F.toFixed(4)+" °F</br>"+C.toFixed(4)+" °C</br>"+K.toFixed(4)+" K" );
		}
	}
}

function convertMasa(){
	var e = document.getElementById("selectUnits");
	var unit = e.value;
	
	var cantidad = document.getElementById("cantidad").value;
	
	if(validate(cantidad)){
		
		document.getElementById("resultAlert").style.display = "initial";
		
		var element = document.getElementById("result");
		element.innerHTML = "";
		
		if(unit == 1){
			var kg = cantidad * 1000;     
			var gr = kg * 1000;
			var lb = kg * 2.20462;
			var onz = lb / 16;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" ton equivalen a:</h4></br>"+kg.toFixed(4)+" kg</br>"+gr.toFixed(4)+" gr</br>"+lb.toFixed(4)+" lb</br>"+onz.toFixed(4)+" onz");
		}else if(unit == 2){
			var ton = cantidad / 1000;     
			var gr = cantidad / 1000;
			var lb = cantidad * 2.20462;
			var onz = lb / 16;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" kg equivalen a:</h4></br>"+ton.toFixed(4)+" ton</br>"+gr.toFixed(4)+" gr</br>"+lb.toFixed(4)+" lb</br>"+onz.toFixed(4)+" onz");
		}else if(unit == 3){
			var kg = cantidad / 1000;     
			var ton = kg * 1000;
			var lb = kg * 2.20462;
			var onz = lb / 16;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" gr equivalen a:</h4></br>"+kg.toFixed(4)+" kg</br>"+ton.toFixed(4)+" ton</br>"+lb.toFixed(4)+" lb</br>"+onz.toFixed(4)+" onz");
		}else if(unit == 4){
			var kg = cantidad / 2.20462;
			var ton = kg * 1000;
			var gr = kg * 1000;     
			var onz = cantidad / 16;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" lb equivalen a:</h4></br>"+kg.toFixed(4)+" kg</br>"+ton.toFixed(4)+" ton</br>"+gr.toFixed(4)+" gr</br>"+onz.toFixed(4)+" onz");
		}else if(unit == 5){
			var lb = cantidad * 16;
			var kg = lb / 2.20462;
			var ton = kg * 1000;
			var gr = kg * 1000;     
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" onz equivalen a:</h4></br>"+kg.toFixed(4)+" kg</br>"+ton.toFixed(4)+" ton</br>"+gr.toFixed(4)+" gr</br>"+lb.toFixed(4)+" lb");
		}
	}
}

function convertVolumen(){
	var e = document.getElementById("selectUnits");
	var unit = e.value;
	
	var cantidad = document.getElementById("cantidad").value;
	
	if(validate(cantidad)){
		
		document.getElementById("resultAlert").style.display = "initial";
		
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
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" cm&sup3 equivalen a:</h4></br>"+L.toFixed(4)+" L</br>"+m3.toFixed(4)+" m&sup3</br>"+onz.toFixed(4)+" onz</br>"+gal.toFixed(4)+" gal</br>"+in3.toFixed(4)+" in&sup3</br>"+ft3.toFixed(4)+" ft&sup3</br>"+yd3.toFixed(4)+" yd&sup3</br>"+milla3.toFixed(4)+" milla&sup3" );
		}else if(unit == 2){
			var cm3 = cantidad * 1000;     
            var m3 = cm3 / 1000000;
            var onz = ((cm3 / (2.54^3))/(231))*128;
            var gal = (cm3 / (2.54^3))/(231);
            var in3 = cm3 / (2.54^3);
            var ft3 = (cm3 / (30.48^3));
            var yd3 = (cm3 / (91.44^3));
            var milla3 = (cm3 / (160934.4^3));  
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" L equivalen a:</h4></br>"+cm3.toFixed(4)+" cm&sup3</br>"+m3.toFixed(4)+" m&sup3</br>"+onz.toFixed(4)+" onz</br>"+gal.toFixed(4)+" gal</br>"+in3.toFixed(4)+" in&sup3</br>"+ft3.toFixed(4)+" ft&sup3</br>"+yd3.toFixed(4)+" yd&sup3</br>"+milla3.toFixed(4)+" milla&sup3" );
		}else if(unit == 3){
			var cm3 = cantidad * 1000000;
            var L = cm3 / 1000;     
            var onz = ((cm3 / (2.54^3))/(231))*128;
            var gal = (cm3 / (2.54^3))/(231);
            var in3 = cm3 / (2.54^3);
            var ft3 = (cm3 / (30.48^3));
            var yd3 = (cm3 / (91.44^3));
            var milla3 = (cm3 / (160934.4^3));
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" m&sup3 equivalen a:</h4></br>"+L.toFixed(4)+" L</br>"+cm3.toFixed(4)+" cm&sup3</br>"+onz.toFixed(4)+" onz</br>"+gal.toFixed(4)+" gal</br>"+in3.toFixed(4)+" in&sup3</br>"+ft3.toFixed(4)+" ft&sup3</br>"+yd3.toFixed(4)+" yd&sup3</br>"+milla3.toFixed(4)+" milla&sup3" );
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
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" onz equivalen a:</h4></br>"+L.toFixed(4)+" L</br>"+m3.toFixed(4)+" m&sup3</br>"+cm3.toFixed(4)+" cm&sup3</br>"+gal.toFixed(4)+" gal</br>"+in3.toFixed(4)+" in&sup3</br>"+ft3.toFixed(4)+" ft&sup3</br>"+yd3.toFixed(4)+" yd&sup3</br>"+milla3.toFixed(4)+" milla&sup3" );
		}else if(unit == 5){
			var cm3 = (cantidad * (2.54^3))*(231);
            var L = cm3 / 1000;     
            var m3 = cm3 / 1000000;
            var onz = ((cm3 / (2.54^3))/(231))*128;
            var in3 = cm3 / (2.54^3);
            var ft3 = cm3 / (30.48^3);
            var yd3 = cm3 / (91.44^3);
            var milla3 = (cm3 / (160934.4^3)); 
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" gal equivalen a:</h4></br>"+cm3.toFixed(4)+" cm&sup3</br>"+m3.toFixed(4)+" m&sup3</br>"+onz.toFixed(4)+" onz</br>"+L.toFixed(4)+" L</br>"+in3.toFixed(4)+" in&sup3</br>"+ft3.toFixed(4)+" ft&sup3</br>"+yd3.toFixed(4)+" yd&sup3</br>"+milla3.toFixed(4)+" milla&sup3" );
		}else if(unit == 6){
		    var cm3 = cantidad * (2.54^3);
            var L = cm3 / 1000;     
			var m3 = cm3 / 1000000;
			var onz = ((cm3 / (2.54^3))/(231))*128;
			var gal = (cm3 / (2.54^3))/(231);
			var ft3 = (cm3 / 30.48^3);
			var yd3 = (cm3 / 91.44^3);
			var milla3 = (cm3 / (160934.4^3));  
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" in&sup3 equivalen a:</h4></br>"+cm3.toFixed(4)+" cm&sup3</br>"+m3.toFixed(4)+" m&sup3</br>"+onz.toFixed(4)+" onz</br>"+gal.toFixed(4)+" gal</br>"+L.toFixed(4)+" L</br>"+ft3.toFixed(4)+" ft&sup3</br>"+yd3.toFixed(4)+" yd&sup3</br>"+milla3.toFixed(4)+" milla&sup3" );
		}else if(unit == 7){
			var cm3 = (cantidad * (28316.846));
            var L = cm3 / 1000;     
            var m3 = cm3 / 1000000;
            var onz = L / 0.0295735296;
            var gal = L / 3.785411784;
            var in3 = cm3 / 16.387;
            var yd3 = (cantidad / 27);
            var milla3 = (cm3 / (160934.4^3));
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" ft&sup3 equivalen a:</h4></br>"+cm3.toFixed(4)+" cm&sup3</br>"+m3.toFixed(4)+" m&sup3</br>"+onz.toFixed(4)+" onz</br>"+gal.toFixed(4)+" gal</br>"+L.toFixed(4)+" L</br>"+in3.toFixed(4)+" in&sup3</br>"+yd3.toFixed(4)+" yd&sup3</br>"+milla3.toFixed(4)+" milla&sup3" );
		}else if(unit == 8){
			var cm3 = (cantidad * (91.44^3));
            var L = cm3 / 1000;     
            var m3 = cm3 / 1000000;
            var onz = ((cm3 / (2.54^3))/(231))*128;
            var gal = (cm3 / (2.54^3))/(231);
            var in3 = cm3 / (2.54^3);
            var ft3 = (cm3 / 30.48^3);
            var milla3 = (cm3 / (160934.4^3));
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" yd&sup3 equivalen a:</h4></br>"+cm3.toFixed(4)+" cm&sup3</br>"+m3.toFixed(4)+" m&sup3</br>"+onz.toFixed(4)+" onz</br>"+gal.toFixed(4)+" gal</br>"+L.toFixed(4)+" L</br>"+in3.toFixed(4)+" in&sup3</br>"+ft3.toFixed(4)+" ft&sup3</br>"+milla3.toFixed(4)+" milla&sup3" );
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
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" mill&sup3 equivalen a:</h4></br>"+cm3.toFixed(4)+" cm&sup3</br>"+m3.toFixed(4)+" m&sup3</br>"+onz.toFixed(4)+" onz</br>"+gal.toFixed(4)+" gal</br>"+L.toFixed(4)+" L</br>"+in3.toFixed(4)+" in&sup3</br>"+ft3.toFixed(4)+" ft&sup3</br>"+yd3.toFixed(4)+" yd&sup3" );
		}
	}
}

//PROBLEMA CON IN2
function convertArea(){
	var e = document.getElementById("selectUnits");
	var unit = e.value;
	var cantidad = document.getElementById("cantidad").value;
	
	if(validate(cantidad)){
		
		document.getElementById("resultAlert").style.display = "initial";
		
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
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" cm&sup2 equivalen a:</h4></br>"+m2.toFixed(4)+" m&sup2</br>"+km2.toFixed(4)+" km&sup2</br>"+in2.toFixed(4)+" in&sup2</br>"+ft2.toFixed(4)+" ft&sup2</br>"+yd2.toFixed(4)+" yd&sup3</br>"+milla2.toFixed(4)+" milla&sup2</br>"+hec2.toFixed(4)+" hec&sup2" );
		}else if(unit == 2){
			var cm2 = cantidad * 10000;     
            var km2 = cm2 / 10000000000;
            var in2 = cm2 / (2.54 * 2.54);
            var ft2 = cm2 / (30.48^2);
            var yd2 = cm2 / (91.44^2);
            var milla2 = cm2 / (160934.4^2);
            var hec2 = cm2 / 100000000;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" m&sup2 equivalen a:</h4></br>"+cm2.toFixed(4)+" cm&sup2</br>"+km2.toFixed(4)+" km&sup2</br>"+in2.toFixed(4)+" in&sup2</br>"+ft2.toFixed(4)+" ft&sup2</br>"+yd2.toFixed(4)+" yd&sup3</br>"+milla2.toFixed(4)+" milla&sup2</br>"+hec2.toFixed(4)+" hec&sup2" );
		}else if(unit == 3){
			var cm2 = cantidad * 10000000000;     
            var m2 = cm2 / 10000;     
            var in2 = cm2 / (2.54 * 2.54);
            var ft2 = cm2 / (30.48^2);
            var yd2 = cm2 / (91.44^2);
            var milla2 = cm2 / (160934.4^2);
            var hec2 = cm2 / 100000000;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" km&sup2 equivalen a:</h4></br>"+cm2.toFixed(4)+" cm&sup2</br>"+m2.toFixed(4)+" m&sup2</br>"+in2.toFixed(4)+" in&sup2</br>"+ft2.toFixed(4)+" ft&sup2</br>"+yd2.toFixed(4)+" yd&sup3</br>"+milla2.toFixed(4)+" milla&sup2</br>"+hec2.toFixed(4)+" hec&sup2" );
		}
		else if(unit == 4){
			var cen = cantidad * 6.4516;     
            var m2 = cen / 10000;
            var km2 = cen / 10000000000;
            var ft2 = cen / (30.48^2);
            var yd2 = cen / (91.44^2);
            var milla2 = cen / (160934.4^2);
            var hec2 = cen / 100000000;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" km&sup2 equivalen a:</h4></br>"+cen.toFixed(4)+" cm&sup2</br>"+m2.toFixed(4)+" m&sup2</br>"+km2.toFixed(4)+" km&sup2</br>"+ft2.toFixed(4)+" ft&sup2</br>"+yd2.toFixed(4)+" yd&sup3</br>"+milla2.toFixed(4)+" milla&sup2</br>"+hec2.toFixed(4)+" hec&sup2" );
		}
		else if(unit == 5){
			var cm2 = cantidad * (30.48^2);     
            var m2 = cm2 / 10000;
            var km2 = cm2 / 10000000000;
            var in2 = cm2 / (2.54 * 2.54);
            var yd2 = cm2 / (91.44^2);
            var milla2 = cm2 / (160934.4^2);
            var hec2 = cm2 / 100000000;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" ft&sup2 equivalen a:</h4></br>"+cm2.toFixed(4)+" cm&sup2</br>"+m2.toFixed(4)+" m&sup2</br>"+km2.toFixed(4)+" km&sup2</br>"+in2.toFixed(4)+" in&sup2</br>"+yd2.toFixed(4)+" yd&sup3</br>"+milla2.toFixed(4)+" milla&sup2</br>"+hec2.toFixed(4)+" hec&sup2" );
		}else if(unit == 6){
			var cm2 = cantidad * (91.44^2);     
            var m2 = cm2 / 10000;
            var km2 = cm2 / 10000000000;
            var in2 = cantidad * 1296;
            var ft2 = cm2 / (30.48^2);
            var milla2 = cm2 / (160934.4^2);
            var hec2 = cm2 / 100000000;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" yd&sup2 equivalen a:</h4></br>"+cm2.toFixed(4)+" cm&sup2</br>"+m2.toFixed(4)+" m&sup2</br>"+km2.toFixed(4)+" km&sup2</br>"+in2.toFixed(4)+" in&sup2</br>"+ft2.toFixed(4)+" ft&sup3</br>"+milla2.toFixed(4)+" milla&sup2</br>"+hec2.toFixed(4)+" hec&sup2" );
		}else if(unit == 7){
			var cm2 = cantidad * (160934.4^2);     
            var m2 = cm2 / 10000;
            var km2 = cm2 / 10000000000;
            var in2 = cm2 / (2.54 * 2.54);
            var ft2 = cm2 / (30.48^2);
            var yd2 = cm2 / (91.44^2);
            var hec2 = cm2 / 100000000
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" milla&sup2 equivalen a:</h4></br>"+cm2.toFixed(4)+" cm&sup2</br>"+m2.toFixed(4)+" m&sup2</br>"+km2.toFixed(4)+" km&sup2</br>"+in2.toFixed(4)+" in&sup2</br>"+ft2.toFixed(4)+" ft&sup3</br>"+yd2.toFixed(4)+" yd&sup2</br>"+hec2.toFixed(4)+" hec&sup2" );
		}else if(unit == 8){
			cm2 = cantidad * 100000000;     
            m2 = cm2 / 10000;
            km2 = cm2 / 10000000000;
            in2 = cm2 / (2.54 * 2.54);
            ft2 = cm2 / (30.48^2);
            yd2 = cm2 / (91.44^2);
            milla2 = cm2 / (160934.4^2);
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" hec&sup2 equivalen a:</h4></br>"+cm2.toFixed(4)+" cm&sup2</br>"+m2.toFixed(4)+" m&sup2</br>"+km2.toFixed(4)+" km&sup2</br>"+in2.toFixed(4)+" in&sup2</br>"+ft2.toFixed(4)+" ft&sup3</br>"+yd2.toFixed(4)+" yd&sup2</br>"+milla2.toFixed(4)+" milla&sup2" );
		}
	}
}

function convertPresion(){
	var e = document.getElementById("selectUnits");
	var unit = e.value;
	
	var cantidad = document.getElementById("cantidad").value;
	
	if(validate(cantidad)){
		
		document.getElementById("resultAlert").style.display = "initial";
		
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
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" pascal equivalen a:</h4></br>"+kPa.toFixed(4)+" kPa</br>"+Mpa.toFixed(4)+" Mpa</br>"+atm.toFixed(4)+" atm</br>"+bar.toFixed(4)+" bar</br>"+mmHg.toFixed(4)+" mmHg</br>"+Psia.toFixed(4)+" Psia</br>"+lbft.toFixed(4)+" lbft" );
		}else if(unit == 2){
			var pascal = cantidad * 1000;     
            var Mpa = cantidad / 1000;
            var atm = pascal / 101325;
            var bar = pascal / 100000;
            var mmHg = atm * 760;
            var Psia = pascal / 6894.76;
            var lbft = Psia * 144;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" kPa equivalen a:</h4></br>"+pascal.toFixed(4)+" Pascal</br>"+Mpa.toFixed(4)+" Mpa</br>"+atm.toFixed(4)+" atm</br>"+bar.toFixed(4)+" bar</br>"+mmHg.toFixed(4)+" mmHg</br>"+Psia.toFixed(4)+" Psia</br>"+lbft.toFixed(4)+" lbft" );
		}else if(unit == 3){
			var pascal = cantidad * 1000000;     
            var kPa = cantidad * 1000;
            var atm = pascal / 101325;
            var bar = pascal / 100000;
            var mmHg = atm * 760;
            var Psia = pascal / 6894.76;
            var lbft = Psia * 144;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" Mpa equivalen a:</h4></br>"+pascal.toFixed(4)+" Pascal</br>"+kPa.toFixed(4)+" kPa</br>"+atm.toFixed(4)+" atm</br>"+bar.toFixed(4)+" bar</br>"+mmHg.toFixed(4)+" mmHg</br>"+Psia.toFixed(4)+" Psia</br>"+lbft.toFixed(4)+" lbft" );
		}else if(unit == 4){
			var pascal = cantidad * 101325;     
            var kPa = cantidad * 101.325;
            var Mpa = kPa / 1000;
            var bar = pascal / 100000;
            var mmHg = cantidad * 760;
            var Psia = pascal / 6894.76;
            var lbft = Psia * 144;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" atm equivalen a:</h4></br>"+pascal.toFixed(4)+" Pascal</br>"+kPa.toFixed(4)+" kPa</br>"+Mpa.toFixed(4)+" Mpa</br>"+bar.toFixed(4)+" bar</br>"+mmHg.toFixed(4)+" mmHg</br>"+Psia.toFixed(4)+" Psia</br>"+lbft.toFixed(4)+" lbft" );
		}else if(unit == 5){
			var pascal = cantidad * 100000;     
            var kPa = pascal / 1000;
            var Mpa = kPa / 1000;
            var atm = cantidad / 1.01325;
            var mmHg = atm * 760;
            var Psia = pascal / 6894.76;
            var lbft = Psia * 144
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" bar equivalen a:</h4></br>"+pascal.toFixed(4)+" Pascal</br>"+kPa.toFixed(4)+" kPa</br>"+Mpa.toFixed(4)+" Mpa</br>"+atm.toFixed(4)+" atm</br>"+mmHg.toFixed(4)+" mmHg</br>"+Psia.toFixed(4)+" Psia</br>"+lbft.toFixed(4)+" lbft" );
		}else if(unit == 6){
			var pascal = (cantidad * 101325) / 760;     
            var kPa = pascal / 1000;
            var Mpa = kPa / 1000;
            var atm = cantidad / 760;
            var bar = pascal / 100000;
            var Psia = pascal / 6894.76;
            var lbft = Psia * 144;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" mmHg equivalen a:</h4></br>"+pascal.toFixed(4)+" Pascal</br>"+kPa.toFixed(4)+" kPa</br>"+Mpa.toFixed(4)+" Mpa</br>"+atm.toFixed(4)+" atm</br>"+bar.toFixed(4)+" bar</br>"+Psia.toFixed(4)+" Psia</br>"+lbft.toFixed(4)+" lbft" );
		}else if(unit == 7){
			var pascal = cantidad * 6894.76;     
            var kPa = pascal / 1000;
            var Mpa = kPa / 1000;
            var atm = cantidad * 0.068046;
            var bar = pascal / 100000;
            var mmHg = atm * 760;
            var lbft = cantidad * 144;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" Psia equivalen a:</h4></br>"+pascal.toFixed(4)+" Pascal</br>"+kPa.toFixed(4)+" kPa</br>"+Mpa.toFixed(4)+" Mpa</br>"+atm.toFixed(4)+" atm</br>"+bar.toFixed(4)+" bar</br>"+mmHg.toFixed(4)+" mmHg</br>"+lbft.toFixed(4)+" lbft" );
		}else if(unit == 8){
			var pascal = (cantidad * 6894.76)/144;     
            var kPa = pascal / 1000;
            var Mpa = kPa / 1000;
            var atm = pascal / 101325;
            var bar = pascal / 100000;
            var mmHg = atm * 760;
            var Psia = cantidad / 144;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" lbft equivalen a:</h4></br>"+pascal.toFixed(4)+" Pascal</br>"+kPa.toFixed(4)+" kPa</br>"+Mpa.toFixed(4)+" Mpa</br>"+atm.toFixed(4)+" atm</br>"+bar.toFixed(4)+" bar</br>"+mmHg.toFixed(4)+" mmHg</br>"+Psia.toFixed(4)+" Psia" );
		}
	}
}

function convertFuerza(){
	var e = document.getElementById("selectUnits");
	var unit = e.value;
	
	var cantidad = document.getElementById("cantidad").value;
	
	if(validate(cantidad)){
		
		document.getElementById("resultAlert").style.display = "initial";
		
		var element = document.getElementById("result");
		element.innerHTML = "";
		
		if(unit == 1){
			var dina = cantidad * 100000;     
            var kgf = cantidad / 9.80665;
            var lbf = cantidad * (.224801);
            var poundal = (cantidad * (.224801)) * (32.174);
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" N equivalen a:</h4></br>"+dina.toFixed(4)+" dina</br>"+kgf+" kgf</br>"+lbf.toFixed(4)+" lbf</br>"+poundal.toFixed(4)+" poundal" );
		}else if(unit == 2){
			var N = cantidad / 100000; 
            var kgf = N / 9.80665;
            var lbf = N * (.224801);
            var poundal = (N * (.224801)) * (32.174);
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" dina equivalen a:</h4></br>"+N.toFixed(4)+" N</br>"+kgf.toFixed(4)+" kgf</br>"+lbf.toFixed(4)+" lbf</br>"+poundal.toFixed(4)+" poundal" );
		}else if(unit == 3){
			var N =  cantidad * 9.80665;
            var dina = N * 100000;     
            var lbf = N * (.224801);
            var poundal = (N * (.224801)) * (32.174); 
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" kgf equivalen a:</h4></br>"+N.toFixed(4)+" N</br>"+dina.toFixed(4)+" dina</br>"+lbf.toFixed(4)+" lbf</br>"+poundal.toFixed(4)+" poundal" );
		}else if(unit == 4){
			var N =  cantidad / (.224801);
            var dina = N * 100000;     
            var kgf = N / 9.80665;
            var poundal = (N * (.224801)) * (32.174);
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" lbf equivalen a:</h4></br>"+N.toFixed(4)+" N</br>"+dina.toFixed(4)+" dina</br>"+kgf.toFixed(4)+" kgf</br>"+poundal.toFixed(4)+" poundal" );
		}else if(unit == 5){
			var N = (cantidad / (.224801)) / (32.174);
            var dina = N * 100000;     
            var kgf = N / 9.80665;
            var lbf = N * (.224801);
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" poundal equivalen a:</h4></br>"+N.toFixed(4)+" N</br>"+dina.toFixed(4)+" dina</br>"+kgf.toFixed(4)+" kgf</br>"+lbf.toFixed(4)+" lbf" );
		}
	}
}

function convertAceleracion(){
	var e = document.getElementById("selectUnits");
	var unit = e.value;
	
	var cantidad = document.getElementById("cantidad").value;
	
	if(validate(cantidad)){
		
		document.getElementById("resultAlert").style.display = "initial";
		
		var element = document.getElementById("result");
		element.innerHTML = "";
		
		if(unit == 1){
			var ms2 = (cantidad) / 100;
            var kmh2 = ((cantidad) / 100000) * (3600^2);
            var ins2 = (cantidad) / 2.54;
            var fts2 = (cantidad) / 30.48;
            var millah2 = ((cantidad / 2.54)/63360) * 3600^2;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" cm/s&sup2 equivalen a:</h4></br>"+ms2.toFixed(4)+" m/s&sup2</br>"+kmh2.toFixed(4)+" km/h&sup2</br>"+ins2.toFixed(4)+" in/s&sup2</br>"+fts2.toFixed(4)+" ft/s&sup2</br>"+millah2.toFixed(4)+" milla/h&sup2" );
		}else if(unit == 2){
			var cms2 = (cantidad) * 100;
            var kmh2 = ((cms2) / 100000) * (3600^2);
            var ins2 = (cms2) / 2.54;
            var fts2 = (cms2) / 30.48;
            var millah2 =((cms2 / 2.54)/63360) * 3600^2; 
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" m/s&sup2 equivalen a:</h4></br>"+cms2.toFixed(4)+" cm/s&sup2</br>"+kmh2.toFixed(4)+" km/h&sup2</br>"+ins2.toFixed(4)+" in/s&sup2</br>"+fts2.toFixed(4)+" ft/s&sup2</br>"+millah2.toFixed(4)+" milla/h&sup2" );
		}else if(unit == 3){
			var cms2 = ((cantidad) * 100000) / (3600^2); 
            var ms2 = (cms2) / 100;
            var ins2 = (cms2) / 2.54;
            var fts2 = (cms2) / 30.48;
            var millah2 = ((cms2 / 2.54)/63360) * 3600^2;  
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" km/s&sup2 equivalen a:</h4></br>"+cms2.toFixed(4)+" cm/s&sup2</br>"+ms2.toFixed(4)+" m/h&sup2</br>"+ins2.toFixed(4)+" in/s&sup2</br>"+fts2.toFixed(4)+" ft/s&sup2</br>"+millah2.toFixed(4)+" milla/h&sup2" );
		}else if(unit == 4){
			var cms2 = (cantidad) * 2.54;
            var ms2 = (cms2) / 100;
            var kmh2 = ((cms2) / 100000) * (3600^2);
            var fts2 = (cms2) / 30.48;
            var millah2 = ((cms2 / 2.54)/63360) * 3600^2;  
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" in/s&sup2 equivalen a:</h4></br>"+cms2.toFixed(4)+" cm/s&sup2</br>"+ms2.toFixed(4)+" m/h&sup2</br>"+kmh2.toFixed(4)+" km/h&sup2</br>"+fts2.toFixed(4)+" ft/s&sup2</br>"+millah2.toFixed(4)+" milla/h&sup2" );
		}else if(unit == 5){
			var cms2 = (cantidad) * 30.48;
            var ms2 = cms2 / 100;
            var kmh2 = ((cms2) / 100000) * (3600^2);
            var ins2 = (cms2) / 2.54;
            var millah2 = ((cms2 / 2.54)/63360) * 3600^2;

			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" ft/s&sup2 equivalen a:</h4></br>"+cms2.toFixed(4)+" cm/s&sup2</br>"+ms2.toFixed(4)+" m/h&sup2</br>"+kmh2.toFixed(4)+" km/h&sup2</br>"+ins2.toFixed(4)+" in/s&sup2</br>"+millah2.toFixed(4)+" milla/h&sup2" );			
		}else if(unit == 6){
			var cms2 = ((cantidad * 2.54)*63360) / 3600^2;
            var ms2 = (cms2) / 100;
            var kmh2 = ((cms2) / 100000) * (3600^2);
            var ins2 = (cms2) / 2.54;
            var fts2 = (cms2) / 30.48;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" milla/h&sup2 equivalen a:</h4></br>"+cms2.toFixed(4)+" cm/s&sup2</br>"+ms2.toFixed(4)+" m/h&sup2</br>"+kmh2.toFixed(4)+" km/h&sup2</br>"+ins2.toFixed(4)+" in/s&sup2</br>"+fts2.toFixed(4)+" ft/s&sup2" );			
		}
	}
}

function convertDensidad(){
	var e = document.getElementById("selectUnits");
	var unit = e.value;
	
	var cantidad = document.getElementById("cantidad").value;
	
	if(validate(cantidad)){
		
		document.getElementById("resultAlert").style.display = "initial";
		
		var element = document.getElementById("result");
		element.innerHTML = "";
		
		if(unit == 1){
			var kgL = cantidad;
			var kgm3 = cantidad * 1000;
			var lbin3 = ((cantidad * 2.20462)/1000)*(2.54^3);   
			var lbft3 = ((cantidad * 2.20462)/1000)*(30.48^3);
		
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" gr/cm&sup3 equivalen a:</h4></br>"+kgL+" kg/L</br>"+kgm3.toFixed(4)+" kg/m&sup3</br>"+lbin3.toFixed(4)+" lb/in&sup3</br>"+lbft3.toFixed(4)+" lb/ft&sup3" );
		}else if(unit == 2){
			var grcm3 = cantidad;
			var kgm3 = grcm3 * 1000;
			var lbin3 = ((grcm3 * 2.20462)/1000)*(2.54^3);   
			var lbft3 = ((grcm3 * 2.20462)/1000)*(30.48^3);
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" kg/L equivalen a:</h4></br>"+grcm3+" g/cm&sup3</br>"+kgm3.toFixed(4)+" kg/m&sup3</br>"+lbin3.toFixed(4)+" lb/in&sup3</br>"+lbft3.toFixed(4)+" lb/ft&sup3" );
		}else if(unit == 3){
			var grcm3 = cantidad / 1000;
			var kgL = grcm3;
			var lbin3 = ((grcm3 * 2.20462)/1000)*(2.54^3);   
			var lbft3 = ((grcm3 * 2.20462)/1000)*(30.48^3);
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" kg/m&sup3 equivalen a:</h4></br>"+grcm3.toFixed(4)+" g/cm&sup3</br>"+kgL.toFixed(4)+" kg/L</br>"+lbin3.toFixed(4)+" lb/in&sup3</br>"+lbft3.toFixed(4)+" lb/ft&sup3" );
		}else if(unit == 4){
			var grcm3 = ((cantidad / 2.20462)*1000)/(2.54^3);
			var kgL = grcm3;
			var kgm3 = grcm3 * 1000;
			var lbft3 = ((grcm3 * 2.20462)/1000)*(30.48^3);
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" lb/in&sup3 equivalen a:</h4></br>"+grcm3.toFixed(4)+" g/cm&sup3</br>"+kgL.toFixed(4)+" kg/L</br>"+kgm3.toFixed(4)+" kg/m&sup3</br>"+lbft3.toFixed(4)+" lb/ft&sup3" );
		}else if(unit == 5){
			var grcm3 = ((cantidad / 2.20462)*1000)/(30.48^3);
			var kgL = grcm3;
			var kgm3 = grcm3 * 1000;
			var lbin3 = ((grcm3 * 2.20462)/1000)*(2.54^3); 

			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" lb/ft&sup3 equivalen a:</h4></br>"+grcm3.toFixed(4)+" g/cm&sup3</br>"+kgL.toFixed(4)+" kg/L</br>"+kgm3.toFixed(4)+" kg/m&sup3</br>"+lbin3.toFixed(4)+" lb/in&sup3" );			
		}
	}
}

function convertEnergia(){
	var e = document.getElementById("selectUnits");
	var unit = e.value;
	
	var cantidad = document.getElementById("cantidad").value;
	
	if(validate(cantidad)){
		
		document.getElementById("resultAlert").style.display = "initial";
		
		var element = document.getElementById("result");
		element.innerHTML = "";
		
		if(unit == 1){
			var kJ = cantidad / 1000;    
            var Nm = cantidad ; 
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
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" J equivalen a:</h4></br>"+kJ.toFixed(4)+" kJ</br>"+Nm+" Nm</br>"+kPam3.toFixed(4)+" kPsm.m&sup3</br>"+kWh.toFixed(4)+" kW/h</br>"+cal.toFixed(4)+" cal</br>"+Cal.toFixed(4)+" Cal</br>"+kJ_kg+" kJ_kg</br>"+Psiaft3.toFixed(4)+" Psia.ft&sup3</br>"+lbfft.toFixed(4)+" lbf.ft</br>"+BTU.toFixed(4)+" BTU</br>"+BTU_lb.toFixed(4)+" BTU_lb</br>"+ft2_s2.toFixed(4)+" ft&sup2_s&sup2</br>"+termia.toFixed(4)+" termia" );
		}else if(unit == 2){
			var J = cantidad * 1000;
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
            var termia = (J / 1055.0559)*100000;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" kJ equivalen a:</h4></br>"+J.toFixed(4)+" J</br>"+Nm.toFixed(4)+" Nm</br>"+kPam3.toFixed(4)+" kPsm.m&sup3</br>"+kWh.toFixed(4)+" kW/h</br>"+cal.toFixed(4)+" cal</br>"+Cal.toFixed(4)+" Cal</br>"+kJ_kg.toFixed(4)+" kJ_kg</br>"+Psiaft3.toFixed(4)+" Psia.ft&sup3</br>"+lbfft.toFixed(4)+" lbf.ft</br>"+BTU.toFixed(4)+" BTU</br>"+BTU_lb.toFixed(4)+" BTU_lb</br>"+ft2_s2.toFixed(4)+" ft&sup2_s&sup2</br>"+termia.toFixed(4)+" termia" );
		}else if(unit == 3){
			var J = cantidad;
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
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" Nm equivalen a:</h4></br>"+J+" J</br>"+kJ+" kJ</br>"+kPam3.toFixed(4)+" kPsm.m&sup3</br>"+kWh.toFixed(4)+" kW/h</br>"+cal.toFixed(4)+" cal</br>"+Cal.toFixed(4)+" Cal</br>"+kJ_kg+" kJ_kg</br>"+Psiaft3.toFixed(4)+" Psia.ft&sup3</br>"+lbfft.toFixed(4)+" lbf.ft</br>"+BTU.toFixed(4)+" BTU</br>"+BTU_lb.toFixed(4)+" BTU_lb</br>"+ft2_s2.toFixed(4)+" ft&sup2_s&sup2</br>"+termia.toFixed(4)+" termia" );
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
		
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" kPa.m&sup3 equivalen a:</h4></br>"+J.toFixed(4)+" J</br>"+kJ.toFixed(4)+" kJ</br>"+Nm.toFixed(4)+" Nm</br>"+kWh.toFixed(4)+" kW/h</br>"+cal.toFixed(4)+" cal</br>"+Cal.toFixed(4)+" Cal</br>"+kJ_kg.toFixed(4)+" kJ_kg</br>"+Psiaft3.toFixed(4)+" Psia.ft&sup3</br>"+lbfft.toFixed(4)+" lbf.ft</br>"+BTU.toFixed(4)+" BTU</br>"+BTU_lb.toFixed(4)+" BTU_lb</br>"+ft2_s2.toFixed(4)+" ft&sup2_s&sup2</br>"+termia.toFixed(4)+" termia" );
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
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" kW/h equivalen a:</h4></br>"+J.toFixed(4)+" J</br>"+kJ.toFixed(4)+" kJ</br>"+Nm.toFixed(4)+" Nm</br>"+kPam3.toFixed(4)+" kPa.m&sup3</br>"+cal.toFixed(4)+" cal</br>"+Cal.toFixed(4)+" Cal</br>"+kJ_kg.toFixed(4)+" kJ_kg</br>"+Psiaft3.toFixed(4)+" Psia.ft&sup3</br>"+lbfft.toFixed(4)+" lbf.ft</br>"+BTU.toFixed(4)+" BTU</br>"+BTU_lb.toFixed(4)+" BTU_lb</br>"+ft2_s2.toFixed(4)+" ft&sup2_s&sup2</br>"+termia.toFixed(4)+" termia" );
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
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" cal equivalen a:</h4></br>"+J.toFixed(4)+" J</br>"+kJ.toFixed(4)+" kJ</br>"+Nm.toFixed(4)+" Nm</br>"+kPam3.toFixed(4)+" kPa.m&sup3</br>"+kWh.toFixed(4)+" kW/h</br>"+Cal.toFixed(4)+" Cal</br>"+kJ_kg.toFixed(4)+" kJ_kg</br>"+Psiaft3.toFixed(4)+" Psia.ft&sup3</br>"+lbfft.toFixed(4)+" lbf.ft</br>"+BTU.toFixed(4)+" BTU</br>"+BTU_lb.toFixed(4)+" BTU_lb</br>"+ft2_s2.toFixed(4)+" ft&sup2_s&sup2</br>"+termia.toFixed(4)+" termia" );
		}else if(unit == 7){
			var Cal =cantidad;
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
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" Cal equivalen a:</h4></br>"+J.toFixed(4)+" J</br>"+kJ.toFixed(4)+" kJ</br>"+Nm.toFixed(4)+" Nm</br>"+kPam3.toFixed(4)+" kPa.m&sup3</br>"+kWh.toFixed(4)+" kW/h</br>"+cal.toFixed(4)+" cal</br>"+kJ_kg.toFixed(4)+" kJ_kg</br>"+Psiaft3.toFixed(4)+" Psia.ft&sup3</br>"+lbfft.toFixed(4)+" lbf.ft</br>"+BTU.toFixed(4)+" BTU</br>"+BTU_lb.toFixed(4)+" BTU_lb</br>"+ft2_s2.toFixed(4)+" ft&sup2_s&sup2</br>"+termia.toFixed(4)+" termia" );
		}else if(unit == 8){
			var J =cantidad;
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
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" kJ_kg equivalen a:</h4></br>"+J+" J</br>"+kJ.toFixed(4)+" kJ</br>"+Nm+" Nm</br>"+kPam3.toFixed(4)+" kPa.m&sup3</br>"+kWh.toFixed(4)+" kW/h</br>"+cal.toFixed(4)+" cal</br>"+Cal.toFixed(4)+" cal</br>"+Psiaft3.toFixed(4)+" Psia.ft&sup3</br>"+lbfft.toFixed(4)+" lbf.ft</br>"+BTU.toFixed(4)+" BTU</br>"+BTU_lb.toFixed(4)+" BTU_lb</br>"+ft2_s2.toFixed(4)+" ft&sup2_s&sup2</br>"+termia.toFixed(4)+" termia" );
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
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" Psia.ft&sup3 equivalen a:</h4></br>"+J.toFixed(4)+" J</br>"+kJ.toFixed(4)+" kJ</br>"+Nm.toFixed(4)+" Nm</br>"+kPam3.toFixed(4)+" kPa.m&sup3</br>"+kWh.toFixed(4)+" kW/h</br>"+cal.toFixed(4)+" cal</br>"+Cal.toFixed(4)+" cal</br>"+kJ_kg.toFixed(4)+" kJ_kg</br>"+lbfft.toFixed(4)+" lbf.ft</br>"+BTU.toFixed(4)+" BTU</br>"+BTU_lb.toFixed(4)+" BTU_lb</br>"+ft2_s2.toFixed(4)+" ft&sup2_s&sup2</br>"+termia.toFixed(4)+" termia" );
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
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" lbf.ft equivalen a:</h4></br>"+J.toFixed(4)+" J</br>"+kJ.toFixed(4)+" kJ</br>"+Nm.toFixed(4)+" Nm</br>"+kPam3.toFixed(4)+" kPa.m&sup3</br>"+kWh.toFixed(4)+" kW/h</br>"+cal.toFixed(4)+" cal</br>"+Cal.toFixed(4)+" cal</br>"+kJ_kg.toFixed(4)+" kJ_kg</br>"+Psiaft3.toFixed(4)+" Psia.ft&sup3</br>"+BTU.toFixed(4)+" BTU</br>"+BTU_lb.toFixed(4)+" BTU_lb</br>"+ft2_s2.toFixed(4)+" ft&sup2_s&sup2</br>"+termia.toFixed(4)+" termia" );
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
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" BTU equivalen a:</h4></br>"+J.toFixed(4)+" J</br>"+kJ.toFixed(4)+" kJ</br>"+Nm.toFixed(4)+" Nm</br>"+kPam3.toFixed(4)+" kPa.m&sup3</br>"+kWh.toFixed(4)+" kW/h</br>"+cal.toFixed(4)+" cal</br>"+Cal.toFixed(4)+" cal</br>"+kJ_kg.toFixed(4)+" kJ_kg</br>"+Psiaft3.toFixed(4)+" Psia.ft&sup3</br>"+lbfft.toFixed(4)+" lbf.ft</br>"+BTU_lb.toFixed(4)+" BTU_lb</br>"+ft2_s2.toFixed(4)+" ft&sup2_s&sup2</br>"+termia.toFixed(4)+" termia" );
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
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" BTU_lb equivalen a:</h4></br>"+J.toFixed(4)+" J</br>"+kJ.toFixed(4)+" kJ</br>"+Nm.toFixed(4)+" Nm</br>"+kPam3.toFixed(4)+" kPa.m&sup3</br>"+kWh.toFixed(4)+" kW/h</br>"+cal.toFixed(4)+" cal</br>"+Cal.toFixed(4)+" cal</br>"+kJ_kg.toFixed(4)+" kJ_kg</br>"+Psiaft3.toFixed(4)+" Psia.ft&sup3</br>"+lbfft.toFixed(4)+" lbf.ft</br>"+BTU.toFixed(4)+" BTU</br>"+ft2_s2.toFixed(4)+" ft&sup2_s&sup2</br>"+termia.toFixed(4)+" termia" );
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
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" ft2_s2 equivalen a:</h4></br>"+J.toFixed(4)+" J</br>"+kJ.toFixed(4)+" kJ</br>"+Nm.toFixed(4)+" Nm</br>"+kPam3.toFixed(4)+" kPa.m&sup3</br>"+kWh.toFixed(4)+" kW/h</br>"+cal.toFixed(4)+" cal</br>"+Cal.toFixed(4)+" cal</br>"+kJ_kg.toFixed(4)+" kJ_kg</br>"+Psiaft3.toFixed(4)+" Psia.ft&sup3</br>"+lbfft.toFixed(4)+" lbf.ft</br>"+BTU.toFixed(4)+" BTU</br>"+BTU_lb.toFixed(4)+" BTU_lb</br>"+termia.toFixed(4)+" termia" );
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
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" termia equivalen a:</h4></br>"+J.toFixed(4)+" J</br>"+kJ.toFixed(4)+" kJ</br>"+Nm.toFixed(4)+" Nm</br>"+kPam3.toFixed(4)+" kPa.m&sup3</br>"+kWh.toFixed(4)+" kW/h</br>"+cal.toFixed(4)+" cal</br>"+Cal.toFixed(4)+" cal</br>"+kJ_kg.toFixed(4)+" kJ_kg</br>"+Psiaft3.toFixed(4)+" Psia.ft&sup3</br>"+lbfft.toFixed(4)+" lbf.ft</br>"+BTU.toFixed(4)+" BTU</br>"+BTU_lb.toFixed(4)+" BTU_lb</br>"+ft2_s2.toFixed(4)+" ft&sup2_s&sup2" );
		}
	}
}

function convertFlujo(){
	var e = document.getElementById("selectUnits");
	var unit = e.value;
	
	var cantidad = document.getElementById("cantidad").value;
	
	if(validate(cantidad)){
		
		document.getElementById("resultAlert").style.display = "initial";
		
		var element = document.getElementById("result");
		element.innerHTML = "";
		
		if(unit == 1){
			var W_m2 = cantidad * 100000;
            var BTU_hft2 = (cantidad * 100000) * 0.3171;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" W_cm&sup2 equivalen a:</h4></br>"+W_m2.toFixed(4)+" W_m&sup2</br>"+BTU_hft2.toFixed(4)+" BTU_hft&sup2" );
		}else if(unit == 2){
			var W_cm2 = cantidad / 100000;
			var BTU_hft2 = (cantidad * 100000) * 0.3171
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" W_m&sup2 equivalen a:</h4></br>"+W_cm2.toFixed(4)+" W_cm&sup2</br>"+BTU_hft2.toFixed(4)+" BTU_hft&sup2" );
		}else if(unit == 3){
			var W_cm2 = (cantidad / 100000) / 0.3171;
            var W_m2 = W_cm2 * 100000
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" BTU_hft&sup2 equivalen a:</h4></br>"+W_cm2.toFixed(4)+" W_cm&sup2</br>"+W_m2.toFixed(4)+" W_m&sup2" );
		}
	}
}

function convertPotencia(){
	var e = document.getElementById("selectUnits");
	var unit = e.value;
	
	var cantidad = document.getElementById("cantidad").value;
	
	if(validate(cantidad)){
		
		document.getElementById("resultAlert").style.display = "initial";
		
		var element = document.getElementById("result");
		element.innerHTML = "";
		
		if(unit == 1){
			var Js = cantidad;    
            var kW = cantidad / 1000; 
            var hp = (cantidad * .00134102208959509);
            var BTUh = ( cantidad * 3.41214163312794);
            var BTUmin = ( cantidad * 3.41214163312794) / 60;
            var BTUs = ( cantidad * 3.41214163312794) / 3600;
            var lbfts = ( cantidad * .737562149277299);
            var hpcald = BTUh /(33481.6397750679);
            var kJh = (cantidad * 3.6);
            var Tonrefri = (( cantidad * 3.41214163312794) / 60)/200;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" W equivalen a:</h4></br>"+Js+" Js</br>"+kW.toFixed(4)+" kW</br>"+hp.toFixed(4)+" hp</br>"+BTUh.toFixed(4)+" BTUm</br>"+BTUmin.toFixed(4)+" BTUmin</br>"+BTUs.toFixed(4)+" BTUs</br>"+lbfts.toFixed(4)+" lbfts</br>"+hpcald.toFixed(4)+" hpcald</br>"+kJh.toFixed(4)+" kJh</br>"+Tonrefri.toFixed(4)+" Tonrefri");
		}else if(unit == 2){
			var W = cantidad;
            var kW = W / 1000; 
            var hp = (W * .00134102208959509);
            var BTUh = ( W * 3.41214163312794);
            var BTUmin = ( W * 3.41214163312794) / 60;
            var BTUs = ( W * 3.41214163312794) / 3600;
            var lbfts = ( W * .737562149277299);
            var hpcald = BTUh /(33481.6397750679);
            var kJh = (W * 3.6);
            var Tonrefri = (( W * 3.41214163312794) / 60)/200;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" Js equivalen a:</h4></br>"+W+" W</br>"+kW.toFixed(4)+" kW</br>"+hp.toFixed(4)+" hp</br>"+BTUh.toFixed(4)+" BTUm</br>"+BTUmin.toFixed(4)+" BTUmin</br>"+BTUs.toFixed(4)+" BTUs</br>"+lbfts.toFixed(4)+" lbfts</br>"+hpcald.toFixed(4)+" hpcald</br>"+kJh.toFixed(4)+" kJh</br>"+Tonrefri.toFixed(4)+" Tonrefri");
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
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" kW equivalen a:</h4></br>"+W.toFixed(4)+" W</br>"+Js.toFixed(4)+" Js</br>"+hp.toFixed(4)+" hp</br>"+BTUh.toFixed(4)+" BTUm</br>"+BTUmin.toFixed(4)+" BTUmin</br>"+BTUs.toFixed(4)+" BTUs</br>"+lbfts.toFixed(4)+" lbfts</br>"+hpcald.toFixed(4)+" hpcald</br>"+kJh.toFixed(4)+" kJh</br>"+Tonrefri.toFixed(4)+" Tonrefri");
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
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" hp equivalen a:</h4></br>"+W.toFixed(4)+" W</br>"+kW.toFixed(4)+" kW</br>"+Js.toFixed(4)+" Js</br>"+BTUh.toFixed(4)+" BTUm</br>"+BTUmin.toFixed(4)+" BTUmin</br>"+BTUs.toFixed(4)+" BTUs</br>"+lbfts.toFixed(4)+" lbfts</br>"+hpcald.toFixed(4)+" hpcald</br>"+kJh.toFixed(4)+" kJh</br>"+Tonrefri.toFixed(4)+" Tonrefri");
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
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" BTUh equivalen a:</h4></br>"+W.toFixed(4)+" W</br>"+kW.toFixed(4)+" kW</br>"+Js.toFixed(4)+" Js</br>"+hp.toFixed(4)+" hp</br>"+BTUmin.toFixed(4)+" BTUmin</br>"+BTUs.toFixed(4)+" BTUs</br>"+lbfts.toFixed(4)+" lbfts</br>"+hpcald.toFixed(4)+" hpcald</br>"+kJh.toFixed(4)+" kJh</br>"+Tonrefri.toFixed(4)+" Tonrefri");
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
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" BTUmin equivalen a:</h4></br>"+W.toFixed(4)+" W</br>"+kW.toFixed(4)+" kW</br>"+Js.toFixed(4)+" Js</br>"+hp.toFixed(4)+" hp</br>"+BTUh.toFixed(4)+" BTUh</br>"+BTUs.toFixed(4)+" BTUs</br>"+lbfts.toFixed(4)+" lbfts</br>"+hpcald.toFixed(4)+" hpcald</br>"+kJh.toFixed(4)+" kJh</br>"+Tonrefri.toFixed(4)+" Tonrefri");
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
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" BTUs equivalen a:</h4></br>"+W.toFixed(4)+" W</br>"+kW.toFixed(4)+" kW</br>"+Js.toFixed(4)+" Js</br>"+hp.toFixed(4)+" hp</br>"+BTUh.toFixed(4)+" BTUh</br>"+BTUmin.toFixed(4)+" BTUmin</br>"+lbfts.toFixed(4)+" lbfts</br>"+hpcald.toFixed(4)+" hpcald</br>"+kJh.toFixed(4)+" kJh</br>"+Tonrefri.toFixed(4)+" Tonrefri");
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
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" lbfts equivalen a:</h4></br>"+W.toFixed(4)+" W</br>"+kW.toFixed(4)+" kW</br>"+Js.toFixed(4)+" Js</br>"+hp.toFixed(4)+" hp</br>"+BTUh.toFixed(4)+" BTUh</br>"+BTUmin.toFixed(4)+" BTUmin</br>"+BTUs.toFixed(4)+" BTUs</br>"+hpcald.toFixed(4)+" hpcald</br>"+kJh.toFixed(4)+" kJh</br>"+Tonrefri.toFixed(4)+" Tonrefri");
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
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" hpcal equivalen a:</h4></br>"+W.toFixed(4)+" W</br>"+kW.toFixed(4)+" kW</br>"+Js.toFixed(4)+" Js</br>"+hp.toFixed(4)+" hp</br>"+BTUh.toFixed(4)+" BTUh</br>"+BTUmin.toFixed(4)+" BTUmin</br>"+BTUs.toFixed(4)+" BTUs</br>"+lbfts.toFixed(4)+" lbfts</br>"+kJh.toFixed(4)+" kJh</br>"+Tonrefri.toFixed(4)+" Tonrefri");
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
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" kJh equivalen a:</h4></br>"+W.toFixed(4)+" W</br>"+kW.toFixed(4)+" kW</br>"+Js.toFixed(4)+" Js</br>"+hp.toFixed(4)+" hp</br>"+BTUh.toFixed(4)+" BTUh</br>"+BTUmin.toFixed(4)+" BTUmin</br>"+BTUs.toFixed(4)+" BTUs</br>"+lbfts.toFixed(4)+" lbfts</br>"+hpcald.toFixed(4)+" hpcal</br>"+Tonrefri.toFixed(4)+" Tonrefri");
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
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" Tonrefri equivalen a:</h4></br>"+W.toFixed(4)+" W</br>"+kW.toFixed(4)+" kW</br>"+Js.toFixed(4)+" Js</br>"+hp.toFixed(4)+" hp</br>"+BTUh.toFixed(4)+" BTUh</br>"+BTUmin.toFixed(4)+" BTUmin</br>"+BTUs.toFixed(4)+" BTUs</br>"+lbfts.toFixed(4)+" lbfts</br>"+hpcald.toFixed(4)+" hpcal</br>"+kJh.toFixed(4)+" kJh");
		}
	}
}

function convertVelocidad(){
	var e = document.getElementById("selectUnits");
	var unit = e.value;
	
	var cantidad = document.getElementById("cantidad").value;
	
	if(validate(cantidad)){
		
		document.getElementById("resultAlert").style.display = "initial";
		
		var element = document.getElementById("result");
		element.innerHTML = "";
		
		if(unit == 1){
			var ms = (cantidad) / 100;
            var kmh = ((cantidad) / 100000) * (3600);
            var ins = (cantidad) / 2.54;
            var fts = (cantidad) / 30.48;
            var millah = ((cantidad / 2.54)/63360) * 3600; 
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" cm/s equivalen a:</h4></br>"+ms.toFixed(4)+" m/s</br>"+kmh.toFixed(4)+" km/h</br>"+ins.toFixed(4)+" in/s</br>"+fts.toFixed(4)+" ft/s</br>"+millah.toFixed(4)+" milla/h" );
		}else if(unit == 2){
			var cms = (cantidad) * 100;
            var kmh = ((cms) / 100000) * (3600);
            var ins = (cms) / 2.54;
            var fts = (cms) / 30.48;
            var millah = ((cms / 2.54)/63360) * 3600;

			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" m/s equivalen a:</h4></br>"+cms.toFixed(4)+" cm/s</br>"+kmh.toFixed(4)+" km/h</br>"+ins.toFixed(4)+" in/s</br>"+fts.toFixed(4)+" ft/s</br>"+millah.toFixed(4)+" milla/h" );			
		}else if(unit == 3){
			var cms = ((cantidad) * 100000) / (3600); 
            var ms = (cms) / 100;
            var ins = (cms) / 2.54;
            var fts = (cms) / 30.48;
            var millah = ((cms / 2.54)/63360) * 3600;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" km/h equivalen a:</h4></br>"+cms.toFixed(4)+" cm/s</br>"+ms.toFixed(4)+" m/s</br>"+ins.toFixed(4)+" in/s</br>"+fts.toFixed(4)+" ft/s</br>"+millah.toFixed(4)+" milla/h" );			
		}else if(unit == 4){
			var cms = (cantidad) * 2.54;
            var ms = (cms) / 100;
            var kmh = ((cms) / 100000) * (3600);
            var fts = (cms) / 30.48;
            var millah = ((cms / 2.54)/63360) * 3600;   

			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" in/s equivalen a:</h4></br>"+cms.toFixed(4)+" cm/s</br>"+ms.toFixed(4)+" m/s</br>"+kmh.toFixed(4)+" km/h</br>"+fts.toFixed(4)+" ft/s</br>"+millah.toFixed(4)+" milla/h" );						
		}else if(unit == 5){
			var cms = (cantidad) * 30.48;
            var ms = (cms) / 100;
            var kmh = ((cms) / 100000) * (3600);
            var ins = (cms) / 2.54;
            var millah = ((cms / 2.54)/63360) * 3600; 
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" ft/s equivalen a:</h4></br>"+cms.toFixed(4)+" cm/s</br>"+ms.toFixed(4)+" m/s</br>"+kmh.toFixed(4)+" km/h</br>"+ins.toFixed(4)+" in/s</br>"+millah.toFixed(4)+" milla/h" );						
		}else if(unit == 6){
			var cms = ((cantidad * 2.54)*63360) / 3600;
            var ms = (cms) / 100;
            var kmh = ((cms) / 100000) * (3600);
            var ins = (cms) / 2.54;
            var fts = (cms) / 30.48;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" milla/h equivalen a:</h4></br>"+cms.toFixed(4)+" cm/s</br>"+ms.toFixed(4)+" m/s</br>"+kmh.toFixed(4)+" km/h</br>"+ins.toFixed(4)+" in/s</br>"+fts.toFixed(4)+" ft/s" );						
		}
	}
}

function convertCoeficiente(){
	var e = document.getElementById("selectUnits");
	var unit = e.value;
	
	var cantidad = document.getElementById("cantidad").value;
	
	if(validate(cantidad)){
		
		document.getElementById("resultAlert").style.display = "initial";
		
		var element = document.getElementById("result");
		element.innerHTML = "";
		
		if(unit == 1){
			var Wm2F = cantidad;
			var BTUhft2F = (cantidad*3.41214147993575)/(10.7639104167097*1.8);
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" W/m&sup2 * °C equivalen a:</h4></br>"+Wm2F+" W/m&sup2 * F</br>"+BTUhft2F.toFixed(4)+" BTU/h * ft&sup2 * F" );
		}else if(unit == 2){
			var Wm2C = cantidad;
			var BTUhft2F = (Wm2C*3.41214147993575)/(10.7639104167097*1.8);
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" W/m&sup2 * F equivalen a:</h4></br>"+Wm2C+" W/m&sup2 * °C</br>"+BTUhft2F.toFixed(4)+" BTU/h * ft&sup2 * F" );
		}else if(unit == 3){
			var Wm2C = (cantidad/(10.7639104167097*1.8))/3.41214147993575;
			var Wm2F = Wm2C;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" BTU/h * ft&sup2 * F equivalen a:</h4></br>"+Wm2C.toFixed(4)+" W/m&sup2 * °C</br>"+Wm2F.toFixed(4)+" W/m&sup2 * F" );
		}
	}
}

function convertConductividad(){
	var e = document.getElementById("selectUnits");
	var unit = e.value;
	
	var cantidad = document.getElementById("cantidad").value;
	
	if(validate(cantidad)){
		
		document.getElementById("resultAlert").style.display = "initial";
		
		var element = document.getElementById("result");
		element.innerHTML = "";
		
		if(unit == 1){
			var WmK = cantidad;
			var BTUhftF = (cantidad*3.41214147993575)/(3.280839895*1.8);
		
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" W/m * °C equivalen a:</h4></br>"+WmK+" W/m * K</br>"+BTUhftF.toFixed(4)+" BTU/h * ft * F" );
		}else if(unit == 2){
			var WmC = cantidad;
			var BTUhftF =(WmC*3.41214147993575)/(3.280839895*1.8);
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" W/m * K equivalen a:</h4></br>"+WmC+" W/m * °C</br>"+BTUhftF.toFixed(4)+" BTU/h * ft * F" );
		}else if(unit == 3){
			var WmC =(cantidad*(3.280839895*1.8))/3.41214147993575;
			var WmK = WmC
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" BTU/h * ft * F equivalen a:</h4></br>"+WmC.toFixed(4)+" W/m * °C</br>"+WmK.toFixed(4)+" W/m * K" );
		}
	}
}

function convertEspecifico(){
	var e = document.getElementById("selectUnits");
	var unit = e.value;
	
	var cantidad = document.getElementById("cantidad").value;
	
	if(validate(cantidad)){
		
		document.getElementById("resultAlert").style.display = "initial";
		
		var element = document.getElementById("result");
		element.innerHTML = "";
		
		if(unit == 1){
			var Lkg = cantidad*1000;
			var cm3g = cantidad*1000;
			var ft3lbm = cantidad*16.01846335;
		  
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" m&sup3 /kg equivalen a:</h4></br>"+Lkg.toFixed(4)+" L/kg</br>"+cm3g.toFixed(4)+" cm&sup3 /g</br>"+ft3lbm.toFixed(4)+" ft&sup3 /lbm");
		}else if(unit == 2){
			var m3kg = cantidad/1000;
			var cm3g = m3kg*1000;
			var ft3lbm = m3kg*16.01846335;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" L/kg equivalen a:</h4></br>"+m3kg.toFixed(4)+" m&sup3 /kg</br>"+cm3g.toFixed(4)+" cm&sup3 /g</br>"+ft3lbm.toFixed(4)+" ft&sup3 /lbm");
		}else if(unit == 3){
			var m3kg = cantidad/1000;
			var Lkg = m3kg*1000;
			var ft3lbm = m3kg*16.01846335;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" cm&sup3 /g equivalen a:</h4></br>"+m3kg.toFixed(4)+" m&sup3 /kg</br>"+Lkg.toFixed(4)+" L/kg /g</br>"+ft3lbm.toFixed(4)+" ft&sup3 /lbm");
		}else if(unit == 4){
			var m3kg = cantidad/16.01846335;
			var Lkg = m3kg*1000;
			var cm3g = m3kg*1000;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" ft&sup3 /lbm equivalen a:</h4></br>"+m3kg.toFixed(4)+" m&sup3 /kg</br>"+Lkg.toFixed(4)+" L/kg</br>"+cm3g.toFixed(4)+" cm&sup3/g");
		}
	}
}

function convertCalor(){
	var e = document.getElementById("selectUnits");
	var unit = e.value;
	
	var cantidad = document.getElementById("cantidad").value;
	
	if(validate(cantidad)){
		
		document.getElementById("resultAlert").style.display = "initial";
		
		var element = document.getElementById("result");
		element.innerHTML = "";
		
		if(unit == 1){
			var kJkgK = cantidad;
			var JgC = cantidad;
			var BTUlbmF = 4.1868*cantidad;
			var BTUlbmR = 1.055056*cantidad/(0.45359237*1.8);
	  
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" kJkg°C equivalen a:</h4></br>"+kJkgK+" kJkg°K</br>"+JgC+" Jg°C</br>"+BTUlbmF.toFixed(4)+" BTUlbm°F</br>"+BTUlbmR.toFixed(4)+" BTUlbm°R");
		}else if(unit == 2){
			var kJkgC = cantidad;
			var JgC = kJkgC;
			var BTUlbmF = 4.1868*kJkgC;
			var BTUlbmR = 1.055056*kJkgC/(0.45359237*1.8);
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" kJkg°K equivalen a:</h4></br>"+kJkgC+" kJkg°C</br>"+JgC+" Jg°C</br>"+BTUlbmF.toFixed(4)+" BTUlbm°F</br>"+BTUlbmR.toFixed(4)+" BTUlbm°R");
		}else if(unit == 3){
			var kJkgC = cantidad;
			var kJkgK = kJkgC;
			var BTUlbmF = 4.1868*kJkgC;
			var BTUlbmR = 1.055056*kJkgC/(0.45359237*1.8);
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" JgC equivalen a:</h4></br>"+kJkgC+" kJkg°C</br>"+kJkgK+" kJkg°K</br>"+BTUlbmF.toFixed(4)+" BTUlbm°F</br>"+BTUlbmR.toFixed(4)+" BTUlbm°R");
		}else if(unit == 4){
			var kJkgC = 4.1868/cantidad;
			var kJkgK = kJkgC;
			var JgC = kJkgC;
			var BTUlbmR = 1.055056*kJkgC/(0.45359237*1.8);
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" BTUlbmF equivalen a:</h4></br>"+kJkgC.toFixed(4)+" kJkg°C</br>"+kJkgK.toFixed(4)+" kJkg°K</br>"+JgC.toFixed(4)+" Jg°C</br>"+BTUlbmR.toFixed(4)+" BTUlbm°R");
		}else if(unit == 5){
			var kJkgC = 1.8/0.45359237*(cantidad/1.055056);
			var kJkgK = kJkgC;
			var JgC = kJkgC;
			var BTUlbmF = 4.1868*kJkgC;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" BTUlbmR equivalen a:</h4></br>"+kJkgC.toFixed(4)+" kJkg°C</br>"+kJkgK.toFixed(4)+" kJkg°K</br>"+JgC.toFixed(4)+" Jg°C</br>"+BTUlbmF.toFixed(4)+" BTUlbm°F");
		}
	}
}

function convertTasa(){
	var e = document.getElementById("selectUnits");
	var unit = e.value;
	
	var cantidad = document.getElementById("cantidad").value;
	
	if(validate(cantidad)){
		
		document.getElementById("resultAlert").style.display = "initial";
		
		var element = document.getElementById("result");
		element.innerHTML = "";
		
		if(unit == 1){
			var Lmin = cantidad * (60/1000);
			var m3s = cantidad /1000000;
			var galmin = (cantidad / (2.54^3))/(231)*60;
			var ft3s = (cantidad / (30.48^3));
			var ft3min = (cantidad/ (30.48^3))*60;
	 
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" cm&sup3 /s equivalen a:</h4></br>"+Lmin.toFixed(4)+" L/min</br>"+m3s.toFixed(4)+" m&sup3 /s</br>"+galmin.toFixed(4)+" gal/min</br>"+ft3s.toFixed(4)+" ft&sup3 /s</br>"+ft3min.toFixed(4)+"ft&sup3 /min");
		}else if(unit == 2){
			var cm3s = cantidad / (60*1000);
			var m3s = cm3s /1000000;
			var galmin = (cm3s / (2.54^3))/(231)*60;
			var ft3s = (cm3s / (30.48^3));
			var ft3min = (cm3s / (30.48^3))*60;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" L/min equivalen a:</h4></br>"+cm3s.toFixed(4)+" cm&sup3/s</br>"+m3s.toFixed(4)+" m&sup3 /s</br>"+galmin.toFixed(4)+" gal/min</br>"+ft3s.toFixed(4)+" ft&sup3 /s</br>"+ft3min.toFixed(4)+"ft&sup3 /min");
		}else if(unit == 3){
			var cm3s = cantidad *1000000;
			var Lmin = cm3s * (60/1000);
			var galmin = (cm3s / (2.54^3))/(231)*60;
			var ft3s = (cm3s / (30.48^3));
			var ft3min = (cm3s / (30.48^3))*60;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" m&sup3/s equivalen a:</h4></br>"+cm3s.toFixed(4)+" cm&sup3/s</br>"+Lmin.toFixed(4)+" L/min</br>"+galmin.toFixed(4)+" gal/min</br>"+ft3s.toFixed(4)+" ft&sup3 /s</br>"+ft3min.toFixed(4)+"ft&sup3 /min");
		}else if(unit == 4){
			var cm3s = (cantidad *(2.54^3))*(231)/60;
			var Lmin = cm3s * (60/1000);
			var m3s = cm3s /1000000;
			var ft3s = (cm3s / (30.48^3));
			var ft3min = (cm3s / (30.48^3))*60;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" gal/min equivalen a:</h4></br>"+cm3s.toFixed(4)+" cm&sup3/s</br>"+Lmin.toFixed(4)+" L/min</br>"+m3s.toFixed(4)+" m&sup3/s</br>"+ft3s.toFixed(4)+" ft&sup3 /s</br>"+ft3min.toFixed(4)+"ft&sup3 /min");
		}else if(unit == 5){
			var cm3s = (cantidad * (30.48^3));
			var Lmin = cm3s * (60/1000);
			var m3s = cm3s /1000000;
			var galmin = (cm3s / (2.54^3))/(231)*60;
			var ft3min = (cm3s / (30.48^3))*60;
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" ft&sup3/s equivalen a:</h4></br>"+cm3s.toFixed(4)+" cm&sup3/s</br>"+Lmin.toFixed(4)+" L/min</br>"+m3s.toFixed(4)+" m&sup3/s</br>"+galmin.toFixed(4)+" gal/min</br>"+ft3min.toFixed(4)+"ft&sup3 /min");
		}else if(unit == 6){
			var cm3s = (cantidad * (30.48^3))/60;
			var Lmin = cm3s * (60/1000);
			var m3s = cm3s /1000000;
			var galmin = (cm3s / (2.54^3))/(231)*60;
			var ft3s = (cm3s / (30.48^3));
			
			element.insertAdjacentHTML('afterbegin',"<h4>"+cantidad+" ft&sup3/min equivalen a:</h4></br>"+cm3s.toFixed(4)+" cm&sup3/s</br>"+Lmin.toFixed(4)+" L/min</br>"+m3s.toFixed(4)+" m&sup3/s</br>"+galmin.toFixed(4)+" gal/min</br>"+ft3s.toFixed(4)+"ft&sup3 /s");
		}
	}
}


