var jumlah_banner = 5;
var now = new Date()
var sec = now.getSeconds()
var ad = sec % jumlah_banner;
ad +=1;
if (ad==1) {
txt="Hosting Termurah";
url="https://idwebhost.com/aff/5661";
alt="Banner Idwebhost";
banner="https://member.idwebhost.com/assets/img/hostingtermurah/728x90.png";
width="100%";
height="100%";
}
if (ad==2) {
txt="DOMAIN MURAH BANGEET!";
url="https://panel.niagahoster.co.id/ref/27488";
alt="DOMAIN MURAH BANGEET!";
banner="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/affiliasi/banner/banner-banner-1660034794-728x90-2-.png";
width="100%";
height="100%";
}
if (ad==3) {
txt="HOSTING TERMURAH";
url="https://panel.niagahoster.co.id/ref/27488";
alt="HOSTING TERMURAH";
banner="https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/affiliasi/banner/728-90-affiliate-starting-bisnis-online.png";
width="100%";
height="100%";
}
if (ad==4) {
txt="Domain Murah";
url="https://www.domainesia.com/?aff=12391";
alt="Domain Murah";
banner="https://static.domainesia.com/assets/images/afiliasi/banner-1.png";
width="100%";
height="100%";
}
if (ad==5) {
txt="Wordpress Hosting SUPER CEPAT!";
url="https://idwebhost.com/aff/5661";
alt="Banner Idwebhost wordpress hosting";
banner="https://member.idwebhost.com/assets/img/wordpresssupercepat/728x90.png";
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
