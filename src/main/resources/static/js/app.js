var rcp = window.location.pathname.substring(0, window.location.pathname.indexOf("/", 2));
var mdlConfirmacion = null;
var mdlControl = null;
//var mdlCollapse = null;
var mdlCollapse1 = null;
var mdlCollapse2 = null;
$(function() {
    autorizar();
});
function autorizar() {
    var jqxhr = $.ajax({
        type: 'GET',
        url: rcp + "/authorized",
        dataType: 'text',
    }).done(function(data, textStatus, jqXHR) {
        $("#lbl-user").text(data);
    });
}
function bootModalAlert(title, body, btnNo, btnOk, callback) {
    //var mdlConfirmacion = new bootstrap.Modal("#mdl_confirmacion");
    mdlConfirmacion = bootstrap.Modal.getOrCreateInstance(document.querySelector("#mdl_confirmacion"));
    $("#mdl_confirmacion .modal-dialog .modal-content .modal-header .modal-title").text(title);
    $("#mdl_confirmacion .modal-dialog .modal-content .modal-body").html(body);
    if($.trim(btnNo)!=='') {
        $("#mdl_confirmacion .modal-dialog .modal-content .modal-footer #btnCancel label").text(btnNo);
        $("#mdl_confirmacion .modal-dialog .modal-content .modal-footer #btnCancel").show();
        $("#mdl_confirmacion .modal-dialog .modal-content .modal-header .btn-close").show();
    } else {
        $("#mdl_confirmacion .modal-dialog .modal-content .modal-footer #btnCancel label").text("");
        $("#mdl_confirmacion .modal-dialog .modal-content .modal-footer #btnCancel").hide();
        $("#mdl_confirmacion .modal-dialog .modal-content .modal-header .btn-close").hide();
    }
    if($.trim(btnOk)!=='') {
        $("#mdl_confirmacion .modal-dialog .modal-content .modal-footer #btnContinue label").text(btnOk);
        $("#mdl_confirmacion .modal-dialog .modal-content .modal-footer #btnContinue").show();
    } else {
        $("#mdl_confirmacion .modal-dialog .modal-content .modal-footer #btnContinue label").text("");
        $("#mdl_confirmacion .modal-dialog .modal-content .modal-footer #btnContinue").hide();
    }
    mdlConfirmacion.show();
    $(document).on("click", "#btnContinue", function () {
        //event.preventDefault();
        //event.stopPropagation();
        mdlConfirmacion.hide();
        //mdlConfirmacion.dispose();
        //setTimeout(() => {mdlConfirmacion.hide();},500);
        //setTimeout(() => {mdlConfirmacion.dispose();},500);
        if(callback) callback(true);
    });
}
function bootModalShow(control) {
    mdlControl = bootstrap.Modal.getOrCreateInstance(document.querySelector(control));
    mdlControl.show();
}
function bootModalHide(control) {
    mdlControl = bootstrap.Modal.getOrCreateInstance(document.querySelector(control));
    mdlControl.hide();
    //mdlControl.dispose();
    //setTimeout(() => {mdlControl.hide();},500);
    //setTimeout(() => {mdlControl.dispose();},750);
}
function bootCollapseShow(lnk,sublnk) {
    //mdlCollapse = bootstrap.Collapse.getOrCreateInstance(document.querySelector("#components-nav"));
    mdlCollapse1 = bootstrap.Collapse.getOrCreateInstance(document.querySelector("#components-nav-1"));
    mdlCollapse2 = bootstrap.Collapse.getOrCreateInstance(document.querySelector("#components-nav-2"));
    //mdlCollapse.show();
    mdlCollapse1.hide();
    mdlCollapse2.hide();
    if($(".sidebar ul.sidebar-nav li.nav-item ul.nav-content li a").hasClass("active"))
        $(".sidebar ul.sidebar-nav li.nav-item ul.nav-content li a").removeClass("active")
    switch(lnk) {
        case 2:
            switch(sublnk) {
                case 2:
                    mdlCollapse2.show();
                    $("ul#components-nav-2>li:nth-child(2) a").addClass("active");
                break;
                default:
                    mdlCollapse2.show();
                    $("ul#components-nav-2>li:nth-child(1) a").addClass("active");
            }
        break;
        default:
            switch(sublnk) {
                case 2:
                    mdlCollapse1.show();
                    $("ul#components-nav-1>li:nth-child(2) a").addClass("active");
                break;
                default:
                    mdlCollapse1.show();
                    $("ul#components-nav-1>li:nth-child(1) a").addClass("active");
            }
    }
}