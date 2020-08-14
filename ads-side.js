var jumlah_banner = 5;
var now = new Date()
var sec = now.getSeconds()
var ad = sec % jumlah_banner;
ad +=1;
if (ad==1) {
txt="HOSTING UNLIMITED PALING MURAH";
url="https://idwebhost.com/aff/5661";
alt="HOSTING UNLIMITED PALING MURAH";
banner="https://member.idwebhost.com/assets/img/hostingtermurah/300x250.png";
width="100%";
height="100%";
}
if (ad==2) {
txt="DOMAIN MURAH BANGEET!";
url="https://panel.niagahoster.co.id/ref/27488";
alt="DOMAIN MURAH BANGEET!";
banner="https://panel.niagahoster.co.id/banners/Set3-niagahoster-300x250.png";
width="100%";
height="100%";
}
if (ad==3) {
txt="HOSTING TERMURAH Unlimited Indonesia";
url="https://panel.niagahoster.co.id/ref/27488";
alt="HOSTING TERMURAH Unlimited Indonesia";
banner="https://panel.niagahoster.co.id/banners/Set5-niagahoster-300x250.png";
width="100%";
height="100%";
}
if (ad==3) {
txt="DOMAIN MURAH";
url="https://www.domainesia.com/?aff=12391";
alt="DOMAIN MURAH";
banner="https://static.domainesia.com/assets/images/afiliasi/banner-4a.png";
width="100%";
height="100%";
}
if (ad==3) {
txt="Wordpress Hosting SUPER CEPAT!";
url="https://idwebhost.com/aff/5661";
alt="Wordpress Hosting SUPER CEPAT!";
banner="https://member.idwebhost.com/assets/img/wordpresssupercepat/300x250.png";
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
