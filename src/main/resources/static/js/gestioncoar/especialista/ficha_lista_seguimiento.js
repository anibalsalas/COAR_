
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
    console.log("ccc");
    tabla_fichas();

    $(document).on('change', '#codi_depa_dpt, #estado', function () {
        buscarFichas();
    });
    
//    $(document).on('change', '#region2', function () {
//
//        buscarFichas2();
//
//    });

});

function buscarFichas() {

    $("#div_tabla_fichas").hide();
    $("#loader_fichas").show();

    var codi_depa_dpt = $("#codi_depa_dpt").val();
    var estado = $("#estado").val();

    console.log("asdasdasd"+ codi_depa_dpt);
    $.ajax({
        url: url + "/ajaxBuscarFichasSupervision",
        type: 'POST',
        data: {
            codi_depa_dpt: codi_depa_dpt,
            estado: estado},
      
        success: function (data, textStatus, jqXHR) {
  console.log("llego aqui"+estado);
            $("#div_tabla_fichas").html(data);

            tabla_fichas();
 console.log("llego aqui");
            $("#loader_fichas").hide();
            $("#div_tabla_fichas").show();

        },
        error: function (jqXHR, textStatus, errorThrown) {
            tabla_fichas();

            if (jqXHR.status == 401) {
                alert("Su sesi\u00F3n ha finalizado");
            } else {
                alert("Ocurrio un error al cargar");
            }
        }
    });

}

//function buscarFichas2() {
//    
//    $("#div_tabla_fichas").hide();
//    $("#loader_fichas").show();
//
//    var region = $("#region2").val();
//
//    $.ajax({
//        url: url + "/ajaxBuscarFichasSupervision2",
//        type: 'POST',
//        data: {
//            region: region},
//        success: function (data, textStatus, jqXHR) {
//
//            $("#div_tabla_fichas").html(data);
//
//            tabla_fichas();
//
//            $("#loader_fichas").hide();
//            $("#div_tabla_fichas").show();
//
//        },
//        error: function (jqXHR, textStatus, errorThrown) {
//            tabla_fichas();
//
//            if (jqXHR.status == 401) {
//                alert("Su sesi\u00F3n ha finalizado");
//            } else {
//                alert("Ocurrio un error al cargar");
//            }
//        }
//    });
//
//}



function confirmarEliminar(id_ficha, p1_1_nomb_ie) {

    $("#mdl_confirmacion").modal("show");
    $("#mdl_id_ficha").val(id_ficha);
    $("#mdl_confirmacion_txt_info").text("\u00bfEst\u00e1 seguro de eliminar la ficha del col\u00e9gio " + p1_1_nomb_ie + "?");


}

function eliminarFicha() {

    $("#btn_aceptar_modal_confirmacion").prop("disabled", true);
    $("#btn_aceptar_modal_confirmacion").text('');
    $("#btn_aceptar_modal_confirmacion").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');

    var id_ficha = $("#mdl_id_ficha").val();
    var codi_depe_tde = $("#codi_depe_tde").val();
    var tipo_ficha = $("#tipo_ficha").val();

    $.ajax({
        url: url + "/ajaxEliminarFicha",
        type: 'POST',
        data: {
            id_ficha: id_ficha,
            codi_depe_tde: codi_depe_tde,
            tipo_ficha: tipo_ficha},
        success: function (data, textStatus, jqXHR) {

            $("#div_tabla_fichas").html(data);

            tabla_fichas();

            $("#mdl_confirmacion").modal("hide");

            $("#btn_aceptar_modal_confirmacion").prop("disabled", false);
            $("#btn_aceptar_modal_confirmacion").text('');
            $("#btn_aceptar_modal_confirmacion").wrapInner(' <i class="fa-solid fa-square-check"></i> Aceptar');
        },
        error: function (jqXHR, textStatus, errorThrown) {
            tabla_fichas();

            if (jqXHR.status == 401) {
                alert("Su sesi\u00F3n ha finalizado");
            } else {
                alert("Ocurrio un error al cargar");
            }
        }
    });
}

function tabla_fichas() {

    var tables = $('#datatable_fichas').DataTable({
        "dom": 'Blfrtip',
        "buttons": ['copy', 'excel', 'pdf', 'colvis'],
        language: {
        "decimal": "",
        "emptyTable": "No hay información",
        "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
        "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
        "infoFiltered": "(Filtrado de _MAX_ total entradas)",
        "infoPostFix": "",
        "thousands": ",",
        "lengthMenu": "Mostrar _MENU_ Entradas",
        "loadingRecords": "Cargando...",
        "processing": "Procesando...",
        "search": "Buscar:",
        "zeroRecords": "Sin resultados encontrados",
        "paginate": {
            "first": "Primero",
            "last": "Ultimo",
            "next": "Siguiente",
            "previous": "Anterior"
        }},
        "lengthChange": true,
        "pagingType": 'full_numbers',
        "pageLength": 100
    });

    tables.buttons().container().appendTo('#datatable_fichas_wrapper .col-md-6:eq(0)');

}
