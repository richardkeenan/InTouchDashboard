﻿// JScript File
/*
function validatejs(){
	var _txt = document.getElementById('txtProdDate');
	if(_txt.value != "")
	    alert('TIm2');
		//_txt.style.BackgroundColor = 'white';	
	else
	    alert('TIm1');
		_txt.style.backgroundColor="#FF0033";
}
*/

function validatejs(_txtID)
{
    var _valid = true;
    var _ArrayID = [];
    if(_txtID == "all")
    {
        _ArrayID[0] = 'txtProdDate';
        _ArrayID[1] = 'txtMilkYield';
        _ArrayID[2] = 'txtCowsInMilk';
        _ArrayID[3] = 'txtBucket';
        _ArrayID[4] = 'txtTakeouts';
    }
    else if (_txtID == "login")
    {
        _ArrayID[0] = 'txtUsername';
        _ArrayID[1] = 'txtPassword';
    }
    else
    {
        _ArrayID[0] = _txtID;

    }
    
    for(i=0; i<_ArrayID.length; i++)
    {
        var _txt = document.getElementById(_ArrayID[i]);
        if(_txt.value != "")
        {
            _txt.style.backgroundColor = "white";
        }
        else
        {
            _txt.style.backgroundColor = "#ffd0b5";
            _valid = false;
        }
    }
    if(!_valid)
    {
        alert("Mandatory fields have not been filled in. They will be highlighted red");
        }
    return _valid;
}
function extractDate(obj, allowNull)
{
    var temp = obj.value;
    if(!allowNull)
	{
	    if(temp != '')
	    {
	        obj.style.backgroundColor = "White";
	    }
	}
	obj.value = temp;
}
function extractNumber(obj, decimalPlaces, allowNegative, allowNull)
{
	var temp = obj.value;
	
	if(!allowNull)
	{
	    if(temp != '')
	    {
	        obj.style.backgroundColor = "White";
	    }
	}
	
	// avoid changing things if already formatted correctly
	var reg0Str = '[0-9]*';
	if (decimalPlaces > 0) {
		reg0Str += '\\.?[0-9]{0,' + decimalPlaces + '}';
	} else if (decimalPlaces < 0) {
		reg0Str += '\\.?[0-9]*';
	}
	reg0Str = allowNegative ? '^-?' + reg0Str : '^' + reg0Str;
	reg0Str = reg0Str + '$';
	var reg0 = new RegExp(reg0Str);
	if (reg0.test(temp)) return true;

	// first replace all non numbers
	var reg1Str = '[^0-9' + (decimalPlaces != 0 ? '.' : '') + (allowNegative ? '-' : '') + ']';
	var reg1 = new RegExp(reg1Str, 'g');
	temp = temp.replace(reg1, '');

	if (allowNegative) {
		// replace extra negative
		var hasNegative = temp.length > 0 && temp.charAt(0) == '-';
		var reg2 = /-/g;
		temp = temp.replace(reg2, '');
		if (hasNegative) temp = '-' + temp;
	}
	
	if (decimalPlaces != 0) {
		var reg3 = /\./g;
		var reg3Array = reg3.exec(temp);
		if (reg3Array != null) {
			// keep only first occurrence of .
			//  and the number of places specified by decimalPlaces or the entire string if decimalPlaces < 0
			var reg3Right = temp.substring(reg3Array.index + reg3Array[0].length);
			reg3Right = reg3Right.replace(reg3, '');
			reg3Right = decimalPlaces > 0 ? reg3Right.substring(0, decimalPlaces) : reg3Right;
			temp = temp.substring(0,reg3Array.index) + '.' + reg3Right;
		}
	}
	
	obj.value = temp;
	
}
function blockNonNumbers(obj, e, allowDecimal, allowNegative)
{
	var key;
	var isCtrl = false;
	var keychar;
	var reg;
		
	if(window.event) {
		key = e.keyCode;
		isCtrl = window.event.ctrlKey
	}
	else if(e.which) {
		key = e.which;
		isCtrl = e.ctrlKey;
	}
	
	if (isNaN(key)) return true;
	
	keychar = String.fromCharCode(key);
	
	// check for backspace or delete, or if Ctrl was pressed
	if (key == 8 || isCtrl)
	{
		return true;
	}

	reg = /\d/;
	var isFirstN = allowNegative ? keychar == '-' && obj.value.indexOf('-') == -1 : false;
	var isFirstD = allowDecimal ? keychar == '.' && obj.value.indexOf('.') == -1 : false;
	
	return isFirstN || isFirstD || reg.test(keychar);
}


