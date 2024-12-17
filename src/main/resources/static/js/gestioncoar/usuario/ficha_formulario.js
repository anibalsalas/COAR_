
var requestContextPath = window.location.pathname.substring(0, window.location.pathname.indexOf("/", 2));
var urlx = requestContextPath + "/dp/ficha/formulario";

$(document).ready(function () {
   // calcularSumaP1_3();
   initializeDateField();

    $.ajaxSetup({
        statusCode: {
            401: function () {
                window.location = requestContextPath + '/406';

            }
        }
    });

    $('#cod_unico').css('pointer-events', 'none');

   // iniciar_fecha();
    mostrar_modal_info();
    aplicarExpresionRegularTexto();
    aplicarExpresionRegular();
   
    validarRadios(); 
    //validarCheckboxes(); 
    //inicializarValidacion(); 
    //colocarRequiredEnInputs();


    aplicarFormatoFecha();
    aplicarFormatoFecha2();
    validar_check_p2_1_1_a();
    validar_check_p2_1_2_a();

   

    $(document).on('change', '#cod_unico', function () {
        buscar_establecimiento_demuna();
    });


    $(document).on('change', '#codi_depa_dpt', function () {
        buscar_municipalidades();
    });
    
   
    
});


 function initializeDateField() {
        // Evitar la entrada manual en el campo de fecha
        $(".readonly").keydown(function(e) {
            e.preventDefault();
        });

        // Establecer la fecha máxima como la fecha actual
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); // Enero es 0!
        var yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd; // Formato YYYY-MM-DD

        // Asignar la fecha máxima al campo de fecha
        $("#fch_supervision").attr("max", today);
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
//

function enableValidateButton() {
        const validateButton = document.getElementById('btn_validar_sec_1');
        validateButton.disabled = false;
    }
    
