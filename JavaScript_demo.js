
var api_url = "brightspace.instance.you";
var testMethod = "get";
var testPath = "/d2l/api/lp/1.4/users/whoami";

var app_id = "your_app_id";
var app_key = "your_app_key";
var user_id = "the_user_id";
var user_key = "the_user_key";

var timestamp = getTimestamp();

var x_a = app_id;
var x_b = user_id;
var x_c = Sign(testMethod.toUpperCase() + "&" + testPath + "&" + timestamp, app_key);
var x_d = Sign(testMethod.toUpperCase() + "&" + testPath + "&" + timestamp, user_key);
var x_t = timestamp;

document.write("The fully Specified URL is: <br/> https://" + api_url + testPath + "?x_a=" + x_a + "&x_b=" + x_b + "&x_c=" + x_c + "&x_d=" + x_d + "&x_t=" + x_t);


function Sign(data, key) {
    var hmacObj = new jsSHA( data, "ASCII" );
    var hmac = hmacObj.getHMAC(key,"ASCII","SHA-256","B64");
    var hmac_b64u = this.base64Url(hmac);

    //alert("Data: " + data + "\nKey: " + key + "\nhash: " + hmac_b64u);
    console.info("Data: " + data + "\nKey: " + key + "\nhash: " + hmac_b64u);

    return hmac_b64u;

}

// b64-for-Valence helper used by D2L.Util.Sign()
function base64Url(b64) {
    var b64u = b64.replace( /\+/gi, "-" );
    b64u = b64u.replace( /\//gi, "_" );
    b64u = b64u.replace( /\=/gi, "" );

    return b64u;

}

function getTimestamp() {
    var date = new Date();
    var ts =
	    Math.round(
		Date.UTC(
		    date.getUTCFullYear(),
		    date.getUTCMonth(),
		    date.getUTCDate(),
		    date.getUTCHours(),
		    date.getUTCMinutes(),
		    date.getUTCSeconds(),
		    date.getUTCMilliseconds() ) / 1000 );

    return ts;
}

