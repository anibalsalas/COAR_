
var requestContextPath = window.location.pathname.substring(0, window.location.pathname.indexOf("/", 2));
var url = requestContextPath + "/dp/especialista/ficha";

$(document).ready(function () {

    $.ajaxSetup({
        statusCode: {
            401: function () {
                window.location = requestContextPath + '/406';
            }
        }
    });

    $('select').on('change', function () {
        var token_reporte = $('#token_reporte').val();
        if (token_reporte !== null) {
            if (token_reporte.length > 1) {
                $("#iframe1").attr("src", "https://apps2.defensoria.gob.pe:8448/pentaho/Urbano?token=" + token_reporte);
            } else {
                $("#iframe1").attr("src", "");
            }
        } else {
            $("#iframe1").attr("src", "");
        }
    });

});


