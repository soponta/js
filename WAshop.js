document['getElementById']('checkout-box')['innerHTML'] = localStorage['getItem']('ck'), null === localStorage['getItem']('sub2') ? $('#sub-total b')['text']('Rp. 0') : $('#sub-total b')['text'](localStorage['getItem']('sub2'));
var select1 = $('#pilihan-1 option[value="default"]')['text'](),
    select2 = $('#pilihan-2 option[value="default"]')['text']();

function angkaToRp(_0x13ffx4) {
    for (var _0x13ffx5 = '', _0x13ffx6 = _0x13ffx4.toString()['split']('')['reverse']()['join'](''), _0x13ffx7 = 0; _0x13ffx7 < _0x13ffx6['length']; _0x13ffx7++) {
        0 == _0x13ffx7 % 3 && (_0x13ffx5 += _0x13ffx6['substr'](_0x13ffx7, 3) + '.')
    };
    return 'Rp. ' + _0x13ffx5['split']('', _0x13ffx5['length'] - 1)['reverse']()['join']('')
}
var walink = 'https://web.whatsapp.com/send',
    phone = text_phone,
    walink2 = '&text=' + text_wa,
    maillink = 'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=',
    email = text_email,
    mailsubject = '&subject=' + text_mailsubject,
    maillink1 = '',
    maillink2 = '&body=' + text_mailbody;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i ['test'](navigator['userAgent'])) {
    var walink = 'whatsapp://send',
        maillink = 'mailto:',
        maillink1 = '?cc=' + text_email + '&bcc=' + text_email
};
$(document)['on']('click', '.captchaid', function () {
    var _0x13ffx4 = document['getElementById']('alamat');
    if ('' != _0x13ffx4['value']) {
        var _0x13ffx5 = $('.harga-s b')['text'](),
            _0x13ffx6 = $('#title')['text'](),
            _0x13ffx7 = document['getElementById']('jumlah'),
            _0x13ffx10 = _0x13ffx7['defaultValue'],
            _0x13ffx11 = _0x13ffx7['value'],
            _0x13ffx12 = $('#pilihan-1 :selected')['text'](),
            _0x13ffx13 = $('#pilihan-2 :selected')['text'](),
            _0x13ffx14 = document['getElementById']('product-desc')['value'],
            _0x13ffx15 = document['getElementById']('nama')['value'],
            _0x13ffx16 = document['getElementById']('telepon')['value'],
            _0x13ffx17 = $('#pembayaran :selected')['text'](),
            _0x13ffx18 = document['getElementById']('alamat')['value'],
            _0x13ffx19 = document['getElementById']('kota')['value'],
            _0x13ffx1a = document['getElementById']('kodepos')['value'],
            _0x13ffx1b = window['location']['href'],
            _0x13ffx1c = walink + '?phone=' + phone + walink2 + '*' + _0x13ffx6 + '*%0A%0A*' + wa_jumlah + '* : ' + _0x13ffx11 + '%0A*' + select1 + '* : ' + _0x13ffx12 + '%0A*' + select2 + '* : ' + _0x13ffx13 + '%0A*' + text_subtotal + '* : ' + _0x13ffx5 + '%0A=============== %0A*' + wa_nama + '* : ' + _0x13ffx15 + ' (' + _0x13ffx16 + ') %0A*' + wa_metode + '* : ' + _0x13ffx17 + '%0A=============== %0A*' + wa_alamat + '* : ' + _0x13ffx18 + ', ' + _0x13ffx19 + ', ' + _0x13ffx1a + '%0A*' + wa_catatan + '* : ' + _0x13ffx14 + '%0A%0A' + wa_last + ' : ' + _0x13ffx1b,
            _0x13ffx1d = maillink + email + maillink1 + mailsubject + _0x13ffx6 + maillink2 + '*' + _0x13ffx6 + '*%0A%0A*' + wa_jumlah + '* : ' + _0x13ffx11 + '%0A*' + select1 + '* : ' + _0x13ffx12 + '%0A*' + select2 + '* : ' + _0x13ffx13 + '%0A*' + text_subtotal + '* : ' + _0x13ffx5 + '%0A=============== %0A*' + wa_nama + '* : ' + _0x13ffx15 + ' (' + _0x13ffx16 + ') %0A*' + wa_metode + '* : ' + _0x13ffx17 + '%0A=============== %0A*' + wa_alamat + '* : ' + _0x13ffx18 + ', ' + _0x13ffx19 + ', ' + _0x13ffx1a + '%0A*' + wa_catatan + '* : ' + _0x13ffx14 + '%0A%0A' + wa_last + ' : ' + _0x13ffx1b;
        document['getElementById']('walink')['href'] = _0x13ffx1c, document['getElementById']('emaillink')['href'] = _0x13ffx1d, $('span.box-captcha,.notif-captcha')['toggleClass']('aktif')
    } else {
        $('span.box-captcha,.notif-captcha')['toggleClass']('gagal')
    }
}), $(document)['on']('click', '#next_order', function () {
    var _0x13ffx4 = document['getElementById']('jumlah'),
        _0x13ffx5 = _0x13ffx4['defaultValue'],
        _0x13ffx6 = _0x13ffx4['value'],
        _0x13ffx7 = $('#pilihan-1 :selected')['text'](),
        _0x13ffx10 = $('#pilihan-2 :selected')['text'](),
        _0x13ffx11 = $('#pilihan-1 option[value="default"]')['text'](),
        _0x13ffx12 = $('#pilihan-2 option[value="default"]')['text']();
    $('#order-wrapper')['toggleClass']('aktif'), $('.jumlah-s b')['text'](_0x13ffx6), $('.warna-s b')['text'](_0x13ffx7), $('.ukuran-s b')['text'](_0x13ffx10), $('.select-1')['text'](_0x13ffx11), $('.select-2')['text'](_0x13ffx12);
    var _0x13ffx13 = $('.produk-wrap #harga')['text'](),
        _0x13ffx14 = $('.jumlah-s b')['text'](),
        _0x13ffx15 = _0x13ffx13['replace'](/\D+/g, '');
    $('.harga-s b')['text'](angkaToRp(_0x13ffx15 * _0x13ffx14))
}), $(document)['on']('click', '.produk-wrap #go-cart', function () {
    var _0x13ffx4 = document['getElementById']('gambar')['src'],
        _0x13ffx5 = window['location']['href'],
        _0x13ffx6 = $('#title')['text'](),
        _0x13ffx7 = $('#harga')['text'](),
        _0x13ffx10 = document['getElementById']('jumlah'),
        _0x13ffx11 = _0x13ffx10['defaultValue'],
        _0x13ffx12 = _0x13ffx10['value'],
        _0x13ffx13 = $('#pilihan-1 :selected')['text'](),
        _0x13ffx14 = $('#pilihan-2 :selected')['text'](),
        _0x13ffx15 = document['getElementById']('product-desc')['value'],
        _0x13ffx16 = $('#harga')['text'](),
        _0x13ffx17 = _0x13ffx16['replace'](/\D+/g, ''),
        _0x13ffx18 = _0x13ffx17 * _0x13ffx12,
        _0x13ffx19 = angkaToRp(_0x13ffx18),
        _0x13ffx1a = $('#sub-total b')['text'](),
        _0x13ffx1b = _0x13ffx1a['replace'](/\D+/g, ''),
        _0x13ffx1c = parseInt(_0x13ffx18) + parseInt(_0x13ffx1b);
    $('#sub-total b')['text'](angkaToRp(_0x13ffx1c));
    var _0x13ffx1d = _0x13ffx6,
        _0x13ffx1e = $('#cart-num')['text'](),
        _0x13ffx1f = parseInt(_0x13ffx1e) + parseInt('1');
    _0x13ffx1d = _0x13ffx1d['replace'](/\s/g, ''), document['getElementById']('no-product')['innerHTML'] = '', document['getElementById']('cart-num')['innerHTML'] = _0x13ffx1f, document['getElementById']('checkout-box')['innerHTML'] += '<div class="product-cart" id="produk' + _0x13ffx1d + '"><img src="' + _0x13ffx4 + '"><a href="' + _0x13ffx5 + '">' + _0x13ffx6 + '</a><sp>%0A</sp><div class="harga">' + _0x13ffx19 + '</div><sp>%0A</sp>Jumlah : <b>' + _0x13ffx12 + '</b><sp>%0A</sp><div class="varian1">' + select1 + ' : <b>' + _0x13ffx13 + '</b></div><sp>%0A</sp><div class="varian2">' + select2 + ' : <b>' + _0x13ffx14 + '</b></div><sp>%0A</sp><div class="catatan">' + wa_catatan + ' : <b>' + _0x13ffx15 + '</b></div><sp>%0A====================%0A</sp><a id="hapus" class="hapus" href="javascript:void" onclick="hapus(),getElementById(`produk' + _0x13ffx1d + '`).remove();hapus2()">' + text_hapus + '</a></div>', $('.addtowish')['toggleClass']('aktif');
    var _0x13ffx20 = document['getElementById']('checkout-box')['innerHTML'];
    localStorage['setItem']('ck', _0x13ffx20);
    var _0x13ffx21 = $('#sub-total b')['text']();
    localStorage['setItem']('sub2', _0x13ffx21), hapus()
}), document['addEventListener']('DOMContentLoaded', jikakosong2);

