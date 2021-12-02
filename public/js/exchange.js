if (! sz) {
    var sz = '1x1';
}

var arr = sz.split("x");

var lr = lr;


var w = parseInt(arr[0]);
var h = parseInt(arr[1]);
if (w === 1 || w < 1 && h === 1 || h < 1) {
    w = '100%';
    if (lr === 1) {
        h = 306;
    } else {
        h = 289;
    }
}

ht_protocol = (location.protocol === "https:" ? "https:" : "http:");
document.write('<iframe title="Currency Exchange Widget" src="' + ht_protocol + '//localhost:3000/exchange" width="' + w + '" height="' + h + '" frameborder="0" scrolling="no"></iframe>');