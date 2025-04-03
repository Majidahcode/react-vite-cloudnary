"use strict";

jQuery(document).ready(function($) {

    /************** Background Polygon Drawing *********************/
    var canvas = document.createElement("canvas");
    canvas.width = 894;
    canvas.height = 854;
    if (canvas && canvas.getContext) {
        var ctx = canvas.getContext("2d");
        if (ctx) {
            ctx.fillStyle = "#110202";
            ctx.beginPath();
            ctx.moveTo(0, 470);
            ctx.lineTo(223, 82);
            ctx.lineTo(670, 82);
            ctx.lineTo(894, 470);
            ctx.lineTo(670, 854);
            ctx.lineTo(223, 854);
            ctx.fill();
        }
    }

    $('body').css({
        'background-image': "url(" + canvas.toDataURL("image/png") + ")",
        'background-repeat': "no-repeat",
        'background-position': "center top",
        'margin-top': "50px"
    });

    $(".overlay").hide();

    /************** Gallery Hover Effect *********************/
    $('.gallery-item, .team-item').hover(
        function() {
            $(this).find('.overlay').addClass('animated fadeIn').show();
        },
        function() {
            $(this).find('.overlay').removeClass('animated fadeIn').hide();
        }
    );

    /************** LightBox *********************/
    $(function() {
        $('[data-rel="lightbox"]').lightbox();
    });

    /************** تحميل Google Maps *********************/
    loadGoogleMaps();

    /************** نظام التنقل بين الصفحات *********************/
    $(".main_menu a").click(function(e) {
        e.preventDefault(); // منع التحديث التلقائي للصفحة

        var id = $(this).attr('class'); // جلب اسم الـ class
        id = id.split('-'); // تقسيمه عند علامة `-`
        
        $("#menu-container .content").hide(); // إخفاء كل الأقسام
        $("#menu-container #menu-" + id[1]).slideDown(600); // عرض القسم المطلوب
        $("#menu-container .homepage").hide(); // إخفاء الصفحة الرئيسية
    });

    $(".main_menu a.homebutton").click(function(e) {
        e.preventDefault();
        $("#menu-container .homepage").show(); // إظهار الصفحة الرئيسية عند النقر
    });

});

/************** تحميل Google Maps API مرة واحدة *********************/
function loadGoogleMaps() {
    if (!window.google) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initialize';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }
}

/************** تهيئة الخريطة *********************/
function initialize() {
    var mapElement = document.getElementById('templatemo_map');

    if (!mapElement) {
        console.error("📌 خطأ: العنصر 'templatemo_map' غير موجود في الصفحة!");
        return;
    }

    var mapOptions = {
        zoom: 14,
        center: new google.maps.LatLng(16.8496189, 96.1288854)
    };

    var map = new google.maps.Map(mapElement, mapOptions);
}