function jikakosong2() {
    var _0x13ffx4 = $('.product-cart')['length'],
        _0x13ffx5 = $('.stok-habis')['text']();
    document['getElementById']('cart-num')['innerHTML'] = _0x13ffx4, '0' == _0x13ffx4 && (document['getElementById']('checkout-box')['innerHTML'] = '<span id="no-product">' + text_nowish + '</span>');
    _0x13ffx5 && $('.produk-wrap .pilihan')['toggleClass']('stokhabis')
}
$(document)['on']('click', '.captchaid2', function () {
    var _0x13ffx4 = document['getElementById']('alamat');
    if ('' != _0x13ffx4['value']) {
        var _0x13ffx5 = $('#checkout-box .product-cart')['text'](),
            _0x13ffx6 = _0x13ffx5['replace'](/Hapus/g, ''),
            _0x13ffx7 = document['getElementById']('nama')['value'],
            _0x13ffx10 = document['getElementById']('telepon')['value'],
            _0x13ffx11 = $('#pembayaran :selected')['text'](),
            _0x13ffx12 = document['getElementById']('alamat')['value'],
            _0x13ffx13 = document['getElementById']('kota')['value'],
            _0x13ffx14 = document['getElementById']('kodepos')['value'],
            _0x13ffx15 = $('#sub-total b')['text'](),
            _0x13ffx16 = walink + '?phone=' + phone + walink2 + '%0A' + _0x13ffx6 + '*' + text_subtotal + '* : ' + _0x13ffx15 + '%0A*' + wa_nama + '* : ' + _0x13ffx7 + ' (' + _0x13ffx10 + ') %0A*' + wa_metode + '* : ' + _0x13ffx11 + '%0A=============== %0A*' + wa_alamat + '* : ' + _0x13ffx12 + ', ' + _0x13ffx13 + ', ' + _0x13ffx14 + '%0A',
            _0x13ffx17 = maillink + email + maillink1 + mailsubject + text_mailsubject + maillink2 + '%0A' + _0x13ffx6 + '*' + text_subtotal + '* : ' + _0x13ffx15 + '%0A*' + wa_nama + '* : ' + _0x13ffx7 + ' (' + _0x13ffx10 + ') %0A*' + wa_metode + '* : ' + _0x13ffx11 + '%0A=============== %0A*' + wa_alamat + '* : ' + _0x13ffx12 + ', ' + _0x13ffx13 + ', ' + _0x13ffx14 + '%0A';
        document['getElementById']('walink')['href'] = _0x13ffx16, document['getElementById']('emaillink')['href'] = _0x13ffx17, $('span.box-captcha,.notif-captcha')['toggleClass']('aktif')
    } else {
        $('span.box-captcha,.notif-captcha')['toggleClass']('gagal')
    }
}), $(document)['on']('click', '#get-checkout', function () {
    $('.product-cart #hapus')['remove'](), $('.varian1,.varian2,.catatan')['hide'](), $('.pemesanan,.order-button')['removeClass']('none')
});

