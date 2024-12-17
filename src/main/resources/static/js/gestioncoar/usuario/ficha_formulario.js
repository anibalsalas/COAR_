
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


function validaRequeridosRadios(grupoNombre) {
    const radios = document.querySelectorAll(`input[name="${grupoNombre}"]`);
    let algunoSeleccionado = false;

    // Verificar si algún radio está seleccionado
    radios.forEach(radio => {
        if (radio.checked) {
            algunoSeleccionado = true;
        }
    });

    radios.forEach(radio => {
        radio.required = !algunoSeleccionado; // Si alguno está seleccionado, quita required; si no, pon required
    });
}


document.getElementById('hora_fin').addEventListener('change', function() {
    const horaInicio = document.getElementById('hora_inicio').value;
    const horaFin = this.value;

    if (horaInicio && horaFin && horaInicio >= horaFin) {
        alert('La hora de finalización debe ser posterior a la hora de inicio.');
        this.value = ''; // Limpiar el campo de hora de finalización
    }
});


function calcularTiempo() {
    const horaInicio = document.getElementById('hora_inicio').value;
    const horaFin = document.getElementById('hora_fin').value;

    if (horaInicio && horaFin) {
        const [hInicio, mInicio] = horaInicio.split(':').map(Number);
        const [hFin, mFin] = horaFin.split(':').map(Number);

        // Convierto todo a minutos
        const totalInicio = hInicio * 60 + mInicio;
        const totalFin = hFin * 60 + mFin;

        // Calculo la diferencia
        let diferencia = totalFin - totalInicio;

        // Si la diferencia es negativa, significa que la hora de fin es del día siguiente
        if (diferencia < 0) {
            diferencia += 24 * 60; // Añado 24 horas en minutos
        }

        // Obtener horas y minutos
        const horas = Math.floor(diferencia / 60);
        const minutos = diferencia % 60;

        // Asigno los valores a los inputs
        document.getElementById('horas_total').value = horas;
        document.getElementById('min_total').value = minutos;
    } else {
        // Limpio los campos si no hay hora de inicio o fin
        document.getElementById('horas_total').value = '';
        document.getElementById('min_total').value = '';
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