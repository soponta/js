var jumlah_banner = 5;
var now = new Date()
var sec = now.getSeconds()
var ad = sec % jumlah_banner;
ad +=1;
if (ad==1) {
txt="Make Money from home - honeygain";
url="https://r.honeygain.me/HEBER7463C";
alt="Honeygain";
banner="https://botbisnis.com/wp-content/uploads/2020/08/Botbisnis-Jago-Powerpoint.jpg";
width="100%";
height="100%";
}
if (ad==2) {
txt="EARN FREE BITCOIN!";
url="https://btcbux.io/r/19ZyA9";
alt="BTCBUX!";
banner="https://btcbux.io/assets/banners/468X60_static.png";
width="100%";
height="100%";
}
if (ad==3) {
txt="FAUCETCRYPTO - EARN BITCOIN BY VIEWING ADS";
url="https://faucetcrypto.com/ref/476156";
alt="Faucet Crypto";
banner="https://faucetcrypto.com/banners/468x60.gif";
width="100%";
height="100%";
}
if (ad==3) {
txt="EARN BITCOIN BY VIEWING ADS";
url="https://faucetpay.io/?r=685712";
alt="Faucetpay";
banner="https://faucetcrypto.com/banners/468x60.gif";
width="100%";
height="100%";
}
if (ad==3) {
txt="CoinPayU - EARN BITCOIN BY VIEWING ADS!";
url="https://www.coinpayu.com/?r=probitcoin";
alt="COINPAYU!";
banner="https://www.coinpayu.com/static/earners_banner/468X60.gif";
width="100%";
height="100%";
}
document.write('<center>');
document.write('<a href=\"' + url + '\" target=\"_blank\">');
document.write('<img src=\"' + banner + '\" width=')
document.write(width + ' height=' + height + ' ');
document.write('alt=\"' + alt + '\" border=0><br>');
document.write('<small>' + txt + '</small></a>');
document.write('</center>');