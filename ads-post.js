var jumlah_banner = 5;
var now = new Date()
var sec = now.getSeconds()
var ad = sec % jumlah_banner;
ad +=1;
if (ad==1) {
txt="Jago Powerpoint";
url="https://account.ratakan.com/aff/go/suskses20?i=2710";
alt="Jago Powerpoint";
banner="https://botbisnis.com/wp-content/uploads/2020/08/Botbisnis-Jago-Powerpoint.jpg";
width="100%";
height="100%";
}
if (ad==2) {
txt="DOMAIN MURAH BANGEET!";
url="https://panel.niagahoster.co.id/ref/27488";
alt="DOMAIN MURAH BANGEET!";
banner="<a href="https://panel.niagahoster.co.id/banners/Set3-niagahoster-728x90.png";
width="100%";
height="100%";
}
if (ad==3) {
txt="HOSTING TERMURAH";
url="https://panel.niagahoster.co.id/ref/27488";
alt="HOSTING TERMURAH";
banner="https://panel.niagahoster.co.id/banners/Set5-niagahoster-728x90.png";
width="100%";
height="100%";
}
if (ad==3) {
txt="Komisi 100 Persen";
url="https://www.domainesia.com/?aff=12391";
alt="Komisi 100 Persen";
banner="https://static.domainesia.com/assets/images/afiliasi/banner-1.png"></a>";
width="100%";
height="100%";
}
if (ad==3) {
txt="Wordpress Hosting SUPER CEPAT!";
url="https://idwebhost.com/aff/5661";
alt="Wordpress Hosting SUPER CEPAT!";
banner="https://member.idwebhost.com/assets/img/wordpresssupercepat/600x400.png";
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