function hapus() {
    var _0x13ffx4 = $('#sub-total b')['text'](),
        _0x13ffx5 = _0x13ffx4['replace'](/\D+/g, ''),
        _0x13ffx6 = $('.product-cart')['length'];
    1 < _0x13ffx6 && $('.hapus')['click'](function () {
        var _0x13ffx4 = $(this)['parent']('.product-cart')['children']('.harga')['text'](),
            _0x13ffx6 = _0x13ffx4['replace'](/\D+/g, ''),
            _0x13ffx7 = parseInt(_0x13ffx5) - parseInt(_0x13ffx6),
            _0x13ffx10 = angkaToRp(_0x13ffx7);
        $('#sub-total b')['text'](_0x13ffx10), localStorage['setItem']('sub2', _0x13ffx10)
    }), '1' == _0x13ffx6 && $('.hapus')['click'](function () {
        $('#sub-total b')['text']('Rp. 0'), localStorage['setItem']('sub2', 'Rp. 0')
    })
}

function rudrSwitchTab(_0xa595x2, _0xa595x3) {
    var _0xa595x4, _0xa595x5 = document.getElementsByClassName("tabcontent");
    for (_0xa595x4 = 0; _0xa595x4 < _0xa595x5.length; _0xa595x4++) {
        _0xa595x5[_0xa595x4].style.display = "none"
    };
    document.getElementById(_0xa595x3).style.display = "block";
    var _0xa595x4, _0xa595x5 = document.getElementsByClassName("tabmenu");
    for (_0xa595x4 = 0; _0xa595x4 < _0xa595x5.length; _0xa595x4++) {
        _0xa595x5[_0xa595x4].className = "tabmenu"
    };
    document.getElementById(_0xa595x2).className = "tabmenu active"
}

