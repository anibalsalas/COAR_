package com.dp.gestioncoar.controller;

import com.dp.gestioncoar.dto.GepCuadroComparativoDTO;
import com.dp.gestioncoar.dto.ParametroDTO;
import com.dp.gestioncoar.entity.Demuna_ArchivoEntity;
import com.dp.gestioncoar.entity.Demuna_ArchivoPk;
import com.dp.gestioncoar.entity.Demuna_EstablecimientosEntity;
import com.dp.gestioncoar.entity.Demuna_FichaEntity;
import com.dp.gestioncoar.entity.Demuna_Ficha_S10Entity;
import com.dp.gestioncoar.entity.Demuna_Ficha_S1Entity;
import com.dp.gestioncoar.entity.Demuna_Ficha_S2Entity;
import com.dp.gestioncoar.entity.Demuna_Ficha_S3Entity;
import com.dp.gestioncoar.entity.Demuna_Ficha_S4Entity;
import com.dp.gestioncoar.entity.Demuna_Ficha_S5Entity;
import com.dp.gestioncoar.entity.Demuna_Ficha_S6Entity;
import com.dp.gestioncoar.entity.Demuna_Ficha_S7Entity;
import com.dp.gestioncoar.entity.Demuna_Ficha_S8Entity;
import com.dp.gestioncoar.entity.Demuna_Ficha_S9Entity;
import com.dp.gestioncoar.entity.Educa_Ficha_S4_3Entity;
import com.dp.gestioncoar.entity.Educa_Ficha_S4_3PkEntity;
import com.dp.gestioncoar.entity.Educa_Ficha_S5_10Entity;
import com.dp.gestioncoar.entity.Educa_Ficha_S5_10PkEntity;
import com.dp.gestioncoar.entity.Educa_Ficha_S5_1Entity;
import com.dp.gestioncoar.entity.Educa_Ficha_S5_1PkEntity;
import com.dp.gestioncoar.entity.Educa_Ficha_S5_2Entity;
import com.dp.gestioncoar.entity.Educa_Ficha_S5_2PkEntity;
import com.dp.gestioncoar.entity.Educa_Ficha_S5_31Entity;
import com.dp.gestioncoar.entity.Educa_Ficha_S5_31PkEntity;

import com.dp.gestioncoar.entity.Educa_Ficha_S5_4Entity;
import com.dp.gestioncoar.entity.Educa_Ficha_S5_4PkEntity;
import com.dp.gestioncoar.entity.Educa_Ficha_S5_5Entity;
import com.dp.gestioncoar.entity.Educa_Ficha_S5_5PkEntity;
import com.dp.gestioncoar.entity.Educa_Ficha_S5_6Entity;
import com.dp.gestioncoar.entity.Educa_Ficha_S5_6PkEntity;
import com.dp.gestioncoar.entity.Educa_Ficha_S5_7Entity;
import com.dp.gestioncoar.entity.Educa_Ficha_S5_7PkEntity;
import com.dp.gestioncoar.entity.Educa_Ficha_S5_8Entity;
import com.dp.gestioncoar.entity.Educa_Ficha_S5_8PkEntity;
import com.dp.gestioncoar.entity.Educa_Ficha_S5_9Entity;
import com.dp.gestioncoar.entity.Educa_Ficha_S5_9PkEntity;
import com.dp.gestioncoar.entity.Matm_personaEntity;
import com.dp.gestioncoar.entity.XubigeoEntity;
import com.dp.gestioncoar.entity.XubigeoEntityPk;
import com.dp.gestioncoar.repository.Demuna_FichaRepository;
import com.dp.gestioncoar.service.Demuna_FichaService;
import com.dp.gestioncoar.service.VariableSistemaLocalService;
import com.dp.gestioncoar.repository.Matm_persona_Repository;
import com.dp.gestioncoar.service.VariableSistemaService;
import com.dp.gestioncoar.util.Constantes;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import java.util.Locale;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Optional;
import java.util.UUID;
import java.util.logging.Level;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author asalas
 */
@Controller
public class FichasController {

    private static final Logger logger = LogManager.getLogger(FichasController.class);

    @Autowired
    VariableSistemaLocalService variableSistemaLocalService;

    @Autowired
    VariableSistemaService variableSistemaService;

    @Autowired
    Demuna_FichaService demuna_FichaService;
 

    @Autowired
    Demuna_FichaRepository demuna_ficharepository;
//    @Autowired
//    UsuarioService usuarioService;
    @Autowired
    private Matm_persona_Repository matm_persona_repository;

    

