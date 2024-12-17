
var requestContextPath = window.location.pathname.substring(0, window.location.pathname.indexOf("/", 2));
var url = requestContextPath + "/dp/especialista/ficha";

$(document).ready(function () {
//    console.log("ok136");
    $.ajaxSetup({
        statusCode: {
            401: function () {
                window.location = requestContextPath + '/406';
            }
        }
    });
    tabla_fichas();

});

function tabla_fichas() {

    var tables = $('#datatable_fichas').DataTable({
        "dom": 'Blfrtip',
//        "buttons": ['copy', 'excel', 'pdf', 'colvis'],
        "buttons": [
//            {extend: 'copyHtml5', footer: true},
            {extend: 'excelHtml5', footer: true},
//            {extend: 'csvHtml5', footer: true},
            {extend: 'pdfHtml5', footer: true}
        ],
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
        "zeroRecords": "Sin resultados encontrados"},
        "paging": false,
        "lengthChange": true,
        "pagingType": 'full_numbers',
        "pageLength": 100
    });

    tables.buttons().container().appendTo('#datatable_fichas_wrapper .col-md-6:eq(0)');

}


