function GoPage(page, tab=false) {
	if (tab == true) {
		window.open(page);
	}
	else {
	document.location.href = page;
	}
}

function CookieCheck(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
}

function CSFT(str, amount) {
	if (amount < 0)
		return CSFT(str, amount + 26);

	var output = '';

	for (var i = 0; i < str.length; i ++) {

		var c = str[i];

		if (c.match(/[a-z]/i)) {

			var code = str.charCodeAt(i);

			if ((code >= 65) && (code <= 90))
				c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
			
			else if ((code >= 97) && (code <= 122))
				c = String.fromCharCode(((code - 97 + amount) % 26) + 97);

		}
		output += c;

	}
	return output;
};


function DEC(CL) {
	var alphabet = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");
	var SLength = CL.length;
	var FSplit = CL.slice(CL.length-2);
	var L = FSplit[0];
	var LL = FSplit[1];
	var L1 = alphabet.indexOf(L);
	var L2 = alphabet.indexOf(LL);
	if (L2 >= L1) {
		var TM = (L2 - L1) * -1;
	} else {
		var TM = (L1 - L2) * -1;
	}
	var DDS = CSFT(CL, TM);
	var TIOBV = DDS.indexOf("IWNPC");
	var DS2 = DDS.slice(TIOBV+5);
	var FDS = CSFT(DS2, TM*-1);
	var MCTBIWTD = FDS.slice(FDS.length-2);
	var MK = FDS.replace(MCTBIWTD, "");
	var MTY = MK.split("D");
	var OPT = MTY[0]%MTY[1];
	var pos1 = 0;
	var pos2 = 1;
	var ALLCHAR = DDS.replace(DS2, "")
	var ALLCHAR2 = ALLCHAR.split("")
	var NS = ''
	for (i = 0; i < ALLCHAR2.length; i++) {
		var INTYON = parseInt(ALLCHAR2[i]) - OPT;
		if (INTYON <= -1) {
			INTYON = INTYON + 10;
		}
		if (isNaN(ALLCHAR2[i]) == true) {
			INTYON = ALLCHAR2[i];
		}
		var NS = NS + INTYON
	}
	NS = NS + FDS
	console.log(NS)
	return NS;
}
