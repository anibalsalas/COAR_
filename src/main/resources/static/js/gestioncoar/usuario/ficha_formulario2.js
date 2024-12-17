
var requestContextPath = window.location.pathname.substring(0, window.location.pathname.indexOf("/", 2));
var urlx = requestContextPath + "/dp/ficha/formulario";




$(document).ready(function () {
    
console.log("Archivo ficha_formulario2.js cargado correctamente");

    $.ajaxSetup({
        statusCode: {
            401: function () {
                window.location = requestContextPath + '/406';
            }
        }
    });

    $('#cod_unico').css('pointer-events', 'none');

    iniciar_fecha();
    mostrar_modal_info();
    aplicarExpresionRegularTexto();
    aplicarExpresionRegular();
    validarRadios(); // Inicia la validación de radios al cargar la página
    validarCheckboxes(); // Inicia la validación de checkboxes al cargar la página
    inicializarValidacion(); // Activa la validación dinámica
    //validap7_2_tipo_1(); 
    //validap7_2_tipo_2();
   // valida3_p1_13_otros();
   // initializeFormEventspV_2_3();
   // valida_p3_16_3_s1();
    valida_p2_11_s1();
  //  toggleRowP3_16_1();
    toggleRowP3_16_2();
    aplicarFormatoFecha();
    aplicarFormatoFecha2();
    
    valida_p2_1_1();
   

    $(document).on('change', '#cod_unico', function () {
        buscar_establecimiento_demuna();
    });


    $(document).on('change', '#codi_depa_dpt', function () {
        buscar_municipalidades();
    });
    
   $(document).on('submit', '#frm_mdl_sec4_3', function (event) {
        event.preventDefault();

        guardar_modal_sec4_3();

    });
    

 $(document).on('submit', '#frm_mdl_sec5_1', function (event) {
        event.preventDefault();

        guardar_modal_sec5_1();

    });
    
    
$(document).on('submit', '#frm_mdl_sec5_2', function (event) {
        event.preventDefault();
        guardar_modal_sec5_2();

    });

$(document).on('submit', '#frm_mdl_sec5_3', function (event) {
        event.preventDefault();
        guardar_modal_sec5_3();

    });
    
$(document).on('submit', '#frm_mdl_sec5_4', function (event) {
        event.preventDefault();
        guardar_modal_sec5_4();

    });
    
$(document).on('submit', '#frm_mdl_sec5_5', function (event) {
        event.preventDefault();
        guardar_modal_sec5_5();

    });
    
     
$(document).on('submit', '#frm_mdl_sec5_6', function (event) {
        event.preventDefault();
        guardar_modal_sec5_6();

    });   
    
$(document).on('submit', '#frm_mdl_sec5_7', function (event) {
        event.preventDefault();
        guardar_modal_sec5_7();

    });    
    
    $(document).on('submit', '#frm_mdl_sec5_8', function (event) {
        event.preventDefault();
        guardar_modal_sec5_8();

    });
    
    $(document).on('submit', '#frm_mdl_sec5_9', function (event) {
        event.preventDefault();
        guardar_modal_sec5_9();

    });
    
      $(document).on('submit', '#frm_mdl_sec5_10', function (event) {
        event.preventDefault();
        guardar_modal_sec5_10();

    });
    
    $(document).on('submit', '#frm_mdl_sec5_31', function (event) {
        event.preventDefault();
        guardar_modal_sec5_31();

    });
    
});




function iniciar_fecha() {
    var rol_usuario = $("#rol_usuario").val();
    var id_ficha = $("#id_ficha").val();

    if (id_ficha !== "") {
        
        const fechas_ids = [
            'p3_1_1_fch',
            'p3_1_2_fch',
            'p3_1_3_fch',
            'p3_1_4_fch',
            'p3_1_5_fch',
            'p3_1_6_fch',
            'p3_1_7_fch',
            'p3_1_8_fch',
            'p3_1_9_fch',
            'p3_1_10_fch',
            'p3_1_11_fch',
            'p3_1_12_fch'
        ];

    
    
        fechas_ids.forEach(function(fecha_id) {
            var fecha_element = document.getElementById(fecha_id);
            if (fecha_element) { 
                new tempusDominus.TempusDominus(fecha_element, {
                    display: {
                        components: {
                            clock: false
                        },
                        theme: 'dark'
                    },
                    restrictions: {
                        maxDate: new Date()
                    },
                    localization: {
                        dayViewHeaderFormat: {month: 'long', year: 'numeric'},
                        locale: 'es-ES',
                        format: 'dd/MM/yyyy'
                    }
                });
            } else {
                console.error('Elemento no encontrado: ' + fecha_id);
            }
        });
        
         const fecha_hora = new tempusDominus.TempusDominus(document.getElementById('fch_supervision'), {
            display: {
                components: {
                    clock: false
                },
                theme: 'dark'
            },
            localization: {
                dayViewHeaderFormat: {month: 'long', year: 'numeric'},
                locale: 'es-ES',
                format: 'dd/MM/yyyy'
            },
            restrictions: {
                maxDate: new Date()
            }
        });
    }
}

//
function mostrar_modal_info() {

    var flag_modal = $("#flag_modal").val();

    if (flag_modal === "S") {
        $("#mdl_info_ficha").modal("show");
        
        setTimeout(function() {
            $("#mdl_info_ficha").modal("hide");
        }, 2000);

        
    }
}



function guardar_total() {

    $(".accordion-button").removeClass("collapsed");
    $(".accordion-collapse").removeClass("show").addClass("show");

}

function validacion_final() {

    $("#btn_guardar").prop("disabled", true);
    $("#btn_guardar").text('');
    $("#btn_guardar").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');

    $(".btn_guardar_parcial").prop("disabled", true);
    $(".btn_guardar_parcial").text('');
    $(".btn_guardar_parcial").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');

}

function validarNoNegativo(input) {
        // Si el valor es menor que 0, lo cambia a 0
        if (input.value < 0) {
            input.value = 0;
        }
    }

function guardar_parcial_1(elem) {
    
    var btn_guardado_parcial = elem.id;

    $(".btn_guardar_parcial").prop("disabled", true);
    $(".btn_guardar_parcial").text('');
    $(".btn_guardar_parcial").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');

    $("#btn_guardar").prop("disabled", true);
    $("#btn_guardar").text('');
    $("#btn_guardar").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');

    $("#btn_guardar_final").prop("disabled", true);
    $("#btn_guardar_final").text('');
    $("#btn_guardar_final").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');
//////////////////////////////////////////////////////////
    var estado = $("#estado").val();
    var no_pudo_aplicar_ficha = $("#no_implementado").is(":checked");
    if (no_pudo_aplicar_ficha) {
        // Si está marcado, establecer el estado como completo
        estado = "C";
    } else {
        // Si no está marcado, mantener el estado actual
        estado = estado === 'C' ? "C" : "I";
    }
/////////////////////////////////////////////////////////
    $("#estado").val(estado);
    $("#txt_btn_guardado_parcial").val(btn_guardado_parcial);
    $("#flag_guardado_parcial").val(true);
   
    try {
        // Verificar y mostrar los datos antes de enviar el formulario
        var formData = $("#frm_fichas").serializeArray();    
        $("#frm_fichas").submit();
    } catch (error) {
       
    }

    $("#frm_fichas").submit();
}


function guardar_parcial_2(elem) {
    
    var btn_guardado_parcial = elem.id;
console.log("btn_guardado_parcial" + btn_guardado_parcial);
    $(".btn_guardar_parcial").prop("disabled", true);
    $(".btn_guardar_parcial").text('');
    $(".btn_guardar_parcial").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');

    $("#btn_guardar").prop("disabled", true);
    $("#btn_guardar").text('');
    $("#btn_guardar").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');

    $("#btn_guardar_final").prop("disabled", true);
    $("#btn_guardar_final").text('');
    $("#btn_guardar_final").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');
//////////////////////////////////////////////////////////
    var estado = $("#estado").val();
    console.log("estado1"+ estado);
      var no_pudo_aplicar_ficha = $('#no_funciona').is(':checked');
    alert(no_pudo_aplicar_ficha);
    if (no_pudo_aplicar_ficha) {
        // Si está marcado, establecer el estado como completo
        estado = "C";
        
        alert( estado);
    } else {
        // Si no está marcado, mantener el estado actual
        estado = estado === 'C' ? "C" : "I";
        
          console.log("estado3"+ estado);
    }
/////////////////////////////////////////////////////////
    $("#estado").val(estado);
    $("#txt_btn_guardado_parcial").val(btn_guardado_parcial);
    $("#flag_guardado_parcial").val(true);
   
    try {
        // Verificar y mostrar los datos antes de enviar el formulario
        var formData = $("#frm_fichas").serializeArray();    
        $("#frm_fichas").submit();
    } catch (error) {
       
    }

    $("#frm_fichas").submit();
}

function enableValidateButton() {
        const validateButton = document.getElementById('btn_validar_sec_1');
        validateButton.disabled = false;
    }
    
function guardar_parcial(elem) {
console.log("Se invocó guardar_parcial con el elemento:", elem);
    var btn_guardado_parcial = elem.id;
    console.log("ID del botón:", btn_guardado_parcial);

    $(".btn_guardar_parcial").prop("disabled", true);
    $(".btn_guardar_parcial").text('');
    $(".btn_guardar_parcial").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');
    
    $("#btn_guardar").prop("disabled", true);
    $("#btn_guardar").text('');
    $("#btn_guardar").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');
    
    $("#btn_guardar_final").prop("disabled", true);
    $("#btn_guardar_final").text('');
    $("#btn_guardar_final").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');
    
    var estado = $("#estado").val();
    estado = estado === 'C' ? "C" : "I";
    
     console.log("estado"+ estado);
     
    $("#estado").val(estado);
    $("#txt_btn_guardado_parcial").val(btn_guardado_parcial);
    $("#flag_guardado_parcial").val(true);
     try {
        var formData = $("#frm_fichas").serializeArray();
        console.log("Datos del formulario:", formData);

        $("#frm_fichas").submit();
    } catch (error) {
        console.error("Error al guardar parcialmente:", error);
        alert("Ocurrió un error al guardar parcialmente. Por favor, inténtalo de nuevo.");
    }
    $("#frm_fichas").submit();
    
  }

function buscar_establecimiento_demuna() {
    console.log("entro a la funcion");

    var cod_unicox = $("#cod_unicox").val();

    console.log("codigo :" + cod_unicox);

    if (cod_unicox !== "") {
        $("#btn_buscar").prop("disabled", true);
        $("#btn_buscar").text('');
        $("#btn_buscar").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Buscando...');

        $(".search_ie").prop("disabled", true);

        $.ajax({
            url: urlx + "/ajaxBuscarEESS",
            type: 'POST',
            data: {cod_unico: cod_unicox},
            success: function (data, textStatus, jqXHR) {

                console.log("Datos recibidos", data);
                for (var key in data) {
                    if (data.hasOwnProperty(key)) {
                        console.log("Nombre del campo: " + key);
                        console.log("Valor del campo " + key + ": " + data[key]); 
                    }
                }
                $("#id_sestablecmnt").val(data.id_sestablecmnt);
                
                $("#departamento_educa").val(data.departamento_educa);
                $("#provincia_educa").val(data.provincia_educa);
                $("#distrito_educa").val(data.distrito_educa);
                $("#nom_entidad").val(data.nom_entidad);
                $(".search_ie").prop("disabled", false);

                $("#btn_buscar").prop("disabled", false);
                $("#btn_buscar").text('');
                $("#btn_buscar").wrapInner('<i class="fa-solid fa-magnifying-glass"></i> Buscar');

//                mostrar_modal_info_ie();

            }, error: function (jqXHR, textStatus, errorThrown) {

                $(".search_ie").prop("disabled", false);
                $("#btn_buscar").prop("disabled", false);
                $("#btn_buscar").text('');
                $("#btn_buscar").wrapInner('<i class="fa-solid fa-magnifying-glass"></i> Buscar');

                if (jqXHR.status == 401) {
                    alert("Su sesi\u00F3n ha finalizado");
                } else {
                    alert("Ocurrio un error al cargar");
                }

            }
        });
    } else {
        alert("Ingresar el c\u00F3digo del establecimiento");
    }
}


function buscar_distritos() {
    $("#codi_dist_tdi").prop("disabled", true);

    var codi_depa_dpt = $("#codi_depa_dpt").val();
    var codi_prov_tpr = $("#codi_prov_tpr").val();
    var coddistx = $("#codi_municipalidad option:selected").data("coddistx");

    console.log("codi_depa_dpt: " + codi_depa_dpt);
    console.log("codi_prov_tpr: " + codi_prov_tpr);
    console.log("coddistx: " + coddistx);

    $.ajax({
        url: urlx + "/ajaxBuscarDistritos",
        type: 'POST',
        data: {
            codi_depa_dpt: codi_depa_dpt,
            codi_prov_tpr: codi_prov_tpr,
            coddistx: coddistx
        },
        success: function (data, textStatus, jqXHR) {
            $("#codi_dist_tdi").prop("disabled", false);
            $("#codi_dist_tdi").html(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}



function actualizarDistritos() {
    var selectMunicipalidad = document.getElementById("codi_municipalidad");
    var selectDistrito = document.getElementById("codi_dist_tdi");

    console.log("aD");
    // Obtener el texto completo de la opción seleccionada en el primer select
    var selectedOptionText = selectMunicipalidad.options[selectMunicipalidad.selectedIndex].text;

    // Si el texto completo de la opción seleccionada contiene "MUNICIPALIDAD PROVINCIAL", deshabilitar el segundo select
    if (selectedOptionText.indexOf("MUNICIPALIDAD PROVINCIAL") !== -1) {
        selectDistrito.disabled = true;
        selectDistrito.value = "";
    } else {
        selectDistrito.disabled = false;
    }
}
//    
//function buscar_municipalidades() {
//    // Obtener los valores seleccionados
//    var codi_depa_dpt = $("#codi_depa_dpt").val();
//    var codi_prov_tpr = $("#codi_prov_tpr").val();
//    var codi_dist_tdi = $("#codi_dist_tdi").val();
//    // Verificar si se han seleccionado tanto el departamento como la provincia
//    if (codi_depa_dpt && codi_prov_tpr) {
//        // Ambos valores están seleccionados, proceder con la búsqueda
//        $("#codi_municipalidad").prop("disabled", true);
//        console.log("Código de departamento seleccionado: ", codi_depa_dpt);
//        console.log("Código de provincia seleccionado: ", codi_prov_tpr);
//
//        $.ajax({
//            url: urlx + "/ajaxBuscarMunicipalidades",
//            type: 'POST',
//            data: {codi_depa_dpt: codi_depa_dpt, codi_prov_tpr: codi_prov_tpr},
//            success: function (data, textStatus, jqXHR) {
//                $("#codi_municipalidad").prop("disabled", false);
//                $("#codi_municipalidad").html(data);
//            },
//            error: function (jqXHR, textStatus, errorThrown) {
//                if (jqXHR.status == 401) {
//                    alert("Su sesión ha finalizado");
//                } else {
//                    alert("Ocurrió un error al cargar");
//                }
//            }
//        });
//    } else {
//        // Mostrar un mensaje de error o realizar alguna acción cuando no se hayan seleccionado ambos valores
//        console.log("Por favor seleccione tanto el departamento como la provincia");
//    }
//}

function buscar_municipalidades() {
    // Obtener los valores seleccionados
    var codi_depa_dpt = $("#codi_depa_dpt").val();
    var codi_prov_tpr = $("#codi_prov_tpr").val();
    var codi_dist_tdi = $("#codi_dist_tdi").val();

    // Verificar si se han seleccionado tanto el departamento como la provincia
    if (codi_depa_dpt && codi_prov_tpr) {
        // Ambos valores están seleccionados, proceder con la búsqueda
        $("#codi_municipalidad").prop("disabled", true);
        console.log("Código de departamento seleccionado: ", codi_depa_dpt);
        console.log("Código de provincia seleccionado: ", codi_prov_tpr);
        console.log("Código de distrito seleccionado: ", codi_dist_tdi);

        // Crear el objeto de datos a enviar
        var requestData = {
            codi_depa_dpt: codi_depa_dpt,
            codi_prov_tpr: codi_prov_tpr
        };

        // Verificar si se ha seleccionado el distrito y agregarlo a los datos
        if (codi_dist_tdi) {
            requestData.codi_dist_tdi = codi_dist_tdi;
        }

        $.ajax({
            url: urlx + "/ajaxBuscarMunicipalidades",
            type: 'POST',
            data: requestData,
            success: function (data, textStatus, jqXHR) {
                $("#codi_municipalidad").prop("disabled", false);
                $("#codi_municipalidad").html(data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                if (jqXHR.status == 401) {
                    alert("Su sesión ha finalizado");
                } else {
                    alert("Ocurrió un error al cargar");
                }
            }
        });
    } else {
        // Mostrar un mensaje de error o realizar alguna acción cuando no se hayan seleccionado ambos valores
        console.log("Por favor seleccione tanto el departamento como la provincia");
    }
}


//function buscar_municipalidades() {
//    
//    $("#codi_municipalidad").prop("disabled", true);
//    // Obtener los valores seleccionados
//    var codi_depa_dpt = $("#codi_depa_dpt").val();
//    var codi_prov_tpr = $("#codi_prov_tpr").val();
//
//    
//    if (codi_depa_dpt && codi_prov_tpr) {
//   
//        $("#codi_municipalidad").prop("disabled", true);
//        console.log("Código de departamento seleccionado: ", codi_depa_dpt);
//        console.log("Código de provincia seleccionado: ", codi_prov_tpr);
//
//        $.ajax({
//            url: urlx + "/ajaxBuscarMunicipalidades",
//            type: 'POST',
//            data: {codi_depa_dpt: codi_depa_dpt, codi_prov_tpr: codi_prov_tpr},
//            success: function (data, textStatus, jqXHR) {
//                $("#codi_municipalidad").prop("disabled", false);
//                $("#codi_municipalidad").html(data);
//            },
//            error: function (jqXHR, textStatus, errorThrown) {
//                if (jqXHR.status == 401) {
//                    alert("Su sesión ha finalizado");
//                } else {
//                    alert("Ocurrió un error al cargar");
//                }
//            }
//        });
//    } else {
//        // Mostrar un mensaje de error o realizar alguna acción cuando no se hayan seleccionado ambos valores
//        console.log("Por favor seleccione tanto el departamento como la provincia");
//    }
//}

//function actualizarCampos() {
//    var selectMunicipalidad = document.getElementById("codi_municipalidad");
//    var selectedIndex = selectMunicipalidad.selectedIndex;
//    
//    if (selectedIndex > 0) {
//        var selectedOption = selectMunicipalidad.options[selectedIndex];
//        var optionValue = selectedOption.value;
//        var optionValues = optionValue.split('_');
//        
//        // Obtener los valores individuales de la opción seleccionada
//        var ubigeo = optionValues[0];
//        var nomEntidad = optionValues[1];
//        var codUnico = optionValues[2];
//        var nomAutoridad = optionValues[3];
//        var telefono = optionValues[4];
//        var correo = optionValues[5];
//        var nresolu = optionValues[6];
//        console.log("valor"+ nomAutoridad);
//        // Establecer los valores en los campos correspondientes
//        //document.getElementById("nom_entidad").value = nomEntidad;
//        document.getElementById("cod_unicox").value = codUnico;
//        document.getElementById("nom_alcalde").value = nomAutoridad;
//        document.getElementById("num_celular").value = telefono;
//        document.getElementById("correo_demuna").value = correo;
//        document.getElementById("ndocumento").value = nresolu;
//    } else {
//        // Si no se selecciona ninguna municipalidad, limpiar los campos
//       // document.getElementById("nom_entidad").value = "";
//        document.getElementById("cod_unicox").value = "";
//        document.getElementById("nom_alcalde").value = "";
//        document.getElementById("num_celular").value = "";
//        document.getElementById("correo_demuna").value = "";
//        document.getElementById("ndocumento").value = "";
//    }
//}

//function actualizarCampos() {
//    var selectMunicipalidad = document.getElementById("codi_municipalidad");
//    var selectedIndex = selectMunicipalidad.selectedIndex;
//    
//    if (selectedIndex > 0) {
//        var selectedOption = selectMunicipalidad.options[selectedIndex];
//        var nomEntidad = selectedOption.getAttribute("data-nom-entidad");
//        var codUnico = selectedOption.getAttribute("data-cod-unico");
//        var nomAutoridad = selectedOption.getAttribute("data-nom-autoridad");
//        var telefono = selectedOption.getAttribute("data-telefono");
//        var correo = selectedOption.getAttribute("data-correo");
//        var nresolu = selectedOption.getAttribute("data-nresolu");
//
//        // Establecer los valores en los campos correspondientes
//        // document.getElementById("nom_entidad").value = nomEntidad;
//        document.getElementById("cod_unicox").value = codUnico;
//        document.getElementById("nom_alcalde").value = nomAutoridad;
//        document.getElementById("num_celular").value = telefono;
//        document.getElementById("correo_demuna").value = correo;
//        document.getElementById("ndocumento").value = nresolu;
//    } else {
//        // Si no se selecciona ninguna municipalidad, limpiar los campos
//        // document.getElementById("nom_entidad").value = "";
//        document.getElementById("cod_unicox").value = "";
//        document.getElementById("nom_alcalde").value = "";
//        document.getElementById("num_celular").value = "";
//        document.getElementById("correo_demuna").value = "";
//        document.getElementById("ndocumento").value = "";
//    }
//}
function actualizarCampos() {
    var selectMunicipalidad = document.getElementById("codi_municipalidad");
    var selectedIndex = selectMunicipalidad.selectedIndex;

    if (selectedIndex > 0) {
        var selectedOption = selectMunicipalidad.options[selectedIndex];
        var codUnico = selectedOption.getAttribute("data-cod-unico");

        console.log("codigo :" + codUnico);
        console.log("Código único enviado al servidor:", codUnico);

        $.ajax({
//            url: urlx + "/ajaxBuscarCodUnico", 
//            type: 'POST',
            url: urlx + "/ajaxBuscarCodUnico",
            type: 'GET',
            data: {cod_unico: codUnico},
            success: function (response) {

                if (response.existe) {
                    // Si el código único existe, mostrar una alerta con SweetAlert
                    Swal.fire({
                        icon: 'warning',
                        title: 'Atención',
                        text: 'Ya se encuentra registrada; Por favor, elija otra Municipalidad.'
                    });
                    limpiarCampos();
                } else {
                    // Si el código único no existe, completar los campos
                    //  completarCampos(selectedOption);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                // Si hay un error en la petición AJAX, completar los campos como lo hacías antes
                completarCampos(selectedOption);
            }
        });
    } else {
        // Si no se selecciona ninguna municipalidad, limpiar los campos
        limpiarCampos();
    }
}

//function completarCampos(selectedOption) {
//    var codUnico = selectedOption.getAttribute("data-cod-unico");
//    var nomAutoridad = selectedOption.getAttribute("data-nom-autoridad");
//    var telefono = selectedOption.getAttribute("data-telefono");
//    var correo = selectedOption.getAttribute("data-correo");
//    var nresolu = selectedOption.getAttribute("data-nresolu");
//
//    document.getElementById("cod_unicox").value = codUnico;
//    document.getElementById("nom_alcalde").value = nomAutoridad;
//    document.getElementById("num_celular").value = telefono;
//    document.getElementById("correo_demuna").value = correo;
//    document.getElementById("ndocumento").value = nresolu;
//}

function limpiarCampos() {
    document.getElementById("codi_depa_dpt").value = "";
    document.getElementById("codi_prov_tpr").value = "";
    document.getElementById("codi_dist_tdi").value = "";
    document.getElementById("codi_municipalidad").value = "";
}


function mayus(e) {
    e.value = e.value.toUpperCase();
}

////////////////VALIDACION GENERAL PARA NUMEROS////////////
function aplicarExpresionRegular() {
    var sopInputs = document.querySelectorAll('.sop');

    sopInputs.forEach(function (input) {
        input.addEventListener('input', function () {
            // Limitar el ingreso a igual o menos de 9 caracteres
            if (this.value.length > 12) {
                this.value = this.value.slice(0, 12);
            }
            // Aplicar expresión regular para permitir solo números
            this.value = this.value.replace(/[^0-9]/g, '');
        });
    });
}

function aplicarExpresionRegular_decimal() {
    var sopInputs = document.querySelectorAll('.decimal');

    sopInputs.forEach(function (input) {
        input.addEventListener('input', function () {
            
            if (this.value.length > 9) {
                this.value = this.value.slice(0, 9);
            }
           
            this.value = this.value.replace(/[^0-9.]/g, '');

            
            var parts = this.value.split('.');
            if (parts.length > 2) {
                this.value = parts[0] + '.' + parts.slice(1).join('');
            }
        });
    });
}

function aplicarExpresionRegularTexto() {
    var textInputs = document.querySelectorAll('.only-text');

    textInputs.forEach(function (input) {
        input.addEventListener('input', function () {
            // Limitar el ingreso a igual o menos de 90 caracteres
            if (this.value.length > 90) {
                this.value = this.value.slice(0, 90);
            }
            // Aplicar expresión regular para permitir solo letras y espacios
            this.value = this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
        });
    });
}


function aplicarFormatoFecha() {
    var sopInputs = document.querySelectorAll('.fechax');

    sopInputs.forEach(function (input) {
        input.addEventListener('input', function () {
            // Remover cualquier caracter que no sea un número
            let inputValue = this.value.replace(/[^0-9]/g, '');

            // Agregar las barras en las posiciones adecuadas
            if (inputValue.length > 2 && inputValue.length <= 4) {
                inputValue = inputValue.slice(0, 2) + '/' + inputValue.slice(2);
            } else if (inputValue.length > 4) {
                inputValue = inputValue.slice(0, 2) + '/' + inputValue.slice(2, 4) + '/' + inputValue.slice(4, 8);
            }

            // Limitar el ingreso a igual o menos de 10 caracteres (incluyendo las barras "/")
            this.value = inputValue.slice(0, 10);
        });

        // Validar el ingreso cuando el input pierde el foco
        input.addEventListener('blur', function () {
            var regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
            if (!regex.test(this.value)) {

                Swal.fire({
                    title: 'Atención',
                    text: 'Por favor, ingrese una fecha válida en el formato DD/MM/AAAA.'
                });
                this.value = '';
            }
        });
    });
}
function aplicarFormatoFecha2() {
    var sopInputs = document.querySelectorAll('.fechay');

    sopInputs.forEach(function (input) {
        input.addEventListener('input', function () {
            // Remover cualquier caracter que no sea un número
            let inputValue = this.value.replace(/[^0-9]/g, '');

            // Agregar las barras en las posiciones adecuadas
            if (inputValue.length > 2 && inputValue.length <= 4) {
                inputValue = inputValue.slice(0, 2) + '/' + inputValue.slice(2);
            } else if (inputValue.length > 4) {
                inputValue = inputValue.slice(0, 2) + '/' + inputValue.slice(2, 4) + '/' + inputValue.slice(4, 8);
            }

            // Limitar el ingreso a igual o menos de 10 caracteres (incluyendo las barras "/")
            this.value = inputValue.slice(0, 10);
        });

        // Validar el ingreso cuando el input pierde el foco
        input.addEventListener('blur', function () {
            var regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
            if (!regex.test(this.value)) {

                Swal.fire({
                    title: 'Atención',
                    text: 'Por favor, ingrese una fecha válida en el formato DD/MM/AAAA.'
                });
                this.value = '';
            }
        });
    });
}
////////////////////FIN VALIDACION NUMÉRICA//////////////// 
//
//
//






function buscar_dni_funcionario() {

    var num_dni = $("#dni_funcionario").val();
    if (num_dni !== "" && num_dni.length == 8) {
        $("#btn_buscar_dni").prop("disabled", true);
        $("#btn_buscar_dni").text('');
        $("#btn_buscar_dni").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Buscando...');
        $.ajax({
            url: urlx + "/ajaxBuscarByDNI",
            type: 'POST',
            data: {num_dni: num_dni},
            success: function (data, textStatus, jqXHR) {


                $("#nom_funcionario").val(data.nom_funcionario);
                $("#btn_buscar_dni").prop("disabled", false);
                $("#btn_buscar_dni").text('');
                $("#btn_buscar_dni").wrapInner('<i class="fa-solid fa-magnifying-glass"></i> Buscar');
            }, error: function (jqXHR, textStatus, errorThrown) {

                $("#btn_buscar_dni").prop("disabled", false);
                $("#btn_buscar_dni").text('');
                $("#btn_buscar_dni").wrapInner('<i class="fa-solid fa-magnifying-glass"></i> Buscar');
                if (jqXHR.status == 401) {
                    alert("Su sesi\u00F3n ha finalizado");
                } else {
                    alert("Ocurrio un error al cargar");
                }

            }
        });
    } else {
        alert("Ingresar los 8 d\u00EDgitos del n\u00FAmero DNI");
    }
}


function buscar_dni_defensor() {

    var num_dni = $("#dni_defensor_demuna").val();
    if (num_dni !== "" && num_dni.length == 8) {
        $("#btn_buscar_dni").prop("disabled", true);
        $("#btn_buscar_dni").text('');
        $("#btn_buscar_dni").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Buscando...');
        $.ajax({
            url: urlx + "/ajaxBuscarByDNIdefensor",
            type: 'POST',
            data: {num_dni: num_dni},
            success: function (data, textStatus, jqXHR) {


                $("#nom_defensor").val(data.nom_defensor);
                $("#btn_buscar_dni").prop("disabled", false);
                $("#btn_buscar_dni").text('');
                $("#btn_buscar_dni").wrapInner('<i class="fa-solid fa-magnifying-glass"></i> Buscar');
            }, error: function (jqXHR, textStatus, errorThrown) {

                $("#btn_buscar_dni").prop("disabled", false);
                $("#btn_buscar_dni").text('');
                $("#btn_buscar_dni").wrapInner('<i class="fa-solid fa-magnifying-glass"></i> Buscar');
                if (jqXHR.status == 401) {
                    alert("Su sesi\u00F3n ha finalizado");
                } else {
                    alert("Ocurrio un error al cargar");
                }

            }
        });
    } else {
        alert("Ingresar los 8 d\u00EDgitos del n\u00FAmero DNI");
    }
}



//SECCION 4_3

function abrir_modal_sec4_3(id, id_ficha) {

    $("#loader_mdl_sec4_3").show();
    $("#loader_form_mdl_sec4_3").hide();

    if (id_ficha === null) {
        id_ficha = $("#id_ficha").val();
    }

    $.ajax({
        url: urlx + "/ajaxBuscarSec4_3",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec4_3_mdl").html(data);

            $("#loader_mdl_sec4_3").hide();
            $("#loader_form_mdl_sec4_3").show();
        },
        error: function (jqXHR, textStatus, errorThrown) {

            $("#loader_mdl_sec4_3").show();
            $("#loader_form_mdl_sec4_3").hide();

            if (jqXHR.status == 401) {
                alert("Su sesi\u00F3n ha finalizado");
            } else {
                alert("Ocurrio un error al cargar");
            }
        }
    });
}


function guardar_modal_sec4_3() {
console.log("entro a  guardar");
    $("#btn_save_mdl_sec4_3").prop("disabled", true);
    $("#btn_save_mdl_sec4_3").text('');
    $("#btn_save_mdl_sec4_3").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');


    var educa_ficha_s4_3pk = {
        
        id: parseInt($("#mdl_sec4_3_id").val()),
        id_ficha: parseInt($("#mdl_sec4_3_id_ficha").val())
      
    };
  console.log("1");
    var educa_ficha_s4_3 = {
        educa_ficha_s4_3pk: educa_ficha_s4_3pk,
        fch_registro: $("#mdl_sec4_3_fch_registro").val(),
        usu_registro: $("#mdl_sec4_3_usu_registro").val(),
        p0: $("#mdl_sec4_3_p0").val(),
        p1_dni: $("#mdl_sec4_3_p1").val(),
        p2_nombres: $("#mdl_sec4_3_p2").val(),
        p3_edad: $("#p3_edad").val(),
        p4_sexo: $("#p4_sexo").val(),
        p5_grado: $("#p5_grado").val(),
        p6_vive_re: $("#p6_vive_re").val(),
        p7_anio: $("#p7_anio").val(),
        p7_tipo_discapacidad: $("#p7_tipo_discapacidad").val(),
        p7_recibe_tratamiento: $("#p7_recibe_tratamiento").val(),
        p7_dosis: $("#p7_dosis").val(),
        p7_sufre_enfermedad: $("#p7_sufre_enfermedad").val(),
        p7_tiene_partida: $("#p7_tiene_partida").val(),
        p7_cuenta_documento: $("#p7_cuenta_documento").val(),
        p7_presento_denuncia: $("#p7_presento_denuncia").val(),
        p8_lengua: $("#p8_lengua").val(),
        p8_conadis: $("#p8_conadis").val(),
        p8_tipo_enfermedad: $("#p8_tipo_enfermedad").val(),
        p8_certificado_nac: $("#p8_certificado_nac").val(),
        p8_tipodoc: $("#p8_tipodoc").val(),
        p8_atencion_psico: $("#p8_atencion_psico").val(),
        p9_nom_tutor: $("#p9_nom_tutor").val(),
        p10_cel_tutor: $("#p10_cel_tutor").val(),
        p10_1: $("#p10_1").val(),
        p10_carnet_refugio: $("#p10_carnet_refugio").val(),
        p11_motivo_retiro: $("#p11_motivo_retiro").val(),
        p11_observa: $("#p11_observa").val()
    };
  console.log("2");
    $.ajax({
        url: urlx + "/ajaxGuardarMdlSec4_3",
        contentType: "application/json;text/html;charset=UTF-8",
        type: "POST",
        data: JSON.stringify(educa_ficha_s4_3),
        success: function (data, textStatus, jqXHR) {
console.log("3");
            $("#div_sec4_3").html(data);

            $("#btn_save_mdl_sec4_3").prop("disabled", false);
            $("#btn_save_mdl_sec4_3").text('');
            $("#btn_save_mdl_sec4_3").wrapInner('<span class="fa fa-cloud-upload" aria-hidden="true"></span> Guardar');
            
            console.log("antes de cerrar modal");
            $("#modal_sec4_3").modal("hide");

        },
        error: function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status == 401) {
                alert("Su sesi\u00F3n ha finalizado");
            } else {
                alert("Ocurrio un error al cargar");
            }
        }
    });
}

function eliminar_modal_sec4_3(id, id_ficha) {

    $.ajax({
        url: urlx + "/ajaxEliminarModalSec4_3",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec4_3").html(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {


            if (jqXHR.status == 401) {
                alert("Su sesi\u00F3n ha finalizado");
            } else {
                alert("Ocurrio un error al cargar");
            }
        }
    });
}
/*******************************************************************************/

function abrir_modal_sec5_1(id, id_ficha) {

    $("#loader_mdl_sec5_1").show();
    $("#loader_form_mdl_sec5_1").hide();

    if (id_ficha === null) {
        id_ficha = $("#id_ficha").val();
    }

    $.ajax({
        url: urlx + "/ajaxBuscar2Sec5_1",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec5_1_mdl").html(data);

            $("#loader_mdl_sec5_1").hide();
            $("#loader_form_mdl_sec5_1").show();
        },
        error: function (jqXHR, textStatus, errorThrown) {

            $("#loader_mdl_sec5_1").show();
            $("#loader_form_mdl_sec5_1").hide();

            if (jqXHR.status == 401) {
                alert("Su sesi\u00F3n ha finalizado");
            } else {
                alert("Ocurrio un error al cargar");
            }
        }
    });
}

function guardar_modal_sec5_1() {
console.log("entro a  guardar");
    $("#btn_save_mdl_sec5_1").prop("disabled", true);
    $("#btn_save_mdl_sec5_1").text('');
    $("#btn_save_mdl_sec5_1").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');


    var educa_ficha2_s5_1pk = {
        
        id: parseInt($("#mdl_sec5_1_id").val()),
        id_ficha: parseInt($("#mdl_sec5_1_id_ficha").val())
      
    };
  console.log("1");
    var educa_ficha2_s5_1 = {
        educa_ficha2_s5_1pk: educa_ficha2_s5_1pk,
        fch_registro: $("#mdl_sec5_1_fch_registro").val(),
        usu_registro: $("#mdl_sec5_1_usu_registro").val(),
        p1_2_terreno: $("#p1_2_terreno").val(),
        p1_2_area: $("#p1_2_area").val(),
        p1_2_condicion: $("#p1_2_condicion").val(),
        p1_2_saneamiento: $("#p1_2_saneamiento").val(),
        p1_2_posesion: $("#p1_2_posesion").val(),
        p1_2_propietario: $("#p1_2_propietario").val(),
        p1_2_inscrito: $("#p1_2_inscrito").val(),
        p1_2_uso: $("#p1_2_uso").val(),
        p1_2_uso_detalle: $("#p1_2_uso_detalle").val()
        
        
    };
  console.log("2");
    $.ajax({
        url: urlx + "/ajaxGuardar2MdlSec5_1",
        contentType: "application/json;text/html;charset=UTF-8",
        type: "POST",
        data: JSON.stringify(educa_ficha2_s5_1),
        success: function (data, textStatus, jqXHR) {
console.log("3");
            $("#div_sec5_1").html(data);

            $("#btn_save_mdl_sec5_1").prop("disabled", false);
            $("#btn_save_mdl_sec5_1").text('');
            $("#btn_save_mdl_sec5_1").wrapInner('<span class="fa fa-cloud-upload" aria-hidden="true"></span> Guardar');
            
            console.log("antes de cerrar modal");
            $("#modal_sec5_1").modal("hide");

        },
        error: function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status == 401) {
                alert("Su sesi\u00F3n ha finalizado");
            } else {
                alert("Ocurrio un error al cargar");
            }
        }
    });
}

function eliminar_modal_sec5_1(id, id_ficha) {

    $.ajax({
        url: urlx + "/ajaxEliminar2ModalSec5_1",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec5_1").html(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {


            if (jqXHR.status == 401) {
                alert("Su sesi\u00F3n ha finalizado");
            } else {
                alert("Ocurrio un error al cargar");
            }
        }
    });
}
/*******************************************************************************/








// Función para habilitar o deshabilitar el input asociado al checkbox////////
function toggleInputBasedOnCheckbox(checkboxId, inputId) {
    const checkbox = document.getElementById(checkboxId);
    const input = document.getElementById(inputId);

    // Verificar si el checkbox está marcado
    if (checkbox.checked) {
        input.disabled = false; // Habilitar el input
    } else {
        input.disabled = true;  // Deshabilitar el input
        input.value = '';       // Opcional: Limpiar el valor cuando se deshabilita
    }
}
///////////////////////////////////////////////////////////////////////////
//
//function initializeFormEvents1x() {
//    // Para el primer checkbox y su input correspondiente
//    const checkbox1 = document.getElementById('p4_20_1');
//    const input1 = document.getElementById('p4_20_1_cantidad');
//
//   
//    
//     checkbox1.addEventListener('change', function() {
//        toggleInputBasedOnCheckbox('p4_20_1', 'p4_20_1_cantidad');
//    });
//    
//     toggleInputBasedOnCheckbox('p4_20_1', 'p4_20_1_cantidad');
// 
//}
//// Asegúrate de que la función se ejecute cuando el DOM esté listo
//document.addEventListener('DOMContentLoaded', initializeFormEvents1x);
//// Función para inicializar los eventos de los checkboxes
//
//
//
//function initializeFormEvents2x() {
//    // Para el primer checkbox y su input correspondiente
//    const checkbox2 = document.getElementById('p4_20_2');
//    const input2 = document.getElementById('p4_20_2_cantidad');
//
//   
//    
//     checkbox2.addEventListener('change', function() {
//        toggleInputBasedOnCheckbox('p4_20_2', 'p4_20_2_cantidad');
//    });
//    
//     toggleInputBasedOnCheckbox('p4_20_2', 'p4_20_2_cantidad');
// 
//}
//// Asegúrate de que la función se ejecute cuando el DOM esté listo
//document.addEventListener('DOMContentLoaded', initializeFormEvents2x);
//// Función para inicializar los eventos de los checkboxes
//
//function initializeFormEvents3x() {
//    // Para el primer checkbox y su input correspondiente
//    const checkbox3 = document.getElementById('p4_20_3');
//    const input3 = document.getElementById('p4_20_3_cantidad');
//
//  
//     checkbox3.addEventListener('change', function() {
//        toggleInputBasedOnCheckbox('p4_20_3', 'p4_20_3_cantidad');
//    });
//    
//
//      toggleInputBasedOnCheckbox('p4_20_3', 'p4_20_3_cantidad');
//  
//}
//document.addEventListener('DOMContentLoaded', initializeFormEvents3x);
//
//
//
//function initializeFormEvents4x() {
//    // Para el primer checkbox y su input correspondiente
//    const checkbox4 = document.getElementById('p4_20_4');
//    const input4 = document.getElementById('p4_20_4_cantidad');
//
//  
//     checkbox4.addEventListener('change', function() {
//        toggleInputBasedOnCheckbox('p4_20_4', 'p4_20_4_cantidad');
//    });
//    
//
//      toggleInputBasedOnCheckbox('p4_20_4', 'p4_20_4_cantidad');
//  
//}
//document.addEventListener('DOMContentLoaded', initializeFormEvents4x);
//
//
//// Función para el checkbox e input 5
//function initializeFormEvents5x() {
//    const checkbox5 = document.getElementById('p4_20_5');
//    const input5 = document.getElementById('p4_20_5_cantidad');
//
//    checkbox5.addEventListener('change', function() {
//        toggleInputBasedOnCheckbox('p4_20_5', 'p4_20_5_cantidad');
//    });
//
//    toggleInputBasedOnCheckbox('p4_20_5', 'p4_20_5_cantidad');
//}
//
//document.addEventListener('DOMContentLoaded', initializeFormEvents5x);
//
//// Función para el checkbox e input 6
//function initializeFormEvents6x() {
//    const checkbox6 = document.getElementById('p4_20_6');
//    const input6 = document.getElementById('p4_20_6_cantidad');
//
//    checkbox6.addEventListener('change', function() {
//        toggleInputBasedOnCheckbox('p4_20_6', 'p4_20_6_cantidad');
//    });
//
//    toggleInputBasedOnCheckbox('p4_20_6', 'p4_20_6_cantidad');
//}
//document.addEventListener('DOMContentLoaded', initializeFormEvents6x);
//
//// Función para el checkbox e input 7
//function initializeFormEvents7x() {
//    const checkbox7 = document.getElementById('p4_20_7');
//    const input7 = document.getElementById('p4_20_7_cantidad');
//
//    checkbox7.addEventListener('change', function() {
//        toggleInputBasedOnCheckbox('p4_20_7', 'p4_20_7_cantidad');
//    });
//
//    toggleInputBasedOnCheckbox('p4_20_7', 'p4_20_7_cantidad');
//}
//document.addEventListener('DOMContentLoaded', initializeFormEvents7x);
//
//// Función para el checkbox e input 8
//function initializeFormEvents8x() {
//    const checkbox8 = document.getElementById('p4_20_8');
//    const input8 = document.getElementById('p4_20_8_cantidad');
//
//    checkbox8.addEventListener('change', function() {
//        toggleInputBasedOnCheckbox('p4_20_8', 'p4_20_8_cantidad');
//    });
//
//    toggleInputBasedOnCheckbox('p4_20_8', 'p4_20_8_cantidad');
//}
//document.addEventListener('DOMContentLoaded', initializeFormEvents8x);
//
//function initializeFormEvents9x() {
//    const checkbox9 = document.getElementById('p4_20_9');
//    const input9 = document.getElementById('p4_20_9_cantidad');
//
//    checkbox9.addEventListener('change', function() {
//        toggleInputBasedOnCheckbox('p4_20_9', 'p4_20_9_cantidad');
//    });
//
//    toggleInputBasedOnCheckbox('p4_20_9', 'p4_20_9_cantidad');
//}
//document.addEventListener('DOMContentLoaded', initializeFormEvents9x);
//
//document.addEventListener('DOMContentLoaded', function() {
//    initializeFormEvents4x();
//    initializeFormEvents5x();
//    initializeFormEvents6x();
//    initializeFormEvents7x();
//    initializeFormEvents8x();
//    initializeFormEvents9x();
//});
//

///////////////////////////////////////////////////////////////////////////////////////////
//
//// Función para el checkbox e input 1
//function initializeFormEvents1() {
//    const checkbox1 = document.getElementById('p4_21_1');
//    const input1 = document.getElementById('p4_21_1_cantidad');
//
//    checkbox1.addEventListener('change', function() {
//        toggleInputBasedOnCheckbox('p4_21_1', 'p4_21_1_cantidad');
//    });
//
//    toggleInputBasedOnCheckbox('p4_21_1', 'p4_21_1_cantidad');
//}
//document.addEventListener('DOMContentLoaded', initializeFormEvents1);
//
//// Función para el checkbox e input 2
//function initializeFormEvents2() {
//    const checkbox2 = document.getElementById('p4_21_2');
//    const input2 = document.getElementById('p4_21_2_cantidad');
//
//    checkbox2.addEventListener('change', function() {
//        toggleInputBasedOnCheckbox('p4_21_2', 'p4_21_2_cantidad');
//    });
//
//    toggleInputBasedOnCheckbox('p4_21_2', 'p4_21_2_cantidad');
//}
//document.addEventListener('DOMContentLoaded', initializeFormEvents2);
//
//// Función para el checkbox e input 3
//function initializeFormEvents3() {
//    const checkbox3 = document.getElementById('p4_21_3');
//    const input3 = document.getElementById('p4_21_3_cantidad');
//
//    checkbox3.addEventListener('change', function() {
//        toggleInputBasedOnCheckbox('p4_21_3', 'p4_21_3_cantidad');
//    });
//
//    toggleInputBasedOnCheckbox('p4_21_3', 'p4_21_3_cantidad');
//}
//document.addEventListener('DOMContentLoaded', initializeFormEvents3);
//
//// Función para el checkbox e input 4
//function initializeFormEvents4() {
//    const checkbox4 = document.getElementById('p4_21_4');
//    const input4 = document.getElementById('p4_21_4_cantidad');
//
//    checkbox4.addEventListener('change', function() {
//        toggleInputBasedOnCheckbox('p4_21_4', 'p4_21_4_cantidad');
//    });
//
//    toggleInputBasedOnCheckbox('p4_21_4', 'p4_21_4_cantidad');
//}
//document.addEventListener('DOMContentLoaded', initializeFormEvents4);
//
//// Función para el checkbox e input 5
//function initializeFormEvents5() {
//    const checkbox5 = document.getElementById('p4_21_5');
//    const input5 = document.getElementById('p4_21_5_cantidad');
//
//    checkbox5.addEventListener('change', function() {
//        toggleInputBasedOnCheckbox('p4_21_5', 'p4_21_5_cantidad');
//    });
//
//    toggleInputBasedOnCheckbox('p4_21_5', 'p4_21_5_cantidad');
//}
//
//// Función para el checkbox e input 6
//function initializeFormEvents6() {
//    const checkbox6 = document.getElementById('p4_21_6');
//    const input6 = document.getElementById('p4_21_6_cantidad');
//
//    checkbox6.addEventListener('change', function() {
//        toggleInputBasedOnCheckbox('p4_21_6', 'p4_21_6_cantidad');
//    });
//
//    toggleInputBasedOnCheckbox('p4_21_6', 'p4_21_6_cantidad');
//}
//
//// Función para el checkbox e input 7
//function initializeFormEvents7() {
//    const checkbox7 = document.getElementById('p4_21_7');
//    const input7 = document.getElementById('p4_21_7_cantidad');
//
//    checkbox7.addEventListener('change', function() {
//        toggleInputBasedOnCheckbox('p4_21_7', 'p4_21_7_cantidad');
//    });
//
//    toggleInputBasedOnCheckbox('p4_21_7', 'p4_21_7_cantidad');
//}
//
//// Función para el checkbox e input 8
//function initializeFormEvents8() {
//    const checkbox8 = document.getElementById('p4_21_8');
//    const input8 = document.getElementById('p4_21_8_cantidad');
//
//    checkbox8.addEventListener('change', function() {
//        toggleInputBasedOnCheckbox('p4_21_8', 'p4_21_8_cantidad');
//    });
//
//    toggleInputBasedOnCheckbox('p4_21_8', 'p4_21_8_cantidad');
//}
//
//// Función para el checkbox e input 9
//function initializeFormEvents9() {
//    const checkbox9 = document.getElementById('p4_21_9');
//    const input9 = document.getElementById('p4_21_9_cantidad');
//
//    checkbox9.addEventListener('change', function() {
//        toggleInputBasedOnCheckbox('p4_21_9', 'p4_21_9_cantidad');
//    });
//
//    toggleInputBasedOnCheckbox('p4_21_9', 'p4_21_9_cantidad');
//}
//
//// Asegúrate de que estas funciones se llamen cuando el DOM esté cargado
//document.addEventListener('DOMContentLoaded', function() {
//    initializeFormEvents4();
//    initializeFormEvents5();
//    initializeFormEvents6();
//    initializeFormEvents7();
//    initializeFormEvents8();
//    initializeFormEvents9();
//});

//
//// Función para habilitar o deshabilitar TEXAREA ////////////////////////////////////
//function toggleInputBasedOnCheckbox(rcheckboxId, textareaId) {
//    const radiocheckbox = document.getElementById(rcheckboxId);
//    const textarea = document.getElementById(textareaId);
//
//    // Verificar si el checkbox está marcado
//    if (radiocheckbox.checked) {
//        textarea.disabled = false; // Habilitar el textarea
//    } else {
//        textarea.disabled = true;  // Deshabilitar el textarea
//        textarea.value = '';       // Opcional: Limpiar el valor cuando se deshabilita
//    }
//}
//
//function initializeFormEventsp1_2() {
//    const checkbox1 = document.getElementById('p1_2_8');
//    const textarea1 = document.getElementById('p1_2_8_detalle');
//
//    checkbox1.addEventListener('change', function() {
//        toggleInputBasedOnCheckbox('p1_2_8', 'p1_2_8_detalle');
//    });
//
//    toggleInputBasedOnCheckbox('p1_2_8', 'p1_2_8_detalle');
//}
//
//document.addEventListener('DOMContentLoaded', initializeFormEventsp1_2);
//
//function initializeFormEventsp1_3() {
//    const radio1 = document.getElementById('p1_3_8');
//    const textarea1 = document.getElementById('p1_3_detalle');
//
//    radio1.addEventListener('change', function() {
//        toggleInputBasedOnCheckbox('p1_3_8', 'p1_3_detalle');
//    });
//
//    toggleInputBasedOnCheckbox('p1_3_8', 'p1_3_detalle');
//}
//
//document.addEventListener('DOMContentLoaded', initializeFormEventsp1_3);
//
//
//function initializeFormEventsp1_4() {
//    const checkbox = document.getElementById('p1_4_5');
//    const textarea1 = document.getElementById('p1_4_5_detalle');
//
//    checkbox.addEventListener('change', function() {
//        toggleInputBasedOnCheckbox('p1_4_5', 'p1_4_5_detalle');
//    });
//
//    toggleInputBasedOnCheckbox('p1_4_5', 'p1_4_5_detalle');
//}
//document.addEventListener('DOMContentLoaded', initializeFormEventsp1_4);

//
//function initializeFormEventsp2_2() {
//    const checkbox = document.getElementById('p2_2_7');
//    const textarea1 = document.getElementById('p2_2_7_detalle');
//
//    checkbox.addEventListener('change', function() {
//        toggleInputBasedOnCheckbox('p2_2_7', 'p2_2_7_detalle');
//    });
//
//    toggleInputBasedOnCheckbox('p2_2_7', 'p2_2_7_detalle');
//}
//document.addEventListener('DOMContentLoaded', initializeFormEventsp2_2);

//function valida_5_3() {
//    const checkboxsi = document.getElementById('p5_3_1');
//    const checkboxno = document.getElementById('p5_3_2');
//    const textarea = document.getElementById('p5_3_detalle');
//
//    if (checkboxsi.checked) {
//        textarea.disabled = false; 
//    } else if(checkboxno.checked){
//        textarea.disabled = true;  
//        textarea.value = '';      
//    }
//}
//document.addEventListener('DOMContentLoaded', valida_5_3);


//////////////////////////////////////////

//
//
//function valida_p7_1() {
//    const si = document.getElementById("p7_1_1").checked;
//    const ocultosi71 = document.querySelector(".ocultosi71");
//  
// const radios74 = document.querySelectorAll('input[name="p7_4"]');
// 
//    // Selecciona los checkboxes y radios dentro de ocultosi71
//    var checkboxes = ocultosi71.querySelectorAll('input[type="checkbox"]');
//    var radios = ocultosi71.querySelectorAll('input[type="radio"]');
//    
//    if (si) {
//        // Muestra el div oculto
//        ocultosi71.style.display = "block";
//         
//         checkboxes.forEach(function (checkbox) {
//            checkbox.disabled = false;
//        });
//       
//         radios74.forEach(function (radio) {
//            radio.disabled = false;
//        });
//    } else {
//        // Oculta el div y limpia los checkboxes y radios
//        ocultosi71.style.display = "none";
//        
//        radios.forEach(function (radio) {
//            radio.disabled = true;
//            radio.checked = false; 
//        });
//          radios74.forEach(function (radio) {
//            radio.disabled = false;
//        });
//        checkboxes.forEach(function (checkbox) {
//            checkbox.disabled = true;
//            checkbox.checked = false; 
//        });
//    }
//}
//
////
////
////function validap7_2_tipo_1() {
////    var checkbox = document.getElementById("p7_2_tipo_1");
////    var radio1 = document.getElementById('p7_2_velocidad1_1'); 
////    var radio2 = document.getElementById('p7_2_velocidad1_2'); 
////    var radio3 = document.getElementById('p7_2_velocidad1_3');  
////    var radio4 = document.getElementById('p7_2_velocidad1_4');
////   
////    
////   
////        if (checkbox.checked) {
////            radio1.disabled=false;
////            radio2.disabled=false;
////            radio3.disabled=false;
////            radio4.disabled=false;
////        }else{
////            radio1.disabled=true;
////            radio2.disabled=true;
////            radio3.disabled=true;
////            radio4.disabled=true;
////            
////            radio1.checked=false;
////            radio2.checked=false;
////            radio3.checked=false;
////            radio4.checked=false;
////        }
////}
//
//
////
////function validap7_2_tipo_2() {
////    var checkbox = document.getElementById("p7_2_tipo_2");
////    var radio1 = document.getElementById('p7_2_velocidad2_1'); 
////    var radio2 = document.getElementById('p7_2_velocidad2_2'); 
////    var radio3 = document.getElementById('p7_2_velocidad2_3');  
////    var radio4 = document.getElementById('p7_2_velocidad2_4');
////   
////    
////   
////        if (checkbox.checked) {
////            radio1.disabled=false;
////            radio2.disabled=false;
////            radio3.disabled=false;
////            radio4.disabled=false;
////        }else{
////            radio1.disabled=true;
////            radio2.disabled=true;
////            radio3.disabled=true;
////            radio4.disabled=true;
////            
////            radio1.checked=false;
////            radio2.checked=false;
////            radio3.checked=false;
////            radio4.checked=false;
////        }
////}
//
//
//function validap7_2_tipo_3() {
//    var checkbox = document.getElementById("p7_2_tipo_3");
//    var radio1 = document.getElementById('p7_2_velocidad3_1'); 
//    var radio2 = document.getElementById('p7_2_velocidad3_2'); 
//    var radio3 = document.getElementById('p7_2_velocidad3_3');  
//    var radio4 = document.getElementById('p7_2_velocidad3_4');
//   
//    
//   
//        if (checkbox.checked) {
//            radio1.disabled=false;
//            radio2.disabled=false;
//            radio3.disabled=false;
//            radio4.disabled=false;
//        }else{
//            radio1.disabled=true;
//            radio2.disabled=true;
//            radio3.disabled=true;
//            radio4.disabled=true;
//            
//            radio1.checked=false;
//            radio2.checked=false;
//            radio3.checked=false;
//            radio4.checked=false;
//        }
//}
//
//function validap7_2_tipo_4() {
//    var checkbox = document.getElementById("p7_2_tipo_4");
//    var radio1 = document.getElementById('p7_2_velocidad4_1'); 
//    var radio2 = document.getElementById('p7_2_velocidad4_2'); 
//    var radio3 = document.getElementById('p7_2_velocidad4_3');  
//    var radio4 = document.getElementById('p7_2_velocidad4_4');
//   
//    
//   
//        if (checkbox.checked) {
//            radio1.disabled=false;
//            radio2.disabled=false;
//            radio3.disabled=false;
//            radio4.disabled=false;
//        }else{
//            radio1.disabled=true;
//            radio2.disabled=true;
//            radio3.disabled=true;
//            radio4.disabled=true;
//            
//            radio1.checked=false;
//            radio2.checked=false;
//            radio3.checked=false;
//            radio4.checked=false;
//        }
//}
//
//
//
//
//
////function valida3_p1_1() {
////    
////      var checkbox = document.getElementById("p1_1");
////    var input = document.getElementById('d_p1_1_fecha_ocurrencia');
////    
////    
////    if (checkbox.checked) {
////            input.disabled=false;
////
////        }else{
////            input.disabled=true;
////            input.value="";
////        }  
////}
//
function valida3_p1(index) {
    // Obtén el checkbox y el input correspondiente
    var checkbox = document.getElementById("p3_1_" + index);
    var inputField = document.getElementById("d_p3_1_" + index + "_fch");

    // Habilita o deshabilita el input basado en el estado del checkbox
    if (checkbox.checked) {
        inputField.removeAttribute("disabled");
    } else {
        inputField.setAttribute("disabled", "true");
        inputField.value = ""; // Limpia el campo input cuando se deshabilita
    }
}

////
////
function valida3_p1_13_otros() {
    var p3_1_13 = document.getElementById("p3_1_13");
    var p3_1_13_detalle = document.getElementById("p3_1_13_detalle");
    
    if (p3_1_13.checked) {
        p3_1_13_detalle.disabled = false;
    } else {
        p3_1_13_detalle.disabled = true;
        p3_1_13_detalle.value = "";
    }
}
//
//
//////////////////////////////////////////////////////////////////////////////////////
//function valida4_p1_10() {
//    var checkbox = document.getElementById("p1_10_s4");
//    var textarea = document.getElementById("p1_11_s4");
//    
//    if (checkbox.checked) {
//        textarea.disabled = false;
//    } else {
//        textarea.disabled = true;
//        textarea.value = "";
//    }
//}
//
///*******************************************************************************/
//

//
////
////
////function initializeFormEventspV_2_3() {
////   
////        const radioSi = document.getElementById('p2_2_b_1');
////        const radioNo = document.getElementById('p2_2_b_2');
////        const textarea = document.getElementById('p2_2_c');
////
////        // Función que habilita o deshabilita el textarea
////        function toggleTextarea() {
////            if (radioNo.checked) {
////                textarea.disabled = false; // Habilitar textarea si "NO" está seleccionado
////            } else {
////                textarea.disabled = true; // Deshabilitar textarea si "SI" está seleccionado
////                textarea.value="";
////            }
////        }
////
////        radioSi.addEventListener('change', toggleTextarea);
////        radioNo.addEventListener('change', toggleTextarea);
////}
//
//       
//
//     
//        
// 
///*******************************************************************************/
function abrir_modal_sec5_2(id, id_ficha) {
console.log("1");
    $("#loader_mdl_sec5_2").show();
    $("#loader_form_mdl_sec5_2").hide();

    if (id_ficha === null) {
        id_ficha = $("#id_ficha").val();
    }

    $.ajax({
        url: urlx + "/ajaxBuscar2Sec5_2",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {
console.log("2");
            $("#div_sec5_2_mdl").html(data);

            $("#loader_mdl_sec5_2").hide();
            $("#loader_form_mdl_sec5_2").show();
        },
        error: function (jqXHR, textStatus, errorThrown) {

            $("#loader_mdl_sec5_2").show();
            $("#loader_form_mdl_sec5_2").hide();

            if (jqXHR.status == 401) {
                alert("Su sesi\u00F3n ha finalizado");
            } else {
                alert("Ocurrio un error al cargar");
            }
        }
    });
}

function guardar_modal_sec5_2() {
    console.log("entro a guardar");
    $("#btn_save_mdl_sec5_2").prop("disabled", true);
    $("#btn_save_mdl_sec5_2").text('');
    $("#btn_save_mdl_sec5_2").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');


    var educa_ficha2_s5_2pk = {
        
        id: parseInt($("#mdl_sec5_2_id").val()),
        id_ficha: parseInt($("#mdl_sec5_2_id_ficha").val())
      
    };
    console.log("1");
    var educa_ficha2_s5_2 = {
        educa_ficha2_s5_2pk: educa_ficha2_s5_2pk,
        fch_registro: $("#mdl_sec5_2_fch_registro").val(),
        usu_registro: $("#mdl_sec5_2_usu_registro").val(),
        p2_2_terreno: $("#p2_2_terreno").val(),
        p2_2_edifica: $("#p2_2_edifica").val(),
        p2_2_pisos: $("#p2_2_pisos").val(),
        p2_2_area: $("#p2_2_area").val(),
        p2_2_uso: $("#p2_2_uso").val(),
        p2_2_tiempo: $("#p2_2_tiempo").val(),
        p2_2_certificado_inspeccion: $("#p2_2_certificado_inspeccion").val(),
        p2_2_calificacion: $("#p2_2_calificacion").val(),
        p2_2_riesgo: $("#p2_2_riesgo").val(),
         p2_2_certificado: $("#p2_2_certificado").val(),
          p2_2_observa: $("#p2_2_observa").val()
        
    };
    console.log("2");
    $.ajax({
        url: urlx + "/ajaxGuardar2MdlSec5_2",
        contentType: "application/json;text/html;charset=UTF-8",
        type: "POST",
        data: JSON.stringify(educa_ficha2_s5_2),
        success: function (data, textStatus, jqXHR) {
            console.log("3");
            $("#div_sec5_2").html(data);

            $("#btn_save_mdl_sec5_2").prop("disabled", false);
            $("#btn_save_mdl_sec5_2").text('');
            $("#btn_save_mdl_sec5_2").wrapInner('<span class="fa fa-cloud-upload" aria-hidden="true"></span> Guardar');
            
            console.log("antes de cerrar modal2");
            $("#modal_sec5_2").modal("hide");

        },
        error: function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status == 401) {
                alert("Su sesi\u00F3n ha finalizado");
            } else {
                alert("Ocurrio un error al cargar");
            }
        }
    });
}

function eliminar_modal_sec5_2(id, id_ficha) {

    $.ajax({
        url: urlx + "/ajaxEliminar2ModalSec5_2",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec5_2").html(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status == 401) {
                alert("Su sesi\u00F3n ha finalizado");
            } else {
                alert("Ocurrio un error al cargar");
            }
        }
    });
}

function abrir_modal_sec5_3(id, id_ficha) {
console.log('one');
    $("#loader_mdl_sec5_3").show();
    $("#loader_form_mdl_sec5_3").hide();

    if (id_ficha === null) {
        id_ficha = $("#id_ficha").val();
    }

    $.ajax({
        url: urlx + "/ajaxBuscar2Sec5_3",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec5_3_mdl").html(data);

            $("#loader_mdl_sec5_3").hide();
            $("#loader_form_mdl_sec5_3").show();
        },
        error: function (jqXHR, textStatus, errorThrown) {

            $("#loader_mdl_sec5_3").show();
            $("#loader_form_mdl_sec5_3").hide();

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}

function guardar_modal_sec5_3() {
    console.log("entro a guardar");
    $("#btn_save_mdl_sec5_3").prop("disabled", true);
    $("#btn_save_mdl_sec5_3").text('');
    $("#btn_save_mdl_sec5_3").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');

    var educa_ficha2_s5_3pk = {
        id: parseInt($("#mdl_sec5_3_id").val()),
        id_ficha: parseInt($("#mdl_sec5_3_id_ficha").val())
    };

    console.log("1");
    var educa_ficha2_s5_3 = {
        educa_ficha2_s5_3pk: educa_ficha2_s5_3pk,
        fch_registro: $("#mdl_sec5_3_fch_registro").val(),
        usu_registro: $("#mdl_sec5_3_usu_registro").val(),
        p2_3_terreno: $("#p2_3_terreno").val(),
        p2_3_edificacion: $("#p2_3_edificacion").val(),
        p2_3_se_predomina: $("#p2_3_se_predomina").val()
    };

    console.log("2");
    $.ajax({
        url: urlx + "/ajaxGuardar2MdlSec5_3",
        contentType: "application/json;text/html;charset=UTF-8",
        type: "POST",
        data: JSON.stringify(educa_ficha2_s5_3),
        success: function (data, textStatus, jqXHR) {
            console.log("3");
            $("#div_sec5_3").html(data);

            $("#btn_save_mdl_sec5_3").prop("disabled", false);
            $("#btn_save_mdl_sec5_3").text('');
            $("#btn_save_mdl_sec5_3").wrapInner('<span class="fa fa-cloud-upload" aria-hidden="true"></span> Guardar');
            
            console.log("antes de cerrar modal");
            $("#modal_sec5_3").modal("hide");

        },
        error: function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}

function eliminar_modal_sec5_3(id, id_ficha) {

    $.ajax({
        url: urlx + "/ajaxEliminar2ModalSec5_3",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec5_3").html(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}
/*******************************************************************************/
function abrir_modal_sec5_4(id, id_ficha) {

    $("#loader_mdl_sec5_4").show();
    $("#loader_form_mdl_sec5_4").hide();

    if (id_ficha === null) {
        id_ficha = $("#id_ficha").val();
    }

    $.ajax({
        url: urlx + "/ajaxBuscar2Sec5_4",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec5_4_mdl").html(data);

            $("#loader_mdl_sec5_4").hide();
            $("#loader_form_mdl_sec5_4").show();
        },
        error: function (jqXHR, textStatus, errorThrown) {

            $("#loader_mdl_sec5_4").show();
            $("#loader_form_mdl_sec5_4").hide();

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}

function guardar_modal_sec5_4() {
    console.log("entro a guardar");
    $("#btn_save_mdl_sec5_4").prop("disabled", true);
    $("#btn_save_mdl_sec5_4").text('');
    $("#btn_save_mdl_sec5_4").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');

    var educa_ficha2_s5_4pk = {
        id: parseInt($("#mdl_sec5_4_id").val()),
        id_ficha: parseInt($("#mdl_sec5_4_id_ficha").val())
    };

    console.log("1");
    var educa_ficha2_s5_4 = {
        educa_ficha2_s5_4pk: educa_ficha2_s5_4pk,
        fch_registro: $("#mdl_sec5_4_fch_registro").val(),
        usu_registro: $("#mdl_sec5_4_usu_registro").val(),
        p2_4_terreno: $("#p2_4_terreno").val(),
        p2_4_edificacion: $("#p2_4_edificacion").val(),
        p2_4_material: $("#p2_4_material").val()
    };

    console.log("2");
    $.ajax({
        url: urlx + "/ajaxGuardar2MdlSec5_4",
        contentType: "application/json;text/html;charset=UTF-8",
        type: "POST",
        data: JSON.stringify(educa_ficha2_s5_4),
        success: function (data, textStatus, jqXHR) {
            console.log("3");
            $("#div_sec5_4").html(data);

            $("#btn_save_mdl_sec5_4").prop("disabled", false);
            $("#btn_save_mdl_sec5_4").text('');
            $("#btn_save_mdl_sec5_4").wrapInner('<span class="fa fa-cloud-upload" aria-hidden="true"></span> Guardar');
            
            console.log("antes de cerrar modal");
            $("#modal_sec5_4").modal("hide");

        },
        error: function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}

function eliminar_modal_sec5_4(id, id_ficha) {

    $.ajax({
        url: urlx + "/ajaxEliminar2ModalSec5_4",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec5_4").html(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}



/*******************************************************************************/
function abrir_modal_sec5_5(id, id_ficha) {

    $("#loader_mdl_sec5_5").show();
    $("#loader_form_mdl_sec5_5").hide();

    if (id_ficha === null) {
        id_ficha = $("#id_ficha").val();
    }

    $.ajax({
        url: urlx + "/ajaxBuscar2Sec5_5",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec5_5_mdl").html(data);

            $("#loader_mdl_sec5_5").hide();
            $("#loader_form_mdl_sec5_5").show();
        },
        error: function (jqXHR, textStatus, errorThrown) {

            $("#loader_mdl_sec5_5").show();
            $("#loader_form_mdl_sec5_5").hide();

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}

function guardar_modal_sec5_5() {
    console.log("entro a guardar");
    $("#btn_save_mdl_sec5_5").prop("disabled", true);
    $("#btn_save_mdl_sec5_5").text('');
    $("#btn_save_mdl_sec5_5").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');

    var educa_ficha2_s5_5pk = {
        id: parseInt($("#mdl_sec5_5_id").val()),
        id_ficha: parseInt($("#mdl_sec5_5_id_ficha").val())
    };

    console.log("1");
    var educa_ficha2_s5_5 = {
        educa_ficha2_s5_5pk: educa_ficha2_s5_5pk,
        fch_registro: $("#mdl_sec5_5_fch_registro").val(),
        usu_registro: $("#mdl_sec5_5_usu_registro").val(),
        p2_5_terreno: $("#p2_5_terreno").val(),
        p2_5_edificacion: $("#p2_5_edificacion").val(),
        p2_5_material: $("#p2_5_material").val()
    };

    console.log("2");
    $.ajax({
        url: urlx + "/ajaxGuardar2MdlSec5_5",
        contentType: "application/json;text/html;charset=UTF-8",
        type: "POST",
        data: JSON.stringify(educa_ficha2_s5_5),
        success: function (data, textStatus, jqXHR) {
            console.log("3");
            $("#div_sec5_5").html(data);

            $("#btn_save_mdl_sec5_5").prop("disabled", false);
            $("#btn_save_mdl_sec5_5").text('');
            $("#btn_save_mdl_sec5_5").wrapInner('<span class="fa fa-cloud-upload" aria-hidden="true"></span> Guardar');
            
            console.log("antes de cerrar modal");
            $("#modal_sec5_5").modal("hide");

        },
        error: function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}

function eliminar_modal_sec5_5(id, id_ficha) {

    $.ajax({
        url: urlx + "/ajaxEliminar2ModalSec5_5",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec5_5").html(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
    
}  
    
    
    /*******************************************************************************/
function abrir_modal_sec5_6(id, id_ficha) {

    $("#loader_mdl_sec5_6").show();
    $("#loader_form_mdl_sec5_6").hide();

    if (id_ficha === null) {
        id_ficha = $("#id_ficha").val();
    }

    $.ajax({
        url: urlx + "/ajaxBuscar2Sec5_6",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec5_6_mdl").html(data);

            $("#loader_mdl_sec5_6").hide();
            $("#loader_form_mdl_sec5_6").show();
        },
        error: function (jqXHR, textStatus, errorThrown) {

            $("#loader_mdl_sec5_6").show();
            $("#loader_form_mdl_sec5_6").hide();

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}

function guardar_modal_sec5_6() {
    console.log("entro a guardar");
    $("#btn_save_mdl_sec5_6").prop("disabled", true);
    $("#btn_save_mdl_sec5_6").text('');
    $("#btn_save_mdl_sec5_6").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');

    var educa_ficha2_s5_6pk = {
        id: parseInt($("#mdl_sec5_6_id").val()),
        id_ficha: parseInt($("#mdl_sec5_6_id_ficha").val())
    };

    console.log("1");
    var educa_ficha2_s5_6 = {
        educa_ficha2_s5_6pk: educa_ficha2_s5_6pk,
        fch_registro: $("#mdl_sec5_6_fch_registro").val(),
        usu_registro: $("#mdl_sec5_6_usu_registro").val(),
        p2_6_terreno: $("#p2_6_terreno").val(),
        p2_6_edificacion: $("#p2_6_edificacion").val(),
        p2_6_material: $("#p2_6_material").val()
    };

    console.log("2");
    $.ajax({
        url: urlx + "/ajaxGuardar2MdlSec5_6",
        contentType: "application/json;text/html;charset=UTF-8",
        type: "POST",
        data: JSON.stringify(educa_ficha2_s5_6),
        success: function (data, textStatus, jqXHR) {
            console.log("3");
            $("#div_sec5_6").html(data);

            $("#btn_save_mdl_sec5_6").prop("disabled", false);
            $("#btn_save_mdl_sec5_6").text('');
            $("#btn_save_mdl_sec5_6").wrapInner('<span class="fa fa-cloud-upload" aria-hidden="true"></span> Guardar');
            
            console.log("antes de cerrar modal");
            $("#modal_sec5_6").modal("hide");

        },
        error: function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}

function eliminar_modal_sec5_6(id, id_ficha) {

    $.ajax({
        url: urlx + "/ajaxEliminar2ModalSec5_6",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec5_6").html(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}


 /*******************************************************************************/
function abrir_modal_sec5_7(id, id_ficha) {

    $("#loader_mdl_sec5_7").show();
    $("#loader_form_mdl_sec5_7").hide();

    if (id_ficha === null) {
        id_ficha = $("#id_ficha").val();
    }

    $.ajax({
        url: urlx + "/ajaxBuscar2Sec5_7",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec5_7_mdl").html(data);

            $("#loader_mdl_sec5_7").hide();
            $("#loader_form_mdl_sec5_7").show();
        },
        error: function (jqXHR, textStatus, errorThrown) {

            $("#loader_mdl_sec5_7").show();
            $("#loader_form_mdl_sec5_7").hide();

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}

function guardar_modal_sec5_7() {
    console.log("entro a guardar");
    $("#btn_save_mdl_sec5_7").prop("disabled", true);
    $("#btn_save_mdl_sec5_7").text('');
    $("#btn_save_mdl_sec5_7").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');

    var educa_ficha_s5_7pk = {
        id: parseInt($("#mdl_sec5_7_id").val()),
        id_ficha: parseInt($("#mdl_sec5_7_id_ficha").val())
    };

    console.log("1");
    var educa_ficha2_s5_7 = {
        educa_ficha2_s5_7pk: educa_ficha_s5_7pk,
        fch_registro: $("#mdl_sec5_7_fch_registro").val(),
        usu_registro: $("#mdl_sec5_7_usu_registro").val(),
        p2_7_terreno: $("#p2_7_terreno").val(),
        p2_7_edificacion: $("#p2_7_edificacion").val(),
        p2_7_techos: $("#p2_7_techos").val(),
         p2_7_paredes: $("#p2_7_paredes").val(),
          p2_7_pisos: $("#p2_7_pisos").val()
    };

    console.log("2");
    $.ajax({
        url: urlx + "/ajaxGuardar2MdlSec5_7",
        contentType: "application/json;text/html;charset=UTF-8",
        type: "POST",
        data: JSON.stringify(educa_ficha2_s5_7),
        success: function (data, textStatus, jqXHR) {
            console.log("3");
            $("#div_sec5_7").html(data);

            $("#btn_save_mdl_sec5_7").prop("disabled", false);
            $("#btn_save_mdl_sec5_7").text('');
            $("#btn_save_mdl_sec5_7").wrapInner('<span class="fa fa-cloud-upload" aria-hidden="true"></span> Guardar');
            
            console.log("antes de cerrar modal");
            $("#modal_sec5_7").modal("hide");

        },
        error: function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}

function eliminar_modal_sec5_7(id, id_ficha) {

    $.ajax({
        url: urlx + "/ajaxEliminar2ModalSec5_7",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec5_7").html(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}




 /*******************************************************************************/
function abrir_modal_sec5_8(id, id_ficha) {

    $("#loader_mdl_sec5_8").show();
    $("#loader_form_mdl_sec5_8").hide();

    if (id_ficha === null) {
        id_ficha = $("#id_ficha").val();
    }

    $.ajax({
        url: urlx + "/ajaxBuscar2Sec5_8",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec5_8_mdl").html(data);

            $("#loader_mdl_sec5_8").hide();
            $("#loader_form_mdl_sec5_8").show();
        },
        error: function (jqXHR, textStatus, errorThrown) {

            $("#loader_mdl_sec5_8").show();
            $("#loader_form_mdl_sec5_8").hide();

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}

function guardar_modal_sec5_8() {
    console.log("entro a guardar");
    $("#btn_save_mdl_sec5_8").prop("disabled", true);
    $("#btn_save_mdl_sec5_8").text('');
    $("#btn_save_mdl_sec5_8").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');

    var educa_ficha2_s5_8pk = {
        id: parseInt($("#mdl_sec5_8_id").val()),
        id_ficha: parseInt($("#mdl_sec5_8_id_ficha").val())
    };

    console.log("1");
    var educa_ficha2_s5_8 = {
        educa_ficha2_s5_8pk: educa_ficha2_s5_8pk,
        fch_registro: $("#mdl_sec5_8_fch_registro").val(),
        usu_registro: $("#mdl_sec5_8_usu_registro").val(),
        p2_8_terreno: $("#p2_8_terreno").val(),
        p2_8_edificacion: $("#p2_8_edificacion").val(),
        p2_8_senia: $("#p2_8_senia").val(),
        p2_8_alarmas: $("#p2_8_alarmas").val(),
        p2_8_boti: $("#p2_8_boti").val(),
        p2_8_luces: $("#p2_8_luces").val(),
        p2_8_extintores: $("#p2_8_extintores").val(),
        p2_8_extintores_operativos: $("#p2_8_extintores_operativos").val(),
        p2_8_cantidad_bien: $("#p2_8_cantidad_bien").val(),
        p2_8_cantidad_repara: $("#p2_8_cantidad_repara").val(),
        p2_8_menosuno: $("#p2_8_menosuno").val(),
        p2_8_deunoados: $("#p2_8_deunoados").val(),
        p2_8_dedosamas: $("#p2_8_dedosamas").val(),
         p2_8_ninguna1: $("#p2_8_ninguna1").prop("checked") ? "X" : "",
         p2_8_ninguna2: $("#p2_8_ninguna2").prop("checked") ? "X" : ""
    };

    console.log("2");
    $.ajax({
        url: urlx + "/ajaxGuardar2MdlSec5_8",
        contentType: "application/json;text/html;charset=UTF-8",
        type: "POST",
        data: JSON.stringify(educa_ficha2_s5_8),
        success: function (data, textStatus, jqXHR) {
            console.log("3");
            $("#div_sec5_8").html(data);

            $("#btn_save_mdl_sec5_8").prop("disabled", false);
            $("#btn_save_mdl_sec5_8").text('');
            $("#btn_save_mdl_sec5_8").wrapInner('<span class="fa fa-cloud-upload" aria-hidden="true"></span> Guardar');
            
            console.log("antes de cerrar modal");
            $("#modal_sec5_8").modal("hide");

        },
        error: function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}
function eliminar_modal_sec5_8(id, id_ficha) {
    $.ajax({
        url: urlx + "/ajaxEliminar2ModalSec5_8",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec5_8").html(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}


///////////////////////////////////////
function toggleModalContent() {
    const checkbox = document.getElementById('p2_8_ninguna1');
    
    // IDs de los selects
    const selectIds = ['p2_8_senia', 'p2_8_alarmas', 'p2_8_boti', 'p2_8_luces'];

    // Recorre cada select
    selectIds.forEach(id => {
        const selectElement = document.getElementById(id);
        
        if (checkbox.checked) {
            // Deshabilita y limpia el select si el checkbox está marcado
            selectElement.disabled = true;
            selectElement.value = ''; // Limpia el valor
        } else {
            // Habilita el select si el checkbox está desmarcado
            selectElement.disabled = false;
        }
    });
}
//
//
//
///////////////////////////////////////
function toggleModalContent2() {
    const checkbox = document.getElementById('p2_8_ninguna2');
    
    // IDs de los selects
    const selectIds = ['p2_8_extintores', 'p2_8_extintores_operativos', 'p2_8_cantidad_bien', 'p2_8_cantidad_repara', 'p2_8_menosuno', 'p2_8_deunoados', 'p2_8_dedosamas'];

    // Recorre cada select
    selectIds.forEach(id => {
        const selectElement = document.getElementById(id);
        
        if (checkbox.checked) {
            // Deshabilita y limpia el select si el checkbox está marcado
            selectElement.disabled = true;
            selectElement.value = ''; // Limpia el valor
        } else {
            // Habilita el select si el checkbox está desmarcado
            selectElement.disabled = false;
        }
    });
}
//
///////////////////////////////////////
function toggleModalContent3() {
    const checkbox = document.getElementById('p2_9_ninguna');
    
    // IDs de los selects
    const selectIds = ['p2_9_cantidad_total', 'p2_9_total_operativos', 'p2_9_cantidad_bien', 'p2_9_cantidad_repara', 'p2_9_menosuno', 'p2_9_deunoados', 'p2_9_dedosamas'];
    // Recorro cada select
    selectIds.forEach(id => {
        const selectElement = document.getElementById(id);
        
        if (checkbox.checked) {
            selectElement.disabled = true;
            selectElement.value = ''; 
        } else {
            selectElement.disabled = false;
        }
    });
}
///////////////////////////////////////
function toggleModalContent4() {
    const checkbox = document.getElementById('p2_10_ninguna');
    
    // IDs de los selects
    const selectIds = ['p2_10_cantidad_total', 'p2_10_total_operativos', 'p2_10_cantidad_bien', 'p2_10_cantidad_repara', 'p2_10_menosuno', 'p2_10_deunoados', 'p2_10_dedosamas'];
    // Recorro cada select
    selectIds.forEach(id => {
        const selectElement = document.getElementById(id);
        
        if (checkbox.checked) {
            selectElement.disabled = true;
            selectElement.value = ''; 
        } else {
            selectElement.disabled = false;
        }
    });
}
//
/*******************************************************************************/
function abrir_modal_sec5_9(id, id_ficha) {

    $("#loader_mdl_sec5_9").show();
    $("#loader_form_mdl_sec5_9").hide();

    if (id_ficha === null) {
        id_ficha = $("#id_ficha").val();
    }

    $.ajax({
        url: urlx + "/ajaxBuscar2Sec5_9",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec5_9_mdl").html(data);

            $("#loader_mdl_sec5_9").hide();
            $("#loader_form_mdl_sec5_9").show();
        },
        error: function (jqXHR, textStatus, errorThrown) {

            $("#loader_mdl_sec5_9").show();
            $("#loader_form_mdl_sec5_9").hide();

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}

function guardar_modal_sec5_9() {
    console.log("entro a guardar");
    $("#btn_save_mdl_sec5_9").prop("disabled", true);
    $("#btn_save_mdl_sec5_9").text('');
    $("#btn_save_mdl_sec5_9").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');

    var educa_ficha2_s5_9pk = {
        id: parseInt($("#mdl_sec5_9_id").val()),
        id_ficha: parseInt($("#mdl_sec5_9_id_ficha").val())
    };

    console.log("1");
    var educa_ficha2_s5_9 = {
        educa_ficha2_s5_9pk: educa_ficha2_s5_9pk,
        fch_registro: $("#mdl_sec5_9_fch_registro").val(),
        usu_registro: $("#mdl_sec5_9_usu_registro").val(),
        p2_9_terreno: $("#p2_9_terreno").val(),
        p2_9_edificacion: $("#p2_9_edificacion").val(),
        p2_9_cantidad_total: $("#p2_9_cantidad_total").val(),
        p2_9_total_operativos: $("#p2_9_total_operativos").val(),
        p2_9_cantidad_bien: $("#p2_9_cantidad_bien").val(),
        p2_9_cantidad_repara: $("#p2_9_cantidad_repara").val(),
        p2_9_menosuno: $("#p2_9_menosuno").val(),
        p2_9_deunoados: $("#p2_9_deunoados").val(),
        p2_9_dedosamas: $("#p2_9_dedosamas").val(),
        p2_9_ninguna: $("#p2_9_ninguna").prop("checked") ? "X" : ""
    };

    console.log("2");
    $.ajax({
        url: urlx + "/ajaxGuardar2MdlSec5_9",
        contentType: "application/json;text/html;charset=UTF-8",
        type: "POST",
        data: JSON.stringify(educa_ficha2_s5_9),
        success: function (data, textStatus, jqXHR) {
            console.log("3");
            $("#div_sec5_9").html(data);

            $("#btn_save_mdl_sec5_9").prop("disabled", false);
            $("#btn_save_mdl_sec5_9").text('');
            $("#btn_save_mdl_sec5_9").wrapInner('<span class="fa fa-cloud-upload" aria-hidden="true"></span> Guardar');
            
            console.log("antes de cerrar modal");
            $("#modal_sec5_9").modal("hide");

        },
        error: function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}

function eliminar_modal_sec5_9(id, id_ficha) {

    $.ajax({
        url: urlx + "/ajaxEliminar2ModalSec5_9",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec5_9").html(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}


/*******************************************************************************/
function abrir_modal_sec5_10(id, id_ficha) {

    $("#loader_mdl_sec5_10").show();
    $("#loader_form_mdl_sec5_10").hide();

    if (id_ficha === null) {
        id_ficha = $("#id_ficha").val();
    }

    $.ajax({
        url: urlx + "/ajaxBuscar2Sec5_10",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec5_10_mdl").html(data);

            $("#loader_mdl_sec5_10").hide();
            $("#loader_form_mdl_sec5_10").show();
        },
        error: function (jqXHR, textStatus, errorThrown) {

            $("#loader_mdl_sec5_10").show();
            $("#loader_form_mdl_sec5_10").hide();

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}

function guardar_modal_sec5_10() {
    console.log("entro a guardar");
    $("#btn_save_mdl_sec5_10").prop("disabled", true);
    $("#btn_save_mdl_sec5_10").text('');
    $("#btn_save_mdl_sec5_10").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');

    var educa_ficha2_s5_10pk = {
        id: parseInt($("#mdl_sec5_10_id").val()),
        id_ficha: parseInt($("#mdl_sec5_10_id_ficha").val())
    };

    console.log("1");
    var educa_ficha2_s5_10 = {
        educa_ficha2_s5_10pk: educa_ficha2_s5_10pk,
        fch_registro: $("#mdl_sec5_10_fch_registro").val(),
        usu_registro: $("#mdl_sec5_10_usu_registro").val(),
        p2_10_terreno: $("#p2_10_terreno").val(),
        p2_10_edificacion: $("#p2_10_edificacion").val(),
        p2_10_cantidad_total: $("#p2_10_cantidad_total").val(),
        p2_10_total_operativos: $("#p2_10_total_operativos").val(),
        p2_10_cantidad_bien: $("#p2_10_cantidad_bien").val(),
        p2_10_cantidad_repara: $("#p2_10_cantidad_repara").val(),
        p2_10_menosuno: $("#p2_10_menosuno").val(),
        p2_10_deunoados: $("#p2_10_deunoados").val(),
        p2_10_dedosamas: $("#p2_10_dedosamas").val(),
        p2_10_ninguna: $("#p2_10_ninguna").prop("checked") ? "X" : ""
    };

    console.log("2");
    $.ajax({
        url: urlx + "/ajaxGuardar2MdlSec5_10",
        contentType: "application/json;text/html;charset=UTF-8",
        type: "POST",
        data: JSON.stringify(educa_ficha2_s5_10),
        success: function (data, textStatus, jqXHR) {
            console.log("3");
            $("#div_sec5_10").html(data);

            $("#btn_save_mdl_sec5_10").prop("disabled", false);
            $("#btn_save_mdl_sec5_10").text('');
            $("#btn_save_mdl_sec5_10").wrapInner('<span class="fa fa-cloud-upload" aria-hidden="true"></span> Guardar');
            
            console.log("antes de cerrar modal");
            $("#modal_sec5_10").modal("hide");

        },
        error: function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}

function eliminar_modal_sec5_10(id, id_ficha) {

    $.ajax({
        url: urlx + "/ajaxEliminar2ModalSec5_10",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec5_10").html(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}

///////////////////////////////////////////////////////////////////////////////////
/*******************************************************************************/
/*******************************************************************************/
function abrir_modal_sec5_31(id, id_ficha) {

    $("#loader_mdl_sec5_31").show();
    $("#loader_form_mdl_sec5_31").hide();

    if (id_ficha === null) {
        id_ficha = $("#id_ficha").val();
    }

    $.ajax({
        url: urlx + "/ajaxBuscar2Sec5_31",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec5_31_mdl").html(data);

            $("#loader_mdl_sec5_31").hide();
            $("#loader_form_mdl_sec5_31").show();
        },
        error: function (jqXHR, textStatus, errorThrown) {

            $("#loader_mdl_sec5_31").show();
            $("#loader_form_mdl_sec5_31").hide();

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}

function guardar_modal_sec5_31() {
    console.log("entro a guardar");
    $("#btn_save_mdl_sec5_31").prop("disabled", true);
    $("#btn_save_mdl_sec5_31").text('');
    $("#btn_save_mdl_sec5_31").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');

    var educa_ficha2_s5_31pk = {
        id: parseInt($("#mdl_sec5_31_id").val()),
        id_ficha: parseInt($("#mdl_sec5_31_id_ficha").val())
    };

    console.log("1");
    var educa_ficha2_s5_31 = {
        educa_ficha2_s5_31pk: educa_ficha2_s5_31pk,
        fch_registro: $("#mdl_sec5_31_fch_registro").val(),
        usu_registro: $("#mdl_sec5_31_usu_registro").val(),
        p3_2_terreno: $("#p3_2_terreno").val(),
        p3_2_edificacion: $("#p3_2_edificacion").val(),
        p3_2_aula: $("#p3_2_aula").val(),
        p3_2_pisos: $("#p3_2_pisos").val(),
        p3_2_ambiente: $("#p3_2_ambiente").val(),
        p3_aforo: $("#p3_aforo").val(),
        p3_2_material_puertas: $("#p3_2_material_puertas").val(),
        p3_2_estado_conserva_puertas: $("#p3_2_estado_conserva_puertas").val(),
        p3_2_material_ventanas: $("#p3_2_material_ventanas").val(),
        p3_2_estado_conserva_ventanas: $("#p3_2_estado_conserva_ventanas").val()
    };

    console.log("2");
    $.ajax({
        url: urlx + "/ajaxGuardar2MdlSec5_31",
        contentType: "application/json;text/html;charset=UTF-8",
        type: "POST",
        data: JSON.stringify(educa_ficha2_s5_31),
        success: function (data, textStatus, jqXHR) {
            console.log("3");
            $("#div_sec5_31").html(data);

            $("#btn_save_mdl_sec5_31").prop("disabled", false);
            $("#btn_save_mdl_sec5_31").text('');
            $("#btn_save_mdl_sec5_31").wrapInner('<span class="fa fa-cloud-upload" aria-hidden="true"></span> Guardar');
            
            console.log("antes de cerrar modal");
            $("#modal_sec5_31").modal("hide");

        },
        error: function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}

function eliminar_modal_sec5_31(id, id_ficha) {

    $.ajax({
        url: urlx + "/ajaxEliminar2ModalSec5_31",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec5_31").html(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}
//
//
//
function initializeFormEventspV_2_10() {

    var p2_10_8_s1 = document.getElementById("p2_10_8_s1");
    var p2_10_detalle_s1 = document.getElementById("p2_10_detalle_s1");

    if (p2_10_8_s1.checked) {
        p2_10_detalle_s1.disabled = false;

    } else {
        p2_10_detalle_s1.disabled = true;
        p2_10_detalle_s1.value = '';
    }

}
////
function valida_p2_11_s1() {

    var p2_11_s1_8 = document.getElementById("p2_11_s1_8");
    var p2_11_detalle_s1 = document.getElementById("p2_11_detalle_s1");

    if (p2_11_s1_8.checked) {
        p2_11_detalle_s1.disabled = false;

    } else {
        p2_11_detalle_s1.disabled = true;
        p2_11_detalle_s1.value = '';
    }

}
//
//
function valida_p3_10_1_s1() {

    var p3_10_1_s1_4 = document.getElementById("p3_10_1_s1_4");
    var p3_10_1_s1_detalle = document.getElementById("p3_10_1_s1_detalle");  

    if (p3_10_1_s1_4.checked) {
        p3_10_1_s1_detalle.disabled = false;

    } else {
        p3_10_1_s1_detalle.disabled = true;
        p3_10_1_s1_detalle.value = '';
    }

} 
//
function valida_p3_11_3_s1() {

    var p3_11_3_s1 = document.getElementById("p3_11_3_s1");
    var p3_11_detalle_s1 = document.getElementById("p3_11_detalle_s1");

    if (p3_11_3_s1.checked) {
        p3_11_detalle_s1.disabled = false;

    } else {
        p3_11_detalle_s1.disabled = true;
        p3_11_detalle_s1.value = '';
    }

}
//
//
function toggleInputs3_14(checkboxId, inputIds) {
    var checkbox = document.getElementById(checkboxId);
    var isChecked = checkbox.checked;

    inputIds.forEach(function(inputId) {
        var input = document.getElementById(inputId);
        if (isChecked) {
            input.removeAttribute('disabled');
        } else {
            input.setAttribute('disabled', 'disabled');
            input.value = ''; 
        }
    });
}
//
//
function valida_p3_15_s1() {

    var p3_15_s1_s1_9 = document.getElementById("p3_15_s1_s1_9");
    var p3_15_s1_detalle = document.getElementById("p3_15_s1_detalle");

    if (p3_15_s1_s1_9.checked) {
        p3_15_s1_detalle.disabled = false;

    } else {
        p3_15_s1_detalle.disabled = true;
        p3_15_s1_detalle.value = '';
    }

}
//
//
//
function valida_p3_16_1_1_s1() {

    var p3_16_1_4_s1 = document.getElementById("p3_16_1_4_s1");
    var p3_16_1_1_s1_detalle = document.getElementById("p3_16_1_1_s1_detalle");

    if (p3_16_1_4_s1.checked) {
        p3_16_1_1_s1_detalle.disabled = false;

    } else {
        p3_16_1_1_s1_detalle.disabled = true;
        p3_16_1_1_s1_detalle.value = '';
    }

}
//
//
//
////
////
////
function valida_p3_16_3_s1() {
    var p3_16_3_s1_4 = document.getElementById("p3_16_3_s1_4");
    var p3_16_3_detallar_s1 = document.getElementById("p3_16_3_detallar_s1");

    if (p3_16_3_s1_4.checked) {
        p3_16_3_detallar_s1.disabled = false;
    } else {
        p3_16_3_detallar_s1.disabled = true;
        p3_16_3_detallar_s1.value = '';
    }
}

//
//
//function toggleCheckboxesp3_18() {
//    var checkboxNoRegistro = document.getElementById("p3_18_4_s1");
//    var checkboxes = ["p3_18_1_s1", "p3_18_2_s1", "p3_18_3_s1"];
//
//    if (checkboxNoRegistro.checked) {
//        checkboxes.forEach(function(id) {
//            var checkbox = document.getElementById(id);
//            checkbox.checked = false;
//            checkbox.setAttribute("disabled", "disabled");
//        });
//    } else {
//        checkboxes.forEach(function(id) {
//            var checkbox = document.getElementById(id);
//            checkbox.removeAttribute("disabled");
//            checkbox.checked = false; 
//        });
//    }
//}
//
//
//
//
//function valida_p4_3modal() {
//    var p7_anio = document.getElementById("p7_anio");
//    var p7_tipo_discapacidad = document.getElementById("p7_tipo_discapacidad");
//    var p7_recibe_tratamiento = document.getElementById("p7_recibe_tratamiento");
//    var p7_dosis = document.getElementById("p7_dosis");
//    var p7_sufre_enfermedad = document.getElementById("p7_sufre_enfermedad");
//    
//    var p7_tiene_partida = document.getElementById("p7_tiene_partida");
//    var p7_cuenta_documento = document.getElementById("p7_cuenta_documento");
//    var p7_presento_denuncia = document.getElementById("p7_presento_denuncia");
//
//    var selectValue = document.getElementById('mdl_sec4_3_p0').value;
//
//    
//     if (['1', '2', '4'].includes(selectValue)) {
//        p7_anio.disabled = false;
//    } else {
//        p7_anio.disabled = true;
//        p7_anio.value = '';
//    }
//    
//    if (selectValue === '3') {
//        p7_tipo_discapacidad.disabled = false;
//    } else {
//        p7_tipo_discapacidad.disabled = true;
//        p7_tipo_discapacidad.value = '';
//    }
//
//     // Habilitación de p7_recibe_tratamiento para valores 5 a 10
//    if (['5', '6', '7', '8', '9', '10'].includes(selectValue)) {
//        p7_recibe_tratamiento.disabled = false;
//    } else {
//        p7_recibe_tratamiento.disabled = true;
//        p7_recibe_tratamiento.value = '';
//    }
//    
//      if (selectValue === '11') {
//        p7_dosis.disabled = false;
//    } else {
//        p7_dosis.disabled = true;
//        p7_dosis.value = '';
//    }
//    
//    
//      if (selectValue === '12') {
//        p7_sufre_enfermedad.disabled = false;
//    } else {
//        p7_sufre_enfermedad.disabled = true;
//        p7_sufre_enfermedad.value = '';
//    }
//    
//    if (selectValue === '13') {
//        p7_tiene_partida.disabled = false;  
//    } else {
//        p7_tiene_partida.disabled = true;
//        p7_tiene_partida.value = '';
//    }
//    
//     if (selectValue === '14') {
//        p7_cuenta_documento.disabled = false;
//    } else {
//        p7_cuenta_documento.disabled = true;
//        p7_cuenta_documento.value = '';
//    }
//    
//    
//    
//    if (['15', '16', '17'].includes(selectValue)) {
//        p7_presento_denuncia.disabled = false;
//    } else {
//        p7_presento_denuncia.disabled = true;
//        p7_presento_denuncia.value = '';
//    }
//
//}
//
//
//
//function valida_p4_3modal_2() {
//    var p8_lengua = document.getElementById("p8_lengua"); 
//    var p8_conadis = document.getElementById("p8_conadis");
//    var p8_tipo_enfermedad = document.getElementById("p8_tipo_enfermedad");
//    var p8_certificado_nac = document.getElementById("p8_certificado_nac");
//    var p8_tipodoc = document.getElementById("p8_tipodoc");
//    var p8_atencion_psico = document.getElementById("p8_atencion_psico");
//    
//    var selectValue = document.getElementById('mdl_sec4_3_p0').value;
//
//    
//     if (['1', '2', '4' ].includes(selectValue)) {
//        p8_lengua.disabled = false;
//    } else {
//        p8_lengua.disabled = true;
//        p8_lengua.value = '';
//    }
//    
//    if (selectValue === '3') {
//        p8_conadis.disabled = false;
//    } else {
//        p8_conadis.disabled = true;
//        p8_conadis.value = '';
//    }
//    
//      if (selectValue === '12') {
//        p8_tipo_enfermedad.disabled = false;
//    } else {
//        p8_tipo_enfermedad.disabled = true;
//        p8_tipo_enfermedad.value = '';
//    }
//    
//     if (selectValue === '13') {
//        p8_certificado_nac.disabled = false;
//    } else {
//        p8_certificado_nac.disabled = true;
//        p8_certificado_nac.value = '';
//    }
//    
//     if (selectValue === '14') {
//        p8_tipodoc.disabled = false;
//    } else {
//        p8_tipodoc.disabled = true;
//        p8_tipodoc.value = '';
//    }
//    
//    
//    if (['15', '16', '17'].includes(selectValue)) {
//        p8_atencion_psico.disabled = false;
//    } else {
//        p8_atencion_psico.disabled = true;
//        p8_atencion_psico.value = '';
//    }
//    
//
//}
//
//
//function valida_p4_3modal_1314() {
//    var p10_1 = document.getElementById("p10_1");
//    var p10_carnet_refugio = document.getElementById("p10_carnet_refugio");
//    var p11_motivo_retiro = document.getElementById("p11_motivo_retiro");
//
//    var selectValue = document.getElementById('mdl_sec4_3_p0').value;
//
//      if (selectValue === '13') {
//        p10_1.disabled = false;
//    } else {
//        p10_1.disabled = true;
//        p10_1.value = '';
//    }
//    
//     if (selectValue === '14') {
//        p10_carnet_refugio.disabled = false;
//    } else {
//        p10_carnet_refugio.disabled = true;
//        p10_carnet_refugio.value = '';
//    }
//    
//    if (selectValue === '2') {
//        p11_motivo_retiro.disabled = false;
//    } else {
//        p11_motivo_retiro.disabled = true;
//        p11_motivo_retiro.value = '';
//    }
//
//}
//
//
//function validap1_3() {
//    var p1_3_8 = document.getElementById("p1_3_8");
//    var p1_3_detalle = document.getElementById("p1_3_detalle");
//
//    if (p1_3_8.checked) {
//        p1_3_detalle.disabled = false;
//
//    } else {
//        p1_3_detalle.disabled = true;
//        p1_3_detalle.value = '';
//    }
//}
//
//
//function validap5_3() {
//    var p5_3_1 = document.getElementById("p5_3_1");
//    var p5_3_detalle = document.getElementById("p5_3_detalle");
//
//    if (p5_3_1.checked) {
//        p5_3_detalle.disabled = false;
//
//    } else {
//        p5_3_detalle.disabled = true;
//        p5_3_detalle.value = '';
//    }
//}
//
///////PARTE DE LA SECCION 5////////
//
function Validap5_4_1() {
    var p4_1_si = document.getElementById("p4_1_si");
    var p4_2x = document.getElementById("p4_2x");
    var p4_3 = document.getElementById("p4_3");

    var p4_4_1 = document.getElementById("p4_4_1");
    var p4_4_2 = document.getElementById("p4_4_2");
    var p4_4_3 = document.getElementById("p4_4_3");
    var p4_4_4 = document.getElementById("p4_4_4");
    var p4_4_5 = document.getElementById("p4_4_5");
    var p4_4_6 = document.getElementById("p4_4_6");
    var p4_4_7 = document.getElementById("p4_4_7");

    var p4_5_si = document.getElementById("p4_5_si");
    var p4_5_no = document.getElementById("p4_5_no");

    var p4_6_si = document.getElementById("p4_6_si");
    var p4_6_no = document.getElementById("p4_6_no");

    var p4_7_detalle = document.getElementById("p4_7_detalle");

    if (p4_1_si.checked) {
        p4_2x.disabled = false;
        p4_3.disabled = false;

        p4_4_1.disabled = false;
        p4_4_2.disabled = false;
        p4_4_3.disabled = false;
        p4_4_4.disabled = false;
        p4_4_5.disabled = false;
        p4_4_6.disabled = false;
        p4_4_7.disabled = false;

        p4_5_si.disabled = false;
        p4_5_no.disabled = false;

        p4_6_si.disabled = false;
        p4_6_no.disabled = false;

        p4_7_detalle.disabled = true;
        p4_7_detalle.value = '';

    } else {

        p4_2x.disabled = true;
        p4_2x.value = '';
        p4_3.disabled = true;
        p4_3.value = '';

        p4_4_1.disabled = true;
        p4_4_1.checked = false;
        p4_4_2.disabled = true;
        p4_4_2.checked = false;
        p4_4_3.disabled = true;
        p4_4_3.checked = false;
        p4_4_4.disabled = true;
        p4_4_4.checked = false;
        p4_4_5.disabled = true;
        p4_4_5.checked = false;
        p4_4_6.disabled = true;
        p4_4_6.checked = false;
        p4_4_7.disabled = true;
        p4_4_7.checked = false;

        p4_5_si.disabled = true;
        p4_5_si.checked = false;
        p4_5_no.disabled = true;
        p4_5_no.checked = false;

        p4_6_si.disabled = true;
        p4_6_si.checked = false;
        p4_6_no.disabled = true;
        p4_6_no.checked = false;


        p4_7_detalle.disabled = false;
        validap5_4_6_a_4_7();
        validaDetap5_4_4_7();
    }
}
//
function validaDetap5_4_4_7() {
    var p4_4_7 = document.getElementById("p4_4_7");
    var p4_7_7_detalle = document.getElementById("p4_7_7_detalle");


    if (p4_4_7.checked) {

        p4_7_7_detalle.disabled = false;
    } else {
        
        p4_7_7_detalle.disabled = true;
        p4_7_7_detalle.value = '';
    }
}
////////////////////////////////////////////////////////
//
//////////// INICI0 SECCION 6//////
//
///////////AU//////////////////////
//function validaAULp6_1() {
//    var p6_1_aul_local_si = document.getElementById("p6_1_aul_local_si");
//    var p6_1_aul_total1 = document.getElementById("p6_1_aul_total1");
//    var p6_1_aul_buen_estado1 = document.getElementById("p6_1_aul_buen_estado1");
//    var p6_1_aul_regular1 = document.getElementById("p6_1_aul_regular1");
//    var p6_1_aul_mal1 = document.getElementById("p6_1_aul_mal1");
//    var p6_1_aul_total2 = document.getElementById("p6_1_aul_total2");
//    var p6_1_aul_buen_estado2 = document.getElementById("p6_1_aul_buen_estado2");
//    var p6_1_aul_regular2 = document.getElementById("p6_1_aul_regular2");
//    var p6_1_aul_mal2 = document.getElementById("p6_1_aul_mal2");
//
//    if (p6_1_aul_local_si.checked) {
//
//        p6_1_aul_total1.disabled = false;
//        p6_1_aul_buen_estado1.disabled = false;
//        p6_1_aul_regular1.disabled = false;
//        p6_1_aul_mal1.disabled = false;
//
//        p6_1_aul_total2.disabled = false;
//        p6_1_aul_buen_estado2.disabled = false;
//        p6_1_aul_regular2.disabled = false;
//        p6_1_aul_mal2.disabled = false;
//    } else {
//        // Desmarcar y deshabilitar p2_6_detalle, además de limpiar su contenido
//        p6_1_aul_total1.disabled = true;
//        p6_1_aul_total1.value = '';
//        p6_1_aul_buen_estado1.disabled = true;
//        p6_1_aul_buen_estado1.value = '';
//        p6_1_aul_regular1.disabled = true;
//        p6_1_aul_regular1.value = '';
//        p6_1_aul_mal1.disabled = true;
//        p6_1_aul_mal1.value = '';
//
//        p6_1_aul_total2.disabled = true;
//        p6_1_aul_total2.value = '';
//        p6_1_aul_buen_estado2.disabled = true;
//        p6_1_aul_buen_estado2.value = '';
//        p6_1_aul_regular2.disabled = true;
//        p6_1_aul_regular2.value = '';
//        p6_1_aul_mal2.disabled = true;
//        p6_1_aul_mal2.value = '';
//    }
//}
//
//function valida001p6_1() {
//    var p6_1_001_local_si = document.getElementById("p6_1_001_local_si");
//    var p6_1_001_total1 = document.getElementById("p6_1_001_total1");
//    var p6_1_001_buen_estado1 = document.getElementById("p6_1_001_buen_estado1");
//    var p6_1_001_regular1 = document.getElementById("p6_1_001_regular1");
//    var p6_1_001_mal1 = document.getElementById("p6_1_001_mal1");
//    var p6_1_001_total2 = document.getElementById("p6_1_001_total2");
//    var p6_1_001_buen_estado2 = document.getElementById("p6_1_001_buen_estado2");
//    var p6_1_001_regular2 = document.getElementById("p6_1_001_regular2");
//    var p6_1_001_mal2 = document.getElementById("p6_1_001_mal2");
//
//    if (p6_1_001_local_si.checked) {
//
//        p6_1_001_total1.disabled = false;
//        p6_1_001_buen_estado1.disabled = false;
//        p6_1_001_regular1.disabled = false;
//        p6_1_001_mal1.disabled = false;
//
//        p6_1_001_total2.disabled = false;
//        p6_1_001_buen_estado2.disabled = false;
//        p6_1_001_regular2.disabled = false;
//        p6_1_001_mal2.disabled = false;
//    } else {
//        // Desmarcar y deshabilitar p2_6_detalle, además de limpiar su contenido
//        p6_1_001_total1.disabled = true;
//        p6_1_001_total1.value = '';
//        p6_1_001_buen_estado1.disabled = true;
//        p6_1_001_buen_estado1.value = '';
//        p6_1_001_regular1.disabled = true;
//        p6_1_001_regular1.value = '';
//        p6_1_001_mal1.disabled = true;
//        p6_1_001_mal1.value = '';
//
//        p6_1_001_total2.disabled = true;
//        p6_1_001_total2.value = '';
//        p6_1_001_buen_estado2.disabled = true;
//        p6_1_001_buen_estado2.value = '';
//        p6_1_001_regular2.disabled = true;
//        p6_1_001_regular2.value = '';
//        p6_1_001_mal2.disabled = true;
//        p6_1_001_mal2.value = '';
//    }
//}
//
//
//
//function valida002p6_1() {
//    var p6_1_002_local_si = document.getElementById("p6_1_002_local_si");
//    var p6_1_002_total1 = document.getElementById("p6_1_002_total1");
//    var p6_1_002_buen_estado1 = document.getElementById("p6_1_002_buen_estado1");
//    var p6_1_002_regular1 = document.getElementById("p6_1_002_regular1");
//    var p6_1_002_mal1 = document.getElementById("p6_1_002_mal1");
//    var p6_1_002_total2 = document.getElementById("p6_1_002_total2");
//    var p6_1_002_buen_estado2 = document.getElementById("p6_1_002_buen_estado2");
//    var p6_1_002_regular2 = document.getElementById("p6_1_002_regular2");
//    var p6_1_002_mal2 = document.getElementById("p6_1_002_mal2");
//
//    if (p6_1_002_local_si.checked) {
//        p6_1_002_total1.disabled = false;
//        p6_1_002_buen_estado1.disabled = false;
//        p6_1_002_regular1.disabled = false;
//        p6_1_002_mal1.disabled = false;
//        p6_1_002_total2.disabled = false;
//        p6_1_002_buen_estado2.disabled = false;
//        p6_1_002_regular2.disabled = false;
//        p6_1_002_mal2.disabled = false;
//    } else {
//        p6_1_002_total1.disabled = true;
//        p6_1_002_total1.value = '';
//        p6_1_002_buen_estado1.disabled = true;
//        p6_1_002_buen_estado1.value = '';
//        p6_1_002_regular1.disabled = true;
//        p6_1_002_regular1.value = '';
//        p6_1_002_mal1.disabled = true;
//        p6_1_002_mal1.value = '';
//        p6_1_002_total2.disabled = true;
//        p6_1_002_total2.value = '';
//        p6_1_002_buen_estado2.disabled = true;
//        p6_1_002_buen_estado2.value = '';
//        p6_1_002_regular2.disabled = true;
//        p6_1_002_regular2.value = '';
//        p6_1_002_mal2.disabled = true;
//        p6_1_002_mal2.value = '';
//    }
//}
//
//function valida003p6_1() {
//    var p6_1_003_local_si = document.getElementById("p6_1_003_local_si");
//    var p6_1_003_total1 = document.getElementById("p6_1_003_total1");
//    var p6_1_003_buen_estado1 = document.getElementById("p6_1_003_buen_estado1");
//    var p6_1_003_regular1 = document.getElementById("p6_1_003_regular1");
//    var p6_1_003_mal1 = document.getElementById("p6_1_003_mal1");
//    var p6_1_003_total2 = document.getElementById("p6_1_003_total2");
//    var p6_1_003_buen_estado2 = document.getElementById("p6_1_003_buen_estado2");
//    var p6_1_003_regular2 = document.getElementById("p6_1_003_regular2");
//    var p6_1_003_mal2 = document.getElementById("p6_1_003_mal2");
//
//    if (p6_1_003_local_si.checked) {
//        p6_1_003_total1.disabled = false;
//        p6_1_003_buen_estado1.disabled = false;
//        p6_1_003_regular1.disabled = false;
//        p6_1_003_mal1.disabled = false;
//        p6_1_003_total2.disabled = false;
//        p6_1_003_buen_estado2.disabled = false;
//        p6_1_003_regular2.disabled = false;
//        p6_1_003_mal2.disabled = false;
//    } else {
//        p6_1_003_total1.disabled = true;
//        p6_1_003_total1.value = '';
//        p6_1_003_buen_estado1.disabled = true;
//        p6_1_003_buen_estado1.value = '';
//        p6_1_003_regular1.disabled = true;
//        p6_1_003_regular1.value = '';
//        p6_1_003_mal1.disabled = true;
//        p6_1_003_mal1.value = '';
//        p6_1_003_total2.disabled = true;
//        p6_1_003_total2.value = '';
//        p6_1_003_buen_estado2.disabled = true;
//        p6_1_003_buen_estado2.value = '';
//        p6_1_003_regular2.disabled = true;
//        p6_1_003_regular2.value = '';
//        p6_1_003_mal2.disabled = true;
//        p6_1_003_mal2.value = '';
//    }
//}
//
//function valida004p6_1() {
//    var p6_1_004_local_si = document.getElementById("p6_1_004_local_si");
//    var p6_1_004_total1 = document.getElementById("p6_1_004_total1");
//    var p6_1_004_buen_estado1 = document.getElementById("p6_1_004_buen_estado1");
//    var p6_1_004_regular1 = document.getElementById("p6_1_004_regular1");
//    var p6_1_004_mal1 = document.getElementById("p6_1_004_mal1");
//    var p6_1_004_total2 = document.getElementById("p6_1_004_total2");
//    var p6_1_004_buen_estado2 = document.getElementById("p6_1_004_buen_estado2");
//    var p6_1_004_regular2 = document.getElementById("p6_1_004_regular2");
//    var p6_1_004_mal2 = document.getElementById("p6_1_004_mal2");
//
//    if (p6_1_004_local_si.checked) {
//        p6_1_004_total1.disabled = false;
//        p6_1_004_buen_estado1.disabled = false;
//        p6_1_004_regular1.disabled = false;
//        p6_1_004_mal1.disabled = false;
//        p6_1_004_total2.disabled = false;
//        p6_1_004_buen_estado2.disabled = false;
//        p6_1_004_regular2.disabled = false;
//        p6_1_004_mal2.disabled = false;
//    } else {
//        p6_1_004_total1.disabled = true;
//        p6_1_004_total1.value = '';
//        p6_1_004_buen_estado1.disabled = true;
//        p6_1_004_buen_estado1.value = '';
//        p6_1_004_regular1.disabled = true;
//        p6_1_004_regular1.value = '';
//        p6_1_004_mal1.disabled = true;
//        p6_1_004_mal1.value = '';
//        p6_1_004_total2.disabled = true;
//        p6_1_004_total2.value = '';
//        p6_1_004_buen_estado2.disabled = true;
//        p6_1_004_buen_estado2.value = '';
//        p6_1_004_regular2.disabled = true;
//        p6_1_004_regular2.value = '';
//        p6_1_004_mal2.disabled = true;
//        p6_1_004_mal2.value = '';
//    }
//}
//
//function valida005p6_1() {
//    var p6_1_005_local_si = document.getElementById("p6_1_005_local_si");
//    var p6_1_005_total1 = document.getElementById("p6_1_005_total1");
//    var p6_1_005_buen_estado1 = document.getElementById("p6_1_005_buen_estado1");
//    var p6_1_005_regular1 = document.getElementById("p6_1_005_regular1");
//    var p6_1_005_mal1 = document.getElementById("p6_1_005_mal1");
//    var p6_1_005_total2 = document.getElementById("p6_1_005_total2");
//    var p6_1_005_buen_estado2 = document.getElementById("p6_1_005_buen_estado2");
//    var p6_1_005_regular2 = document.getElementById("p6_1_005_regular2");
//    var p6_1_005_mal2 = document.getElementById("p6_1_005_mal2");
//
//    if (p6_1_005_local_si.checked) {
//        p6_1_005_total1.disabled = false;
//        p6_1_005_buen_estado1.disabled = false;
//        p6_1_005_regular1.disabled = false;
//        p6_1_005_mal1.disabled = false;
//        p6_1_005_total2.disabled = false;
//        p6_1_005_buen_estado2.disabled = false;
//        p6_1_005_regular2.disabled = false;
//        p6_1_005_mal2.disabled = false;
//    } else {
//        p6_1_005_total1.disabled = true;
//        p6_1_005_total1.value = '';
//        p6_1_005_buen_estado1.disabled = true;
//        p6_1_005_buen_estado1.value = '';
//        p6_1_005_regular1.disabled = true;
//        p6_1_005_regular1.value = '';
//        p6_1_005_mal1.disabled = true;
//        p6_1_005_mal1.value = '';
//        p6_1_005_total2.disabled = true;
//        p6_1_005_total2.value = '';
//        p6_1_005_buen_estado2.disabled = true;
//        p6_1_005_buen_estado2.value = '';
//        p6_1_005_regular2.disabled = true;
//        p6_1_005_regular2.value = '';
//        p6_1_005_mal2.disabled = true;
//        p6_1_005_mal2.value = '';
//    }
//}
//
//function valida006p6_1() {
//    var p6_1_006_local_si = document.getElementById("p6_1_006_local_si");
//    var p6_1_006_total1 = document.getElementById("p6_1_006_total1");
//    var p6_1_006_buen_estado1 = document.getElementById("p6_1_006_buen_estado1");
//    var p6_1_006_regular1 = document.getElementById("p6_1_006_regular1");
//    var p6_1_006_mal1 = document.getElementById("p6_1_006_mal1");
//    var p6_1_006_total2 = document.getElementById("p6_1_006_total2");
//    var p6_1_006_buen_estado2 = document.getElementById("p6_1_006_buen_estado2");
//    var p6_1_006_regular2 = document.getElementById("p6_1_006_regular2");
//    var p6_1_006_mal2 = document.getElementById("p6_1_006_mal2");
//
//    if (p6_1_006_local_si.checked) {
//        p6_1_006_total1.disabled = false;
//        p6_1_006_buen_estado1.disabled = false;
//        p6_1_006_regular1.disabled = false;
//        p6_1_006_mal1.disabled = false;
//        p6_1_006_total2.disabled = false;
//        p6_1_006_buen_estado2.disabled = false;
//        p6_1_006_regular2.disabled = false;
//        p6_1_006_mal2.disabled = false;
//    } else {
//        p6_1_006_total1.disabled = true;
//        p6_1_006_total1.value = '';
//        p6_1_006_buen_estado1.disabled = true;
//        p6_1_006_buen_estado1.value = '';
//        p6_1_006_regular1.disabled = true;
//        p6_1_006_regular1.value = '';
//        p6_1_006_mal1.disabled = true;
//        p6_1_006_mal1.value = '';
//        p6_1_006_total2.disabled = true;
//        p6_1_006_total2.value = '';
//        p6_1_006_buen_estado2.disabled = true;
//        p6_1_006_buen_estado2.value = '';
//        p6_1_006_regular2.disabled = true;
//        p6_1_006_regular2.value = '';
//        p6_1_006_mal2.disabled = true;
//        p6_1_006_mal2.value = '';
//    }
//}
//
//function valida007p6_1() {
//    var p6_1_007_local_si = document.getElementById("p6_1_007_local_si");
//    var p6_1_007_total1 = document.getElementById("p6_1_007_total1");
//    var p6_1_007_buen_estado1 = document.getElementById("p6_1_007_buen_estado1");
//    var p6_1_007_regular1 = document.getElementById("p6_1_007_regular1");
//    var p6_1_007_mal1 = document.getElementById("p6_1_007_mal1");
//    var p6_1_007_total2 = document.getElementById("p6_1_007_total2");
//    var p6_1_007_buen_estado2 = document.getElementById("p6_1_007_buen_estado2");
//    var p6_1_007_regular2 = document.getElementById("p6_1_007_regular2");
//    var p6_1_007_mal2 = document.getElementById("p6_1_007_mal2");
//
//    if (p6_1_007_local_si.checked) {
//        p6_1_007_total1.disabled = false;
//        p6_1_007_buen_estado1.disabled = false;
//        p6_1_007_regular1.disabled = false;
//        p6_1_007_mal1.disabled = false;
//        p6_1_007_total2.disabled = false;
//        p6_1_007_buen_estado2.disabled = false;
//        p6_1_007_regular2.disabled = false;
//        p6_1_007_mal2.disabled = false;
//    } else {
//        p6_1_007_total1.disabled = true;
//        p6_1_007_total1.value = '';
//        p6_1_007_buen_estado1.disabled = true;
//        p6_1_007_buen_estado1.value = '';
//        p6_1_007_regular1.disabled = true;
//        p6_1_007_regular1.value = '';
//        p6_1_007_mal1.disabled = true;
//        p6_1_007_mal1.value = '';
//        p6_1_007_total2.disabled = true;
//        p6_1_007_total2.value = '';
//        p6_1_007_buen_estado2.disabled = true;
//        p6_1_007_buen_estado2.value = '';
//        p6_1_007_regular2.disabled = true;
//        p6_1_007_regular2.value = '';
//        p6_1_007_mal2.disabled = true;
//        p6_1_007_mal2.value = '';
//    }
//}
//
//function valida008p6_1() {
//    var p6_1_008_local_si = document.getElementById("p6_1_008_local_si");
//    var p6_1_008_total1 = document.getElementById("p6_1_008_total1");
//    var p6_1_008_buen_estado1 = document.getElementById("p6_1_008_buen_estado1");
//    var p6_1_008_regular1 = document.getElementById("p6_1_008_regular1");
//    var p6_1_008_mal1 = document.getElementById("p6_1_008_mal1");
//    var p6_1_008_total2 = document.getElementById("p6_1_008_total2");
//    var p6_1_008_buen_estado2 = document.getElementById("p6_1_008_buen_estado2");
//    var p6_1_008_regular2 = document.getElementById("p6_1_008_regular2");
//    var p6_1_008_mal2 = document.getElementById("p6_1_008_mal2");
//
//    if (p6_1_008_local_si.checked) {
//        p6_1_008_total1.disabled = false;
//        p6_1_008_buen_estado1.disabled = false;
//        p6_1_008_regular1.disabled = false;
//        p6_1_008_mal1.disabled = false;
//        p6_1_008_total2.disabled = false;
//        p6_1_008_buen_estado2.disabled = false;
//        p6_1_008_regular2.disabled = false;
//        p6_1_008_mal2.disabled = false;
//    } else {
//        p6_1_008_total1.disabled = true;
//        p6_1_008_total1.value = '';
//        p6_1_008_buen_estado1.disabled = true;
//        p6_1_008_buen_estado1.value = '';
//        p6_1_008_regular1.disabled = true;
//        p6_1_008_regular1.value = '';
//        p6_1_008_mal1.disabled = true;
//        p6_1_008_mal1.value = '';
//        p6_1_008_total2.disabled = true;
//        p6_1_008_total2.value = '';
//        p6_1_008_buen_estado2.disabled = true;
//        p6_1_008_buen_estado2.value = '';
//        p6_1_008_regular2.disabled = true;
//        p6_1_008_regular2.value = '';
//        p6_1_008_mal2.disabled = true;
//        p6_1_008_mal2.value = '';
//    }
//}
//
//function valida009p6_1() {
//    var p6_1_009_local_si = document.getElementById("p6_1_009_local_si");
//    var p6_1_009_total1 = document.getElementById("p6_1_009_total1");
//    var p6_1_009_buen_estado1 = document.getElementById("p6_1_009_buen_estado1");
//    var p6_1_009_regular1 = document.getElementById("p6_1_009_regular1");
//    var p6_1_009_mal1 = document.getElementById("p6_1_009_mal1");
//    var p6_1_009_total2 = document.getElementById("p6_1_009_total2");
//    var p6_1_009_buen_estado2 = document.getElementById("p6_1_009_buen_estado2");
//    var p6_1_009_regular2 = document.getElementById("p6_1_009_regular2");
//    var p6_1_009_mal2 = document.getElementById("p6_1_009_mal2");
//
//    if (p6_1_009_local_si.checked) {
//        p6_1_009_total1.disabled = false;
//        p6_1_009_buen_estado1.disabled = false;
//        p6_1_009_regular1.disabled = false;
//        p6_1_009_mal1.disabled = false;
//        p6_1_009_total2.disabled = false;
//        p6_1_009_buen_estado2.disabled = false;
//        p6_1_009_regular2.disabled = false;
//        p6_1_009_mal2.disabled = false;
//    } else {
//        p6_1_009_total1.disabled = true;
//        p6_1_009_total1.value = '';
//        p6_1_009_buen_estado1.disabled = true;
//        p6_1_009_buen_estado1.value = '';
//        p6_1_009_regular1.disabled = true;
//        p6_1_009_regular1.value = '';
//        p6_1_009_mal1.disabled = true;
//        p6_1_009_mal1.value = '';
//        p6_1_009_total2.disabled = true;
//        p6_1_009_total2.value = '';
//        p6_1_009_buen_estado2.disabled = true;
//        p6_1_009_buen_estado2.value = '';
//        p6_1_009_regular2.disabled = true;
//        p6_1_009_regular2.value = '';
//        p6_1_009_mal2.disabled = true;
//        p6_1_009_mal2.value = '';
//    }
//}
//
//function valida010p6_1() {
//    var p6_1_010_local_si = document.getElementById("p6_1_010_local_si");
//    var p6_1_010_total1 = document.getElementById("p6_1_010_total1");
//    var p6_1_010_buen_estado1 = document.getElementById("p6_1_010_buen_estado1");
//    var p6_1_010_regular1 = document.getElementById("p6_1_010_regular1");
//    var p6_1_010_mal1 = document.getElementById("p6_1_010_mal1");
//    var p6_1_010_total2 = document.getElementById("p6_1_010_total2");
//    var p6_1_010_buen_estado2 = document.getElementById("p6_1_010_buen_estado2");
//    var p6_1_010_regular2 = document.getElementById("p6_1_010_regular2");
//    var p6_1_010_mal2 = document.getElementById("p6_1_010_mal2");
//
//    if (p6_1_010_local_si.checked) {
//        p6_1_010_total1.disabled = false;
//        p6_1_010_buen_estado1.disabled = false;
//        p6_1_010_regular1.disabled = false;
//        p6_1_010_mal1.disabled = false;
//        p6_1_010_total2.disabled = false;
//        p6_1_010_buen_estado2.disabled = false;
//        p6_1_010_regular2.disabled = false;
//        p6_1_010_mal2.disabled = false;
//    } else {
//        p6_1_010_total1.disabled = true;
//        p6_1_010_total1.value = '';
//        p6_1_010_buen_estado1.disabled = true;
//        p6_1_010_buen_estado1.value = '';
//        p6_1_010_regular1.disabled = true;
//        p6_1_010_regular1.value = '';
//        p6_1_010_mal1.disabled = true;
//        p6_1_010_mal1.value = '';
//        p6_1_010_total2.disabled = true;
//        p6_1_010_total2.value = '';
//        p6_1_010_buen_estado2.disabled = true;
//        p6_1_010_buen_estado2.value = '';
//        p6_1_010_regular2.disabled = true;
//        p6_1_010_regular2.value = '';
//        p6_1_010_mal2.disabled = true;
//        p6_1_010_mal2.value = '';
//    }
//}
//
//function valida011p6_1() {
//    var p6_1_011_local_si = document.getElementById("p6_1_011_local_si");
//    var p6_1_011_total1 = document.getElementById("p6_1_011_total1");
//    var p6_1_011_buen_estado1 = document.getElementById("p6_1_011_buen_estado1");
//    var p6_1_011_regular1 = document.getElementById("p6_1_011_regular1");
//    var p6_1_011_mal1 = document.getElementById("p6_1_011_mal1");
//    var p6_1_011_total2 = document.getElementById("p6_1_011_total2");
//    var p6_1_011_buen_estado2 = document.getElementById("p6_1_011_buen_estado2");
//    var p6_1_011_regular2 = document.getElementById("p6_1_011_regular2");
//    var p6_1_011_mal2 = document.getElementById("p6_1_011_mal2");
//
//    if (p6_1_011_local_si.checked) {
//        p6_1_011_total1.disabled = false;
//        p6_1_011_buen_estado1.disabled = false;
//        p6_1_011_regular1.disabled = false;
//        p6_1_011_mal1.disabled = false;
//        p6_1_011_total2.disabled = false;
//        p6_1_011_buen_estado2.disabled = false;
//        p6_1_011_regular2.disabled = false;
//        p6_1_011_mal2.disabled = false;
//    } else {
//        p6_1_011_total1.disabled = true;
//        p6_1_011_total1.value = '';
//        p6_1_011_buen_estado1.disabled = true;
//        p6_1_011_buen_estado1.value = '';
//        p6_1_011_regular1.disabled = true;
//        p6_1_011_regular1.value = '';
//        p6_1_011_mal1.disabled = true;
//        p6_1_011_mal1.value = '';
//        p6_1_011_total2.disabled = true;
//        p6_1_011_total2.value = '';
//        p6_1_011_buen_estado2.disabled = true;
//        p6_1_011_buen_estado2.value = '';
//        p6_1_011_regular2.disabled = true;
//        p6_1_011_regular2.value = '';
//        p6_1_011_mal2.disabled = true;
//        p6_1_011_mal2.value = '';
//    }
//}
//
//function valida012p6_1() {
//    var p6_1_012_local_si = document.getElementById("p6_1_012_local_si");
//    var p6_1_012_total1 = document.getElementById("p6_1_012_total1");
//    var p6_1_012_buen_estado1 = document.getElementById("p6_1_012_buen_estado1");
//    var p6_1_012_regular1 = document.getElementById("p6_1_012_regular1");
//    var p6_1_012_mal1 = document.getElementById("p6_1_012_mal1");
//    var p6_1_012_total2 = document.getElementById("p6_1_012_total2");
//    var p6_1_012_buen_estado2 = document.getElementById("p6_1_012_buen_estado2");
//    var p6_1_012_regular2 = document.getElementById("p6_1_012_regular2");
//    var p6_1_012_mal2 = document.getElementById("p6_1_012_mal2");
//
//    if (p6_1_012_local_si.checked) {
//        p6_1_012_total1.disabled = false;
//        p6_1_012_buen_estado1.disabled = false;
//        p6_1_012_regular1.disabled = false;
//        p6_1_012_mal1.disabled = false;
//        p6_1_012_total2.disabled = false;
//        p6_1_012_buen_estado2.disabled = false;
//        p6_1_012_regular2.disabled = false;
//        p6_1_012_mal2.disabled = false;
//    } else {
//        p6_1_012_total1.disabled = true;
//        p6_1_012_total1.value = '';
//        p6_1_012_buen_estado1.disabled = true;
//        p6_1_012_buen_estado1.value = '';
//        p6_1_012_regular1.disabled = true;
//        p6_1_012_regular1.value = '';
//        p6_1_012_mal1.disabled = true;
//        p6_1_012_mal1.value = '';
//        p6_1_012_total2.disabled = true;
//        p6_1_012_total2.value = '';
//        p6_1_012_buen_estado2.disabled = true;
//        p6_1_012_buen_estado2.value = '';
//        p6_1_012_regular2.disabled = true;
//        p6_1_012_regular2.value = '';
//        p6_1_012_mal2.disabled = true;
//        p6_1_012_mal2.value = '';
//    }
//}
//
//function valida013p6_1() {
//    var p6_1_013_local_si = document.getElementById("p6_1_013_local_si");
//    var p6_1_013_total1 = document.getElementById("p6_1_013_total1");
//    var p6_1_013_buen_estado1 = document.getElementById("p6_1_013_buen_estado1");
//    var p6_1_013_regular1 = document.getElementById("p6_1_013_regular1");
//    var p6_1_013_mal1 = document.getElementById("p6_1_013_mal1");
//    var p6_1_013_total2 = document.getElementById("p6_1_013_total2");
//    var p6_1_013_buen_estado2 = document.getElementById("p6_1_013_buen_estado2");
//    var p6_1_013_regular2 = document.getElementById("p6_1_013_regular2");
//    var p6_1_013_mal2 = document.getElementById("p6_1_013_mal2");
//
//    if (p6_1_013_local_si.checked) {
//        p6_1_013_total1.disabled = false;
//        p6_1_013_buen_estado1.disabled = false;
//        p6_1_013_regular1.disabled = false;
//        p6_1_013_mal1.disabled = false;
//        p6_1_013_total2.disabled = false;
//        p6_1_013_buen_estado2.disabled = false;
//        p6_1_013_regular2.disabled = false;
//        p6_1_013_mal2.disabled = false;
//    } else {
//        p6_1_013_total1.disabled = true;
//        p6_1_013_total1.value = '';
//        p6_1_013_buen_estado1.disabled = true;
//        p6_1_013_buen_estado1.value = '';
//        p6_1_013_regular1.disabled = true;
//        p6_1_013_regular1.value = '';
//        p6_1_013_mal1.disabled = true;
//        p6_1_013_mal1.value = '';
//        p6_1_013_total2.disabled = true;
//        p6_1_013_total2.value = '';
//        p6_1_013_buen_estado2.disabled = true;
//        p6_1_013_buen_estado2.value = '';
//        p6_1_013_regular2.disabled = true;
//        p6_1_013_regular2.value = '';
//        p6_1_013_mal2.disabled = true;
//        p6_1_013_mal2.value = '';
//    }
//}
//
//function valida014p6_1() {
//    var p6_1_014_local_si = document.getElementById("p6_1_014_local_si");
//    var p6_1_014_total1 = document.getElementById("p6_1_014_total1");
//    var p6_1_014_buen_estado1 = document.getElementById("p6_1_014_buen_estado1");
//    var p6_1_014_regular1 = document.getElementById("p6_1_014_regular1");
//    var p6_1_014_mal1 = document.getElementById("p6_1_014_mal1");
//    var p6_1_014_total2 = document.getElementById("p6_1_014_total2");
//    var p6_1_014_buen_estado2 = document.getElementById("p6_1_014_buen_estado2");
//    var p6_1_014_regular2 = document.getElementById("p6_1_014_regular2");
//    var p6_1_014_mal2 = document.getElementById("p6_1_014_mal2");
//
//    if (p6_1_014_local_si.checked) {
//        p6_1_014_total1.disabled = false;
//        p6_1_014_buen_estado1.disabled = false;
//        p6_1_014_regular1.disabled = false;
//        p6_1_014_mal1.disabled = false;
//        p6_1_014_total2.disabled = false;
//        p6_1_014_buen_estado2.disabled = false;
//        p6_1_014_regular2.disabled = false;
//        p6_1_014_mal2.disabled = false;
//    } else {
//        p6_1_014_total1.disabled = true;
//        p6_1_014_total1.value = '';
//        p6_1_014_buen_estado1.disabled = true;
//        p6_1_014_buen_estado1.value = '';
//        p6_1_014_regular1.disabled = true;
//        p6_1_014_regular1.value = '';
//        p6_1_014_mal1.disabled = true;
//        p6_1_014_mal1.value = '';
//        p6_1_014_total2.disabled = true;
//        p6_1_014_total2.value = '';
//        p6_1_014_buen_estado2.disabled = true;
//        p6_1_014_buen_estado2.value = '';
//        p6_1_014_regular2.disabled = true;
//        p6_1_014_regular2.value = '';
//        p6_1_014_mal2.disabled = true;
//        p6_1_014_mal2.value = '';
//    }
//}
//
//function valida015p6_1() {
//    var p6_1_015_local_si = document.getElementById("p6_1_015_local_si");
//    var p6_1_015_total1 = document.getElementById("p6_1_015_total1");
//    var p6_1_015_buen_estado1 = document.getElementById("p6_1_015_buen_estado1");
//    var p6_1_015_regular1 = document.getElementById("p6_1_015_regular1");
//    var p6_1_015_mal1 = document.getElementById("p6_1_015_mal1");
//    var p6_1_015_total2 = document.getElementById("p6_1_015_total2");
//    var p6_1_015_buen_estado2 = document.getElementById("p6_1_015_buen_estado2");
//    var p6_1_015_regular2 = document.getElementById("p6_1_015_regular2");
//    var p6_1_015_mal2 = document.getElementById("p6_1_015_mal2");
//
//    if (p6_1_015_local_si.checked) {
//        p6_1_015_total1.disabled = false;
//        p6_1_015_buen_estado1.disabled = false;
//        p6_1_015_regular1.disabled = false;
//        p6_1_015_mal1.disabled = false;
//        p6_1_015_total2.disabled = false;
//        p6_1_015_buen_estado2.disabled = false;
//        p6_1_015_regular2.disabled = false;
//        p6_1_015_mal2.disabled = false;
//    } else {
//        p6_1_015_total1.disabled = true;
//        p6_1_015_total1.value = '';
//        p6_1_015_buen_estado1.disabled = true;
//        p6_1_015_buen_estado1.value = '';
//        p6_1_015_regular1.disabled = true;
//        p6_1_015_regular1.value = '';
//        p6_1_015_mal1.disabled = true;
//        p6_1_015_mal1.value = '';
//        p6_1_015_total2.disabled = true;
//        p6_1_015_total2.value = '';
//        p6_1_015_buen_estado2.disabled = true;
//        p6_1_015_buen_estado2.value = '';
//        p6_1_015_regular2.disabled = true;
//        p6_1_015_regular2.value = '';
//        p6_1_015_mal2.disabled = true;
//        p6_1_015_mal2.value = '';
//    }
//}
//
//function valida016p6_1() {
//    var p6_1_016_local_si = document.getElementById("p6_1_016_local_si");
//    var p6_1_016_total1 = document.getElementById("p6_1_016_total1");
//    var p6_1_016_buen_estado1 = document.getElementById("p6_1_016_buen_estado1");
//    var p6_1_016_regular1 = document.getElementById("p6_1_016_regular1");
//    var p6_1_016_mal1 = document.getElementById("p6_1_016_mal1");
//    var p6_1_016_total2 = document.getElementById("p6_1_016_total2");
//    var p6_1_016_buen_estado2 = document.getElementById("p6_1_016_buen_estado2");
//    var p6_1_016_regular2 = document.getElementById("p6_1_016_regular2");
//    var p6_1_016_mal2 = document.getElementById("p6_1_016_mal2");
//
//    if (p6_1_016_local_si.checked) {
//        p6_1_016_total1.disabled = false;
//        p6_1_016_buen_estado1.disabled = false;
//        p6_1_016_regular1.disabled = false;
//        p6_1_016_mal1.disabled = false;
//        p6_1_016_total2.disabled = false;
//        p6_1_016_buen_estado2.disabled = false;
//        p6_1_016_regular2.disabled = false;
//        p6_1_016_mal2.disabled = false;
//    } else {
//        p6_1_016_total1.disabled = true;
//        p6_1_016_total1.value = '';
//        p6_1_016_buen_estado1.disabled = true;
//        p6_1_016_buen_estado1.value = '';
//        p6_1_016_regular1.disabled = true;
//        p6_1_016_regular1.value = '';
//        p6_1_016_mal1.disabled = true;
//        p6_1_016_mal1.value = '';
//        p6_1_016_total2.disabled = true;
//        p6_1_016_total2.value = '';
//        p6_1_016_buen_estado2.disabled = true;
//        p6_1_016_buen_estado2.value = '';
//        p6_1_016_regular2.disabled = true;
//        p6_1_016_regular2.value = '';
//        p6_1_016_mal2.disabled = true;
//        p6_1_016_mal2.value = '';
//    }
//}
//
//function valida017p6_1() {
//    var p6_1_017_local_si = document.getElementById("p6_1_017_local_si");
//    var p6_1_017_total1 = document.getElementById("p6_1_017_total1");
//    var p6_1_017_buen_estado1 = document.getElementById("p6_1_017_buen_estado1");
//    var p6_1_017_regular1 = document.getElementById("p6_1_017_regular1");
//    var p6_1_017_mal1 = document.getElementById("p6_1_017_mal1");
//    var p6_1_017_total2 = document.getElementById("p6_1_017_total2");
//    var p6_1_017_buen_estado2 = document.getElementById("p6_1_017_buen_estado2");
//    var p6_1_017_regular2 = document.getElementById("p6_1_017_regular2");
//    var p6_1_017_mal2 = document.getElementById("p6_1_017_mal2");
//
//    if (p6_1_017_local_si.checked) {
//        p6_1_017_total1.disabled = false;
//        p6_1_017_buen_estado1.disabled = false;
//        p6_1_017_regular1.disabled = false;
//        p6_1_017_mal1.disabled = false;
//        p6_1_017_total2.disabled = false;
//        p6_1_017_buen_estado2.disabled = false;
//        p6_1_017_regular2.disabled = false;
//        p6_1_017_mal2.disabled = false;
//    } else {
//        p6_1_017_total1.disabled = true;
//        p6_1_017_total1.value = '';
//        p6_1_017_buen_estado1.disabled = true;
//        p6_1_017_buen_estado1.value = '';
//        p6_1_017_regular1.disabled = true;
//        p6_1_017_regular1.value = '';
//        p6_1_017_mal1.disabled = true;
//        p6_1_017_mal1.value = '';
//        p6_1_017_total2.disabled = true;
//        p6_1_017_total2.value = '';
//        p6_1_017_buen_estado2.disabled = true;
//        p6_1_017_buen_estado2.value = '';
//        p6_1_017_regular2.disabled = true;
//        p6_1_017_regular2.value = '';
//        p6_1_017_mal2.disabled = true;
//        p6_1_017_mal2.value = '';
//    }
//}
//
//function valida018p6_1() {
//    var p6_1_018_local_si = document.getElementById("p6_1_018_local_si");
//    var p6_1_018_total1 = document.getElementById("p6_1_018_total1");
//    var p6_1_018_buen_estado1 = document.getElementById("p6_1_018_buen_estado1");
//    var p6_1_018_regular1 = document.getElementById("p6_1_018_regular1");
//    var p6_1_018_mal1 = document.getElementById("p6_1_018_mal1");
//    var p6_1_018_total2 = document.getElementById("p6_1_018_total2");
//    var p6_1_018_buen_estado2 = document.getElementById("p6_1_018_buen_estado2");
//    var p6_1_018_regular2 = document.getElementById("p6_1_018_regular2");
//    var p6_1_018_mal2 = document.getElementById("p6_1_018_mal2");
//
//    if (p6_1_018_local_si.checked) {
//        p6_1_018_total1.disabled = false;
//        p6_1_018_buen_estado1.disabled = false;
//        p6_1_018_regular1.disabled = false;
//        p6_1_018_mal1.disabled = false;
//        p6_1_018_total2.disabled = false;
//        p6_1_018_buen_estado2.disabled = false;
//        p6_1_018_regular2.disabled = false;
//        p6_1_018_mal2.disabled = false;
//    } else {
//        p6_1_018_total1.disabled = true;
//        p6_1_018_total1.value = '';
//        p6_1_018_buen_estado1.disabled = true;
//        p6_1_018_buen_estado1.value = '';
//        p6_1_018_regular1.disabled = true;
//        p6_1_018_regular1.value = '';
//        p6_1_018_mal1.disabled = true;
//        p6_1_018_mal1.value = '';
//        p6_1_018_total2.disabled = true;
//        p6_1_018_total2.value = '';
//        p6_1_018_buen_estado2.disabled = true;
//        p6_1_018_buen_estado2.value = '';
//        p6_1_018_regular2.disabled = true;
//        p6_1_018_regular2.value = '';
//        p6_1_018_mal2.disabled = true;
//        p6_1_018_mal2.value = '';
//    }
//}
//
//function valida019p6_1() {
//    var p6_1_019_local_si = document.getElementById("p6_1_019_local_si");
//    var p6_1_019_total1 = document.getElementById("p6_1_019_total1");
//    var p6_1_019_buen_estado1 = document.getElementById("p6_1_019_buen_estado1");
//    var p6_1_019_regular1 = document.getElementById("p6_1_019_regular1");
//    var p6_1_019_mal1 = document.getElementById("p6_1_019_mal1");
//    var p6_1_019_total2 = document.getElementById("p6_1_019_total2");
//    var p6_1_019_buen_estado2 = document.getElementById("p6_1_019_buen_estado2");
//    var p6_1_019_regular2 = document.getElementById("p6_1_019_regular2");
//    var p6_1_019_mal2 = document.getElementById("p6_1_019_mal2");
//
//    if (p6_1_019_local_si.checked) {
//        p6_1_019_total1.disabled = false;
//        p6_1_019_buen_estado1.disabled = false;
//        p6_1_019_regular1.disabled = false;
//        p6_1_019_mal1.disabled = false;
//        p6_1_019_total2.disabled = false;
//        p6_1_019_buen_estado2.disabled = false;
//        p6_1_019_regular2.disabled = false;
//        p6_1_019_mal2.disabled = false;
//    } else {
//        p6_1_019_total1.disabled = true;
//        p6_1_019_total1.value = '';
//        p6_1_019_buen_estado1.disabled = true;
//        p6_1_019_buen_estado1.value = '';
//        p6_1_019_regular1.disabled = true;
//        p6_1_019_regular1.value = '';
//        p6_1_019_mal1.disabled = true;
//        p6_1_019_mal1.value = '';
//        p6_1_019_total2.disabled = true;
//        p6_1_019_total2.value = '';
//        p6_1_019_buen_estado2.disabled = true;
//        p6_1_019_buen_estado2.value = '';
//        p6_1_019_regular2.disabled = true;
//        p6_1_019_regular2.value = '';
//        p6_1_019_mal2.disabled = true;
//        p6_1_019_mal2.value = '';
//    }
//}
//
//function valida020p6_1() {
//    var p6_1_020_local_si = document.getElementById("p6_1_020_local_si");
//    var p6_1_020_total1 = document.getElementById("p6_1_020_total1");
//    var p6_1_020_buen_estado1 = document.getElementById("p6_1_020_buen_estado1");
//    var p6_1_020_regular1 = document.getElementById("p6_1_020_regular1");
//    var p6_1_020_mal1 = document.getElementById("p6_1_020_mal1");
//    var p6_1_020_total2 = document.getElementById("p6_1_020_total2");
//    var p6_1_020_buen_estado2 = document.getElementById("p6_1_020_buen_estado2");
//    var p6_1_020_regular2 = document.getElementById("p6_1_020_regular2");
//    var p6_1_020_mal2 = document.getElementById("p6_1_020_mal2");
//
//    if (p6_1_020_local_si.checked) {
//        p6_1_020_total1.disabled = false;
//        p6_1_020_buen_estado1.disabled = false;
//        p6_1_020_regular1.disabled = false;
//        p6_1_020_mal1.disabled = false;
//        p6_1_020_total2.disabled = false;
//        p6_1_020_buen_estado2.disabled = false;
//        p6_1_020_regular2.disabled = false;
//        p6_1_020_mal2.disabled = false;
//    } else {
//        p6_1_020_total1.disabled = true;
//        p6_1_020_total1.value = '';
//        p6_1_020_buen_estado1.disabled = true;
//        p6_1_020_buen_estado1.value = '';
//        p6_1_020_regular1.disabled = true;
//        p6_1_020_regular1.value = '';
//        p6_1_020_mal1.disabled = true;
//        p6_1_020_mal1.value = '';
//        p6_1_020_total2.disabled = true;
//        p6_1_020_total2.value = '';
//        p6_1_020_buen_estado2.disabled = true;
//        p6_1_020_buen_estado2.value = '';
//        p6_1_020_regular2.disabled = true;
//        p6_1_020_regular2.value = '';
//        p6_1_020_mal2.disabled = true;
//        p6_1_020_mal2.value = '';
//    }
//}
//
//function valida021p6_1() {
//    var p6_1_021_local_si = document.getElementById("p6_1_021_local_si");
//    var p6_1_021_total1 = document.getElementById("p6_1_021_total1");
//    var p6_1_021_buen_estado1 = document.getElementById("p6_1_021_buen_estado1");
//    var p6_1_021_regular1 = document.getElementById("p6_1_021_regular1");
//    var p6_1_021_mal1 = document.getElementById("p6_1_021_mal1");
//    var p6_1_021_total2 = document.getElementById("p6_1_021_total2");
//    var p6_1_021_buen_estado2 = document.getElementById("p6_1_021_buen_estado2");
//    var p6_1_021_regular2 = document.getElementById("p6_1_021_regular2");
//    var p6_1_021_mal2 = document.getElementById("p6_1_021_mal2");
//
//    if (p6_1_021_local_si.checked) {
//        p6_1_021_total1.disabled = false;
//        p6_1_021_buen_estado1.disabled = false;
//        p6_1_021_regular1.disabled = false;
//        p6_1_021_mal1.disabled = false;
//        p6_1_021_total2.disabled = false;
//        p6_1_021_buen_estado2.disabled = false;
//        p6_1_021_regular2.disabled = false;
//        p6_1_021_mal2.disabled = false;
//    } else {
//        p6_1_021_total1.disabled = true;
//        p6_1_021_total1.value = '';
//        p6_1_021_buen_estado1.disabled = true;
//        p6_1_021_buen_estado1.value = '';
//        p6_1_021_regular1.disabled = true;
//        p6_1_021_regular1.value = '';
//        p6_1_021_mal1.disabled = true;
//        p6_1_021_mal1.value = '';
//        p6_1_021_total2.disabled = true;
//        p6_1_021_total2.value = '';
//        p6_1_021_buen_estado2.disabled = true;
//        p6_1_021_buen_estado2.value = '';
//        p6_1_021_regular2.disabled = true;
//        p6_1_021_regular2.value = '';
//        p6_1_021_mal2.disabled = true;
//        p6_1_021_mal2.value = '';
//    }
//}
//
//function valida022p6_1() {
//    var p6_1_022_local_si = document.getElementById("p6_1_022_local_si");
//    var p6_1_022_total1 = document.getElementById("p6_1_022_total1");
//    var p6_1_022_buen_estado1 = document.getElementById("p6_1_022_buen_estado1");
//    var p6_1_022_regular1 = document.getElementById("p6_1_022_regular1");
//    var p6_1_022_mal1 = document.getElementById("p6_1_022_mal1");
//    var p6_1_022_total2 = document.getElementById("p6_1_022_total2");
//    var p6_1_022_buen_estado2 = document.getElementById("p6_1_022_buen_estado2");
//    var p6_1_022_regular2 = document.getElementById("p6_1_022_regular2");
//    var p6_1_022_mal2 = document.getElementById("p6_1_022_mal2");
//
//    if (p6_1_022_local_si.checked) {
//        p6_1_022_total1.disabled = false;
//        p6_1_022_buen_estado1.disabled = false;
//        p6_1_022_regular1.disabled = false;
//        p6_1_022_mal1.disabled = false;
//        p6_1_022_total2.disabled = false;
//        p6_1_022_buen_estado2.disabled = false;
//        p6_1_022_regular2.disabled = false;
//        p6_1_022_mal2.disabled = false;
//    } else {
//        p6_1_022_total1.disabled = true;
//        p6_1_022_total1.value = '';
//        p6_1_022_buen_estado1.disabled = true;
//        p6_1_022_buen_estado1.value = '';
//        p6_1_022_regular1.disabled = true;
//        p6_1_022_regular1.value = '';
//        p6_1_022_mal1.disabled = true;
//        p6_1_022_mal1.value = '';
//        p6_1_022_total2.disabled = true;
//        p6_1_022_total2.value = '';
//        p6_1_022_buen_estado2.disabled = true;
//        p6_1_022_buen_estado2.value = '';
//        p6_1_022_regular2.disabled = true;
//        p6_1_022_regular2.value = '';
//        p6_1_022_mal2.disabled = true;
//        p6_1_022_mal2.value = '';
//    }
//}
//
//function valida023p6_1() {
//    var p6_1_023_local_si = document.getElementById("p6_1_023_local_si");
//    var p6_1_023_total1 = document.getElementById("p6_1_023_total1");
//    var p6_1_023_buen_estado1 = document.getElementById("p6_1_023_buen_estado1");
//    var p6_1_023_regular1 = document.getElementById("p6_1_023_regular1");
//    var p6_1_023_mal1 = document.getElementById("p6_1_023_mal1");
//    var p6_1_023_total2 = document.getElementById("p6_1_023_total2");
//    var p6_1_023_buen_estado2 = document.getElementById("p6_1_023_buen_estado2");
//    var p6_1_023_regular2 = document.getElementById("p6_1_023_regular2");
//    var p6_1_023_mal2 = document.getElementById("p6_1_023_mal2");
//
//    if (p6_1_023_local_si.checked) {
//        p6_1_023_total1.disabled = false;
//        p6_1_023_buen_estado1.disabled = false;
//        p6_1_023_regular1.disabled = false;
//        p6_1_023_mal1.disabled = false;
//        p6_1_023_total2.disabled = false;
//        p6_1_023_buen_estado2.disabled = false;
//        p6_1_023_regular2.disabled = false;
//        p6_1_023_mal2.disabled = false;
//    } else {
//        p6_1_023_total1.disabled = true;
//        p6_1_023_total1.value = '';
//        p6_1_023_buen_estado1.disabled = true;
//        p6_1_023_buen_estado1.value = '';
//        p6_1_023_regular1.disabled = true;
//        p6_1_023_regular1.value = '';
//        p6_1_023_mal1.disabled = true;
//        p6_1_023_mal1.value = '';
//        p6_1_023_total2.disabled = true;
//        p6_1_023_total2.value = '';
//        p6_1_023_buen_estado2.disabled = true;
//        p6_1_023_buen_estado2.value = '';
//        p6_1_023_regular2.disabled = true;
//        p6_1_023_regular2.value = '';
//        p6_1_023_mal2.disabled = true;
//        p6_1_023_mal2.value = '';
//    }
//}
//
//function SumAULp6_1() {
//    var p6_1_aul_buen_estado1 = parseInt(document.getElementById('p6_1_aul_buen_estado1').value) || 0;
//    var p6_1_aul_regular1 = parseInt(document.getElementById('p6_1_aul_regular1').value) || 0;
//    var p6_1_aul_mal1 = parseInt(document.getElementById('p6_1_aul_mal1').value) || 0;
//
//    var total = p6_1_aul_buen_estado1 + p6_1_aul_regular1 + p6_1_aul_mal1 ;
//
//    document.getElementById('p6_1_aul_total1').value = total;
//}
//
//function Sum001p6_1() {
//    var p6_1_001_buen_estado1 = parseInt(document.getElementById('p6_1_001_buen_estado1').value) || 0;
//    var p6_1_001_regular1 = parseInt(document.getElementById('p6_1_001_regular1').value) || 0;
//    var p6_1_001_mal1 = parseInt(document.getElementById('p6_1_001_mal1').value) || 0;
//
//    var total = p6_1_001_buen_estado1 + p6_1_001_regular1 + p6_1_001_mal1;
//
//    document.getElementById('p6_1_001_total1').value = total;
//}
//
//function Sum002p6_1() {
//    var p6_1_002_buen_estado1 = parseInt(document.getElementById('p6_1_002_buen_estado1').value) || 0;
//    var p6_1_002_regular1 = parseInt(document.getElementById('p6_1_002_regular1').value) || 0;
//    var p6_1_002_mal1 = parseInt(document.getElementById('p6_1_002_mal1').value) || 0;
//
//    var total = p6_1_002_buen_estado1 + p6_1_002_regular1 + p6_1_002_mal1;
//
//    document.getElementById('p6_1_002_total1').value = total;
//}
//
//function Sum003p6_1() {
//    var p6_1_003_buen_estado1 = parseInt(document.getElementById('p6_1_003_buen_estado1').value) || 0;
//    var p6_1_003_regular1 = parseInt(document.getElementById('p6_1_003_regular1').value) || 0;
//    var p6_1_003_mal1 = parseInt(document.getElementById('p6_1_003_mal1').value) || 0;
//
//    var total = p6_1_003_buen_estado1 + p6_1_003_regular1 + p6_1_003_mal1;
//
//    document.getElementById('p6_1_003_total1').value = total;
//}
//
//function Sum004p6_1() {
//    var p6_1_004_buen_estado1 = parseInt(document.getElementById('p6_1_004_buen_estado1').value) || 0;
//    var p6_1_004_regular1 = parseInt(document.getElementById('p6_1_004_regular1').value) || 0;
//    var p6_1_004_mal1 = parseInt(document.getElementById('p6_1_004_mal1').value) || 0;
//
//    var total = p6_1_004_buen_estado1 + p6_1_004_regular1 + p6_1_004_mal1;
//
//    document.getElementById('p6_1_004_total1').value = total;
//}
//
//function Sum005p6_1() {
//    var p6_1_005_buen_estado1 = parseInt(document.getElementById('p6_1_005_buen_estado1').value) || 0;
//    var p6_1_005_regular1 = parseInt(document.getElementById('p6_1_005_regular1').value) || 0;
//    var p6_1_005_mal1 = parseInt(document.getElementById('p6_1_005_mal1').value) || 0;
//
//    var total = p6_1_005_buen_estado1 + p6_1_005_regular1 + p6_1_005_mal1;
//
//    document.getElementById('p6_1_005_total1').value = total;
//}
//
//function Sum006p6_1() {
//    var p6_1_006_buen_estado1 = parseInt(document.getElementById('p6_1_006_buen_estado1').value) || 0;
//    var p6_1_006_regular1 = parseInt(document.getElementById('p6_1_006_regular1').value) || 0;
//    var p6_1_006_mal1 = parseInt(document.getElementById('p6_1_006_mal1').value) || 0;
//
//    var total = p6_1_006_buen_estado1 + p6_1_006_regular1 + p6_1_006_mal1;
//
//    document.getElementById('p6_1_006_total1').value = total;
//}
//
//function Sum007p6_1() {
//    var p6_1_007_buen_estado1 = parseInt(document.getElementById('p6_1_007_buen_estado1').value) || 0;
//    var p6_1_007_regular1 = parseInt(document.getElementById('p6_1_007_regular1').value) || 0;
//    var p6_1_007_mal1 = parseInt(document.getElementById('p6_1_007_mal1').value) || 0;
//
//    var total = p6_1_007_buen_estado1 + p6_1_007_regular1 + p6_1_007_mal1;
//
//    document.getElementById('p6_1_007_total1').value = total;
//}
//
//function Sum008p6_1() {
//    var p6_1_008_buen_estado1 = parseInt(document.getElementById('p6_1_008_buen_estado1').value) || 0;
//    var p6_1_008_regular1 = parseInt(document.getElementById('p6_1_008_regular1').value) || 0;
//    var p6_1_008_mal1 = parseInt(document.getElementById('p6_1_008_mal1').value) || 0;
//
//    var total = p6_1_008_buen_estado1 + p6_1_008_regular1 + p6_1_008_mal1;
//
//    document.getElementById('p6_1_008_total1').value = total;
//}
//
//function Sum009p6_1() {
//    var p6_1_009_buen_estado1 = parseInt(document.getElementById('p6_1_009_buen_estado1').value) || 0;
//    var p6_1_009_regular1 = parseInt(document.getElementById('p6_1_009_regular1').value) || 0;
//    var p6_1_009_mal1 = parseInt(document.getElementById('p6_1_009_mal1').value) || 0;
//
//    var total = p6_1_009_buen_estado1 + p6_1_009_regular1 + p6_1_009_mal1;
//
//    document.getElementById('p6_1_009_total1').value = total;
//}
//
//function Sum010p6_1() {
//    var p6_1_010_buen_estado1 = parseInt(document.getElementById('p6_1_010_buen_estado1').value) || 0;
//    var p6_1_010_regular1 = parseInt(document.getElementById('p6_1_010_regular1').value) || 0;
//    var p6_1_010_mal1 = parseInt(document.getElementById('p6_1_010_mal1').value) || 0;
//
//    var total = p6_1_010_buen_estado1 + p6_1_010_regular1 + p6_1_010_mal1;
//
//    document.getElementById('p6_1_010_total1').value = total;
//}
//
//function Sum011p6_1() {
//    var p6_1_011_buen_estado1 = parseInt(document.getElementById('p6_1_011_buen_estado1').value) || 0;
//    var p6_1_011_regular1 = parseInt(document.getElementById('p6_1_011_regular1').value) || 0;
//    var p6_1_011_mal1 = parseInt(document.getElementById('p6_1_011_mal1').value) || 0;
//
//    var total = p6_1_011_buen_estado1 + p6_1_011_regular1 + p6_1_011_mal1;
//
//    document.getElementById('p6_1_011_total1').value = total;
//}
//
//function Sum012p6_1() {
//    var p6_1_012_buen_estado1 = parseInt(document.getElementById('p6_1_012_buen_estado1').value) || 0;
//    var p6_1_012_regular1 = parseInt(document.getElementById('p6_1_012_regular1').value) || 0;
//    var p6_1_012_mal1 = parseInt(document.getElementById('p6_1_012_mal1').value) || 0;
//
//    var total = p6_1_012_buen_estado1 + p6_1_012_regular1 + p6_1_012_mal1;
//
//    document.getElementById('p6_1_012_total1').value = total;
//}
//
//function Sum013p6_1() {
//    var p6_1_013_buen_estado1 = parseInt(document.getElementById('p6_1_013_buen_estado1').value) || 0;
//    var p6_1_013_regular1 = parseInt(document.getElementById('p6_1_013_regular1').value) || 0;
//    var p6_1_013_mal1 = parseInt(document.getElementById('p6_1_013_mal1').value) || 0;
//
//    var total = p6_1_013_buen_estado1 + p6_1_013_regular1 + p6_1_013_mal1;
//
//    document.getElementById('p6_1_013_total1').value = total;
//}
//
//function Sum014p6_1() {
//    var p6_1_014_buen_estado1 = parseInt(document.getElementById('p6_1_014_buen_estado1').value) || 0;
//    var p6_1_014_regular1 = parseInt(document.getElementById('p6_1_014_regular1').value) || 0;
//    var p6_1_014_mal1 = parseInt(document.getElementById('p6_1_014_mal1').value) || 0;
//
//    var total = p6_1_014_buen_estado1 + p6_1_014_regular1 + p6_1_014_mal1;
//
//    document.getElementById('p6_1_014_total1').value = total;
//}
//
//function Sum015p6_1() {
//    var p6_1_015_buen_estado1 = parseInt(document.getElementById('p6_1_015_buen_estado1').value) || 0;
//    var p6_1_015_regular1 = parseInt(document.getElementById('p6_1_015_regular1').value) || 0;
//    var p6_1_015_mal1 = parseInt(document.getElementById('p6_1_015_mal1').value) || 0;
//
//    var total = p6_1_015_buen_estado1 + p6_1_015_regular1 + p6_1_015_mal1;
//
//    document.getElementById('p6_1_015_total1').value = total;
//}
//
//function Sum016p6_1() {
//    var p6_1_016_buen_estado1 = parseInt(document.getElementById('p6_1_016_buen_estado1').value) || 0;
//    var p6_1_016_regular1 = parseInt(document.getElementById('p6_1_016_regular1').value) || 0;
//    var p6_1_016_mal1 = parseInt(document.getElementById('p6_1_016_mal1').value) || 0;
//
//    var total = p6_1_016_buen_estado1 + p6_1_016_regular1 + p6_1_016_mal1;
//
//    document.getElementById('p6_1_016_total1').value = total;
//}
//
//function Sum017p6_1() {
//    var p6_1_017_buen_estado1 = parseInt(document.getElementById('p6_1_017_buen_estado1').value) || 0;
//    var p6_1_017_regular1 = parseInt(document.getElementById('p6_1_017_regular1').value) || 0;
//    var p6_1_017_mal1 = parseInt(document.getElementById('p6_1_017_mal1').value) || 0;
//
//    var total = p6_1_017_buen_estado1 + p6_1_017_regular1 + p6_1_017_mal1;
//
//    document.getElementById('p6_1_017_total1').value = total;
//}
//
//function Sum018p6_1() {
//    var p6_1_018_buen_estado1 = parseInt(document.getElementById('p6_1_018_buen_estado1').value) || 0;
//    var p6_1_018_regular1 = parseInt(document.getElementById('p6_1_018_regular1').value) || 0;
//    var p6_1_018_mal1 = parseInt(document.getElementById('p6_1_018_mal1').value) || 0;
//
//    var total = p6_1_018_buen_estado1 + p6_1_018_regular1 + p6_1_018_mal1;
//
//    document.getElementById('p6_1_018_total1').value = total;
//}
//
//function Sum019p6_1() {
//    var p6_1_019_buen_estado1 = parseInt(document.getElementById('p6_1_019_buen_estado1').value) || 0;
//    var p6_1_019_regular1 = parseInt(document.getElementById('p6_1_019_regular1').value) || 0;
//    var p6_1_019_mal1 = parseInt(document.getElementById('p6_1_019_mal1').value) || 0;
//
//    var total = p6_1_019_buen_estado1 + p6_1_019_regular1 + p6_1_019_mal1;
//
//    document.getElementById('p6_1_019_total1').value = total;
//}
//
//function Sum020p6_1() {
//    var p6_1_020_buen_estado1 = parseInt(document.getElementById('p6_1_020_buen_estado1').value) || 0;
//    var p6_1_020_regular1 = parseInt(document.getElementById('p6_1_020_regular1').value) || 0;
//    var p6_1_020_mal1 = parseInt(document.getElementById('p6_1_020_mal1').value) || 0;
//
//    var total = p6_1_020_buen_estado1 + p6_1_020_regular1 + p6_1_020_mal1;
//
//    document.getElementById('p6_1_020_total1').value = total;
//}
//
//function Sum021p6_1() {
//    var p6_1_021_buen_estado1 = parseInt(document.getElementById('p6_1_021_buen_estado1').value) || 0;
//    var p6_1_021_regular1 = parseInt(document.getElementById('p6_1_021_regular1').value) || 0;
//    var p6_1_021_mal1 = parseInt(document.getElementById('p6_1_021_mal1').value) || 0;
//
//    var total = p6_1_021_buen_estado1 + p6_1_021_regular1 + p6_1_021_mal1;
//
//    document.getElementById('p6_1_021_total1').value = total;
//}
//
//function Sum022p6_1() {
//    var p6_1_022_buen_estado1 = parseInt(document.getElementById('p6_1_022_buen_estado1').value) || 0;
//    var p6_1_022_regular1 = parseInt(document.getElementById('p6_1_022_regular1').value) || 0;
//    var p6_1_022_mal1 = parseInt(document.getElementById('p6_1_022_mal1').value) || 0;
//
//    var total = p6_1_022_buen_estado1 + p6_1_022_regular1 + p6_1_022_mal1;
//
//    document.getElementById('p6_1_022_total1').value = total;
//}
//
//function Sum023p6_1() {
//    var p6_1_023_buen_estado1 = parseInt(document.getElementById('p6_1_023_buen_estado1').value) || 0;
//    var p6_1_023_regular1 = parseInt(document.getElementById('p6_1_023_regular1').value) || 0;
//    var p6_1_023_mal1 = parseInt(document.getElementById('p6_1_023_mal1').value) || 0;
//
//    var total = p6_1_023_buen_estado1 + p6_1_023_regular1 + p6_1_023_mal1;
//
//    document.getElementById('p6_1_023_total1').value = total;
//}
//////////////////////////////////////
//function SumAUL_2p6_1() {
//    var p6_1_aul_buen_estado2 = parseInt(document.getElementById('p6_1_aul_buen_estado2').value) || 0;
//    var p6_1_aul_regular2 = parseInt(document.getElementById('p6_1_aul_regular2').value) || 0;
//    var p6_1_aul_mal2 = parseInt(document.getElementById('p6_1_aul_mal2').value) || 0;
//
//    var total = p6_1_aul_buen_estado2 + p6_1_aul_regular2 + p6_1_aul_mal2 ;
//
//    document.getElementById('p6_1_aul_total2').value = total;
//}
//function Sum001_2p6_1() {
//    var p6_1_001_buen_estado2 = parseInt(document.getElementById('p6_1_001_buen_estado2').value) || 0;
//    var p6_1_001_regular2 = parseInt(document.getElementById('p6_1_001_regular2').value) || 0;
//    var p6_1_001_mal2 = parseInt(document.getElementById('p6_1_001_mal2').value) || 0;
//
//    var total = p6_1_001_buen_estado2 + p6_1_001_regular2 + p6_1_001_mal2;
//
//    document.getElementById('p6_1_001_total2').value = total;
//}
//
//function Sum002_2p6_1() {
//    var p6_1_002_buen_estado2 = parseInt(document.getElementById('p6_1_002_buen_estado2').value) || 0;
//    var p6_1_002_regular2 = parseInt(document.getElementById('p6_1_002_regular2').value) || 0;
//    var p6_1_002_mal2 = parseInt(document.getElementById('p6_1_002_mal2').value) || 0;
//
//    var total = p6_1_002_buen_estado2 + p6_1_002_regular2 + p6_1_002_mal2;
//
//    document.getElementById('p6_1_002_total2').value = total;
//}
//
//function Sum003_2p6_1() {
//    var p6_1_003_buen_estado2 = parseInt(document.getElementById('p6_1_003_buen_estado2').value) || 0;
//    var p6_1_003_regular2 = parseInt(document.getElementById('p6_1_003_regular2').value) || 0;
//    var p6_1_003_mal2 = parseInt(document.getElementById('p6_1_003_mal2').value) || 0;
//
//    var total = p6_1_003_buen_estado2 + p6_1_003_regular2 + p6_1_003_mal2;
//
//    document.getElementById('p6_1_003_total2').value = total;
//}
//
//function Sum004_2p6_1() {
//    var p6_1_004_buen_estado2 = parseInt(document.getElementById('p6_1_004_buen_estado2').value) || 0;
//    var p6_1_004_regular2 = parseInt(document.getElementById('p6_1_004_regular2').value) || 0;
//    var p6_1_004_mal2 = parseInt(document.getElementById('p6_1_004_mal2').value) || 0;
//
//    var total = p6_1_004_buen_estado2 + p6_1_004_regular2 + p6_1_004_mal2;
//
//    document.getElementById('p6_1_004_total2').value = total;
//}
//
//function Sum005_2p6_1() {
//    var p6_1_005_buen_estado2 = parseInt(document.getElementById('p6_1_005_buen_estado2').value) || 0;
//    var p6_1_005_regular2 = parseInt(document.getElementById('p6_1_005_regular2').value) || 0;
//    var p6_1_005_mal2 = parseInt(document.getElementById('p6_1_005_mal2').value) || 0;
//
//    var total = p6_1_005_buen_estado2 + p6_1_005_regular2 + p6_1_005_mal2;
//
//    document.getElementById('p6_1_005_total2').value = total;
//}
//
//function Sum006_2p6_1() {
//    var p6_1_006_buen_estado2 = parseInt(document.getElementById('p6_1_006_buen_estado2').value) || 0;
//    var p6_1_006_regular2 = parseInt(document.getElementById('p6_1_006_regular2').value) || 0;
//    var p6_1_006_mal2 = parseInt(document.getElementById('p6_1_006_mal2').value) || 0;
//
//    var total = p6_1_006_buen_estado2 + p6_1_006_regular2 + p6_1_006_mal2;
//
//    document.getElementById('p6_1_006_total2').value = total;
//}
//
//function Sum007_2p6_1() {
//    var p6_1_007_buen_estado2 = parseInt(document.getElementById('p6_1_007_buen_estado2').value) || 0;
//    var p6_1_007_regular2 = parseInt(document.getElementById('p6_1_007_regular2').value) || 0;
//    var p6_1_007_mal2 = parseInt(document.getElementById('p6_1_007_mal2').value) || 0;
//
//    var total = p6_1_007_buen_estado2 + p6_1_007_regular2 + p6_1_007_mal2;
//
//    document.getElementById('p6_1_007_total2').value = total;
//}
//
//function Sum008_2p6_1() {
//    var p6_1_008_buen_estado2 = parseInt(document.getElementById('p6_1_008_buen_estado2').value) || 0;
//    var p6_1_008_regular2 = parseInt(document.getElementById('p6_1_008_regular2').value) || 0;
//    var p6_1_008_mal2 = parseInt(document.getElementById('p6_1_008_mal2').value) || 0;
//
//    var total = p6_1_008_buen_estado2 + p6_1_008_regular2 + p6_1_008_mal2;
//
//    document.getElementById('p6_1_008_total2').value = total;
//}
//
//function Sum009_2p6_1() {
//    var p6_1_009_buen_estado2 = parseInt(document.getElementById('p6_1_009_buen_estado2').value) || 0;
//    var p6_1_009_regular2 = parseInt(document.getElementById('p6_1_009_regular2').value) || 0;
//    var p6_1_009_mal2 = parseInt(document.getElementById('p6_1_009_mal2').value) || 0;
//
//    var total = p6_1_009_buen_estado2 + p6_1_009_regular2 + p6_1_009_mal2;
//
//    document.getElementById('p6_1_009_total2').value = total;
//}
//
//function Sum010_2p6_1() {
//    var p6_1_010_buen_estado2 = parseInt(document.getElementById('p6_1_010_buen_estado2').value) || 0;
//    var p6_1_010_regular2 = parseInt(document.getElementById('p6_1_010_regular2').value) || 0;
//    var p6_1_010_mal2 = parseInt(document.getElementById('p6_1_010_mal2').value) || 0;
//
//    var total = p6_1_010_buen_estado2 + p6_1_010_regular2 + p6_1_010_mal2;
//
//    document.getElementById('p6_1_010_total2').value = total;
//}
//
//function Sum011_2p6_1() {
//    var p6_1_011_buen_estado2 = parseInt(document.getElementById('p6_1_011_buen_estado2').value) || 0;
//    var p6_1_011_regular2 = parseInt(document.getElementById('p6_1_011_regular2').value) || 0;
//    var p6_1_011_mal2 = parseInt(document.getElementById('p6_1_011_mal2').value) || 0;
//
//    var total = p6_1_011_buen_estado2 + p6_1_011_regular2 + p6_1_011_mal2;
//
//    document.getElementById('p6_1_011_total2').value = total;
//}
//
//function Sum012_2p6_1() {
//    var p6_1_012_buen_estado2 = parseInt(document.getElementById('p6_1_012_buen_estado2').value) || 0;
//    var p6_1_012_regular2 = parseInt(document.getElementById('p6_1_012_regular2').value) || 0;
//    var p6_1_012_mal2 = parseInt(document.getElementById('p6_1_012_mal2').value) || 0;
//
//    var total = p6_1_012_buen_estado2 + p6_1_012_regular2 + p6_1_012_mal2;
//
//    document.getElementById('p6_1_012_total2').value = total;
//}
//
//function Sum013_2p6_1() {
//    var p6_1_013_buen_estado2 = parseInt(document.getElementById('p6_1_013_buen_estado2').value) || 0;
//    var p6_1_013_regular2 = parseInt(document.getElementById('p6_1_013_regular2').value) || 0;
//    var p6_1_013_mal2 = parseInt(document.getElementById('p6_1_013_mal2').value) || 0;
//
//    var total = p6_1_013_buen_estado2 + p6_1_013_regular2 + p6_1_013_mal2;
//
//    document.getElementById('p6_1_013_total2').value = total;
//}
//
//function Sum014_2p6_1() {
//    var p6_1_014_buen_estado2 = parseInt(document.getElementById('p6_1_014_buen_estado2').value) || 0;
//    var p6_1_014_regular2 = parseInt(document.getElementById('p6_1_014_regular2').value) || 0;
//    var p6_1_014_mal2 = parseInt(document.getElementById('p6_1_014_mal2').value) || 0;
//
//    var total = p6_1_014_buen_estado2 + p6_1_014_regular2 + p6_1_014_mal2;
//
//    document.getElementById('p6_1_014_total2').value = total;
//}
//
//function Sum015_2p6_1() {
//    var p6_1_015_buen_estado2 = parseInt(document.getElementById('p6_1_015_buen_estado2').value) || 0;
//    var p6_1_015_regular2 = parseInt(document.getElementById('p6_1_015_regular2').value) || 0;
//    var p6_1_015_mal2 = parseInt(document.getElementById('p6_1_015_mal2').value) || 0;
//
//    var total = p6_1_015_buen_estado2 + p6_1_015_regular2 + p6_1_015_mal2;
//
//    document.getElementById('p6_1_015_total2').value = total;
//}
//
//function Sum016_2p6_1() {
//    var p6_1_016_buen_estado2 = parseInt(document.getElementById('p6_1_016_buen_estado2').value) || 0;
//    var p6_1_016_regular2 = parseInt(document.getElementById('p6_1_016_regular2').value) || 0;
//    var p6_1_016_mal2 = parseInt(document.getElementById('p6_1_016_mal2').value) || 0;
//
//    var total = p6_1_016_buen_estado2 + p6_1_016_regular2 + p6_1_016_mal2;
//
//    document.getElementById('p6_1_016_total2').value = total;
//}
//
//function Sum017_2p6_1() {
//    var p6_1_017_buen_estado2 = parseInt(document.getElementById('p6_1_017_buen_estado2').value) || 0;
//    var p6_1_017_regular2 = parseInt(document.getElementById('p6_1_017_regular2').value) || 0;
//    var p6_1_017_mal2 = parseInt(document.getElementById('p6_1_017_mal2').value) || 0;
//
//    var total = p6_1_017_buen_estado2 + p6_1_017_regular2 + p6_1_017_mal2;
//
//    document.getElementById('p6_1_017_total2').value = total;
//}
//
//function Sum018_2p6_1() {
//    var p6_1_018_buen_estado2 = parseInt(document.getElementById('p6_1_018_buen_estado2').value) || 0;
//    var p6_1_018_regular2 = parseInt(document.getElementById('p6_1_018_regular2').value) || 0;
//    var p6_1_018_mal2 = parseInt(document.getElementById('p6_1_018_mal2').value) || 0;
//
//    var total = p6_1_018_buen_estado2 + p6_1_018_regular2 + p6_1_018_mal2;
//
//    document.getElementById('p6_1_018_total2').value = total;
//}
//
//function Sum019_2p6_1() {
//    var p6_1_019_buen_estado2 = parseInt(document.getElementById('p6_1_019_buen_estado2').value) || 0;
//    var p6_1_019_regular2 = parseInt(document.getElementById('p6_1_019_regular2').value) || 0;
//    var p6_1_019_mal2 = parseInt(document.getElementById('p6_1_019_mal2').value) || 0;
//
//    var total = p6_1_019_buen_estado2 + p6_1_019_regular2 + p6_1_019_mal2;
//
//    document.getElementById('p6_1_019_total2').value = total;
//}
//
//function Sum020_2p6_1() {
//    var p6_1_020_buen_estado2 = parseInt(document.getElementById('p6_1_020_buen_estado2').value) || 0;
//    var p6_1_020_regular2 = parseInt(document.getElementById('p6_1_020_regular2').value) || 0;
//    var p6_1_020_mal2 = parseInt(document.getElementById('p6_1_020_mal2').value) || 0;
//
//    var total = p6_1_020_buen_estado2 + p6_1_020_regular2 + p6_1_020_mal2;
//
//    document.getElementById('p6_1_020_total2').value = total;
//}
//
//function Sum021_2p6_1() {
//    var p6_1_021_buen_estado2 = parseInt(document.getElementById('p6_1_021_buen_estado2').value) || 0;
//    var p6_1_021_regular2 = parseInt(document.getElementById('p6_1_021_regular2').value) || 0;
//    var p6_1_021_mal2 = parseInt(document.getElementById('p6_1_021_mal2').value) || 0;
//
//    var total = p6_1_021_buen_estado2 + p6_1_021_regular2 + p6_1_021_mal2;
//
//    document.getElementById('p6_1_021_total2').value = total;
//}
//
//function Sum022_2p6_1() {
//    var p6_1_022_buen_estado2 = parseInt(document.getElementById('p6_1_022_buen_estado2').value) || 0;
//    var p6_1_022_regular2 = parseInt(document.getElementById('p6_1_022_regular2').value) || 0;
//    var p6_1_022_mal2 = parseInt(document.getElementById('p6_1_022_mal2').value) || 0;
//
//    var total = p6_1_022_buen_estado2 + p6_1_022_regular2 + p6_1_022_mal2;
//
//    document.getElementById('p6_1_022_total2').value = total;
//}
//
//function Sum023_2p6_1() {
//    var p6_1_023_buen_estado2 = parseInt(document.getElementById('p6_1_023_buen_estado2').value) || 0;
//    var p6_1_023_regular2 = parseInt(document.getElementById('p6_1_023_regular2').value) || 0;
//    var p6_1_023_mal2 = parseInt(document.getElementById('p6_1_023_mal2').value) || 0;
//
//    var total = p6_1_023_buen_estado2 + p6_1_023_regular2 + p6_1_023_mal2;
//
//    document.getElementById('p6_1_023_total2').value = total;
//}
//
//
//
/////////////6_2////////////////////////////////
//
//function valida001p6_2() {
//    var p6_2_001_local_si = document.getElementById("p6_2_001_local_si");
//    var p6_2_001_total1 = document.getElementById("p6_2_001_total1");
//    var p6_2_001_buen_estado1 = document.getElementById("p6_2_001_buen_estado1");
//    var p6_2_001_regular1 = document.getElementById("p6_2_001_regular1");
//    var p6_2_001_mal1 = document.getElementById("p6_2_001_mal1");
//    var p6_2_001_total2 = document.getElementById("p6_2_001_total2");
//    var p6_2_001_buen_estado2 = document.getElementById("p6_2_001_buen_estado2");
//    var p6_2_001_regular2 = document.getElementById("p6_2_001_regular2");
//    var p6_2_001_mal2 = document.getElementById("p6_2_001_mal2");
//
//    if (p6_2_001_local_si.checked) {
//        p6_2_001_total1.disabled = false;
//        p6_2_001_buen_estado1.disabled = false;
//        p6_2_001_regular1.disabled = false;
//        p6_2_001_mal1.disabled = false;
//        p6_2_001_total2.disabled = false;
//        p6_2_001_buen_estado2.disabled = false;
//        p6_2_001_regular2.disabled = false;
//        p6_2_001_mal2.disabled = false;
//    } else {
//        p6_2_001_total1.disabled = true;
//        p6_2_001_total1.value = '';
//        p6_2_001_buen_estado1.disabled = true;
//        p6_2_001_buen_estado1.value = '';
//        p6_2_001_regular1.disabled = true;
//        p6_2_001_regular1.value = '';
//        p6_2_001_mal1.disabled = true;
//        p6_2_001_mal1.value = '';
//        p6_2_001_total2.disabled = true;
//        p6_2_001_total2.value = '';
//        p6_2_001_buen_estado2.disabled = true;
//        p6_2_001_buen_estado2.value = '';
//        p6_2_001_regular2.disabled = true;
//        p6_2_001_regular2.value = '';
//        p6_2_001_mal2.disabled = true;
//        p6_2_001_mal2.value = '';
//    }
//}
//
//function valida002p6_2() {
//    var p6_2_002_local_si = document.getElementById("p6_2_002_local_si");
//    var p6_2_002_total1 = document.getElementById("p6_2_002_total1");
//    var p6_2_002_buen_estado1 = document.getElementById("p6_2_002_buen_estado1");
//    var p6_2_002_regular1 = document.getElementById("p6_2_002_regular1");
//    var p6_2_002_mal1 = document.getElementById("p6_2_002_mal1");
//    var p6_2_002_total2 = document.getElementById("p6_2_002_total2");
//    var p6_2_002_buen_estado2 = document.getElementById("p6_2_002_buen_estado2");
//    var p6_2_002_regular2 = document.getElementById("p6_2_002_regular2");
//    var p6_2_002_mal2 = document.getElementById("p6_2_002_mal2");
//
//    if (p6_2_002_local_si.checked) {
//        p6_2_002_total1.disabled = false;
//        p6_2_002_buen_estado1.disabled = false;
//        p6_2_002_regular1.disabled = false;
//        p6_2_002_mal1.disabled = false;
//        p6_2_002_total2.disabled = false;
//        p6_2_002_buen_estado2.disabled = false;
//        p6_2_002_regular2.disabled = false;
//        p6_2_002_mal2.disabled = false;
//    } else {
//        p6_2_002_total1.disabled = true;
//        p6_2_002_total1.value = '';
//        p6_2_002_buen_estado1.disabled = true;
//        p6_2_002_buen_estado1.value = '';
//        p6_2_002_regular1.disabled = true;
//        p6_2_002_regular1.value = '';
//        p6_2_002_mal1.disabled = true;
//        p6_2_002_mal1.value = '';
//        p6_2_002_total2.disabled = true;
//        p6_2_002_total2.value = '';
//        p6_2_002_buen_estado2.disabled = true;
//        p6_2_002_buen_estado2.value = '';
//        p6_2_002_regular2.disabled = true;
//        p6_2_002_regular2.value = '';
//        p6_2_002_mal2.disabled = true;
//        p6_2_002_mal2.value = '';
//    }
//}
//function valida003p6_2() {
//    var p6_2_003_local_si = document.getElementById("p6_2_003_local_si");
//    var p6_2_003_total1 = document.getElementById("p6_2_003_total1");
//    var p6_2_003_buen_estado1 = document.getElementById("p6_2_003_buen_estado1");
//    var p6_2_003_regular1 = document.getElementById("p6_2_003_regular1");
//    var p6_2_003_mal1 = document.getElementById("p6_2_003_mal1");
//    var p6_2_003_total2 = document.getElementById("p6_2_003_total2");
//    var p6_2_003_buen_estado2 = document.getElementById("p6_2_003_buen_estado2");
//    var p6_2_003_regular2 = document.getElementById("p6_2_003_regular2");
//    var p6_2_003_mal2 = document.getElementById("p6_2_003_mal2");
//
//    if (p6_2_003_local_si.checked) {
//        p6_2_003_total1.disabled = false;
//        p6_2_003_buen_estado1.disabled = false;
//        p6_2_003_regular1.disabled = false;
//        p6_2_003_mal1.disabled = false;
//        p6_2_003_total2.disabled = false;
//        p6_2_003_buen_estado2.disabled = false;
//        p6_2_003_regular2.disabled = false;
//        p6_2_003_mal2.disabled = false;
//    } else {
//        p6_2_003_total1.disabled = true;
//        p6_2_003_total1.value = '';
//        p6_2_003_buen_estado1.disabled = true;
//        p6_2_003_buen_estado1.value = '';
//        p6_2_003_regular1.disabled = true;
//        p6_2_003_regular1.value = '';
//        p6_2_003_mal1.disabled = true;
//        p6_2_003_mal1.value = '';
//        p6_2_003_total2.disabled = true;
//        p6_2_003_total2.value = '';
//        p6_2_003_buen_estado2.disabled = true;
//        p6_2_003_buen_estado2.value = '';
//        p6_2_003_regular2.disabled = true;
//        p6_2_003_regular2.value = '';
//        p6_2_003_mal2.disabled = true;
//        p6_2_003_mal2.value = '';
//    }
//}
//function valida004p6_2() {
//    var p6_2_004_local_si = document.getElementById("p6_2_004_local_si");
//    var p6_2_004_total1 = document.getElementById("p6_2_004_total1");
//    var p6_2_004_buen_estado1 = document.getElementById("p6_2_004_buen_estado1");
//    var p6_2_004_regular1 = document.getElementById("p6_2_004_regular1");
//    var p6_2_004_mal1 = document.getElementById("p6_2_004_mal1");
//    var p6_2_004_total2 = document.getElementById("p6_2_004_total2");
//    var p6_2_004_buen_estado2 = document.getElementById("p6_2_004_buen_estado2");
//    var p6_2_004_regular2 = document.getElementById("p6_2_004_regular2");
//    var p6_2_004_mal2 = document.getElementById("p6_2_004_mal2");
//
//    if (p6_2_004_local_si.checked) {
//        p6_2_004_total1.disabled = false;
//        p6_2_004_buen_estado1.disabled = false;
//        p6_2_004_regular1.disabled = false;
//        p6_2_004_mal1.disabled = false;
//        p6_2_004_total2.disabled = false;
//        p6_2_004_buen_estado2.disabled = false;
//        p6_2_004_regular2.disabled = false;
//        p6_2_004_mal2.disabled = false;
//    } else {
//        p6_2_004_total1.disabled = true;
//        p6_2_004_total1.value = '';
//        p6_2_004_buen_estado1.disabled = true;
//        p6_2_004_buen_estado1.value = '';
//        p6_2_004_regular1.disabled = true;
//        p6_2_004_regular1.value = '';
//        p6_2_004_mal1.disabled = true;
//        p6_2_004_mal1.value = '';
//        p6_2_004_total2.disabled = true;
//        p6_2_004_total2.value = '';
//        p6_2_004_buen_estado2.disabled = true;
//        p6_2_004_buen_estado2.value = '';
//        p6_2_004_regular2.disabled = true;
//        p6_2_004_regular2.value = '';
//        p6_2_004_mal2.disabled = true;
//        p6_2_004_mal2.value = '';
//    }
//}
//function valida005p6_2() {
//    var p6_2_005_local_si = document.getElementById("p6_2_005_local_si");
//    var p6_2_005_total1 = document.getElementById("p6_2_005_total1");
//    var p6_2_005_buen_estado1 = document.getElementById("p6_2_005_buen_estado1");
//    var p6_2_005_regular1 = document.getElementById("p6_2_005_regular1");
//    var p6_2_005_mal1 = document.getElementById("p6_2_005_mal1");
//    var p6_2_005_total2 = document.getElementById("p6_2_005_total2");
//    var p6_2_005_buen_estado2 = document.getElementById("p6_2_005_buen_estado2");
//    var p6_2_005_regular2 = document.getElementById("p6_2_005_regular2");
//    var p6_2_005_mal2 = document.getElementById("p6_2_005_mal2");
//
//    if (p6_2_005_local_si.checked) {
//        p6_2_005_total1.disabled = false;
//        p6_2_005_buen_estado1.disabled = false;
//        p6_2_005_regular1.disabled = false;
//        p6_2_005_mal1.disabled = false;
//        p6_2_005_total2.disabled = false;
//        p6_2_005_buen_estado2.disabled = false;
//        p6_2_005_regular2.disabled = false;
//        p6_2_005_mal2.disabled = false;
//    } else {
//        p6_2_005_total1.disabled = true;
//        p6_2_005_total1.value = '';
//        p6_2_005_buen_estado1.disabled = true;
//        p6_2_005_buen_estado1.value = '';
//        p6_2_005_regular1.disabled = true;
//        p6_2_005_regular1.value = '';
//        p6_2_005_mal1.disabled = true;
//        p6_2_005_mal1.value = '';
//        p6_2_005_total2.disabled = true;
//        p6_2_005_total2.value = '';
//        p6_2_005_buen_estado2.disabled = true;
//        p6_2_005_buen_estado2.value = '';
//        p6_2_005_regular2.disabled = true;
//        p6_2_005_regular2.value = '';
//        p6_2_005_mal2.disabled = true;
//        p6_2_005_mal2.value = '';
//    }
//}
//function valida006p6_2() {
//    var p6_2_006_local_si = document.getElementById("p6_2_006_local_si");
//    var p6_2_006_total1 = document.getElementById("p6_2_006_total1");
//    var p6_2_006_buen_estado1 = document.getElementById("p6_2_006_buen_estado1");
//    var p6_2_006_regular1 = document.getElementById("p6_2_006_regular1");
//    var p6_2_006_mal1 = document.getElementById("p6_2_006_mal1");
//    var p6_2_006_total2 = document.getElementById("p6_2_006_total2");
//    var p6_2_006_buen_estado2 = document.getElementById("p6_2_006_buen_estado2");
//    var p6_2_006_regular2 = document.getElementById("p6_2_006_regular2");
//    var p6_2_006_mal2 = document.getElementById("p6_2_006_mal2");
//
//    if (p6_2_006_local_si.checked) {
//        p6_2_006_total1.disabled = false;
//        p6_2_006_buen_estado1.disabled = false;
//        p6_2_006_regular1.disabled = false;
//        p6_2_006_mal1.disabled = false;
//        p6_2_006_total2.disabled = false;
//        p6_2_006_buen_estado2.disabled = false;
//        p6_2_006_regular2.disabled = false;
//        p6_2_006_mal2.disabled = false;
//    } else {
//        p6_2_006_total1.disabled = true;
//        p6_2_006_total1.value = '';
//        p6_2_006_buen_estado1.disabled = true;
//        p6_2_006_buen_estado1.value = '';
//        p6_2_006_regular1.disabled = true;
//        p6_2_006_regular1.value = '';
//        p6_2_006_mal1.disabled = true;
//        p6_2_006_mal1.value = '';
//        p6_2_006_total2.disabled = true;
//        p6_2_006_total2.value = '';
//        p6_2_006_buen_estado2.disabled = true;
//        p6_2_006_buen_estado2.value = '';
//        p6_2_006_regular2.disabled = true;
//        p6_2_006_regular2.value = '';
//        p6_2_006_mal2.disabled = true;
//        p6_2_006_mal2.value = '';
//    }
//}
//function valida007p6_2() {
//    var p6_2_007_local_si = document.getElementById("p6_2_007_local_si");
//    var p6_2_007_total1 = document.getElementById("p6_2_007_total1");
//    var p6_2_007_buen_estado1 = document.getElementById("p6_2_007_buen_estado1");
//    var p6_2_007_regular1 = document.getElementById("p6_2_007_regular1");
//    var p6_2_007_mal1 = document.getElementById("p6_2_007_mal1");
//    var p6_2_007_total2 = document.getElementById("p6_2_007_total2");
//    var p6_2_007_buen_estado2 = document.getElementById("p6_2_007_buen_estado2");
//    var p6_2_007_regular2 = document.getElementById("p6_2_007_regular2");
//    var p6_2_007_mal2 = document.getElementById("p6_2_007_mal2");
//
//    if (p6_2_007_local_si.checked) {
//        p6_2_007_total1.disabled = false;
//        p6_2_007_buen_estado1.disabled = false;
//        p6_2_007_regular1.disabled = false;
//        p6_2_007_mal1.disabled = false;
//        p6_2_007_total2.disabled = false;
//        p6_2_007_buen_estado2.disabled = false;
//        p6_2_007_regular2.disabled = false;
//        p6_2_007_mal2.disabled = false;
//    } else {
//        p6_2_007_total1.disabled = true;
//        p6_2_007_total1.value = '';
//        p6_2_007_buen_estado1.disabled = true;
//        p6_2_007_buen_estado1.value = '';
//        p6_2_007_regular1.disabled = true;
//        p6_2_007_regular1.value = '';
//        p6_2_007_mal1.disabled = true;
//        p6_2_007_mal1.value = '';
//        p6_2_007_total2.disabled = true;
//        p6_2_007_total2.value = '';
//        p6_2_007_buen_estado2.disabled = true;
//        p6_2_007_buen_estado2.value = '';
//        p6_2_007_regular2.disabled = true;
//        p6_2_007_regular2.value = '';
//        p6_2_007_mal2.disabled = true;
//        p6_2_007_mal2.value = '';
//    }
//}
//function valida008p6_2() {
//    var p6_2_008_local_si = document.getElementById("p6_2_008_local_si");
//    var p6_2_008_total1 = document.getElementById("p6_2_008_total1");
//    var p6_2_008_buen_estado1 = document.getElementById("p6_2_008_buen_estado1");
//    var p6_2_008_regular1 = document.getElementById("p6_2_008_regular1");
//    var p6_2_008_mal1 = document.getElementById("p6_2_008_mal1");
//    var p6_2_008_total2 = document.getElementById("p6_2_008_total2");
//    var p6_2_008_buen_estado2 = document.getElementById("p6_2_008_buen_estado2");
//    var p6_2_008_regular2 = document.getElementById("p6_2_008_regular2");
//    var p6_2_008_mal2 = document.getElementById("p6_2_008_mal2");
//
//    if (p6_2_008_local_si.checked) {
//        p6_2_008_total1.disabled = false;
//        p6_2_008_buen_estado1.disabled = false;
//        p6_2_008_regular1.disabled = false;
//        p6_2_008_mal1.disabled = false;
//        p6_2_008_total2.disabled = false;
//        p6_2_008_buen_estado2.disabled = false;
//        p6_2_008_regular2.disabled = false;
//        p6_2_008_mal2.disabled = false;
//    } else {
//        p6_2_008_total1.disabled = true;
//        p6_2_008_total1.value = '';
//        p6_2_008_buen_estado1.disabled = true;
//        p6_2_008_buen_estado1.value = '';
//        p6_2_008_regular1.disabled = true;
//        p6_2_008_regular1.value = '';
//        p6_2_008_mal1.disabled = true;
//        p6_2_008_mal1.value = '';
//        p6_2_008_total2.disabled = true;
//        p6_2_008_total2.value = '';
//        p6_2_008_buen_estado2.disabled = true;
//        p6_2_008_buen_estado2.value = '';
//        p6_2_008_regular2.disabled = true;
//        p6_2_008_regular2.value = '';
//        p6_2_008_mal2.disabled = true;
//        p6_2_008_mal2.value = '';
//    }
//}
//function valida009p6_2() {
//    var p6_2_009_local_si = document.getElementById("p6_2_009_local_si");
//    var p6_2_009_total1 = document.getElementById("p6_2_009_total1");
//    var p6_2_009_buen_estado1 = document.getElementById("p6_2_009_buen_estado1");
//    var p6_2_009_regular1 = document.getElementById("p6_2_009_regular1");
//    var p6_2_009_mal1 = document.getElementById("p6_2_009_mal1");
//    var p6_2_009_total2 = document.getElementById("p6_2_009_total2");
//    var p6_2_009_buen_estado2 = document.getElementById("p6_2_009_buen_estado2");
//    var p6_2_009_regular2 = document.getElementById("p6_2_009_regular2");
//    var p6_2_009_mal2 = document.getElementById("p6_2_009_mal2");
//
//    if (p6_2_009_local_si.checked) {
//        p6_2_009_total1.disabled = false;
//        p6_2_009_buen_estado1.disabled = false;
//        p6_2_009_regular1.disabled = false;
//        p6_2_009_mal1.disabled = false;
//        p6_2_009_total2.disabled = false;
//        p6_2_009_buen_estado2.disabled = false;
//        p6_2_009_regular2.disabled = false;
//        p6_2_009_mal2.disabled = false;
//    } else {
//        p6_2_009_total1.disabled = true;
//        p6_2_009_total1.value = '';
//        p6_2_009_buen_estado1.disabled = true;
//        p6_2_009_buen_estado1.value = '';
//        p6_2_009_regular1.disabled = true;
//        p6_2_009_regular1.value = '';
//        p6_2_009_mal1.disabled = true;
//        p6_2_009_mal1.value = '';
//        p6_2_009_total2.disabled = true;
//        p6_2_009_total2.value = '';
//        p6_2_009_buen_estado2.disabled = true;
//        p6_2_009_buen_estado2.value = '';
//        p6_2_009_regular2.disabled = true;
//        p6_2_009_regular2.value = '';
//        p6_2_009_mal2.disabled = true;
//        p6_2_009_mal2.value = '';
//    }
//}
//function valida010p6_2() {
//    var p6_2_010_local_si = document.getElementById("p6_2_010_local_si");
//    var p6_2_010_total1 = document.getElementById("p6_2_010_total1");
//    var p6_2_010_buen_estado1 = document.getElementById("p6_2_010_buen_estado1");
//    var p6_2_010_regular1 = document.getElementById("p6_2_010_regular1");
//    var p6_2_010_mal1 = document.getElementById("p6_2_010_mal1");
//    var p6_2_010_total2 = document.getElementById("p6_2_010_total2");
//    var p6_2_010_buen_estado2 = document.getElementById("p6_2_010_buen_estado2");
//    var p6_2_010_regular2 = document.getElementById("p6_2_010_regular2");
//    var p6_2_010_mal2 = document.getElementById("p6_2_010_mal2");
//
//    if (p6_2_010_local_si.checked) {
//        p6_2_010_total1.disabled = false;
//        p6_2_010_buen_estado1.disabled = false;
//        p6_2_010_regular1.disabled = false;
//        p6_2_010_mal1.disabled = false;
//        p6_2_010_total2.disabled = false;
//        p6_2_010_buen_estado2.disabled = false;
//        p6_2_010_regular2.disabled = false;
//        p6_2_010_mal2.disabled = false;
//    } else {
//        p6_2_010_total1.disabled = true;
//        p6_2_010_total1.value = '';
//        p6_2_010_buen_estado1.disabled = true;
//        p6_2_010_buen_estado1.value = '';
//        p6_2_010_regular1.disabled = true;
//        p6_2_010_regular1.value = '';
//        p6_2_010_mal1.disabled = true;
//        p6_2_010_mal1.value = '';
//        p6_2_010_total2.disabled = true;
//        p6_2_010_total2.value = '';
//        p6_2_010_buen_estado2.disabled = true;
//        p6_2_010_buen_estado2.value = '';
//        p6_2_010_regular2.disabled = true;
//        p6_2_010_regular2.value = '';
//        p6_2_010_mal2.disabled = true;
//        p6_2_010_mal2.value = '';
//    }
//}
//function valida011p6_2() {
//    var p6_2_011_local_si = document.getElementById("p6_2_011_local_si");
//    var p6_2_011_total1 = document.getElementById("p6_2_011_total1");
//    var p6_2_011_buen_estado1 = document.getElementById("p6_2_011_buen_estado1");
//    var p6_2_011_regular1 = document.getElementById("p6_2_011_regular1");
//    var p6_2_011_mal1 = document.getElementById("p6_2_011_mal1");
//    var p6_2_011_total2 = document.getElementById("p6_2_011_total2");
//    var p6_2_011_buen_estado2 = document.getElementById("p6_2_011_buen_estado2");
//    var p6_2_011_regular2 = document.getElementById("p6_2_011_regular2");
//    var p6_2_011_mal2 = document.getElementById("p6_2_011_mal2");
//
//    if (p6_2_011_local_si.checked) {
//        p6_2_011_total1.disabled = false;
//        p6_2_011_buen_estado1.disabled = false;
//        p6_2_011_regular1.disabled = false;
//        p6_2_011_mal1.disabled = false;
//        p6_2_011_total2.disabled = false;
//        p6_2_011_buen_estado2.disabled = false;
//        p6_2_011_regular2.disabled = false;
//        p6_2_011_mal2.disabled = false;
//    } else {
//        p6_2_011_total1.disabled = true;
//        p6_2_011_total1.value = '';
//        p6_2_011_buen_estado1.disabled = true;
//        p6_2_011_buen_estado1.value = '';
//        p6_2_011_regular1.disabled = true;
//        p6_2_011_regular1.value = '';
//        p6_2_011_mal1.disabled = true;
//        p6_2_011_mal1.value = '';
//        p6_2_011_total2.disabled = true;
//        p6_2_011_total2.value = '';
//        p6_2_011_buen_estado2.disabled = true;
//        p6_2_011_buen_estado2.value = '';
//        p6_2_011_regular2.disabled = true;
//        p6_2_011_regular2.value = '';
//        p6_2_011_mal2.disabled = true;
//        p6_2_011_mal2.value = '';
//    }
//}
//function valida012p6_2() {
//    var p6_2_012_local_si = document.getElementById("p6_2_012_local_si");
//    var p6_2_012_total1 = document.getElementById("p6_2_012_total1");
//    var p6_2_012_buen_estado1 = document.getElementById("p6_2_012_buen_estado1");
//    var p6_2_012_regular1 = document.getElementById("p6_2_012_regular1");
//    var p6_2_012_mal1 = document.getElementById("p6_2_012_mal1");
//    var p6_2_012_total2 = document.getElementById("p6_2_012_total2");
//    var p6_2_012_buen_estado2 = document.getElementById("p6_2_012_buen_estado2");
//    var p6_2_012_regular2 = document.getElementById("p6_2_012_regular2");
//    var p6_2_012_mal2 = document.getElementById("p6_2_012_mal2");
//
//    if (p6_2_012_local_si.checked) {
//        p6_2_012_total1.disabled = false;
//        p6_2_012_buen_estado1.disabled = false;
//        p6_2_012_regular1.disabled = false;
//        p6_2_012_mal1.disabled = false;
//        p6_2_012_total2.disabled = false;
//        p6_2_012_buen_estado2.disabled = false;
//        p6_2_012_regular2.disabled = false;
//        p6_2_012_mal2.disabled = false;
//    } else {
//        p6_2_012_total1.disabled = true;
//        p6_2_012_total1.value = '';
//        p6_2_012_buen_estado1.disabled = true;
//        p6_2_012_buen_estado1.value = '';
//        p6_2_012_regular1.disabled = true;
//        p6_2_012_regular1.value = '';
//        p6_2_012_mal1.disabled = true;
//        p6_2_012_mal1.value = '';
//        p6_2_012_total2.disabled = true;
//        p6_2_012_total2.value = '';
//        p6_2_012_buen_estado2.disabled = true;
//        p6_2_012_buen_estado2.value = '';
//        p6_2_012_regular2.disabled = true;
//        p6_2_012_regular2.value = '';
//        p6_2_012_mal2.disabled = true;
//        p6_2_012_mal2.value = '';
//    }
//}
//function valida013p6_2() {
//    var p6_2_013_local_si = document.getElementById("p6_2_013_local_si");
//    var p6_2_013_total1 = document.getElementById("p6_2_013_total1");
//    var p6_2_013_buen_estado1 = document.getElementById("p6_2_013_buen_estado1");
//    var p6_2_013_regular1 = document.getElementById("p6_2_013_regular1");
//    var p6_2_013_mal1 = document.getElementById("p6_2_013_mal1");
//    var p6_2_013_total2 = document.getElementById("p6_2_013_total2");
//    var p6_2_013_buen_estado2 = document.getElementById("p6_2_013_buen_estado2");
//    var p6_2_013_regular2 = document.getElementById("p6_2_013_regular2");
//    var p6_2_013_mal2 = document.getElementById("p6_2_013_mal2");
//
//    if (p6_2_013_local_si.checked) {
//        p6_2_013_total1.disabled = false;
//        p6_2_013_buen_estado1.disabled = false;
//        p6_2_013_regular1.disabled = false;
//        p6_2_013_mal1.disabled = false;
//        p6_2_013_total2.disabled = false;
//        p6_2_013_buen_estado2.disabled = false;
//        p6_2_013_regular2.disabled = false;
//        p6_2_013_mal2.disabled = false;
//    } else {
//        p6_2_013_total1.disabled = true;
//        p6_2_013_total1.value = '';
//        p6_2_013_buen_estado1.disabled = true;
//        p6_2_013_buen_estado1.value = '';
//        p6_2_013_regular1.disabled = true;
//        p6_2_013_regular1.value = '';
//        p6_2_013_mal1.disabled = true;
//        p6_2_013_mal1.value = '';
//        p6_2_013_total2.disabled = true;
//        p6_2_013_total2.value = '';
//        p6_2_013_buen_estado2.disabled = true;
//        p6_2_013_buen_estado2.value = '';
//        p6_2_013_regular2.disabled = true;
//        p6_2_013_regular2.value = '';
//        p6_2_013_mal2.disabled = true;
//        p6_2_013_mal2.value = '';
//    }
//}
//
//function valida014p6_2() {
//    var p6_2_014_local_si = document.getElementById("p6_2_014_local_si");
//    var p6_2_014_total1 = document.getElementById("p6_2_014_total1");
//    var p6_2_014_buen_estado1 = document.getElementById("p6_2_014_buen_estado1");
//    var p6_2_014_regular1 = document.getElementById("p6_2_014_regular1");
//    var p6_2_014_mal1 = document.getElementById("p6_2_014_mal1");
//    var p6_2_014_total2 = document.getElementById("p6_2_014_total2");
//    var p6_2_014_buen_estado2 = document.getElementById("p6_2_014_buen_estado2");
//    var p6_2_014_regular2 = document.getElementById("p6_2_014_regular2");
//    var p6_2_014_mal2 = document.getElementById("p6_2_014_mal2");
//
//    if (p6_2_014_local_si.checked) {
//        p6_2_014_total1.disabled = false;
//        p6_2_014_buen_estado1.disabled = false;
//        p6_2_014_regular1.disabled = false;
//        p6_2_014_mal1.disabled = false;
//        p6_2_014_total2.disabled = false;
//        p6_2_014_buen_estado2.disabled = false;
//        p6_2_014_regular2.disabled = false;
//        p6_2_014_mal2.disabled = false;
//    } else {
//        p6_2_014_total1.disabled = true;
//        p6_2_014_total1.value = '';
//        p6_2_014_buen_estado1.disabled = true;
//        p6_2_014_buen_estado1.value = '';
//        p6_2_014_regular1.disabled = true;
//        p6_2_014_regular1.value = '';
//        p6_2_014_mal1.disabled = true;
//        p6_2_014_mal1.value = '';
//        p6_2_014_total2.disabled = true;
//        p6_2_014_total2.value = '';
//        p6_2_014_buen_estado2.disabled = true;
//        p6_2_014_buen_estado2.value = '';
//        p6_2_014_regular2.disabled = true;
//        p6_2_014_regular2.value = '';
//        p6_2_014_mal2.disabled = true;
//        p6_2_014_mal2.value = '';
//    }
//}
//function valida015p6_2() {
//    var p6_2_015_local_si = document.getElementById("p6_2_015_local_si");
//    var p6_2_015_total1 = document.getElementById("p6_2_015_total1");
//    var p6_2_015_buen_estado1 = document.getElementById("p6_2_015_buen_estado1");
//    var p6_2_015_regular1 = document.getElementById("p6_2_015_regular1");
//    var p6_2_015_mal1 = document.getElementById("p6_2_015_mal1");
//    var p6_2_015_total2 = document.getElementById("p6_2_015_total2");
//    var p6_2_015_buen_estado2 = document.getElementById("p6_2_015_buen_estado2");
//    var p6_2_015_regular2 = document.getElementById("p6_2_015_regular2");
//    var p6_2_015_mal2 = document.getElementById("p6_2_015_mal2");
//
//    if (p6_2_015_local_si.checked) {
//        p6_2_015_total1.disabled = false;
//        p6_2_015_buen_estado1.disabled = false;
//        p6_2_015_regular1.disabled = false;
//        p6_2_015_mal1.disabled = false;
//        p6_2_015_total2.disabled = false;
//        p6_2_015_buen_estado2.disabled = false;
//        p6_2_015_regular2.disabled = false;
//        p6_2_015_mal2.disabled = false;
//    } else {
//        p6_2_015_total1.disabled = true;
//        p6_2_015_total1.value = '';
//        p6_2_015_buen_estado1.disabled = true;
//        p6_2_015_buen_estado1.value = '';
//        p6_2_015_regular1.disabled = true;
//        p6_2_015_regular1.value = '';
//        p6_2_015_mal1.disabled = true;
//        p6_2_015_mal1.value = '';
//        p6_2_015_total2.disabled = true;
//        p6_2_015_total2.value = '';
//        p6_2_015_buen_estado2.disabled = true;
//        p6_2_015_buen_estado2.value = '';
//        p6_2_015_regular2.disabled = true;
//        p6_2_015_regular2.value = '';
//        p6_2_015_mal2.disabled = true;
//        p6_2_015_mal2.value = '';
//    }
//}
//function valida016p6_2() {
//    var p6_2_016_local_si = document.getElementById("p6_2_016_local_si");
//    var p6_2_016_total1 = document.getElementById("p6_2_016_total1");
//    var p6_2_016_buen_estado1 = document.getElementById("p6_2_016_buen_estado1");
//    var p6_2_016_regular1 = document.getElementById("p6_2_016_regular1");
//    var p6_2_016_mal1 = document.getElementById("p6_2_016_mal1");
//    var p6_2_016_total2 = document.getElementById("p6_2_016_total2");
//    var p6_2_016_buen_estado2 = document.getElementById("p6_2_016_buen_estado2");
//    var p6_2_016_regular2 = document.getElementById("p6_2_016_regular2");
//    var p6_2_016_mal2 = document.getElementById("p6_2_016_mal2");
//
//    if (p6_2_016_local_si.checked) {
//        p6_2_016_total1.disabled = false;
//        p6_2_016_buen_estado1.disabled = false;
//        p6_2_016_regular1.disabled = false;
//        p6_2_016_mal1.disabled = false;
//        p6_2_016_total2.disabled = false;
//        p6_2_016_buen_estado2.disabled = false;
//        p6_2_016_regular2.disabled = false;
//        p6_2_016_mal2.disabled = false;
//    } else {
//        p6_2_016_total1.disabled = true;
//        p6_2_016_total1.value = '';
//        p6_2_016_buen_estado1.disabled = true;
//        p6_2_016_buen_estado1.value = '';
//        p6_2_016_regular1.disabled = true;
//        p6_2_016_regular1.value = '';
//        p6_2_016_mal1.disabled = true;
//        p6_2_016_mal1.value = '';
//        p6_2_016_total2.disabled = true;
//        p6_2_016_total2.value = '';
//        p6_2_016_buen_estado2.disabled = true;
//        p6_2_016_buen_estado2.value = '';
//        p6_2_016_regular2.disabled = true;
//        p6_2_016_regular2.value = '';
//        p6_2_016_mal2.disabled = true;
//        p6_2_016_mal2.value = '';
//    }
//}
//
//function valida017p6_2() {
//    var p6_2_017_local_si = document.getElementById("p6_2_017_local_si");
//    var p6_2_017_total1 = document.getElementById("p6_2_017_total1");
//    var p6_2_017_buen_estado1 = document.getElementById("p6_2_017_buen_estado1");
//    var p6_2_017_regular1 = document.getElementById("p6_2_017_regular1");
//    var p6_2_017_mal1 = document.getElementById("p6_2_017_mal1");
//    var p6_2_017_total2 = document.getElementById("p6_2_017_total2");
//    var p6_2_017_buen_estado2 = document.getElementById("p6_2_017_buen_estado2");
//    var p6_2_017_regular2 = document.getElementById("p6_2_017_regular2");
//    var p6_2_017_mal2 = document.getElementById("p6_2_017_mal2");
//
//    if (p6_2_017_local_si.checked) {
//        p6_2_017_total1.disabled = false;
//        p6_2_017_buen_estado1.disabled = false;
//        p6_2_017_regular1.disabled = false;
//        p6_2_017_mal1.disabled = false;
//        p6_2_017_total2.disabled = false;
//        p6_2_017_buen_estado2.disabled = false;
//        p6_2_017_regular2.disabled = false;
//        p6_2_017_mal2.disabled = false;
//    } else {
//        p6_2_017_total1.disabled = true;
//        p6_2_017_total1.value = '';
//        p6_2_017_buen_estado1.disabled = true;
//        p6_2_017_buen_estado1.value = '';
//        p6_2_017_regular1.disabled = true;
//        p6_2_017_regular1.value = '';
//        p6_2_017_mal1.disabled = true;
//        p6_2_017_mal1.value = '';
//        p6_2_017_total2.disabled = true;
//        p6_2_017_total2.value = '';
//        p6_2_017_buen_estado2.disabled = true;
//        p6_2_017_buen_estado2.value = '';
//        p6_2_017_regular2.disabled = true;
//        p6_2_017_regular2.value = '';
//        p6_2_017_mal2.disabled = true;
//        p6_2_017_mal2.value = '';
//    }
//}
//
//function valida018p6_2() {
//    var p6_2_018_local_si = document.getElementById("p6_2_018_local_si");
//    var p6_2_018_total1 = document.getElementById("p6_2_018_total1");
//    var p6_2_018_buen_estado1 = document.getElementById("p6_2_018_buen_estado1");
//    var p6_2_018_regular1 = document.getElementById("p6_2_018_regular1");
//    var p6_2_018_mal1 = document.getElementById("p6_2_018_mal1");
//    var p6_2_018_total2 = document.getElementById("p6_2_018_total2");
//    var p6_2_018_buen_estado2 = document.getElementById("p6_2_018_buen_estado2");
//    var p6_2_018_regular2 = document.getElementById("p6_2_018_regular2");
//    var p6_2_018_mal2 = document.getElementById("p6_2_018_mal2");
//
//    if (p6_2_018_local_si.checked) {
//        p6_2_018_total1.disabled = false;
//        p6_2_018_buen_estado1.disabled = false;
//        p6_2_018_regular1.disabled = false;
//        p6_2_018_mal1.disabled = false;
//        p6_2_018_total2.disabled = false;
//        p6_2_018_buen_estado2.disabled = false;
//        p6_2_018_regular2.disabled = false;
//        p6_2_018_mal2.disabled = false;
//    } else {
//        p6_2_018_total1.disabled = true;
//        p6_2_018_total1.value = '';
//        p6_2_018_buen_estado1.disabled = true;
//        p6_2_018_buen_estado1.value = '';
//        p6_2_018_regular1.disabled = true;
//        p6_2_018_regular1.value = '';
//        p6_2_018_mal1.disabled = true;
//        p6_2_018_mal1.value = '';
//        p6_2_018_total2.disabled = true;
//        p6_2_018_total2.value = '';
//        p6_2_018_buen_estado2.disabled = true;
//        p6_2_018_buen_estado2.value = '';
//        p6_2_018_regular2.disabled = true;
//        p6_2_018_regular2.value = '';
//        p6_2_018_mal2.disabled = true;
//        p6_2_018_mal2.value = '';
//    }
//}
//
//function valida019p6_2() {
//    var p6_2_019_local_si = document.getElementById("p6_2_019_local_si");
//    var p6_2_019_total1 = document.getElementById("p6_2_019_total1");
//    var p6_2_019_buen_estado1 = document.getElementById("p6_2_019_buen_estado1");
//    var p6_2_019_regular1 = document.getElementById("p6_2_019_regular1");
//    var p6_2_019_mal1 = document.getElementById("p6_2_019_mal1");
//    var p6_2_019_total2 = document.getElementById("p6_2_019_total2");
//    var p6_2_019_buen_estado2 = document.getElementById("p6_2_019_buen_estado2");
//    var p6_2_019_regular2 = document.getElementById("p6_2_019_regular2");
//    var p6_2_019_mal2 = document.getElementById("p6_2_019_mal2");
//
//    if (p6_2_019_local_si.checked) {
//        p6_2_019_total1.disabled = false;
//        p6_2_019_buen_estado1.disabled = false;
//        p6_2_019_regular1.disabled = false;
//        p6_2_019_mal1.disabled = false;
//        p6_2_019_total2.disabled = false;
//        p6_2_019_buen_estado2.disabled = false;
//        p6_2_019_regular2.disabled = false;
//        p6_2_019_mal2.disabled = false;
//    } else {
//        p6_2_019_total1.disabled = true;
//        p6_2_019_total1.value = '';
//        p6_2_019_buen_estado1.disabled = true;
//        p6_2_019_buen_estado1.value = '';
//        p6_2_019_regular1.disabled = true;
//        p6_2_019_regular1.value = '';
//        p6_2_019_mal1.disabled = true;
//        p6_2_019_mal1.value = '';
//        p6_2_019_total2.disabled = true;
//        p6_2_019_total2.value = '';
//        p6_2_019_buen_estado2.disabled = true;
//        p6_2_019_buen_estado2.value = '';
//        p6_2_019_regular2.disabled = true;
//        p6_2_019_regular2.value = '';
//        p6_2_019_mal2.disabled = true;
//        p6_2_019_mal2.value = '';
//    }
//}
//function valida020p6_2() {
//    var p6_2_020_local_si = document.getElementById("p6_2_020_local_si");
//    var p6_2_020_total1 = document.getElementById("p6_2_020_total1");
//    var p6_2_020_buen_estado1 = document.getElementById("p6_2_020_buen_estado1");
//    var p6_2_020_regular1 = document.getElementById("p6_2_020_regular1");
//    var p6_2_020_mal1 = document.getElementById("p6_2_020_mal1");
//    var p6_2_020_total2 = document.getElementById("p6_2_020_total2");
//    var p6_2_020_buen_estado2 = document.getElementById("p6_2_020_buen_estado2");
//    var p6_2_020_regular2 = document.getElementById("p6_2_020_regular2");
//    var p6_2_020_mal2 = document.getElementById("p6_2_020_mal2");
//
//    if (p6_2_020_local_si.checked) {
//        p6_2_020_total1.disabled = false;
//        p6_2_020_buen_estado1.disabled = false;
//        p6_2_020_regular1.disabled = false;
//        p6_2_020_mal1.disabled = false;
//        p6_2_020_total2.disabled = false;
//        p6_2_020_buen_estado2.disabled = false;
//        p6_2_020_regular2.disabled = false;
//        p6_2_020_mal2.disabled = false;
//    } else {
//        p6_2_020_total1.disabled = true;
//        p6_2_020_total1.value = '';
//        p6_2_020_buen_estado1.disabled = true;
//        p6_2_020_buen_estado1.value = '';
//        p6_2_020_regular1.disabled = true;
//        p6_2_020_regular1.value = '';
//        p6_2_020_mal1.disabled = true;
//        p6_2_020_mal1.value = '';
//        p6_2_020_total2.disabled = true;
//        p6_2_020_total2.value = '';
//        p6_2_020_buen_estado2.disabled = true;
//        p6_2_020_buen_estado2.value = '';
//        p6_2_020_regular2.disabled = true;
//        p6_2_020_regular2.value = '';
//        p6_2_020_mal2.disabled = true;
//        p6_2_020_mal2.value = '';
//    }
//}
//function valida021p6_2() {
//    var p6_2_021_local_si = document.getElementById("p6_2_021_local_si");
//    var p6_2_021_total1 = document.getElementById("p6_2_021_total1");
//    var p6_2_021_buen_estado1 = document.getElementById("p6_2_021_buen_estado1");
//    var p6_2_021_regular1 = document.getElementById("p6_2_021_regular1");
//    var p6_2_021_mal1 = document.getElementById("p6_2_021_mal1");
//    var p6_2_021_total2 = document.getElementById("p6_2_021_total2");
//    var p6_2_021_buen_estado2 = document.getElementById("p6_2_021_buen_estado2");
//    var p6_2_021_regular2 = document.getElementById("p6_2_021_regular2");
//    var p6_2_021_mal2 = document.getElementById("p6_2_021_mal2");
//
//    if (p6_2_021_local_si.checked) {
//        p6_2_021_total1.disabled = false;
//        p6_2_021_buen_estado1.disabled = false;
//        p6_2_021_regular1.disabled = false;
//        p6_2_021_mal1.disabled = false;
//        p6_2_021_total2.disabled = false;
//        p6_2_021_buen_estado2.disabled = false;
//        p6_2_021_regular2.disabled = false;
//        p6_2_021_mal2.disabled = false;
//    } else {
//        p6_2_021_total1.disabled = true;
//        p6_2_021_total1.value = '';
//        p6_2_021_buen_estado1.disabled = true;
//        p6_2_021_buen_estado1.value = '';
//        p6_2_021_regular1.disabled = true;
//        p6_2_021_regular1.value = '';
//        p6_2_021_mal1.disabled = true;
//        p6_2_021_mal1.value = '';
//        p6_2_021_total2.disabled = true;
//        p6_2_021_total2.value = '';
//        p6_2_021_buen_estado2.disabled = true;
//        p6_2_021_buen_estado2.value = '';
//        p6_2_021_regular2.disabled = true;
//        p6_2_021_regular2.value = '';
//        p6_2_021_mal2.disabled = true;
//        p6_2_021_mal2.value = '';
//    }
//}
//
//function valida022p6_2() {
//    var p6_2_022_local_si = document.getElementById("p6_2_022_local_si");
//    var p6_2_022_total1 = document.getElementById("p6_2_022_total1");
//    var p6_2_022_buen_estado1 = document.getElementById("p6_2_022_buen_estado1");
//    var p6_2_022_regular1 = document.getElementById("p6_2_022_regular1");
//    var p6_2_022_mal1 = document.getElementById("p6_2_022_mal1");
//    var p6_2_022_total2 = document.getElementById("p6_2_022_total2");
//    var p6_2_022_buen_estado2 = document.getElementById("p6_2_022_buen_estado2");
//    var p6_2_022_regular2 = document.getElementById("p6_2_022_regular2");
//    var p6_2_022_mal2 = document.getElementById("p6_2_022_mal2");
//
//    if (p6_2_022_local_si.checked) {
//        p6_2_022_total1.disabled = false;
//        p6_2_022_buen_estado1.disabled = false;
//        p6_2_022_regular1.disabled = false;
//        p6_2_022_mal1.disabled = false;
//        p6_2_022_total2.disabled = false;
//        p6_2_022_buen_estado2.disabled = false;
//        p6_2_022_regular2.disabled = false;
//        p6_2_022_mal2.disabled = false;
//    } else {
//        p6_2_022_total1.disabled = true;
//        p6_2_022_total1.value = '';
//        p6_2_022_buen_estado1.disabled = true;
//        p6_2_022_buen_estado1.value = '';
//        p6_2_022_regular1.disabled = true;
//        p6_2_022_regular1.value = '';
//        p6_2_022_mal1.disabled = true;
//        p6_2_022_mal1.value = '';
//        p6_2_022_total2.disabled = true;
//        p6_2_022_total2.value = '';
//        p6_2_022_buen_estado2.disabled = true;
//        p6_2_022_buen_estado2.value = '';
//        p6_2_022_regular2.disabled = true;
//        p6_2_022_regular2.value = '';
//        p6_2_022_mal2.disabled = true;
//        p6_2_022_mal2.value = '';
//    }
//}
//
//function valida023p6_2() {
//    var p6_2_023_local_si = document.getElementById("p6_2_023_local_si");
//    var p6_2_023_total1 = document.getElementById("p6_2_023_total1");
//    var p6_2_023_buen_estado1 = document.getElementById("p6_2_023_buen_estado1");
//    var p6_2_023_regular1 = document.getElementById("p6_2_023_regular1");
//    var p6_2_023_mal1 = document.getElementById("p6_2_023_mal1");
//    var p6_2_023_total2 = document.getElementById("p6_2_023_total2");
//    var p6_2_023_buen_estado2 = document.getElementById("p6_2_023_buen_estado2");
//    var p6_2_023_regular2 = document.getElementById("p6_2_023_regular2");
//    var p6_2_023_mal2 = document.getElementById("p6_2_023_mal2");
//
//    if (p6_2_023_local_si.checked) {
//        p6_2_023_total1.disabled = false;
//        p6_2_023_buen_estado1.disabled = false;
//        p6_2_023_regular1.disabled = false;
//        p6_2_023_mal1.disabled = false;
//        p6_2_023_total2.disabled = false;
//        p6_2_023_buen_estado2.disabled = false;
//        p6_2_023_regular2.disabled = false;
//        p6_2_023_mal2.disabled = false;
//    } else {
//        p6_2_023_total1.disabled = true;
//        p6_2_023_total1.value = '';
//        p6_2_023_buen_estado1.disabled = true;
//        p6_2_023_buen_estado1.value = '';
//        p6_2_023_regular1.disabled = true;
//        p6_2_023_regular1.value = '';
//        p6_2_023_mal1.disabled = true;
//        p6_2_023_mal1.value = '';
//        p6_2_023_total2.disabled = true;
//        p6_2_023_total2.value = '';
//        p6_2_023_buen_estado2.disabled = true;
//        p6_2_023_buen_estado2.value = '';
//        p6_2_023_regular2.disabled = true;
//        p6_2_023_regular2.value = '';
//        p6_2_023_mal2.disabled = true;
//        p6_2_023_mal2.value = '';
//    }
//}
//
//function valida024p6_2() {
//    var p6_2_024_local_si = document.getElementById("p6_2_024_local_si");
//    var p6_2_024_total1 = document.getElementById("p6_2_024_total1");
//    var p6_2_024_buen_estado1 = document.getElementById("p6_2_024_buen_estado1");
//    var p6_2_024_regular1 = document.getElementById("p6_2_024_regular1");
//    var p6_2_024_mal1 = document.getElementById("p6_2_024_mal1");
//    var p6_2_024_total2 = document.getElementById("p6_2_024_total2");
//    var p6_2_024_buen_estado2 = document.getElementById("p6_2_024_buen_estado2");
//    var p6_2_024_regular2 = document.getElementById("p6_2_024_regular2");
//    var p6_2_024_mal2 = document.getElementById("p6_2_024_mal2");
//
//    if (p6_2_024_local_si.checked) {
//        p6_2_024_total1.disabled = false;
//        p6_2_024_buen_estado1.disabled = false;
//        p6_2_024_regular1.disabled = false;
//        p6_2_024_mal1.disabled = false;
//        p6_2_024_total2.disabled = false;
//        p6_2_024_buen_estado2.disabled = false;
//        p6_2_024_regular2.disabled = false;
//        p6_2_024_mal2.disabled = false;
//    } else {
//        p6_2_024_total1.disabled = true;
//        p6_2_024_total1.value = '';
//        p6_2_024_buen_estado1.disabled = true;
//        p6_2_024_buen_estado1.value = '';
//        p6_2_024_regular1.disabled = true;
//        p6_2_024_regular1.value = '';
//        p6_2_024_mal1.disabled = true;
//        p6_2_024_mal1.value = '';
//        p6_2_024_total2.disabled = true;
//        p6_2_024_total2.value = '';
//        p6_2_024_buen_estado2.disabled = true;
//        p6_2_024_buen_estado2.value = '';
//        p6_2_024_regular2.disabled = true;
//        p6_2_024_regular2.value = '';
//        p6_2_024_mal2.disabled = true;
//        p6_2_024_mal2.value = '';
//    }
//}
//
//function valida025p6_2() {
//    var p6_2_025_local_si = document.getElementById("p6_2_025_local_si");
//    var p6_2_025_total1 = document.getElementById("p6_2_025_total1");
//    var p6_2_025_buen_estado1 = document.getElementById("p6_2_025_buen_estado1");
//    var p6_2_025_regular1 = document.getElementById("p6_2_025_regular1");
//    var p6_2_025_mal1 = document.getElementById("p6_2_025_mal1");
//    var p6_2_025_total2 = document.getElementById("p6_2_025_total2");
//    var p6_2_025_buen_estado2 = document.getElementById("p6_2_025_buen_estado2");
//    var p6_2_025_regular2 = document.getElementById("p6_2_025_regular2");
//    var p6_2_025_mal2 = document.getElementById("p6_2_025_mal2");
//
//    if (p6_2_025_local_si.checked) {
//        p6_2_025_total1.disabled = false;
//        p6_2_025_buen_estado1.disabled = false;
//        p6_2_025_regular1.disabled = false;
//        p6_2_025_mal1.disabled = false;
//        p6_2_025_total2.disabled = false;
//        p6_2_025_buen_estado2.disabled = false;
//        p6_2_025_regular2.disabled = false;
//        p6_2_025_mal2.disabled = false;
//    } else {
//        p6_2_025_total1.disabled = true;
//        p6_2_025_total1.value = '';
//        p6_2_025_buen_estado1.disabled = true;
//        p6_2_025_buen_estado1.value = '';
//        p6_2_025_regular1.disabled = true;
//        p6_2_025_regular1.value = '';
//        p6_2_025_mal1.disabled = true;
//        p6_2_025_mal1.value = '';
//        p6_2_025_total2.disabled = true;
//        p6_2_025_total2.value = '';
//        p6_2_025_buen_estado2.disabled = true;
//        p6_2_025_buen_estado2.value = '';
//        p6_2_025_regular2.disabled = true;
//        p6_2_025_regular2.value = '';
//        p6_2_025_mal2.disabled = true;
//        p6_2_025_mal2.value = '';
//    }
//}
//function valida026p6_2() {
//    var p6_2_026_local_si = document.getElementById("p6_2_026_local_si");
//    var p6_2_026_total1 = document.getElementById("p6_2_026_total1");
//    var p6_2_026_buen_estado1 = document.getElementById("p6_2_026_buen_estado1");
//    var p6_2_026_regular1 = document.getElementById("p6_2_026_regular1");
//    var p6_2_026_mal1 = document.getElementById("p6_2_026_mal1");
//    var p6_2_026_total2 = document.getElementById("p6_2_026_total2");
//    var p6_2_026_buen_estado2 = document.getElementById("p6_2_026_buen_estado2");
//    var p6_2_026_regular2 = document.getElementById("p6_2_026_regular2");
//    var p6_2_026_mal2 = document.getElementById("p6_2_026_mal2");
//
//    if (p6_2_026_local_si.checked) {
//        p6_2_026_total1.disabled = false;
//        p6_2_026_buen_estado1.disabled = false;
//        p6_2_026_regular1.disabled = false;
//        p6_2_026_mal1.disabled = false;
//        p6_2_026_total2.disabled = false;
//        p6_2_026_buen_estado2.disabled = false;
//        p6_2_026_regular2.disabled = false;
//        p6_2_026_mal2.disabled = false;
//    } else {
//        p6_2_026_total1.disabled = true;
//        p6_2_026_total1.value = '';
//        p6_2_026_buen_estado1.disabled = true;
//        p6_2_026_buen_estado1.value = '';
//        p6_2_026_regular1.disabled = true;
//        p6_2_026_regular1.value = '';
//        p6_2_026_mal1.disabled = true;
//        p6_2_026_mal1.value = '';
//        p6_2_026_total2.disabled = true;
//        p6_2_026_total2.value = '';
//        p6_2_026_buen_estado2.disabled = true;
//        p6_2_026_buen_estado2.value = '';
//        p6_2_026_regular2.disabled = true;
//        p6_2_026_regular2.value = '';
//        p6_2_026_mal2.disabled = true;
//        p6_2_026_mal2.value = '';
//    }
//}
//
//function valida027p6_2() {
//    var p6_2_027_local_si = document.getElementById("p6_2_027_local_si");
//    var p6_2_027_total1 = document.getElementById("p6_2_027_total1");
//    var p6_2_027_buen_estado1 = document.getElementById("p6_2_027_buen_estado1");
//    var p6_2_027_regular1 = document.getElementById("p6_2_027_regular1");
//    var p6_2_027_mal1 = document.getElementById("p6_2_027_mal1");
//    var p6_2_027_total2 = document.getElementById("p6_2_027_total2");
//    var p6_2_027_buen_estado2 = document.getElementById("p6_2_027_buen_estado2");
//    var p6_2_027_regular2 = document.getElementById("p6_2_027_regular2");
//    var p6_2_027_mal2 = document.getElementById("p6_2_027_mal2");
//
//    if (p6_2_027_local_si.checked) {
//        p6_2_027_total1.disabled = false;
//        p6_2_027_buen_estado1.disabled = false;
//        p6_2_027_regular1.disabled = false;
//        p6_2_027_mal1.disabled = false;
//        p6_2_027_total2.disabled = false;
//        p6_2_027_buen_estado2.disabled = false;
//        p6_2_027_regular2.disabled = false;
//        p6_2_027_mal2.disabled = false;
//    } else {
//        p6_2_027_total1.disabled = true;
//        p6_2_027_total1.value = '';
//        p6_2_027_buen_estado1.disabled = true;
//        p6_2_027_buen_estado1.value = '';
//        p6_2_027_regular1.disabled = true;
//        p6_2_027_regular1.value = '';
//        p6_2_027_mal1.disabled = true;
//        p6_2_027_mal1.value = '';
//        p6_2_027_total2.disabled = true;
//        p6_2_027_total2.value = '';
//        p6_2_027_buen_estado2.disabled = true;
//        p6_2_027_buen_estado2.value = '';
//        p6_2_027_regular2.disabled = true;
//        p6_2_027_regular2.value = '';
//        p6_2_027_mal2.disabled = true;
//        p6_2_027_mal2.value = '';
//    }
//}
//
//function valida028p6_2() {
//    var p6_2_028_local_si = document.getElementById("p6_2_028_local_si");
//    var p6_2_028_total1 = document.getElementById("p6_2_028_total1");
//    var p6_2_028_buen_estado1 = document.getElementById("p6_2_028_buen_estado1");
//    var p6_2_028_regular1 = document.getElementById("p6_2_028_regular1");
//    var p6_2_028_mal1 = document.getElementById("p6_2_028_mal1");
//    var p6_2_028_total2 = document.getElementById("p6_2_028_total2");
//    var p6_2_028_buen_estado2 = document.getElementById("p6_2_028_buen_estado2");
//    var p6_2_028_regular2 = document.getElementById("p6_2_028_regular2");
//    var p6_2_028_mal2 = document.getElementById("p6_2_028_mal2");
//
//    if (p6_2_028_local_si.checked) {
//        p6_2_028_total1.disabled = false;
//        p6_2_028_buen_estado1.disabled = false;
//        p6_2_028_regular1.disabled = false;
//        p6_2_028_mal1.disabled = false;
//        p6_2_028_total2.disabled = false;
//        p6_2_028_buen_estado2.disabled = false;
//        p6_2_028_regular2.disabled = false;
//        p6_2_028_mal2.disabled = false;
//    } else {
//        p6_2_028_total1.disabled = true;
//        p6_2_028_total1.value = '';
//        p6_2_028_buen_estado1.disabled = true;
//        p6_2_028_buen_estado1.value = '';
//        p6_2_028_regular1.disabled = true;
//        p6_2_028_regular1.value = '';
//        p6_2_028_mal1.disabled = true;
//        p6_2_028_mal1.value = '';
//        p6_2_028_total2.disabled = true;
//        p6_2_028_total2.value = '';
//        p6_2_028_buen_estado2.disabled = true;
//        p6_2_028_buen_estado2.value = '';
//        p6_2_028_regular2.disabled = true;
//        p6_2_028_regular2.value = '';
//        p6_2_028_mal2.disabled = true;
//        p6_2_028_mal2.value = '';
//    }
//}
//
//function valida029p6_2() {
//    var p6_2_029_local_si = document.getElementById("p6_2_029_local_si");
//    var p6_2_029_total1 = document.getElementById("p6_2_029_total1");
//    var p6_2_029_buen_estado1 = document.getElementById("p6_2_029_buen_estado1");
//    var p6_2_029_regular1 = document.getElementById("p6_2_029_regular1");
//    var p6_2_029_mal1 = document.getElementById("p6_2_029_mal1");
//    var p6_2_029_total2 = document.getElementById("p6_2_029_total2");
//    var p6_2_029_buen_estado2 = document.getElementById("p6_2_029_buen_estado2");
//    var p6_2_029_regular2 = document.getElementById("p6_2_029_regular2");
//    var p6_2_029_mal2 = document.getElementById("p6_2_029_mal2");
//
//    if (p6_2_029_local_si.checked) {
//        p6_2_029_total1.disabled = false;
//        p6_2_029_buen_estado1.disabled = false;
//        p6_2_029_regular1.disabled = false;
//        p6_2_029_mal1.disabled = false;
//        p6_2_029_total2.disabled = false;
//        p6_2_029_buen_estado2.disabled = false;
//        p6_2_029_regular2.disabled = false;
//        p6_2_029_mal2.disabled = false;
//    } else {
//        p6_2_029_total1.disabled = true;
//        p6_2_029_total1.value = '';
//        p6_2_029_buen_estado1.disabled = true;
//        p6_2_029_buen_estado1.value = '';
//        p6_2_029_regular1.disabled = true;
//        p6_2_029_regular1.value = '';
//        p6_2_029_mal1.disabled = true;
//        p6_2_029_mal1.value = '';
//        p6_2_029_total2.disabled = true;
//        p6_2_029_total2.value = '';
//        p6_2_029_buen_estado2.disabled = true;
//        p6_2_029_buen_estado2.value = '';
//        p6_2_029_regular2.disabled = true;
//        p6_2_029_regular2.value = '';
//        p6_2_029_mal2.disabled = true;
//        p6_2_029_mal2.value = '';
//    }
//}
//
//function valida030p6_2() {
//    var p6_2_030_local_si = document.getElementById("p6_2_030_local_si");
//    var p6_2_030_total1 = document.getElementById("p6_2_030_total1");
//    var p6_2_030_buen_estado1 = document.getElementById("p6_2_030_buen_estado1");
//    var p6_2_030_regular1 = document.getElementById("p6_2_030_regular1");
//    var p6_2_030_mal1 = document.getElementById("p6_2_030_mal1");
//    var p6_2_030_total2 = document.getElementById("p6_2_030_total2");
//    var p6_2_030_buen_estado2 = document.getElementById("p6_2_030_buen_estado2");
//    var p6_2_030_regular2 = document.getElementById("p6_2_030_regular2");
//    var p6_2_030_mal2 = document.getElementById("p6_2_030_mal2");
//
//    if (p6_2_030_local_si.checked) {
//        p6_2_030_total1.disabled = false;
//        p6_2_030_buen_estado1.disabled = false;
//        p6_2_030_regular1.disabled = false;
//        p6_2_030_mal1.disabled = false;
//        p6_2_030_total2.disabled = false;
//        p6_2_030_buen_estado2.disabled = false;
//        p6_2_030_regular2.disabled = false;
//        p6_2_030_mal2.disabled = false;
//    } else {
//        p6_2_030_total1.disabled = true;
//        p6_2_030_total1.value = '';
//        p6_2_030_buen_estado1.disabled = true;
//        p6_2_030_buen_estado1.value = '';
//        p6_2_030_regular1.disabled = true;
//        p6_2_030_regular1.value = '';
//        p6_2_030_mal1.disabled = true;
//        p6_2_030_mal1.value = '';
//        p6_2_030_total2.disabled = true;
//        p6_2_030_total2.value = '';
//        p6_2_030_buen_estado2.disabled = true;
//        p6_2_030_buen_estado2.value = '';
//        p6_2_030_regular2.disabled = true;
//        p6_2_030_regular2.value = '';
//        p6_2_030_mal2.disabled = true;
//        p6_2_030_mal2.value = '';
//    }
//}
//function valida031p6_2() {
//    var p6_2_031_local_si = document.getElementById("p6_2_031_local_si");
//    var p6_2_031_total1 = document.getElementById("p6_2_031_total1");
//    var p6_2_031_buen_estado1 = document.getElementById("p6_2_031_buen_estado1");
//    var p6_2_031_regular1 = document.getElementById("p6_2_031_regular1");
//    var p6_2_031_mal1 = document.getElementById("p6_2_031_mal1");
//    var p6_2_031_total2 = document.getElementById("p6_2_031_total2");
//    var p6_2_031_buen_estado2 = document.getElementById("p6_2_031_buen_estado2");
//    var p6_2_031_regular2 = document.getElementById("p6_2_031_regular2");
//    var p6_2_031_mal2 = document.getElementById("p6_2_031_mal2");
//
//    if (p6_2_031_local_si.checked) {
//        p6_2_031_total1.disabled = false;
//        p6_2_031_buen_estado1.disabled = false;
//        p6_2_031_regular1.disabled = false;
//        p6_2_031_mal1.disabled = false;
//        p6_2_031_total2.disabled = false;
//        p6_2_031_buen_estado2.disabled = false;
//        p6_2_031_regular2.disabled = false;
//        p6_2_031_mal2.disabled = false;
//    } else {
//        p6_2_031_total1.disabled = true;
//        p6_2_031_total1.value = '';
//        p6_2_031_buen_estado1.disabled = true;
//        p6_2_031_buen_estado1.value = '';
//        p6_2_031_regular1.disabled = true;
//        p6_2_031_regular1.value = '';
//        p6_2_031_mal1.disabled = true;
//        p6_2_031_mal1.value = '';
//        p6_2_031_total2.disabled = true;
//        p6_2_031_total2.value = '';
//        p6_2_031_buen_estado2.disabled = true;
//        p6_2_031_buen_estado2.value = '';
//        p6_2_031_regular2.disabled = true;
//        p6_2_031_regular2.value = '';
//        p6_2_031_mal2.disabled = true;
//        p6_2_031_mal2.value = '';
//    }
//}
//
//function valida032p6_2() {
//    var p6_2_032_local_si = document.getElementById("p6_2_032_local_si");
//    var p6_2_032_total1 = document.getElementById("p6_2_032_total1");
//    var p6_2_032_buen_estado1 = document.getElementById("p6_2_032_buen_estado1");
//    var p6_2_032_regular1 = document.getElementById("p6_2_032_regular1");
//    var p6_2_032_mal1 = document.getElementById("p6_2_032_mal1");
//    var p6_2_032_total2 = document.getElementById("p6_2_032_total2");
//    var p6_2_032_buen_estado2 = document.getElementById("p6_2_032_buen_estado2");
//    var p6_2_032_regular2 = document.getElementById("p6_2_032_regular2");
//    var p6_2_032_mal2 = document.getElementById("p6_2_032_mal2");
//
//    if (p6_2_032_local_si.checked) {
//        p6_2_032_total1.disabled = false;
//        p6_2_032_buen_estado1.disabled = false;
//        p6_2_032_regular1.disabled = false;
//        p6_2_032_mal1.disabled = false;
//        p6_2_032_total2.disabled = false;
//        p6_2_032_buen_estado2.disabled = false;
//        p6_2_032_regular2.disabled = false;
//        p6_2_032_mal2.disabled = false;
//    } else {
//        p6_2_032_total1.disabled = true;
//        p6_2_032_total1.value = '';
//        p6_2_032_buen_estado1.disabled = true;
//        p6_2_032_buen_estado1.value = '';
//        p6_2_032_regular1.disabled = true;
//        p6_2_032_regular1.value = '';
//        p6_2_032_mal1.disabled = true;
//        p6_2_032_mal1.value = '';
//        p6_2_032_total2.disabled = true;
//        p6_2_032_total2.value = '';
//        p6_2_032_buen_estado2.disabled = true;
//        p6_2_032_buen_estado2.value = '';
//        p6_2_032_regular2.disabled = true;
//        p6_2_032_regular2.value = '';
//        p6_2_032_mal2.disabled = true;
//        p6_2_032_mal2.value = '';
//    }
//}
//
//function valida033p6_2() {
//    var p6_2_033_local_si = document.getElementById("p6_2_033_local_si");
//    var p6_2_033_total1 = document.getElementById("p6_2_033_total1");
//    var p6_2_033_buen_estado1 = document.getElementById("p6_2_033_buen_estado1");
//    var p6_2_033_regular1 = document.getElementById("p6_2_033_regular1");
//    var p6_2_033_mal1 = document.getElementById("p6_2_033_mal1");
//    var p6_2_033_total2 = document.getElementById("p6_2_033_total2");
//    var p6_2_033_buen_estado2 = document.getElementById("p6_2_033_buen_estado2");
//    var p6_2_033_regular2 = document.getElementById("p6_2_033_regular2");
//    var p6_2_033_mal2 = document.getElementById("p6_2_033_mal2");
//
//    if (p6_2_033_local_si.checked) {
//        p6_2_033_total1.disabled = false;
//        p6_2_033_buen_estado1.disabled = false;
//        p6_2_033_regular1.disabled = false;
//        p6_2_033_mal1.disabled = false;
//        p6_2_033_total2.disabled = false;
//        p6_2_033_buen_estado2.disabled = false;
//        p6_2_033_regular2.disabled = false;
//        p6_2_033_mal2.disabled = false;
//    } else {
//        p6_2_033_total1.disabled = true;
//        p6_2_033_total1.value = '';
//        p6_2_033_buen_estado1.disabled = true;
//        p6_2_033_buen_estado1.value = '';
//        p6_2_033_regular1.disabled = true;
//        p6_2_033_regular1.value = '';
//        p6_2_033_mal1.disabled = true;
//        p6_2_033_mal1.value = '';
//        p6_2_033_total2.disabled = true;
//        p6_2_033_total2.value = '';
//        p6_2_033_buen_estado2.disabled = true;
//        p6_2_033_buen_estado2.value = '';
//        p6_2_033_regular2.disabled = true;
//        p6_2_033_regular2.value = '';
//        p6_2_033_mal2.disabled = true;
//        p6_2_033_mal2.value = '';
//    }
//}
//
//function valida034p6_2() {
//    var p6_2_034_local_si = document.getElementById("p6_2_034_local_si");
//    var p6_2_034_total1 = document.getElementById("p6_2_034_total1");
//    var p6_2_034_buen_estado1 = document.getElementById("p6_2_034_buen_estado1");
//    var p6_2_034_regular1 = document.getElementById("p6_2_034_regular1");
//    var p6_2_034_mal1 = document.getElementById("p6_2_034_mal1");
//    var p6_2_034_total2 = document.getElementById("p6_2_034_total2");
//    var p6_2_034_buen_estado2 = document.getElementById("p6_2_034_buen_estado2");
//    var p6_2_034_regular2 = document.getElementById("p6_2_034_regular2");
//    var p6_2_034_mal2 = document.getElementById("p6_2_034_mal2");
//
//    if (p6_2_034_local_si.checked) {
//        p6_2_034_total1.disabled = false;
//        p6_2_034_buen_estado1.disabled = false;
//        p6_2_034_regular1.disabled = false;
//        p6_2_034_mal1.disabled = false;
//        p6_2_034_total2.disabled = false;
//        p6_2_034_buen_estado2.disabled = false;
//        p6_2_034_regular2.disabled = false;
//        p6_2_034_mal2.disabled = false;
//    } else {
//        p6_2_034_total1.disabled = true;
//        p6_2_034_total1.value = '';
//        p6_2_034_buen_estado1.disabled = true;
//        p6_2_034_buen_estado1.value = '';
//        p6_2_034_regular1.disabled = true;
//        p6_2_034_regular1.value = '';
//        p6_2_034_mal1.disabled = true;
//        p6_2_034_mal1.value = '';
//        p6_2_034_total2.disabled = true;
//        p6_2_034_total2.value = '';
//        p6_2_034_buen_estado2.disabled = true;
//        p6_2_034_buen_estado2.value = '';
//        p6_2_034_regular2.disabled = true;
//        p6_2_034_regular2.value = '';
//        p6_2_034_mal2.disabled = true;
//        p6_2_034_mal2.value = '';
//    }
//}
//
//function valida035p6_2() {
//    var p6_2_035_local_si = document.getElementById("p6_2_035_local_si");
//    var p6_2_035_total1 = document.getElementById("p6_2_035_total1");
//    var p6_2_035_buen_estado1 = document.getElementById("p6_2_035_buen_estado1");
//    var p6_2_035_regular1 = document.getElementById("p6_2_035_regular1");
//    var p6_2_035_mal1 = document.getElementById("p6_2_035_mal1");
//    var p6_2_035_total2 = document.getElementById("p6_2_035_total2");
//    var p6_2_035_buen_estado2 = document.getElementById("p6_2_035_buen_estado2");
//    var p6_2_035_regular2 = document.getElementById("p6_2_035_regular2");
//    var p6_2_035_mal2 = document.getElementById("p6_2_035_mal2");
//
//    if (p6_2_035_local_si.checked) {
//        p6_2_035_total1.disabled = false;
//        p6_2_035_buen_estado1.disabled = false;
//        p6_2_035_regular1.disabled = false;
//        p6_2_035_mal1.disabled = false;
//        p6_2_035_total2.disabled = false;
//        p6_2_035_buen_estado2.disabled = false;
//        p6_2_035_regular2.disabled = false;
//        p6_2_035_mal2.disabled = false;
//    } else {
//        p6_2_035_total1.disabled = true;
//        p6_2_035_total1.value = '';
//        p6_2_035_buen_estado1.disabled = true;
//        p6_2_035_buen_estado1.value = '';
//        p6_2_035_regular1.disabled = true;
//        p6_2_035_regular1.value = '';
//        p6_2_035_mal1.disabled = true;
//        p6_2_035_mal1.value = '';
//        p6_2_035_total2.disabled = true;
//        p6_2_035_total2.value = '';
//        p6_2_035_buen_estado2.disabled = true;
//        p6_2_035_buen_estado2.value = '';
//        p6_2_035_regular2.disabled = true;
//        p6_2_035_regular2.value = '';
//        p6_2_035_mal2.disabled = true;
//        p6_2_035_mal2.value = '';
//    }
//}
//function valida036p6_2() {
//    var p6_2_036_local_si = document.getElementById("p6_2_036_local_si");
//    var p6_2_036_total1 = document.getElementById("p6_2_036_total1");
//    var p6_2_036_buen_estado1 = document.getElementById("p6_2_036_buen_estado1");
//    var p6_2_036_regular1 = document.getElementById("p6_2_036_regular1");
//    var p6_2_036_mal1 = document.getElementById("p6_2_036_mal1");
//    var p6_2_036_total2 = document.getElementById("p6_2_036_total2");
//    var p6_2_036_buen_estado2 = document.getElementById("p6_2_036_buen_estado2");
//    var p6_2_036_regular2 = document.getElementById("p6_2_036_regular2");
//    var p6_2_036_mal2 = document.getElementById("p6_2_036_mal2");
//
//    if (p6_2_036_local_si.checked) {
//        p6_2_036_total1.disabled = false;
//        p6_2_036_buen_estado1.disabled = false;
//        p6_2_036_regular1.disabled = false;
//        p6_2_036_mal1.disabled = false;
//        p6_2_036_total2.disabled = false;
//        p6_2_036_buen_estado2.disabled = false;
//        p6_2_036_regular2.disabled = false;
//        p6_2_036_mal2.disabled = false;
//    } else {
//        p6_2_036_total1.disabled = true;
//        p6_2_036_total1.value = '';
//        p6_2_036_buen_estado1.disabled = true;
//        p6_2_036_buen_estado1.value = '';
//        p6_2_036_regular1.disabled = true;
//        p6_2_036_regular1.value = '';
//        p6_2_036_mal1.disabled = true;
//        p6_2_036_mal1.value = '';
//        p6_2_036_total2.disabled = true;
//        p6_2_036_total2.value = '';
//        p6_2_036_buen_estado2.disabled = true;
//        p6_2_036_buen_estado2.value = '';
//        p6_2_036_regular2.disabled = true;
//        p6_2_036_regular2.value = '';
//        p6_2_036_mal2.disabled = true;
//        p6_2_036_mal2.value = '';
//    }
//}
//
//function valida037p6_2() {
//    var p6_2_037_local_si = document.getElementById("p6_2_037_local_si");
//    var p6_2_037_total1 = document.getElementById("p6_2_037_total1");
//    var p6_2_037_buen_estado1 = document.getElementById("p6_2_037_buen_estado1");
//    var p6_2_037_regular1 = document.getElementById("p6_2_037_regular1");
//    var p6_2_037_mal1 = document.getElementById("p6_2_037_mal1");
//    var p6_2_037_total2 = document.getElementById("p6_2_037_total2");
//    var p6_2_037_buen_estado2 = document.getElementById("p6_2_037_buen_estado2");
//    var p6_2_037_regular2 = document.getElementById("p6_2_037_regular2");
//    var p6_2_037_mal2 = document.getElementById("p6_2_037_mal2");
//
//    if (p6_2_037_local_si.checked) {
//        p6_2_037_total1.disabled = false;
//        p6_2_037_buen_estado1.disabled = false;
//        p6_2_037_regular1.disabled = false;
//        p6_2_037_mal1.disabled = false;
//        p6_2_037_total2.disabled = false;
//        p6_2_037_buen_estado2.disabled = false;
//        p6_2_037_regular2.disabled = false;
//        p6_2_037_mal2.disabled = false;
//    } else {
//        p6_2_037_total1.disabled = true;
//        p6_2_037_total1.value = '';
//        p6_2_037_buen_estado1.disabled = true;
//        p6_2_037_buen_estado1.value = '';
//        p6_2_037_regular1.disabled = true;
//        p6_2_037_regular1.value = '';
//        p6_2_037_mal1.disabled = true;
//        p6_2_037_mal1.value = '';
//        p6_2_037_total2.disabled = true;
//        p6_2_037_total2.value = '';
//        p6_2_037_buen_estado2.disabled = true;
//        p6_2_037_buen_estado2.value = '';
//        p6_2_037_regular2.disabled = true;
//        p6_2_037_regular2.value = '';
//        p6_2_037_mal2.disabled = true;
//        p6_2_037_mal2.value = '';
//    }
//}
//
//function Sum001_1p6_2() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p6_2_001_buen_estado1 = parseInt(document.getElementById('p6_2_001_buen_estado1').value) || 0;
//    var p6_2_001_regular1 = parseInt(document.getElementById('p6_2_001_regular1').value) || 0;
//    var p6_2_001_mal1 = parseInt(document.getElementById('p6_2_001_mal1').value) || 0;
//
//
//    // Calcular la suma
//    var total = p6_2_001_buen_estado1 + p6_2_001_regular1 + p6_2_001_mal1 ;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p6_2_001_total1').value = total;
//}
//
//function Sum002_1p6_2() {
//    var p6_2_002_buen_estado1 = parseInt(document.getElementById('p6_2_002_buen_estado1').value) || 0;
//    var p6_2_002_regular1 = parseInt(document.getElementById('p6_2_002_regular1').value) || 0;
//    var p6_2_002_mal1 = parseInt(document.getElementById('p6_2_002_mal1').value) || 0;
//
//    var total = p6_2_002_buen_estado1 + p6_2_002_regular1 + p6_2_002_mal1;
//    document.getElementById('p6_2_002_total1').value = total;
//}
//
//function Sum003_1p6_2() {
//    var p6_2_003_buen_estado1 = parseInt(document.getElementById('p6_2_003_buen_estado1').value) || 0;
//    var p6_2_003_regular1 = parseInt(document.getElementById('p6_2_003_regular1').value) || 0;
//    var p6_2_003_mal1 = parseInt(document.getElementById('p6_2_003_mal1').value) || 0;
//
//    var total = p6_2_003_buen_estado1 + p6_2_003_regular1 + p6_2_003_mal1;
//    document.getElementById('p6_2_003_total1').value = total;
//}
//
//function Sum004_1p6_2() {
//    var p6_2_004_buen_estado1 = parseInt(document.getElementById('p6_2_004_buen_estado1').value) || 0;
//    var p6_2_004_regular1 = parseInt(document.getElementById('p6_2_004_regular1').value) || 0;
//    var p6_2_004_mal1 = parseInt(document.getElementById('p6_2_004_mal1').value) || 0;
//
//    var total = p6_2_004_buen_estado1 + p6_2_004_regular1 + p6_2_004_mal1;
//    document.getElementById('p6_2_004_total1').value = total;
//}
//
//function Sum005_1p6_2() {
//    var p6_2_005_buen_estado1 = parseInt(document.getElementById('p6_2_005_buen_estado1').value) || 0;
//    var p6_2_005_regular1 = parseInt(document.getElementById('p6_2_005_regular1').value) || 0;
//    var p6_2_005_mal1 = parseInt(document.getElementById('p6_2_005_mal1').value) || 0;
//
//    var total = p6_2_005_buen_estado1 + p6_2_005_regular1 + p6_2_005_mal1;
//    document.getElementById('p6_2_005_total1').value = total;
//}
//
//function Sum006_1p6_2() {
//    var p6_2_006_buen_estado1 = parseInt(document.getElementById('p6_2_006_buen_estado1').value) || 0;
//    var p6_2_006_regular1 = parseInt(document.getElementById('p6_2_006_regular1').value) || 0;
//    var p6_2_006_mal1 = parseInt(document.getElementById('p6_2_006_mal1').value) || 0;
//
//    var total = p6_2_006_buen_estado1 + p6_2_006_regular1 + p6_2_006_mal1;
//    document.getElementById('p6_2_006_total1').value = total;
//}
//
//function Sum007_1p6_2() {
//    var p6_2_007_buen_estado1 = parseInt(document.getElementById('p6_2_007_buen_estado1').value) || 0;
//    var p6_2_007_regular1 = parseInt(document.getElementById('p6_2_007_regular1').value) || 0;
//    var p6_2_007_mal1 = parseInt(document.getElementById('p6_2_007_mal1').value) || 0;
//
//    var total = p6_2_007_buen_estado1 + p6_2_007_regular1 + p6_2_007_mal1;
//    document.getElementById('p6_2_007_total1').value = total;
//}
//
//function Sum008_1p6_2() {
//    var p6_2_008_buen_estado1 = parseInt(document.getElementById('p6_2_008_buen_estado1').value) || 0;
//    var p6_2_008_regular1 = parseInt(document.getElementById('p6_2_008_regular1').value) || 0;
//    var p6_2_008_mal1 = parseInt(document.getElementById('p6_2_008_mal1').value) || 0;
//
//    var total = p6_2_008_buen_estado1 + p6_2_008_regular1 + p6_2_008_mal1;
//    document.getElementById('p6_2_008_total1').value = total;
//}
//
//function Sum009_1p6_2() {
//    var p6_2_009_buen_estado1 = parseInt(document.getElementById('p6_2_009_buen_estado1').value) || 0;
//    var p6_2_009_regular1 = parseInt(document.getElementById('p6_2_009_regular1').value) || 0;
//    var p6_2_009_mal1 = parseInt(document.getElementById('p6_2_009_mal1').value) || 0;
//
//    var total = p6_2_009_buen_estado1 + p6_2_009_regular1 + p6_2_009_mal1;
//    document.getElementById('p6_2_009_total1').value = total;
//}
//
//function Sum010_1p6_2() {
//    var p6_2_010_buen_estado1 = parseInt(document.getElementById('p6_2_010_buen_estado1').value) || 0;
//    var p6_2_010_regular1 = parseInt(document.getElementById('p6_2_010_regular1').value) || 0;
//    var p6_2_010_mal1 = parseInt(document.getElementById('p6_2_010_mal1').value) || 0;
//
//    var total = p6_2_010_buen_estado1 + p6_2_010_regular1 + p6_2_010_mal1;
//    document.getElementById('p6_2_010_total1').value = total;
//}
//function Sum011_1p6_2() {
//    var p6_2_011_buen_estado1 = parseInt(document.getElementById('p6_2_011_buen_estado1').value) || 0;
//    var p6_2_011_regular1 = parseInt(document.getElementById('p6_2_011_regular1').value) || 0;
//    var p6_2_011_mal1 = parseInt(document.getElementById('p6_2_011_mal1').value) || 0;
//
//    var total = p6_2_011_buen_estado1 + p6_2_011_regular1 + p6_2_011_mal1;
//    document.getElementById('p6_2_011_total1').value = total;
//}
//function Sum012_1p6_2() {
//    var p6_2_012_buen_estado1 = parseInt(document.getElementById('p6_2_012_buen_estado1').value) || 0;
//    var p6_2_012_regular1 = parseInt(document.getElementById('p6_2_012_regular1').value) || 0;
//    var p6_2_012_mal1 = parseInt(document.getElementById('p6_2_012_mal1').value) || 0;
//
//    var total = p6_2_012_buen_estado1 + p6_2_012_regular1 + p6_2_012_mal1;
//    document.getElementById('p6_2_012_total1').value = total;
//}
//function Sum013_1p6_2() {
//    var p6_2_013_buen_estado1 = parseInt(document.getElementById('p6_2_013_buen_estado1').value) || 0;
//    var p6_2_013_regular1 = parseInt(document.getElementById('p6_2_013_regular1').value) || 0;
//    var p6_2_013_mal1 = parseInt(document.getElementById('p6_2_013_mal1').value) || 0;
//
//    var total = p6_2_013_buen_estado1 + p6_2_013_regular1 + p6_2_013_mal1;
//    document.getElementById('p6_2_013_total1').value = total;
//}
//function Sum014_1p6_2() {
//    var p6_2_014_buen_estado1 = parseInt(document.getElementById('p6_2_014_buen_estado1').value) || 0;
//    var p6_2_014_regular1 = parseInt(document.getElementById('p6_2_014_regular1').value) || 0;
//    var p6_2_014_mal1 = parseInt(document.getElementById('p6_2_014_mal1').value) || 0;
//
//    var total = p6_2_014_buen_estado1 + p6_2_014_regular1 + p6_2_014_mal1;
//    document.getElementById('p6_2_014_total1').value = total;
//}
//function Sum015_1p6_2() {
//    var p6_2_015_buen_estado1 = parseInt(document.getElementById('p6_2_015_buen_estado1').value) || 0;
//    var p6_2_015_regular1 = parseInt(document.getElementById('p6_2_015_regular1').value) || 0;
//    var p6_2_015_mal1 = parseInt(document.getElementById('p6_2_015_mal1').value) || 0;
//
//    var total = p6_2_015_buen_estado1 + p6_2_015_regular1 + p6_2_015_mal1;
//    document.getElementById('p6_2_015_total1').value = total;
//}
//
//function Sum016_1p6_2() {
//    var p6_2_016_buen_estado1 = parseInt(document.getElementById('p6_2_016_buen_estado1').value) || 0;
//    var p6_2_016_regular1 = parseInt(document.getElementById('p6_2_016_regular1').value) || 0;
//    var p6_2_016_mal1 = parseInt(document.getElementById('p6_2_016_mal1').value) || 0;
//
//    var total = p6_2_016_buen_estado1 + p6_2_016_regular1 + p6_2_016_mal1;
//    document.getElementById('p6_2_016_total1').value = total;
//}
//
//function Sum017_1p6_2() {
//    var p6_2_017_buen_estado1 = parseInt(document.getElementById('p6_2_017_buen_estado1').value) || 0;
//    var p6_2_017_regular1 = parseInt(document.getElementById('p6_2_017_regular1').value) || 0;
//    var p6_2_017_mal1 = parseInt(document.getElementById('p6_2_017_mal1').value) || 0;
//
//    var total = p6_2_017_buen_estado1 + p6_2_017_regular1 + p6_2_017_mal1;
//    document.getElementById('p6_2_017_total1').value = total;
//}
//
//function Sum018_1p6_2() {
//    var p6_2_018_buen_estado1 = parseInt(document.getElementById('p6_2_018_buen_estado1').value) || 0;
//    var p6_2_018_regular1 = parseInt(document.getElementById('p6_2_018_regular1').value) || 0;
//    var p6_2_018_mal1 = parseInt(document.getElementById('p6_2_018_mal1').value) || 0;
//
//    var total = p6_2_018_buen_estado1 + p6_2_018_regular1 + p6_2_018_mal1;
//    document.getElementById('p6_2_018_total1').value = total;
//}
//
//function Sum019_1p6_2() {
//    var p6_2_019_buen_estado1 = parseInt(document.getElementById('p6_2_019_buen_estado1').value) || 0;
//    var p6_2_019_regular1 = parseInt(document.getElementById('p6_2_019_regular1').value) || 0;
//    var p6_2_019_mal1 = parseInt(document.getElementById('p6_2_019_mal1').value) || 0;
//
//    var total = p6_2_019_buen_estado1 + p6_2_019_regular1 + p6_2_019_mal1;
//    document.getElementById('p6_2_019_total1').value = total;
//}
//
//function Sum020_1p6_2() {
//    var p6_2_020_buen_estado1 = parseInt(document.getElementById('p6_2_020_buen_estado1').value) || 0;
//    var p6_2_020_regular1 = parseInt(document.getElementById('p6_2_020_regular1').value) || 0;
//    var p6_2_020_mal1 = parseInt(document.getElementById('p6_2_020_mal1').value) || 0;
//
//    var total = p6_2_020_buen_estado1 + p6_2_020_regular1 + p6_2_020_mal1;
//    document.getElementById('p6_2_020_total1').value = total;
//}
//function Sum021_1p6_2() {
//    var p6_2_021_buen_estado1 = parseInt(document.getElementById('p6_2_021_buen_estado1').value) || 0;
//    var p6_2_021_regular1 = parseInt(document.getElementById('p6_2_021_regular1').value) || 0;
//    var p6_2_021_mal1 = parseInt(document.getElementById('p6_2_021_mal1').value) || 0;
//
//    var total = p6_2_021_buen_estado1 + p6_2_021_regular1 + p6_2_021_mal1;
//    document.getElementById('p6_2_021_total1').value = total;
//}
//function Sum022_1p6_2() {
//    var p6_2_022_buen_estado1 = parseInt(document.getElementById('p6_2_022_buen_estado1').value) || 0;
//    var p6_2_022_regular1 = parseInt(document.getElementById('p6_2_022_regular1').value) || 0;
//    var p6_2_022_mal1 = parseInt(document.getElementById('p6_2_022_mal1').value) || 0;
//
//    var total = p6_2_022_buen_estado1 + p6_2_022_regular1 + p6_2_022_mal1;
//    document.getElementById('p6_2_022_total1').value = total;
//}
//function Sum023_1p6_2() {
//    var p6_2_023_buen_estado1 = parseInt(document.getElementById('p6_2_023_buen_estado1').value) || 0;
//    var p6_2_023_regular1 = parseInt(document.getElementById('p6_2_023_regular1').value) || 0;
//    var p6_2_023_mal1 = parseInt(document.getElementById('p6_2_023_mal1').value) || 0;
//
//    var total = p6_2_023_buen_estado1 + p6_2_023_regular1 + p6_2_023_mal1;
//    document.getElementById('p6_2_023_total1').value = total;
//}
//function Sum024_1p6_2() {
//    var p6_2_024_buen_estado1 = parseInt(document.getElementById('p6_2_024_buen_estado1').value) || 0;
//    var p6_2_024_regular1 = parseInt(document.getElementById('p6_2_024_regular1').value) || 0;
//    var p6_2_024_mal1 = parseInt(document.getElementById('p6_2_024_mal1').value) || 0;
//
//    var total = p6_2_024_buen_estado1 + p6_2_024_regular1 + p6_2_024_mal1;
//    document.getElementById('p6_2_024_total1').value = total;
//}
//function Sum025_1p6_2() {
//    var p6_2_025_buen_estado1 = parseInt(document.getElementById('p6_2_025_buen_estado1').value) || 0;
//    var p6_2_025_regular1 = parseInt(document.getElementById('p6_2_025_regular1').value) || 0;
//    var p6_2_025_mal1 = parseInt(document.getElementById('p6_2_025_mal1').value) || 0;
//
//    var total = p6_2_025_buen_estado1 + p6_2_025_regular1 + p6_2_025_mal1;
//    document.getElementById('p6_2_025_total1').value = total;
//}
//function Sum026_1p6_2() {
//    var p6_2_026_buen_estado1 = parseInt(document.getElementById('p6_2_026_buen_estado1').value) || 0;
//    var p6_2_026_regular1 = parseInt(document.getElementById('p6_2_026_regular1').value) || 0;
//    var p6_2_026_mal1 = parseInt(document.getElementById('p6_2_026_mal1').value) || 0;
//
//    var total = p6_2_026_buen_estado1 + p6_2_026_regular1 + p6_2_026_mal1;
//    document.getElementById('p6_2_026_total1').value = total;
//}
//
//function Sum027_1p6_2() {
//    var p6_2_027_buen_estado1 = parseInt(document.getElementById('p6_2_027_buen_estado1').value) || 0;
//    var p6_2_027_regular1 = parseInt(document.getElementById('p6_2_027_regular1').value) || 0;
//    var p6_2_027_mal1 = parseInt(document.getElementById('p6_2_027_mal1').value) || 0;
//
//    var total = p6_2_027_buen_estado1 + p6_2_027_regular1 + p6_2_027_mal1;
//    document.getElementById('p6_2_027_total1').value = total;
//}
//
//function Sum028_1p6_2() {
//    var p6_2_028_buen_estado1 = parseInt(document.getElementById('p6_2_028_buen_estado1').value) || 0;
//    var p6_2_028_regular1 = parseInt(document.getElementById('p6_2_028_regular1').value) || 0;
//    var p6_2_028_mal1 = parseInt(document.getElementById('p6_2_028_mal1').value) || 0;
//
//    var total = p6_2_028_buen_estado1 + p6_2_028_regular1 + p6_2_028_mal1;
//    document.getElementById('p6_2_028_total1').value = total;
//}
//
//function Sum029_1p6_2() {
//    var p6_2_029_buen_estado1 = parseInt(document.getElementById('p6_2_029_buen_estado1').value) || 0;
//    var p6_2_029_regular1 = parseInt(document.getElementById('p6_2_029_regular1').value) || 0;
//    var p6_2_029_mal1 = parseInt(document.getElementById('p6_2_029_mal1').value) || 0;
//
//    var total = p6_2_029_buen_estado1 + p6_2_029_regular1 + p6_2_029_mal1;
//    document.getElementById('p6_2_029_total1').value = total;
//}
//
//function Sum030_1p6_2() {
//    var p6_2_030_buen_estado1 = parseInt(document.getElementById('p6_2_030_buen_estado1').value) || 0;
//    var p6_2_030_regular1 = parseInt(document.getElementById('p6_2_030_regular1').value) || 0;
//    var p6_2_030_mal1 = parseInt(document.getElementById('p6_2_030_mal1').value) || 0;
//
//    var total = p6_2_030_buen_estado1 + p6_2_030_regular1 + p6_2_030_mal1;
//    document.getElementById('p6_2_030_total1').value = total;
//}
//function Sum031_1p6_2() {
//    var p6_2_031_buen_estado1 = parseInt(document.getElementById('p6_2_031_buen_estado1').value) || 0;
//    var p6_2_031_regular1 = parseInt(document.getElementById('p6_2_031_regular1').value) || 0;
//    var p6_2_031_mal1 = parseInt(document.getElementById('p6_2_031_mal1').value) || 0;
//
//    var total = p6_2_031_buen_estado1 + p6_2_031_regular1 + p6_2_031_mal1;
//
//    document.getElementById('p6_2_031_total1').value = total;
//}
//
//function Sum032_1p6_2() {
//    var p6_2_032_buen_estado1 = parseInt(document.getElementById('p6_2_032_buen_estado1').value) || 0;
//    var p6_2_032_regular1 = parseInt(document.getElementById('p6_2_032_regular1').value) || 0;
//    var p6_2_032_mal1 = parseInt(document.getElementById('p6_2_032_mal1').value) || 0;
//
//    var total = p6_2_032_buen_estado1 + p6_2_032_regular1 + p6_2_032_mal1;
//
//    document.getElementById('p6_2_032_total1').value = total;
//}
//
//function Sum033_1p6_2() {
//    var p6_2_033_buen_estado1 = parseInt(document.getElementById('p6_2_033_buen_estado1').value) || 0;
//    var p6_2_033_regular1 = parseInt(document.getElementById('p6_2_033_regular1').value) || 0;
//    var p6_2_033_mal1 = parseInt(document.getElementById('p6_2_033_mal1').value) || 0;
//
//    var total = p6_2_033_buen_estado1 + p6_2_033_regular1 + p6_2_033_mal1;
//
//    document.getElementById('p6_2_033_total1').value = total;
//}
//
//function Sum034_1p6_2() {
//    var p6_2_034_buen_estado1 = parseInt(document.getElementById('p6_2_034_buen_estado1').value) || 0;
//    var p6_2_034_regular1 = parseInt(document.getElementById('p6_2_034_regular1').value) || 0;
//    var p6_2_034_mal1 = parseInt(document.getElementById('p6_2_034_mal1').value) || 0;
//
//    var total = p6_2_034_buen_estado1 + p6_2_034_regular1 + p6_2_034_mal1;
//
//    document.getElementById('p6_2_034_total1').value = total;
//}
//
//function Sum035_1p6_2() {
//    var p6_2_035_buen_estado1 = parseInt(document.getElementById('p6_2_035_buen_estado1').value) || 0;
//    var p6_2_035_regular1 = parseInt(document.getElementById('p6_2_035_regular1').value) || 0;
//    var p6_2_035_mal1 = parseInt(document.getElementById('p6_2_035_mal1').value) || 0;
//
//    var total = p6_2_035_buen_estado1 + p6_2_035_regular1 + p6_2_035_mal1;
//
//    document.getElementById('p6_2_035_total1').value = total;
//}
//
//function Sum036_1p6_2() {
//    var p6_2_036_buen_estado1 = parseInt(document.getElementById('p6_2_036_buen_estado1').value) || 0;
//    var p6_2_036_regular1 = parseInt(document.getElementById('p6_2_036_regular1').value) || 0;
//    var p6_2_036_mal1 = parseInt(document.getElementById('p6_2_036_mal1').value) || 0;
//
//    var total = p6_2_036_buen_estado1 + p6_2_036_regular1 + p6_2_036_mal1;
//
//    document.getElementById('p6_2_036_total1').value = total;
//}
//
//function Sum037_1p6_2() {
//    var p6_2_037_buen_estado1 = parseInt(document.getElementById('p6_2_037_buen_estado1').value) || 0;
//    var p6_2_037_regular1 = parseInt(document.getElementById('p6_2_037_regular1').value) || 0;
//    var p6_2_037_mal1 = parseInt(document.getElementById('p6_2_037_mal1').value) || 0;
//
//    var total = p6_2_037_buen_estado1 + p6_2_037_regular1 + p6_2_037_mal1;
//
//    document.getElementById('p6_2_037_total1').value = total;
//}
//
/////////////////////////////cuadro2////////////////////////////////////
//function Sum001_01p6_2() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p6_2_001_buen_estado2 = parseInt(document.getElementById('p6_2_001_buen_estado2').value) || 0;
//    var p6_2_001_regular2 = parseInt(document.getElementById('p6_2_001_regular2').value) || 0;
//    var p6_2_001_mal2 = parseInt(document.getElementById('p6_2_001_mal2').value) || 0;
//
//
//    // Calcular la suma
//    var total = p6_2_001_buen_estado2 + p6_2_001_regular2 + p6_2_001_mal2 ;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p6_2_001_total2').value = total;
//}
//
//function Sum002_2p6_2() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p6_2_002_buen_estado2 = parseInt(document.getElementById('p6_2_002_buen_estado2').value) || 0;
//    var p6_2_002_regular2 = parseInt(document.getElementById('p6_2_002_regular2').value) || 0;
//    var p6_2_002_mal2 = parseInt(document.getElementById('p6_2_002_mal2').value) || 0;
//
//
//    // Calcular la suma
//    var total = p6_2_002_buen_estado2 + p6_2_002_regular2 + p6_2_002_mal2 ;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p6_2_002_total2').value = total;
//}
//
//function Sum003_3p6_2() {
//    var p6_2_003_buen_estado2 = parseInt(document.getElementById('p6_2_003_buen_estado2').value) || 0;
//    var p6_2_003_regular2 = parseInt(document.getElementById('p6_2_003_regular2').value) || 0;
//    var p6_2_003_mal2 = parseInt(document.getElementById('p6_2_003_mal2').value) || 0;
//
//    var total = p6_2_003_buen_estado2 + p6_2_003_regular2 + p6_2_003_mal2;
//
//    document.getElementById('p6_2_003_total2').value = total;
//}
//
//function Sum004_4p6_2() {
//    var p6_2_004_buen_estado2 = parseInt(document.getElementById('p6_2_004_buen_estado2').value) || 0;
//    var p6_2_004_regular2 = parseInt(document.getElementById('p6_2_004_regular2').value) || 0;
//    var p6_2_004_mal2 = parseInt(document.getElementById('p6_2_004_mal2').value) || 0;
//
//    var total = p6_2_004_buen_estado2 + p6_2_004_regular2 + p6_2_004_mal2;
//
//    document.getElementById('p6_2_004_total2').value = total;
//}
//function Sum005_5p6_2() {
//    var p6_2_005_buen_estado2 = parseInt(document.getElementById('p6_2_005_buen_estado2').value) || 0;
//    var p6_2_005_regular2 = parseInt(document.getElementById('p6_2_005_regular2').value) || 0;
//    var p6_2_005_mal2 = parseInt(document.getElementById('p6_2_005_mal2').value) || 0;
//
//    var total = p6_2_005_buen_estado2 + p6_2_005_regular2 + p6_2_005_mal2;
//
//    document.getElementById('p6_2_005_total2').value = total;
//}
//function Sum006_6p6_2() {
//    var p6_2_006_buen_estado2 = parseInt(document.getElementById('p6_2_006_buen_estado2').value) || 0;
//    var p6_2_006_regular2 = parseInt(document.getElementById('p6_2_006_regular2').value) || 0;
//    var p6_2_006_mal2 = parseInt(document.getElementById('p6_2_006_mal2').value) || 0;
//
//    var total = p6_2_006_buen_estado2 + p6_2_006_regular2 + p6_2_006_mal2;
//
//    document.getElementById('p6_2_006_total2').value = total;
//}
//function Sum007_7p6_2() {
//    var p6_2_007_buen_estado2 = parseInt(document.getElementById('p6_2_007_buen_estado2').value) || 0;
//    var p6_2_007_regular2 = parseInt(document.getElementById('p6_2_007_regular2').value) || 0;
//    var p6_2_007_mal2 = parseInt(document.getElementById('p6_2_007_mal2').value) || 0;
//
//    var total = p6_2_007_buen_estado2 + p6_2_007_regular2 + p6_2_007_mal2;
//
//    document.getElementById('p6_2_007_total2').value = total;
//}
//function Sum008_8p6_2() {
//    var p6_2_008_buen_estado2 = parseInt(document.getElementById('p6_2_008_buen_estado2').value) || 0;
//    var p6_2_008_regular2 = parseInt(document.getElementById('p6_2_008_regular2').value) || 0;
//    var p6_2_008_mal2 = parseInt(document.getElementById('p6_2_008_mal2').value) || 0;
//
//    var total = p6_2_008_buen_estado2 + p6_2_008_regular2 + p6_2_008_mal2;
//
//    document.getElementById('p6_2_008_total2').value = total;
//}
//function Sum009_9p6_2() {
//    var p6_2_009_buen_estado2 = parseInt(document.getElementById('p6_2_009_buen_estado2').value) || 0;
//    var p6_2_009_regular2 = parseInt(document.getElementById('p6_2_009_regular2').value) || 0;
//    var p6_2_009_mal2 = parseInt(document.getElementById('p6_2_009_mal2').value) || 0;
//
//    var total = p6_2_009_buen_estado2 + p6_2_009_regular2 + p6_2_009_mal2;
//
//    document.getElementById('p6_2_009_total2').value = total;
//}
//function Sum010_10p6_2() {
//    var p6_2_010_buen_estado2 = parseInt(document.getElementById('p6_2_010_buen_estado2').value) || 0;
//    var p6_2_010_regular2 = parseInt(document.getElementById('p6_2_010_regular2').value) || 0;
//    var p6_2_010_mal2 = parseInt(document.getElementById('p6_2_010_mal2').value) || 0;
//
//    var total = p6_2_010_buen_estado2 + p6_2_010_regular2 + p6_2_010_mal2;
//
//    document.getElementById('p6_2_010_total2').value = total;
//}
//function Sum011_11p6_2() {
//    var p6_2_011_buen_estado2 = parseInt(document.getElementById('p6_2_011_buen_estado2').value) || 0;
//    var p6_2_011_regular2 = parseInt(document.getElementById('p6_2_011_regular2').value) || 0;
//    var p6_2_011_mal2 = parseInt(document.getElementById('p6_2_011_mal2').value) || 0;
//
//    var total = p6_2_011_buen_estado2 + p6_2_011_regular2 + p6_2_011_mal2;
//
//    document.getElementById('p6_2_011_total2').value = total;
//}
//
//function Sum012_12p6_2() {
//    var p6_2_012_buen_estado2 = parseInt(document.getElementById('p6_2_012_buen_estado2').value) || 0;
//    var p6_2_012_regular2 = parseInt(document.getElementById('p6_2_012_regular2').value) || 0;
//    var p6_2_012_mal2 = parseInt(document.getElementById('p6_2_012_mal2').value) || 0;
//
//    var total = p6_2_012_buen_estado2 + p6_2_012_regular2 + p6_2_012_mal2;
//
//    document.getElementById('p6_2_012_total2').value = total;
//}
//
//function Sum013_13p6_2() {
//    var p6_2_013_buen_estado2 = parseInt(document.getElementById('p6_2_013_buen_estado2').value) || 0;
//    var p6_2_013_regular2 = parseInt(document.getElementById('p6_2_013_regular2').value) || 0;
//    var p6_2_013_mal2 = parseInt(document.getElementById('p6_2_013_mal2').value) || 0;
//
//    var total = p6_2_013_buen_estado2 + p6_2_013_regular2 + p6_2_013_mal2;
//
//    document.getElementById('p6_2_013_total2').value = total;
//}
//
//function Sum014_14p6_2() {
//    var p6_2_014_buen_estado2 = parseInt(document.getElementById('p6_2_014_buen_estado2').value) || 0;
//    var p6_2_014_regular2 = parseInt(document.getElementById('p6_2_014_regular2').value) || 0;
//    var p6_2_014_mal2 = parseInt(document.getElementById('p6_2_014_mal2').value) || 0;
//
//    var total = p6_2_014_buen_estado2 + p6_2_014_regular2 + p6_2_014_mal2;
//
//    document.getElementById('p6_2_014_total2').value = total;
//}
//
//function Sum015_15p6_2() {
//    var p6_2_015_buen_estado2 = parseInt(document.getElementById('p6_2_015_buen_estado2').value) || 0;
//    var p6_2_015_regular2 = parseInt(document.getElementById('p6_2_015_regular2').value) || 0;
//    var p6_2_015_mal2 = parseInt(document.getElementById('p6_2_015_mal2').value) || 0;
//
//    var total = p6_2_015_buen_estado2 + p6_2_015_regular2 + p6_2_015_mal2;
//
//    document.getElementById('p6_2_015_total2').value = total;
//}
//
//
//function Sum016_16p6_2() {
//    var p6_2_016_buen_estado2 = parseInt(document.getElementById('p6_2_016_buen_estado2').value) || 0;
//    var p6_2_016_regular2 = parseInt(document.getElementById('p6_2_016_regular2').value) || 0;
//    var p6_2_016_mal2 = parseInt(document.getElementById('p6_2_016_mal2').value) || 0;
//
//    var total = p6_2_016_buen_estado2 + p6_2_016_regular2 + p6_2_016_mal2;
//
//    document.getElementById('p6_2_016_total2').value = total;
//}
//
//function Sum017_17p6_2() {
//    var p6_2_017_buen_estado2 = parseInt(document.getElementById('p6_2_017_buen_estado2').value) || 0;
//    var p6_2_017_regular2 = parseInt(document.getElementById('p6_2_017_regular2').value) || 0;
//    var p6_2_017_mal2 = parseInt(document.getElementById('p6_2_017_mal2').value) || 0;
//
//    var total = p6_2_017_buen_estado2 + p6_2_017_regular2 + p6_2_017_mal2;
//
//    document.getElementById('p6_2_017_total2').value = total;
//}
//
//function Sum018_18p6_2() {
//    var p6_2_018_buen_estado2 = parseInt(document.getElementById('p6_2_018_buen_estado2').value) || 0;
//    var p6_2_018_regular2 = parseInt(document.getElementById('p6_2_018_regular2').value) || 0;
//    var p6_2_018_mal2 = parseInt(document.getElementById('p6_2_018_mal2').value) || 0;
//
//    var total = p6_2_018_buen_estado2 + p6_2_018_regular2 + p6_2_018_mal2;
//
//    document.getElementById('p6_2_018_total2').value = total;
//}
//
//function Sum019_19p6_2() {
//    var p6_2_019_buen_estado2 = parseInt(document.getElementById('p6_2_019_buen_estado2').value) || 0;
//    var p6_2_019_regular2 = parseInt(document.getElementById('p6_2_019_regular2').value) || 0;
//    var p6_2_019_mal2 = parseInt(document.getElementById('p6_2_019_mal2').value) || 0;
//
//    var total = p6_2_019_buen_estado2 + p6_2_019_regular2 + p6_2_019_mal2;
//
//    document.getElementById('p6_2_019_total2').value = total;
//}
//
//function Sum020_20p6_2() {
//    var p6_2_020_buen_estado2 = parseInt(document.getElementById('p6_2_020_buen_estado2').value) || 0;
//    var p6_2_020_regular2 = parseInt(document.getElementById('p6_2_020_regular2').value) || 0;
//    var p6_2_020_mal2 = parseInt(document.getElementById('p6_2_020_mal2').value) || 0;
//
//    var total = p6_2_020_buen_estado2 + p6_2_020_regular2 + p6_2_020_mal2;
//
//    document.getElementById('p6_2_020_total2').value = total;
//}
//function Sum021_21p6_2() {
//    var p6_2_021_buen_estado2 = parseInt(document.getElementById('p6_2_021_buen_estado2').value) || 0;
//    var p6_2_021_regular2 = parseInt(document.getElementById('p6_2_021_regular2').value) || 0;
//    var p6_2_021_mal2 = parseInt(document.getElementById('p6_2_021_mal2').value) || 0;
//
//    var total = p6_2_021_buen_estado2 + p6_2_021_regular2 + p6_2_021_mal2;
//
//    document.getElementById('p6_2_021_total2').value = total;
//}
//
//function Sum022_22p6_2() {
//    var p6_2_022_buen_estado2 = parseInt(document.getElementById('p6_2_022_buen_estado2').value) || 0;
//    var p6_2_022_regular2 = parseInt(document.getElementById('p6_2_022_regular2').value) || 0;
//    var p6_2_022_mal2 = parseInt(document.getElementById('p6_2_022_mal2').value) || 0;
//
//    var total = p6_2_022_buen_estado2 + p6_2_022_regular2 + p6_2_022_mal2;
//
//    document.getElementById('p6_2_022_total2').value = total;
//}
//
//function Sum023_23p6_2() {
//    var p6_2_023_buen_estado2 = parseInt(document.getElementById('p6_2_023_buen_estado2').value) || 0;
//    var p6_2_023_regular2 = parseInt(document.getElementById('p6_2_023_regular2').value) || 0;
//    var p6_2_023_mal2 = parseInt(document.getElementById('p6_2_023_mal2').value) || 0;
//
//    var total = p6_2_023_buen_estado2 + p6_2_023_regular2 + p6_2_023_mal2;
//
//    document.getElementById('p6_2_023_total2').value = total;
//}
//
//function Sum024_24p6_2() {
//    var p6_2_024_buen_estado2 = parseInt(document.getElementById('p6_2_024_buen_estado2').value) || 0;
//    var p6_2_024_regular2 = parseInt(document.getElementById('p6_2_024_regular2').value) || 0;
//    var p6_2_024_mal2 = parseInt(document.getElementById('p6_2_024_mal2').value) || 0;
//
//    var total = p6_2_024_buen_estado2 + p6_2_024_regular2 + p6_2_024_mal2;
//
//    document.getElementById('p6_2_024_total2').value = total;
//}
//
//function Sum025_25p6_2() {
//    var p6_2_025_buen_estado2 = parseInt(document.getElementById('p6_2_025_buen_estado2').value) || 0;
//    var p6_2_025_regular2 = parseInt(document.getElementById('p6_2_025_regular2').value) || 0;
//    var p6_2_025_mal2 = parseInt(document.getElementById('p6_2_025_mal2').value) || 0;
//
//    var total = p6_2_025_buen_estado2 + p6_2_025_regular2 + p6_2_025_mal2;
//
//    document.getElementById('p6_2_025_total2').value = total;
//}
//
//function Sum026_26p6_2() {
//    var p6_2_026_buen_estado2 = parseInt(document.getElementById('p6_2_026_buen_estado2').value) || 0;
//    var p6_2_026_regular2 = parseInt(document.getElementById('p6_2_026_regular2').value) || 0;
//    var p6_2_026_mal2 = parseInt(document.getElementById('p6_2_026_mal2').value) || 0;
//
//    var total = p6_2_026_buen_estado2 + p6_2_026_regular2 + p6_2_026_mal2;
//
//    document.getElementById('p6_2_026_total2').value = total;
//}
//
//function Sum027_27p6_2() {
//    var p6_2_027_buen_estado2 = parseInt(document.getElementById('p6_2_027_buen_estado2').value) || 0;
//    var p6_2_027_regular2 = parseInt(document.getElementById('p6_2_027_regular2').value) || 0;
//    var p6_2_027_mal2 = parseInt(document.getElementById('p6_2_027_mal2').value) || 0;
//
//    var total = p6_2_027_buen_estado2 + p6_2_027_regular2 + p6_2_027_mal2;
//
//    document.getElementById('p6_2_027_total2').value = total;
//}
//
//function Sum028_28p6_2() {
//    var p6_2_028_buen_estado2 = parseInt(document.getElementById('p6_2_028_buen_estado2').value) || 0;
//    var p6_2_028_regular2 = parseInt(document.getElementById('p6_2_028_regular2').value) || 0;
//    var p6_2_028_mal2 = parseInt(document.getElementById('p6_2_028_mal2').value) || 0;
//
//    var total = p6_2_028_buen_estado2 + p6_2_028_regular2 + p6_2_028_mal2;
//
//    document.getElementById('p6_2_028_total2').value = total;
//}
//
//function Sum029_29p6_2() {
//    var p6_2_029_buen_estado2 = parseInt(document.getElementById('p6_2_029_buen_estado2').value) || 0;
//    var p6_2_029_regular2 = parseInt(document.getElementById('p6_2_029_regular2').value) || 0;
//    var p6_2_029_mal2 = parseInt(document.getElementById('p6_2_029_mal2').value) || 0;
//
//    var total = p6_2_029_buen_estado2 + p6_2_029_regular2 + p6_2_029_mal2;
//
//    document.getElementById('p6_2_029_total2').value = total;
//}
//
//function Sum030_30p6_2() {
//    var p6_2_030_buen_estado2 = parseInt(document.getElementById('p6_2_030_buen_estado2').value) || 0;
//    var p6_2_030_regular2 = parseInt(document.getElementById('p6_2_030_regular2').value) || 0;
//    var p6_2_030_mal2 = parseInt(document.getElementById('p6_2_030_mal2').value) || 0;
//
//    var total = p6_2_030_buen_estado2 + p6_2_030_regular2 + p6_2_030_mal2;
//
//    document.getElementById('p6_2_030_total2').value = total;
//}
//function Sum031_3p6_2() {
//    var p6_2_031_buen_estado2 = parseInt(document.getElementById('p6_2_031_buen_estado2').value) || 0;
//    var p6_2_031_regular2 = parseInt(document.getElementById('p6_2_031_regular2').value) || 0;
//    var p6_2_031_mal2 = parseInt(document.getElementById('p6_2_031_mal2').value) || 0;
//
//    var total = p6_2_031_buen_estado2 + p6_2_031_regular2 + p6_2_031_mal2;
//
//    document.getElementById('p6_2_031_total2').value = total;
//}
//
//function Sum032_3p6_2() {
//    var p6_2_032_buen_estado2 = parseInt(document.getElementById('p6_2_032_buen_estado2').value) || 0;
//    var p6_2_032_regular2 = parseInt(document.getElementById('p6_2_032_regular2').value) || 0;
//    var p6_2_032_mal2 = parseInt(document.getElementById('p6_2_032_mal2').value) || 0;
//
//    var total = p6_2_032_buen_estado2 + p6_2_032_regular2 + p6_2_032_mal2;
//
//    document.getElementById('p6_2_032_total2').value = total;
//}
//
//function Sum033_33p6_2() {
//    var p6_2_033_buen_estado2 = parseInt(document.getElementById('p6_2_033_buen_estado2').value) || 0;
//    var p6_2_033_regular2 = parseInt(document.getElementById('p6_2_033_regular2').value) || 0;
//    var p6_2_033_mal2 = parseInt(document.getElementById('p6_2_033_mal2').value) || 0;
//
//    var total = p6_2_033_buen_estado2 + p6_2_033_regular2 + p6_2_033_mal2;
//
//    document.getElementById('p6_2_033_total2').value = total;
//}
//
//function Sum034_34p6_2() {
//    var p6_2_034_buen_estado2 = parseInt(document.getElementById('p6_2_034_buen_estado2').value) || 0;
//    var p6_2_034_regular2 = parseInt(document.getElementById('p6_2_034_regular2').value) || 0;
//    var p6_2_034_mal2 = parseInt(document.getElementById('p6_2_034_mal2').value) || 0;
//
//    var total = p6_2_034_buen_estado2 + p6_2_034_regular2 + p6_2_034_mal2;
//
//    document.getElementById('p6_2_034_total2').value = total;
//}
//
//function Sum035_35p6_2() {
//    var p6_2_035_buen_estado2 = parseInt(document.getElementById('p6_2_035_buen_estado2').value) || 0;
//    var p6_2_035_regular2 = parseInt(document.getElementById('p6_2_035_regular2').value) || 0;
//    var p6_2_035_mal2 = parseInt(document.getElementById('p6_2_035_mal2').value) || 0;
//
//    var total = p6_2_035_buen_estado2 + p6_2_035_regular2 + p6_2_035_mal2;
//
//    document.getElementById('p6_2_035_total2').value = total;
//}
//
//function Sum036_36p6_2() {
//    var p6_2_036_buen_estado2 = parseInt(document.getElementById('p6_2_036_buen_estado2').value) || 0;
//    var p6_2_036_regular2 = parseInt(document.getElementById('p6_2_036_regular2').value) || 0;
//    var p6_2_036_mal2 = parseInt(document.getElementById('p6_2_036_mal2').value) || 0;
//
//    var total = p6_2_036_buen_estado2 + p6_2_036_regular2 + p6_2_036_mal2;
//
//    document.getElementById('p6_2_036_total2').value = total;
//}
//
//function Sum037_37p6_2() {
//    var p6_2_037_buen_estado2 = parseInt(document.getElementById('p6_2_037_buen_estado2').value) || 0;
//    var p6_2_037_regular2 = parseInt(document.getElementById('p6_2_037_regular2').value) || 0;
//    var p6_2_037_mal2 = parseInt(document.getElementById('p6_2_037_mal2').value) || 0;
//
//    var total = p6_2_037_buen_estado2 + p6_2_037_regular2 + p6_2_037_mal2;
//
//    document.getElementById('p6_2_037_total2').value = total;
//}
//
//////////// FIN SECCION 6//////
//
//////////// INICI0 SECCION 7//////
//
////////////7.1///////////////////
//
//function validaSumaTotalp7_1() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p7_1_mesa_unipers_estado = parseInt(document.getElementById('p7_1_mesa_unipers_estado').value) || 0;
//    var p7_1_mesa_unipers_manteni = parseInt(document.getElementById('p7_1_mesa_unipers_manteni').value) || 0;
//    var p7_1_mesa_unipers_sustituir = parseInt(document.getElementById('p7_1_mesa_unipers_sustituir').value) || 0;
//
//    var p7_1_mesa_multiple_estado = parseInt(document.getElementById('p7_1_mesa_multiple_estado').value) || 0;
//    var p7_1_mesa_multiple_manteni = parseInt(document.getElementById('p7_1_mesa_multiple_manteni').value) || 0;
//    var p7_1_mesa_multiple_sustituir = parseInt(document.getElementById('p7_1_mesa_multiple_sustituir').value) || 0;
//
//    // Calcular la suma
//    var total = p7_1_mesa_unipers_estado + p7_1_mesa_unipers_manteni + p7_1_mesa_unipers_sustituir + p7_1_mesa_multiple_estado + p7_1_mesa_multiple_manteni + p7_1_mesa_multiple_sustituir;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p7_1_cant_total').value = total;
//}
//
//function Sumasillap7_1() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p7_1_silla_buen_estado = parseInt(document.getElementById('p7_1_silla_buen_estado').value) || 0;
//    var p7_1_silla_mateni = parseInt(document.getElementById('p7_1_silla_mateni').value) || 0;
//    var p7_1_silla_sustituir = parseInt(document.getElementById('p7_1_silla_sustituir').value) || 0;
//
//    // Calcular la suma
//    var total = p7_1_silla_buen_estado + p7_1_silla_mateni + p7_1_silla_sustituir ;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p7_1_silla_cant_total').value = total;
//}
//function SumaPizap7_1() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p7_1_pizarra_buen_estado = parseInt(document.getElementById('p7_1_pizarra_buen_estado').value) || 0;
//    var p7_1_pizarra_manteni = parseInt(document.getElementById('p7_1_pizarra_manteni').value) || 0;
//    var p7_1_pizarra_sustituir = parseInt(document.getElementById('p7_1_pizarra_sustituir').value) || 0;
//
//    // Calcular la suma
//    var total = p7_1_pizarra_buen_estado + p7_1_pizarra_manteni + p7_1_pizarra_sustituir ;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p7_1_pizarra_cant_total').value = total;
//}
//
//
//
/////////7.2//////////////////////
//function Suma1p7_2() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p7_2_docnt1_buen_estado = parseInt(document.getElementById('p7_2_docnt1_buen_estado').value) || 0;
//    var p7_2_docnt1_regular_estado = parseInt(document.getElementById('p7_2_docnt1_regular_estado').value) || 0;
//    var p7_2_docnt1_mal_estado = parseInt(document.getElementById('p7_2_docnt1_mal_estado').value) || 0;
//
//    // Calcular la suma
//    var total = p7_2_docnt1_buen_estado + p7_2_docnt1_regular_estado + p7_2_docnt1_mal_estado;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p7_2_docnt1_cant_total').value = total;
//}
//
//function Suma2p7_2() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p7_2_docnt2_buen_estado = parseInt(document.getElementById('p7_2_docnt2_buen_estado').value) || 0;
//    var p7_2_docnt2_regular_estado = parseInt(document.getElementById('p7_2_docnt2_regular_estado').value) || 0;
//    var p7_2_docnt2_mal_estado = parseInt(document.getElementById('p7_2_docnt2_mal_estado').value) || 0;
//
//    // Calcular la suma
//    var total = p7_2_docnt2_buen_estado + p7_2_docnt2_regular_estado + p7_2_docnt2_mal_estado;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p7_2_docnt2_cant_total').value = total;
//}
//
//function Suma3p7_2() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p7_2_armario_buen_estado = parseInt(document.getElementById('p7_2_armario_buen_estado').value) || 0;
//    var p7_2_armario_regular_estado = parseInt(document.getElementById('p7_2_armario_regular_estado').value) || 0;
//    var p7_2_armario_mal_estado = parseInt(document.getElementById('p7_2_armario_mal_estado').value) || 0;
//
//    // Calcular la suma
//    var total = p7_2_armario_buen_estado + p7_2_armario_regular_estado + p7_2_armario_mal_estado;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p7_2_armario_cant_total').value = total;
//}
//
//function Suma4p7_2() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p7_2_estant_buen_estado = parseInt(document.getElementById('p7_2_estant_buen_estado').value) || 0;
//    var p7_2_estant_regular_estado = parseInt(document.getElementById('p7_2_estant_regular_estado').value) || 0;
//    var p7_2_estant_mal_estado = parseInt(document.getElementById('p7_2_estant_mal_estado').value) || 0;
//
//    // Calcular la suma
//    var total = p7_2_estant_buen_estado + p7_2_estant_regular_estado + p7_2_estant_mal_estado;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p7_2_estant_cant_total').value = total;
//}
//
//function Suma5p7_2() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p7_2_lockrs_buen_estado = parseInt(document.getElementById('p7_2_lockrs_buen_estado').value) || 0;
//    var p7_2_lockrs_regular_estado = parseInt(document.getElementById('p7_2_lockrs_regular_estado').value) || 0;
//    var p7_2_lockrs_mal_estado = parseInt(document.getElementById('p7_2_lockrs_mal_estado').value) || 0;
//
//    // Calcular la suma
//    var total = p7_2_lockrs_buen_estado + p7_2_lockrs_regular_estado + p7_2_lockrs_mal_estado;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p7_2_lockrs_cant_total').value = total;
//}
//
//function Suma6p7_2() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p7_2_librero_buen_estado = parseInt(document.getElementById('p7_2_librero_buen_estado').value) || 0;
//    var p7_2_librero_regular_estado = parseInt(document.getElementById('p7_2_librero_regular_estado').value) || 0;
//    var p7_2_librero_mal_estado = parseInt(document.getElementById('p7_2_librero_mal_estado').value) || 0;
//
//    // Calcular la suma
//    var total = p7_2_librero_buen_estado + p7_2_librero_regular_estado + p7_2_librero_mal_estado;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p7_2_librero_cant_total').value = total;
//}
//function Suma7p7_2() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p7_2_cocina_buen_estado = parseInt(document.getElementById('p7_2_cocina_buen_estado').value) || 0;
//    var p7_2_cocina_regular_estado = parseInt(document.getElementById('p7_2_cocina_regular_estado').value) || 0;
//    var p7_2_cocina_mal_estado = parseInt(document.getElementById('p7_2_cocina_mal_estado').value) || 0;
//
//    // Calcular la suma
//    var total = p7_2_cocina_buen_estado + p7_2_cocina_regular_estado + p7_2_cocina_mal_estado;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p7_2_cocina_cant_total').value = total;
//}
//function Suma8p7_2() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p7_2_cambiadr_buen_estado = parseInt(document.getElementById('p7_2_cambiadr_buen_estado').value) || 0;
//    var p7_2_cambiadr_regular_estado = parseInt(document.getElementById('p7_2_cambiadr_regular_estado').value) || 0;
//    var p7_2_cambiadr_mal_estado = parseInt(document.getElementById('p7_2_cambiadr_mal_estado').value) || 0;
//
//    // Calcular la suma
//    var total = p7_2_cambiadr_buen_estado + p7_2_cambiadr_regular_estado + p7_2_cambiadr_mal_estado;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p7_2_cambiadr_cant_total').value = total;
//}
//function Suma9p7_2() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p7_2_pies_buen_estado = parseInt(document.getElementById('p7_2_pies_buen_estado').value) || 0;
//    var p7_2_pies_regular_estado = parseInt(document.getElementById('p7_2_pies_regular_estado').value) || 0;
//    var p7_2_pies_mal_estado = parseInt(document.getElementById('p7_2_pies_mal_estado').value) || 0;
//
//    // Calcular la suma
//    var total = p7_2_pies_buen_estado + p7_2_pies_regular_estado + p7_2_pies_mal_estado;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p7_2_pies_cant_total').value = total;
//}
//
///////////7.3/////////////////////////
//function Sum01_p7_3() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p7_3_escritorio_buen_estado = parseInt(document.getElementById('p7_3_escritorio_buen_estado').value) || 0;
//    var p7_3_escritorio_regular_estado = parseInt(document.getElementById('p7_3_escritorio_regular_estado').value) || 0;
//    var p7_3_escritorio_mal_estado = parseInt(document.getElementById('p7_3_escritorio_mal_estado').value) || 0;
//
//    // Calcular la suma
//    var total = p7_3_escritorio_buen_estado + p7_3_escritorio_regular_estado + p7_3_escritorio_mal_estado;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p7_3_escritorio_cant_total').value = total;
//}
//
//function Sum02_p7_3() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p7_3_silla_buen_estado = parseInt(document.getElementById('p7_3_silla_buen_estado').value) || 0;
//    var p7_3_silla_regular_estado = parseInt(document.getElementById('p7_3_silla_regular_estado').value) || 0;
//    var p7_3_silla_mal_estado = parseInt(document.getElementById('p7_3_silla_mal_estado').value) || 0;
//
//    // Calcular la suma
//    var total = p7_3_silla_buen_estado + p7_3_silla_regular_estado + p7_3_silla_mal_estado;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p7_3_silla_cant_total').value = total;
//}
//
//function Sum03_p7_3() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p7_3_armario_buen_estado = parseInt(document.getElementById('p7_3_armario_buen_estado').value) || 0;
//    var p7_3_armario_regular_estado = parseInt(document.getElementById('p7_3_armario_regular_estado').value) || 0;
//    var p7_3_armario_mal_estado = parseInt(document.getElementById('p7_3_armario_mal_estado').value) || 0;
//
//    // Calcular la suma
//    var total = p7_3_armario_buen_estado + p7_3_armario_regular_estado + p7_3_armario_mal_estado;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p7_3_armario_cant_total').value = total;
//}
//
//function Sum04_p7_3() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p7_3_estant_buen_estado = parseInt(document.getElementById('p7_3_estant_buen_estado').value) || 0;
//    var p7_3_estant_regular_estado = parseInt(document.getElementById('p7_3_estant_regular_estado').value) || 0;
//    var p7_3_estant_mal_estado = parseInt(document.getElementById('p7_3_estant_mal_estado').value) || 0;
//
//    // Calcular la suma
//    var total = p7_3_estant_buen_estado + p7_3_estant_regular_estado + p7_3_estant_mal_estado;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p7_3_estant_cant_total').value = total;
//}
//
//function Sum05_p7_3() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p7_3_lockrs_buen_estado = parseInt(document.getElementById('p7_3_lockrs_buen_estado').value) || 0;
//    var p7_3_lockrs_regular_estado = parseInt(document.getElementById('p7_3_lockrs_regular_estado').value) || 0;
//    var p7_3_lockrs_mal_estado = parseInt(document.getElementById('p7_3_lockrs_mal_estado').value) || 0;
//
//    // Calcular la suma
//    var total = p7_3_lockrs_buen_estado + p7_3_lockrs_regular_estado + p7_3_lockrs_mal_estado;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p7_3_lockrs_cant_total').value = total;
//}
//
//function Sum06_p7_3() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p7_3_exhibidor_buen_estado = parseInt(document.getElementById('p7_3_exhibidor_buen_estado').value) || 0;
//    var p7_3_exhibidor_regular_estado = parseInt(document.getElementById('p7_3_exhibidor_regular_estado').value) || 0;
//    var p7_3_exhibidor_mal_estado = parseInt(document.getElementById('p7_3_exhibidor_mal_estado').value) || 0;
//
//    // Calcular la suma
//    var total = p7_3_exhibidor_buen_estado + p7_3_exhibidor_regular_estado + p7_3_exhibidor_mal_estado;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p7_3_exhibidor_cant_total').value = total;
//}
//
//function Sum07_p7_3() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p7_3_cocina_buen_estado = parseInt(document.getElementById('p7_3_cocina_buen_estado').value) || 0;
//    var p7_3_cocina_regular_estado = parseInt(document.getElementById('p7_3_cocina_regular_estado').value) || 0;
//    var p7_3_cocina_mal_estado = parseInt(document.getElementById('p7_3_cocina_mal_estado').value) || 0;
//
//    // Calcular la suma
//    var total = p7_3_cocina_buen_estado + p7_3_cocina_regular_estado + p7_3_cocina_mal_estado;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p7_3_cocina_cant_total').value = total;
//}
//
//function Sum08_p7_3() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p7_3_vitrina_buen_estado = parseInt(document.getElementById('p7_3_vitrina_buen_estado').value) || 0;
//    var p7_3_vitrina_regular_estado = parseInt(document.getElementById('p7_3_vitrina_regular_estado').value) || 0;
//    var p7_3_vitrina_mal_estado = parseInt(document.getElementById('p7_3_vitrina_mal_estado').value) || 0;
//
//    // Calcular la suma
//    var total = p7_3_vitrina_buen_estado + p7_3_vitrina_regular_estado + p7_3_vitrina_mal_estado;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p7_3_vitrina_cant_total').value = total;
//}
//function Sum09_p7_3() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p7_3_otros_buen_estado = parseInt(document.getElementById('p7_3_otros_buen_estado').value) || 0;
//    var p7_3_otros_regular_estado = parseInt(document.getElementById('p7_3_otros_regular_estado').value) || 0;
//    var p7_3_otros_mal_estado = parseInt(document.getElementById('p7_3_otros_mal_estado').value) || 0;
//
//    // Calcular la suma
//    var total = p7_3_otros_buen_estado + p7_3_otros_regular_estado + p7_3_otros_mal_estado;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p7_3_otros_cant_total').value = total;
//}
////////// FIN SECCION 7///////////////
//
//
//
/////////////// INICIO SECCION 8 ///////////
//
//////////////////1/////////////////////////////
//function SumaOperativap8_1() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p8_1_pc_estado2_estado = parseInt(document.getElementById('p8_1_pc_estado2_estado').value) || 0;
//    var p8_1_pc_estado2_reparacion = parseInt(document.getElementById('p8_1_pc_estado2_reparacion').value) || 0;
//
//
//    // Calcular la suma
//    var total = p8_1_pc_estado2_estado + p8_1_pc_estado2_reparacion ;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p8_1_pc_total_operativa1').value = total;
//}
//
//function SumaLaptop8_1() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p8_1_lapt_estado2_estado = parseInt(document.getElementById('p8_1_lapt_estado2_estado').value) || 0;
//    var p8_1_lapt_estado2_reparacion = parseInt(document.getElementById('p8_1_lapt_estado2_reparacion').value) || 0;
//
//
//    // Calcular la suma
//    var total = p8_1_lapt_estado2_estado + p8_1_lapt_estado2_reparacion ;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p8_1_lapt_total_operativa1').value = total;
//}
//
//function SumaXO8_1() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p8_1_xo_estado2_estado = parseInt(document.getElementById('p8_1_xo_estado2_estado').value) || 0;
//    var p8_1_xo_estado2_reparacion = parseInt(document.getElementById('p8_1_xo_estado2_reparacion').value) || 0;
//
//
//    // Calcular la suma
//    var total = p8_1_xo_estado2_estado + p8_1_xo_estado2_reparacion ;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p8_1_xo_total_operativa1').value = total;
//}
//
//function SumaTabl8_1() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p8_1_casa_estado2_estado = parseInt(document.getElementById('p8_1_casa_estado2_estado').value) || 0;
//    var p8_1_casa_estado2_reparacion = parseInt(document.getElementById('p8_1_casa_estado2_reparacion').value) || 0;
//
//
//    // Calcular la suma
//    var total = p8_1_casa_estado2_estado + p8_1_casa_estado2_reparacion ;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p8_1_casa_total_operativa1').value = total;
//}
//
//function SumaProp8_1() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p8_1_pro_estado2_estado = parseInt(document.getElementById('p8_1_pro_estado2_estado').value) || 0;
//    var p8_1_pro_estado2_reparacion = parseInt(document.getElementById('p8_1_pro_estado2_reparacion').value) || 0;
//
//
//    // Calcular la suma
//    var total = p8_1_pro_estado2_estado + p8_1_pro_estado2_reparacion ;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p8_1_pro_total_operativa1').value = total;
//}
//
//function SumaOtrp8_1() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p8_1_otro_estado2_estado = parseInt(document.getElementById('p8_1_otro_estado2_estado').value) || 0;
//    var p8_1_otro_estado2_reparacion = parseInt(document.getElementById('p8_1_otro_estado2_reparacion').value) || 0;
//
//
//    // Calcular la suma
//    var total = p8_1_otro_estado2_estado + p8_1_otro_estado2_reparacion ;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p8_1_otro_total_operativa1').value = total;
//}
//
//function SumMultip8_1() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p8_1_multi_estado2_estado = parseInt(document.getElementById('p8_1_multi_estado2_estado').value) || 0;
//    var p8_1_multi_estado2_reparacion = parseInt(document.getElementById('p8_1_multi_estado2_reparacion').value) || 0;
//
//
//    // Calcular la suma
//    var total = p8_1_multi_estado2_estado + p8_1_multi_estado2_reparacion ;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p8_1_multi_total_operativa1').value = total;
//}
//
//
//function SumPizap8_1() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p8_1_piza_estado2_estado = parseInt(document.getElementById('p8_1_piza_estado2_estado').value) || 0;
//    var p8_1_piza_estado2_reparacion = parseInt(document.getElementById('p8_1_piza_estado2_reparacion').value) || 0;
//
//
//    // Calcular la suma
//    var total = p8_1_piza_estado2_estado + p8_1_piza_estado2_reparacion ;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p8_1_piza_total_operativa1').value = total;
//}
//
//function SumAurip8_1() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p8_1_auri_estado2_estado = parseInt(document.getElementById('p8_1_auri_estado2_estado').value) || 0;
//    var p8_1_auri_estado2_reparacion = parseInt(document.getElementById('p8_1_auri_estado2_reparacion').value) || 0;
//
//
//    // Calcular la suma
//    var total = p8_1_auri_estado2_estado + p8_1_auri_estado2_reparacion ;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p8_1_auri_total_operativa1').value = total;
//}
///////////// 2////////////
//function Sum1p8_2() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p8_2_tv_buen_estado = parseInt(document.getElementById('p8_2_tv_buen_estado').value) || 0;
//    var p8_2_tv_reparacion = parseInt(document.getElementById('p8_2_tv_reparacion').value) || 0;
//
//
//    // Calcular la suma
//    var total = p8_2_tv_buen_estado + p8_2_tv_reparacion ;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p8_2_tv_total_operat').value = total;
//}
//
//function Sum2p8_2() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p8_2_dvd_buen_estado = parseInt(document.getElementById('p8_2_dvd_buen_estado').value) || 0;
//    var p8_2_dvd_reparacion = parseInt(document.getElementById('p8_2_dvd_reparacion').value) || 0;
//
//
//    // Calcular la suma
//    var total = p8_2_dvd_buen_estado + p8_2_dvd_reparacion ;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p8_2_dvd_total_operat').value = total;
//}
//
//function Sum3p8_2() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p8_2_radio_buen_estado = parseInt(document.getElementById('p8_2_radio_buen_estado').value) || 0;
//    var p8_2_radio_reparacion = parseInt(document.getElementById('p8_2_radio_reparacion').value) || 0;
//
//
//    // Calcular la suma
//    var total = p8_2_radio_buen_estado + p8_2_radio_reparacion ;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p8_2_radio_total_operat').value = total;
//}
//
//function Sum4p8_2() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p8_2_equip_buen_estado = parseInt(document.getElementById('p8_2_equip_buen_estado').value) || 0;
//    var p8_2_equip_reparacion = parseInt(document.getElementById('p8_2_equip_reparacion').value) || 0;
//
//
//    // Calcular la suma
//    var total = p8_2_equip_buen_estado + p8_2_equip_reparacion ;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p8_2_equip_total_operat').value = total;
//}
//
//function Sum5p8_2() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p8_2_parlan_buen_estado = parseInt(document.getElementById('p8_2_parlan_buen_estado').value) || 0;
//    var p8_2_parlan_reparacion = parseInt(document.getElementById('p8_2_parlan_reparacion').value) || 0;
//
//
//    // Calcular la suma
//    var total = p8_2_parlan_buen_estado + p8_2_parlan_reparacion ;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p8_2_parlan_total_operat').value = total;
//}
//
//function Sum6p8_2() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p8_2_fotoc_buen_estado = parseInt(document.getElementById('p8_2_fotoc_buen_estado').value) || 0;
//    var p8_2_fotoc_reparacion = parseInt(document.getElementById('p8_2_fotoc_reparacion').value) || 0;
//
//
//    // Calcular la suma
//    var total = p8_2_fotoc_buen_estado + p8_2_fotoc_reparacion ;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p8_2_fotoc_total_operat').value = total;
//}
//
//function Sum7p8_2() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p8_2_scan_buen_estado = parseInt(document.getElementById('p8_2_scan_buen_estado').value) || 0;
//    var p8_2_scan_reparacion = parseInt(document.getElementById('p8_2_scan_reparacion').value) || 0;
//
//
//    // Calcular la suma
//    var total = p8_2_scan_buen_estado + p8_2_scan_reparacion ;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p8_2_scan_total_operat').value = total;
//}
//
//function Sum8p8_2() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p8_2_impre_buen_estado = parseInt(document.getElementById('p8_2_impre_buen_estado').value) || 0;
//    var p8_2_impre_reparacion = parseInt(document.getElementById('p8_2_impre_reparacion').value) || 0;
//
//
//    // Calcular la suma
//    var total = p8_2_impre_buen_estado + p8_2_impre_reparacion ;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p8_2_impre_total_operat').value = total;
//}
//
//
//function Sum9p8_2() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p8_2_multi_buen_estado = parseInt(document.getElementById('p8_2_multi_buen_estado').value) || 0;
//    var p8_2_multi_reparacion = parseInt(document.getElementById('p8_2_multi_reparacion').value) || 0;
//
//
//    // Calcular la suma
//    var total = p8_2_multi_buen_estado + p8_2_multi_reparacion ;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p8_2_multi_total_operat').value = total;
//}
//
//function Sum10p8_2() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p8_2_ecran_buen_estado = parseInt(document.getElementById('p8_2_ecran_buen_estado').value) || 0;
//    var p8_2_ecran_reparacion = parseInt(document.getElementById('p8_2_ecran_reparacion').value) || 0;
//
//
//    // Calcular la suma
//    var total = p8_2_ecran_buen_estado + p8_2_ecran_reparacion ;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p8_2_ecran_total_operat').value = total;
//}
//
//
//function Sum11p8_2() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p8_2_clima_buen_estado = parseInt(document.getElementById('p8_2_clima_buen_estado').value) || 0;
//    var p8_2_clima_reparacion = parseInt(document.getElementById('p8_2_clima_reparacion').value) || 0;
//
//
//    // Calcular la suma
//    var total = p8_2_clima_buen_estado + p8_2_clima_reparacion ;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p8_2_clima_total_operat').value = total;
//}
//
//function Sum12p8_2() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p8_2_extra_buen_estado = parseInt(document.getElementById('p8_2_extra_buen_estado').value) || 0;
//    var p8_2_extra_reparacion = parseInt(document.getElementById('p8_2_extra_reparacion').value) || 0;
//
//
//    // Calcular la suma
//    var total = p8_2_extra_buen_estado + p8_2_extra_reparacion ;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p8_2_extra_total_operat').value = total;
//}
//
//
//////////// FIN SECCION 8/////////////////////
//////////////// SECCION 10 ////////////////////////
//
///////// 1.1 //////////
//
//function valida10_p1_1_A() {
//    var p10_1_1_a = document.getElementById("p10_1_1_a");
//    var p10_1_1_a_2020 = document.getElementById("p10_1_1_a_2020");
//    var p10_1_1_a_2021 = document.getElementById("p10_1_1_a_2021");
//    var p10_1_1_a_2022 = document.getElementById("p10_1_1_a_2022");
//    var p10_1_1_a_2023 = document.getElementById("p10_1_1_a_2023");
//    var p10_1_1_a_2024 = document.getElementById("p10_1_1_a_2024");
//    if (p10_1_1_a.checked) {
//
//        p10_1_1_a_2020.disabled = false;
//        p10_1_1_a_2021.disabled = false;
//        p10_1_1_a_2022.disabled = false;
//        p10_1_1_a_2023.disabled = false;
//        p10_1_1_a_2024.disabled = false;
//    } else {
//        // Desmarcar y deshabilitar p2_6_detalle, además de limpiar su contenido
//        p10_1_1_a_2020.disabled = true;
//        p10_1_1_a_2020.value = '';
//        p10_1_1_a_2021.disabled = true;
//        p10_1_1_a_2021.value = '';
//        p10_1_1_a_2022.disabled = true;
//        p10_1_1_a_2022.value = '';
//        p10_1_1_a_2023.disabled = true;
//        p10_1_1_a_2023.value = '';
//        p10_1_1_a_2024.disabled = true;
//        p10_1_1_a_2024.value = '';
//    }
//}
//
//
//function valida10_p1_1_B() {
//    var p10_1_1_b = document.getElementById("p10_1_1_b");
//    var p10_1_1_b_2020 = document.getElementById("p10_1_1_b_2020");
//    var p10_1_1_b_2021 = document.getElementById("p10_1_1_b_2021");
//    var p10_1_1_b_2022 = document.getElementById("p10_1_1_b_2022");
//    var p10_1_1_b_2023 = document.getElementById("p10_1_1_b_2023");
//    var p10_1_1_b_2024 = document.getElementById("p10_1_1_b_2024");
//    if (p10_1_1_b.checked) {
//
//        p10_1_1_b_2020.disabled = false;
//        p10_1_1_b_2021.disabled = false;
//        p10_1_1_b_2022.disabled = false;
//        p10_1_1_b_2023.disabled = false;
//        p10_1_1_b_2024.disabled = false;
//    } else {
//        // Desmarcar y deshabilitar p2_6_detalle, además de limpiar su contenido
//        p10_1_1_b_2020.disabled = true;
//        p10_1_1_b_2020.value = '';
//        p10_1_1_b_2021.disabled = true;
//        p10_1_1_b_2021.value = '';
//        p10_1_1_b_2022.disabled = true;
//        p10_1_1_b_2022.value = '';
//        p10_1_1_b_2023.disabled = true;
//        p10_1_1_b_2023.value = '';
//        p10_1_1_b_2024.disabled = true;
//        p10_1_1_b_2024.value = '';
//    }
//}
//
//function valida10_p1_1_C() {
//    var p10_1_1_c = document.getElementById("p10_1_1_c");
//    var p10_1_1_c_2020 = document.getElementById("p10_1_1_c_2020");
//    var p10_1_1_c_2021 = document.getElementById("p10_1_1_c_2021");
//    var p10_1_1_c_2022 = document.getElementById("p10_1_1_c_2022");
//    var p10_1_1_c_2023 = document.getElementById("p10_1_1_c_2023");
//    var p10_1_1_c_2024 = document.getElementById("p10_1_1_c_2024");
//    if (p10_1_1_c.checked) {
//
//        p10_1_1_c_2020.disabled = false;
//        p10_1_1_c_2021.disabled = false;
//        p10_1_1_c_2022.disabled = false;
//        p10_1_1_c_2023.disabled = false;
//        p10_1_1_c_2024.disabled = false;
//    } else {
//        // Desmarcar y deshabilitar p2_6_detalle, además de limpiar su contenido
//        p10_1_1_c_2020.disabled = true;
//        p10_1_1_c_2020.value = '';
//        p10_1_1_c_2021.disabled = true;
//        p10_1_1_c_2021.value = '';
//        p10_1_1_c_2022.disabled = true;
//        p10_1_1_c_2022.value = '';
//        p10_1_1_c_2023.disabled = true;
//        p10_1_1_c_2023.value = '';
//        p10_1_1_c_2024.disabled = true;
//        p10_1_1_c_2024.value = '';
//    }
//}
//
//function valida10_p1_1_D() {
//    var p10_1_1_d = document.getElementById("p10_1_1_d");
//    var p10_1_1_d_2020 = document.getElementById("p10_1_1_d_2020");
//    var p10_1_1_d_2021 = document.getElementById("p10_1_1_d_2021");
//    var p10_1_1_d_2022 = document.getElementById("p10_1_1_d_2022");
//    var p10_1_1_d_2023 = document.getElementById("p10_1_1_d_2023");
//    var p10_1_1_d_2024 = document.getElementById("p10_1_1_d_2024");
//    if (p10_1_1_d.checked) {
//
//        p10_1_1_d_2020.disabled = false;
//        p10_1_1_d_2021.disabled = false;
//        p10_1_1_d_2022.disabled = false;
//        p10_1_1_d_2023.disabled = false;
//        p10_1_1_d_2024.disabled = false;
//    } else {
//        // Desmarcar y deshabilitar p2_6_detalle, además de limpiar su contenido
//        p10_1_1_d_2020.disabled = true;
//        p10_1_1_d_2020.value = '';
//        p10_1_1_d_2021.disabled = true;
//        p10_1_1_d_2021.value = '';
//        p10_1_1_d_2022.disabled = true;
//        p10_1_1_d_2022.value = '';
//        p10_1_1_d_2023.disabled = true;
//        p10_1_1_d_2023.value = '';
//        p10_1_1_d_2024.disabled = true;
//        p10_1_1_d_2024.value = '';
//    }
//}
//
//
//function valida10_p1_1_E() {
//    var p10_1_1_e = document.getElementById("p10_1_1_e");
//    var p10_1_1_e_2020 = document.getElementById("p10_1_1_e_2020");
//    var p10_1_1_e_2021 = document.getElementById("p10_1_1_e_2021");
//    var p10_1_1_e_2022 = document.getElementById("p10_1_1_e_2022");
//    var p10_1_1_e_2023 = document.getElementById("p10_1_1_e_2023");
//    var p10_1_1_e_2024 = document.getElementById("p10_1_1_e_2024");
//    if (p10_1_1_e.checked) {
//
//        p10_1_1_e_2020.disabled = false;
//        p10_1_1_e_2021.disabled = false;
//        p10_1_1_e_2022.disabled = false;
//        p10_1_1_e_2023.disabled = false;
//        p10_1_1_e_2024.disabled = false;
//    } else {
//        // Desmarcar y deshabilitar p2_6_detalle, además de limpiar su contenido
//        p10_1_1_e_2020.disabled = true;
//        p10_1_1_e_2020.value = '';
//        p10_1_1_e_2021.disabled = true;
//        p10_1_1_e_2021.value = '';
//        p10_1_1_e_2022.disabled = true;
//        p10_1_1_e_2022.value = '';
//        p10_1_1_e_2023.disabled = true;
//        p10_1_1_e_2023.value = '';
//        p10_1_1_e_2024.disabled = true;
//        p10_1_1_e_2024.value = '';
//    }
//}
//
//function valida10_1_1_F() {
//    var p10_1_1_f_no = document.getElementById("p10_1_1_f_no");
//    var p10_1_1_a = document.getElementById("p10_1_1_a");
//    var p10_1_1_b = document.getElementById("p10_1_1_b");
//    var p10_1_1_c = document.getElementById("p10_1_1_c");
//    var p10_1_1_d = document.getElementById("p10_1_1_d");
//    var p10_1_1_e = document.getElementById("p10_1_1_e");
//    if (p10_1_1_f_no.checked) {
//        // Deshabilita y desmarca p10_1_1_a si p10_1_1_f_no está marcado
//        p10_1_1_a.disabled = true;
//        p10_1_1_a.checked = false;
//        p10_1_1_b.disabled = true;
//        p10_1_1_b.checked = false;
//        p10_1_1_c.disabled = true;
//        p10_1_1_c.checked = false;
//        p10_1_1_d.disabled = true;
//        p10_1_1_d.checked = false;
//        p10_1_1_e.disabled = true;
//        p10_1_1_e.checked = false;
//        valida10_p1_1_A();
//        valida10_p1_1_B();
//        valida10_p1_1_C();
//        valida10_p1_1_D();
//        valida10_p1_1_E();
//    } else {
//        // Habilita p10_1_1_a si p10_1_1_f_no no está marcado
//        p10_1_1_a.disabled = false;
//        p10_1_1_b.disabled = false;
//        p10_1_1_c.disabled = false;
//        p10_1_1_d.disabled = false;
//        p10_1_1_e.disabled = false;
//
//    }
//}
//
//
///////// 1.2 //////////
//function valida_p1_2() {
//    var p10_1_2_si = document.getElementById("p10_1_2_si");
//    var p10_1_3_resolucion = document.getElementById("p10_1_3_resolucion");
//    var p10_1_3_fecha = document.getElementById("p10_1_3_fecha");
//    var p10_1_3_ingresos_propios = document.getElementById("p10_1_3_ingresos_propios");
//    var p10_1_3_ingresos_product = document.getElementById("p10_1_3_ingresos_product");
//
//    if (p10_1_2_si.checked) {
//
//        p10_1_3_resolucion.disabled = false;
//        p10_1_3_fecha.disabled = false;
//        p10_1_3_ingresos_propios.disabled = false;
//        p10_1_3_ingresos_product.disabled = false;
//    } else {
//
//        p10_1_3_resolucion.disabled = true;
//        p10_1_3_resolucion.value = "";
//        p10_1_3_fecha.disabled = true;
//        p10_1_3_fecha.value = "";
//        p10_1_3_ingresos_propios.disabled = true;
//        p10_1_3_ingresos_propios.value = "";
//        p10_1_3_ingresos_product.disabled = true;
//        p10_1_3_ingresos_product.value = "";
//    }
//}
///////1.4////
//function valida10_p1_4() {
//    var radioSi = document.getElementById('p10_1_4_si');
//    var p10_1_5_detalle = document.getElementById('p10_1_5_detalle');
//    var p10_1_5a = document.getElementById('p10_1_5a');
//    var p10_1_5b = document.getElementById('p10_1_5b');
//    var p10_1_5c = document.getElementById('p10_1_5c');
//    var p10_1_5d = document.getElementById('p10_1_5d');
//    var p10_1_5e = document.getElementById('p10_1_5e');
//    var p10_1_5f = document.getElementById('p10_1_5f');
//    var p10_1_5g = document.getElementById('p10_1_5g');
//    var p10_1_6_codigo_u = document.getElementById('p10_1_6_codigo_u');
//
//
//    if (radioSi.checked) {
//
//        // p14_9_1_otros.disabled = false;  // Habilitar el campo 'otro'
//        // p14_9_1_otros.required = true;
//        p10_1_5a.disabled = false;
//        p10_1_5a.disabled = false;
//        p10_1_5b.disabled = false;
//        p10_1_5b.disabled = false;
//        p10_1_5c.disabled = false;
//        p10_1_5c.disabled = false;
//        p10_1_5d.disabled = false;
//        p10_1_5d.disabled = false;
//        p10_1_5e.disabled = false;
//        p10_1_5e.disabled = false;
//        p10_1_5f.disabled = false;
//        p10_1_5f.disabled = false;
//        p10_1_5g.disabled = false;
//        p10_1_5g.disabled = false;
//
//        p10_1_6_codigo_u.disabled = false;
//        valida_p1_5_otro();
//    } else {
//        p10_1_5_detalle.disabled = true;
//        p10_1_5_detalle.required = true;
//        p10_1_5_detalle.value = "";
//
//        p10_1_6_codigo_u.disabled = true;
//        p10_1_6_codigo_u.required = true;
//        p10_1_6_codigo_u.value = "";
//
//        p10_1_5a.disabled = true;
//        p10_1_5a.checked = false;
//        p10_1_5a.disabled = true;
//        p10_1_5a.checked = false;
//
//        p10_1_5b.disabled = true;
//        p10_1_5b.checked = false;
//        p10_1_5b.disabled = true;
//        p10_1_5b.checked = false;
//
//        p10_1_5c.disabled = true;
//        p10_1_5c.checked = false;
//        p10_1_5c.disabled = true;
//        p10_1_5c.checked = false;
//
//        p10_1_5d.disabled = true;
//        p10_1_5d.checked = false;
//        p10_1_5d.disabled = true;
//        p10_1_5d.checked = false;
//
//        p10_1_5e.disabled = true;
//        p10_1_5e.checked = false;
//        p10_1_5e.disabled = true;
//        p10_1_5e.checked = false;
//
//        p10_1_5f.disabled = true;
//        p10_1_5f.checked = false;
//        p10_1_5f.disabled = true;
//        p10_1_5f.checked = false;
//
//        p10_1_5g.disabled = true;
//        p10_1_5g.checked = false;
//        p10_1_5g.disabled = true;
//        p10_1_5g.checked = false;
//    }
//}
//
//function valida_p1_5_otro() {
//    var p10_1_5g = document.getElementById("p10_1_5g");
//    var p10_1_5_detalle = document.getElementById("p10_1_5_detalle");
//
//
//    if (p10_1_5g.checked) {
//
//        p10_1_5_detalle.disabled = false;
//    } else {
//        // Desmarcar y deshabilitar p2_6_detalle, además de limpiar su contenido
//        p10_1_5_detalle.disabled = true;
//        p10_1_5_detalle.value = '';
//    }
//}
//
//
//////////////// FIN SECCION 10 ///////////////////
//
//////////////// SECCION 11 ///////////////////
//
///////1.2///
//function valida11_1_2_no() {
//
//    if ($("#id_ficha").val() !== null && $("#id_ficha").val() !== "") {
//        // Obtener el estado del checkbox principal
//        var checkNo = document.getElementById('p11_1_2_no').checked;
//
//        // Obtener los checkboxes que se deben deshabilitar y limpiar
//        var checkboxes = [
//            document.getElementById('p11_1_2_mujeres'),
//            document.getElementById('p11_1_2_hombres'),
//        ];
//
//        // Si el checkbox principal está marcado, deshabilitar y limpiar los demás
//        if (checkNo) {
//            checkboxes.forEach(function (checkbox) {
//                checkbox.checked = false; // Limpiar el checkbox
//                checkbox.disabled = true; // Deshabilitar el checkbox
//                checkbox.value = '';
//            });
//            valida11_1_2_no();
//        } else {
//            checkboxes.forEach(function (checkbox) {
//                checkbox.disabled = false; // Habilitar el checkbox si no está marcado
//            });
//        }
//    }
//}
//
//////1.3/////
//
//function validap11_1_3_no() {
//
//    if ($("#id_ficha").val() !== null && $("#id_ficha").val() !== "") {
//        // Obtener el estado del checkbox principal
//        var checkNo = document.getElementById('p11_1_3_no').checked;
//
//        // Obtener los checkboxes que se deben deshabilitar y limpiar
//        var checkboxes = [
//            document.getElementById('p11_1_3_precise'),
//
//        ];
//
//        // Si el checkbox principal está marcado, deshabilitar y limpiar los demás
//        if (checkNo) {
//            checkboxes.forEach(function (checkbox) {
//                checkbox.checked = false; // Limpiar el checkbox
//                checkbox.disabled = true; // Deshabilitar el checkbox
//                checkbox.value = '';
//            });
//            validap11_1_3_no();
//        } else {
//            checkboxes.forEach(function (checkbox) {
//                checkbox.disabled = false; // Habilitar el checkbox si no está marcado
//            });
//        }
//    }
//}
//
//
//////1.7/////
//
//function validap11_1_7_no() {
//
//    if ($("#id_ficha").val() !== null && $("#id_ficha").val() !== "") {
//        // Obtener el estado del checkbox principal
//        var checkNo = document.getElementById('p11_1_7_no').checked;
//
//        // Obtener los checkboxes que se deben deshabilitar y limpiar
//        var checkboxes = [
//            document.getElementById('p11_1_7_eest'),
//            document.getElementById('p11_1_7_iest'),
//            document.getElementById('p11_1_7_cetpro'),
//
//        ];
//
//        // Si el checkbox principal está marcado, deshabilitar y limpiar los demás
//        if (checkNo) {
//            checkboxes.forEach(function (checkbox) {
//                checkbox.checked = false; // Limpiar el checkbox
//                checkbox.disabled = true; // Deshabilitar el checkbox
//                checkbox.value = '';
//            });
//            validap11_1_3_no();
//        } else {
//            checkboxes.forEach(function (checkbox) {
//                checkbox.disabled = false; // Habilitar el checkbox si no está marcado
//            });
//        }
//    }
//}
//
//
/////////1.9//////
//
//function validap11_1_9_si() {
//    var p11_1_9_si = document.getElementById("p11_1_9_si");
//    var p11_1_10_si = document.getElementById("p11_1_10_si");
//    var p11_1_10_no = document.getElementById("p11_1_10_no");
//
//    var p11_1_11_a_si = document.getElementById("p11_1_11_a_si");
//    var p11_1_11_a_no = document.getElementById("p11_1_11_a_no");
//    var p11_1_11_b_si = document.getElementById("p11_1_11_b_si");
//    var p11_1_11_b_no = document.getElementById("p11_1_11_b_no");
//    var p11_1_11_c_si = document.getElementById("p11_1_11_c_si");
//    var p11_1_11_c_no = document.getElementById("p11_1_11_c_no");
//    if (p11_1_9_si.checked) {
//        p11_1_10_si.disabled = false;
//        p11_1_10_no.disabled = false;
//        p11_1_11_a_si.disabled = false;
//        p11_1_11_a_no.disabled = false;
//        p11_1_11_b_si.disabled = false;
//        p11_1_11_b_no.disabled = false;
//        p11_1_11_c_si.disabled = false;
//        p11_1_11_c_no.disabled = false;
//    } else {
//        p11_1_10_si.disabled = true;
//        p11_1_10_si.checked = false;
//        p11_1_10_no.disabled = true;
//        p11_1_10_no.checked = false;
//
//        p11_1_11_a_si.disabled = true;
//        p11_1_11_a_si.checked = false;
//        p11_1_11_a_no.disabled = true;
//        p11_1_11_a_no.checked = false;
//
//        p11_1_11_b_si.disabled = true;
//        p11_1_11_b_si.checked = false;
//        p11_1_11_b_no.disabled = true;
//        p11_1_11_b_no.checked = false;
//
//        p11_1_11_c_si.disabled = true;
//        p11_1_11_c_si.checked = false;
//        p11_1_11_c_no.disabled = true;
//        p11_1_11_c_no.checked = false;
//
//
//    }
//}
////////2.1////
//
//function valida11_2_1_B() {
//    var p11_2_1_b_si = document.getElementById("p11_2_1_b_si");
//    var p11_2_2_si = document.getElementById("p11_2_2_si");
//    var p11_2_2_no = document.getElementById("p11_2_2_no");
//    if (p11_2_1_b_si.checked) {
//        p11_2_2_si.disabled = false;
//        p11_2_2_no.disabled = false;
//    } else {
//        p11_2_2_si.disabled = true;
//        p11_2_2_si.checked = false;
//        p11_2_2_no.disabled = true;
//        p11_2_2_no.checked = false;
//        valida11_2_2();
//    }
//}
//
//function valida11_2_1_C() {
//    var p11_2_1_c_si = document.getElementById("p11_2_1_c_si");
//    var p11_2_3_si = document.getElementById("p11_2_3_si");
//    var p11_2_3_no = document.getElementById("p11_2_3_no");
//    if (p11_2_1_c_si.checked) {
//        p11_2_3_si.disabled = false;
//        p11_2_3_no.disabled = false;
//    } else {
//        p11_2_3_si.disabled = true;
//        p11_2_3_si.checked = false;
//        p11_2_3_no.disabled = true;
//        p11_2_3_no.checked = false;
//        valida11_2_3();
//    }
//}
/////////2.2///
//function valida11_2_2() {
//    var p11_2_2_si = document.getElementById("p11_2_2_si");
//    var p11_2_2_acciones = document.getElementById("p11_2_2_acciones");
//    if (p11_2_2_si.checked) {
//        p11_2_2_acciones.disabled = false;
//    } else {
//        // Desmarcar y deshabilitar p2_6_detalle, además de limpiar su contenido
//        p11_2_2_acciones.disabled = true;
//        p11_2_2_acciones.value = '';
//    }
//}
////////2.3///
//function valida11_2_3() {
//    var p11_2_3_si = document.getElementById("p11_2_3_si");
//    var p11_2_3_acciones = document.getElementById("p11_2_3_acciones");
//    if (p11_2_3_si.checked) {
//        p11_2_3_acciones.disabled = false;
//    } else {
//        // Desmarcar y deshabilitar p2_6_detalle, además de limpiar su contenido
//        p11_2_3_acciones.disabled = true;
//        p11_2_3_acciones.value = '';
//    }
//}
//
/////// 2.6/////
//function valida11_2_6() {
//    var p11_2_6_si = document.getElementById("p11_2_6_si");
//    var p11_2_7_doc = document.getElementById("p11_2_7_doc");
//    var p11_2_7_lengua = document.getElementById("p11_2_7_lengua");
//
//    if (p11_2_6_si.checked) {
//        p11_2_7_doc.disabled = false;
//        p11_2_7_doc.required= true;
//        p11_2_7_lengua.disabled = false;
//        p11_2_7_lengua.required= true;
//
//    } else {
//        // Desmarcar y deshabilitar p2_6_detalle, además de limpiar su contenido
//        p11_2_7_doc.disabled = true;
//        p11_2_7_doc.value = '';
//        p11_2_7_lengua.disabled = true;
//        p11_2_7_lengua.value = '';
//    }
//}
//
//////////////2.9 //////////////
//
//function valida11_2_9() {
//    var p11_2_9_si = document.getElementById("p11_2_9_si");
//    var p11_2_10_a = document.getElementById("p11_2_10_a");
//    var p11_2_10_b = document.getElementById("p11_2_10_b");
//    var p11_2_10_c = document.getElementById("p11_2_10_c");
//    var p11_2_10_d = document.getElementById("p11_2_10_d");
//    var p11_2_10_e = document.getElementById("p11_2_10_e");
//    var p11_2_10_f = document.getElementById("p11_2_10_f");
//    var p11_2_10_g_otro = document.getElementById("p11_2_10_g_otro");
//    if (p11_2_9_si.checked) {
//        p11_2_10_a.disabled = false;
//        p11_2_10_b.disabled = false;
//        p11_2_10_c.disabled = false;
//        p11_2_10_d.disabled = false;
//        p11_2_10_e.disabled = false;
//        p11_2_10_f.disabled = false;
//        p11_2_10_g_otro.disabled = false;
//    } else {
//        p11_2_10_a.disabled = true;
//        p11_2_10_a.checked = false;
//        p11_2_10_b.disabled = true;
//        p11_2_10_b.checked = false;
//        p11_2_10_c.disabled = true;
//        p11_2_10_c.checked = false;
//        p11_2_10_d.disabled = true;
//        p11_2_10_d.checked = false;
//        p11_2_10_e.disabled = true;
//        p11_2_10_e.checked = false;
//        p11_2_10_f.disabled = true;
//        p11_2_10_b.checked = false;
//        p11_2_10_g_otro.disabled = true;
//        p11_2_10_g_otro.checked = false;
//        Validap11_2_10_otro();
//    }
//}
//////////////2.10 ///////////////
//function Validap11_2_10_otro() {
//    var p11_2_10_g_otro = document.getElementById("p11_2_10_g_otro");
//    var p11_2_10_otro_detalle = document.getElementById("p11_2_10_otro_detalle");
//
//
//    if (p11_2_10_g_otro.checked) {
//
//        p11_2_10_otro_detalle.disabled = false;
//    } else {
//        // Desmarcar y deshabilitar p2_6_detalle, además de limpiar su contenido
//        p11_2_10_otro_detalle.disabled = true;
//        p11_2_10_otro_detalle.value = '';
//    }
//}
//
///////// 2.11 ///////
//function valida11_2_11() {
//    var p11_2_11_si = document.getElementById("p11_2_11_si");
//    var p11_2_12_a_si = document.getElementById("p11_2_12_a_si");
//    var p11_2_12_a_no = document.getElementById("p11_2_12_a_no");
//    var p11_2_12_b_si = document.getElementById("p11_2_12_b_si");
//    var p11_2_12_b_no = document.getElementById("p11_2_12_b_no");
//    var p11_2_12_c_si = document.getElementById("p11_2_12_c_si");
//    var p11_2_12_c_no = document.getElementById("p11_2_12_c_no");
//    var p11_2_12_d_si = document.getElementById("p11_2_12_d_si");
//    var p11_2_12_d_no = document.getElementById("p11_2_12_d_no");
//    var p11_2_12_e_si = document.getElementById("p11_2_12_e_si");
//    var p11_2_12_e_no = document.getElementById("p11_2_12_e_no");
//    if (p11_2_11_si.checked) {
//        p11_2_12_a_si.disabled = false;
//        p11_2_12_a_no.disabled = false;
//        p11_2_12_b_si.disabled = false;
//        p11_2_12_b_no.disabled = false;
//        p11_2_12_c_si.disabled = false;
//        p11_2_12_c_no.disabled = false;
//        p11_2_12_d_si.disabled = false;
//        p11_2_12_d_no.disabled = false;
//        p11_2_12_e_si.disabled = false;
//        p11_2_12_e_no.disabled = false;
//    } else {
//        p11_2_12_a_si.disabled = true;
//        p11_2_12_a_si.checked = false;
//        p11_2_12_a_no.disabled = true;
//        p11_2_12_a_no.checked = false;
//        p11_2_12_b_si.disabled = true;
//        p11_2_12_b_si.checked = false;
//        p11_2_12_b_no.disabled = true;
//        p11_2_12_b_no.checked = false;
//        p11_2_12_c_si.disabled = true;
//        p11_2_12_c_si.checked = false;
//        p11_2_12_c_no.disabled = true;
//        p11_2_12_c_no.checked = false;
//        p11_2_12_d_si.disabled = true;
//        p11_2_12_d_si.checked = false;
//        p11_2_12_d_no.disabled = true;
//        p11_2_12_d_no.checked = false;
//        p11_2_12_e_si.disabled = true;
//        p11_2_12_e_si.checked = false;
//        p11_2_12_e_no.disabled = true;
//        p11_2_12_e_no.checked = false;
//
//    }
//}
//
////////2.13 ///////////////
//function valida11_2_13() {
//    var p11_2_13_si = document.getElementById("p11_2_13_si");
//    var p11_2_15 = document.getElementById("p11_2_15");
//    var p11_2_16 = document.getElementById("p11_2_16");
//
//
//    if (p11_2_13_si.checked) {
//
//        p11_2_15.disabled = false;
//        p11_2_16.disabled = false;
//    } else {
//        // Desmarcar y deshabilitar p2_6_detalle, además de limpiar su contenido
//        p11_2_15.disabled = true;
//        p11_2_15.value = '';
//        p11_2_16.disabled = true;
//        p11_2_16.value = '';
//    }
//}
//
/////////// 2.18 //////
//
//function valida11_2_18() {
//    var p11_2_18_si = document.getElementById("p11_2_18_si");
//    var p11_2_19_a = document.getElementById("p11_2_19_a");
//    var p11_2_19_b = document.getElementById("p11_2_19_b");
//    var p11_2_19_c_otra = document.getElementById("p11_2_19_c_otra");
//
//    if (p11_2_18_si.checked) {
//        p11_2_19_a.disabled = false;
//        p11_2_19_b.disabled = false;
//        p11_2_19_c_otra.disabled = false;
//
//    } else {
//        p11_2_19_a.disabled = true;
//        p11_2_19_a.checked = false;
//        p11_2_19_b.disabled = true;
//        p11_2_19_b.checked = false;
//        p11_2_19_c_otra.disabled = true;
//        p11_2_19_c_otra.checked = false;
//
//        Validap11_2_19_c_otra();
//    }
//}
//
/////////////2.19//////////
//function Validap11_2_19_c_otra() {
//    var p11_2_19_c_otra = document.getElementById("p11_2_19_c_otra");
//    var p11_2_19_otra_detalle = document.getElementById("p11_2_19_otra_detalle");
//
//
//
//    if (p11_2_19_c_otra.checked) {
//
//        p11_2_19_otra_detalle.disabled = false;
//
//    } else {
//        // Desmarcar y deshabilitar p2_6_detalle, además de limpiar su contenido
//        p11_2_19_otra_detalle.disabled = true;
//        p11_2_19_otra_detalle.value = '';
//
//    }
//}
//
/////////////2.20 //////
//function Validap11_2_20_g_otro() {
//    var p11_2_20_g_otro = document.getElementById("p11_2_20_g_otro");
//    var p11_2_20_otro_detall = document.getElementById("p11_2_20_otro_detall");
//
//    if (p11_2_20_g_otro.checked) {
//        p11_2_20_otro_detall.disabled = false;
//    } else {
//        // Desmarcar y deshabilitar p2_6_detalle, además de limpiar su contenido
//        p11_2_20_otro_detall.disabled = true;
//        p11_2_20_otro_detall.value = '';
//    }
//}
//
//
/////////////2.21//////
//
//function valida11_2_21() {
//    var p11_2_21_si = document.getElementById("p11_2_21_si");
//    var p11_2_22_a = document.getElementById("p11_2_22_a");
//    var p11_2_22_b = document.getElementById("p11_2_22_b");
//    var p11_2_22_c = document.getElementById("p11_2_22_c");
//    var p11_2_22_d = document.getElementById("p11_2_22_d");
//    var p11_2_22_e_otro = document.getElementById("p11_2_22_e_otro");
//
//    if (p11_2_21_si.checked) {
//        p11_2_22_a.disabled = false;
//        p11_2_22_b.disabled = false;
//        p11_2_22_c.disabled = false;
//        p11_2_22_d.disabled = false;
//        p11_2_22_e_otro.disabled = false;
//
//    } else {
//        p11_2_22_a.disabled = true;
//        p11_2_22_a.checked = false;
//        p11_2_22_b.disabled = true;
//        p11_2_22_b.checked = false;
//        p11_2_22_c.disabled = true;
//        p11_2_22_c.checked = false;
//        p11_2_22_d.disabled = true;
//        p11_2_22_d.checked = false;
//        p11_2_22_e_otro.disabled = true;
//        p11_2_22_e_otro.checked = false;
//
//        Validap11_2_22_e_otro();
//    }
//}
//
/////////////2.22//////////
//function Validap11_2_22_e_otro() {
//    var p11_2_22_e_otro = document.getElementById("p11_2_22_e_otro");
//    var p11_2_22_otro_detalla = document.getElementById("p11_2_22_otro_detalla");
//
//
//
//    if (p11_2_22_e_otro.checked) {
//
//        p11_2_22_otro_detalla.disabled = false;
//
//    } else {
//        // Desmarcar y deshabilitar p2_6_detalle, además de limpiar su contenido
//        p11_2_22_otro_detalla.disabled = true;
//        p11_2_22_otro_detalla.value = '';
//
//    }
//}
//
//
///////////// INICIO SECCION 12 //////////////////
//////// 5 ///////////////
//function Sump12_5() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p12_5_residentes = parseInt(document.getElementById('p12_5_residentes').value) || 0;
//    var p12_5_no_residentes = parseInt(document.getElementById('p12_5_no_residentes').value) || 0;
//
//
//    // Calcular la suma
//    var total = p12_5_residentes + p12_5_no_residentes ;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p12_5_total').value = total;
//}
//
//////// 7 ///////////////
//function Sump12_7A() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p12_7_a_residentes = parseInt(document.getElementById('p12_7_a_residentes').value) || 0;
//    var p12_7_a_no_residentes = parseInt(document.getElementById('p12_7_a_no_residentes').value) || 0;
//
//
//    // Calcular la suma
//    var total = p12_7_a_residentes + p12_7_a_no_residentes ;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p12_7_a_total').value = total;
//}
//
//function Sump12_7B() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p12_7_b_residentes = parseInt(document.getElementById('p12_7_b_residentes').value) || 0;
//    var p12_7_b_no_residentes = parseInt(document.getElementById('p12_7_b_no_residentes').value) || 0;
//
//
//    // Calcular la suma
//    var total = p12_7_b_residentes + p12_7_b_no_residentes ;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p12_7_b_total').value = total;
//}
//
//function Sump12_7C() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p12_7_c_residentes = parseInt(document.getElementById('p12_7_c_residentes').value) || 0;
//    var p12_7_c_no_residentes = parseInt(document.getElementById('p12_7_c_no_residentes').value) || 0;
//
//
//    // Calcular la suma
//    var total = p12_7_c_residentes + p12_7_c_no_residentes ;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p12_7_c_total').value = total;
//}
//
//function Sump12_7D() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p12_7_d_residentes = parseInt(document.getElementById('p12_7_d_residentes').value) || 0;
//    var p12_7_d_no_residentes = parseInt(document.getElementById('p12_7_d_no_residentes').value) || 0;
//
//
//    // Calcular la suma
//    var total = p12_7_d_residentes + p12_7_d_no_residentes ;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p12_7_d_total').value = total;
//}
//
//function Sump12_7E() {
//    // Obtener los valores de p1_4_hombres y p1_4_mujeres si es necesario
//    var p12_7_e_residentes = parseInt(document.getElementById('p12_7_e_residentes').value) || 0;
//    var p12_7_e_no_residentes = parseInt(document.getElementById('p12_7_e_no_residentes').value) || 0;
//
//
//    // Calcular la suma
//    var total = p12_7_e_residentes + p12_7_e_no_residentes ;
//
//    // Mostrar el resultado en p1_4_total
//    document.getElementById('p12_7_e_total').value = total;
//}

////////// FIN SECCION 12 ///////////////////////

//___________________ INICIO SECCION 2_____________________

function valida_p2_1_1() {

    var p2_1_1_si = document.getElementById("p2_1_1_si");
    var p2_1_2_si = document.getElementById("p2_1_2_si");
    var p2_1_2_no = document.getElementById("p2_1_2_no");

    var p2_1_4_1 = document.getElementById("p2_1_4_1");
    var p2_1_4_2 = document.getElementById("p2_1_4_2");
    var p2_1_4_3 = document.getElementById("p2_1_4_3");
    var p2_1_4_4 = document.getElementById("p2_1_4_4");
    var p2_1_4_5 = document.getElementById("p2_1_4_5");
    var p2_1_4_6 = document.getElementById("p2_1_4_6");
    var p2_1_4_7 = document.getElementById("p2_1_4_7");
    var p2_1_4_8_no = document.getElementById("p2_1_4_8_no");





    var p2_1_5A = document.getElementById("p2_1_5A");
    var p2_1_5B = document.getElementById("p2_1_5B");
    var p2_1_5C = document.getElementById("p2_1_5C");
    var p2_1_5D = document.getElementById("p2_1_5D");
    var p2_1_5E = document.getElementById("p2_1_5E");
    var p2_1_5F = document.getElementById("p2_1_5F");
    var p2_1_5G = document.getElementById("p2_1_5G");


    if (p2_1_1_si.checked) {
        p2_1_2_si.disabled = true;
        p2_1_2_si.checked = false;
        p2_1_2_no.disabled = true;
        p2_1_2_no.checked = false;

        p2_1_4_1.disabled = false;
        p2_1_4_2.disabled = false;
        p2_1_4_3.disabled = false;
        p2_1_4_4.disabled = false;
        p2_1_4_5.disabled = false;
        p2_1_4_6.disabled = false;
        p2_1_4_7.disabled = false;
        p2_1_4_8_no.disabled = false;

        p2_1_5A.disabled = false;
        p2_1_5B.disabled = false;
        p2_1_5C.disabled = false;
        p2_1_5D.disabled = false;
        p2_1_5E.disabled = false;
        p2_1_5F.disabled = false;
        p2_1_5G.disabled = false;
        validad_no_p2_1_4();

        valida_p2_1_2();
    } else {
        p2_1_2_si.disabled = false;
        p2_1_2_no.disabled = false;

        p2_1_4_1.disabled = true;
        p2_1_4_1.checked = false;
        p2_1_4_2.disabled = true;
        p2_1_4_2.checked = false;
        p2_1_4_3.disabled = true;
        p2_1_4_3.checked = false;
        p2_1_4_4.disabled = true;
        p2_1_4_4.checked = false;
        p2_1_4_5.disabled = true;
        p2_1_4_5.checked = false;
        p2_1_4_6.disabled = true;
        p2_1_4_6.checked = false;
        p2_1_4_7.disabled = true;
        p2_1_4_7.checked = false;
        p2_1_4_8_no.disabled = true;
        p2_1_4_8_no.checked = false;

        p2_1_5A.disabled = true;
        p2_1_5A.checked = false;
        p2_1_5B.disabled = true;
        p2_1_5B.checked = false;
        p2_1_5C.disabled = true;
        p2_1_5C.checked = false;
        p2_1_5D.disabled = true;
        p2_1_5D.checked = false;
        p2_1_5E.disabled = true;
        p2_1_5E.checked = false;
        p2_1_5F.disabled = true;
        p2_1_5F.checked = false;
        p2_1_5G.disabled = true;
        p2_1_5G.checked = false;
        valida_P5_A_P6();
        valida_p6_1_6_otro();
        valida_p2_1_5_otro();
        valida_p2_1_4_7otro();

        valida_P5_A_P7();


    }
}
//__________1.2____________________
function valida_p2_1_2() {

    var p2_1_2_si = document.getElementById("p2_1_2_si");
    var p2_1_3_1 = document.getElementById("p2_1_3_1");
    var p2_1_3_2 = document.getElementById("p2_1_3_2");
    var p2_1_3_3 = document.getElementById("p2_1_3_3");
    var p2_1_3_4 = document.getElementById("p2_1_3_4");
    var p2_1_3_5 = document.getElementById("p2_1_3_5");


    if (p2_1_2_si.checked) {
        p2_1_3_1.disabled = false;
        p2_1_3_2.disabled = false;
        p2_1_3_3.disabled = false;
        p2_1_3_4.disabled = false;
        p2_1_3_5.disabled = false;


    } else {

        p2_1_3_1.disabled = true;
        p2_1_3_1.checked = false;
        p2_1_3_2.disabled = true;
        p2_1_3_2.checked = false;
        p2_1_3_3.disabled = true;
        p2_1_3_3.checked = false;
        p2_1_3_4.disabled = true;
        p2_1_3_4.checked = false;
        p2_1_3_5.disabled = true;
        p2_1_3_5.checked = false;
    }
}

//_________________1.4____________--


function validad_no_p2_1_4() {
    var p2_1_4_8_no = document.getElementById("p2_1_4_8_no");
    var p2_1_4_11 = document.getElementById("p2_1_4_1");
    var p2_1_4_22 = document.getElementById("p2_1_4_2");
    var p2_1_4_33 = document.getElementById("p2_1_4_3");
    var p2_1_4_44 = document.getElementById("p2_1_4_4");
    var p2_1_4_55 = document.getElementById("p2_1_4_5");
    var p2_1_4_66 = document.getElementById("p2_1_4_6");
    var p2_1_4_77 = document.getElementById("p2_1_4_7");

    if (p2_1_4_8_no.checked) {

        console.log('if p2_1_4_8_no.checked')

        p2_1_4_11.disabled = true;
        p2_1_4_11.checked = false;
        p2_1_4_22.disabled = true;
        p2_1_4_22.checked = false;
        p2_1_4_33.disabled = true;
        p2_1_4_33.checked = false;
        p2_1_4_44.disabled = true;
        p2_1_4_44.checked = false;
        p2_1_4_55.disabled = true;
        p2_1_4_55.checked = false;
        p2_1_4_66.disabled = true;
        p2_1_4_66.checked = false;
        p2_1_4_77.disabled = true;
        p2_1_4_77.checked = false;
        valida_p2_1_4_7otro();
    } else {
        console.log('else p2_1_4_8_no.checked')

        p2_1_4_11.disabled = false;
        p2_1_4_22.disabled = false;
        p2_1_4_33.disabled = false;
        p2_1_4_44.disabled = false;
        p2_1_4_55.disabled = false;
        p2_1_4_66.disabled = false;
        p2_1_4_77.disabled = false;


    }
}

function valida_p2_1_4_7otro() {
    var p2_1_4_7 = document.getElementById("p2_1_4_7");
    var p2_1_4_7_detalle = document.getElementById("p2_1_4_7_detalle");


    if (p2_1_4_7.checked) {

        p2_1_4_7_detalle.disabled = false;
    } else {
        // Desmarcar y deshabilitar p2_6_detalle, además de limpiar su contenido
        p2_1_4_7_detalle.disabled = true;
        p2_1_4_7_detalle.value = '';
    }
}

//_________________1.5____________--

function valida_p2_1_5_otro() {
    var p2_1_5G = document.getElementById("p2_1_5G");
    var p2_1_5_detalle = document.getElementById("p2_1_5_detalle");


    if (p2_1_5G.checked) {

        p2_1_5_detalle.disabled = false;
    } else {
        // Desmarcar y deshabilitar p2_6_detalle, además de limpiar su contenido
        p2_1_5_detalle.disabled = true;
        p2_1_5_detalle.value = '';
    }
}

function valida_P5_A_P6() {
    var p2_1_5A = document.getElementById("p2_1_5A");
    var p2_1_5B = document.getElementById("p2_1_5B");
    var p2_1_6_1 = document.getElementById("p2_1_6_1");
    var p2_1_6_2 = document.getElementById("p2_1_6_2");
    var p2_1_6_3 = document.getElementById("p2_1_6_3");
    var p2_1_6_4 = document.getElementById("p2_1_6_4");
    var p2_1_6_5 = document.getElementById("p2_1_6_5");

    var p2_1_7 = document.getElementById("p2_1_7");
    var p2_1_8 = document.getElementById("p2_1_8");


    if (p2_1_5A.checked || p2_1_5B.checked) {
        p2_1_6_1.disabled = false;
        p2_1_6_2.disabled = false;
        p2_1_6_3.disabled = false;
        p2_1_6_4.disabled = false;
        p2_1_6_5.disabled = false;

        p2_1_7.disabled = false;
        p2_1_8.disabled = false;
    } else {
        p2_1_6_1.disabled = true;
        p2_1_6_1.checked = false;
        p2_1_6_2.disabled = true;
        p2_1_6_2.checked = false;
        p2_1_6_3.disabled = true;
        p2_1_6_3.checked = false;
        p2_1_6_4.disabled = true;
        p2_1_6_4.checked = false;
        p2_1_6_5.disabled = true;
        p2_1_6_5.checked = false;

        p2_1_7.disabled = true;
        p2_1_7.value = '';
        p2_1_8.disabled = true;
        p2_1_8.value = '';
        valida_p6_1_6_otro();
    }
}

function valida_p6_1_6_otro() {
    var p2_1_6_5 = document.getElementById("p2_1_6_5");
    var p2_1_6_5_detalle = document.getElementById("p2_1_6_5_detalle");


    if (p2_1_6_5.checked) {

        p2_1_6_5_detalle.disabled = false;
    } else {
        // Desmarcar y deshabilitar p2_6_detalle, además de limpiar su contenido
        p2_1_6_5_detalle.disabled = true;
        p2_1_6_5_detalle.value = '';
    }
}

function valida_P5_A_P7() {
    var p2_1_5D = document.getElementById("p2_1_5D");
    var p2_1_5E = document.getElementById("p2_1_5E");
    var p2_1_5F = document.getElementById("p2_1_5F");
    var p2_1_5G = document.getElementById("p2_1_5G");
    var p2_1_9_si = document.getElementById("p2_1_9_si");
    var p2_1_9_no = document.getElementById("p2_1_9_no");



    if (p2_1_5D.checked || p2_1_5E.checked || p2_1_5F.checked || p2_1_5G.checked) {
        p2_1_9_si.disabled = false;
        p2_1_9_no.disabled = false;

    } else {
        p2_1_9_si.disabled = true;
        p2_1_9_si.checked = false;
        p2_1_9_no.disabled = true;
        p2_1_9_no.checked = false;

    }
}

///////////// 2 desague _______________________________-

function valida_p2_2_1() {
    var p2_2_1_si = document.getElementById("p2_2_1_si");
    var p2_2_2_si = document.getElementById("p2_2_2_si");
    var p2_2_2_no = document.getElementById("p2_2_2_no");

    if (p2_2_1_si.checked) {
        p2_2_2_si.disabled = true;
        p2_2_2_si.checked = false;
        p2_2_2_no.disabled = true;
        p2_2_2_no.checked = false;
        valida_p2_2_2_A_2_3();
        
          var checkboxes = document.querySelectorAll('.check_p2_2_4_1');
        checkboxes.forEach(function (checkbox) {
            checkbox.disabled = false;
        });

    } else {
        p2_2_2_si.disabled = false;
        p2_2_2_no.disabled = false;

             var checkboxes = document.querySelectorAll('.check_p2_2_4_1');
             checkboxes.forEach(function (checkbox) {
             checkbox.disabled = true;
             checkbox.checked = false;
        });

    }
}

function valida_p2_2_2_A_2_3() {
    var p2_2_2_si = document.getElementById("p2_2_2_si");
    var p2_2_3A = document.getElementById("p2_2_3A");
    var p2_2_3B = document.getElementById("p2_2_3B");
    var p2_2_3C = document.getElementById("p2_2_3C");
    var p2_2_3D = document.getElementById("p2_2_3D");
    var p2_2_3E = document.getElementById("p2_2_3E");




    if (p2_2_2_si.checked) {
        p2_2_3A.disabled = false;
        p2_2_3B.disabled = false;
        p2_2_3C.disabled = false;
        p2_2_3D.disabled = false;
        p2_2_3E.disabled = false;

    } else {
        p2_2_3A.disabled = true;
        p2_2_3A.checked = false;
        p2_2_3B.disabled = true;
        p2_2_3B.checked = false;
        p2_2_3C.disabled = true;
        p2_2_3C.checked = false;
        p2_2_3D.disabled = true;
        p2_2_3D.checked = false;
        p2_2_3E.disabled = true;
        p2_2_3E.checked = false;

    }
}
//___________2.4______________

function valida_p2_2_4_7_otro() {
    var p2_2_4_7 = document.getElementById("p2_2_4_7");
    var p2_2_4_7_detalle = document.getElementById("p2_2_4_7_detalle");


    if (p2_2_4_7.checked) {

        p2_2_4_7_detalle.disabled = false;
    } else {
        // Desmarcar y deshabilitar p2_6_detalle, además de limpiar su contenido
        p2_2_4_7_detalle.disabled = true;
        p2_2_4_7_detalle.value = '';
    }
}




function valida_p2_4_no() {
    var p2_2_4_8_no = document.getElementById("p2_2_4_8_no");
    var p2_2_4_1 = document.getElementById("p2_2_4_1");
    var p2_2_4_2 = document.getElementById("p2_2_4_2");
    var p2_2_4_3 = document.getElementById("p2_2_4_3");
    var p2_2_4_4 = document.getElementById("p2_2_4_4");
    var p2_2_4_5 = document.getElementById("p2_2_4_5");
    var p2_2_4_6 = document.getElementById("p2_2_4_6");
    var p2_2_4_7 = document.getElementById("p2_2_4_7");

    if (p2_2_4_8_no.checked) {

        p2_2_4_1.disabled = true;
        p2_2_4_1.checked = false;
        p2_2_4_2.disabled = true;
        p2_2_4_2.checked = false;
        p2_2_4_3.disabled = true;
        p2_2_4_3.checked = false;
        p2_2_4_4.disabled = true;
        p2_2_4_4.checked = false;
        p2_2_4_5.disabled = true;
        p2_2_4_5.checked = false;
        p2_2_4_6.disabled = true;
        p2_2_4_6.checked = false;
        p2_2_4_7.disabled = true;
        p2_2_4_7.checked = false;
        valida_p2_2_4_7_otro();
    } else {

        p2_2_4_1.disabled = false;
        p2_2_4_2.disabled = false;
        p2_2_4_3.disabled = false;
        p2_2_4_4.disabled = false;
        p2_2_4_5.disabled = false;
        p2_2_4_6.disabled = false;
        p2_2_4_7.disabled = false;


    }
}


document.getElementById('p2_2_4_8_no').addEventListener('change', valida_p2_4_no);

//_______________ENERGIA ELECTRICA ------------------------

//____3.1_____

function valida_p2_3_1() {
    var p2_3_1_si = document.getElementById("p2_3_1_si");

    var p2_3_2_si = document.getElementById("p2_3_2_si");
    var p2_3_2_no = document.getElementById("p2_3_2_no");

    var p2_3_4_1 = document.getElementById("p2_3_4_1");
    var p2_3_4_2 = document.getElementById("p2_3_4_2");
    var p2_3_4_3 = document.getElementById("p2_3_4_3");
    var p2_3_4_4 = document.getElementById("p2_3_4_4");

    var p2_3_5A = document.getElementById("p2_3_5A");
    var p2_3_5B = document.getElementById("p2_3_5B");
    var p2_3_5C = document.getElementById("p2_3_5C");

    var p2_3_6_si = document.getElementById("p2_3_6_si");
    var p2_3_6_no = document.getElementById("p2_3_6_no");

    if (p2_3_1_si.checked) {
        // Deshabilitar y limpiar los checkboxes de p2_3_2
        p2_3_2_si.disabled = true;
        p2_3_2_si.checked = false;

        p2_3_2_no.disabled = true;
        p2_3_2_no.checked = false;

        // Habilitar los campos de p2_3_4, p2_3_5 y p2_3_6
        p2_3_4_1.disabled = false;
        p2_3_4_2.disabled = false;
        p2_3_4_3.disabled = false;
        p2_3_4_4.disabled = false;

        p2_3_5A.disabled = false;
        p2_3_5B.disabled = false;
        p2_3_5C.disabled = false;

        p2_3_6_si.disabled = false;
        p2_3_6_no.disabled = false;

        // Llamar a validaciones adicionales si es necesario
        validap2_3_2_A_3_3();
    } else {
        // Habilitar los checkboxes de p2_3_2
        p2_3_2_si.disabled = false;
        p2_3_2_no.disabled = false;

        // Deshabilitar y limpiar los checkboxes de p2_3_4, p2_3_5 y p2_3_6
        p2_3_4_1.disabled = true;
        p2_3_4_1.checked = false;
        p2_3_4_2.disabled = true;
        p2_3_4_2.checked = false;
        p2_3_4_3.disabled = true;
        p2_3_4_3.checked = false;
        p2_3_4_4.disabled = true;
        p2_3_4_4.checked = false;

        p2_3_5A.disabled = true;
        p2_3_5A.checked = false;
        p2_3_5B.disabled = true;
        p2_3_5B.checked = false;
        p2_3_5C.disabled = true;
        p2_3_5C.checked = false;

        p2_3_6_si.disabled = true;
        p2_3_6_si.checked = false;
        p2_3_6_no.disabled = true;
        p2_3_6_no.checked = false;

        // Llamar a otras validaciones adicionales si es necesario
        valida_otroP2_3_4();
        valida_p2_3_5_otro();
        valida_p2_3_6();
    }
}


function validap2_3_2_A_3_3() {
    var p2_3_2_si = document.getElementById("p2_3_2_si");
    var p2_3_3A = document.getElementById("p2_3_3A");
    var p2_3_3B = document.getElementById("p2_3_3B");
    var p2_3_3C = document.getElementById("p2_3_3C");
    var p2_3_3D = document.getElementById("p2_3_3D");
    var p2_3_3E = document.getElementById("p2_3_3E");

    if (p2_3_2_si.checked) {
        p2_3_3A.disabled = false;
        p2_3_3B.disabled = false;
        p2_3_3C.disabled = false;
        p2_3_3D.disabled = false;
        p2_3_3E.disabled = false;

    } else {
        p2_3_3A.disabled = true;
        p2_3_3A.checked = false;
        p2_3_3B.disabled = true;
        p2_3_3B.checked = false;
        p2_3_3C.disabled = true;
        p2_3_3C.checked = false;
        p2_3_3D.disabled = true;
        p2_3_3D.checked = false;
        p2_3_3E.disabled = true;
        p2_3_3E.checked = false;

    }
}
//_____3.4__ otro

function valida_otroP2_3_4() {
    var p2_3_4_4 = document.getElementById("p2_3_4_4");
    var p2_3_4_4_detalle = document.getElementById("p2_3_4_4_detalle");


    if (p2_3_4_4.checked) {

        p2_3_4_4_detalle.disabled = false;
    } else {
        // Desmarcar y deshabilitar p2_6_detalle, además de limpiar su contenido
        p2_3_4_4_detalle.disabled = true;
        p2_3_4_4_detalle.value = '';
    }
}

//_____3.5__ otro
function valida_p2_3_5_otro() {
    var p2_3_5C = document.getElementById("p2_3_5C");
    var p2_3_5_detalle = document.getElementById("p2_3_5_detalle");


    if (p2_3_5C.checked) {

        p2_3_5_detalle.disabled = false;
    } else {
        // Desmarcar y deshabilitar p2_6_detalle, además de limpiar su contenido
        p2_3_5_detalle.disabled = true;
        p2_3_5_detalle.value = '';
    }
}
//-----------------3.6__

function valida_p2_3_6() {
    var p2_3_6_si = document.getElementById("p2_3_6_si");
    var p2_3_7A = document.getElementById("p2_3_7A");
    var p2_3_7B = document.getElementById("p2_3_7B");


    if (p2_3_6_si.checked) {
        p2_3_7A.disabled = false;
        p2_3_7B.disabled = false;


    } else {
        p2_3_7A.disabled = true;
        p2_3_7A.checked = false;
        p2_3_7B.disabled = true;
        p2_3_7B.checked = false;
    }
}

//___________4.1---

function valida_P2_4_1() {
    var p2_4_1_si = document.getElementById("p2_4_1_si");
    var p2_4_2 = document.getElementById("p2_4_2");


    if (p2_4_1_si.checked) {

        p2_4_2.disabled = false;
    } else {
        // Desmarcar y deshabilitar p2_6_detalle, además de limpiar su contenido
        p2_4_2.disabled = true;
        p2_4_2.value = '';
    }
}

//________5.1______



function valida_P2_5_1() {
    var p2_5_1_si = document.getElementById("p2_5_1_si");
    var p2_5_2_si = document.getElementById("p2_5_2_si");
    var p2_5_2_no = document.getElementById("p2_5_2_no");


    if (p2_5_1_si.checked) {

        p2_5_2_si.disabled = true;
        p2_5_2_si.checked = false;
        p2_5_2_no.disabled = true;
        p2_5_2_no.checked = false;

    } else {

        p2_5_2_no.checked = false;
        p2_5_2_si.disabled = false;
        p2_5_2_no.disabled = false;

    }
}

//__________7.1__

function valida_P2_7_1() {
    var p2_7_1_si = document.getElementById("p2_7_1_si");
    var p2_7_2_1 = document.getElementById("p2_7_2_1");
    var p2_7_2_2 = document.getElementById("p2_7_2_2");
    var p2_7_2_3 = document.getElementById("p2_7_2_3");
    var p2_7_2_4 = document.getElementById("p2_7_2_4");

    var p2_7_3_1 = document.getElementById("p2_7_3_1");
    var p2_7_3_2 = document.getElementById("p2_7_3_2");
    var p2_7_3_3 = document.getElementById("p2_7_3_3");
    var p2_7_3_4 = document.getElementById("p2_7_3_4");
    var p2_7_3_5 = document.getElementById("p2_7_3_5");

    var p2_7_4_si = document.getElementById("p2_7_4_si");
    var p2_7_4_no = document.getElementById("p2_7_4_no");



    if (p2_7_1_si.checked) {
        p2_7_2_1.disabled = false;
        p2_7_2_2.disabled = false;
        p2_7_2_3.disabled = false;
        p2_7_2_4.disabled = false;

        p2_7_3_1.disabled = false;
        p2_7_3_2.disabled = false;
        p2_7_3_3.disabled = false;
        p2_7_3_4.disabled = false;
        p2_7_3_5.disabled = false;

        p2_7_4_si.disabled = false;
        p2_7_4_no.disabled = false;


    } else {
        p2_7_2_1.disabled = true;
        p2_7_2_1.checked = false;
        p2_7_2_2.disabled = true;
        p2_7_2_2.checked = false;
        p2_7_2_3.disabled = true;
        p2_7_2_3.checked = false;
        p2_7_2_4.disabled = true;
        p2_7_2_4.checked = false;

        p2_7_3_1.disabled = true;
        p2_7_3_1.checked = false;
        p2_7_3_2.disabled = true;
        p2_7_3_2.checked = false;
        p2_7_3_3.disabled = true;
        p2_7_3_3.checked = false;
        p2_7_3_4.disabled = true;
        p2_7_3_4.checked = false;
        p2_7_3_5.disabled = true;
        p2_7_3_5.checked = false;

        p2_7_4_si.disabled = true;
        p2_7_4_si.checked = false;
        p2_7_4_no.disabled = true;
        p2_7_4_no.checked = false;
        valida_P2_7_2_otro();
        valida_p7_2_coaxial();
        valida_p7_2_satelital();
        valida_p7_2_fibra();
        valida_p2_7_3_detalle();
    }
}

function valida_P2_7_2_otro() {
    var p2_7_2_4 = document.getElementById("p2_7_2_4");
    var p2_7_2_4_detalle = document.getElementById("p2_7_2_4_detalle");
    var p2_7_2_4_50m = document.getElementById("p2_7_2_4_50m");
    var p2_7_2_4_100m = document.getElementById("p2_7_2_4_100m");
    var p2_7_2_4_300m = document.getElementById("p2_7_2_4_300m");
    var p2_7_2_4_500m = document.getElementById("p2_7_2_4_500m");
    if (p2_7_2_4.checked) {
        p2_7_2_4_detalle.disabled = false;
        p2_7_2_4_50m.disabled = false;
        p2_7_2_4_100m.disabled = false;
        p2_7_2_4_300m.disabled = false;
        p2_7_2_4_500m.disabled = false;
    } else {
        // Desmarcar y deshabilitar p2_6_detalle, además de limpiar su contenido
        p2_7_2_4_detalle.disabled = true;
        p2_7_2_4_detalle.value = '';
        p2_7_2_4_50m.disabled = true;
        p2_7_2_4_50m.checked = false;
        p2_7_2_4_100m.disabled = true;
        p2_7_2_4_100m.checked = false;
        p2_7_2_4_300m.disabled = true;
        p2_7_2_4_300m.checked = false;
        p2_7_2_4_500m.disabled = true;
        p2_7_2_4_500m.checked = false;
    }
}


//_______1.satelital___

function valida_p7_2_satelital() {
    var p2_7_2_1 = document.getElementById("p2_7_2_1");
    var p2_7_2_1_50m = document.getElementById("p2_7_2_1_50m");
    var p2_7_2_1_100m = document.getElementById("p2_7_2_1_100m");
    var p2_7_2_1_300m = document.getElementById("p2_7_2_1_300m");
    var p2_7_2_1_500m = document.getElementById("p2_7_2_1_500m");
    if (p2_7_2_1.checked) {
        p2_7_2_1_50m.disabled = false;
        p2_7_2_1_100m.disabled = false;
        p2_7_2_1_300m.disabled = false;
        p2_7_2_1_500m.disabled = false;
    } else {
        p2_7_2_1_50m.disabled = true;
        p2_7_2_1_50m.checked = false;
        p2_7_2_1_100m.disabled = true;
        p2_7_2_1_100m.checked = false;
        p2_7_2_1_300m.disabled = true;
        p2_7_2_1_300m.checked = false;
        p2_7_2_1_500m.disabled = true;
        p2_7_2_1_500m.checked = false;

    }
}


//_____2.fibra

function valida_p7_2_fibra() {
    var p2_7_2_2 = document.getElementById("p2_7_2_2");
    var p2_7_2_2_50m = document.getElementById("p2_7_2_2_50m");
    var p2_7_2_2_100m = document.getElementById("p2_7_2_2_100m");
    var p2_7_2_2_300m = document.getElementById("p2_7_2_2_300m");
    var p2_7_2_2_500m = document.getElementById("p2_7_2_2_500m");
    if (p2_7_2_2.checked) {
        p2_7_2_2_50m.disabled = false;
        p2_7_2_2_100m.disabled = false;
        p2_7_2_2_300m.disabled = false;
        p2_7_2_2_500m.disabled = false;
    } else {
        p2_7_2_2_50m.disabled = true;
        p2_7_2_2_50m.checked = false;
        p2_7_2_2_100m.disabled = true;
        p2_7_2_2_100m.checked = false;
        p2_7_2_2_300m.disabled = true;
        p2_7_2_2_300m.checked = false;
        p2_7_2_2_500m.disabled = true;
        p2_7_2_2_500m.checked = false;

    }
}
//_____3.coaxial

function valida_p7_2_coaxial() {
    var p2_7_2_3 = document.getElementById("p2_7_2_3");
    var p2_7_2_3_50m = document.getElementById("p2_7_2_3_50m");
    var p2_7_2_3_100m = document.getElementById("p2_7_2_3_100m");
    var p2_7_2_3_300m = document.getElementById("p2_7_2_3_300m");
    var p2_7_2_3_500m = document.getElementById("p2_7_2_3_500m");
    if (p2_7_2_3.checked) {
        p2_7_2_3_50m.disabled = false;
        p2_7_2_3_100m.disabled = false;
        p2_7_2_3_300m.disabled = false;
        p2_7_2_3_500m.disabled = false;
    } else {
        p2_7_2_3_50m.disabled = true;
        p2_7_2_3_50m.checked = false;
        p2_7_2_3_100m.disabled = true;
        p2_7_2_3_100m.checked = false;
        p2_7_2_3_300m.disabled = true;
        p2_7_2_3_300m.checked = false;
        p2_7_2_3_500m.disabled = true;
        p2_7_2_3_500m.checked = false;

    }
}

//_______7.3 otro
function valida_p2_7_3_detalle() {
    var p2_7_3_5 = document.getElementById("p2_7_3_5");
    var p2_7_3_5_detalle = document.getElementById("p2_7_3_5_detalle");


    if (p2_7_3_5.checked) {

        p2_7_3_5_detalle.disabled = false;
    } else {
        // Desmarcar y deshabilitar p2_6_detalle, además de limpiar su contenido
        p2_7_3_5_detalle.disabled = true;
        p2_7_3_5_detalle.value = '';
    }
}


//___________________ FIN SECCION 2_____________________

/////////// INICIO SECCION 6 ////_______________________________________________________________-

//SUMA A
function SumaAp6_1() {
    var p6_1_a_buen_estado = parseInt(document.getElementById('p6_1_a_buen_estado').value) || 0;
    var p6_1_a_regular = parseInt(document.getElementById('p6_1_a_regular').value) || 0;
    var p6_1_a_mal = parseInt(document.getElementById('p6_1_a_mal').value) || 0;

    var total = p6_1_a_buen_estado + p6_1_a_regular + p6_1_a_mal ;

    document.getElementById('p6_1_a_total').value = total;
}
//SUMA B
function SumaBp6_1() {
    var p6_1_b_buen_estado = parseInt(document.getElementById('p6_1_b_buen_estado').value) || 0;
    var p6_1_b_regular = parseInt(document.getElementById('p6_1_b_regular').value) || 0;
    var p6_1_b_mal = parseInt(document.getElementById('p6_1_b_mal').value) || 0;

    var total = p6_1_b_buen_estado + p6_1_b_regular + p6_1_b_mal ;

    document.getElementById('p6_1_b_total').value = total;
}

//SUMA C
function SumaCp6_1() {
    var p6_1_c_buen_estado = parseInt(document.getElementById('p6_1_c_buen_estado').value) || 0;
    var p6_1_c_regular = parseInt(document.getElementById('p6_1_c_regular').value) || 0;
    var p6_1_c_mal = parseInt(document.getElementById('p6_1_c_mal').value) || 0;

    var total = p6_1_c_buen_estado + p6_1_c_regular + p6_1_c_mal ;

    document.getElementById('p6_1_c_total').value = total;
}
//SUMA D
function SumaDp6_1() {
    var p6_1_d_buen_estado = parseInt(document.getElementById('p6_1_d_buen_estado').value) || 0;
    var p6_1_d_regular = parseInt(document.getElementById('p6_1_d_regular').value) || 0;
    var p6_1_d_mal = parseInt(document.getElementById('p6_1_d_mal').value) || 0;

    var total = p6_1_d_buen_estado + p6_1_d_regular + p6_1_d_mal ;

    document.getElementById('p6_1_d_total').value = total;
}
//SUMA E
function SumaEp6_1() {
    var p6_1_e_buen_estado = parseInt(document.getElementById('p6_1_e_buen_estado').value) || 0;
    var p6_1_e_regular = parseInt(document.getElementById('p6_1_e_regular').value) || 0;
    var p6_1_e_mal = parseInt(document.getElementById('p6_1_e_mal').value) || 0;

    var total = p6_1_e_buen_estado + p6_1_e_regular + p6_1_e_mal ;

    document.getElementById('p6_1_e_total').value = total;
}
//SUMA F
function SumaFp6_1() {
    var p6_1_f_buen_estado = parseInt(document.getElementById('p6_1_f_buen_estado').value) || 0;
    var p6_1_f_regular = parseInt(document.getElementById('p6_1_f_regular').value) || 0;
    var p6_1_f_mal = parseInt(document.getElementById('p6_1_f_mal').value) || 0;

    var total = p6_1_f_buen_estado + p6_1_f_regular + p6_1_f_mal ;

    document.getElementById('p6_1_f_total').value = total;
}
//SUMA G
function SumaGp6_1() {
    var p6_1_g_buen_estado = parseInt(document.getElementById('p6_1_g_buen_estado').value) || 0;
    var p6_1_g_regular = parseInt(document.getElementById('p6_1_g_regular').value) || 0;
    var p6_1_g_mal = parseInt(document.getElementById('p6_1_g_mal').value) || 0;

    var total = p6_1_g_buen_estado + p6_1_g_regular + p6_1_g_mal ;

    document.getElementById('p6_1_g_total').value = total;
}
//SUMA H
function SumaHp6_1() {
    var p6_1_h_buen_estado = parseInt(document.getElementById('p6_1_h_buen_estado').value) || 0;
    var p6_1_h_regular = parseInt(document.getElementById('p6_1_h_regular').value) || 0;
    var p6_1_h_mal = parseInt(document.getElementById('p6_1_h_mal').value) || 0;

    var total = p6_1_h_buen_estado + p6_1_h_regular + p6_1_h_mal ;

    document.getElementById('p6_1_h_total').value = total;
}
//SUMA I
function SumaIp6_1() {
    var p6_1_i_buen_estado = parseInt(document.getElementById('p6_1_i_buen_estado').value) || 0;
    var p6_1_i_regular = parseInt(document.getElementById('p6_1_i_regular').value) || 0;
    var p6_1_i_mal = parseInt(document.getElementById('p6_1_i_mal').value) || 0;

    var total = p6_1_i_buen_estado + p6_1_i_regular + p6_1_i_mal ;

    document.getElementById('p6_1_i_total').value = total;
}
//SUMA J
function SumaJp6_1() {
    var p6_1_j_buen_estado = parseInt(document.getElementById('p6_1_j_buen_estado').value) || 0;
    var p6_1_j_regular = parseInt(document.getElementById('p6_1_j_regular').value) || 0;
    var p6_1_j_mal = parseInt(document.getElementById('p6_1_j_mal').value) || 0;

    var total = p6_1_j_buen_estado + p6_1_j_regular + p6_1_j_mal ;

    document.getElementById('p6_1_j_total').value = total;
}
//SUMA K
function SumaKp6_1() {
    var p6_1_k_buen_estado = parseInt(document.getElementById('p6_1_k_buen_estado').value) || 0;
    var p6_1_k_regular = parseInt(document.getElementById('p6_1_k_regular').value) || 0;
    var p6_1_k_mal = parseInt(document.getElementById('p6_1_k_mal').value) || 0;

    var total = p6_1_k_buen_estado + p6_1_k_regular + p6_1_k_mal ;

    document.getElementById('p6_1_k_total').value = total;
}
//SUMA L
function SumaLp6_1() {
    var p6_1_l_buen_estado = parseInt(document.getElementById('p6_1_l_buen_estado').value) || 0;
    var p6_1_l_regular = parseInt(document.getElementById('p6_1_l_regular').value) || 0;
    var p6_1_l_mal = parseInt(document.getElementById('p6_1_l_mal').value) || 0;

    var total = p6_1_l_buen_estado + p6_1_l_regular + p6_1_l_mal ;

    document.getElementById('p6_1_l_total').value = total;
}

/////2
//SUMA A
function Suma_p6_2_A() {
    var p6_2_a_buen_estado = parseInt(document.getElementById('p6_2_a_buen_estado').value) || 0;
    var p6_2_a_regular = parseInt(document.getElementById('p6_2_a_regular').value) || 0;
    var p6_2_a_mal = parseInt(document.getElementById('p6_2_a_mal').value) || 0;

    var total = p6_2_a_buen_estado + p6_2_a_regular + p6_2_a_mal ;

    document.getElementById('p6_2_a_total').value = total;
}
//SUMA B

function Suma_p6_2_B() {
    var p6_2_b_buen_estado = parseInt(document.getElementById('p6_2_b_buen_estado').value) || 0;
    var p6_2_b_regular = parseInt(document.getElementById('p6_2_b_regular').value) || 0;
    var p6_2_b_mal = parseInt(document.getElementById('p6_2_b_mal').value) || 0;

    var total = p6_2_b_buen_estado + p6_2_b_regular + p6_2_b_mal ;

    document.getElementById('p6_2_b_total').value = total;
}
//SUMA C

function Suma_p6_2_C() {
    var p6_2_c_buen_estado = parseInt(document.getElementById('p6_2_c_buen_estado').value) || 0;
    var p6_2_c_regular = parseInt(document.getElementById('p6_2_c_regular').value) || 0;
    var p6_2_c_mal = parseInt(document.getElementById('p6_2_c_mal').value) || 0;

    var total = p6_2_c_buen_estado + p6_2_c_regular + p6_2_c_mal ;

    document.getElementById('p6_2_c_total').value = total;
}

/////////// FIN SECCION 6 ______________________________________________
///////////// INICIO  SECCCION 7 _____________________________________________-

//SUMA A
function Sump7_1_A() {
    var p7_1_a_buen_estado = parseInt(document.getElementById('p7_1_a_buen_estado').value) || 0;
    var p7_1_a_regular = parseInt(document.getElementById('p7_1_a_regular').value) || 0;
    var p7_1_a_mal = parseInt(document.getElementById('p7_1_a_mal').value) || 0;

    var total = p7_1_a_buen_estado + p7_1_a_regular + p7_1_a_mal ;

    document.getElementById('p7_1_a_total').value = total;
}
//SUMA B
function Sump7_1_B() {
    var p7_1_b_buen_estado = parseInt(document.getElementById('p7_1_b_buen_estado').value) || 0;
    var p7_1_b_regular = parseInt(document.getElementById('p7_1_b_regular').value) || 0;
    var p7_1_b_mal = parseInt(document.getElementById('p7_1_b_mal').value) || 0;

    var total = p7_1_b_buen_estado + p7_1_b_regular + p7_1_b_mal ;

    document.getElementById('p7_1_b_total').value = total;
}
//SUMA C
function Sump7_1_C() {
    var p7_1_c_buen_estado = parseInt(document.getElementById('p7_1_c_buen_estado').value) || 0;
    var p7_1_c_regular = parseInt(document.getElementById('p7_1_c_regular').value) || 0;
    var p7_1_c_mal = parseInt(document.getElementById('p7_1_c_mal').value) || 0;

    var total = p7_1_c_buen_estado + p7_1_c_regular + p7_1_c_mal ;

    document.getElementById('p7_1_c_total').value = total;
}
//SUMA D
function Sump7_1_D() {
    var p7_1_d_buen_estado = parseInt(document.getElementById('p7_1_d_buen_estado').value) || 0;
    var p7_1_d_regular = parseInt(document.getElementById('p7_1_d_regular').value) || 0;
    var p7_1_d_mal = parseInt(document.getElementById('p7_1_d_mal').value) || 0;

    var total = p7_1_d_buen_estado + p7_1_d_regular + p7_1_d_mal ;

    document.getElementById('p7_1_d_total').value = total;
}
//SUMA E
function Sump7_1_E() {
    var p7_1_e_buen_estado = parseInt(document.getElementById('p7_1_e_buen_estado').value) || 0;
    var p7_1_e_regular = parseInt(document.getElementById('p7_1_e_regular').value) || 0;
    var p7_1_e_mal = parseInt(document.getElementById('p7_1_e_mal').value) || 0;

    var total = p7_1_e_buen_estado + p7_1_e_regular + p7_1_e_mal ;

    document.getElementById('p7_1_e_total').value = total;
}
//SUMA F
function Sump7_1_F() {
    var p7_1_f_buen_estado = parseInt(document.getElementById('p7_1_f_buen_estado').value) || 0;
    var p7_1_f_regular = parseInt(document.getElementById('p7_1_f_regular').value) || 0;
    var p7_1_f_mal = parseInt(document.getElementById('p7_1_f_mal').value) || 0;

    var total = p7_1_f_buen_estado + p7_1_f_regular + p7_1_f_mal ;

    document.getElementById('p7_1_f_total').value = total;
}


///////////// FIN SECCION 7 _____________________________________________

///////////// INICIO SECCION 9 _____________________________________________-



function valida9_1_1_F_no() {
    var p9_1_f_no = document.getElementById("p9_1_f_no");
    var p9_1_a = document.getElementById("p9_1_a");
    var p9_1_b = document.getElementById("p9_1_b");
    var p9_1_c = document.getElementById("p9_1_c");
    var p9_1_d = document.getElementById("p9_1_d");
    var p9_1_e = document.getElementById("p9_1_e");


    if (p9_1_f_no.checked) {

        p9_1_a.disabled = true;
        p9_1_a.checked = false;
        p9_1_b.disabled = true;
        p9_1_b.checked = false;
        p9_1_c.disabled = true;
        p9_1_c.checked = false;
        p9_1_d.disabled = true;
        p9_1_d.checked = false;
        p9_1_e.disabled = true;
        p9_1_e.checked = false;
        valida9_p1_1_A();
        valida9_p1_1_B();
        valida9_p1_1_C();
        valida9_p1_1_D();
        valida9_p1_1_E();

    } else {

        p9_1_a.disabled = false;
        p9_1_b.disabled = false;
        p9_1_c.disabled = false;
        p9_1_d.disabled = false;
        p9_1_e.disabled = false;

    }
}

///A

function valida9_p1_1_A() {
    var p9_1_a = document.getElementById("p9_1_a");
    var p9_1_a_2020 = document.getElementById("p9_1_a_2020");
    var p9_1_a_2021 = document.getElementById("p9_1_a_2021");
    var p9_1_a_2022 = document.getElementById("p9_1_a_2022");
    var p9_1_a_2023 = document.getElementById("p9_1_a_2023");
    var p9_1_a_2024 = document.getElementById("p9_1_a_2024");
    if (p9_1_a.checked) {
        p9_1_a_2020.disabled = false;
        p9_1_a_2021.disabled = false;
        p9_1_a_2022.disabled = false;
        p9_1_a_2023.disabled = false;
        p9_1_a_2024.disabled = false;
    } else {
        p9_1_a_2020.disabled = true;
        p9_1_a_2020.value = '';
        p9_1_a_2021.disabled = true;
        p9_1_a_2021.value = '';
        p9_1_a_2022.disabled = true;
        p9_1_a_2022.value = '';
        p9_1_a_2023.disabled = true;
        p9_1_a_2023.value = '';
        p9_1_a_2024.disabled = true;
        p9_1_a_2024.value = '';

    }
}

function valida9_p1_1_B() {
    var p9_1_b = document.getElementById("p9_1_b");
    var p9_1_b_2020 = document.getElementById("p9_1_b_2020");
    var p9_1_b_2021 = document.getElementById("p9_1_b_2021");
    var p9_1_b_2022 = document.getElementById("p9_1_b_2022");
    var p9_1_b_2023 = document.getElementById("p9_1_b_2023");
    var p9_1_b_2024 = document.getElementById("p9_1_b_2024");
    if (p9_1_b.checked) {
        p9_1_b_2020.disabled = false;
        p9_1_b_2021.disabled = false;
        p9_1_b_2022.disabled = false;
        p9_1_b_2023.disabled = false;
        p9_1_b_2024.disabled = false;
    } else {
        p9_1_b_2020.disabled = true;
        p9_1_b_2020.value = '';
        p9_1_b_2021.disabled = true;
        p9_1_b_2021.value = '';
        p9_1_b_2022.disabled = true;
        p9_1_b_2022.value = '';
        p9_1_b_2023.disabled = true;
        p9_1_b_2023.value = '';
        p9_1_b_2024.disabled = true;
        p9_1_b_2024.value = '';
    }
}

function valida9_p1_1_C() {
    var p9_1_c = document.getElementById("p9_1_c");
    var p9_1_c_2020 = document.getElementById("p9_1_c_2020");
    var p9_1_c_2021 = document.getElementById("p9_1_c_2021");
    var p9_1_c_2022 = document.getElementById("p9_1_c_2022");
    var p9_1_c_2023 = document.getElementById("p9_1_c_2023");
    var p9_1_c_2024 = document.getElementById("p9_1_c_2024");
    if (p9_1_c.checked) {
        p9_1_c_2020.disabled = false;
        p9_1_c_2021.disabled = false;
        p9_1_c_2022.disabled = false;
        p9_1_c_2023.disabled = false;
        p9_1_c_2024.disabled = false;
    } else {
        p9_1_c_2020.disabled = true;
        p9_1_c_2020.value = '';
        p9_1_c_2021.disabled = true;
        p9_1_c_2021.value = '';
        p9_1_c_2022.disabled = true;
        p9_1_c_2022.value = '';
        p9_1_c_2023.disabled = true;
        p9_1_c_2023.value = '';
        p9_1_c_2024.disabled = true;
        p9_1_c_2024.value = '';
    }
}

function valida9_p1_1_D() {
    var p9_1_d = document.getElementById("p9_1_d");
    var p9_1_d_2020 = document.getElementById("p9_1_d_2020");
    var p9_1_d_2021 = document.getElementById("p9_1_d_2021");
    var p9_1_d_2022 = document.getElementById("p9_1_d_2022");
    var p9_1_d_2023 = document.getElementById("p9_1_d_2023");
    var p9_1_d_2024 = document.getElementById("p9_1_d_2024");
    if (p9_1_d.checked) {
        p9_1_d_2020.disabled = false;
        p9_1_d_2021.disabled = false;
        p9_1_d_2022.disabled = false;
        p9_1_d_2023.disabled = false;
        p9_1_d_2024.disabled = false;
    } else {
        p9_1_d_2020.disabled = true;
        p9_1_d_2020.value = '';
        p9_1_d_2021.disabled = true;
        p9_1_d_2021.value = '';
        p9_1_d_2022.disabled = true;
        p9_1_d_2022.value = '';
        p9_1_d_2023.disabled = true;
        p9_1_d_2023.value = '';
        p9_1_d_2024.disabled = true;
        p9_1_d_2024.value = '';
    }
}

function valida9_p1_1_E() {
    var p9_1_e = document.getElementById("p9_1_e");
    var p9_1_e_2020 = document.getElementById("p9_1_e_2020");
    var p9_1_e_2021 = document.getElementById("p9_1_e_2021");
    var p9_1_e_2022 = document.getElementById("p9_1_e_2022");
    var p9_1_e_2023 = document.getElementById("p9_1_e_2023");
    var p9_1_e_2024 = document.getElementById("p9_1_e_2024");
    if (p9_1_e.checked) {
        p9_1_e_2020.disabled = false;
        p9_1_e_2021.disabled = false;
        p9_1_e_2022.disabled = false;
        p9_1_e_2023.disabled = false;
        p9_1_e_2024.disabled = false;
    } else {
        p9_1_e_2020.disabled = true;
        p9_1_e_2020.value = '';
        p9_1_e_2021.disabled = true;
        p9_1_e_2021.value = '';
        p9_1_e_2022.disabled = true;
        p9_1_e_2022.value = '';
        p9_1_e_2023.disabled = true;
        p9_1_e_2023.value = '';
        p9_1_e_2024.disabled = true;
        p9_1_e_2024.value = '';
    }
}


///////////// FIN SECCION 9 _____________________________________________
///// INICIO SECCION 10 ////

function valida_10_2_e() {

    var p10_2_e_si = document.getElementById("p10_2_e_si");
    var p10_3_1 = document.getElementById("p10_3_1");
    var p10_3_2 = document.getElementById("p10_3_2");
    var p10_3_3 = document.getElementById("p10_3_3");
    var p10_3_4 = document.getElementById("p10_3_4");
    var p10_3_5 = document.getElementById("p10_3_5");
    var p10_3_6 = document.getElementById("p10_3_6");
    var p10_3_7 = document.getElementById("p10_3_7");

    if (p10_2_e_si.checked) {

        p10_3_1.disabled = false;
        p10_3_2.disabled = false;
        p10_3_3.disabled = false;
        p10_3_4.disabled = false;
        p10_3_5.disabled = false;
        p10_3_6.disabled = false;
        p10_3_7.disabled = false;


    } else {

        p10_3_1.disabled = true;
        p10_3_1.checked = false;
        p10_3_2.disabled = true;
        p10_3_2.checked = false;
        p10_3_3.disabled = true;
        p10_3_3.checked = false;
        p10_3_4.disabled = true;
        p10_3_4.checked = false;
        p10_3_5.disabled = true;
        p10_3_5.checked = false;
        p10_3_6.disabled = true;
        p10_3_6.checked = false;
        p10_3_7.disabled = true;
        p10_3_7.checked = false;
        valida_p10_3_detalle()

    }
}




//______ detalle
function valida_p10_3_detalle() {
    var p10_3_7 = document.getElementById("p10_3_7");
    var p10_3_7_detalle = document.getElementById("p10_3_7_detalle");


    if (p10_3_7.checked) {

        p10_3_7_detalle.disabled = false;
    } else {
        // Desmarcar y deshabilitar p2_6_detalle, además de limpiar su contenido
        p10_3_7_detalle.disabled = true;
        p10_3_7_detalle.value = '';
    }
}

 ///_____ FIN SECCION 10_________

/////////////////////////////////////EDUCACION FINAL NIVEL 2 /////////////////////////////////////////////////////////////////////

//////////////////////////
function valida_p4_1_11() {
    var p4_1_11 = document.getElementById("p4_1_11");
    var p4_1_11_detalle = document.getElementById("p4_1_11_detalle");


    if (p4_1_11.checked) {

        p4_1_11_detalle.disabled = false;
    } else {
        // Desmarcar y deshabilitar p2_6_detalle, además de limpiar su contenido
        p4_1_11_detalle.disabled = true;
        p4_1_11_detalle.value = '';
    }
}



/////////////////////
 const p3_16_si = document.getElementById("p3_16_s1_si");
const p3_16_no = document.getElementById("p3_16_s1_no");
const row_p3_16_1 = document.querySelector(".row_p3_16_1");
const p3_16_1_1_s1_detalle = document.querySelector("p3_16_1_1_s1_detalle");

// Función para habilitar/deshabilitar los elementos en row_p3_16_1
function toggleRowP3_16_1() {
        const inputs = row_p3_16_1.querySelectorAll("input");

        if (p3_16_si.checked) {
            // Habilitar los inputs
            inputs.forEach(input => input.disabled = false);
        } else if (p3_16_no.checked) {
            // Deshabilitar y limpiar los inputs
 
            inputs.forEach(input => {
                input.disabled = true;
                if (input.type === "radio" || input.type === "checkbox") {
                    input.checked = false;  // Desmarcar radios/checkboxes
                } else {
                    input.value = "";  // Limpiar otros inputs y textarea
                }
            });
        }
        p3_16_1_1_s1_detalle.value="";
            p3_16_1_1_s1_detalle.disabled=true;
    }


// Escuchar cambios en los radios
p3_16_si.addEventListener("change", toggleRowP3_16_1);
p3_16_no.addEventListener("change", toggleRowP3_16_1);

///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////
 const p3_16_2_si = document.getElementById("p3_16_2_si");
const p3_16_2_no = document.getElementById("p3_16_2_no");
const row_p3_16_2 = document.querySelector(".row_p3_16_2");
const p3_16_3_detallar_s1 = document.getElementById("p3_16_3_detallar_s1");
function toggleRowP3_16_2() {
        const inputs = row_p3_16_2.querySelectorAll("input");

        if (p3_16_2_si.checked) {
            inputs.forEach(input => input.disabled = false);
            
        } else if (p3_16_2_no.checked) {
            p3_16_3_detallar_s1.disabled=true;
            p3_16_3_detallar_s1.value="";
            inputs.forEach(input => {
                input.disabled = true;
                if (input.type === "radio" || input.type === "checkbox") {
                    input.checked = false;  
                } else {
                    input.value = "";  
                }
            });
        }
    }


p3_16_2_si.addEventListener("change", toggleRowP3_16_2);
p3_16_2_no.addEventListener("change", toggleRowP3_16_2);

/////////////////////////////////////////////////////////////

///////////////////////////
function validateMinutes(input) {
    // Convertir el valor del input a un número
    const value = parseInt(input.value, 10);

    // Verificar si el valor no es un número o está fuera del rango permitido
    if (isNaN(value) || value < 0 || value > 60) {
        // Limpiar el valor si es inválido
        input.value = '';
        alert('Por favor, ingrese un número entre 0 y 60.');
    }
}

// Asigna la función de validación al evento input de los campos de minutos
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', function() {
        if (this.id.includes('_m_s1')) { 
            validateMinutes(this);
        }
    });
});


////////3.19////////////////////////////////////////////////////////////////////
function sumar_p4_1total() {

    var p3_19_1_1m = parseInt(document.getElementById("p3_19_1_1m").value) || 0;
    var p3_19_1_1f = parseInt(document.getElementById("p3_19_1_1f").value) || 0;
    var p3_19_1_2m = parseInt(document.getElementById("p3_19_1_2m").value) || 0;
    var p3_19_1_2f = parseInt(document.getElementById("p3_19_1_2f").value) || 0;
    var p3_19_1_3m = parseInt(document.getElementById("p3_19_1_3m").value) || 0;
    var p3_19_1_3f = parseInt(document.getElementById("p3_19_1_3f").value) || 0;
    var p3_19_1_4m = parseInt(document.getElementById("p3_19_1_4m").value) || 0;
    var p3_19_1_4f = parseInt(document.getElementById("p3_19_1_4f").value) || 0;
    var p3_19_1_5m = parseInt(document.getElementById("p3_19_1_5m").value) || 0;
    var p3_19_1_5f = parseInt(document.getElementById("p3_19_1_5f").value) || 0;

   

    var totald = p3_19_1_1m + p3_19_1_1f + p3_19_1_2m + p3_19_1_2f + p3_19_1_3m + p3_19_1_3f + p3_19_1_4m + p3_19_1_4f + p3_19_1_5m + p3_19_1_5f;

    document.getElementById("p3_19_1total").value = totald;
}
function sumar_p4_2total() {

    var p3_19_2_1m = parseInt(document.getElementById("p3_19_2_1m").value) || 0;
    var p3_19_2_1f = parseInt(document.getElementById("p3_19_2_1f").value) || 0;
    var p3_19_2_2m = parseInt(document.getElementById("p3_19_2_2m").value) || 0;
    var p3_19_2_2f = parseInt(document.getElementById("p3_19_2_2f").value) || 0;
    var p3_19_2_3m = parseInt(document.getElementById("p3_19_2_3m").value) || 0;
    var p3_19_2_3f = parseInt(document.getElementById("p3_19_2_3f").value) || 0;
    var p3_19_2_4m = parseInt(document.getElementById("p3_19_2_4m").value) || 0;
    var p3_19_2_4f = parseInt(document.getElementById("p3_19_2_4f").value) || 0;
    var p3_19_2_5m = parseInt(document.getElementById("p3_19_2_5m").value) || 0;
    var p3_19_2_5f = parseInt(document.getElementById("p3_19_2_5f").value) || 0;

   

    var totald = p3_19_2_1m + p3_19_2_1f + p3_19_2_2m + p3_19_2_2f + p3_19_2_3m + p3_19_2_3f + p3_19_2_4m + p3_19_2_4f + p3_19_2_5m + p3_19_2_5f;

    document.getElementById("p3_19_2total").value = totald;
}
////////////////////////////////////////////////////////////////////////////////

function validap5_4_6_a_4_7() {
    var p4_6_no = document.getElementById("p4_6_no");
    var p4_7_detalle = document.getElementById("p4_7_detalle");

    if (p4_6_no.checked) {
        p4_7_detalle.disabled = false;
    } else {
        p4_7_detalle.disabled = true;
        p4_7_detalle.value = "";
      
    }
}



function valida_p5_B_a_C() {
    var p2_2_b_2_no = document.getElementById("p2_2_b_2_no");
    var p2_2_c = document.getElementById("p2_2_c");

    if (p2_2_b_2_no.checked) {
        p2_2_c.disabled = false;
    } else {
        p2_2_c.disabled = true;
        p2_2_c.value = "";
    }
}



////////////////////////////////////////////////////
// Función para manejar la validación de radios
function validarRadios() {
    // Obtén todos los radios con la clase 'form-check-input'
    const radios = document.querySelectorAll('input[type="radio"].form-check-input');

    // Agrupa los radios por el atributo 'name'
    const gruposRadios = {};

    radios.forEach(radio => {
        const groupName = radio.name;
        if (!gruposRadios[groupName]) {
            gruposRadios[groupName] = [];
        }
        gruposRadios[groupName].push(radio);
    });

    // Recorre cada grupo de radios
    Object.keys(gruposRadios).forEach(groupName => {
        const grupo = gruposRadios[groupName];
        let seleccionado = false;

        // Verifica si algún radio del grupo está seleccionado
        grupo.forEach(radio => {
            if (radio.checked) {
                seleccionado = true;
            }
        });

        // Si no hay selección, establece como obligatorio; si ya hay uno seleccionado, quita el 'required'
        grupo.forEach(radio => {
            if (!seleccionado) {
                radio.setAttribute('required', 'true');
            } else {
                radio.removeAttribute('required');
            }
        });
    });
}



// Función para manejar la validación de checkboxes
function validarCheckboxes() {
    const gruposCheckboxes = document.querySelectorAll('.row'); // Selecciona todos los contenedores de checkbox

    gruposCheckboxes.forEach(grupo => {
        const checkboxes = grupo.querySelectorAll('input[type="checkbox"].form-check-input');
        let seleccionado = false;

        // Verifica si algún checkbox dentro del grupo está seleccionado
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                seleccionado = true;
            }
        });

        // Si algún checkbox está seleccionado, remueve el atributo "required" del grupo
        // Si ninguno está seleccionado, añade "required" a todos los checkboxes del grupo
        checkboxes.forEach(checkbox => {
            if (!seleccionado) {
                checkbox.setAttribute('required', 'true');
            } else {
                checkbox.removeAttribute('required');
            }
        });
    });
}



function inicializarValidacion() {
   
    const radios = document.querySelectorAll('input[type="radio"].form-check-input');
    radios.forEach(radio => {
        radio.addEventListener('change', validarRadios);
    });

   
    const checkboxes = document.querySelectorAll('input[type="checkbox"].form-check-input');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', validarCheckboxes);
    });
}




// NUEVO 2 //

function valida_p4_1_12_no() {
    var p4_1_12_no = document.getElementById("p4_1_12_no");
    var p4_1_1 = document.getElementById("p4_1_1");
    var p4_1_2 = document.getElementById("p4_1_2");
    var p4_1_3 = document.getElementById("p4_1_3");
    var p4_1_4 = document.getElementById("p4_1_4");
    var p4_1_5 = document.getElementById("p4_1_5");
    var p4_1_6 = document.getElementById("p4_1_6");
    var p4_1_7 = document.getElementById("p4_1_7");
    var p4_1_8 = document.getElementById("p4_1_8");
    var p4_1_9 = document.getElementById("p4_1_9");
    var p4_1_10 = document.getElementById("p4_1_10");
    var p4_1_11 = document.getElementById("p4_1_11");

    if (p4_1_12_no.checked) {

        p4_1_1.disabled = true;
        p4_1_1.checked = false;
        p4_1_2.disabled = true;
        p4_1_2.checked = false;
        p4_1_3.disabled = true;
        p4_1_3.checked = false;
        p4_1_4.disabled = true;
        p4_1_4.checked = false;
        p4_1_5.disabled = true;
        p4_1_5.checked = false;
        p4_1_6.disabled = true;
        p4_1_6.checked = false;
        p4_1_7.disabled = true;
        p4_1_7.checked = false;
        p4_1_8.disabled = true;
        p4_1_8.checked = false;
        p4_1_9.disabled = true;
        p4_1_9.checked = false;
        p4_1_10.disabled = true;
        p4_1_10.checked = false;
        p4_1_11.disabled = true;
        p4_1_11.checked = false;
        valida_p4_1_11();
    } else {

        p4_1_1.disabled = false;
        p4_1_2.disabled = false;
        p4_1_3.disabled = false;
        p4_1_4.disabled = false;
        p4_1_5.disabled = false;
        p4_1_6.disabled = false;
        p4_1_7.disabled = false;
        p4_1_8.disabled = false;
        p4_1_9.disabled = false;
        p4_1_10.disabled = false;
        p4_1_11.disabled = false;


    }
}

// FIN NUEVO 2 //


// NUEVO 3//
function validap3_1_12_no() {
    var p3_1_12_no = document.getElementById("p3_1_12");
    var p3_1_1 = document.getElementById("p3_1_1");
    var p3_1_2 = document.getElementById("p3_1_2");
    var p3_1_3 = document.getElementById("p3_1_3");
    var p3_1_4 = document.getElementById("p3_1_4");
    var p3_1_5 = document.getElementById("p3_1_5");
    var p3_1_6 = document.getElementById("p3_1_6");
    var p3_1_7 = document.getElementById("p3_1_7");
    var p3_1_8 = document.getElementById("p3_1_8");
    var p3_1_9 = document.getElementById("p3_1_9");
    var p3_1_10 = document.getElementById("p3_1_10");
    var p3_1_11 = document.getElementById("p3_1_11");
    var p3_1_13 = document.getElementById("p3_1_13");

    if (p3_1_12_no.checked) {
        p3_1_13.disabled = true;
        p3_1_13.checked = false;
        p3_1_2.disabled = true;
        p3_1_2.checked = false;
        p3_1_3.disabled = true;
        p3_1_3.checked = false;
        p3_1_4.disabled = true;
        p3_1_4.checked = false;
        p3_1_5.disabled = true;
        p3_1_5.checked = false;
        p3_1_6.disabled = true;
        p3_1_6.checked = false;
        p3_1_7.disabled = true;
        p3_1_7.checked = false;
        p3_1_8.disabled = true;
        p3_1_8.checked = false;
        p3_1_9.disabled = true;
        p3_1_9.checked = false;
        p3_1_10.disabled = true;
        p3_1_10.checked = false;
        p3_1_11.disabled = true;
        p3_1_11.checked = false;

        // Llamar a valida3_p1 para deshabilitar inputs relacionados
        valida3_p1(1);
        valida3_p1(2);
        valida3_p1(3);
        valida3_p1(4);
        valida3_p1(5);
        valida3_p1(6);
        valida3_p1(7);
        valida3_p1(8);
        valida3_p1(9);
        valida3_p1(10);
        valida3_p1(11);

        valida3_p1_13_otros();

    } else {
        p3_1_1.disabled = false;
        p3_1_2.disabled = false;
        p3_1_3.disabled = false;
        p3_1_4.disabled = false;
        p3_1_5.disabled = false;
        p3_1_6.disabled = false;
        p3_1_7.disabled = false;
        p3_1_8.disabled = false;
        p3_1_9.disabled = false;
        p3_1_10.disabled = false;
        p3_1_11.disabled = false;
        p3_1_13.disabled = false;

        // Llamar a valida3_p1 para habilitar inputs relacionados
        valida3_p1(1);
        valida3_p1(2);
        valida3_p1(3);
        valida3_p1(4);
        valida3_p1(5);
        valida3_p1(6);
        valida3_p1(7);
        valida3_p1(8);
        valida3_p1(9);
        valida3_p1(10);
        valida3_p1(11);
    }
}


// FIN NUEVO 3 //



// NUEVO  1 ///

function ValidaP6_4_2_2() {

    var p6_4_2_1_si = document.getElementById("p6_4_2_1_si");
    var p6_4_2_2_1 = document.getElementById("p6_4_2_2_1");
    var p6_4_2_2_2 = document.getElementById("p6_4_2_2_2");
    var p6_4_2_2_3 = document.getElementById("p6_4_2_2_3");
    var p6_4_2_2_4 = document.getElementById("p6_4_2_2_4");
    var p6_4_2_2_5 = document.getElementById("p6_4_2_2_5");
    var p6_4_2_2_6 = document.getElementById("p6_4_2_2_6");
    var p6_4_2_2_7 = document.getElementById("p6_4_2_2_7");
    var p6_4_2_2_8 = document.getElementById("p6_4_2_2_8");

    if (p6_4_2_1_si.checked) {

        p6_4_2_2_1.disabled = false;
        p6_4_2_2_2.disabled = false;
        p6_4_2_2_3.disabled = false;
        p6_4_2_2_4.disabled = false;
        p6_4_2_2_5.disabled = false;
        p6_4_2_2_6.disabled = false;
        p6_4_2_2_7.disabled = false;
        p6_4_2_2_8.disabled = false;

    } else {

        p6_4_2_2_1.disabled = true;
        p6_4_2_2_1.checked = false;
        p6_4_2_2_2.disabled = true;
        p6_4_2_2_2.checked = false;
        p6_4_2_2_3.disabled = true;
        p6_4_2_2_3.checked = false;
        p6_4_2_2_4.disabled = true;
        p6_4_2_2_4.checked = false;
        p6_4_2_2_5.disabled = true;
        p6_4_2_2_5.checked = false;
        p6_4_2_2_6.disabled = true;
        p6_4_2_2_6.checked = false;
        p6_4_2_2_7.disabled = true;
        p6_4_2_2_7.checked = false;
        p6_4_2_2_8.disabled = true;
        p6_4_2_2_8.checked = false;
        validaDetap6_4_2_2_8();

    }
}


function validaDetap6_4_2_2_8() {
    var p6_4_2_2_8 = document.getElementById("p6_4_2_2_8");
    var p6_4_2_2_8_detalle = document.getElementById("p6_4_2_2_8_detalle");


    if (p6_4_2_2_8.checked) {

        p6_4_2_2_8_detalle.disabled = false;
    } else {

        p6_4_2_2_8_detalle.disabled = true;
        p6_4_2_2_8_detalle.value = '';
    }
}