function guardar_parcial(elem) {
console.log("llego aqui guardar parcial");

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
                        console.log("Nombre del campo: " + key); // Imprime el nombre del campo
                        console.log("Valor del campo " + key + ": " + data[key]); // Imprime el valor del campo
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

function validarRadios() {
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





function validar_parcial(elem) {
    var name_btn = elem.id;
    var sec_x = name_btn.substring(12, 18);
    var id_ficha = $("#id_ficha").val();
    var id_sec_x;

    if (!id_ficha) {
        
        Swal.fire({
                    text: 'Por favor, primero Guarde para Validar Ficha.'
                });
        return;
    }

    if (sec_x === "sec_1") {
        id_sec_x = id_ficha;
    } else {
        id_sec_x = $("#id_" + sec_x).val();
    }

    console.log("id_ficha: " + id_ficha);
    console.log("id_sec_x: " + id_sec_x);
    console.log("sec_x: " + sec_x);

    $.ajax({
        url: urlx + "/validarParcial",
        type: 'POST',
        data: {
            id_ficha: id_ficha,
            id_sec_x: id_sec_x,
            sec_x: sec_x
        },
        success: function (data, textStatus, jqXHR) {
            validarFicha(id_ficha);
            console.log("ffff: " + data.resultado);
            console.log("#div_" + sec_x + "_alert_validado");
            $("#div_" + sec_x + "_alert_validado").html(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert('Error al validar parcialmente la entidad');
            }
        }
    });
}

function validarFicha(id_ficha) {

    $.ajax({
        url: urlx + "/ajaxValidarFicha",
        type: 'POST',
        data: {
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {
            $("#div_validar_ficha_pca").html(data);

        }, error: function (jqXHR, textStatus, errorThrown) {

            if (jqXHR.status == 401) {
                alert("Su sesi\u00F3n ha finalizado");
            } else {
                alert("Ocurrio un error al cargar");
            }

        }
    });

}
////////////////////////////INICIO VALIDACIONES////////////////////

// function updateEntidadType() {
//        // Mapping abbreviations to full names
//        const entityMapping = {
//            'GL': 'Gobierno Local',
//            'GR': 'Gobierno Regional',
//            'M': 'Ministerio',
//            // Add more mappings as needed
//        };
//        
//        // Get the input field
//        const tipoEntidadInput = document.getElementById('c_tipo_entidad');
//        const abbreviation = tipoEntidadInput.value.trim();
//
//        // Update the input value with the full text if the abbreviation is in the mapping
//        if (entityMapping[abbreviation]) {
//            tipoEntidadInput.value = entityMapping[abbreviation];
//        }
//    }
//
//    // Call the function to update on page load or whenever appropriate
//    document.addEventListener('DOMContentLoaded', updateEntidadType);

document.addEventListener("DOMContentLoaded", () => {
  const tipoCarRadios = document.getElementsByName("tipo_car");
  const perfilCarRadios = document.querySelectorAll(".check_p1_3");

  const togglePerfilCarRadios = (isEnabled) => {
    perfilCarRadios.forEach((radio) => {
      radio.disabled = !isEnabled;
      if (!isEnabled) radio.checked = false; 
    });
  };

  tipoCarRadios.forEach((radio) => {
    radio.addEventListener("change", ({ target }) => {
      togglePerfilCarRadios(target.value === "C"); 
    });
  });

  //togglePerfilCarRadios(false);
});


function valida_tipocar() {
    // Obtener la opción seleccionada del grupo tipo_car
    const tipo_car_c =  document.getElementById('tipo_car_c');
     const tipo_car_a =  document.getElementById('tipo_car_a');
      const tipo_car_b =  document.getElementById('tipo_car_b');
    const radiosTipoCar = document.querySelectorAll('.rowTipoCar input[type="radio"]');
    const perfil_car_otros = document.getElementById('perfil_car_otros');
    
    if(tipo_car_c.checked){
        
         radiosTipoCar.forEach(radio => {
             radio.disabled = false;
             radio.required = true;
        });
    }else if(tipo_car_a.checked || tipo_car_b.checked){
         radiosTipoCar.forEach(radio => {
            radio.disabled = true;
            radio.required = false;
            radio.checked = false;
        });
        
        perfil_car_otros.value="";
        perfil_car_otros.disabled=true;
    }
    
}



document.addEventListener("DOMContentLoaded", () => {
  // Obtenemos el grupo de radio buttons por nombre
  const perfilCarRadios = document.getElementsByName("perfil_car"); 
  const perfilTextarea = document.getElementById("perfil_car_otros");

  const toggleOtros = () => {
    // Verificamos si algún radio tiene el valor 'i' y está marcado
    const isOtrosSelected = Array.from(perfilCarRadios).some(
      (radio) => radio.checked && radio.value === 'I'
    );

    perfilTextarea.disabled = !isOtrosSelected;
    if (!isOtrosSelected) {
      perfilTextarea.value = ""; // Limpiar valor si está deshabilitado
    }
  };

  // Agregamos el evento a todos los radio buttons del grupo
  perfilCarRadios.forEach((radio) => {
    radio.addEventListener("change", toggleOtros);
  });

  toggleOtros(); // Establece el estado inicial
});

document.addEventListener("DOMContentLoaded", () => {
  const radios = document.querySelectorAll(".check_p1_3");

  function toggleRequired() {
    radios.forEach(radio => radio.required = false); // Desactivar required para todos
  }

  radios.forEach(radio => {
    radio.addEventListener("change", toggleRequired);
  });
});


document.addEventListener("DOMContentLoaded", () => {
  // Obtenemos el grupo de radio buttons por nombre
  const acargodeRadios = document.getElementsByName("acargode"); 
  const acargodeTextarea = document.getElementById("acargode_otros");

  const toggleOtrosx = () => {
    // Verificamos si algún radio tiene el valor 'f' y está marcado
    const isOtrosSelected = Array.from(acargodeRadios).some(
      (radio) => radio.checked && radio.value === 'F'
    );

    acargodeTextarea.disabled = !isOtrosSelected;
    if (!isOtrosSelected) {
      acargodeTextarea.value = ""; // Limpiar valor si está deshabilitado
    }
  };

  // Agregamos el evento a todos los radio buttons del grupo
  acargodeRadios.forEach((radio) => {
    radio.addEventListener("change", toggleOtrosx);
  });

  toggleOtrosx(); // Establece el estado inicial
});


/*******************************************************************************/

function abrir_modal_sec1_2(id, id_ficha) {

    $("#loader_mdl_sec1_2").show();
    $("#loader_form_mdl_sec1_2").hide();

    if (id_ficha === null) {
        id_ficha = $("#id_ficha").val();
    }

    $.ajax({
        url: urlx + "/ajaxBuscarSec1_2",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec1_2_mdl").html(data);

            $("#loader_mdl_sec1_2").hide();
            $("#loader_form_mdl_sec1_2").show();
        },
        error: function (jqXHR, textStatus, errorThrown) {

            $("#loader_mdl_sec1_2").show();
            $("#loader_form_mdl_sec1_2").hide();

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}


   
function guardar_modal_sec1_2() {
    console.log("entro a guardar");
    $("#btn_save_mdl_sec1_2").prop("disabled", true);
    $("#btn_save_mdl_sec1_2").text('');
    $("#btn_save_mdl_sec1_2").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');

    var coar_ficha_s1_p1_2pk = {
        id: parseInt($("#mdl_sec1_2_id").val()),
        id_ficha: parseInt($("#mdl_sec1_2_id_ficha").val())
    };

    console.log("1");
    var coar_ficha_s1_p1_2 = {
        coar_ficha_s1_p1_2pk: coar_ficha_s1_p1_2pk,
        fch_registro: $("#mdl_sec1_2_fch_registro").val(),
        usu_registro: $("#mdl_sec1_2_usu_registro").val(),
        p1_2_grupo_ocupa: $("#p1_2_grupo_ocupa").val(),
        p1_2_peruanas: $("#p1_2_peruanas").val(),
        p1_2_extranjeras: $("#p1_2_extranjeras").val(),
        p1_2_peruanos: $("#p1_2_peruanos").val(),
        p1_2_extranjeros: $("#p1_2_extranjeros").val(),
         p1_2_total: $("#p1_2_total").val()
    };

    console.log("2");
    $.ajax({
        url: urlx + "/ajaxGuardarMdlSec1_2",
        contentType: "application/json;text/html;charset=UTF-8",
        type: "POST",
        data: JSON.stringify(coar_ficha_s1_p1_2),
        success: function (data, textStatus, jqXHR) {
            console.log("3");
            $("#div_sec1_2").html(data);

            $("#btn_save_mdl_sec1_2").prop("disabled", false);
            $("#btn_save_mdl_sec1_2").text('');
            $("#btn_save_mdl_sec1_2").wrapInner('<span class="fa fa-cloud-upload" aria-hidden="true"></span> Guardar');
            
            console.log("antes de cerrar modal");
            $("#modal_sec1_2").modal("hide");

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

function eliminar_modal_sec1_2(id, id_ficha) {

    $.ajax({
        url: urlx + "/ajaxEliminarModalSec1_2",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec1_2").html(data);
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




  function calcularTotal() {
    const peruanas = parseInt(document.getElementById('p1_2_peruanas').value) || 0;
    const extranjeras = parseInt(document.getElementById('p1_2_extranjeras').value) || 0;
    const peruanos = parseInt(document.getElementById('p1_2_peruanos').value) || 0;
    const extranjeros = parseInt(document.getElementById('p1_2_extranjeros').value) || 0;

    const total = peruanas + extranjeras + peruanos + extranjeros;

    document.getElementById('p1_2_total').value = total;
  }


 function validateDNIEntrevistador() {
     console.log("validateDNIEntrevistador");
    const dniInput = document.getElementById('dni_comisionado');
    const dniError = document.getElementById('dniError');

    // Mostrar mensaje de error si el DNI no tiene 8 dígitos
    if (dniInput.value.length !== 8) {
      dniError.style.display = 'block';
    } else {
      dniError.style.display = 'none';
    }
  }
  
  
  /////////////////////////////
  
function abrir_modal_sec1_3(id, id_ficha) {

    $("#loader_mdl_sec1_3").show();
    $("#loader_form_mdl_sec1_3").hide();

    if (id_ficha === null) {
        id_ficha = $("#id_ficha").val();
    }

    $.ajax({
        url: urlx + "/ajaxBuscarSec1_3",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec1_3_mdl").html(data);

            $("#loader_mdl_sec1_3").hide();
            $("#loader_form_mdl_sec1_3").show();
        },
        error: function (jqXHR, textStatus, errorThrown) {

            $("#loader_mdl_sec1_3").show();
            $("#loader_form_mdl_sec1_3").hide();

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}

//function calcularSumaP1_3() { 
//    let total = 0;
//
//    // Recorre cada fila y suma los valores de los subtotales
//    document.querySelectorAll('.subtotal').forEach(function(element) {
//        const subtotal = parseFloat(element.textContent);  // Asegúrate de que el valor es un número
//        if (!isNaN(subtotal)) {
//            total += subtotal;
//        }
//    });
//
//    // Actualiza el campo de la suma total
//    document.getElementById('p1_3_total').value = total;
//}

function calcularSumaP1_3() {
    let total = 0;

    // Verifica si el campo p1_3_total está en el DOM
    const totalField = document.getElementById('p1_3_total');
    if (!totalField) {
        console.error('El campo #p1_3_total no se encuentra en el DOM.');
        return;
    }

    // Recorre cada fila y suma los valores de los subtotales
    document.querySelectorAll('.subtotal').forEach(function(element) {
        const subtotal = parseFloat(element.textContent);  // Asegúrate de que el valor es un número
        if (!isNaN(subtotal)) {
            total += subtotal;
        }
    });

    // Actualiza el campo de la suma total
    totalField.value = total;
}


   
function guardar_modal_sec1_3() {
    console.log("entro a guardar");
    $("#btn_save_mdl_sec1_3").prop("disabled", true);
    $("#btn_save_mdl_sec1_3").text('');
    $("#btn_save_mdl_sec1_3").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');

    var coar_ficha_s1_p1_3pk = {
        id: parseInt($("#mdl_sec1_3_id").val()),
        id_ficha: parseInt($("#mdl_sec1_3_id_ficha").val())
    };

    console.log("1");
    var coar_ficha_s1_p1_3 = {
        coar_ficha_s1_p1_3pk: coar_ficha_s1_p1_3pk,
        fch_registro: $("#mdl_sec1_3_fch_registro").val(),
        usu_registro: $("#mdl_sec1_3_usu_registro").val(),
        p1_3_grupo_ocupa: $("#p1_3_grupo_ocupa").val(),
        p1_3_peruanas: $("#p1_3_peruanas").val(),
        p1_3_extranjeras: $("#p1_3_extranjeras").val(),
        p1_3_peruanos: $("#p1_3_peruanos").val(),
        p1_3_extranjeros: $("#p1_3_extranjeros").val(),
         p1_3_subtotal: $("#p1_3_subtotal").val()
    };

    console.log("2");
    $.ajax({
        url: urlx + "/ajaxGuardarMdlSec1_3",
        contentType: "application/json;text/html;charset=UTF-8",
        type: "POST",
        data: JSON.stringify(coar_ficha_s1_p1_3),
        success: function (data, textStatus, jqXHR) {
            console.log("3");
            $("#div_sec1_3").html(data);
            
            calcularSumaP1_3(); 
            
            $("#btn_save_mdl_sec1_3").prop("disabled", false);
            $("#btn_save_mdl_sec1_3").text('');
            $("#btn_save_mdl_sec1_3").wrapInner('<span class="fa fa-cloud-upload" aria-hidden="true"></span> Guardar');
            
            console.log("antes de cerrar modal");
            $("#modal_sec1_3").modal("hide");

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

function eliminar_modal_sec1_3(id, id_ficha) {

    $.ajax({
        url: urlx + "/ajaxEliminarModalSec1_3",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec1_3").html(data);
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



  function calcularTotalP1_3() {
    const peruanas = parseInt(document.getElementById('p1_3_peruanas').value) || 0;
    const extranjeras = parseInt(document.getElementById('p1_3_extranjeras').value) || 0;
    const peruanos = parseInt(document.getElementById('p1_3_peruanos').value) || 0;
    const extranjeros = parseInt(document.getElementById('p1_3_extranjeros').value) || 0;

    const total = peruanas + extranjeras + peruanos + extranjeros;

    document.getElementById('p1_3_subtotal').value = total;
  }




function valida_p1_4s1() {
    const p1_4_5 = document.getElementById("p1_4_5");
    const p1_4_detalle = document.getElementById("p1_4_detalle");

    if (p1_4_5.checked) {
        p1_4_detalle.disabled = false;
        p1_4_detalle.required = true;

    } else {
        p1_4_detalle.disabled = true;
        p1_4_detalle.required = false;
        p1_4_detalle.value = "";
    }
}


function validaRequeridosRadios(grupoNombre) {
    const radios = document.querySelectorAll(`input[name="${grupoNombre}"]`);
    let algunoSeleccionado = false;

    // Verificar si algún radio está seleccionado
    radios.forEach(radio => {
        if (radio.checked) {
            algunoSeleccionado = true;
        }
    });

    // Aplicar o quitar el atributo required según corresponda
    radios.forEach(radio => {
        radio.required = !algunoSeleccionado; // Si alguno está seleccionado, quita required; si no, pon required
    });
}






  const updateTotal = () => {
    const fields = [
      "p1_5_f_bolivia",
      "p1_5_f_chile",
      "p1_5_f_colo",
      "p1_5_f_ecu",
      "p1_5_f_vene",
      "p1_5_f_otro"
    ];

    const totalInput = document.getElementById("p1_5_f_total");

    // Sumar los valores 
    const total = fields.reduce((sum, fieldId) => {
      const value = document.getElementById(fieldId).value;
      return sum + (isNaN(value) || value === "" ? 0 : parseInt(value));
    }, 0);

   
    totalInput.value = total;
  };
  
  
  const updateTotalm = () => {
    const fields = [
      "p1_5_m_bolivia",
      "p1_5_m_chile",
      "p1_5_m_colo",
      "p1_5_m_ecu",
      "p1_5_m_vene",
      "p1_5_m_otro"
    ];

    const totalInput = document.getElementById("p1_5_m_total");

    // Sumar los valores 
    const total = fields.reduce((sum, fieldId) => {
      const value = document.getElementById(fieldId).value;
      return sum + (isNaN(value) || value === "" ? 0 : parseInt(value));
    }, 0);

   
    totalInput.value = total;
  };
  
    const updateTotalx = () => {
    const fields = [
      "p1_5_f_bolivia",
      "p1_5_f_chile",
      "p1_5_f_colo",
      "p1_5_f_ecu",
      "p1_5_f_vene",
      "p1_5_f_otro",
       "p1_5_m_bolivia",
      "p1_5_m_chile",
      "p1_5_m_colo",
      "p1_5_m_ecu",
      "p1_5_m_vene",
      "p1_5_m_otro"
    ];

    const totalInput = document.getElementById("p1_5_total");

    // Sumar los valores 
    const total = fields.reduce((sum, fieldId) => {
      const value = document.getElementById(fieldId).value;
      return sum + (isNaN(value) || value === "" ? 0 : parseInt(value));
    }, 0);

   
    totalInput.value = total;
  };
  
  const updateSubTotalBolivia = () => {
    const fields = [
      "p1_5_f_bolivia",
      "p1_5_m_bolivia"

    ];

    const totalInput = document.getElementById("p1_5_subtotal_bolivia");

    // Sumar los valores 
    const total = fields.reduce((sum, fieldId) => {
      const value = document.getElementById(fieldId).value;
      return sum + (isNaN(value) || value === "" ? 0 : parseInt(value));
    }, 0);
 
    totalInput.value = total;
  };
  
   const updateSubTotalChile = () => {
    const fields = [
      "p1_5_f_chile",
      "p1_5_m_chile"

    ];
    const totalInput = document.getElementById("p1_5_subtotal_chile");

    const total = fields.reduce((sum, fieldId) => {
      const value = document.getElementById(fieldId).value;
      return sum + (isNaN(value) || value === "" ? 0 : parseInt(value));
    }, 0);
 
    totalInput.value = total;
  };
  
  
   const updateSubTotalColo = () => {
    const fields = [
      "p1_5_f_colo",
      "p1_5_m_colo"

    ];
    const totalInput = document.getElementById("p1_5_subtotal_colo");

    const total = fields.reduce((sum, fieldId) => {
      const value = document.getElementById(fieldId).value;
      return sum + (isNaN(value) || value === "" ? 0 : parseInt(value));
    }, 0);
 
    totalInput.value = total;
  };
  
  
     const updateSubTotalEcu = () => {
    const fields = [
      "p1_5_f_ecu",
      "p1_5_m_ecu"

    ];
    const totalInput = document.getElementById("p1_5_subtotal_ecu");

    const total = fields.reduce((sum, fieldId) => {
      const value = document.getElementById(fieldId).value;
      return sum + (isNaN(value) || value === "" ? 0 : parseInt(value));
    }, 0);
 
    totalInput.value = total;
  };
  

     const updateSubTotalVene = () => {
    const fields = [
      "p1_5_f_vene",
      "p1_5_m_vene"

    ];
    const totalInput = document.getElementById("p1_5_subtotal_vene");

    const total = fields.reduce((sum, fieldId) => {
      const value = document.getElementById(fieldId).value;
      return sum + (isNaN(value) || value === "" ? 0 : parseInt(value));
    }, 0);
 
    totalInput.value = total;
  };
  
   const updateSubTotalOtro = () => {
    const fields = [
      "p1_5_f_otro",
      "p1_5_m_otro"

    ];
    const totalInput = document.getElementById("p1_5_subtotal_otro");

    const total = fields.reduce((sum, fieldId) => {
      const value = document.getElementById(fieldId).value;
      return sum + (isNaN(value) || value === "" ? 0 : parseInt(value));
    }, 0);
 
    totalInput.value = total;
  };
  
 				
////////////////////////////////////////////////////////////
 
function abrir_modal_sec1_6(id, id_ficha) {

    $("#loader_mdl_sec1_6").show();
    $("#loader_form_mdl_sec1_6").hide();

    if (id_ficha === null) {
        id_ficha = $("#id_ficha").val();
    }

    $.ajax({
        url: urlx + "/ajaxBuscarSec1_6",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec1_6_mdl").html(data);

            $("#loader_mdl_sec1_6").hide();
            $("#loader_form_mdl_sec1_6").show();
        },
        error: function (jqXHR, textStatus, errorThrown) {

            $("#loader_mdl_sec1_6").show();
            $("#loader_form_mdl_sec1_6").hide();

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}


function guardar_modal_sec1_6() {
    console.log("entro a guardar");
    $("#btn_save_mdl_sec1_6").prop("disabled", true);
    $("#btn_save_mdl_sec1_6").text('');
    $("#btn_save_mdl_sec1_6").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');

    var coar_ficha_s1_p1_6pk = {
        id: parseInt($("#mdl_sec1_6_id").val()),
        id_ficha: parseInt($("#mdl_sec1_6_id_ficha").val())
    };

    console.log("1");
    var coar_ficha_s1_p1_6 = {
        coar_ficha_s1_p1_6pk: coar_ficha_s1_p1_6pk,
        fch_registro: $("#mdl_sec1_6_fch_registro").val(),
        usu_registro: $("#mdl_sec1_6_usu_registro").val(),
        p1_6_nom_residente: $("#p1_6_nom_residente").val(),
        p1_6_sexo: $("#p1_6_sexo").val(),
        p1_6_edad: $("#p1_6_edad").val(),
        p1_6_nacionalidad: $("#p1_6_nacionalidad").val(),
        p1_6_documento: $("#p1_6_documento").val(),
        p1_6_nom_padre_madre: $("#p1_6_nom_padre_madre").val(),
        p1_6_establecimiento: $("#p1_6_establecimiento").val(),
        p1_6_nom_institucion: $("#p1_6_nom_institucion").val()
    };

    console.log("2");
    $.ajax({
        url: urlx + "/ajaxGuardarMdlSec1_6",
        contentType: "application/json;text/html;charset=UTF-8",
        type: "POST",
        data: JSON.stringify(coar_ficha_s1_p1_6),
        success: function (data, textStatus, jqXHR) {
            console.log("3");
            $("#div_sec1_6").html(data);
            
            
            $("#btn_save_mdl_sec1_6").prop("disabled", false);
            $("#btn_save_mdl_sec1_6").text('');
            $("#btn_save_mdl_sec1_6").wrapInner('<span class="fa fa-cloud-upload" aria-hidden="true"></span> Guardar');
            
            console.log("antes de cerrar modal");
            $("#modal_sec1_6").modal("hide");

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

function eliminar_modal_sec1_6(id, id_ficha) {

    $.ajax({
        url: urlx + "/ajaxEliminarModalSec1_6",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec1_6").html(data);
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



function valida_p1_6_oculta() {
    var siRadio = document.getElementById('p1_6_si');
    var noRadio = document.getElementById('p1_6_no');
    const noAdjuntarDiv = document.querySelector(".no_aplica1_6");

    if (siRadio.checked) {

        noAdjuntarDiv.style.display = "block";
        
    } else if (noRadio.checked) {

        noAdjuntarDiv.style.display = "none";
    }
}


function valida_p1_6_registros() {
    const tableBody = document.querySelector("#div_sec1_6 tbody");
    const validationMessage = document.getElementById("validationMessage");
    const noAdjuntarDiv = document.querySelector(".no_aplica1_6");
    var siRadio = document.getElementById('p1_6_si');


    if (tableBody && tableBody.rows.length > 0) {
         noAdjuntarDiv.style.display = "block";
        validationMessage.style.display = "block";
        document.querySelector("#p1_6_no").checked = false;
        siRadio.checked= true;
    } else {
        validationMessage.style.display = "none";
    }
}


function valida_p2_1(){
  // var siRadio = document.getElementById('p2_1_si');
    var noRadio = document.getElementById('p2_1_no');


if (noRadio.checked){
    
    var radios = document.querySelectorAll('.check_2_2');
        radios.forEach(function (radio) {
            radio.disabled = false;
            radio.required = true;
        });
        
   }else{
       
        var radios = document.querySelectorAll('.check_2_2');
        radios.forEach(function (radio) {
            radio.disabled = true;
            radio.checked= false;
            radio.required = false;
        });
   }     
        
}


function valida_p2_3(){
  // var siRadio = document.getElementById('p2_1_si');
    var noRadio = document.getElementById('p2_3_no');


if (noRadio.checked){
    
    var radios = document.querySelectorAll('.check_p2_4');
        radios.forEach(function (radio) {
            radio.disabled = false;
            radio.required = true;
        });
        
   }else{
       
        var radios = document.querySelectorAll('.check_p2_4');
        radios.forEach(function (radio) {
            radio.disabled = true;
            radio.checked= false;
            radio.required = false;
        });
   }     
        
}


function valida_p2_5(){
  // var siRadio = document.getElementById('p2_1_si');
    var noRadio = document.getElementById('p2_5_no');


if (noRadio.checked){
    
    var radios = document.querySelectorAll('.check_p2_6');
        radios.forEach(function (radio) {
              radio.disabled = false;
              radio.required = true;
        });
        
   }else{
       
        var radios = document.querySelectorAll('.check_p2_6');
        radios.forEach(function (radio) {
            radio.disabled = true;
            radio.checked= false;
            radio.required = false;
        });
   }     
        
}

function valida_p2_7(){
   var siRadio = document.getElementById('p2_7_si');
  //  var noRadio = document.getElementById('p2_7_no');


if (siRadio.checked){
    
    var checkboxes = document.querySelectorAll('.check_p2_8');
        checkboxes.forEach(function (checkbox) {
            checkbox.disabled = false;
        });
        
   }else{
       
        var checkboxes = document.querySelectorAll('.check_p2_8');
        checkboxes.forEach(function (checkbox) {
            checkbox.disabled = true;
            checkbox.checked= false;
            checkbox.required = false;
        });
   }     
        
}
        


function valida_p2_8_otro(){
   var otroRadio = document.getElementById('p2_8_8');
   var p2_8_detalle= document.getElementById('p2_8_detalle');
  //  var noRadio = document.getElementById('p2_7_no');
if (otroRadio.checked){
    
    p2_8_detalle.disabled= false;
    p2_8_detalle.required= true;    
   }else{
    p2_8_detalle.required= false;     
    p2_8_detalle.disabled= true;
    p2_8_detalle.value= "";
   }     
        
}

function valida_p3_1_2_otro(){
   var otroRadio = document.getElementById('p3_1_2_c');
   var p3_1_2_otro= document.getElementById('p3_1_2_otro');
  //  var noRadio = document.getElementById('p2_7_no');
if (otroRadio.checked){
    
    p3_1_2_otro.disabled= false;
    p3_1_2_otro.required= true;    
   }else{
       
    p3_1_2_otro.disabled= true;
    p3_1_2_otro.value= "";
    p3_1_2_otro.required= false;  
   }     
        
}

function valida_p3_1_3_otro(){
    var otroRadio = document.getElementById('p3_1_3_c');
    var p3_1_3_otro= document.getElementById('p3_1_3_otro');
   //  var noRadio = document.getElementById('p2_7_no');
 if (otroRadio.checked){
     
     p3_1_3_otro.disabled= false;
     p3_1_3_otro.required= true;    
    }else{
        
     p3_1_3_otro.disabled= true;
     p3_1_3_otro.value= "";
     p3_1_3_otro.required= false;  
    }     
         
 }


function valida_p3_1_4_otro(){
    var otroRadio = document.getElementById('p3_1_4_d');
    var p3_1_4_otro= document.getElementById('p3_1_4_otro');
   //  var noRadio = document.getElementById('p2_7_no');
 if (otroRadio.checked){
     
     p3_1_4_otro.disabled= false;
     p3_1_4_otro.required= true;    
    }else{
        
     p3_1_4_otro.disabled= true;
     p3_1_4_otro.value= "";
     p3_1_4_otro.required= false;  
    }     
         
 }
 
 function valida_p3_1_5_otro(){
    var otroRadio = document.getElementById('p3_1_5_c');
    var p3_1_5_otro= document.getElementById('p3_1_5_otro');
   //  var noRadio = document.getElementById('p2_7_no');
 if (otroRadio.checked){
     
     p3_1_5_otro.disabled= false;
     p3_1_5_otro.required= true;    
    }else{
        
     p3_1_5_otro.disabled= true;
     p3_1_5_otro.value= "";
     p3_1_5_otro.required= false;  
    }     
         
 }
 
   const updateTotal_p3_1_7 = () => {
    const fields = [
      "p3_1_7_bolivia_cantidad",
      "p3_1_7_chile_cantidad",
      "p3_1_7_colo_cantidad",
      "p3_1_7_ecu_cantidad",
      "p3_1_7_vene_cantidad",
      "p3_1_7_otro_cantidad"
    ];

    const totalInput = document.getElementById("p3_1_7_total");

    // Sumar los valores 
    const total = fields.reduce((sum, fieldId) => {
      const value = document.getElementById(fieldId).value;
      return sum + (isNaN(value) || value === "" ? 0 : parseInt(value));
    }, 0);

   
    totalInput.value = total;
  };
  
  
 function valida_p3_1_6_oculta() {
    var siRadio = document.getElementById('p3_1_6_si');
    var noRadio = document.getElementById('p3_1_6_no');
    const noAdjuntarDiv = document.querySelector(".no_aplica3_1_7");

    if (siRadio.checked) {
        noAdjuntarDiv.style.display = "block";
    } else{
        noAdjuntarDiv.style.display = "none";

        // Limpiar todos los inputs dentro del row317
        const inputs = document.querySelectorAll(".row317 input[type='number']");
        inputs.forEach(input => {
            input.value = '';
        });
    }
}

////////////////////////////////////////////////////////////
 
function abrir_modal_sec3_2(id, id_ficha) {

    $("#loader_mdl_sec3_2").show();
    $("#loader_form_mdl_sec3_2").hide();

    if (id_ficha === null) {
        id_ficha = $("#id_ficha").val();
    }

    $.ajax({
        url: urlx + "/ajaxBuscarSec3_2",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec3_2_mdl").html(data);

            $("#loader_mdl_sec3_2").hide();
            $("#loader_form_mdl_sec3_2").show();
        },
        error: function (jqXHR, textStatus, errorThrown) {

            $("#loader_mdl_sec3_2").show();
            $("#loader_form_mdl_sec3_2").hide();

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}






function guardar_modal_sec3_2() {
    console.log("entro a guardar");
    $("#btn_save_mdl_sec3_2").prop("disabled", true);
    $("#btn_save_mdl_sec3_2").text('');
    $("#btn_save_mdl_sec3_2").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');

    var coar_ficha_s3_p3_2pk = {
        id: parseInt($("#mdl_sec3_2_id").val()),
        id_ficha: parseInt($("#mdl_sec3_2_id_ficha").val())
    };

    console.log("1");
    var coar_ficha_s3_p3_2 = {
        coar_ficha_s3_p3_2pk: coar_ficha_s3_p3_2pk,
        fch_registro: $("#mdl_sec3_2_fch_registro").val(),
        usu_registro: $("#mdl_sec3_2_usu_registro").val(),
        p3_2_lista_profesiones: $("#p3_2_lista_profesiones").val(),
        p3_2_detalle: $("#p3_2_detalle").val(),
        p3_2_voluntariado: $("#p3_2_voluntariado").val(),
        p3_2_728: $("#p3_2_728").val(),
        p3_2_cas: $("#p3_2_cas").val(),
        p3_2_276: $("#p3_2_276").val(),
        p3_2_locacion: $("#p3_2_locacion").val(),
        p3_2_terceros: $("#p3_2_terceros").val(),
        p3_2_total: $("#p3_2_total").val()
    };

    console.log("2");
    $.ajax({
        url: urlx + "/ajaxGuardarMdlSec3_2",
        contentType: "application/json;text/html;charset=UTF-8",
        type: "POST",
        data: JSON.stringify(coar_ficha_s3_p3_2),
        success: function (data, textStatus, jqXHR) {
            console.log("3");
            $("#div_sec3_2").html(data);
            
            
            $("#btn_save_mdl_sec3_2").prop("disabled", false);
            $("#btn_save_mdl_sec3_2").text('');
            $("#btn_save_mdl_sec3_2").wrapInner('<span class="fa fa-cloud-upload" aria-hidden="true"></span> Guardar');
            
            console.log("antes de cerrar modal");
            $("#modal_sec3_2").modal("hide");

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

function eliminar_modal_sec3_2(id, id_ficha) {

    $.ajax({
        url: urlx + "/ajaxEliminarModalSec3_2",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec3_2").html(data);
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




  function calcularTotal_3_2() {
    const p3_2_voluntariado = parseInt(document.getElementById('p3_2_voluntariado').value) || 0;
    const p3_2_728 = parseInt(document.getElementById('p3_2_728').value) || 0;
    const p3_2_cas = parseInt(document.getElementById('p3_2_cas').value) || 0;
    const p3_2_276 = parseInt(document.getElementById('p3_2_276').value) || 0;
    const p3_2_locacion = parseInt(document.getElementById('p3_2_locacion').value) || 0;  
    const p3_2_terceros = parseInt(document.getElementById('p3_2_terceros').value) || 0;

    const total = p3_2_voluntariado + p3_2_728 + p3_2_cas + p3_2_276 + p3_2_locacion + p3_2_terceros;

    document.getElementById('p3_2_total').value = total;
  }
  
  



function valida_p3_2_1_oculta() {
    var siRadio = document.getElementById('p3_2_1_si');
    var noRadio = document.getElementById('p3_2_1_no');
    const noAdjuntarDiv = document.querySelector(".no_aplica1_6");

    if (siRadio.checked) {

        noAdjuntarDiv.style.display = "block";
        
    } else if (noRadio.checked) {

        noAdjuntarDiv.style.display = "none";
    }
}


const updateTotal_p3_2_2 = () => {
    const fields = [
      "p3_2_2_bolivia_cantidad",
      "p3_2_2_chile_cantidad",
      "p3_2_2_colo_cantidad",
      "p3_2_2_ecu_cantidad",
      "p3_2_2_vene_cantidad",
      "p3_2_2_otro_cantidad"
    ];

    const totalInput = document.getElementById("p3_2_2_total");

    // Sumar los valores 
    const total = fields.reduce((sum, fieldId) => {
      const value = document.getElementById(fieldId).value;
      return sum + (isNaN(value) || value === "" ? 0 : parseInt(value));
    }, 0);

   
    totalInput.value = total;
  };
  
function valida_p3_2_1_disabled() {
    // Obtiene los radio buttons por su ID
    const radioSi = document.getElementById("p3_2_1_si");
    const radioNo = document.getElementById("p3_2_1_no");

    // Verifica cuál radio está seleccionado
    let respuesta = null;
    if (radioSi && radioSi.checked) {
        respuesta = "S";
    } else if (radioNo && radioNo.checked) {
        respuesta = "N";
    }

    // Selecciona todos los inputs dentro de la clase "row322"
    const inputs = document.querySelectorAll('.row322 input');

    // Habilita o deshabilita los inputs según la respuesta seleccionada
    if (respuesta === "S") {
        inputs.forEach(input => {
            input.disabled = false; // Habilitar inputs
            input.required = true;
        });
    } else if (respuesta === "N") {
        inputs.forEach(input => {
            input.disabled = true; // Deshabilitar inputs
            input.value = ""; // Limpia los valores (opcional)
            input.required = false;
        });
    }
}

////////////////////////////////////////////////////////////
 
function abrir_modal_sec3_3(id, id_ficha) {

    $("#loader_mdl_sec3_3").show();
    $("#loader_form_mdl_sec3_3").hide();

    if (id_ficha === null) {
        id_ficha = $("#id_ficha").val();
    }

    $.ajax({
        url: urlx + "/ajaxBuscarSec3_3",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec3_3_mdl").html(data);

            $("#loader_mdl_sec3_3").hide();
            $("#loader_form_mdl_sec3_3").show();
        },
        error: function (jqXHR, textStatus, errorThrown) {

            $("#loader_mdl_sec3_3").show();
            $("#loader_form_mdl_sec3_3").hide();

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}






function guardar_modal_sec3_3() {
    console.log("entro a guardar");
    $("#btn_save_mdl_sec3_3").prop("disabled", true);
    $("#btn_save_mdl_sec3_3").text('');
    $("#btn_save_mdl_sec3_3").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');

    var coar_ficha_s3_p3_3pk = {
        id: parseInt($("#mdl_sec3_3_id").val()),
        id_ficha: parseInt($("#mdl_sec3_3_id_ficha").val())
    };

    console.log("1");
    var coar_ficha_s3_p3_3 = {
        coar_ficha_s3_p3_3pk: coar_ficha_s3_p3_3pk,
        fch_registro: $("#mdl_sec3_3_fch_registro").val(),
        usu_registro: $("#mdl_sec3_3_usu_registro").val(),
        p3_3_ocupacion: $("#p3_3_ocupacion").val(),
        p3_3_voluntariado: $("#p3_3_voluntariado").val(),
        p3_3_728: $("#p3_3_728").val(),
        p3_3_cas: $("#p3_3_cas").val(),
        p3_3_276: $("#p3_3_276").val(),
        p3_3_locacion: $("#p3_3_locacion").val(),
        p3_3_terceros: $("#p3_3_terceros").val(),
        p3_3_total: $("#p3_3_total").val()
    };

    console.log("2");
    $.ajax({
        url: urlx + "/ajaxGuardarMdlSec3_3",
        contentType: "application/json;text/html;charset=UTF-8",
        type: "POST",
        data: JSON.stringify(coar_ficha_s3_p3_3),
        success: function (data, textStatus, jqXHR) {
            console.log("3");
            $("#div_sec3_3").html(data);
            
            
            $("#btn_save_mdl_sec3_3").prop("disabled", false);
            $("#btn_save_mdl_sec3_3").text('');
            $("#btn_save_mdl_sec3_3").wrapInner('<span class="fa fa-cloud-upload" aria-hidden="true"></span> Guardar');
            
            console.log("antes de cerrar modal");
            $("#modal_sec3_3").modal("hide");

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

function eliminar_modal_sec3_3(id, id_ficha) {

    $.ajax({
        url: urlx + "/ajaxEliminarModalSec3_3",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec3_3").html(data);
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


function calcularTotal_3_3() {
    const p3_3_voluntariado = parseInt(document.getElementById('p3_3_voluntariado').value) || 0;
    const p3_3_728 = parseInt(document.getElementById('p3_3_728').value) || 0;
    const p3_3_cas = parseInt(document.getElementById('p3_3_cas').value) || 0;
    const p3_3_276 = parseInt(document.getElementById('p3_3_276').value) || 0;
    const p3_3_locacion = parseInt(document.getElementById('p3_3_locacion').value) || 0;  
    const p3_3_terceros = parseInt(document.getElementById('p3_3_terceros').value) || 0;

    const total = p3_3_voluntariado + p3_3_728 + p3_3_cas + p3_3_276 + p3_3_locacion + p3_3_terceros;

    document.getElementById('p3_3_total').value = total;
  }
  
  const updateTotal_p3_3_2 = () => {
    const fields = [
      "p3_3_2_bolivia_cantidad",
      "p3_3_2_chile_cantidad",
      "p3_3_2_colo_cantidad",
      "p3_3_2_ecu_cantidad",
      "p3_3_2_vene_cantidad",
      "p3_3_2_otro_cantidad"
    ];

    const totalInput = document.getElementById("p3_3_2_total");

    // Sumar los valores 
    const total = fields.reduce((sum, fieldId) => {
      const value = document.getElementById(fieldId).value;
      return sum + (isNaN(value) || value === "" ? 0 : parseInt(value));
    }, 0);

   
    totalInput.value = total;
  };
  
  
  
function valida_p3_3_1_disabled() {
    // Obtiene los radio buttons por su ID
    const radioSi = document.getElementById("p3_3_1_si");
    const radioNo = document.getElementById("p3_3_1_no");

    // Verifica cuál radio está seleccionado
    let respuesta = null;
    if (radioSi && radioSi.checked) {
        respuesta = "S";
    } else if (radioNo && radioNo.checked) {
        respuesta = "N";
    }

    // Selecciona todos los inputs dentro de la clase "row322"
    const inputs = document.querySelectorAll('.row332 input');

    // Habilita o deshabilita los inputs según la respuesta seleccionada
    if (respuesta === "S") {
        inputs.forEach(input => {
            input.disabled = false; // Habilitar inputs
            input.required = true;
        });
    } else if (respuesta === "N") {
        inputs.forEach(input => {
            input.disabled = true; // Deshabilitar inputs
            input.value = ""; // Limpia los valores (opcional)
            input.required = false;
        });
    }
}



function valida_p3_4_1() {
    const radioSi = document.getElementById("p3_4_1_si");
    const radioNo = document.getElementById("p3_4_1_no");

    let respuesta = null;
    if (radioSi && radioSi.checked) {
        respuesta = "S";
    } else if (radioNo && radioNo.checked) {
        respuesta = "N";
    }

    const radios = document.querySelectorAll('.row342 input[type="radio"]');

    // Habilita o deshabilita los radios según la respuesta seleccionada
    if (respuesta === "S") {
        radios.forEach(radio => {
            radio.disabled = false; 
            radio.required = true; 
        });
    } else if (respuesta === "N") {
        radios.forEach(radio => {
            radio.disabled = true; // Deshabilitar radios
            radio.checked = false; // Limpia la selección (opcional)
             radio.required = false; 
        });
    }
}

//
//function valida_p3_4_5() {
//    const radioSi = document.getElementById("p3_4_5_si");
//    const radioNo = document.getElementById("p3_4_5_no");
//
//    let respuesta = null;
//    if (radioSi && radioSi.checked) {
//        respuesta = "S";
//    } else if (radioNo && radioNo.checked) {
//        respuesta = "N";
//    }
//
//    const radios = document.querySelectorAll('.row346 input[type="radio"]');
//    const inputs = document.querySelectorAll('.row346 input:not([type="radio"])');
//
//    // Habilita o deshabilita según la respuesta seleccionada
//    if (respuesta === "S") {
//        radios.forEach(radio => {
//            radio.disabled = false; // Habilitar radios
//            radio.required = true; // Opcional: agregar required
//        });
//        inputs.forEach(input => {
//            input.disabled = false; // Habilitar inputs
//            input.required = true; // Opcional: agregar required
//        });
//    } else if (respuesta === "N") {
//        radios.forEach(radio => {
//            radio.disabled = true; // Deshabilitar radios
//            radio.checked = false; // Limpiar selección (opcional)
//            radio.required = false; // Opcional: eliminar required
//        });
//        inputs.forEach(input => {
//            input.disabled = true; // Deshabilitar inputs
//            input.value = ""; // Limpiar valores (opcional)
//            input.required = false; // Opcional: eliminar required
//        });
//    }
//}
function valida_p3_4_5() {
    // Obtener los radios de cada pregunta
    const radioSi = document.getElementById("p3_4_5_si"); // p3_4_5 (la pregunta principal)
    const radioNo = document.getElementById("p3_4_5_no"); 

    const radioSi4 = document.getElementById("p3_4_4_si"); // p3_4_4
    const radioNo4 = document.getElementById("p3_4_4_no");

    const radioSi3 = document.getElementById("p3_4_3_si"); // p3_4_3
    const radioNo3 = document.getElementById("p3_4_3_no");

    const radioSi6 = document.getElementById("p3_4_6_si"); // p3_4_6 (la pregunta dependiente)
    const radioNo6 = document.getElementById("p3_4_6_no");
    
    var p3_4_6_cual   = document.getElementById("p3_4_6_cual");
    var p3_4_6_otro   = document.getElementById("p3_4_6_otro");
    let respuesta = null;
    
    // Verificar si "Sí" o "No" están seleccionados en p3_4_5
    if (radioSi && radioSi.checked) {
        respuesta = "S";
    } else if (radioNo && radioNo.checked) {
        respuesta = "N";
    }

    const isSiSelected = (radioSi3 && radioSi3.checked) || (radioSi4 && radioSi4.checked) || (radioSi && radioSi.checked);

    // Si cualquier radio de las preguntas 3.4.3, 3.4.4 o 3.4.5 tiene "Sí", habilitar p3_4_6
    if (isSiSelected) {
        if (radioSi6) {
            radioSi6.disabled = false;
        }
        if (radioNo6) {
            radioNo6.disabled = false;
        }
    } else {
        // Si ninguno tiene "Sí", deshabilitar p3_4_6
        if (radioSi6) {
            radioSi6.disabled = true;
            radioSi6.checked = false;
        }
        if (radioNo6) {
            radioNo6.disabled = true;
            radioNo6.checked = false;
        }
    }
    
    var p3_4_9_horas = document.getElementById("p3_4_9_horas");
    const radios347 = document.querySelectorAll('.row347 input[type="radio"]');
    const checkboxes = document.querySelectorAll('.row346 input[type="checkbox"]');
    const radios3410  = document.querySelectorAll('.row3410 input[type="radio"]');
    // Habilitar o deshabilitar los radios y los inputs según la respuesta seleccionada
    if (respuesta === "S" || isSiSelected) {
        // Si "Sí" está marcado en cualquiera de las opciones, habilitar todos los radios e inputs
        checkboxes.forEach(checkbox => {
            checkbox.disabled = false;
        });
        
         radios347.forEach(radio => {
            radio.disabled = false;
            radio.required = true;
        });
        
        radios3410.forEach(radio => {
            radio.disabled = false;
            radio.required = true;
        });
        
         p3_4_6_cual.disabled=true;
        p3_4_6_otro.disabled = true;
        
        p3_4_9_horas.disabled= false;
        p3_4_9_horas.required = true;
        
    } else if (respuesta === "N") {
        p3_4_6_cual.value ="";
        p3_4_6_cual.disabled=true;
        
        p3_4_6_otro.value="";
        p3_4_6_otro.disabled=true;
        // Si "No" está marcado, deshabilitar todos los radios e inputs
        checkboxes.forEach(checkbox => {
            checkbox.disabled = true;
            checkbox.checked = false;
            checkbox.required = false;
        });
      
      radios347.forEach(radio => {
            radio.disabled = true;
            radio.checked = false;
            radio.required = false;
        });
        
      radios3410.forEach(radio => {
            radio.disabled = true;
            radio.checked = false;
            radio.required = false;
        });
        
        p3_4_9_horas.disabled= true;
        p3_4_9_horas.required = false;
        p3_4_9_horas.value="";
    }
}




function valida_p3_4_7() {
    const radioSi = document.getElementById("p3_4_7_si");
    const radioNo = document.getElementById("p3_4_7_no");

    let respuesta = null;
    if (radioSi && radioSi.checked) {
        respuesta = "S";
    } else if (radioNo && radioNo.checked) {
        respuesta = "N";
    }

    const checkboxes = document.querySelectorAll('.row348 input[type="checkbox"]');
    var otro = document.getElementById("p3_4_8_otro");
    // Habilita o deshabilita los radios según la respuesta seleccionada
    if (respuesta === "N") {
        checkboxes.forEach(checkbox => {
            checkbox.disabled = false; 
        });
         otro.disabled=true;
        otro.value="";
    } else if (respuesta === "S") {
        otro.disabled=true;
        otro.value="";
        checkboxes.forEach(checkbox => {
            checkbox.disabled = true; // Deshabilitar radios
            checkbox.checked = false; // Limpia la selección (opcional)
             checkbox.required = false; 
        });
    }
}


function valida_p3_4_6_cual() {
    const radioB = document.getElementById("p3_4_6_b");
    const textarea = document.getElementById("p3_4_6_cual");

    if (radioB.checked) {
        textarea.disabled = false; 
        textarea.required = true;
    } else {
        textarea.disabled = true; 
        textarea.value = ""; 
        textarea.required = false; 
    }
}



function valida_p3_4_6_otro() {
    const radioD = document.getElementById("p3_4_6_d");
    const textarea = document.getElementById("p3_4_6_otro");

    if (radioD.checked) {
        textarea.disabled = false; 
        textarea.required = true;
    } else {
        textarea.disabled = true; 
        textarea.value = ""; 
        textarea.required = false; 
    }
}
 

function valida_p3_4_8_otro() {
    const radioC = document.getElementById("p3_4_8_d");
    const textarea = document.getElementById("p3_4_8_otro");

    if (radioC.checked) {
        textarea.disabled = false; 
        textarea.required = true;
    } else {
        textarea.disabled = true; 
        textarea.value = ""; 
        textarea.required = false; 
    }
}


function valida_p4_1_oculta() {
    var siRadio = document.getElementById('p4_1_si');
    var noRadio = document.getElementById('p4_1_no');
    var p4_3 = document.getElementById('p4_3');
    const noAdjuntarDiv = document.querySelector(".no_aplica4_2");

    if (siRadio.checked) {

        noAdjuntarDiv.style.display = "block";
        p4_3.required =true;
    } else if (noRadio.checked) {

        noAdjuntarDiv.style.display = "none";
        p4_3.value="";
        p4_3.required =false;
    }else{
        noAdjuntarDiv.style.display = "none";
        p4_3.value="";
        p4_3.required =false;
    }
}



function valida_p4_1_registros() {
    const tableBody = document.querySelector("#div_sec4_2 tbody");
    const validationMessage = document.getElementById("validationMessage4_1");
    const noAdjuntarDiv = document.querySelector(".no_aplica4_2");
    var siRadio = document.getElementById('p4_1_si');


    if (tableBody && tableBody.rows.length > 0) {
         noAdjuntarDiv.style.display = "block";
        validationMessage.style.display = "block";
        document.querySelector("#p4_1_no").checked = false;
        siRadio.checked= true;
    } else {
        validationMessage.style.display = "none";
    }
}





function abrir_modal_sec4_2(id, id_ficha) {

    $("#loader_mdl_sec4_2").show();
    $("#loader_form_mdl_sec4_2").hide();

    if (id_ficha === null) {
        id_ficha = $("#id_ficha").val();
    }

    $.ajax({
        url: urlx + "/ajaxBuscarSec4_2",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec4_2_mdl").html(data);

            $("#loader_mdl_sec4_2").hide();
            $("#loader_form_mdl_sec4_2").show();
        },
        error: function (jqXHR, textStatus, errorThrown) {

            $("#loader_mdl_sec4_2").show();
            $("#loader_form_mdl_sec4_2").hide();

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}






function guardar_modal_sec4_2() {
    console.log("entro a guardar");
    $("#btn_save_mdl_sec4_2").prop("disabled", true);
    $("#btn_save_mdl_sec4_2").text('');
    $("#btn_save_mdl_sec4_2").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');

    var coar_ficha_s4_p4_2pk = {
        id: parseInt($("#mdl_sec4_2_id").val()),
        id_ficha: parseInt($("#mdl_sec4_2_id_ficha").val())
    };

    console.log("1");
    var coar_ficha_s4_p4_2 = {
        coar_ficha_s4_p4_2pk: coar_ficha_s4_p4_2pk,
        fch_registro: $("#mdl_sec4_2_fch_registro").val(),
        usu_registro: $("#mdl_sec4_2_usu_registro").val(),
        p4_2_nom_residente: $("#p4_2_nom_residente").val(),
        p4_2_edad: $("#p4_2_edad").val(),
        p4_2_sexo: $("#p4_2_sexo").val(),
        p4_2_partidanac: $("#p4_2_partidanac").val(),
        p4_2_certinac: $("#p4_2_certinac").val(),
        p4_2_reniec: $("#p4_2_reniec").val(),
        p4_2_defensoria: $("#p4_2_defensoria").val(), 
        p4_2_amerita: $("#p4_2_amerita").val()
    };

    console.log("2");
    $.ajax({
        url: urlx + "/ajaxGuardarMdlSec4_2",
        contentType: "application/json;text/html;charset=UTF-8",
        type: "POST",
        data: JSON.stringify(coar_ficha_s4_p4_2),
        success: function (data, textStatus, jqXHR) {
            console.log("3");
            $("#div_sec4_2").html(data);
            
            updateTotalResidents();
            
            $("#btn_save_mdl_sec4_2").prop("disabled", false);
            $("#btn_save_mdl_sec4_2").text('');
            $("#btn_save_mdl_sec4_2").wrapInner('<span class="fa fa-cloud-upload" aria-hidden="true"></span> Guardar');
            
            console.log("antes de cerrar modal");
            $("#modal_sec4_2").modal("hide");

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

function eliminar_modal_sec4_2(id, id_ficha) {

    $.ajax({
        url: urlx + "/ajaxEliminarModalSec4_2",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec4_2").html(data);
             updateTotalResidents();
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


const updateTotalResidents = () => {
    const tableBody = document.querySelector("#div_sec4_2 tbody");
    const totalInput = document.getElementById("p4_3");

    if (tableBody && totalInput) {
        // Selecciona solo las filas de datos (excluye encabezados u otros elementos)
        const rows = tableBody.querySelectorAll("tr:not(.header-row)"); // Asegúrate de no contar filas de encabezados
        const rowCount = rows.length;

        // Si no hay filas, el total es 0
        totalInput.value = rowCount > 0 ? rowCount : 0; 
    } else if (totalInput) {
        // Si no existe el tbody (tabla vacía), establece el total en 0
        totalInput.value = 0;
    }
};







function abrir_modal_sec4_4(id, id_ficha) {

    $("#loader_mdl_sec4_4").show();
    $("#loader_form_mdl_sec4_4").hide();

    if (id_ficha === null) {
        id_ficha = $("#id_ficha").val();
    }

    $.ajax({
        url: urlx + "/ajaxBuscarSec4_4",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec4_4_mdl").html(data);

            $("#loader_mdl_sec4_4").hide();
            $("#loader_form_mdl_sec4_4").show();
        },
        error: function (jqXHR, textStatus, errorThrown) {

            $("#loader_mdl_sec4_4").show();
            $("#loader_form_mdl_sec4_4").hide();

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}






function guardar_modal_sec4_4() {
    console.log("entro a guardar");
    $("#btn_save_mdl_sec4_4").prop("disabled", true);
    $("#btn_save_mdl_sec4_4").text('');
    $("#btn_save_mdl_sec4_4").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');

    var coar_ficha_s4_p4_4pk = {
        id: parseInt($("#mdl_sec4_4_id").val()),
        id_ficha: parseInt($("#mdl_sec4_4_id_ficha").val())
    };

    console.log("1");
    var coar_ficha_s4_p4_4 = {
        coar_ficha_s4_p4_4pk: coar_ficha_s4_p4_4pk,
        fch_registro: $("#mdl_sec4_4_fch_registro").val(),
        usu_registro: $("#mdl_sec4_4_usu_registro").val(),
        p4_4_nom_residente: $("#p4_4_nom_residente").val(),
        p4_4_edad: $("#p4_4_edad").val(),
        p4_4_sexo: $("#p4_4_sexo").val(),
        p4_4_nacionalidad: $("#p4_4_nacionalidad").val(),
        p4_4_documento: $("#p4_4_documento").val(),
        p4_4_tipodoc: $("#p4_4_tipodoc").val(),
        p4_4_vigente: $("#p4_4_vigente").val()
    };

    console.log("2");
    $.ajax({
        url: urlx + "/ajaxGuardarMdlSec4_4",
        contentType: "application/json;text/html;charset=UTF-8",
        type: "POST",
        data: JSON.stringify(coar_ficha_s4_p4_4),
        success: function (data, textStatus, jqXHR) {
            console.log("3");
            $("#div_sec4_4").html(data);
            
            updateTotalResidents4_4();
            
            $("#btn_save_mdl_sec4_4").prop("disabled", false);
            $("#btn_save_mdl_sec4_4").text('');
            $("#btn_save_mdl_sec4_4").wrapInner('<span class="fa fa-cloud-upload" aria-hidden="true"></span> Guardar');
            
            console.log("antes de cerrar modal");
            $("#modal_sec4_4").modal("hide");

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

function eliminar_modal_sec4_4(id, id_ficha) {

    $.ajax({
        url: urlx + "/ajaxEliminarModalSec4_4",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec4_4").html(data);
             updateTotalResidents4_4();
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


const updateTotalResidents4_4 = () => {
    const tableBody = document.querySelector("#div_sec4_4 tbody");
    const totalInput = document.getElementById("p4_5");

    if (tableBody && totalInput) {
        // Selecciona solo las filas de datos (excluye encabezados u otros elementos)
        const rows = tableBody.querySelectorAll("tr:not(.header-row)"); // Asegúrate de no contar filas de encabezados
        const rowCount = rows.length;

        // Si no hay filas, el total es 0
        totalInput.value = rowCount > 0 ? rowCount : 0; 
    } else if (totalInput) {
        // Si no existe el tbody (tabla vacía), establece el total en 0
        totalInput.value = 0;
    }
};



function valida_p4_6_o5() {
    const radio5 = document.getElementById("p4_6_o5");
    const textarea = document.getElementById("p4_6_otro");

    if (radio5.checked) {
        textarea.disabled = false; 
        textarea.required = true;
    } else {
        textarea.disabled = true; 
        textarea.value = ""; 
        textarea.required = false; 
    }
}


function valida_p4_9_oculta() {
    // Obtén los radios de "SI" y "NO"
    const siRadio = document.getElementById("p4_9_si");
    const noRadio = document.getElementById("p4_9_no");

    // Selecciona todos los checkboxes dentro de .row410
    const checkboxes = document.querySelectorAll(".row410 .form-check-input");

    // Si "SI" está seleccionado
    if (siRadio.checked) {
        checkboxes.forEach((checkbox) => {
            checkbox.disabled = false; // Habilita el checkbox
            checkbox.required = true; // Añade "required"
        });

        // Escucha cambios en los checkboxes
        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener("change", () => {
                const anyChecked = Array.from(checkboxes).some(
                    (cb) => cb.checked
                );
                // Si al menos uno está seleccionado, elimina "required"
                checkboxes.forEach((cb) => {
                    cb.required = !anyChecked;
                });
            });
        });
    }

    // Si "NO" está seleccionado
    if (noRadio.checked) {
        checkboxes.forEach((checkbox) => {
            checkbox.disabled = true; // Deshabilita el checkbox
            checkbox.required = false; // Elimina "required"
            checkbox.checked = false; // Desmarca el checkbox
        });
    }
}




function valida_p4_10_o8() {
    const radio8 = document.getElementById("p4_10_o8");
    const textarea = document.getElementById("p4_10_otro");

    if (radio8.checked) {
        textarea.disabled = false; 
        textarea.required = true;
    } else {
        textarea.disabled = true; 
        textarea.value = ""; 
        textarea.required = false; 
    }
}


const updateTotal_p5_5 = () => {
    const fields = [
      "p5_5_bolivia",
      "p5_5_chile",
      "p5_5_colo",
      "p5_5_ecu",
      "p5_5_vene",
      "p5_5_otros"
    ];

    const totalInput = document.getElementById("p5_5_total");

    // Sumar los valores 
    const total = fields.reduce((sum, fieldId) => {
      const value = document.getElementById(fieldId).value;
      return sum + (isNaN(value) || value === "" ? 0 : parseInt(value));
    }, 0);

   
    totalInput.value = total;
  };
  
  
  

function calcularTotal_6_1() {
    const p6_1_voluntariado = parseInt(document.getElementById('p6_1_voluntariado').value) || 0;
    const p6_1_728 = parseInt(document.getElementById('p6_1_728').value) || 0;
    const p6_1_cas = parseInt(document.getElementById('p6_1_cas').value) || 0;
    const p6_1_276 = parseInt(document.getElementById('p6_1_276').value) || 0;
    const p6_1_locacion = parseInt(document.getElementById('p6_1_locacion').value) || 0;  
    const p6_1_terceros = parseInt(document.getElementById('p6_1_terceros').value) || 0;

    const total = p6_1_voluntariado + p6_1_728 + p6_1_cas + p6_1_276 + p6_1_locacion + p6_1_terceros;

    document.getElementById('p6_1_total').value = total;
  }
  
 ////////////////////////////////////////////////////////////
 
function abrir_modal_sec6_1(id, id_ficha) {

    $("#loader_mdl_sec6_1").show();
    $("#loader_form_mdl_sec6_1").hide();

    if (id_ficha === null) {
        id_ficha = $("#id_ficha").val();
    }

    $.ajax({
        url: urlx + "/ajaxBuscarSec6_1",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec6_1_mdl").html(data);

            $("#loader_mdl_sec6_1").hide();
            $("#loader_form_mdl_sec6_1").show();
        },
        error: function (jqXHR, textStatus, errorThrown) {

            $("#loader_mdl_sec6_1").show();
            $("#loader_form_mdl_sec6_1").hide();

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}






function guardar_modal_sec6_1() {
    console.log("entro a guardar");
    $("#btn_save_mdl_sec6_1").prop("disabled", true);
    $("#btn_save_mdl_sec6_1").text('');
    $("#btn_save_mdl_sec6_1").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');

    var coar_ficha_s6_p6_1pk = {
        id: parseInt($("#mdl_sec6_1_id").val()),
        id_ficha: parseInt($("#mdl_sec6_1_id_ficha").val())
    };

    console.log("1");
    var coar_ficha_s6_p6_1 = {
        coar_ficha_s6_p6_1pk: coar_ficha_s6_p6_1pk,
        fch_registro: $("#mdl_sec6_1_fch_registro").val(),
        usu_registro: $("#mdl_sec6_1_usu_registro").val(),
        p6_1_lista_profesiones: $("#p6_1_lista_profesiones").val(),
        p6_1_voluntariado: $("#p6_1_voluntariado").val(),
        p6_1_728: $("#p6_1_728").val(),
        p6_1_cas: $("#p6_1_cas").val(),
        p6_1_276: $("#p6_1_276").val(),
        p6_1_locacion: $("#p6_1_locacion").val(),
        p6_1_terceros: $("#p6_1_terceros").val(),
        p6_1_total: $("#p6_1_total").val()
    };

    console.log("2");
    $.ajax({
        url: urlx + "/ajaxGuardarMdlSec6_1",
        contentType: "application/json;text/html;charset=UTF-8",
        type: "POST",
        data: JSON.stringify(coar_ficha_s6_p6_1),
        success: function (data, textStatus, jqXHR) {
            console.log("3");
            $("#div_sec6_1").html(data);
            
            
            $("#btn_save_mdl_sec6_1").prop("disabled", false);
            $("#btn_save_mdl_sec6_1").text('');
            $("#btn_save_mdl_sec6_1").wrapInner('<span class="fa fa-cloud-upload" aria-hidden="true"></span> Guardar');
            
            console.log("antes de cerrar modal");
            $("#modal_sec6_1").modal("hide");

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

function eliminar_modal_sec6_1(id, id_ficha) {

    $.ajax({
        url: urlx + "/ajaxEliminarModalSec6_1",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec6_1").html(data);
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

  
function valida_p6_2_disabled() {
    // Obtiene los radio buttons por su ID
    const radioSi = document.getElementById("p6_2_si");
    const radioNo = document.getElementById("p6_2_no");

    // Verifica cuál radio está seleccionado
    let respuesta = null;
    if (radioSi && radioSi.checked) {
        respuesta = "S";
    } else if (radioNo && radioNo.checked) {
        respuesta = "N";
    }

    // Selecciona todos los inputs dentro de la clase "row322"
    const inputs = document.querySelectorAll('.row63 input');

    // Habilita o deshabilita los inputs según la respuesta seleccionada
    if (respuesta === "S") {
        inputs.forEach(input => {
            input.disabled = false; // Habilitar inputs
            input.required = true;
        });
    } else if (respuesta === "N") {
        inputs.forEach(input => {
            input.disabled = true; // Deshabilitar inputs
            input.value = ""; // Limpia los valores (opcional)
            input.required = false;
        });
    }
}

function validaP6_4_1_DisabledCantidad() {
    const radios = [
        { radioId: "p6_4_1_a", textareaId: "p6_4_1_cantidad_a" },
        { radioId: "p6_4_1_b", textareaId: "p6_4_1_cantidad_b" },
        { radioId: "p6_4_1_c", textareaId: "p6_4_1_cantidad_c" },
        { radioId: "p6_4_1_d", textareaId: "p6_4_1_cantidad_d" },
    ];

    radios.forEach(({ radioId, textareaId }) => {
        const radio = document.getElementById(radioId);
        const textarea = document.getElementById(textareaId);

        if (radio.checked) {
            textarea.disabled = false;
            textarea.required = true;
        } else {
            textarea.disabled = true;
            textarea.value = ""; 
            textarea.required = false;
        }
    });
}

document.getElementById("p6_4_1_a").addEventListener("change", validaP6_4_1_DisabledCantidad);
document.getElementById("p6_4_1_b").addEventListener("change", validaP6_4_1_DisabledCantidad);
document.getElementById("p6_4_1_c").addEventListener("change", validaP6_4_1_DisabledCantidad);
document.getElementById("p6_4_1_d").addEventListener("change", validaP6_4_1_DisabledCantidad);






  const updateTotal_p6_3 = () => {
    const fields = [
      "p6_3_bolivia",
      "p6_3_chile",
      "p6_3_colo",
      "p6_3_ecu",
      "p6_3_vene",
      "p6_3_otros"
    ];

    const totalInput = document.getElementById("p6_3_total");

    // Sumar los valores 
    const total = fields.reduce((sum, fieldId) => {
      const value = document.getElementById(fieldId).value;
      return sum + (isNaN(value) || value === "" ? 0 : parseInt(value));
    }, 0);

   
    totalInput.value = total;
  };
  
  
  
  
document.getElementById("p6_4_2_cantidad").addEventListener("input", function () {
    const cantidad = parseInt(this.value) || 0; 
    const inputs = document.querySelectorAll(".row643 input"); 
    const inputrow645 = document.querySelectorAll(".row645 input");
    
    inputs.forEach(input => {
        if (cantidad > 0) {
            input.disabled = false; 
            input.required = true;  
        } else {
            input.disabled = true;  
            input.required = false; 
            input.value = "";       
        }
    });
    
     inputrow645.forEach(input => {
        if (cantidad > 0) {
            input.disabled = false; 
            input.required = true;  
        } else {
            input.disabled = true;  
            input.required = false; 
            input.value = "";       
        }
    });
});

//const updateTotal_p6_4_3 = () => {
//    const fields = [
//        "p6_4_3_bolivia",
//        "p6_4_3_chile",
//        "p6_4_3_colo",
//        "p6_4_3_ecu",
//        "p6_4_3_vene",
//        "p6_4_3_otros"
//    ];
//
//    const totalInput = document.getElementById("p6_4_3_total");
//    const p6_4_2_cantidad = parseInt(document.getElementById("p6_4_2_cantidad").value) || 0;
//
//    // Calcular el total de los campos
//    const total = fields.reduce((sum, fieldId) => {
//        const value = document.getElementById(fieldId).value;
//        return sum + (isNaN(value) || value === "" ? 0 : parseInt(value));
//    }, 0);
//
//    // Validar que el total no exceda p6_4_2_cantidad
//    if (total > p6_4_2_cantidad) {
//        // Usar SweetAlert en lugar de alert
//        Swal.fire({
//            icon: 'error',
//            title: 'Error',
//            text: 'El total no puede ser mayor que la cantidad especificada en 6.4.2.',
//            confirmButtonText: 'Aceptar'
//        });
//        
//        // Ajustar el total al valor máximo permitido
//        totalInput.value = p6_4_2_cantidad;
//    } else {
//        totalInput.value = total; 
//    }
//};
const updateTotal_p6_4_3 = () => { 
    const fields = [
        "p6_4_3_bolivia",
        "p6_4_3_chile",
        "p6_4_3_colo",
        "p6_4_3_ecu",
        "p6_4_3_vene",
        "p6_4_3_otros"
    ];

    const totalInput = document.getElementById("p6_4_3_total");
    const p6_4_2_cantidad = parseInt(document.getElementById("p6_4_2_cantidad").value) || 0;

    const total = fields.reduce((sum, fieldId) => {
        const value = document.getElementById(fieldId).value;
        return sum + (isNaN(value) || value === "" ? 0 : parseInt(value));
    }, 0);

    if (total > p6_4_2_cantidad) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El total no puede ser mayor que la cantidad especificada en 6.4.2.',
            confirmButtonText: 'Aceptar'
        });

        totalInput.value = p6_4_2_cantidad;

        fields.forEach(fieldId => {
            const inputField = document.getElementById(fieldId);
            if (inputField.value !== "") {
                inputField.value = "";
                inputField.required = true; 
            }
        });
    } else {
        totalInput.value = total; // Actualizar el total normalmente
    }
};




function valida_p6_4_5(){
  // var siRadio = document.getElementById('p2_1_si');
    var p6_4_5_1 = document.getElementById('p6_4_5_1');


if (p6_4_5_1.checked){
    
    var radios = document.querySelectorAll('.check_p6_4_5a');
        radios.forEach(function (radio) {
              radio.disabled = false;
              radio.required = true;
        });
        
   }else{
       
        var radios = document.querySelectorAll('.check_p6_4_5a');
        radios.forEach(function (radio) {
            radio.disabled = true;
            radio.checked= false;
            radio.required = false;
        });
   }     
        
}



function valida_p6_4_7() {
    const radioSi = document.getElementById("p6_4_7_si");
    const radioNo = document.getElementById("p6_4_7_no");
    const p6_4_8_otro = document.getElementById("p6_4_8_otro");
    
    let respuesta = null;
    if (radioSi && radioSi.checked) {
        respuesta = "S";
    } else if (radioNo && radioNo.checked) {
        respuesta = "N";
    }

    const radios = document.querySelectorAll('.row648 input[type="radio"]');
    const radios6413 = document.querySelectorAll('.row6413 input[type="radio"]');
    const radios6415 = document.querySelectorAll('.row6415 input[type="radio"]');

    
    if (respuesta === "S") {
        radios.forEach(radio => {
            radio.disabled = false; 
        });
        
        radios6413.forEach(radio => {
            radio.disabled = false; 
            radio.required = true; 
        });
        
        radios6415.forEach(radio => {
            radio.disabled = false;
            radio.required = true; 
        });
     
    } else if (respuesta === "N") {
         p6_4_8_otro.disabled=true;
         p6_4_8_otro.value = "";
         p6_4_8_otro.required=false;
         
        radios.forEach(radio => {
            radio.disabled = true; 
            radio.checked = false; 
            radio.required = false; 
        });
        
        radios6413.forEach(radio => {
            radio.disabled = true; 
            radio.checked = false; 
            radio.required = false; 
        });
        
        radios6415.forEach(radio => {
            radio.disabled = true; 
            radio.checked = false; 
            radio.required = false; 
        });
        
    }
    
    
    
}     

function valida_p6_4_7x() {
    const radioSi = document.getElementById("p6_4_7_si");
    const radioNo = document.getElementById("p6_4_7_no");
    const p6_4_9_otro = document.getElementById("p6_4_9_otro");
    let respuesta = null;
    if (radioSi && radioSi.checked) {
        respuesta = "S";
    } else if (radioNo && radioNo.checked) {
        respuesta = "N";
    }

    const radios = document.querySelectorAll('.row649 input[type="checkbox"]');

    
    if (respuesta === "N") {
        radios.forEach(radio => {
            radio.disabled = false; 
        });
     
    } else if (respuesta === "S") {
         p6_4_9_otro.disabled=true;
         p6_4_9_otro.value = "";
         p6_4_9_otro.required=false;
         
        radios.forEach(radio => {
            radio.disabled = true; 
            radio.checked = false; 
            radio.required = false; 
        });
        
    }
    
    
    
}     


function valida_p6_4_8_otro(){
   var otroRadio = document.getElementById('p6_4_8_e');
   var p6_4_8_otro= document.getElementById('p6_4_8_otro');

    if (otroRadio.checked){
    
    p6_4_8_otro.disabled= false;
    p6_4_8_otro.required= true;    
   }else{
    p6_4_8_otro.required= false;     
    p6_4_8_otro.disabled= true;
    p6_4_8_otro.value= "";
   }     
        
}

function valida645otro(){
   var otroRadio = document.getElementById('p6_4_5_sis_respuesta_si');
   const p6_4_5_amerita = document.getElementById('p6_4_5_amerita');

    if (otroRadio.checked){

    p6_4_5_amerita.required= false;     
    p6_4_5_amerita.disabled= true;
    p6_4_5_amerita.value= "";

   }else{

    p6_4_5_amerita.disabled=false;
    p6_4_5_amerita.required= true; 
   }     
        
}

function valida_p6_4_20_otro(){
   var otroRadio = document.getElementById('p6_4_20_f');
   var p6_4_20_otro= document.getElementById('p6_4_20_otro');

    if (otroRadio.checked){
    
    p6_4_20_otro.disabled= false;
    p6_4_20_otro.required= true;    
   }else{
    p6_4_20_otro.required= false;     
    p6_4_20_otro.disabled= true;
    p6_4_20_otro.value= "";
    
    
   }     
        
}


function valida_p6_4_10() {
    const radioSi = document.getElementById("p6_4_10_si");
    const radioNo = document.getElementById("p6_4_10_no");
    const p6_4_11_otro = document.getElementById("p6_4_11_otro");

    let respuesta = null;
    if (radioSi && radioSi.checked) {
        respuesta = "S";
    } else if (radioNo && radioNo.checked) {
        respuesta = "N";
    }

    const radios = document.querySelectorAll('.row6411 input[type="radio"]');
    const inputs = document.querySelectorAll('.row6411 input:not([type="radio"])');

    if (respuesta === "S") {
        radios.forEach(radio => {
            radio.disabled = false; // Habilitar radios
            radio.required = true; // Opcional: agregar required
        });
     
    } else if (respuesta === "N") {
        
         p6_4_11_otro.disabled=true;
         p6_4_11_otro.value = "";
         p6_4_11_otro.required=false;
         
         
        radios.forEach(radio => {
            radio.disabled = true; // Deshabilitar radios
            radio.checked = false; // Limpiar selección (opcional)
            radio.required = false; // Opcional: eliminar required
        });
        
    }
}

function valida_p6_4_10n() {
    const radioSi = document.getElementById("p6_4_10_si");
    const radioNo = document.getElementById("p6_4_10_no");
    const p6_4_12_otro = document.getElementById("p6_4_12_otro");
    
    let respuesta = null;
    if (radioSi && radioSi.checked) {
        respuesta = "S";
    } else if (radioNo && radioNo.checked) {
        respuesta = "N";
    }

    const radios = document.querySelectorAll('.row6412 input[type="checkbox"]');

    if (respuesta === "N") {
        radios.forEach(checkbox => {
            checkbox.disabled = false; // Habilitar radios
        });
     
    } else if (respuesta === "S") {
         p6_4_12_otro.disabled=true;
         p6_4_12_otro.value = "";
         p6_4_12_otro.required=false;
         
        radios.forEach(checkbox => {
            checkbox.disabled = true; // Deshabilitar radios
            checkbox.checked = false; // Limpiar selección (opcional)
            checkbox.required = false; // Opcional: eliminar required
            
        });
        
    }
}



function valida_p6_4_11_otro(){
    var otroRadio = document.getElementById('p6_4_11_e');
    var p6_4_11_otro= document.getElementById('p6_4_11_otro');
 
     if (otroRadio.checked){
     
     p6_4_11_otro.disabled= false;
     p6_4_11_otro.required= true;    
    }else{
     p6_4_11_otro.required= false;     
     p6_4_11_otro.disabled= true;
     p6_4_11_otro.value= "";
    }     
         
 }
 
 
 
function valida_p6_4_9_otro(){
    var otroRadio = document.getElementById('p6_4_9_d');
    var p6_4_9_otro= document.getElementById('p6_4_9_otro');
 
     if (otroRadio.checked){
     
     p6_4_9_otro.disabled= false;
     p6_4_9_otro.required= true;    
    }else{
     p6_4_9_otro.required= false;     
     p6_4_9_otro.disabled= true;
     p6_4_9_otro.value= "";
    }     
         
 }
 
 function valida_p6_4_12_otro(){
    var otroRadio = document.getElementById('p6_4_12_d');
    var p6_4_12_otro= document.getElementById('p6_4_12_otro');
 
     if (otroRadio.checked){
     
     p6_4_12_otro.disabled= false;
     p6_4_12_otro.required= true;    
    }else{
     p6_4_12_otro.required= false;     
     p6_4_12_otro.disabled= true;
     p6_4_12_otro.value= "";
    }     
         
 }
 
 
 
function valida_p6_4_13() {
    const radioSi = document.getElementById("p6_4_13_si");
    const radioNo = document.getElementById("p6_4_13_no");
    const p6_4_14_otro = document.getElementById("p6_4_14_otro");

    let respuesta = null;
    if (radioSi && radioSi.checked) {
        respuesta = "S";
    } else if (radioNo && radioNo.checked) {
        respuesta = "N";
    }

    const checkbox = document.querySelectorAll('.row6414 input[type="checkbox"]');

    if (respuesta === "N") {
        checkbox.forEach(radio => {
            radio.disabled = false; 
        });
     
    } else if (respuesta === "S") {
        
        p6_4_14_otro.disabled=true;
        p6_4_14_otro.value = "";
        p6_4_14_otro.required=false;
         
         
        checkbox.forEach(radio => {
            radio.disabled = true; 
            radio.checked = false; 
            radio.required = false; 
        });
        
    }
} 

 function valida_p6_4_14_c(){
    var otroRadio = document.getElementById('p6_4_14_c');
    var p6_4_14_otro= document.getElementById('p6_4_14_otro');
 
     if (otroRadio.checked){
     
     p6_4_14_otro.disabled= false;
     p6_4_14_otro.required= true;    
    }else{
     p6_4_14_otro.required= false;     
     p6_4_14_otro.disabled= true;
     p6_4_14_otro.value= "";
    }     
         
 }
 

function validateTime(input) {
    const time = input.value;
    const [hours, minutes] = time.split(':').map(Number);

    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        alert('Por favor ingrese un tiempo válido en formato HH:MM.');
        input.value = ''; // Limpia el campo si no es válido
    }
}




 function valida_7_1(){
    var radio = document.getElementById('p7_1_si');
    var p7_2_hora= document.getElementById('p7_2_hora');
 
     if (radio.checked){
     
     p7_2_hora.disabled= false;
     p7_2_hora.required= true;    
    }else{
     p7_2_hora.required= false;     
     p7_2_hora.disabled= true;
     p7_2_hora.value= "";
    }     
         
 }
 
 
 
 
 function valida_7_3(){
    var radio = document.getElementById('p7_3_si');
    var p7_4_hora= document.getElementById('p7_4_hora');
 
     if (radio.checked){
     
     p7_4_hora.disabled= false;
     p7_4_hora.required= true;    
    }else{
     p7_4_hora.required= false;     
     p7_4_hora.disabled= true;
     p7_4_hora.value= "";
    }     
         
 }
 
 
  function valida_p7_6_otro(){
    var otroRadio = document.getElementById('p7_6_c');
    var p7_6_otro= document.getElementById('p7_6_otro');
 
     if (otroRadio.checked){
     
     p7_6_otro.disabled= false;
     p7_6_otro.required= true;    
    }else{
     p7_6_otro.required= false;     
     p7_6_otro.disabled= true;
     p7_6_otro.value= "";
    }     
         
 }
 
 function valida_p7_8_otro(){
    var otroRadio = document.getElementById('p7_8_d');
    var p7_8_otro= document.getElementById('p7_8_otro');
 
     if (otroRadio.checked){
     
     p7_8_otro.disabled= false;
     p7_8_otro.required= true;    
    }else{
     p7_8_otro.required= false;     
     p7_8_otro.disabled= true;
     p7_8_otro.value= "";
    }     
         
 }
 
 function valida_p7_9_otro(){
    var otroRadio = document.getElementById('p7_9_d');
    var p7_9_otro= document.getElementById('p7_9_otro');
 
     if (otroRadio.checked){
     
     p7_9_otro.disabled= false;
     p7_9_otro.required= true;    
    }else{
     p7_9_otro.required= false;     
     p7_9_otro.disabled= true;
     p7_9_otro.value= "";
    }     
         
 }
 
 
 
///////////////SUBIR ARCHIVOS//////////////////////////////////////////////////////////
function habilitar_btn_adjuntar_archivo(id) {
    $("#btn_file_" + id).prop("disabled", false);
    $("#btn_file_" + id).text('');
    $("#btn_file_" + id).wrapInner('<i class="fa-solid fa-file-circle-plus" aria-hidden="true"></i> Adjuntar archivo');
}


function adjuntar_archivo(elem) {
    var id_ficha = $("#id_ficha").val();
    console.log("Entró a funcion adjuntar_archivo:" + id_ficha);
    if (id_ficha > 0) {
        var btn_adjuntar_archivo = elem.id;
        $("#" + btn_adjuntar_archivo.substring(9)).trigger('click');

        console.log("btn_adjuntar_archivo:" + btn_adjuntar_archivo);
    } else {
        alert("Por favor, Dar Guardado Parcial previamente antes de Adjuntar documento");
        //return; // Evita que continúe si no hay selección
    }


}


function guardar_archivo(elem) {

    var id_input_file = elem.id;
    var id_ficha = $("#id_ficha").val() || 0;
    var cod_unico = $("#cod_unico").val() || 0;
    console.log("Entró a funcion guardar_archivo : id_ficha" + id_ficha);
     console.log("Entró cod_unico" + cod_unico);
    var id_archivo = $("#" + id_input_file + "_id_archivo").val();
    
    $("#btn_file_" + id_input_file).prop("disabled", true);
    $("#btn_file_" + id_input_file).text('');
    $("#btn_file_" + id_input_file).wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');

    //Inicio validar si tiene archivo adjunto
    var formData = new FormData();
    var size_total = 0;

    if ($("#" + id_input_file).get(0).files.length > 0) {

        for (var i = 0; i < $("#" + id_input_file).get(0).files.length; ++i) {

            var file1 = $("#" + id_input_file).get(0).files[i].name;

            if (file1) {

                var file_size = $("#" + id_input_file).get(0).files[i].size;

                size_total = size_total + file_size;

                if (file_size < 31457280) {
//10485760
//                    if (size_total < 10485760) {

                    var ext = file1.split('.').pop().toLowerCase();

                    if ($.inArray(ext, ['png', 'jpg', 'csv', 'xls', 'xlsx', 'pdf']) === -1) {
                        alert("El archivo " + file1 + " no es valido. Solo los archivos('png','jpg','jpeg','xls', 'xlsx', 'pdf') son permitidos.");
                        habilitar_btn_adjuntar_archivo(id_input_file);
                        return false;
                    }

//                    } else {
//                        alert("El total de archivos seleccionados(" + Math.round((size_total / 1048576) * 100) / 100 + " MB) superan los 10MB permitidos.");
//                        habilitar_btn_adjuntar_archivo(id_input_file);
//                        return false;
//                    }

                } else {
                    alert("El archivo " + file1 + "(" + Math.round((file_size / 1048576) * 100) / 100 + " MB) supera los 30MB permitidos.");
                    habilitar_btn_adjuntar_archivo(id_input_file);
                    return false;
                }

            } else {
                alert("Seleccionar archivos..");
                habilitar_btn_adjuntar_archivo(id_input_file);
                return false;
            }

            formData.append("archivo_adjunto", $("#" + id_input_file)[0].files[i]);
        }

    } else {
        habilitar_btn_adjuntar_archivo(id_input_file);
        return false;
    }

    //Fin validar si tiene archivo adjunto

    formData.append("id_input_file", id_input_file);
    formData.append("id_ficha", id_ficha);
    formData.append("id_archivo", id_archivo);
    formData.append("cod_unico", cod_unico);
    // formData.append("id_pregunta", $("#id_pregunta").val());
    console.log("id_input_file: " + id_input_file);
    console.log("id_ficha: " + id_ficha);
    console.log("id_archivo: " + id_archivo);
     console.log("cod_unico: " + cod_unico);
    $.ajax({
        url: urlx + "/ajaxGuardarArchivoAdjunto",
        data: formData,
        type: "POST",
        enctype: 'multipart/form-data',
        contentType: false,
        cache: false,
        processData: false,
        success: function (data, textStatus, jqXHR) {
            console.log("xxx: " + "#table_ficha_" + id_input_file);
            $("#table_ficha_" + id_input_file).html(data);
            //           $("#table_ficha_s2_archivo").html(data);

            $("#btn_file_" + id_input_file).prop("disabled", false);
            $("#btn_file_" + id_input_file).text('');
            $("#btn_file_" + id_input_file).wrapInner('<i class="fa-solid fa-file-circle-plus" aria-hidden="true"></i> Adjuntar archivo');
            $("#"+id_input_file).val("");
            console.log("id_input_file: " + id_input_file);

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

function eliminar_archivo_sec7_7 (id_archivo, id_ficha,cod_unico) {

    $.ajax({
        url: urlx + "/ajaxEliminarProyectoSec7_7",
        type: 'POST',
        data: {
            id_archivo: id_archivo,
            id_ficha: id_ficha,
            cod_unico: cod_unico
        },
        success: function (data, textStatus, jqXHR) {

            $("#table_ficha_s7_7_arch").html(data);
//            $("#s7_p01_1").val($("#sizeFichaS7Proyecto").val());
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




function eliminar_archivo_sec7_10(id_archivo, id_ficha,cod_unico) {

    $.ajax({
        url: urlx + "/ajaxEliminarProyectoSec7_10",
        type: 'POST',
        data: {
            id_archivo: id_archivo,
            id_ficha: id_ficha,
            cod_unico: cod_unico
        },
        success: function (data, textStatus, jqXHR) {

            $("#table_ficha_s7_10_arch").html(data);
//            $("#s7_p01_1").val($("#sizeFichaS7Proyecto").val());
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
 
   
function valida_p7_7_deshabilita() {
    // Obtiene los radio buttons por su ID
    const radioSi = document.getElementById("p7_7_si");
    const radioNo = document.getElementById("p7_7_no");
     const radios78 = document.querySelectorAll('.row78 input[type="radio"]');
     const radios79 = document.querySelectorAll('.row79 input[type="radio"]');
     var p7_8_otro  = document.getElementById("p7_8_otro");
     var p7_9_otro = document.getElementById("p7_9_otro");

    let respuesta = null;
    if (radioSi && radioSi.checked) {
        respuesta = "S";
    } else if (radioNo && radioNo.checked) {
        respuesta = "N";
    }

    const btn_file_s7_7_arch = document.getElementById('btn_file_s7_7_arch');

    if (respuesta === "S") {
        btn_file_s7_7_arch.disabled = false;
        
        radios78.forEach(radio => {
            radio.disabled = false; 
            radio.required = true; 
        });
        radios79.forEach(radio => {
            radio.disabled = false; 
            radio.required = true; 
        });

    } else if (respuesta === "N") {
        btn_file_s7_7_arch.disabled = true;
        p7_8_otro.disabled=true;
        p7_8_otro.value="";
        
        p7_9_otro.disabled=true;
        p7_9_otro.value="";
        
          radios78.forEach(radio => {
            radio.disabled = true; 
            radio.checked = false; 
            radio.required = false; 
        });
        
          radios79.forEach(radio => {
            radio.disabled = true; 
            radio.checked = false; 
            radio.required = false; 
        });

    }
}




function valida_p7_10_deshabilita() {
    // Obtiene los radio buttons por su ID
    const radioSi = document.getElementById("p7_10_si");
    const radioNo = document.getElementById("p7_10_no");

    let respuesta = null;
    if (radioSi && radioSi.checked) {
        respuesta = "S";
    } else if (radioNo && radioNo.checked) {
        respuesta = "N";
    }

    const btn_file_s7_10_arch = document.getElementById('btn_file_s7_10_arch');

    if (respuesta === "S") {
        btn_file_s7_10_arch.disabled = false;
    } else if (respuesta === "N") {
        btn_file_s7_10_arch.disabled = true;

    }
}


function valida_p710_registros() {
    const tableBody = document.querySelector("#div_s7_10_arch tbody");
    const validationMessage710 = document.getElementById("validationMessage710");
    var siRadio = document.getElementById('p7_10_si');


    if (tableBody && tableBody.rows.length > 0) {
        validationMessage710.style.display = "block";
        document.querySelector("#p7_10_no").checked = false;
        siRadio.checked= true;
    } else {
        validationMessage710.style.display = "none";
    }
}


function valida_p77_registros() {
    const tableBody = document.querySelector("#div_s7_7_arch tbody");
    const validationMessage77 = document.getElementById("validationMessage77");
    var siRadio = document.getElementById('p7_7_si');


    if (tableBody && tableBody.rows.length > 0) {
        validationMessage77.style.display = "block";
        document.querySelector("#p7_7_no").checked = false;
        siRadio.checked= true;
    } else {
        validationMessage77.style.display = "none";
    }
}



//////PARA HABILITAR RADIOS Y OTROS/////////

function valida_p8_1_deshabilita_radios() {
    const radioSi = document.getElementById("p8_1_si");
    const radioNo = document.getElementById("p8_1_no");
    const otro = document.getElementById("p8_2_otro");
    const btn_file_s8_1_arch= document.getElementById("btn_file_s8_1_arch");
    const btn_file_s8_2_arch= document.getElementById("btn_file_s8_2_arch");

    var p8_4 = document.getElementById("p8_4");
    var p8_2_otro = document.getElementById("p8_2_otro");
    var p8_5_otro = document.getElementById("p8_5_otro");
    var p8_7_otro = document.getElementById("p8_7_otro");
    var p8_1_x = document.getElementById("p8_1_x"); 
    const checkboxes83 = document.querySelectorAll('.row83_extend input[type="checkbox"]');
    const p8_3_otro  = document.getElementById("p8_3_otro");
    const checkboxes87 = document.querySelectorAll('.row87 input[type="checkbox"]');

 
    let respuesta = null;
    if (radioSi && radioSi.checked) {
        respuesta = "S";
    } else if (radioNo && radioNo.checked) {
        respuesta = "N";
    }

    const radios = document.querySelectorAll('.row82 input[type="checkbox"]');
    const radios83 = document.querySelectorAll('.row83 input[type="radio"]');
    const radios85 = document.querySelectorAll('.row85 input[type="checkbox"]');
    const radios86 = document.querySelectorAll('.row86 input[type="radio"]');
    const radios87 = document.querySelectorAll('.row87 input[type="radio"]');
        
    if (respuesta === "S") {
        p8_1_x.disabled = true;
        p8_1_x.required = false;
        p8_1_x.value="";
        
        p8_4.disabled=false;
        p8_4.required= true;
        
        radios.forEach(checkbox => {
            checkbox.disabled = false; 
        });
        
        btn_file_s8_2_arch.disabled=false;
        btn_file_s8_1_arch.disabled=false;
        
        radios83.forEach(radio => {
            radio.disabled = false; 
            radio.required = true; 
        });
        
        radios85.forEach(checkbox => {
            checkbox.disabled = false; 
        });
        
        radios86.forEach(radio => {
            radio.disabled = false; 
            radio.required = true; 
        });
     
    } else if (respuesta === "N") {
        p8_3_otro.disabled= true;
        p8_3_otro.value="";
         checkboxes83.forEach(checkbox => {
                checkbox.required = false;
                checkbox.disabled=true;
                checkbox.checked=false;

            });
        
         checkboxes87.forEach(checkbox => {
                checkbox.required = false;
                checkbox.disabled=true;
                checkbox.checked=false;

            });
        
        p8_1_x.disabled = false;
        p8_1_x.required = true;
        
        p8_4.disabled=true;
        p8_4.required= false;
        p8_4.value="";
        
        p8_2_otro.disabled=true;
        p8_2_otro.value="";
        
         p8_5_otro.disabled=true;
        p8_5_otro.value="";
        
         p8_7_otro.disabled=true;
        p8_7_otro.value="";
        
        btn_file_s8_2_arch.disabled=true;
        btn_file_s8_1_arch.disabled=true;
        
         otro.disabled=true;
         otro.value = "";
         otro.required=false;
         
         
        radios.forEach(checkbox => {
            checkbox.disabled = true; 
            checkbox.checked = false; 
        });
        
        radios83.forEach(radio => {
            radio.disabled = true; 
            radio.checked = false; 
            radio.required = false; 
        });
        
        radios85.forEach(checkbox => {
            checkbox.disabled = true; 
            checkbox.checked = false; 
            checkbox.required = false; 
        });
        
        radios86.forEach(radio => {
            radio.disabled = true; 
            radio.checked = false; 
            radio.required = false; 
        });
        
         radios87.forEach(radio => {
            radio.disabled = true; 
            radio.checked = false; 
            radio.required = false; 
        });
        
    }
}

 function valida_p8_2_otro(){
    var otroRadio = document.getElementById('p8_2_g');
    var otro= document.getElementById('p8_2_otro');
 
     if (otroRadio.checked){
     
     otro.disabled= false;
     otro.required= true;    
    }else{
     otro.required= false;     
     otro.disabled= true;
     otro.value= "";
    }     
         
 }
 
 ////////////////////////////////////////
 
  function valida_p8_12_otro(){
    var otroRadio = document.getElementById('p8_12_d');
    var otro= document.getElementById('p8_12_otro');
 
     if (otroRadio.checked){
     
     otro.disabled= false;
     otro.required= true;    
    }else{
     otro.required= false;     
     otro.disabled= true;
     otro.value= "";
    }     
         
 }
 
 function valida_p8_5_otro(){
    var otroRadio = document.getElementById('p8_5_e');
    var otro= document.getElementById('p8_5_otro');
 
     if (otroRadio.checked){
     
     otro.disabled= false;
     otro.required= true;    
    }else{
     otro.required= false;     
     otro.disabled= true;
     otro.value= "";
    }     
         
 }
 
 
 
 function valida_p8_6_deshabilita_radios() {
    const radioSi = document.getElementById("p8_6_si");
    const radioNo = document.getElementById("p8_6_no");
    const otro = document.getElementById("p8_7_otro");

    let respuesta = null;
    if (radioSi && radioSi.checked) {
        respuesta = "S";
    } else if (radioNo && radioNo.checked) {
        respuesta = "N";
    }

    const checkboxes = document.querySelectorAll('.row87 input[type="checkbox"]');

    if (respuesta === "S") {
   const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

        checkboxes.forEach(checkbox => {
            checkbox.disabled = false; 
            checkbox.required = true; 
        });
          if (isChecked) {
            checkboxes.forEach(checkbox => {
                checkbox.required = false;

            });
        } else {
            checkboxes.forEach(checkbox => {
                checkbox.required = true;
            });
        }
    } else if (respuesta === "N") {
        
         otro.disabled=true;
         otro.value = "";
         otro.required=false;
         
         
        checkboxes.forEach(checkbox => {
            checkbox.disabled = false; 
        });
        
    }
}
document.querySelectorAll('.row87 input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', valida_p8_6_deshabilita_radios);
});




 function valida_p8_7_otro(){
    var otroRadio = document.getElementById('p8_7_h');
    var otro= document.getElementById('p8_7_otro');
 
     if (otroRadio.checked){
     console.log("entro otro");
     otro.disabled= false;
     otro.required= true;    
    }else{
         console.log("sino otro");
     otro.required= false;     
     otro.disabled= true;
     otro.value= "";
    }     
         
 }
 
 

function valida_p8_8_deshabilita_radios() {
    const radioSi = document.getElementById("p8_8_si");
    const radioNo = document.getElementById("p8_8_no");
    const otro = document.getElementById("p8_9_otro");

    let respuesta = null;
    if (radioSi && radioSi.checked) {
        respuesta = "S";
    } else if (radioNo && radioNo.checked) {
        respuesta = "N";
    }

    const checkboxes = document.querySelectorAll('.row88 input[type="checkbox"]');
    const radios810 = document.querySelectorAll('.row810 input[type="radio"]');
    const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
    if (respuesta === "S") {
        checkboxes.forEach(checkbox => {
            checkbox.disabled = false; 
            checkbox.required = true;
        });
        
        if (isChecked) {
            checkboxes.forEach(checkbox => {
                checkbox.required = false;

            });
        } else {
            checkboxes.forEach(checkbox => {
                checkbox.required = true;
            });
        }
        
        radios810.forEach(radio => {
            radio.disabled = false; 
            radio.required = true; 
        });
     
     
    } else if (respuesta === "N") {
        
         otro.disabled=true;
         otro.value = "";
         otro.required=false;
         
         
        checkboxes.forEach(checkbox => {
            checkbox.disabled = true; 
            checkbox.checked = false; 
            checkbox.required = false; 
        });
        
        radios810.forEach(radio => {
            radio.disabled = true; 
            radio.checked = false; 
            radio.required = false; 
        });
    }
}
 
 document.querySelectorAll('.row88 input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', valida_p8_8_deshabilita_radios);
});


 function valida_p8_9_otro(){
    var otroRadio = document.getElementById('p8_9_d');
    var otro= document.getElementById('p8_9_otro');
 
     if (otroRadio.checked){
     
     otro.disabled= false;
     otro.required= true;    
    }else{
     otro.required= false;     
     otro.disabled= true;
     otro.value= "";
    }     
         
 }
 
 
function eliminar_archivo_sec8_11 (id_archivo, id_ficha,cod_unico) {

    $.ajax({
        url: urlx + "/ajaxEliminarProyectoSec8_11",
        type: 'POST',
        data: {
            id_archivo: id_archivo,
            id_ficha: id_ficha,
            cod_unico: cod_unico
        },
        success: function (data, textStatus, jqXHR) {

            $("#table_ficha_s8_11_arch").html(data);
//            $("#s7_p01_1").val($("#sizeFichaS7Proyecto").val());
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



function valida_p8_11_deshabilita() {
    // Obtiene los radio buttons por su ID
    const radioSi = document.getElementById("p8_11_si");
    const radioNo = document.getElementById("p8_11_no");

    let respuesta = null;
    if (radioSi && radioSi.checked) {
        respuesta = "S";
    } else if (radioNo && radioNo.checked) {
        respuesta = "N";
    }

    const btn = document.getElementById('btn_file_s8_11_arch');

    if (respuesta === "S") {
        btn.disabled = false;
    } else if (respuesta === "N") {
        btn.disabled = true;

    }
}


function valida_p811_registros() {
    const tableBody = document.querySelector("#div_s8_11_arch tbody");
    const validationMessage = document.getElementById("validationMessage811");
    var siRadio = document.getElementById('p7_10_si');


    if (tableBody && tableBody.rows.length > 0) {
        validationMessage.style.display = "block";
        document.querySelector("#p8_11_no").checked = false;
        siRadio.checked= true;
    } else {
        validationMessage.style.display = "none";
    }
}

function valida_p8_11_deshabilita_12() {
    const radioSi = document.getElementById("p8_11_si");
    const radioNo = document.getElementById("p8_11_no");
    const otro = document.getElementById("p8_12_otro");

    let respuesta = null;
    if (radioSi && radioSi.checked) {
        respuesta = "S";
    } else if (radioNo && radioNo.checked) {
        respuesta = "N";
    }

    const radios = document.querySelectorAll('.row812 input[type="radio"]');

    if (respuesta === "S") {
        radios.forEach(radio => {
            radio.disabled = false; 
            radio.required = true; 
        });
     
    } else if (respuesta === "N") {
        
         otro.disabled=true;
         otro.value = "";
         otro.required=false;
         
         
        radios.forEach(radio => {
            radio.disabled = true; 
            radio.checked = false; 
            radio.required = false; 
        });
        
    }
}


 
 function eliminar_archivo_sec8_13 (id_archivo, id_ficha,cod_unico) {

    $.ajax({
        url: urlx + "/ajaxEliminarProyectoSec8_13",
        type: 'POST',
        data: {
            id_archivo: id_archivo,
            id_ficha: id_ficha,
            cod_unico: cod_unico
        },
        success: function (data, textStatus, jqXHR) {

            $("#table_ficha_s8_13_arch").html(data);
//            $("#s7_p01_1").val($("#sizeFichaS7Proyecto").val());
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


function valida_p8_13_deshabilita() {
    // Obtiene los radio buttons por su ID
    const radioSi = document.getElementById("p8_13_si");
    const radioNo = document.getElementById("p8_13_no");

    let respuesta = null;
    if (radioSi && radioSi.checked) {
        respuesta = "S";
    } else if (radioNo && radioNo.checked) {
        respuesta = "N";
    }

    const btn = document.getElementById('btn_file_s8_13_arch');

    if (respuesta === "S") {
        btn.disabled = false;
    } else if (respuesta === "N") {
        btn.disabled = true;

    }
}


function valida_p813_registros() {
    const tableBody = document.querySelector("#div_s8_13_arch tbody");
    const validationMessage = document.getElementById("validationMessage813");
    var siRadio = document.getElementById('p7_10_si');


    if (tableBody && tableBody.rows.length > 0) {
        validationMessage.style.display = "block";
        document.querySelector("#p8_13_no").checked = false;
        siRadio.checked= true;
    } else {
        validationMessage.style.display = "none";
    }
}


 
 function eliminar_archivo_sec8_14 (id_archivo, id_ficha,cod_unico) {

    $.ajax({
        url: urlx + "/ajaxEliminarProyectoSec8_14",
        type: 'POST',
        data: {
            id_archivo: id_archivo,
            id_ficha: id_ficha,
            cod_unico: cod_unico
        },
        success: function (data, textStatus, jqXHR) {

            $("#table_ficha_s8_14_arch").html(data);
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



function valida_p8_14_i() {
    const checkbox = document.getElementById("p8_14_i");
    const btn = document.getElementById("btn_file_s8_14_arch");
     const tableBody = document.querySelector("#table_ficha_s8_14_arch tbody");
    const mensaje = document.getElementById("warning_message");

    // Habilitar o deshabilitar el botón
    btn.disabled = !checkbox.checked;

   
  if (!checkbox.checked) {
        const hasFiles = tableBody && tableBody.children.length > 0;

        if (hasFiles) {
            // Mostrar mensaje de que se debe eliminar el archivo
            mensaje.textContent = "Por favor, elimine el archivo antes de desmarcar la opción.";
            mensaje.style.color = "red";
        } else {
            // Ocultar el mensaje si no hay archivo
            mensaje.textContent = "";
        }
    } else {
        // Ocultar el mensaje cuando se marca el checkbox
        mensaje.textContent = "";
    }
}



function valida_p8_14_i() {
    const checkbox = document.getElementById("p8_14_i");
    const btn = document.getElementById("btn_file_s8_14_arch");
    const tableBody = document.querySelector("#table_ficha_s8_14_arch tbody");
    const mensaje = document.getElementById("mensaje_archivo");

    // Habilitar/deshabilitar el botón según el estado del checkbox
    btn.disabled = !checkbox.checked;

    // Si el checkbox está desmarcado, verificar si hay archivos en la tabla
    if (!checkbox.checked) {
        const hasFiles = tableBody && tableBody.children.length > 0;

        if (hasFiles) {
            // Mostrar mensaje de que se debe eliminar el archivo
            mensaje.textContent = "Por favor, elimine el archivo antes de desmarcar la opción.";
            mensaje.style.color = "red";
        } else {
            // Ocultar el mensaje si no hay archivo
            mensaje.textContent = "";
        }
    } else {
        // Ocultar el mensaje cuando se marca el checkbox
        mensaje.textContent = "";
    }
}


function eliminar_archivo_sec9_1 (id_archivo, id_ficha,cod_unico) {

    $.ajax({
        url: urlx + "/ajaxEliminarProyectoSec9_1",
        type: 'POST',
        data: {
            id_archivo: id_archivo,
            id_ficha: id_ficha,
            cod_unico: cod_unico
        },
        success: function (data, textStatus, jqXHR) {

            $("#table_ficha_s9_1_arch").html(data);
//            $("#s7_p01_1").val($("#sizeFichaS7Proyecto").val());
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


function valida_p9_1_deshabilita() {
    const radioSi = document.getElementById("p9_1_si");
    const radioNo = document.getElementById("p9_1_no");
   
    
    let respuesta = null;
    if (radioSi && radioSi.checked) {
        respuesta = "S";
    } else if (radioNo && radioNo.checked) {
        respuesta = "N";
    }
    
    const btn91 = document.getElementById("btn91");
    const btn = document.getElementById('btn_file_s9_1_arch');

    if (respuesta === "S") {
        btn.disabled = false;
        btn91.disabled =false;
    } else if (respuesta === "N") {
        btn.disabled = true;
        btn91.disabled =true;

    }
}


function valida_p91_registros() {
    const tableBody = document.querySelector("#div_s9_1_arch tbody");
    const validationMessage = document.getElementById("validationMessage91");
    var siRadio = document.getElementById('p7_10_si');


    if (tableBody && tableBody.rows.length > 0) {
        validationMessage.style.display = "block";
        document.querySelector("#p9_1_no").checked = false;
        siRadio.checked= true;
    } else {
        validationMessage.style.display = "none";
    }
}

function valida_p91_registros_modal() {
    const tableBody = document.querySelector("#div_sec9_1 tbody");
    const validationMessage = document.getElementById("validationMessage91_modal");
    var siRadio = document.getElementById('p9_1_si');


    if (tableBody && tableBody.rows.length > 0) {
        validationMessage.style.display = "block";
        document.querySelector("#p9_1_no").checked = false;
        siRadio.checked= true;
    } else {
        validationMessage.style.display = "none";
    }
}

//////////MODAL 9_1//////////////////


function abrir_modal_sec9_1(id, id_ficha) {

    $("#loader_mdl_sec9_1").show();
    $("#loader_form_mdl_sec9_1").hide();

    if (id_ficha === null) {
        id_ficha = $("#id_ficha").val();
    }

    $.ajax({
        url: urlx + "/ajaxBuscarSec9_1",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec9_1_mdl").html(data);

            $("#loader_mdl_sec9_1").hide();
            $("#loader_form_mdl_sec9_1").show();
        },
        error: function (jqXHR, textStatus, errorThrown) {

            $("#loader_mdl_sec9_1").show();
            $("#loader_form_mdl_sec9_1").hide();

            if (jqXHR.status == 401) {
                alert("Su sesión ha finalizado");
            } else {
                alert("Ocurrió un error al cargar");
            }
        }
    });
}






function guardar_modal_sec9_1() {
    console.log("entro a guardar");
    $("#btn_save_mdl_sec9_1").prop("disabled", true);
    $("#btn_save_mdl_sec9_1").text('');
    $("#btn_save_mdl_sec9_1").wrapInner('<span class="fa-solid fa-rotate fa-spin" aria-hidden="true"></span> Procesando...');

    var coar_ficha_s9_p9_1pk = {
        id: parseInt($("#mdl_sec9_1_id").val()),
        id_ficha: parseInt($("#mdl_sec9_1_id_ficha").val())
    };

    console.log("1");
    var coar_ficha_s9_p9_1 = {
        coar_ficha_s9_p9_1pk: coar_ficha_s9_p9_1pk,
        fch_registro: $("#mdl_sec9_1_fch_registro").val(),
        usu_registro: $("#mdl_sec9_1_usu_registro").val(),
        p9_1_nom_residente: $("#p9_1_nom_residente").val(),
        p9_1_edad: $("#p9_1_edad").val(),
        p9_1_sexo: $("#p9_1_sexo").val(),
        p9_1_nacionalidad: $("#p9_1_nacionalidad").val(),
        p9_1_motivo: $("#p9_1_motivo").val(),
        p9_1_atendido: $("#p9_1_atendido").val(),
        p9_1_amerita: $("#p9_1_amerita").val(), 
        p9_1_siamerita: $("#p9_1_siamerita").val(),
         p9_1_expe: $("#p9_1_expe").val()
    };

    console.log("2");
    $.ajax({
        url: urlx + "/ajaxGuardarMdlSec9_1",
        contentType: "application/json;text/html;charset=UTF-8",
        type: "POST",
        data: JSON.stringify(coar_ficha_s9_p9_1),
        success: function (data, textStatus, jqXHR) {
            console.log("3");
            $("#div_sec9_1").html(data);
            
            
            $("#btn_save_mdl_sec9_1").prop("disabled", false);
            $("#btn_save_mdl_sec9_1").text('');
            $("#btn_save_mdl_sec9_1").wrapInner('<span class="fa fa-cloud-upload" aria-hidden="true"></span> Guardar');
            
            console.log("antes de cerrar modal");
            $("#modal_sec9_1").modal("hide");

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

function eliminar_modal_sec9_1(id, id_ficha) {

    $.ajax({
        url: urlx + "/ajaxEliminarModalSec9_1",
        type: 'POST',
        data: {
            id: id,
            id_ficha: id_ficha
        },
        success: function (data, textStatus, jqXHR) {

            $("#div_sec9_1").html(data);
             
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
////////////////////////////////////

function valida_p10_1_4_otro(){
   var otroRadio = document.getElementById('p10_1_4_d');
   var p10_1_4_otro= document.getElementById('p10_1_4_otro');

    if (otroRadio.checked){
    
    p10_1_4_otro.disabled= false;
    p10_1_4_otro.required= true;    
   }else{
    p10_1_4_otro.required= false;     
    p10_1_4_otro.disabled= true;
    p10_1_4_otro.value= "";
   }     
        
}




function valida_p10_1_6_otro(){
   var otroRadio = document.getElementById('p10_1_6_e');
   var p10_1_6_otro= document.getElementById('p10_1_6_otro');

    if (otroRadio.checked){
    
    p10_1_6_otro.disabled= false;
    p10_1_6_otro.required= true;    
   }else{
    p10_1_6_otro.required= false;     
    p10_1_6_otro.disabled= true;
    p10_1_6_otro.value= "";
   }     
        
}

function valida_p10_1_5_malo() {
    var isMaloSelected = document.getElementById('p10_1_5_c').checked;
    var btn_file_s10_1_6_arch = document.getElementById('btn_file_s10_1_6_arch');
    var row1016Elements = document.querySelectorAll('.row1016 input');
    var p10_1_6_otro = document.getElementById('p10_1_6_otro');

    row1016Elements.forEach(function (element) {
        element.disabled = !isMaloSelected;

        if (!isMaloSelected) {
            if (element.type === 'checkbox') {
                element.checked = false;
            } else if (element.type === 'textarea') {
                element.value = '';
            }
        }
    });

    // Manejar p10_1_6_otro de forma explícita
    if (!isMaloSelected) {
        p10_1_6_otro.value = ""; // Limpiar el valor
        p10_1_6_otro.disabled = true;
    }

    // Actualizar el estado del botón
    btn_file_s10_1_6_arch.disabled = !isMaloSelected;
}



function eliminar_archivo_sec10_1_6 (id_archivo, id_ficha,cod_unico) {

    $.ajax({
        url: urlx + "/ajaxEliminarProyectoSec10_1_6",
        type: 'POST',
        data: {
            id_archivo: id_archivo,
            id_ficha: id_ficha,
            cod_unico: cod_unico
        },
        success: function (data, textStatus, jqXHR) {

            $("#table_ficha_s10_1_6_arch").html(data);
//            $("#s7_p01_1").val($("#sizeFichaS7Proyecto").val());
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


function valida_p1015_registros() {
    const tableBody = document.querySelector("#div_s10_1_6_arch tbody");
    const validationMessage = document.getElementById("mensaje_archivo1016");
    var siRadio = document.getElementById('p10_1_5_c');


    if (tableBody && tableBody.rows.length > 0) {
        validationMessage.style.display = "block";
        document.querySelector("#p10_1_5_A").checked = false;
        document.querySelector("#p10_1_5_b").checked = false;
        siRadio.checked= true;
    } else {
        validationMessage.style.display = "none";
    }
}

/////////////////////////////INICIO 10.1.7////////////////////



function valida_p10_1_7_estado_malo() {
    var isMaloSelected = document.getElementById('p10_1_7_estado_c').checked;
    var btn_file_s10_1_7_arch = document.getElementById('btn_file_s10_1_7_arch');
    var rowElements = document.querySelectorAll('.row1018 input');
    var p10_1_8_otro = document.getElementById('p10_1_8_otro');

    rowElements.forEach(function (element) {
        element.disabled = !isMaloSelected;

        if (!isMaloSelected) {
            if (element.type === 'checkbox') {
                element.checked = false;
            } else if (element.type === 'textarea') {
                element.value = '';
            }
        }
    });

    // Manejar p10_1_6_otro de forma explícita
    if (!isMaloSelected) {
        p10_1_8_otro.value = ""; // Limpiar el valor
        p10_1_8_otro.disabled = true;
    }

    // Actualizar el estado del botón
    btn_file_s10_1_7_arch.disabled = !isMaloSelected;
}


function valida_p1017_registros() {
    const tableBody = document.querySelector("#div_s10_1_7_arch tbody");
    const validationMessage = document.getElementById("mensaje_archivo1017");
    var siRadio = document.getElementById('p10_1_7_estado_c');
    const radios = document.querySelectorAll('.row1017estado input[type="radio"]');


    if (tableBody && tableBody.rows.length > 0) {
        validationMessage.style.display = "block";
        document.querySelector("#p10_1_7_no").checked = false;
        document.querySelector("#p10_1_7_si").checked = true;
        
       radios.forEach(radio => {
            radio.disabled = false;
            console.log(`Radio habilitado: id=${radio.id}`);
        });
        
        document.querySelector("#p10_1_7_estado_a").checked = false;
        document.querySelector("#p10_1_7_estado_b").checked = false;
        siRadio.checked= true;
    } else {
        validationMessage.style.display = "none";
    }
}


function valida_p10_1_8_otro(){
   var otroRadio = document.getElementById('p10_1_8_d');
   var p10_1_8_otro= document.getElementById('p10_1_8_otro');

    if (otroRadio.checked){
    
    p10_1_8_otro.disabled= false;
    p10_1_8_otro.required= true;    
   }else{
    p10_1_8_otro.required= false;     
    p10_1_8_otro.disabled= true;
    p10_1_8_otro.value= "";
   }     
        
}


function eliminar_archivo_sec10_1_7 (id_archivo, id_ficha,cod_unico) {

    $.ajax({
        url: urlx + "/ajaxEliminarProyectoSec10_1_7",
        type: 'POST',
        data: {
            id_archivo: id_archivo,
            id_ficha: id_ficha,
            cod_unico: cod_unico
        },
        success: function (data, textStatus, jqXHR) {

            $("#table_ficha_s10_1_7_arch").html(data);
//            $("#s7_p01_1").val($("#sizeFichaS7Proyecto").val());
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

//////////////FIN///////////////

////////////// INICIO 10.1.9 - 10.1.10 /////////////


function valida_p10_1_9_estado_malo() {
    var isMaloSelected = document.getElementById('p10_1_9_estado_c').checked;
    var btn_file_s10_1_10_arch = document.getElementById('btn_file_s10_1_10_arch');
    var rowElements = document.querySelectorAll('.row10110 input');
    var p10_1_10_otro = document.getElementById('p10_1_10_otro');

    rowElements.forEach(function (element) {
        element.disabled = !isMaloSelected;

        if (!isMaloSelected) {
            if (element.type === 'checkbox') {
                element.checked = false;
                element.required = true;
            } else if (element.type === 'textarea') {
                element.value = '';
            }
        }
    });

    if (!isMaloSelected) {
        p10_1_10_otro.value = ""; // Limpiar el valor
        p10_1_10_otro.disabled = true;
    }

    btn_file_s10_1_10_arch.disabled = !isMaloSelected;
}

function valida_p1019_registros() {
    const tableBody = document.querySelector("#div_s10_1_10_arch tbody");
    const validationMessage = document.getElementById("mensaje_archivo10110");
    var siRadio = document.getElementById('p10_1_9_estado_c');
    const radios = document.querySelectorAll('.row1019estado input[type="radio"]');


    if (tableBody && tableBody.rows.length > 0) {
        validationMessage.style.display = "block";
        document.querySelector("#p10_1_9_no").checked = false;
        document.querySelector("#p10_1_9_si").checked = true;
        
       radios.forEach(radio => {
            radio.disabled = false;
            console.log(`Radio habilitado: id=${radio.id}`);
        });
        
        document.querySelector("#p10_1_9_estado_a").checked = false;
        document.querySelector("#p10_1_9_estado_b").checked = false;
        siRadio.checked= true;
    } else {
        validationMessage.style.display = "none";
    }
}

function valida_p10_1_10_otro(){
    var otroRadio = document.getElementById('p10_1_10_d');
    var otro= document.getElementById('p10_1_10_otro');
 
     if (otroRadio.checked){
     
        otro.disabled= false;
        otro.required= true;    
    }else{
        otro.required= false;     
        otro.disabled= true;
        otro.value= "";
    }     
         
 }
 
 
function eliminar_archivo_sec10_1_10 (id_archivo, id_ficha,cod_unico) {

    $.ajax({
        url: urlx + "/ajaxEliminarProyectoSec10_1_10",
        type: 'POST',
        data: {
            id_archivo: id_archivo,
            id_ficha: id_ficha,
            cod_unico: cod_unico
        },
        success: function (data, textStatus, jqXHR) {

            $("#table_ficha_s10_1_10_arch").html(data);
//            $("#s7_p01_1").val($("#sizeFichaS7Proyecto").val());
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

///////////////////FIN 10.1.10////////////////////////////

//////////////INIO///////////



function valida_p10_1_11_estado_malo() {
    const radioSi = document.getElementById("p10_1_11_estado_c");
    var p10_1_12_otro = document.getElementById('p10_1_12_otro');
    var btn_file_s10_1_12_arch = document.getElementById('btn_file_s10_1_12_arch');
    
    let respuesta = null;
    if (radioSi && radioSi.checked) {
        respuesta = "S";
    } else  {
        respuesta = "N";
    }

    const checkboxes = document.querySelectorAll('.row10112 input[type="checkbox"]');

    
    if (respuesta === "S") {
        checkboxes.forEach(checkbox => {
            checkbox.disabled = false; 
        });
      p10_1_12_otro.disabled= true;
      btn_file_s10_1_12_arch.disabled=false;
    } else if (respuesta === "N") {
        checkboxes.forEach(checkbox => {
            checkbox.disabled = true; 
            checkbox.checked = false; 
            checkbox.required = false; 
        });
        p10_1_12_otro.disabled= true;
        p10_1_12_otro.value="";
        
        btn_file_s10_1_12_arch.disabled=true;
    }
  
}


function valida_p1011_registros() {
    const tableBody = document.querySelector("#div_s10_1_12_arch tbody");
    const validationMessage = document.getElementById("mensaje_archivo10112");
    var siRadio = document.getElementById('p10_1_11_estado_c');
    const radios = document.querySelectorAll('.row10111estado input[type="radio"]');


    if (tableBody && tableBody.rows.length > 0) {
        validationMessage.style.display = "block";
      
        
       radios.forEach(radio => {
            radio.disabled = false;
            console.log(`Radio habilitado: id=${radio.id}`);
        });
        
        document.querySelector("#p10_1_11_estado_a").checked = false;
        document.querySelector("#p10_1_11_estado_b").checked = false;
        siRadio.checked= true;
    } else {
        validationMessage.style.display = "none";
    }
}

function valida_p10_1_12_otro(){
    var otroRadio = document.getElementById('p10_1_12_d');
    var otro= document.getElementById('p10_1_12_otro');
 
     if (otroRadio.checked){
     
        otro.disabled= false;
        otro.required= true;    
    }else{
        otro.required= false;     
        otro.disabled= true;
        otro.value= "";
    }     
         
 }
 
 
 
function eliminar_archivo_sec10_1_12 (id_archivo, id_ficha,cod_unico) {

    $.ajax({
        url: urlx + "/ajaxEliminarProyectoSec10_1_12",
        type: 'POST',
        data: {
            id_archivo: id_archivo,
            id_ficha: id_ficha,
            cod_unico: cod_unico
        },
        success: function (data, textStatus, jqXHR) {

            $("#table_ficha_s10_1_12_arch").html(data);
//            $("#s7_p01_1").val($("#sizeFichaS7Proyecto").val());
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
////////////////////////////////////////////////////////


function valida10113() {
    const radioSi = document.getElementById("p10_1_13_si");
    const radioNo = document.getElementById("p10_1_13_no");

    let respuesta = null;
    if (radioSi && radioSi.checked) {
        respuesta = "S";
    } else if (radioNo && radioNo.checked) {
        respuesta = "N";
    }

    const radios = document.querySelectorAll('.row10113estado input[type="radio"]');

    
    if (respuesta === "S") {
        radios.forEach(radio => {
            radio.disabled = false; 
            radio.required = true; 
        });
     
    } else if (respuesta === "N") {
        radios.forEach(radio => {
            radio.disabled = true; 
            radio.checked = false; 
            radio.required = false; 
        });
        
    }
    
    
    
}


function valida_p10_1_16_otro(){
    var otroRadio = document.getElementById('p10_1_16_d');
    var otro= document.getElementById('p10_1_16_otro');
 
     if (otroRadio.checked){
     
        otro.disabled= false;
        otro.required= true;    
    }else{
        otro.required= false;     
        otro.disabled= true;
        otro.value= "";
    }     
         
 }
 

function valida_p10_1_15_malo() {
    var isMaloSelected = document.getElementById('p10_1_15_c').checked;
    var btn_file_s10_1_16_arch = document.getElementById('btn_file_s10_1_16_arch');
    var rowElements = document.querySelectorAll('.row10116 input');
    var p10_1_16_otro = document.getElementById('p10_1_16_otro');
    const tableBody = document.querySelector("#div_s10_1_16_arch tbody");
    const hasFiles = tableBody && tableBody.rows.length > 0; // Verificar si hay archivos en la tabla


    if (!hasFiles) {
        rowElements.forEach(function (element) {
            element.disabled = !isMaloSelected; 

            if (!isMaloSelected) {
                if (element.type === 'radio') {
                    element.checked = false;
                    element.required = true;
                } else if (element.type === 'textarea') {
                    element.value = '';
                }
            }
        });

        if (!isMaloSelected) {
            p10_1_16_otro.value = "";
            p10_1_16_otro.disabled = true;
        }
    }

    // Mantener el estado del botón siempre sincronizado con "Malo"
    btn_file_s10_1_16_arch.disabled = !isMaloSelected;
}





function eliminar_archivo_sec10_1_16 (id_archivo, id_ficha,cod_unico) {

    $.ajax({
        url: urlx + "/ajaxEliminarProyectoSec10_1_16",
        type: 'POST',
        data: {
            id_archivo: id_archivo,
            id_ficha: id_ficha,
            cod_unico: cod_unico
        },
        success: function (data, textStatus, jqXHR) {

            $("#table_ficha_s10_1_16_arch").html(data);
//            $("#s7_p01_1").val($("#sizeFichaS7Proyecto").val());
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



function valida_p1015_registros() {
    const tableBody = document.querySelector("#div_s10_1_16_arch tbody");
   const validationMessage = document.getElementById("mensaje_archivo10116");
    var siRadio = document.getElementById('p10_1_15_c');
    const radios = document.querySelectorAll('.row10116 input[type="radio"]');


    if (tableBody && tableBody.rows.length > 0) {
        validationMessage.style.display = "block";
      
        
       radios.forEach(radio => {
            radio.disabled = false;
            console.log(`Radio habilitado: id=${radio.id}`);
        });
        
        document.querySelector("#p10_1_15_a").checked = false;
        document.querySelector("#p10_1_15_b").checked = false;
        siRadio.checked= true;
    } else {
        validationMessage.style.display = "none";
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function valida1023(){
     const siRadio = document.getElementById('p10_2_3_si');
     const radios = document.querySelectorAll('.row1024 input[type="radio"]');

    
    if (siRadio.checked) {
          radios.forEach(radio => {
            radio.disabled = false;
            radio.required =true;
            console.log(`Radio habilitado: id=${radio.id}`);
        });
    }else{    
          radios.forEach(radio => {
            radio.disabled = true;
            radio.checked = false;
            radio.required =false;
            console.log(`Radio deshabilitado: id=${radio.id}`);
        });
    }

}
function valida1027(){
    const siRadio = document.getElementById('p10_2_7_si');
    const radios = document.querySelectorAll('.row1028 input[type="radio"]');

   
   if (siRadio.checked) {
         radios.forEach(radio => {
           radio.disabled = false;
           radio.required =true;
           console.log(`Radio habilitado: id=${radio.id}`);
       });
   }else{    
         radios.forEach(radio => {
           radio.disabled = true;
           radio.checked = false;
           radio.required =false;
           console.log(`Radio deshabilitado: id=${radio.id}`);
       });
   }

}


function eliminar_archivo_sec10_2 (id_archivo, id_ficha,cod_unico) {

    $.ajax({
        url: urlx + "/ajaxEliminarProyectoSec10_2",
        type: 'POST',
        data: {
            id_archivo: id_archivo,
            id_ficha: id_ficha,
            cod_unico: cod_unico
        },
        success: function (data, textStatus, jqXHR) {

            $("#table_ficha_s10_2_arch").html(data);
//            $("#s7_p01_1").val($("#sizeFichaS7Proyecto").val());
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

///////////////////////////////////////////////////////////////////////////////////
function valida1031() {
    // Obtener los elementos dentro del div rowoculta
    const rowOculta = document.querySelector('.rowoculta');
    const radiosCheckboxesInputs = rowOculta.querySelectorAll('input[type="radio"], input[type="checkbox"], input[type="text"], input[type="number"]');
    const textarea = rowOculta.querySelector('textarea');
    var  p10_3_3_horas = document.getElementById('p10_3_3_horas');
    
    // Verificar si la opción seleccionada es "SI"
    const opcionSi = document.querySelector('#p10_3_1_si').checked;

    if (opcionSi) {
        // Habilitar y limpiar los radios, checkboxes e inputs
        radiosCheckboxesInputs.forEach(input => {
            input.disabled = false;
            if (input.type !== 'radio' && input.type !== 'checkbox') {
                input.value = '';
            } else {
                input.checked = false;
            }
        });

        // Mantener el textarea deshabilitado
        if (textarea) {
            textarea.disabled = true;
        }
    } else {
        radiosCheckboxesInputs.forEach(input => {
            input.disabled = true;
            input.checked = false;
             input.required =false;
            
        });
        
        p10_3_3_horas.value="";
        if (textarea) {
            textarea.disabled = true;
            textarea.value="";
        }
    }
}


function valida_p10_3_2_otro(){
    var otroRadio = document.getElementById('p10_3_2_f');
    var otro= document.getElementById('p10_3_2_otro');
 
     if (otroRadio.checked){
     
        otro.disabled= false;
        otro.required= true;    
    }else{
        otro.required= false;     
        otro.disabled= true;
        otro.value= "";
    }     
         
 }
 
 ///////////////////////////
   function validateHoursInput(input) {
        // Eliminar cualquier carácter que no sea numérico
        input.value = input.value.replace(/[^0-9]/g, '');
        // Limitar el valor máximo a 24
        if (parseInt(input.value, 10) > 24) {
            input.value = 24;
        }
        // Limitar a 2 dígitos
        if (input.value.length > 2) {
            input.value = input.value.slice(0, 2);
        }
    }
    
    
    
    function valida1035() {
    // Obtener los elementos dentro del div rowoculta
    const rowOculta = document.querySelector('.rowocultay');
    const radiosCheckboxesInputs = rowOculta.querySelectorAll('input[type="radio"], input[type="checkbox"], input[type="text"], input[type="number"]');
    const textarea = rowOculta.querySelector('textarea');
    
    // Verificar si la opción seleccionada es "SI"
    const opcionSi = document.querySelector('#p10_3_5_si').checked;

    if (opcionSi) {
        // Habilitar y limpiar los radios, checkboxes e inputs
        radiosCheckboxesInputs.forEach(input => {
            input.disabled = false;
            if (input.type !== 'radio' && input.type !== 'checkbox') {
                input.value = '';
            } else {
                input.checked = false;
            }
        });

        // Mantener el textarea deshabilitado
        if (textarea) {
            textarea.disabled = true;
        }
    } else {
        radiosCheckboxesInputs.forEach(input => {
            input.disabled = true;
             input.checked = false;
             input.required =false;

        });

        if (textarea) {
            textarea.disabled = true;
            textarea.value="";
        }
    }
}
    
    

function valida_p10_3_7_otro(){
    var otroRadio = document.getElementById('p10_3_7_h');
    var otro= document.getElementById('p10_3_7_otro');
 
     if (otroRadio.checked){
     
        otro.disabled= false;
        otro.required= true;    
    }else{
        otro.required= false;     
        otro.disabled= true;
        otro.value= "";
    }     
         
 }
 
 function handleNoTieneCheckbox() {
  const noTieneCheckbox = document.getElementById('p10_3_7_g');
  const otherCheckboxes = [
    'p10_3_7_a', 'p10_3_7_b', 'p10_3_7_c', 
    'p10_3_7_d', 'p10_3_7_e', 'p10_3_7_f', 'p10_3_7_h'
  ];
  const otherCheckboxesElements = otherCheckboxes.map(id => document.getElementById(id));
  const otherTextarea = document.getElementById('p10_3_7_otro');

  noTieneCheckbox.addEventListener('change', () => {
    if (noTieneCheckbox.checked) {
      // Disable other checkboxes and textarea
      otherCheckboxesElements.forEach(checkbox => {
        checkbox.disabled = true;
        checkbox.checked = false;
      });
      otherTextarea.disabled = true;
      otherTextarea.value = '';
    } else {
      otherCheckboxesElements.forEach(checkbox => {
        checkbox.disabled = true;
      });
      // Keep textarea disabled
      otherTextarea.disabled = true;
    }
  });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', handleNoTieneCheckbox);




function valida10316() {
 const siRadio = document.getElementById('p10_3_16_a');
 const noRadio = document.getElementById('p10_3_16_b');
 const operativosRadios = document.querySelectorAll('.row10316_extend input[type="radio"]');

 siRadio.addEventListener('change', () => {
   if (siRadio.checked) {
     operativosRadios.forEach(radio => {
       radio.disabled = false;
     });
   }
 });

 noRadio.addEventListener('change', () => {
   if (noRadio.checked) {
     operativosRadios.forEach(radio => {
       radio.disabled = true;
       radio.checked = false;
     });
   }
 });
}

document.addEventListener('DOMContentLoaded', valida10316);

function valida10318() {
 const siRadio = document.getElementById('p10_3_18_si');
 const noRadio = document.getElementById('p10_3_18_no');
 const operativosRadios = document.querySelectorAll('.row10319_extend input[type="checkbox"]');

 siRadio.addEventListener('change', () => {
   if (siRadio.checked) {
     operativosRadios.forEach(checkbox => {
       checkbox.disabled = false;
       checkbox.required = true;
     });
   }
 });

 noRadio.addEventListener('change', () => {
   if (noRadio.checked) {
     operativosRadios.forEach(checkbox => {
       checkbox.disabled = true;
       checkbox.checked = false;
        checkbox.required = false;
     });
   }
 });
}

document.addEventListener('DOMContentLoaded', valida10318);
        

function valida10321() {
 const siRadio = document.getElementById('p10_3_21_si');
 const noRadio = document.getElementById('p10_3_21_no');
 const operativosRadios = document.querySelectorAll('.row22 input[type="radio"]');

 noRadio.addEventListener('change', () => {
   if (noRadio.checked) {
     operativosRadios.forEach(radio => {
       radio.disabled = false;
       radio.required = true;
     });
   }
 });

 siRadio.addEventListener('change', () => {
   if (siRadio.checked) {
     operativosRadios.forEach(radio => {
       radio.disabled = true;
       radio.checked = false;
        radio.required = false;
     });
   }
 });
}        

document.addEventListener('DOMContentLoaded', valida10321);      
        
        
function valida10322() {
 const siRadio = document.getElementById('p10_3_22_si');
 const noRadio = document.getElementById('p10_3_22_no');
 const operativosRadios = document.querySelectorAll('.row10323_extend input[type="radio"]');

 noRadio.addEventListener('change', () => {
   if (noRadio.checked) {
     operativosRadios.forEach(radio => {
       radio.disabled = false;
       radio.required = true;
     });
   }
 });

 siRadio.addEventListener('change', () => {
   if (siRadio.checked) {
     operativosRadios.forEach(radio => {
       radio.disabled = true;
       radio.checked = false;
        radio.required = false;
     });
   }
 });
}

document.addEventListener('DOMContentLoaded', valida10322);


////////////////////////////////////////////////


function valida10323() {
    const radioSi = document.getElementById("p10_3_23_si");
    const radioNo = document.getElementById("p10_3_23_no");
   
    
    let respuesta = null;
    if (radioSi && radioSi.checked) {
        respuesta = "S";
    } else if (radioNo && radioNo.checked) {
        respuesta = "N";
    }
    
    const btn = document.getElementById('btn_file_s10_3_23_arch');

    if (respuesta === "S") {
        btn.disabled = false;
    } else if (respuesta === "N") {
        btn.disabled = true;
    }
}


function valida_10323_registros() {
    const tableBody = document.querySelector("#div_s10_3_23_arch tbody");
    const validationMessage = document.getElementById("validationMessage10323");
    var siRadio = document.getElementById('p10_3_23_si');


    if (tableBody && tableBody.rows.length > 0) {
        validationMessage.style.display = "block";
        document.querySelector("#p10_3_23_no").checked = false;
        siRadio.checked= true;
    } else {
        validationMessage.style.display = "none";
    }
}


function eliminar_archivo_sec10_3_23 (id_archivo, id_ficha,cod_unico) {

    $.ajax({
        url: urlx + "/ajaxEliminarProyectoSec10_3_23",
        type: 'POST',
        data: {
            id_archivo: id_archivo,
            id_ficha: id_ficha,
            cod_unico: cod_unico
        },
        success: function (data, textStatus, jqXHR) {

            $("#table_ficha_s10_3_23_arch").html(data);
//            $("#s7_p01_1").val($("#sizeFichaS7Proyecto").val());
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
////////////////////////////////////////////////////////////////////////////////



 function valida_p10_3_26_otro(){
    var otroRadio = document.getElementById('p10_3_26_f');
    var otro= document.getElementById('p10_3_26_otro');
 
     if (otroRadio.checked){
     
     otro.disabled= false;
     otro.required= true;    
    }else{
     otro.required= false;     
     otro.disabled= true;
     otro.value= "";
    }     
         
 }
 
 

        
function valida10325() {
 const siRadio = document.getElementById('p10_3_25_si');
 const noRadio = document.getElementById('p10_3_25_no');
 const operativosRadios = document.querySelectorAll('.row10326 input[type="checkbox"]');
 var otro= document.getElementById('p10_3_26_otro');

 noRadio.addEventListener('change', () => {
   if (noRadio.checked) {
     operativosRadios.forEach(checkbox => {
       checkbox.disabled = false;
       checkbox.required = true;
     });
   }
 });

 siRadio.addEventListener('change', () => {
   if (siRadio.checked) {
     operativosRadios.forEach(checkbox => {
       checkbox.disabled = true;
       checkbox.checked = false;
        checkbox.required = false;
     });
     
     otro.disabled = true;
     otro.value="";
   }
 });
}

document.addEventListener('DOMContentLoaded', valida10325);


       
function valida10327() {
 const siRadio = document.getElementById('p10_3_27_si');
 const noRadio = document.getElementById('p10_3_27_no');
 const operativosRadios = document.querySelectorAll('.row10328 input[type="checkbox"]');
 var otro= document.getElementById('p10_3_28_otro');
 var btn_file_s10_3_28_arch  = document.getElementById('btn_file_s10_3_28_arch');

 siRadio.addEventListener('change', () => {
   if (siRadio.checked) {
     operativosRadios.forEach(checkbox => {
       checkbox.disabled = false;
     });
     
     btn_file_s10_3_28_arch.disabled=false;
   }
 });

 noRadio.addEventListener('change', () => {
   if (noRadio.checked) {
     operativosRadios.forEach(checkbox => {
       checkbox.disabled = true;
       checkbox.checked = false;
        checkbox.required = false;
     });
     btn_file_s10_3_28_arch.disabled=true;
     otro.disabled = true;
     otro.value="";
   }
 });
}

document.addEventListener('DOMContentLoaded', valida10327);



 function valida_p10_3_28_otro(){
    var otroRadio = document.getElementById('p10_3_28_f');
    var otro= document.getElementById('p10_3_28_otro');
 
     if (otroRadio.checked){
     
     otro.disabled= false;
     otro.required= true;    
    }else{
     otro.required= false;     
     otro.disabled= true;
     otro.value= "";
    }     
         
 }
 
 function valida1041() {
 const siRadio = document.getElementById('p10_4_1_si');
 const noRadio = document.getElementById('p10_4_1_no');
 const operativosRadios = document.querySelectorAll('.row1042 input[type="radio"]'); 
 const radios1043 = document.querySelectorAll('.row1043 input[type="radio"]');
 
 noRadio.addEventListener('change', () => {
   if (noRadio.checked) {
     operativosRadios.forEach(radio => {
       radio.disabled = false;
       radio.required = true;
     });
     
      radios1043.forEach(radio => {
        radio.disabled = true;
        radio.checked = false;
        radio.required = false;
     });
   }
 });

 siRadio.addEventListener('change', () => {
   if (siRadio.checked) {
     operativosRadios.forEach(radio => {
       radio.disabled = true;
        radio.checked = false;
        radio.required = false;
     });

  radios1043.forEach(radio => {
        radio.disabled=false;
        radio.required = true;
     });

   }
 });
}

document.addEventListener('DOMContentLoaded', valida1041);




 function valida_p10_4_3_otro(){
    var otroRadio = document.getElementById('p10_4_3_d');
    var otro= document.getElementById('p10_4_3_otro');
 
     if (otroRadio.checked){
     
     otro.disabled= false;
     otro.required= true;    
    }else{
     otro.required= false;     
     otro.disabled= true;
     otro.value= "";
    }     
         
 }
 
 
 
 
       
function valida10444() {
 const siRadio = document.getElementById('p10_4_4_si');
 const noRadio = document.getElementById('p10_4_4_no');
 const operativosRadios = document.querySelectorAll('.row1045 input[type="radio"]');
 var otro= document.getElementById('p10_4_5_otro');

 noRadio.addEventListener('change', () => {
   if (noRadio.checked) {
     operativosRadios.forEach(radio => {
       radio.disabled = false;
       radio.required = true;
     });
   }
 });

 siRadio.addEventListener('change', () => {
   if (siRadio.checked) {
     operativosRadios.forEach(radio => {
       radio.disabled = true;
       radio.checked = false;
        radio.required = false;
     });
     
     otro.disabled = true;
     otro.value="";
   }
 });
}

document.addEventListener('DOMContentLoaded', valida10444);


 function valida_p10_4_5_otro(){
    var otroRadio = document.getElementById('p10_4_5_c');
    var otro= document.getElementById('p10_4_5_otro');
 
     if (otroRadio.checked){
     
     otro.disabled= false;
     otro.required= true;    
    }else{
     otro.required= false;     
     otro.disabled= true;
     otro.value= "";
    }     
         
 }
 
 
function eliminar_archivo_sec10_5_4 (id_archivo, id_ficha,cod_unico) {

    $.ajax({
        url: urlx + "/ajaxEliminarProyectoSec10_5_4",
        type: 'POST',
        data: {
            id_archivo: id_archivo,
            id_ficha: id_ficha,
            cod_unico: cod_unico
        },
        success: function (data, textStatus, jqXHR) {

            $("#table_ficha_s10_5_4_arch").html(data);
//            $("#s7_p01_1").val($("#sizeFichaS7Proyecto").val());
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





function valida1054() {
    // Obtener el valor seleccionado del grupo de radio buttons
    const bueno = document.getElementById("p10_5_4_a").checked;
    const regular = document.getElementById("p10_5_4_b").checked;
    const malo = document.getElementById("p10_5_4_c").checked;

    // Obtener todos los checkboxes y el textarea
    const checkboxes = document.querySelectorAll("#p10_5_5_a, #p10_5_5_b, #p10_5_5_c, #p10_5_5_d, #p10_5_5_e");
    const textarea = document.getElementById("p10_5_5_otro");

    if (bueno) {
        // Si se selecciona "Bueno", deshabilitar y limpiar los checkboxes y el textarea
        checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
            checkbox.disabled = true;
        });
        textarea.value = "";
        textarea.disabled = true;
    } else if (regular || malo) {
        // Si se selecciona "Regular" o "Malo", habilitar los checkboxes y el textarea
        checkboxes.forEach((checkbox) => {
            checkbox.disabled = false;
        });
        textarea.disabled = true;
    }
}


 function valida_p10_5_5_otro(){
    var otroRadio = document.getElementById('p10_5_5_e');
    var otro= document.getElementById('p10_5_5_otro');
 
     if (otroRadio.checked){
     
     otro.disabled= false;
     otro.required= true;    
    }else{
     otro.required= false;     
     otro.disabled= true;
     otro.value= "";
    }     
         
 }
 
  
function eliminar_archivo_sec10_6_4 (id_archivo, id_ficha,cod_unico) {

    $.ajax({
        url: urlx + "/ajaxEliminarProyectoSec10_6_4",
        type: 'POST',
        data: {
            id_archivo: id_archivo,
            id_ficha: id_ficha,
            cod_unico: cod_unico
        },
        success: function (data, textStatus, jqXHR) {

            $("#table_ficha_s10_6_4_arch").html(data);
//            $("#s7_p01_1").val($("#sizeFichaS7Proyecto").val());
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

 
function eliminar_archivo_sec10_6_5 (id_archivo, id_ficha,cod_unico) {

    $.ajax({
        url: urlx + "/ajaxEliminarProyectoSec10_6_5",
        type: 'POST',
        data: {
            id_archivo: id_archivo,
            id_ficha: id_ficha,
            cod_unico: cod_unico
        },
        success: function (data, textStatus, jqXHR) {

            $("#table_ficha_s10_6_5_arch").html(data);
//            $("#s7_p01_1").val($("#sizeFichaS7Proyecto").val());
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

function valida1053(){
 const siRadio = document.getElementById('p10_5_3_a');
 const noRadio = document.getElementById('p10_5_3_b');
 const Radios = document.querySelectorAll('.row1054_extend input[type="radio"]');
 const div_s10_5_4_arch = document.getElementById('div_s10_5_4_arch');
 siRadio.addEventListener('change', () => {
   if (siRadio.checked) {
     Radios.forEach(radio => {
       radio.disabled = false;
       radio.required = true;
     });
     div_s10_5_4_arch.disabled = false;
   
   }
 });

 noRadio.addEventListener('change', () => {
   if (noRadio.checked) {
     Radios.forEach(radio => {
       radio.disabled = true;
       radio.checked = false;
        radio.required = false;
     });
     
     div_s10_5_4_arch.disabled = true;
   }
 });
}

document.addEventListener('DOMContentLoaded', valida1053);

function valida1071() {
 const siRadio = document.getElementById('p10_7_1_a');
 const noRadio = document.getElementById('p10_7_1_b');
 const operativosRadios72 = document.querySelectorAll('.row1072 input[type="checkbox"]');
 
  const operativosRadios73 = document.querySelectorAll('.row1073 input[type="radio"]');
 const operativosRadios74 = document.querySelectorAll('.row1074 input[type="radio"]');



 siRadio.addEventListener('change', () => {
   if (siRadio.checked) {
     operativosRadios72.forEach(checkbox => {
       checkbox.disabled = false;
       checkbox.required = true;
     });
     
      operativosRadios73.forEach(radio => {
       radio.disabled = false;
       radio.required = true;
     });
     
      operativosRadios74.forEach(radio => {
       radio.disabled = false;
       radio.required = true;
     });
   }
 });

 noRadio.addEventListener('change', () => {
   if (noRadio.checked) {
     operativosRadios72.forEach(checkbox => {
       checkbox.disabled = true;
       checkbox.checked = false;
        checkbox.required = false;
     });
     
      operativosRadios73.forEach(radio => {
       radio.disabled = true;
       radio.checked = false;
        radio.required = false;
     });
     
      operativosRadios74.forEach(radio => {
       radio.disabled = true;
       radio.checked = false;
        radio.required = false;
     });
   }
 });
}

document.addEventListener('DOMContentLoaded', valida1071);


function eliminar_archivo_sec10_7_3 (id_archivo, id_ficha,cod_unico) {

    $.ajax({
        url: urlx + "/ajaxEliminarProyectoSec10_7_3",
        type: 'POST',
        data: {
            id_archivo: id_archivo,
            id_ficha: id_ficha,
            cod_unico: cod_unico
        },
        success: function (data, textStatus, jqXHR) {

            $("#table_ficha_s10_7_3_arch").html(data);
//            $("#s7_p01_1").val($("#sizeFichaS7Proyecto").val());
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

function eliminar_archivo_sec10_7_4 (id_archivo, id_ficha,cod_unico) {

    $.ajax({
        url: urlx + "/ajaxEliminarProyectoSec10_7_4",
        type: 'POST',
        data: {
            id_archivo: id_archivo,
            id_ficha: id_ficha,
            cod_unico: cod_unico
        },
        success: function (data, textStatus, jqXHR) {

            $("#table_ficha_s10_7_4_arch").html(data);
//            $("#s7_p01_1").val($("#sizeFichaS7Proyecto").val());
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


function valida1079() {
 const siRadio = document.getElementById('p10_7_9_si');
 const noRadio = document.getElementById('p10_7_9_no');
 const operativosRadios = document.querySelectorAll('.row1079_extend input[type="radio"]');

 siRadio.addEventListener('change', () => {
   if (siRadio.checked) {
     operativosRadios.forEach(radio => {
       radio.disabled = false;
       radio.required = true;
     });
   }
 });

 noRadio.addEventListener('change', () => {
   if (noRadio.checked) {
     operativosRadios.forEach(radio => {
       radio.disabled = true;
       radio.checked = false;
        radio.required = false;
     });
   }
 });
}

document.addEventListener('DOMContentLoaded', valida1079);

function valida1082() {
 const siRadio = document.getElementById('p10_8_1_a');
 const noRadio = document.getElementById('p10_8_1_b');
 const operativosRadios = document.querySelectorAll('.row1082 input[type="radio"]');

 siRadio.addEventListener('change', () => {
   if (siRadio.checked) {
     operativosRadios.forEach(radio => {
       radio.disabled = false;
       radio.required = true;
     });
   }
 });

 noRadio.addEventListener('change', () => {
   if (noRadio.checked) {
     operativosRadios.forEach(radio => {
       radio.disabled = true;
       radio.checked = false;
        radio.required = false;
     });
   }
 });
}

document.addEventListener('DOMContentLoaded', valida1082);


function valida1083() {
 const siRadio = document.getElementById('p10_8_3_a');
 const noRadio = document.getElementById('p10_8_3_b');
 const input = document.getElementById('p10_8_4');


 noRadio.addEventListener('change', () => {
   if (noRadio.checked) {
       input.disabled = false;
       input.required =true;
   }
 });

 siRadio.addEventListener('change', () => {
   if (siRadio.checked) {
    input.disabled = true;
    input.required = false;
    input.value="";
   }
 });
}

document.addEventListener('DOMContentLoaded', valida1083);



function valida1086() {
 const siRadio = document.getElementById('p10_8_5_a');
 const noRadio = document.getElementById('p10_8_5_b');
 const operativosRadios = document.querySelectorAll('.row1086 input[type="radio"]');

 siRadio.addEventListener('change', () => {
   if (siRadio.checked) {
     operativosRadios.forEach(radio => {
       radio.disabled = false;
       radio.required = true;
     });
   }
 });

 noRadio.addEventListener('change', () => {
   if (noRadio.checked) {
     operativosRadios.forEach(radio => {
       radio.disabled = true;
       radio.checked = false;
        radio.required = false;
     });
   }
 });
}

document.addEventListener('DOMContentLoaded', valida1086);


function valida1075() {
 const siRadio = document.getElementById('p10_7_5_a');
 const noRadio = document.getElementById('p10_7_5_b');
 const operativosRadios = document.querySelectorAll('.row1076 input[type="radio"]');

 siRadio.addEventListener('change', () => {
   if (siRadio.checked) {
     operativosRadios.forEach(radio => {
       radio.disabled = false;
       radio.required = true;
     });
   }
 });

 noRadio.addEventListener('change', () => {
   if (noRadio.checked) {
     operativosRadios.forEach(radio => {
       radio.disabled = true;
       radio.checked = false;
        radio.required = false;
     });
   }
 });
}

document.addEventListener('DOMContentLoaded', valida1075);

function toggleCheckboxes() {
    const inputValue = document.getElementById("p3_1_1").value;
    const checkboxes = document.querySelectorAll(".row311x input[type='checkbox']");
    
    // Obtener todos los textareas (puedes ajustar los IDs o clases si son diferentes)
    const textareas = [
        document.getElementById("p3_1_2_otro"),
        document.getElementById("p3_1_3_otro"),
        document.getElementById("p3_1_4_otro") , 
         document.getElementById("p3_1_5_otro") 
    ];


    checkboxes.forEach(checkbox => {
        if (inputValue > 0) {
            checkbox.disabled = false; 
        } else {
            checkbox.disabled = true; 
            checkbox.checked = false; 
        }
    });

    textareas.forEach(textarea => {
        if (inputValue === "" || inputValue == 0) {
            textarea.disabled = true;  
            textarea.value = ""; 
        } else {
            textarea.disabled = true; // Habilitar si hay un valor diferente a vacío o 0
        }
    });
}

// Agregar el evento para detectar cambios en el input
document.getElementById("p3_1_1").addEventListener("input", toggleCheckboxes);



     
     $('#modal_sec4_2').on('shown.bs.modal', function () {
    const selectElement = document.getElementById("p4_2_defensoria");
    const textareaElement = document.getElementById("p4_2_amerita");

    if (selectElement && textareaElement) {
        selectElement.addEventListener("change", function () {
            const selectValue = this.value;

            if (selectValue === "S") {
                textareaElement.disabled = false;
                textareaElement.required = true;
            } else {
                textareaElement.disabled = true;
                textareaElement.value = "";
                textareaElement.required = false;
            }
        });
    }
});


function valida_p4_4_oculta() {
    var siRadio = document.getElementById('p4_4_si');
    var noRadio = document.getElementById('p4_4_no');
    const noAdjuntarDiv = document.querySelector(".no_aplica4_4");

    if (siRadio.checked) {

        noAdjuntarDiv.style.display = "block";
    } else if (noRadio.checked) {

        noAdjuntarDiv.style.display = "none";
    }else{
        noAdjuntarDiv.style.display = "none";
    }
}


function valida_p4_4_registros() {
    const tableBody = document.querySelector("#div_sec4_4 tbody");
    const validationMessage = document.getElementById("validationMessage4_4");
    const noAdjuntarDiv = document.querySelector(".no_aplica4_4");
    var siRadio = document.getElementById('p4_4_si');


    if (tableBody && tableBody.rows.length > 0) {
         noAdjuntarDiv.style.display = "block";
        validationMessage.style.display = "block";
        document.querySelector("#p4_4_no").checked = false;
        siRadio.checked= true;
    } else {
        validationMessage.style.display = "none";
    }
}


function eliminar_archivo_sec8_1(id_archivo, id_ficha,cod_unico) {

    $.ajax({
        url: urlx + "/ajaxEliminarProyectoSec8_1",
        type: 'POST',
        data: {
            id_archivo: id_archivo,
            id_ficha: id_ficha,
            cod_unico: cod_unico
        },
        success: function (data, textStatus, jqXHR) {

            $("#table_ficha_s8_1_arch").html(data);
//            $("#s7_p01_1").val($("#sizeFichaS7Proyecto").val());
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



function valida_p81_registros() {
    const tableBody = document.querySelector("#div_s8_1_arch tbody");
    const validationMessage = document.getElementById("validationMessage81");
    var siRadio = document.getElementById('p8_1_si');
    const validationMessage82 = document.getElementById("validationMessage82");
 const tableBody82 = document.querySelector("#div_s8_2_arch tbody");
 
 

    if (tableBody && tableBody.rows.length > 0) {
        validationMessage.style.display = "block";
        document.querySelector("#p8_1_no").checked = false;
        siRadio.checked= true;
    } else {
        validationMessage.style.display = "none";
    }
    
      if (tableBody82 && tableBody82.rows.length > 0) {
        validationMessage82.style.display = "block";
        document.querySelector("#p8_1_no").checked = false;
        siRadio.checked= true;
    } else {
        validationMessage82.style.display = "none";
    }
}


function eliminar_archivo_sec8_2 (id_archivo, id_ficha,cod_unico) {

    $.ajax({
        url: urlx + "/ajaxEliminarProyectoSec8_2",
        type: 'POST',
        data: {
            id_archivo: id_archivo,
            id_ficha: id_ficha,
            cod_unico: cod_unico
        },
        success: function (data, textStatus, jqXHR) {

            $("#table_ficha_s8_2_arch").html(data);
//            $("#s7_p01_1").val($("#sizeFichaS7Proyecto").val());
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


//function valida_p8_3_otro() {
//    const checkboxes = document.querySelectorAll('.row83_extend input[type="checkbox"]');
//    const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
//
//    if (isChecked) {
//        checkboxes.forEach(checkbox => {
//            checkbox.required = false;
//        });
//    } else {
//        checkboxes.forEach(checkbox => {
//            checkbox.required = true;
//        });
//    }
//}
//
//// Asigna eventos a los checkboxes
//document.querySelectorAll('.row83_extend input[type="checkbox"]').forEach(checkbox => {
//    checkbox.addEventListener('change', valida_p8_3_otro);
//});



function valida_p8_3_deshabilita_radios() {
    const siRadio = document.getElementById('p8_3_si');
    const noRadio = document.getElementById('p8_3_no');
    const noAdjuntarDiv = document.querySelector(".no_aplica8_3");
    const checkboxes = document.querySelectorAll('.row83_extend input[type="checkbox"]');

    if (noRadio.checked) {
     const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

        noAdjuntarDiv.style.display = "block";
        checkboxes.forEach(checkbox => {
                checkbox.disabled = false;

            });
            
         if (isChecked) {
            checkboxes.forEach(checkbox => {
                checkbox.required = false;

            });
        } else {
            checkboxes.forEach(checkbox => {
                checkbox.required = true;
            });
        }
    } else if (siRadio.checked) {
        
        noAdjuntarDiv.style.display = "none";
      
        checkboxes.forEach(checkbox => {
            checkbox.required = false;
            checkbox.checked = false;
        });
    } else {
        noAdjuntarDiv.style.display = "none";
        checkboxes.forEach(checkbox => {
            checkbox.required = false;
        });
    }
}

document.querySelectorAll('.row83_extend input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', valida_p8_3_deshabilita_radios);
});

function valida_p8_3_otro() {
    const checkboxes = document.querySelectorAll('.row83_extend input[type="checkbox"]');
    const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
    const p8_3_c = document.getElementById('p8_3_c');
    const p8_3_otro = document.getElementById('p8_3_otro');
   if (p8_3_c.checked) { 
       
       p8_3_otro.disabled= false;
       p8_3_otro.required = true;
        if (isChecked) {
            checkboxes.forEach(checkbox => {
                checkbox.required = false;

            });
        } else {
            checkboxes.forEach(checkbox => {
                checkbox.required = true;
            });
        }
   }else{
     p8_3_otro.disabled= true;
     p8_3_otro.required = false;
   }
   }
// Asigna eventos a los checkboxes
document.querySelectorAll('.row83_extend input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', valida_p8_3_otro);
});



 function valida_p8_14_otro(){
    var otroRadio = document.getElementById('p8_14_j');
    var otro= document.getElementById('p8_14_otro');
 
     if (otroRadio.checked){
     
     otro.disabled= false;
     otro.required= true;    
    }else{
     otro.required= false;     
     otro.disabled= true;
     otro.value= "";
    }     
         
 }
 
 
 
    $('#modal_sec9_1').on('shown.bs.modal', function () {
    const selectElement = document.getElementById("p9_1_amerita");
    const textareaElement = document.getElementById("p9_1_siamerita");
    const input =document.getElementById("p9_1_expe");

    if (selectElement && textareaElement && input) {
        selectElement.addEventListener("change", function () {
            const selectValue = this.value;

            if (selectValue === "S") {
                textareaElement.disabled = false;
                textareaElement.required = true;
                
                input.disabled = false;
                input.required = true;
                
            } else {
                textareaElement.disabled = true;
                textareaElement.value = "";
                textareaElement.required = false;
                
                input.disabled = true;
                input.value = "";
                input.required = false;
            }
        });
    }
});


function validateInputExpe(input) {
        input.value = input.value.replace(/[^0-9-]/g, '');
}

    
    function valida645expe() { 
    const selectElement = document.getElementById('p6_4_5_amerita');
    const selectedValue = selectElement.value;

    const rowInputs = document.querySelectorAll('.row645expe input, .row645expe textarea');

    rowInputs.forEach(input => {
        if (selectedValue === 'S') {
            input.removeAttribute('disabled'); // Habilitar
            input.setAttribute('required', 'required'); // Hacer obligatorio
        } else {
            input.setAttribute('disabled', 'disabled'); // Deshabilitar
            input.removeAttribute('required'); // Quitar obligatorio
            input.value = ''; // Limpiar el valor
        }
    });
}


function eliminar_archivo_sec10_3_28 (id_archivo, id_ficha,cod_unico) {

    $.ajax({
        url: urlx + "/ajaxEliminarProyectoSec10_3_28",
        type: 'POST',
        data: {
            id_archivo: id_archivo,
            id_ficha: id_ficha,
            cod_unico: cod_unico
        },
        success: function (data, textStatus, jqXHR) {

            $("#table_ficha_s10_3_28_arch").html(data);
//            $("#s7_p01_1").val($("#sizeFichaS7Proyecto").val());
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




function valida_p10327_registros() {
    const tableBody = document.querySelector("#div_s10_3_28_arch tbody");
    const validationMessage = document.getElementById("validationMessage10328");
    var siRadio = document.getElementById('p10_3_27_si');

    if (tableBody && tableBody.rows.length > 0) {
        validationMessage.style.display = "block";
        document.querySelector("#p10_3_27_no").checked = false;
        siRadio.checked= true;
    } else {
        validationMessage.style.display = "none";
    }
    
  
}


function valida1017() {
    console.log("Iniciando función valida1017");

    const radioSi = document.getElementById("p10_1_7_si");
    const radioNo = document.getElementById("p10_1_7_no");
    console.log("radioSi:", radioSi, "radioNo:", radioNo);

    let respuesta = null;

    if (radioSi && radioSi.checked) {
        respuesta = "S";
        console.log("Se seleccionó 'Sí': respuesta =", respuesta);
    } else if (radioNo && radioNo.checked) {
        respuesta = "N";
        console.log("Se seleccionó 'No': respuesta =", respuesta);
    } else {
        console.log("Ninguna opción seleccionada");
    }

    const radios = document.querySelectorAll('.row1017estado input[type="radio"]');
    console.log("Radios secundarios encontrados:", radios);
    const checkboxes = document.querySelectorAll('.row1018 input[type="checkbox"]');


    if (respuesta === "S") {
        console.log("Habilitando radios secundarios...");
        radios.forEach(radio => {
            radio.disabled = false;
            radio.required = true;
            console.log(`Radio habilitado: id=${radio.id}`);
        });
    } else if (respuesta === "N") {
        console.log("Deshabilitando y reseteando radios secundarios...");
        radios.forEach(radio => {
            radio.disabled = true;
            radio.checked = false;
            radio.required = false;
            console.log(`Radio deshabilitado: id=${radio.id}, checked=${radio.checked}`);
            
            checkboxes.forEach(checkbox => {
            checkbox.disabled = true; 
            checkbox.checked=false;
        });
        });
    } else {
        console.log("No se pudo determinar la respuesta, no se realizan cambios en los radios secundarios.");
    }

    console.log("Finalizando función valida1017");
}

function valida1019() {
    console.log("Iniciando función valida1017");

    const radioSi = document.getElementById("p10_1_9_si");
    const radioNo = document.getElementById("p10_1_9_no");
    console.log("radioSi:", radioSi, "radioNo:", radioNo);
    
    let respuesta = null;

    if (radioSi && radioSi.checked) {
        respuesta = "S";
        console.log("Se seleccionó 'Sí': respuesta =", respuesta);
    } else if (radioNo && radioNo.checked) {
        respuesta = "N";
        console.log("Se seleccionó 'No': respuesta =", respuesta);
    } else {
        console.log("Ninguna opción seleccionada");
    }

    const radios = document.querySelectorAll('.row1019estado input[type="radio"]');
    console.log("Radios secundarios encontrados:", radios);
    const checkboxes = document.querySelectorAll('.row10110 input[type="checkbox"]');
    
    if (respuesta === "S") {
        console.log("Habilitando radios secundarios...");
        radios.forEach(radio => {
            radio.disabled = false;
            radio.required = true;
            console.log(`Radio habilitado: id=${radio.id}`);
        });
    } else if (respuesta === "N") {
        console.log("Deshabilitando y reseteando radios secundarios...");
        radios.forEach(radio => {
            radio.disabled = true;
            radio.checked = false;
            radio.required = false;
            console.log(`Radio deshabilitado: id=${radio.id}, checked=${radio.checked}`);
            
            checkboxes.forEach(checkbox => {
            checkbox.disabled = true; 
            checkbox.checked=false;
        });
        });
    } else {
        console.log("No se pudo determinar la respuesta, no se realizan cambios en los radios secundarios.");
    }

    console.log("Finalizando función valida1019");
}


function valida10111() {
    console.log("Iniciando función");

    const radioSi = document.getElementById("p10_1_11_si");
    const radioNo = document.getElementById("p10_1_11_no");
    console.log("radioSi:", radioSi, "radioNo:", radioNo);
  const checkboxes = document.querySelectorAll('.row10112 input[type="checkbox"]');

    let respuesta = null;

    if (radioSi && radioSi.checked) {
        respuesta = "S";
        console.log("Se seleccionó 'Sí': respuesta =", respuesta);
    } else if (radioNo && radioNo.checked) {
        respuesta = "N";
        console.log("Se seleccionó 'No': respuesta =", respuesta);
    } else {
        console.log("Ninguna opción seleccionada");
    }

    const radios = document.querySelectorAll('.row10111estado input[type="radio"]');
    console.log("Radios secundarios encontrados:", radios);

    if (respuesta === "S") {
        console.log("Habilitando radios secundarios...");
        radios.forEach(radio => {
            radio.disabled = false;
            radio.required = true;
            console.log(`Radio habilitado: id=${radio.id}`);
        });
    } else if (respuesta === "N") {
        console.log("Deshabilitando y reseteando radios secundarios...");
        radios.forEach(radio => {
            radio.disabled = true;
            radio.checked = false;
            radio.required = false;
            console.log(`Radio deshabilitado: id=${radio.id}, checked=${radio.checked}`);
        });
        
          checkboxes.forEach(checkbox => {
            checkbox.disabled = true; 
            checkbox.checked=false;
        });
    } else {
        console.log("No se pudo determinar la respuesta, no se realizan cambios en los radios secundarios.");
    }

    console.log("Finalizando función valida10111");
}

function valida_p10111_registros() {
    const tableBody = document.querySelector("#div_s10_1_12_arch tbody");
    const validationMessage = document.getElementById("mensaje_archivo10112");
    var siRadio = document.getElementById('p10_1_11_estado_c');
    const radios = document.querySelectorAll('.row10111estado input[type="radio"]');


    if (tableBody && tableBody.rows.length > 0) {
        validationMessage.style.display = "block";
        document.querySelector("#p10_1_11_no").checked = false;
        document.querySelector("#p10_1_11_si").checked = true;
        
       radios.forEach(radio => {
            radio.disabled = false;
            console.log(`Radio habilitado: id=${radio.id}`);
        });
        
        document.querySelector("#p10_1_11_estado_a").checked = false;
        document.querySelector("#p10_1_11_estado_b").checked = false;
        siRadio.checked= true;
    } else {
        validationMessage.style.display = "none";
    }
}




function eliminar_archivo_sec10_8_7 (id_archivo, id_ficha,cod_unico) {

    $.ajax({
        url: urlx + "/ajaxEliminarProyectoSec10_8_7",
        type: 'POST',
        data: {
            id_archivo: id_archivo,
            id_ficha: id_ficha,
            cod_unico: cod_unico
        },
        success: function (data, textStatus, jqXHR) {

            $("#table_ficha_s10_8_7_arch").html(data);
//            $("#s7_p01_1").val($("#sizeFichaS7Proyecto").val());
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

function validap4_4doc() {
    const documentoSelect = document.getElementById('p4_4_documento');
    const tipoDocSelect = document.getElementById('p4_4_tipodoc');
    const vigenteSelect = document.getElementById('p4_4_vigente');

    if (documentoSelect.value === 'S') {
        // Si "Sí" está seleccionado, habilita los selectores
        tipoDocSelect.disabled = false;
        tipoDocSelect.required = true;
        vigenteSelect.disabled = false;
        vigenteSelect.required = true;
    } else {
        // Si "No" o no está seleccionado, deshabilita los selectores
        tipoDocSelect.disabled = true;
        tipoDocSelect.required = false;
        vigenteSelect.disabled = true;
        vigenteSelect.required = false;
        // Opcional: Reinicia la selección
        tipoDocSelect.selectedIndex = 0; // Reinicia a "-- SELECCIONAR --"
        vigenteSelect.selectedIndex = 0; // Reinicia a "-- SELECCIONAR --"
    }
}


function toggleTextareaEnabled3_2() {
    const professionalSelect = document.getElementById('p3_2_lista_profesiones');
    const p3_2_detalle = document.getElementById('p3_2_detalle');

    if (professionalSelect.value === '7') {
        p3_2_detalle.disabled = false;
        p3_2_detalle.required = true;
    } else {
        p3_2_detalle.disabled = true;
        p3_2_detalle.required = false;
        p3_2_detalle.value = "";
    }
}

///////////SECCION 02 ////////////

///////// 1.1
/////REQUERIDO LOS CHECKBOX
$(document).on('change', '.check_p2_1_1_a', function () {
    validar_check_p2_1_1_a();
});
function validar_check_p2_1_1_a() {
    if ($('.check_p2_1_1_a:checked').length > 0) {  // the "> 0" part is unnecessary, actually
        $('.check_p2_1_1_a').prop('required', false);
    } else {
        $('.check_p2_1_1_a').prop('required', true);
    }
}
/////////// FIN 1.1 /////
///////// 1.2 /////
/////REQUERIDO LOS CHECKBOX
$(document).on('change', '.check_p2_1_2_a', function () {
    validar_check_p2_1_2_a();
});
function validar_check_p2_1_2_a() {
    if ($('.check_p2_1_2_a:checked').length > 0) {  // the "> 0" part is unnecessary, actually
        $('.check_p2_1_2_a').prop('required', false);
    } else {
        $('.check_p2_1_2_a').prop('required', true);
    }
}
/////////// FIN 1.2 /////


////////// FIN SECCION 02 ///////