    @RequestMapping("/dp/usuario/ficha/listarFichas")
    public String listarFichas(Model model, HttpSession httpSession) {

        List<Demuna_FichaEntity> listaFichasDemuna = null;
        String usuario_usu = "";

        try {

            usuario_usu = variableSistemaService.userID().trim().toUpperCase();
            listaFichasDemuna = demuna_FichaService.listarFichasByComisionado(usuario_usu);

        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

        model.addAttribute("listaFichasDemuna", listaFichasDemuna);

        return "gestioncoar/usuario/ListaFicha";
    }
    
    
    @RequestMapping("/dp/usuario/ficha/insertarFichas")
    public String insertarFichas(Model model, @RequestParam(name = "cod_unico", required = false) String cod_unico, Demuna_FichaEntity ficha, HttpSession httpSession) {
        String usuario_usu = (String) httpSession.getAttribute("rol_usuario");
        String codi_depe_tde = "";
        // String c_tipo_entidad = "";
        System.out.println("ID de ficha recibido: " + ficha.getId_ficha());

        List<XubigeoEntity> listaDepartamento = new ArrayList<>();
        List<XubigeoEntity> listaProvincia = new ArrayList<>();
        List<Demuna_EstablecimientosEntity> listarEM = null;
        System.out.println("Valor de cod_unico recibido en insertarFichas: " + cod_unico);

        /**
         * Inicio 
         */
        String tipo_usuario = (String) httpSession.getAttribute("session_tipo_usuario");
        Demuna_EstablecimientosEntity establecimiento = demuna_FichaService.buscarByCodEESS(cod_unico.trim());

        if (tipo_usuario.equals("A")) {//usuario dp
            usuario_usu = variableSistemaService.userID().trim().toUpperCase();
            codi_depe_tde = variableSistemaLocalService.dependencia_fisica_personal(usuario_usu);
            ficha.setTxt_desc_depe_tde(variableSistemaLocalService.getDependencia(codi_depe_tde).getDesc_depe_tde());
            ficha.setTxt_comisionado(variableSistemaLocalService.getUsuario(usuario_usu).getNomb_cort_usu());
            //ficha.setFch_supervision(variableSistemaLocalService.getFecha_hora_sistema());
            

            ficha.setDepartamento_coar(establecimiento.getDes_departament() != null ? establecimiento.getDes_departament().trim() : null);
            ficha.setProvincia_coar(establecimiento.getDes_provincia() != null ? establecimiento.getDes_provincia().trim() : null);
            ficha.setDistrito_coar(establecimiento.getDes_distrito() != null ? establecimiento.getDes_distrito().trim() : null);
            ficha.setNom_entidad(establecimiento.getNom_entidad() != null ? establecimiento.getNom_entidad().trim() : null);

            ficha.setCodi_depa_dpt(establecimiento.getCoddptox() != null ? establecimiento.getCoddptox().trim() : null);
            ficha.setCodi_prov_tpr(establecimiento.getCodprovx() != null ? establecimiento.getCodprovx().trim() : null);
            ficha.setCodi_dist_tdi(establecimiento.getCoddistx() != null ? establecimiento.getCoddistx().trim() : null);

            listarEM = demuna_FichaService.listarEM();
        }

        // Buscar el establecimiento por el código único
        // Demuna_EstablecimientosEntity establecimiento = demuna_FichaService.buscarByCodEESS(cod_unico.trim());
        // Verificar si se encontró el establecimiento
        if (establecimiento != null && establecimiento.getId_sestablecmnt() != null) {
            System.out.println("El establecimiento se encontró y su id_sestablecmnt es válido.");
            // Obtener los valores necesarios del establecimiento y asignarlos a las variables

            ficha.setCod_unico(establecimiento.getCod_unico() != null ? establecimiento.getCod_unico().trim() : null);
            
          //  ficha.setTitular_entidad(establecimiento.getNom_autoridad() != null ? establecimiento.getNom_autoridad().trim() : null);
            ficha.setNom_entidad(establecimiento.getNom_entidad() != null ? establecimiento.getNom_entidad().trim() : null);
           ficha.setC_tipo_entidad(establecimiento.getC_tipo_entidad() != null ? establecimiento.getC_tipo_entidad().trim() : null);
//            ficha.setNum_celular(establecimiento.getTelefono() != null ? establecimiento.getTelefono().trim() : null);
//            ficha.setCorreo_demuna(establecimiento.getCorreo() != null ? establecimiento.getCorreo().trim() : null);
            ficha.setDepartamento_coar(establecimiento.getDes_departament() != null ? establecimiento.getDes_departament().trim() : null);
            ficha.setProvincia_coar(establecimiento.getDes_provincia() != null ? establecimiento.getDes_provincia().trim() : null);
            ficha.setDistrito_coar(establecimiento.getDes_distrito() != null ? establecimiento.getDes_distrito().trim() : null);
            
            ficha.setDireccion_coar(establecimiento.getDireccion() != null ? establecimiento.getDireccion().trim() : null);
          //  ficha.setDni_alcalde(establecimiento.getDni() != null ? establecimiento.getDni().trim() : null);
          //  ficha.setTelefono_alcalde(establecimiento.getTelefono() != null ? establecimiento.getTelefono().trim() : null);
         //   ficha.setCorreo_alcalde(establecimiento.getCorreo() != null ? establecimiento.getCorreo().trim() : null);
            // ficha.setDni_funcionario(establecimiento.getDni() != null ? establecimiento.getDni().trim() : null);

            ficha.setCodi_depa_dpt(establecimiento.getCoddptox() != null ? establecimiento.getCoddptox().trim() : null);
            ficha.setCodi_prov_tpr(establecimiento.getCodprovx() != null ? establecimiento.getCodprovx().trim() : null);
            ficha.setCodi_dist_tdi(establecimiento.getCoddistx() != null ? establecimiento.getCoddistx().trim() : null);

        }
        
       
       // ficha.setFlag_validar("0");

        model.addAttribute("listaDepartamento", listaDepartamento);
        model.addAttribute("listaProvincia", listaProvincia);
        model.addAttribute("listarEM", listarEM);
        model.addAttribute("ficha", ficha);

        model.addAttribute("educa_ficha_s4_3", new Educa_Ficha_S4_3Entity());
        model.addAttribute("educa_ficha_s5_1", new Educa_Ficha_S5_1Entity());
        model.addAttribute("educa_ficha_s5_2", new Educa_Ficha_S5_2Entity());
        
        model.addAttribute("educa_ficha_s5_4", new Educa_Ficha_S5_4Entity());
        model.addAttribute("educa_ficha_s5_5", new Educa_Ficha_S5_5Entity());
        model.addAttribute("educa_ficha_s5_6", new Educa_Ficha_S5_6Entity());
        model.addAttribute("educa_ficha_s5_7", new Educa_Ficha_S5_7Entity());
        model.addAttribute("educa_ficha_s5_8", new Educa_Ficha_S5_8Entity());
        model.addAttribute("educa_ficha_s5_9", new Educa_Ficha_S5_9Entity());
        model.addAttribute("educa_ficha_s5_10", new Educa_Ficha_S5_10Entity());
        model.addAttribute("educa_ficha_s5_31", new Educa_Ficha_S5_31Entity());
        return "gestioncoar/usuario/FormularioFichasDemuna";
    }
   

   
   
//    }
    @RequestMapping("/dp/ficha/formulario/ajaxBuscarDistritos")
    public String ajaxBuscarDistritos(Model model, @RequestParam("codi_depa_dpt") String codi_depa_dpt, @RequestParam("codi_prov_tpr") String codi_prov_tpr) {

        List<XubigeoEntity> listaDistrito = new ArrayList<>();

        listaDistrito.add(new XubigeoEntity(new XubigeoEntityPk("", "", ""), "-- SELECCIONAR --"));

        try {

            listaDistrito.addAll(demuna_FichaService.findAllDistrito(codi_depa_dpt, codi_prov_tpr));

        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

        model.addAttribute("listaDistrito", listaDistrito);

        return "gestioncoar/usuario/FormularioFichasDemuna :: frac_distrito";
    }

    @RequestMapping("/dp/ficha/formulario/ajaxBuscarMunicipalidades")
    public String ajaxBuscarMunicipalidades(Model model, @RequestParam("codi_depa_dpt") String codi_depa_dpt,
            @RequestParam("codi_prov_tpr") String codi_prov_tpr,
            @RequestParam(value = "codi_dist_tdi", required = false) String codi_dist_tdi) {

        System.out.println("Código de departamento recibido: " + codi_depa_dpt);
        System.out.println("Código de provincia recibido: " + codi_prov_tpr);
        System.out.println("Código de distrito recibido: " + codi_dist_tdi);

        List<Demuna_EstablecimientosEntity> listaMunicipalidades = new ArrayList<>();

        listaMunicipalidades.add(new Demuna_EstablecimientosEntity(("--SELECCIONAR--"), "-- SELECCIONAR --"));
//listaMunicipalidades.add(new Demuna_EstablecimientosEntity("nom_entidad", "cod_unico", "nom_autoridad", "telefono", "correo", "nresolu", "coddistx", "-- SELECCIONAR --"));

        try {
            if (codi_dist_tdi == null || codi_dist_tdi.isEmpty()) {
                listaMunicipalidades.addAll(demuna_FichaService.findMunicipalidadesByDepartamento(codi_depa_dpt, codi_prov_tpr));
            } else {
                listaMunicipalidades.addAll(demuna_FichaService.findMunicipalidadesByDepartamentoAndProvinciaAndDistrito(codi_depa_dpt, codi_prov_tpr, codi_dist_tdi));
            }

            System.out.println("Resultados de la consulta: " + listaMunicipalidades);
        } catch (DataAccessException e) {
            logger.error("Error de acceso a datos: " + e.getMessage(), e);
            return "error";
        } catch (ServiceException e) {
            logger.error("Error en el servicio: " + e.getMessage(), e);
            return "error";
        } catch (Exception e) {
            logger.error("Error inesperado: " + e.getMessage(), e);
            return "error";
        }

        model.addAttribute("listaMunicipalidades", listaMunicipalidades);

        return "gestioncoar/usuario/FormularioFichasDemuna :: frac_municipalidades";
    }

    @RequestMapping("/dp/ficha/formulario/ajaxBuscarCodUnico")
    @ResponseBody
    public Map<String, Object> ajaxBuscarCodUnico(@RequestParam("cod_unico") String cod_unico) {
        Map<String, Object> response = new HashMap<>();
        System.out.println("Valor del cod_unico: " + cod_unico);
        try {
            // Verificar si el código único existe en la base de datos
            int count = demuna_ficharepository.existeCodUnico(cod_unico.trim());

            // Agregar el resultado a la respuesta
            boolean existe = count > 0;
            response.put("existe", existe);
            response.put("mensaje", existe ? "El código único ya existe" : "El código único no existe");
        } catch (Exception e) {
            // Manejar cualquier excepción y agregar un mensaje de error a la respuesta
            response.put("error", true);
            response.put("mensaje", "Ocurrió un error al buscar el código único: " + e.getMessage());
        }

        return response;
    }

//    @RequestMapping("/dp/ficha/formulario/ajaxBuscarEESS")
//    @ResponseBody
//    public Map ajaxBuscarEESS(Model model,
//            @RequestParam("cod_unico") String cod_unico) {
//
//        Map<String, Object> elemento = new HashMap();
//
//        XubigeoEntity departamento = null;
//        XubigeoEntity provincia = null;
//        XubigeoEntity distrito = null;
//        String c_tipo_entidad = "";
//        Integer id_sestablecmnt = null;
//        String nom_alcalde = "";
//        String titular_entidad = "";
//        String nom_defensor = "";
//        String num_celular = "";
//
//        String departamento_educa = "";
//        String provincia_educa = "";
//        String distrito_educa = "";
//        String correo_demuna = "";
//        String nom_entidad = "";
//        String ndocumento = "";
//        //  String tipo_ficha = "";
//        // String tip_depe_eess = "";
//        // String tip_eess = ""; //AGREGADO
//
//        try {
//
//            Demuna_EstablecimientosEntity establecimiento = demuna_FichaService.buscarByCodEESSficha1(cod_unico.trim());
//
//            if (establecimiento != null && establecimiento.getCod_unico() != null) {
//
//                departamento_educa = establecimiento.getDes_departament() != null ? establecimiento.getDes_departament().trim() : "";
//                provincia_educa = establecimiento.getDes_provincia() != null ? establecimiento.getDes_provincia().trim() : "";
//                distrito_educa = establecimiento.getDes_distrito() != null ? establecimiento.getDes_distrito().trim() : "";
//                nom_entidad = establecimiento.getNom_entidad() != null ? establecimiento.getNom_entidad().trim() : "";
//                c_tipo_entidad = establecimiento.getC_tipo_entidad() != null ? establecimiento.getC_tipo_entidad().trim() : "";
//                id_sestablecmnt = establecimiento.getId_sestablecmnt();
//            }
//
//        } catch (Exception e) {
//            logger.error("Error: " + e.getMessage());
//            e.printStackTrace();
//        }
//
//        elemento.put("id_sestablecmnt", id_sestablecmnt);
//        elemento.put("departamento_educa", departamento_educa);
//        elemento.put("provincia_educa", provincia_educa);
//        elemento.put("distrito_educa", distrito_educa);
//        elemento.put("nom_entidad", nom_entidad);
//        elemento.put("c_tipo_entidad", c_tipo_entidad);
//        return elemento;
//    }
    /////////////////////////////////////////////////////////////////////
    @RequestMapping(value = "/dp/usuario/ficha/guardarFicha", method = {RequestMethod.POST, RequestMethod.GET})
    public String guardarFicha(Model model, @ModelAttribute("ficha") Demuna_FichaEntity ficha, HttpSession httpSession) {
            System.out.println("ennn");
            
                System.out.println("ID de ficha recibido: " + ficha.getId_ficha());

System.out.println("Datos recibidos: " + ficha);
        List<XubigeoEntity> listaDepartamento = null;
        List<XubigeoEntity> listaProvincia = null;
        List<XubigeoEntity> listaDistrito = null;
        List<Demuna_EstablecimientosEntity> listaMunicipalidades = null;
        List<Demuna_EstablecimientosEntity> listarEM = null;
String usr_archivo = variableSistemaService.userID().trim().toUpperCase();
        String usuario_usu = "";
        String codi_depe_tde = "";

        Date fecha_hora = null;
        String msg_modal = "";
        String txt_btn_guardado_parcial = "";
        boolean flag_duplicado = false;
        
  
    
        try {

            String rol_usuario = (String) httpSession.getAttribute("rol_usuario");
            txt_btn_guardado_parcial = ficha.getTxt_btn_guardado_parcial();

            System.out.println("J:" + ficha.getTxt_btn_guardado_parcial());
            System.out.println("h:" + txt_btn_guardado_parcial);

            if (ficha.getEstado() == null || ficha.getEstado().equals("I")) {

                if (!ficha.isFlag_guardado_parcial()) {

                    ficha.setEstado("C");
                }
            } else {
                ficha.setEstado("C");

            }

            usuario_usu = variableSistemaService.userID().trim().toUpperCase();
            fecha_hora = variableSistemaLocalService.getFecha_hora_sistema();
            if (rol_usuario.equals(Constantes.ROL_COMISIONADO)) {
                codi_depe_tde = variableSistemaLocalService.dependencia_fisica_personal(usuario_usu.trim());
            }

            if (ficha.getCod_unico() != null) {
                ficha.setCod_unico(ficha.getCod_unico().trim());
            }

            if (ficha.isFlag_guardado_parcial()) {

                switch (ficha.getTxt_btn_guardado_parcial()) {
                    case "btn_guardar_sec_1":

                        if (ficha.getId_ficha() == null) {
                            //  if (ficha.getCod_unico() == null) {

                            List<Demuna_FichaEntity> listaDemunadAux = demuna_FichaService.buscarFichaByCodigoUnico(ficha.getCod_unico().trim());
                            System.out.println("Se encontraron " + listaDemunadAux.size() + " registros para el código único proporcionado.");

                            if (listaDemunadAux.isEmpty()) {
                                ficha.setId_ficha(demuna_FichaService.generarIdFicha());

                                ficha.setUsu_registro(usuario_usu);
                                ficha.setFch_registro(fecha_hora);
                                if (rol_usuario.equals(Constantes.ROL_COMISIONADO)) {
                                    ficha.setCodi_depe_tde(codi_depe_tde);
                                }
                                demuna_FichaService.guardarFicha(ficha);
                                //Crear las otras secciones
                                Demuna_Ficha_S2Entity coar_ficha_s2 = new Demuna_Ficha_S2Entity();
                                Demuna_Ficha_S3Entity coar_ficha_s3 = new Demuna_Ficha_S3Entity();
                                Demuna_Ficha_S4Entity coar_ficha_s4 = new Demuna_Ficha_S4Entity();
                                Demuna_Ficha_S5Entity coar_ficha_s5 = new Demuna_Ficha_S5Entity();
                                Demuna_Ficha_S6Entity coar_ficha_s6 = new Demuna_Ficha_S6Entity();
                                Demuna_Ficha_S7Entity coar_ficha_s7 = new Demuna_Ficha_S7Entity();
            
             
                                coar_ficha_s2.setId_ficha_s2(ficha.getId_ficha());
                                coar_ficha_s2.setId_ficha(ficha.getId_ficha());
                                coar_ficha_s2.setUsu_registro(usuario_usu);
                                coar_ficha_s2.setFch_registro(fecha_hora);

                                coar_ficha_s3.setId_ficha_s3(ficha.getId_ficha());
                                coar_ficha_s3.setId_ficha(ficha.getId_ficha());
                                coar_ficha_s3.setUsu_registro(usuario_usu);
                                coar_ficha_s3.setFch_registro(fecha_hora);

                                coar_ficha_s4.setId_ficha_s4(ficha.getId_ficha());
                                coar_ficha_s4.setId_ficha(ficha.getId_ficha());
                                coar_ficha_s4.setUsu_registro(usuario_usu);
                                coar_ficha_s4.setFch_registro(fecha_hora);

                                coar_ficha_s5.setId_ficha_s5(ficha.getId_ficha());
                                coar_ficha_s5.setId_ficha(ficha.getId_ficha());
                                coar_ficha_s5.setUsu_registro(usuario_usu);
                                coar_ficha_s5.setFch_registro(fecha_hora);

                                coar_ficha_s6.setId_ficha_s6(ficha.getId_ficha());
                                coar_ficha_s6.setId_ficha(ficha.getId_ficha());
                                coar_ficha_s6.setUsu_registro(usuario_usu);
                                coar_ficha_s6.setFch_registro(fecha_hora);

                                coar_ficha_s7.setId_ficha_s7(ficha.getId_ficha());
                                coar_ficha_s7.setId_ficha(ficha.getId_ficha());
                                coar_ficha_s7.setUsu_registro(usuario_usu);
                                coar_ficha_s7.setFch_registro(fecha_hora);
                                
                

                                
                                demuna_FichaService.guardarFichaS2(coar_ficha_s2);
                                demuna_FichaService.guardarFichaS3(coar_ficha_s3);
                                demuna_FichaService.guardarFichaS4(coar_ficha_s4);
                                demuna_FichaService.guardarFichaS5(coar_ficha_s5);
                                demuna_FichaService.guardarFichaS6(coar_ficha_s6);
                                demuna_FichaService.guardarFichaS7(coar_ficha_s7);
                                
        
                               

                            } else {
                                flag_duplicado = true;
                            }

                        } else {
                            ficha.setUsu_actualiza(usuario_usu);
                            ficha.setFch_actualiza(fecha_hora);
                            demuna_FichaService.guardarFicha(ficha);

                        }

                        break;
                    
                    case "btn_guardar_sec_2":

                        if (ficha.getCoar_ficha_s2().getId_ficha_s2() == null) {
                            System.out.println("entro aqui btn_guardar_sec_2: genera nuevo id_ficha" + ficha.getCoar_ficha_s2().getId_ficha_s2());
                            ficha.getCoar_ficha_s2().setId_ficha_s2(demuna_FichaService.generarIdFichaS2());
                            ficha.getCoar_ficha_s2().setId_ficha(ficha.getId_ficha());
                            ficha.getCoar_ficha_s2().setUsu_registro(usuario_usu);
                            ficha.getCoar_ficha_s2().setFch_registro(fecha_hora);

                        } else {
                            ficha.getCoar_ficha_s2().setUsu_actualiza(usuario_usu);
                            ficha.getCoar_ficha_s2().setFch_actualiza(fecha_hora);
                            System.out.println("entro aqui btn_guardar_sec_2: actualiza nuevo id_ficha");
                        }

                        demuna_FichaService.guardarFichaS2(ficha.getCoar_ficha_s2());

                        break;

                    case "btn_guardar_sec_3":
                        System.out.println("xxx");
                        if (ficha.getCoar_ficha_s3().getId_ficha_s3() == null) {
                            System.out.println("eee");
                            ficha.getCoar_ficha_s3().setId_ficha_s3(demuna_FichaService.generarIdFichaS3());
                            ficha.getCoar_ficha_s3().setId_ficha(ficha.getId_ficha());
                            ficha.getCoar_ficha_s3().setUsu_registro(usuario_usu);
                            ficha.getCoar_ficha_s3().setFch_registro(fecha_hora);
                            System.out.println("entro aqui btn_guardar_sec_3: genera nuevo id_ficha");
                        } else {
                            System.out.println("rrrr");
                            ficha.getCoar_ficha_s3().setUsu_actualiza(usuario_usu);
                            ficha.getCoar_ficha_s3().setFch_actualiza(fecha_hora);
                            System.out.println("entro aqui btn_guardar_sec_3: actualiza nuevo id_ficha");
                        }

                        demuna_FichaService.guardarFichaS3(ficha.getCoar_ficha_s3());

                        break;
                    case "btn_guardar_sec_4":
                        if (ficha.getCoar_ficha_s4().getId_ficha_s4() == null) {

                            ficha.getCoar_ficha_s4().setId_ficha_s4(demuna_FichaService.generarIdFichaS4());
                            ficha.getCoar_ficha_s4().setId_ficha(ficha.getId_ficha());
                            ficha.getCoar_ficha_s4().setUsu_registro(usuario_usu);
                            ficha.getCoar_ficha_s4().setFch_registro(fecha_hora);

                        } else {

                            ficha.getCoar_ficha_s4().setUsu_actualiza(usuario_usu);
                            ficha.getCoar_ficha_s4().setFch_actualiza(fecha_hora);
                        }

                        demuna_FichaService.guardarFichaS4(ficha.getCoar_ficha_s4());
                        break;
                    case "btn_guardar_sec_5":
                        if (ficha.getCoar_ficha_s5().getId_ficha_s5() == null) {

                            ficha.getCoar_ficha_s5().setId_ficha_s5(demuna_FichaService.generarIdFichaS5());
                            ficha.getCoar_ficha_s5().setId_ficha(ficha.getId_ficha());
                            ficha.getCoar_ficha_s5().setUsu_registro(usuario_usu);
                            ficha.getCoar_ficha_s5().setFch_registro(fecha_hora);
                        } else {

                            ficha.getCoar_ficha_s5().setUsu_actualiza(usuario_usu);
                            ficha.getCoar_ficha_s5().setFch_actualiza(fecha_hora);
                        }

                        demuna_FichaService.guardarFichaS5(ficha.getCoar_ficha_s5());
                        break;
                    case "btn_guardar_sec_6":
                        if (ficha.getCoar_ficha_s6().getId_ficha_s6() == null) {

                            ficha.getCoar_ficha_s6().setId_ficha_s6(demuna_FichaService.generarIdFichaS6());
                            ficha.getCoar_ficha_s6().setId_ficha(ficha.getId_ficha());
                            ficha.getCoar_ficha_s6().setUsu_registro(usuario_usu);
                            ficha.getCoar_ficha_s6().setFch_registro(fecha_hora);
                        } else {

                            ficha.getCoar_ficha_s6().setUsu_actualiza(usuario_usu);
                            ficha.getCoar_ficha_s6().setFch_actualiza(fecha_hora);
                        }

                        demuna_FichaService.guardarFichaS6(ficha.getCoar_ficha_s6());
                        break;
                    case "btn_guardar_sec_7":
                        if (ficha.getCoar_ficha_s7().getId_ficha_s7() == null) {

                            ficha.getCoar_ficha_s7().setId_ficha_s7(demuna_FichaService.generarIdFichaS7());
                            ficha.getCoar_ficha_s7().setId_ficha(ficha.getId_ficha());
                            ficha.getCoar_ficha_s7().setUsu_registro(usuario_usu);
                            ficha.getCoar_ficha_s7().setFch_registro(fecha_hora);
                        } else {

                            ficha.getCoar_ficha_s7().setUsu_actualiza(usuario_usu);
                            ficha.getCoar_ficha_s7().setFch_actualiza(fecha_hora);
                        }

                        demuna_FichaService.guardarFichaS7(ficha.getCoar_ficha_s7());
                        break;
                    
                    
                    default:
                        throw new AssertionError();
                }

            } else {

                demuna_FichaService.guardarFicha(ficha);
                demuna_FichaService.guardarFichaS2(ficha.getCoar_ficha_s2());
                demuna_FichaService.guardarFichaS3(ficha.getCoar_ficha_s3());
                demuna_FichaService.guardarFichaS4(ficha.getCoar_ficha_s4());
                demuna_FichaService.guardarFichaS5(ficha.getCoar_ficha_s5());
                demuna_FichaService.guardarFichaS6(ficha.getCoar_ficha_s6());
                demuna_FichaService.guardarFichaS7(ficha.getCoar_ficha_s7());
                
             
        

            }

            listaDepartamento = demuna_FichaService.findAllDepartamento();
            listaProvincia = demuna_FichaService.findAllProvincia(ficha.getCodi_depa_dpt());
            listaMunicipalidades = demuna_FichaService.findMunicipalidadesByDepartamento(ficha.getCodi_depa_dpt(), ficha.getCodi_prov_tpr());
            listaDistrito = demuna_FichaService.findAllDistrito(ficha.getCodi_depa_dpt(), ficha.getCodi_prov_tpr());
            listarEM = demuna_FichaService.listarEM();

            if (flag_duplicado) {
                msg_modal = "La Demuna seleccionada ya se encuetra registrada. Por favor seleccionar otra entidad";
            } else {

                ficha = demuna_FichaService.getFichaByIdFicha(ficha.getId_ficha());
                
                ficha.setCoar_ficha_s2(demuna_FichaService.getFichaS2ByIdFicha(ficha.getId_ficha()));
                ficha.setCoar_ficha_s3(demuna_FichaService.getFichaS3ByIdFicha(ficha.getId_ficha()));
                ficha.setCoar_ficha_s4(demuna_FichaService.getFichaS4ByIdFicha(ficha.getId_ficha()));
                ficha.setCoar_ficha_s5(demuna_FichaService.getFichaS5ByIdFicha(ficha.getId_ficha()));
                ficha.setCoar_ficha_s6(demuna_FichaService.getFichaS6ByIdFicha(ficha.getId_ficha()));
                ficha.setCoar_ficha_s7(demuna_FichaService.getFichaS7ByIdFicha(ficha.getId_ficha()));
                
           
               

                if (ficha.getEstado().equals("I")) {
                    msg_modal = "Sus respuestas han sido registradas correctamente.";
                } else {
                    msg_modal = "Su ficha ha sido registrada correctamente.";
                }
            }

            ficha.setFlag_modal("S");
            ficha.setMsg_modal(msg_modal);
            ficha.setFlag_guardado_parcial(false);
            ficha.setTxt_btn_guardado_parcial(txt_btn_guardado_parcial);

        } catch (Exception e) {
            ficha.setFlag_modal("S");
            ficha.setMsg_modal("Muchas Gracias por su participación");
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

       
       

        model.addAttribute("ficha", ficha);
//        model.addAttribute("listarDependenciaEESS", listarDependenciaEESS);
//        model.addAttribute("listarCategoriaEESS", listarCategoriaEESS);
        model.addAttribute("listaMunicipalidades", listaMunicipalidades);
        model.addAttribute("listaDepartamento", listaDepartamento);
        model.addAttribute("listaProvincia", listaProvincia);
        model.addAttribute("listaDistrito", listaDistrito);
        model.addAttribute("listarEM", listarEM);
        
        model.addAttribute("educa_ficha_s4_3", new Educa_Ficha_S4_3Entity());
        model.addAttribute("lista_s4_3_preguntas", demuna_FichaService.listarS4_3ByIdFicha(ficha.getId_ficha()));
        
        model.addAttribute("educa_ficha_s5_1", new Educa_Ficha_S5_1Entity());
        model.addAttribute("lista_s5_1_preguntas", demuna_FichaService.listarS5_1ByIdFicha(ficha.getId_ficha()));
        
        model.addAttribute("educa_ficha_s5_2", new Educa_Ficha_S5_2Entity());
        model.addAttribute("lista_s5_2_preguntas", demuna_FichaService.listarS5_2ByIdFicha(ficha.getId_ficha()));

       
        
        model.addAttribute("educa_ficha_s5_4", new Educa_Ficha_S5_4Entity());

        model.addAttribute("educa_ficha_s5_5", new Educa_Ficha_S5_5Entity());

        model.addAttribute("educa_ficha_s5_6", new Educa_Ficha_S5_6Entity());

        model.addAttribute("educa_ficha_s5_7", new Educa_Ficha_S5_7Entity());
        
        model.addAttribute("educa_ficha_s5_8", new Educa_Ficha_S5_8Entity());
        
        model.addAttribute("educa_ficha_s5_9", new Educa_Ficha_S5_9Entity());
        
         model.addAttribute("educa_ficha_s5_10", new Educa_Ficha_S5_10Entity());
        
           model.addAttribute("educa_ficha_s5_31", new Educa_Ficha_S5_31Entity());
        return "gestioncoar/usuario/FormularioFichasDemuna";
    }

    
    
    
    /////////////////////////////////////////////////////////////////////
    @RequestMapping(value = "/dp/usuario/ficha/editarFichaEspecialista", method = {RequestMethod.POST, RequestMethod.GET})
public String editarFichaEspecialista(Model model, @RequestParam("id_ficha") Integer id_ficha, HttpSession httpSession) {

    // Verificar si el usuario tiene el rol "ROL_ESPECIALISTA"
    String rolEspecialista = (String) httpSession.getAttribute("rol_especialista");
    if (!"ROL_ESPECIALISTA".equals(rolEspecialista)) {
        // Redirigir o manejar el caso de acceso denegado
        return "redirect:/403";
    }
     String codi_depe_tde = "";
        System.out.print("id_ficha: " + id_ficha);
//        List<ParametroDTO> listarCategoriaEESS = null;
//        List<ParametroDTO> listarDependenciaEESS = null;
String usr_archivo = variableSistemaService.userID().trim().toUpperCase();

        List<XubigeoEntity> listaDepartamento = null;
        List<XubigeoEntity> listaProvincia = null;
        List<XubigeoEntity> listaDistrito = null;
        List<Demuna_EstablecimientosEntity> listarEM = null;
        List<Demuna_EstablecimientosEntity> listaMunicipalidades = null;
        

        Demuna_FichaEntity ficha = null;

        try {
            ficha = demuna_FichaService.getFichaByIdFicha(id_ficha);
            String rol_usuario = (String) httpSession.getAttribute("rol_especialista");
            String usuario_usu = variableSistemaService.userID();

            System.out.println("rol_usuario: " + rol_usuario);
            if (ficha != null) {
                System.out.println("ficha: " + ficha);
                //  String codi_depe_tde = variableSistemaLocalService.dependencia_fisica_personal(usuario_usu);
                if (rol_usuario.equals(Constantes.ROL_ESPECIALISTA)) {//Comisionado
                    ficha.setTxt_desc_depe_tde(variableSistemaLocalService.getDependencia(variableSistemaLocalService.dependencia_fisica_personal(usuario_usu)).getDesc_depe_tde());
                    ficha.setTxt_comisionado(variableSistemaLocalService.getUsuario(usuario_usu).getNomb_cort_usu());
                 //   ficha.setFch_supervision(variableSistemaLocalService.getFecha_hora_sistema());
                     ficha.setFch_supervision(ficha.getFch_supervision() != null ? ficha.getFch_supervision(): null);
                }

                System.out.println("ccccc: ");
       
                ficha.setCoar_ficha_s2(demuna_FichaService.getFichaS2ByIdFicha(id_ficha));
                ficha.setCoar_ficha_s3(demuna_FichaService.getFichaS3ByIdFicha(id_ficha));
                ficha.setCoar_ficha_s4(demuna_FichaService.getFichaS4ByIdFicha(id_ficha));
                ficha.setCoar_ficha_s5(demuna_FichaService.getFichaS5ByIdFicha(id_ficha));
                ficha.setCoar_ficha_s6(demuna_FichaService.getFichaS6ByIdFicha(id_ficha));
                ficha.setCoar_ficha_s7(demuna_FichaService.getFichaS7ByIdFicha(id_ficha));
                
 
                
               


                //  ficha.setTipo_ficha(demuna_FichaService.buscarByCodEESS(ficha.getCod_unico()).getTipo_ficha()); //AGREGADO ccortez 20240409
//            listarDependenciaEESS = educa_FichaService.listarDependenciaEESS();
//            listarCategoriaEESS = educa_FichaService.listarCategoriaEESS();
                listaDepartamento = demuna_FichaService.findAllDepartamento();
                listaProvincia = demuna_FichaService.findAllProvincia(ficha.getCodi_depa_dpt());
                listaMunicipalidades = demuna_FichaService.findMunicipalidadesByDepartamento(ficha.getCodi_depa_dpt(), ficha.getCodi_prov_tpr());
                listaDistrito = demuna_FichaService.findAllDistrito(ficha.getCodi_depa_dpt(), ficha.getCodi_prov_tpr());
                listarEM = demuna_FichaService.listarEM();

            }
//            }
        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }
        if (ficha != null && ficha.getCoar_ficha() != null) {

            
        }
        model.addAttribute("ficha", ficha);
//        model.addAttribute("listarDependenciaEESS", listarDependenciaEESS);
//        model.addAttribute("listarCategoriaEESS", listarCategoriaEESS);
        model.addAttribute("listaMunicipalidades", listaMunicipalidades);
        model.addAttribute("listaDepartamento", listaDepartamento);
        model.addAttribute("listaProvincia", listaProvincia);
        model.addAttribute("listaDistrito", listaDistrito);
        model.addAttribute("listarEM", listarEM);
        
   
       

        model.addAttribute("educa_ficha_s4_3", new Educa_Ficha_S4_3Entity());
        model.addAttribute("lista_s4_3_preguntas", demuna_FichaService.listarS4_3ByIdFicha(ficha.getId_ficha()));
        
         model.addAttribute("educa_ficha_s5_1", new Educa_Ficha_S5_1Entity());
        model.addAttribute("lista_s5_1_preguntas", demuna_FichaService.listarS5_1ByIdFicha(ficha.getId_ficha()));
        
         model.addAttribute("educa_ficha_s5_2", new Educa_Ficha_S5_2Entity());
        model.addAttribute("lista_s5_2_preguntas", demuna_FichaService.listarS5_2ByIdFicha(ficha.getId_ficha()));
        
       
        
        model.addAttribute("educa_ficha_s5_4", new Educa_Ficha_S5_4Entity());
        
         model.addAttribute("educa_ficha_s5_5", new Educa_Ficha_S5_5Entity());
        
         model.addAttribute("educa_ficha_s5_6", new Educa_Ficha_S5_6Entity());
        
         model.addAttribute("educa_ficha_s5_7", new Educa_Ficha_S5_7Entity());
        
        model.addAttribute("educa_ficha_s5_8", new Educa_Ficha_S5_8Entity());
        
        model.addAttribute("educa_ficha_s5_9", new Educa_Ficha_S5_9Entity());
        
          model.addAttribute("educa_ficha_s5_10", new Educa_Ficha_S5_10Entity());
        
           model.addAttribute("educa_ficha_s5_31", new Educa_Ficha_S5_31Entity());
        
        if (ficha != null && ficha.getCoar_ficha() != null) {
            model.addAttribute("txt_desc_depe_tde", ficha.getCoar_ficha().getTxt_desc_depe_tde());
            model.addAttribute("txt_comisionado", ficha.getCoar_ficha().getTxt_comisionado());
            model.addAttribute("fch_supervision", ficha.getCoar_ficha().getFch_supervision());
        }


        return "gestioncoar/usuario/FormularioFichasDemuna";
    }

////////////////////////////////////////////////////////////////////////
//////////////////////////////EDITAR////////////////////////////////////
    @RequestMapping(value = "/dp/usuario/ficha/editarFichas", method = {RequestMethod.POST, RequestMethod.GET})
    public String editarFicha(Model model, @RequestParam("id_ficha") Integer id_ficha, HttpSession httpSession) {

        String codi_depe_tde = "";
        System.out.print("id_ficha: " + id_ficha);
//        List<ParametroDTO> listarCategoriaEESS = null;
//        List<ParametroDTO> listarDependenciaEESS = null;
String usr_archivo = variableSistemaService.userID().trim().toUpperCase();

        List<XubigeoEntity> listaDepartamento = null;
        List<XubigeoEntity> listaProvincia = null;
        List<XubigeoEntity> listaDistrito = null;
        List<Demuna_EstablecimientosEntity> listarEM = null;
        List<Demuna_EstablecimientosEntity> listaMunicipalidades = null;
        


        Demuna_FichaEntity ficha = null;

        try {
            ficha = demuna_FichaService.getFichaByIdFicha(id_ficha);
            String rol_usuario = (String) httpSession.getAttribute("rol_usuario");
            String usuario_usu = variableSistemaService.userID();

            System.out.println("rol_usuario: " + rol_usuario);
            if (ficha != null) {
                System.out.println("ficha: " + ficha);
                //  String codi_depe_tde = variableSistemaLocalService.dependencia_fisica_personal(usuario_usu);
                if (rol_usuario.equals(Constantes.ROL_COMISIONADO)) {//Comisionado
                    ficha.setTxt_desc_depe_tde(variableSistemaLocalService.getDependencia(variableSistemaLocalService.dependencia_fisica_personal(usuario_usu)).getDesc_depe_tde());
                    ficha.setTxt_comisionado(variableSistemaLocalService.getUsuario(usuario_usu).getNomb_cort_usu());
                  //  ficha.setFch_supervision(variableSistemaLocalService.getFecha_hora_sistema());
                   ficha.setFch_supervision(ficha.getFch_supervision() != null ? ficha.getFch_supervision(): null);
                }

                System.out.println("ccccc: ");
       
                ficha.setCoar_ficha_s2(demuna_FichaService.getFichaS2ByIdFicha(id_ficha));
                ficha.setCoar_ficha_s3(demuna_FichaService.getFichaS3ByIdFicha(id_ficha));
                ficha.setCoar_ficha_s4(demuna_FichaService.getFichaS4ByIdFicha(id_ficha));
                ficha.setCoar_ficha_s5(demuna_FichaService.getFichaS5ByIdFicha(id_ficha));
                ficha.setCoar_ficha_s6(demuna_FichaService.getFichaS6ByIdFicha(id_ficha));
                ficha.setCoar_ficha_s7(demuna_FichaService.getFichaS7ByIdFicha(id_ficha));
             
                
              

                //  ficha.setTipo_ficha(demuna_FichaService.buscarByCodEESS(ficha.getCod_unico()).getTipo_ficha()); //AGREGADO ccortez 20240409
//            listarDependenciaEESS = educa_FichaService.listarDependenciaEESS();
//            listarCategoriaEESS = educa_FichaService.listarCategoriaEESS();
                listaDepartamento = demuna_FichaService.findAllDepartamento();
                listaProvincia = demuna_FichaService.findAllProvincia(ficha.getCodi_depa_dpt());
                listaMunicipalidades = demuna_FichaService.findMunicipalidadesByDepartamento(ficha.getCodi_depa_dpt(), ficha.getCodi_prov_tpr());
                listaDistrito = demuna_FichaService.findAllDistrito(ficha.getCodi_depa_dpt(), ficha.getCodi_prov_tpr());
                listarEM = demuna_FichaService.listarEM();

            }
//            }
        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }
        if (ficha != null && ficha.getCoar_ficha() != null) {

            
        }
        model.addAttribute("ficha", ficha);
//        model.addAttribute("listarDependenciaEESS", listarDependenciaEESS);
//        model.addAttribute("listarCategoriaEESS", listarCategoriaEESS);
        model.addAttribute("listaMunicipalidades", listaMunicipalidades);
        model.addAttribute("listaDepartamento", listaDepartamento);
        model.addAttribute("listaProvincia", listaProvincia);
        model.addAttribute("listaDistrito", listaDistrito);
        model.addAttribute("listarEM", listarEM);
        
       
        
        model.addAttribute("educa_ficha_s4_3", new Educa_Ficha_S4_3Entity());
        model.addAttribute("lista_s4_3_preguntas", demuna_FichaService.listarS4_3ByIdFicha(ficha.getId_ficha()));
        
         model.addAttribute("educa_ficha_s5_1", new Educa_Ficha_S5_1Entity());
        model.addAttribute("lista_s5_1_preguntas", demuna_FichaService.listarS5_1ByIdFicha(ficha.getId_ficha()));
        
         model.addAttribute("educa_ficha_s5_2", new Educa_Ficha_S5_2Entity());
        model.addAttribute("lista_s5_2_preguntas", demuna_FichaService.listarS5_2ByIdFicha(ficha.getId_ficha()));
        
       
         model.addAttribute("educa_ficha_s5_6", new Educa_Ficha_S5_6Entity());
        
         model.addAttribute("educa_ficha_s5_7", new Educa_Ficha_S5_7Entity());
        
        model.addAttribute("educa_ficha_s5_8", new Educa_Ficha_S5_8Entity());
        
        model.addAttribute("educa_ficha_s5_9", new Educa_Ficha_S5_9Entity());
        
          model.addAttribute("educa_ficha_s5_10", new Educa_Ficha_S5_10Entity());
        
           model.addAttribute("educa_ficha_s5_31", new Educa_Ficha_S5_31Entity());
        
        if (ficha != null && ficha.getCoar_ficha() != null) {
            model.addAttribute("txt_desc_depe_tde", ficha.getCoar_ficha().getTxt_desc_depe_tde());
            model.addAttribute("txt_comisionado", ficha.getCoar_ficha().getTxt_comisionado());
            model.addAttribute("fch_supervision", ficha.getCoar_ficha().getFch_supervision());
        }


        return "gestioncoar/usuario/FormularioFichasDemuna";
    }

    



    @RequestMapping("/dp/ficha/formulario/ajaxBuscarByDNI")
    @ResponseBody
    public Map ajaxBuscarByDNI(Model model,
            @RequestParam("num_dni") String num_dni) {

        Map<String, Object> elemento = new HashMap();

        String nom_funcionario = "";

        String nombre = "";
        String ape_pat = "";
        String ape_mat = "";

        try {

            Optional<Matm_personaEntity> optionalEntity = matm_persona_repository.findById(num_dni.trim());

            if (optionalEntity.isPresent()) {

                Matm_personaEntity matm_personamodel = optionalEntity.get();

                nombre = matm_personamodel.getPrenom_inscrito() != null ? matm_personamodel.getPrenom_inscrito().trim().toUpperCase() : "";
                ape_pat = matm_personamodel.getAp_primer() != null ? matm_personamodel.getAp_primer().trim().toUpperCase() : "";
                ape_mat = matm_personamodel.getAp_segundo() != null ? matm_personamodel.getAp_segundo().trim().toUpperCase() : "";

                nom_funcionario = nombre + " " + ape_pat + " " + ape_mat;
            }

        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

        elemento.put("nom_funcionario", nom_funcionario);

        return elemento;

    }

    @RequestMapping("/dp/ficha/formulario/ajaxBuscarByDNIdefensor")
    @ResponseBody
    public Map ajaxBuscarByDNIdefensor(Model model,
            @RequestParam("num_dni") String num_dni) {

        Map<String, Object> elemento = new HashMap();

        String nom_defensor = "";

        String nombre = "";
        String ape_pat = "";
        String ape_mat = "";

        try {

            Optional<Matm_personaEntity> optionalEntity = matm_persona_repository.findById(num_dni.trim());

            if (optionalEntity.isPresent()) {

                Matm_personaEntity matm_personamodel = optionalEntity.get();

                nombre = matm_personamodel.getPrenom_inscrito() != null ? matm_personamodel.getPrenom_inscrito().trim().toUpperCase() : "";
                ape_pat = matm_personamodel.getAp_primer() != null ? matm_personamodel.getAp_primer().trim().toUpperCase() : "";
                ape_mat = matm_personamodel.getAp_segundo() != null ? matm_personamodel.getAp_segundo().trim().toUpperCase() : "";

                nom_defensor = nombre + " " + ape_pat + " " + ape_mat;
            }

        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

        elemento.put("nom_defensor", nom_defensor);

        return elemento;

    }
    
    
    
    @RequestMapping("/dp/ficha/formulario/ajaxBuscarSec4_3")
    public String ajaxBuscarSec4_3(Model model,
            @RequestParam(value = "id", required = false) Integer id,
            @RequestParam("id_ficha") Integer id_ficha) {

        Educa_Ficha_S4_3Entity educa_ficha_s4_3 = null;

        try {

            if (id == null) {//nuevo
                educa_ficha_s4_3 = new Educa_Ficha_S4_3Entity();
                educa_ficha_s4_3.setEduca_ficha_s4_3pk(new Educa_Ficha_S4_3PkEntity(id, id_ficha));
            } else {//buscar
                educa_ficha_s4_3 = demuna_FichaService.getFicha_S4_3ById(new Educa_Ficha_S4_3PkEntity(id, id_ficha));
            }

        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

        model.addAttribute("lista_preguntas", demuna_FichaService.listarPregunta());
        model.addAttribute("educa_ficha_s4_3", educa_ficha_s4_3);

        return "gestioncoar/usuario/FormularioFichasDemuna :: data_form_mdl_sec4_3";
    }
    
    
    @RequestMapping("/dp/ficha/formulario/ajaxGuardarMdlSec4_3")
    public String ajaxGuardarMdlSec4_3(Model model, @RequestBody Educa_Ficha_S4_3Entity educa_ficha_s4_3) {

        try {

            String usuario_usu = variableSistemaService.userID().trim().toUpperCase();
            Date fecha_hora = variableSistemaLocalService.getFecha_hora_sistema();

            if (educa_ficha_s4_3.getEduca_ficha_s4_3pk() != null && educa_ficha_s4_3.getEduca_ficha_s4_3pk().getId() != null) {//actualiza

                educa_ficha_s4_3.setUsu_actualiza(usuario_usu);
                educa_ficha_s4_3.setFch_actualiza(fecha_hora);
            } else {//inserta
                educa_ficha_s4_3.getEduca_ficha_s4_3pk().setId(demuna_FichaService.generarIdS4_3(educa_ficha_s4_3.getEduca_ficha_s4_3pk().getId_ficha()));
                educa_ficha_s4_3.setUsu_registro(usuario_usu);
                educa_ficha_s4_3.setFch_registro(fecha_hora);
                
                 System.out.println("inserta");
            }

            demuna_FichaService.guardarFichaS4_3(educa_ficha_s4_3);
        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

        model.addAttribute("lista_s4_3_preguntas", demuna_FichaService.listarS4_3ByIdFicha(educa_ficha_s4_3.getEduca_ficha_s4_3pk().getId_ficha()));

        return "gestioncoar/usuario/FormularioFichasDemuna :: data_sec4_3";
    }

    @RequestMapping("/dp/ficha/formulario/ajaxEliminarModalSec4_3")
    public String ajaxEliminarModalSec4_3(Model model,
            @RequestParam("id") Integer id,
            @RequestParam("id_ficha") Integer id_ficha) {

        try {

            demuna_FichaService.eliminarFichaS4_3(new Educa_Ficha_S4_3PkEntity(id, id_ficha));

        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

        model.addAttribute("lista_s4_3_preguntas", demuna_FichaService.listarS4_3ByIdFicha(id_ficha));

        return "gestioncoar/usuario/FormularioFichasDemuna :: data_sec4_3";
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    @RequestMapping("/dp/ficha/formulario/ajaxBuscarSec5_1")
    public String ajaxBuscarSec5_1(Model model,
            @RequestParam(value = "id", required = false) Integer id,
            @RequestParam("id_ficha") Integer id_ficha) {

        Educa_Ficha_S5_1Entity educa_ficha_s5_1 = null;

        try {

            if (id == null) {//nuevo
                educa_ficha_s5_1 = new Educa_Ficha_S5_1Entity();
                educa_ficha_s5_1.setEduca_ficha_s5_1pk(new Educa_Ficha_S5_1PkEntity(id, id_ficha));
            } else {//buscar
                educa_ficha_s5_1 = demuna_FichaService.getFicha_S5_1ById(new Educa_Ficha_S5_1PkEntity(id, id_ficha));
            }

        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

        model.addAttribute("lista_preguntas", demuna_FichaService.listarPregunta());
        model.addAttribute("educa_ficha_s5_1", educa_ficha_s5_1);

        return "gestioncoar/usuario/FormularioFichasDemuna :: data_form_mdl_sec5_1";
    }
    
    
    @RequestMapping("/dp/ficha/formulario/ajaxGuardarMdlSec5_1")
    public String ajaxGuardarMdlSec5_1(Model model, @RequestBody Educa_Ficha_S5_1Entity educa_ficha_s5_1) {

        try {

            String usuario_usu = variableSistemaService.userID().trim().toUpperCase();
            Date fecha_hora = variableSistemaLocalService.getFecha_hora_sistema();

            if (educa_ficha_s5_1.getEduca_ficha_s5_1pk() != null && educa_ficha_s5_1.getEduca_ficha_s5_1pk().getId() != null) {//actualiza

                educa_ficha_s5_1.setUsu_actualiza(usuario_usu);
                educa_ficha_s5_1.setFch_actualiza(fecha_hora);
            } else {//inserta
                educa_ficha_s5_1.getEduca_ficha_s5_1pk().setId(demuna_FichaService.generarIdS5_1(educa_ficha_s5_1.getEduca_ficha_s5_1pk().getId_ficha()));
                educa_ficha_s5_1.setUsu_registro(usuario_usu);
                educa_ficha_s5_1.setFch_registro(fecha_hora);
                
                 System.out.println("inserta");
            }

            demuna_FichaService.guardarFichaS5_1(educa_ficha_s5_1);
        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

        model.addAttribute("lista_s5_1_preguntas", demuna_FichaService.listarS5_1ByIdFicha(educa_ficha_s5_1.getEduca_ficha_s5_1pk().getId_ficha()));

        return "gestioncoar/usuario/FormularioFichasDemuna :: data_sec5_1";
    }

    @RequestMapping("/dp/ficha/formulario/ajaxEliminarModalSec5_1")
    public String ajaxEliminarModalSec5_1(Model model,
            @RequestParam("id") Integer id,
            @RequestParam("id_ficha") Integer id_ficha) {

        try {

            demuna_FichaService.eliminarFichaS5_1(new Educa_Ficha_S5_1PkEntity(id, id_ficha));

        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

        model.addAttribute("lista_s5_1_preguntas", demuna_FichaService.listarS5_1ByIdFicha(id_ficha));

        return "gestioncoar/usuario/FormularioFichasDemuna :: data_sec5_1";
    }
   
    
    
    ////////////////////////////////////////MANTENIMIENTO 5-2 EDIFICACIONES/////////////////////////////////////////////////////////////
    @RequestMapping("/dp/ficha/formulario/ajaxBuscarSec5_2")
public String ajaxBuscarSec5_2(Model model,
        @RequestParam(value = "id", required = false) Integer id,
        @RequestParam("id_ficha") Integer id_ficha) {

    Educa_Ficha_S5_2Entity educa_ficha_s5_2 = null;

    try {

        if (id == null) { // nuevo
            educa_ficha_s5_2 = new Educa_Ficha_S5_2Entity();
            educa_ficha_s5_2.setEduca_ficha_s5_2pk(new Educa_Ficha_S5_2PkEntity(id, id_ficha));
        } else { // buscar
            educa_ficha_s5_2 = demuna_FichaService.getFicha_S5_2ById(new Educa_Ficha_S5_2PkEntity(id, id_ficha));
        }

    } catch (Exception e) {
        logger.error("Error: " + e.getMessage());
        e.printStackTrace();
    }

    model.addAttribute("lista_preguntas", demuna_FichaService.listarPregunta());
    model.addAttribute("educa_ficha_s5_2", educa_ficha_s5_2);

    return "gestioncoar/usuario/FormularioFichasDemuna :: data_form_mdl_sec5_2";
}

@RequestMapping("/dp/ficha/formulario/ajaxGuardarMdlSec5_2")
public String ajaxGuardarMdlSec5_2(Model model, @RequestBody Educa_Ficha_S5_2Entity educa_ficha_s5_2) {

    try {

        String usuario_usu = variableSistemaService.userID().trim().toUpperCase();
        Date fecha_hora = variableSistemaLocalService.getFecha_hora_sistema();

        if (educa_ficha_s5_2.getEduca_ficha_s5_2pk() != null && educa_ficha_s5_2.getEduca_ficha_s5_2pk().getId() != null) { // actualiza

            educa_ficha_s5_2.setUsu_actualiza(usuario_usu);
            educa_ficha_s5_2.setFch_actualiza(fecha_hora);
        } else { // inserta
            educa_ficha_s5_2.getEduca_ficha_s5_2pk().setId(demuna_FichaService.generarIdS5_2(educa_ficha_s5_2.getEduca_ficha_s5_2pk().getId_ficha()));
            educa_ficha_s5_2.setUsu_registro(usuario_usu);
            educa_ficha_s5_2.setFch_registro(fecha_hora);
            
            System.out.println("inserta");
        }

        demuna_FichaService.guardarFichaS5_2(educa_ficha_s5_2);
    } catch (Exception e) {
        logger.error("Error: " + e.getMessage());
        e.printStackTrace();
    }

    model.addAttribute("lista_s5_2_preguntas", demuna_FichaService.listarS5_2ByIdFicha(educa_ficha_s5_2.getEduca_ficha_s5_2pk().getId_ficha()));
    return "gestioncoar/usuario/FormularioFichasDemuna :: data_sec5_2";
}

@RequestMapping("/dp/ficha/formulario/ajaxEliminarModalSec5_2")
public String ajaxEliminarModalSec5_2(Model model,
        @RequestParam("id") Integer id,
        @RequestParam("id_ficha") Integer id_ficha) {

    try {

        demuna_FichaService.eliminarFichaS5_2(new Educa_Ficha_S5_2PkEntity(id, id_ficha));

    } catch (Exception e) {
        logger.error("Error: " + e.getMessage());
        e.printStackTrace();
    }

    model.addAttribute("lista_s5_2_preguntas", demuna_FichaService.listarS5_2ByIdFicha(id_ficha));

    return "gestioncoar/usuario/FormularioFichasDemuna :: data_sec5_2";
}
////////////////////FIN MANTENIMIENTO EDIFACIONES/////////////////////////////////////////////////////////////




 





  //////////////////////////MONITOREO FICHA1////////////////////////////

    @RequestMapping("/dp/especialista/ficha/listarSupervisionFichas")
    public String listarSeguimientoFichas(Model model, HttpSession httpSession) {

        List<Demuna_FichaEntity> listaFichas = null;

        List<String> listaRegiones = null;
        List<GepCuadroComparativoDTO> listaCuadro = null;
        System.out.println("Entro");
        try {

            listaRegiones = demuna_FichaService.listarRegiones();

            listaFichas = demuna_FichaService.listarSeguimientoFichas("00", "00");

        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

        model.addAttribute("listaCuadro", listaCuadro);
        model.addAttribute("listaRegiones", listaRegiones);
        model.addAttribute("listaFichas", listaFichas);

        return "gestioncoar/especialista/ListaFichasSupervision";
    }


    @RequestMapping("/dp/especialista/ficha/ajaxBuscarFichasSupervision")
    public String ajaxBuscarFichasSupervision(Model model,
            @RequestParam("codi_depa_dpt") String codi_depa_dpt,
            @RequestParam("estado") String estado) {
        System.out.println("listficha:");

        System.out.println("departamento recibido: " + codi_depa_dpt);
        System.out.println("Estado recibido: " + estado);

        List<Demuna_FichaEntity> listaFichas = null;

        try {

            listaFichas = demuna_FichaService.listarSeguimientoFichas(codi_depa_dpt, estado);

            System.out.println("listaficha:" + listaFichas);
        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

        model.addAttribute("listaFichas", listaFichas);

        return "gestioncoar/especialista/ListaFichasSupervision :: data_lista_fichas";
    }
    
       @RequestMapping("/dp/especialista/ficha/listarMonitoreoFichas")
//    @PreAuthorize("hasRole('ROLE_ESPECIALISTA') ")
    public String listarMonitoreoFichas(Model model, HttpSession httpSession) {

        List<GepCuadroComparativoDTO> listaCuadro = null;
        GepCuadroComparativoDTO totalCuadro = null;

        double total_porcent = 0.0;
        int total_registro = 0;
        int total_colegio = 0;
        String txt_total_porcent = "";

        try {

            listaCuadro = demuna_FichaService.listarCuadroRegistro();

            totalCuadro = demuna_FichaService.listarTotalCuadroRegistro();

            for (GepCuadroComparativoDTO cuadro : listaCuadro) {
//                
                total_registro = total_registro + cuadro.getDir_comp();
                total_colegio = total_colegio + cuadro.getTot_cole();
            }

            if (listaCuadro.size() > 0) {
                total_porcent = (double) total_registro / total_colegio;
                total_porcent = total_porcent * 100;

//                DecimalFormat df = new DecimalFormat("#.##");
//                df.setRoundingMode(RoundingMode.DOWN);
//                txt_total_porcent = df.format(total_porcent) + " % ";
            }

        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

        model.addAttribute("listaCuadro", listaCuadro);
        model.addAttribute("totalCuadro", totalCuadro);
        model.addAttribute("total_porcent", total_porcent);
        model.addAttribute("txt_total_porcent", txt_total_porcent);

        return "gestioncoar/especialista/ListaFichasMonitoreo";
    }

  //////////////////////////FIN MONITOREO FICHA1////////////////////////////




////////////////VALIDACION////////////////////
     @RequestMapping("/dp/ficha/formulario/validarParcial")
    public String validarParcial(Model model, @RequestParam("id_ficha") Integer id_ficha,
            @RequestParam("id_sec_x") Integer id_sec_x,
            @RequestParam("sec_x") String sec_x) {

        System.out.println("id_ficha: " + id_ficha);
        System.out.println("id_sec_x: " + id_sec_x);
        System.out.println("sec_x: " + sec_x);

        Demuna_FichaEntity ficha = new Demuna_FichaEntity();

        String usuario_usu = variableSistemaService.userID().trim().toUpperCase();
        try {

            ficha = demuna_FichaService.validarSecX(id_ficha, id_sec_x, sec_x, usuario_usu);

        } catch (Exception e) {
            e.printStackTrace();
        }

        model.addAttribute("ficha", ficha);

        return "gestioncoar/usuario/FormularioFichasDemuna :: data_" + sec_x + "_alert_validado";
    }

    @RequestMapping("/dp/ficha/formulario/ajaxValidarFicha")
    public String ajaxValidarFicha(Model model,
            @RequestParam(value = "id_ficha", required = false) Integer id_ficha) {

        Demuna_FichaEntity ficha = null;

        try {

            ficha = demuna_FichaService.getFichaByIdFicha(id_ficha);

        } catch (Exception e) {
            e.printStackTrace();
        }

        model.addAttribute("ficha", ficha);

        return "gestioncoar/usuario/FormularioFichasDemuna :: data_validar_ficha_demuna";
    }
    
    
    
    
//    ////////////////////////////////////////MANTENIMIENTO s1- 1.2 /////////////////////////////////////////////////////////////
//    
//@RequestMapping("/dp/ficha/formulario/ajaxBuscarSec1_2")
//public String ajaxBuscarSec1_2(Model model,
//        @RequestParam(value = "id", required = false) Integer id,
//        @RequestParam("id_ficha") Integer id_ficha) {
//    
//   System.out.println("Entro a ajaxBuscarSec1_2: ");
//   
//    Coar_Ficha_S1_P1_2Entity coar_ficha_s1_p1_2 = null;
//
//    try {
//
//        if (id == null) { // nuevo
//            coar_ficha_s1_p1_2 = new Coar_Ficha_S1_P1_2Entity();
//            coar_ficha_s1_p1_2.setCoar_ficha_s1_p1_2pk(new Coar_Ficha_S1_P1_2PkEntity(id, id_ficha));
//        } else { // buscar
//            coar_ficha_s1_p1_2 = demuna_FichaService.getFicha_S1_2ById(new Coar_Ficha_S1_P1_2PkEntity(id, id_ficha));
//        }
//
//    } catch (Exception e) {
//        logger.error("Error: " + e.getMessage());
//        e.printStackTrace();
//    }
//
//    model.addAttribute("lista_preguntas", demuna_FichaService.listarPregunta());
//    model.addAttribute("coar_ficha_s1_p1_2", coar_ficha_s1_p1_2);
//
//    return "gestioncoar/usuario/FormularioFichasDemuna :: data_form_mdl_sec1_2";
//}
//
//@RequestMapping("/dp/ficha/formulario/ajaxGuardarMdlSec1_2")
//public String ajaxGuardarMdlSec1_2(Model model, @RequestBody Coar_Ficha_S1_P1_2Entity coar_ficha_s1_p1_2) {
//    
//       System.out.println("Entro a ajaxGuardarMdlSec1_2");
//    try {
//
//        String usuario_usu = variableSistemaService.userID().trim().toUpperCase();
//        Date fecha_hora = variableSistemaLocalService.getFecha_hora_sistema();
//
//        if (coar_ficha_s1_p1_2.getCoar_ficha_s1_p1_2pk() != null && coar_ficha_s1_p1_2.getCoar_ficha_s1_p1_2pk().getId() != null) { // actualiza
//            System.out.println("Entro update  ajaxGuardarMdlSec1_2");
//            coar_ficha_s1_p1_2.setUsu_actualiza(usuario_usu);
//            coar_ficha_s1_p1_2.setFch_actualiza(fecha_hora);
//        } else { // inserta
//             System.out.println("Entro inserta ajaxGuardarMdlSec1_2");
//            coar_ficha_s1_p1_2.getCoar_ficha_s1_p1_2pk().setId(demuna_FichaService.generarIdS1_2(coar_ficha_s1_p1_2.getCoar_ficha_s1_p1_2pk().getId_ficha()));
//            coar_ficha_s1_p1_2.setUsu_registro(usuario_usu);
//            coar_ficha_s1_p1_2.setFch_registro(fecha_hora);
//            
//            System.out.println("inserta");
//        }
//
//        demuna_FichaService.guardarFichaS1_2(coar_ficha_s1_p1_2);
//        System.out.println("Entro guardó  ajaxGuardarMdlSec1_2");
//    } catch (Exception e) {
//        logger.error("Error: " + e.getMessage());
//        e.printStackTrace();
//    }
//
//    model.addAttribute("lista_s1_2_preguntas", demuna_FichaService.listarS1_2ByIdFicha(coar_ficha_s1_p1_2.getCoar_ficha_s1_p1_2pk().getId_ficha()));
//
//    return "gestioncoar/usuario/FormularioFichasDemuna :: data_sec1_2";
//}
//
//@RequestMapping("/dp/ficha/formulario/ajaxEliminarModalSec1_2")
//public String ajaxEliminarModalSec1_2(Model model,
//        @RequestParam("id") Integer id,
//        @RequestParam("id_ficha") Integer id_ficha) {
//
//    try {
//
//        demuna_FichaService.eliminarFichaS1_2(new Coar_Ficha_S1_P1_2PkEntity(id, id_ficha));
//
//    } catch (Exception e) {
//        logger.error("Error: " + e.getMessage());
//        e.printStackTrace();
//    }
//
//    model.addAttribute("lista_s1_2_preguntas", demuna_FichaService.listarS1_2ByIdFicha(id_ficha));
//
//    return "gestioncoar/usuario/FormularioFichasDemuna :: data_sec1_2";
//}

////////////////////FIN MANTENIMIENTO SE/////////////////////////////////////////////////////////////
    
    





}