function hapus2() {
    var _0xa595x3 = document.getElementById("checkout-box").innerHTML;
    localStorage.setItem("ck", _0xa595x3)
}
var url_string = window.location.href,
    urlParameter = new URL(url_string),
    labelMode = urlParameter.searchParams.get("mode");
"related-posts" == labelMode && (document.write("<style>#blog-pager,.navmobile,#header-material,#menu-blanter,.breadcrumbs,#popular-box,.footer-blanter,#footer-material,#footer-bottom,.navwa,.flashlight,.blanternotif,a.blantershow-chat{display:none!important}body:before{background:#fff}.post-outer{margin:0 3px 10px}#outer-material{margin:0}#content-material{padding:0 5px;width:auto!important;max-width:100%!important}*{overflow-y:hidden!important}body{padding-top:0!important;background:transparent!important;overflow-y:hidden!important}.post-thumbnail img{height:150px}</style>"), window.onload = function () {
    $(".post.hentry a").each(function () {
        $(this).attr("target", "_top")
    })
});

function getDocHeight(_0xa595x3) {
    _0xa595x3 = _0xa595x3 || document;
    var _0xa595x4 = _0xa595x3.body,
        _0xa595xb = _0xa595x3.documentElement,
        _0xa595xc = Math.max(_0xa595x4.scrollHeight, _0xa595x4.offsetHeight, _0xa595xb.clientHeight, _0xa595xb.scrollHeight, _0xa595xb.offsetHeight);
    return _0xa595xc
}

function setIframeHeight(_0xa595x3) {
    var _0xa595x4 = document.getElementById(_0xa595x3),
        _0xa595xb = _0xa595x4.contentDocument ? _0xa595x4.contentDocument : _0xa595x4.contentWindow.document;
    _0xa595x4.style.visibility = "hidden", _0xa595x4.style.height = "0px", _0xa595x4.style.height = getDocHeight(_0xa595xb) + 4 + ".42px", _0xa595x4.style.visibility = "visible"
}
$(document).ready(function () {
    $(window).resize(function () {
        setIframeHeight("relatedframe-posts")
    })
}), $("#relatedframe-posts").bind("load", function () {
    setIframeHeight("relatedframe-posts")
})

