package com.dp.gestioncoar.controller;

//package com.dp.gestionsalud.controller;
//
//import com.dp.gestionsalud.dto.ParametroDTO;
//import com.dp.gestionsalud.entity.Matm_personaEntity;
//import com.dp.gestionsalud.entity.Salud_EstablecimientosEntity;
//import com.dp.gestionsalud.entity.Salud_FichaEntity;
//import com.dp.gestionsalud.entity.Salud_Ficha_S10Entity;
//import com.dp.gestionsalud.entity.Salud_Ficha_S11Entity;
//import com.dp.gestionsalud.entity.Salud_Ficha_S12Entity;
//import com.dp.gestionsalud.entity.Salud_Ficha_S13Entity;
//import com.dp.gestionsalud.entity.Salud_Ficha_S14Entity;
//import com.dp.gestionsalud.entity.Salud_Ficha_S15Entity;
//import com.dp.gestionsalud.entity.Salud_Ficha_S16Entity;
//import com.dp.gestionsalud.entity.Salud_Ficha_S2Entity;
//import com.dp.gestionsalud.entity.Salud_Ficha_S2_EspecialidadEntity;
//import com.dp.gestionsalud.entity.Salud_Ficha_S2_P5Entity;
//import com.dp.gestionsalud.entity.Salud_Ficha_S3Entity;
//import com.dp.gestionsalud.entity.Salud_Ficha_S4Entity;
//import com.dp.gestionsalud.entity.Salud_Ficha_S5Entity;
//import com.dp.gestionsalud.entity.Salud_Ficha_S6Entity;
//import com.dp.gestionsalud.entity.Salud_Ficha_S7Entity;
//import com.dp.gestionsalud.entity.Salud_Ficha_S8Entity;
//import com.dp.gestionsalud.entity.Salud_Ficha_S9Entity;
//import com.dp.gestionsalud.entity.TdependenciasEntity;
//import com.dp.gestionsalud.entity.XubigeoEntity;
//import com.dp.gestionsalud.entity.XubigeoEntityPk;
//import com.dp.gestionsalud.repository.Matm_persona_Repository;
//import com.dp.gestionsalud.service.Salud_FichaService;
//import com.dp.gestionsalud.service.UsuarioService;
//import com.dp.gestionsalud.service.VariableSistemaLocalService;
//import com.dp.gestionsalud.service.VariableSistemaService;
//import com.dp.gestionsalud.util.Constantes;
//import java.util.ArrayList;
//import java.util.Date;
//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//import java.util.Optional;
//import javax.servlet.http.HttpSession;
//import org.apache.logging.log4j.LogManager;
//import org.apache.logging.log4j.Logger;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.ModelAttribute;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;


//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.ResponseBody;
//
//@Controller
//public class FichasControllerx {
//
//    private static final Logger logger = LogManager.getLogger(FichasControllerx.class);
//
//    @Autowired
//    VariableSistemaLocalService variableSistemaLocalService;
//
//    @Autowired
//    VariableSistemaService variableSistemaService;
//
//    @Autowired
//    Salud_FichaService salud_FichaService;
//
//    @Autowired
//    UsuarioService usuarioService;
//
//    @Autowired
//    private Matm_persona_Repository matm_persona_repository;
//
//    @RequestMapping("/salud/usuario/ficha/listarFichas")
//    public String listarFichas(Model model, HttpSession httpSession) {
//
//        List<Salud_FichaEntity> listaFichasSalud = null;
//        List<TdependenciasEntity> listaOdsMods = null;
//
//        String usuario_usu = "";
//        String codi_depe_tde = "";
//        String esJefe = "";
//        String tipo_ficha = "01";
//        String cod_unico = "";
//
//        boolean flag_0022 = false;
//        boolean flag_14 = false;
//
//        try {
//
//            String rol_usuario = (String) httpSession.getAttribute("rol_usuario");
//
//            if (rol_usuario.equals(Constantes.ROL_COMISIONADO)) {
//
//                usuario_usu = variableSistemaService.userID().trim().toUpperCase();
//                codi_depe_tde = variableSistemaLocalService.dependencia_fisica_personal(usuario_usu);
//
//                esJefe = variableSistemaLocalService.esJefeOficina(usuario_usu.trim().toUpperCase());
//
//                if (esJefe.equals("SI")) {
//                    usuario_usu = "00";
//                }
//
////                listaFichasSalud = salud_FichaService.listarFichas(usuario_usu, codi_depe_tde);
//                usuario_usu = variableSistemaService.userID().trim().toUpperCase();
//
//                if (Constantes.GRUPO_1.contains(usuario_usu)) {
//                    cod_unico = Constantes.GRUPO_1_COD;
//                } else if (Constantes.GRUPO_2.contains(usuario_usu)) {
//                    cod_unico = Constantes.GRUPO_2_COD;
//                } else if (Constantes.GRUPO_3.contains(usuario_usu)) {
//                    cod_unico = Constantes.GRUPO_3_COD;
//                } else if (Constantes.GRUPO_4.contains(usuario_usu)) {
//                    cod_unico = Constantes.GRUPO_4_COD;
//                } else if (Constantes.GRUPO_5.contains(usuario_usu)) {
//                    cod_unico = Constantes.GRUPO_5_COD;
//                } else if (Constantes.GRUPO_6.contains(usuario_usu)) {
//                    cod_unico = Constantes.GRUPO_6_COD;
//                } else if (Constantes.GRUPO_7.contains(usuario_usu)) {
//                    cod_unico = Constantes.GRUPO_7_COD;
//                } else if (Constantes.GRUPO_8.contains(usuario_usu)) {
//                    cod_unico = Constantes.GRUPO_8_COD;
//                } else if (Constantes.GRUPO_9.contains(usuario_usu)) {
//                    cod_unico = Constantes.GRUPO_9_COD;
//                } else if (Constantes.GRUPO_10.contains(usuario_usu)) {
//                    cod_unico = Constantes.GRUPO_10_COD;
//                } else if (Constantes.GRUPO_11.contains(usuario_usu)) {
//                    cod_unico = Constantes.GRUPO_11_COD;
//                } else if (Constantes.GRUPO_12.contains(usuario_usu)) {
//                    cod_unico = Constantes.GRUPO_12_COD;
//                } else if (Constantes.GRUPO_13.contains(usuario_usu)) {
//                    cod_unico = Constantes.GRUPO_13_COD;
//                } else if (Constantes.GRUPO_14.contains(usuario_usu)) {
//                    flag_14 = true;
//                } else if (Constantes.GRUPO_15.contains(usuario_usu)) {
//                    cod_unico = Constantes.GRUPO_15_COD;
//                } else if (Constantes.GRUPO_16.contains(usuario_usu)) {
//                    cod_unico = Constantes.GRUPO_16_COD;
//                } else if (Constantes.GRUPO_17.contains(usuario_usu)) {
//                    cod_unico = Constantes.GRUPO_17_COD;
//                }
//
//                if (flag_14) {
//                    listaFichasSalud = salud_FichaService.listarFichasByCodUnico2();
//                } else {
//                    listaFichasSalud = salud_FichaService.listarFichasByCodUnico(cod_unico);
//                }
//
//            }
//
//        } catch (Exception e) {
//            logger.error("Error: " + e.getMessage());
//            e.printStackTrace();
//        }
//
//        model.addAttribute("listaOdsMods", listaOdsMods);
//        model.addAttribute("listaFichasSalud", listaFichasSalud);
//        model.addAttribute("flag_0022", flag_0022);
//
//        return "gestionsalud/usuario/ListaFicha";
//    }
//
//    @RequestMapping("/salud/usuario/ficha/insertarFichas")
//    public String insertarFichas(Model model, Salud_FichaEntity ficha, HttpSession httpSession) {
//
//        String usuario_usu = "";
//        String codi_depe_tde = "";
//        List<XubigeoEntity> listaDepartamento = new ArrayList<>();
//        List<ParametroDTO> listarCategoriaEESS = null;
//        List<ParametroDTO> listarDependenciaEESS = null;
//        List<Salud_EstablecimientosEntity> listarEESS_III_E = null;
//
//        try {
//
//            String rol_usuario = (String) httpSession.getAttribute("rol_usuario");
//
//            usuario_usu = variableSistemaService.userID().trim().toUpperCase();
//            codi_depe_tde = variableSistemaLocalService.dependencia_fisica_personal(usuario_usu);
//
//            ficha.setTxt_desc_depe_tde(variableSistemaLocalService.getDependencia(codi_depe_tde).getDesc_depe_tde());
//            ficha.setTxt_comisionado(variableSistemaLocalService.getUsuario(usuario_usu).getNomb_cort_usu());
//            ficha.setFch_supervision(variableSistemaLocalService.getFecha_hora_sistema());
//
//            listaDepartamento = salud_FichaService.findAllDepartamento();
//            listarDependenciaEESS = salud_FichaService.listarDependenciaEESS();
//            listarCategoriaEESS = salud_FichaService.listarCategoriaEESS();
//            listarEESS_III_E = salud_FichaService.ListarEESS_III_E();
//
//        } catch (Exception e) {
//            logger.error("Error: " + e.getMessage());
//            e.printStackTrace();
//        }
//
//        model.addAttribute("ficha", ficha);
//        model.addAttribute("listaDepartamento", listaDepartamento);
//        model.addAttribute("listarDependenciaEESS", listarDependenciaEESS);
//        model.addAttribute("listarCategoriaEESS", listarCategoriaEESS);
//        model.addAttribute("listarEESS_III_E", listarEESS_III_E);
//
//        return "gestionsalud/usuario/FormularioFichasSalud";
//    }
//
//    @RequestMapping("/salud/ficha/formulario/ajaxBuscarProvincias")
//    public String ajaxBuscarProvincias(Model model, @RequestParam("codi_depa_dpt") String codi_depa_dpt) {
//
//        List<XubigeoEntity> listaProvincia = new ArrayList<>();
//
//        listaProvincia.add(new XubigeoEntity(new XubigeoEntityPk("", "", ""), "-- SELECCIONAR --"));
//
//        try {
//
//            listaProvincia.addAll(salud_FichaService.findAllProvincia(codi_depa_dpt));
//
//        } catch (Exception e) {
//            logger.error("Error: " + e.getMessage());
//            e.printStackTrace();
//        }
//
//        model.addAttribute("listaProvincia", listaProvincia);
//
//        return "gestionsalud/usuario/FormularioFichasSalud :: frac_provincia";
//    }
//
//    @RequestMapping("/salud/ficha/formulario/ajaxBuscarDistritos")
//    public String ajaxBuscarDistritos(Model model, @RequestParam("codi_depa_dpt") String codi_depa_dpt, @RequestParam("codi_prov_tpr") String codi_prov_tpr) {
//
//        List<XubigeoEntity> listaDistrito = new ArrayList<>();
//
//        listaDistrito.add(new XubigeoEntity(new XubigeoEntityPk("", "", ""), "-- SELECCIONAR --"));
//
//        try {
//
//            listaDistrito.addAll(salud_FichaService.findAllDistrito(codi_depa_dpt, codi_prov_tpr));
//
//        } catch (Exception e) {
//            logger.error("Error: " + e.getMessage());
//            e.printStackTrace();
//        }
//
//        model.addAttribute("listaDistrito", listaDistrito);
//
//        return "gestionsalud/usuario/FormularioFichasSalud :: frac_distrito";
//    }
//
//    @RequestMapping(value = "/salud/usuario/ficha/guardarFicha", method = {RequestMethod.POST, RequestMethod.GET})
//    public String guardarFicha(Model model, @ModelAttribute("ficha") Salud_FichaEntity ficha, HttpSession httpSession) {
//
//        List<ParametroDTO> listarCategoriaEESS = null;
//        List<ParametroDTO> listarDependenciaEESS = null;
//        List<XubigeoEntity> listaDepartamento = null;
//        List<XubigeoEntity> listaProvincia = null;
//        List<XubigeoEntity> listaDistrito = null;
//        List<Salud_EstablecimientosEntity> listarEESS_III_E = null;
//        List<Salud_Ficha_S2_P5Entity> listarFichaEspMedicas = null;
//        List<Salud_Ficha_S2_P5Entity> listarFichaEspAdministrativas = null;
//        List<Salud_Ficha_S2_P5Entity> listarFichaEspOtrasProfesiones = null;
//        List<Salud_Ficha_S2_P5Entity> listarFichaEspOtros = null;
//
//        String usuario_usu = "";
//        String codi_depe_tde = "";
//        Date fecha_hora = null;
//        String msg_modal = "";
//        String txt_btn_guardado_parcial = "";
//        boolean flag_duplicado = false;
//
//        try {
//
//            String rol_usuario = (String) httpSession.getAttribute("rol_usuario");
//            txt_btn_guardado_parcial = ficha.getTxt_btn_guardado_parcial();
//
//            if (ficha.getEstado() == null || ficha.getEstado().equals("I")) {
//
//                if (!ficha.isFlag_guardado_parcial()) {
//
//                    ficha.setEstado("C");
//                }
//            } else {
//                ficha.setEstado("C");
//            }
//
//            usuario_usu = variableSistemaService.userID().trim().toUpperCase();
//            fecha_hora = variableSistemaLocalService.getFecha_hora_sistema();
//            codi_depe_tde = variableSistemaLocalService.dependencia_fisica_personal(usuario_usu.trim());
//
//            ficha.setCod_unico(ficha.getCod_unico().trim());
//
//            if (ficha.isFlag_guardado_parcial()) {
//
//                switch (ficha.getTxt_btn_guardado_parcial()) {
//                    case "btn_guardar_sec_1":
//
//                        if (ficha.getId_ficha() == null) {
//
//                            List<Salud_FichaEntity> listaSaludAux = salud_FichaService.buscarFichaByCodigoUnico(ficha.getCod_unico().trim());
//
//                            if (listaSaludAux.isEmpty()) {
//                                ficha.setId_ficha(salud_FichaService.generarIdFicha());
//
//                                ficha.setUsu_registro(usuario_usu);
//                                ficha.setFch_registro(fecha_hora);
//                                ficha.setCodi_depe_tde(codi_depe_tde);
//
//                                salud_FichaService.guardarFicha(ficha);
//
//                                //Crear las otras secciones
//                                Salud_Ficha_S2Entity salud_ficha_s2 = new Salud_Ficha_S2Entity();
//                                Salud_Ficha_S3Entity salud_ficha_s3 = new Salud_Ficha_S3Entity();
//                                Salud_Ficha_S4Entity salud_ficha_s4 = new Salud_Ficha_S4Entity();
//                                Salud_Ficha_S5Entity salud_ficha_s5 = new Salud_Ficha_S5Entity();
//                                Salud_Ficha_S6Entity salud_ficha_s6 = new Salud_Ficha_S6Entity();
//                                Salud_Ficha_S7Entity salud_ficha_s7 = new Salud_Ficha_S7Entity();
//                                Salud_Ficha_S8Entity salud_ficha_s8 = new Salud_Ficha_S8Entity();
//                                Salud_Ficha_S9Entity salud_ficha_s9 = new Salud_Ficha_S9Entity();
//                                Salud_Ficha_S10Entity salud_ficha_s10 = new Salud_Ficha_S10Entity();
//                                Salud_Ficha_S11Entity salud_ficha_s11 = new Salud_Ficha_S11Entity();
//                                Salud_Ficha_S12Entity salud_ficha_s12 = new Salud_Ficha_S12Entity();
//                                Salud_Ficha_S13Entity salud_ficha_s13 = new Salud_Ficha_S13Entity();
//                                Salud_Ficha_S14Entity salud_ficha_s14 = new Salud_Ficha_S14Entity();
//                                Salud_Ficha_S15Entity salud_ficha_s15 = new Salud_Ficha_S15Entity();
//                                Salud_Ficha_S16Entity salud_ficha_s16 = new Salud_Ficha_S16Entity();
//
//                                salud_ficha_s2.setId_ficha_s2(ficha.getId_ficha());
//                                salud_ficha_s2.setId_ficha(ficha.getId_ficha());
//                                salud_ficha_s2.setUsu_registro(usuario_usu);
//                                salud_ficha_s2.setFch_registro(fecha_hora);
//
//                                salud_ficha_s3.setId_ficha_s3(ficha.getId_ficha());
//                                salud_ficha_s3.setId_ficha(ficha.getId_ficha());
//                                salud_ficha_s3.setUsu_registro(usuario_usu);
//                                salud_ficha_s3.setFch_registro(fecha_hora);
//
//                                salud_ficha_s4.setId_ficha_s4(ficha.getId_ficha());
//                                salud_ficha_s4.setId_ficha(ficha.getId_ficha());
//                                salud_ficha_s4.setUsu_registro(usuario_usu);
//                                salud_ficha_s4.setFch_registro(fecha_hora);
//
//                                salud_ficha_s5.setId_ficha_s5(ficha.getId_ficha());
//                                salud_ficha_s5.setId_ficha(ficha.getId_ficha());
//                                salud_ficha_s5.setUsu_registro(usuario_usu);
//                                salud_ficha_s5.setFch_registro(fecha_hora);
//
//                                salud_ficha_s6.setId_ficha_s6(ficha.getId_ficha());
//                                salud_ficha_s6.setId_ficha(ficha.getId_ficha());
//                                salud_ficha_s6.setUsu_registro(usuario_usu);
//                                salud_ficha_s6.setFch_registro(fecha_hora);
//
//                                salud_ficha_s7.setId_ficha_s7(ficha.getId_ficha());
//                                salud_ficha_s7.setId_ficha(ficha.getId_ficha());
//                                salud_ficha_s7.setUsu_registro(usuario_usu);
//                                salud_ficha_s7.setFch_registro(fecha_hora);
//
//                                salud_ficha_s8.setId_ficha_s8(ficha.getId_ficha());
//                                salud_ficha_s8.setId_ficha(ficha.getId_ficha());
//                                salud_ficha_s8.setUsu_registro(usuario_usu);
//                                salud_ficha_s8.setFch_registro(fecha_hora);
//
//                                salud_ficha_s9.setId_ficha_s9(ficha.getId_ficha());
//                                salud_ficha_s9.setId_ficha(ficha.getId_ficha());
//                                salud_ficha_s9.setUsu_registro(usuario_usu);
//                                salud_ficha_s9.setFch_registro(fecha_hora);
//
//                                salud_ficha_s10.setId_ficha_s10(ficha.getId_ficha());
//                                salud_ficha_s10.setId_ficha(ficha.getId_ficha());
//                                salud_ficha_s10.setUsu_registro(usuario_usu);
//                                salud_ficha_s10.setFch_registro(fecha_hora);
//
//                                salud_ficha_s11.setId_ficha_s11(ficha.getId_ficha());
//                                salud_ficha_s11.setId_ficha(ficha.getId_ficha());
//                                salud_ficha_s11.setUsu_registro(usuario_usu);
//                                salud_ficha_s11.setFch_registro(fecha_hora);
//
//                                salud_ficha_s12.setId_ficha_s12(ficha.getId_ficha());
//                                salud_ficha_s12.setId_ficha(ficha.getId_ficha());
//                                salud_ficha_s12.setUsu_registro(usuario_usu);
//                                salud_ficha_s12.setFch_registro(fecha_hora);
//
//                                salud_ficha_s13.setId_ficha_s13(ficha.getId_ficha());
//                                salud_ficha_s13.setId_ficha(ficha.getId_ficha());
//                                salud_ficha_s13.setUsu_registro(usuario_usu);
//                                salud_ficha_s13.setFch_registro(fecha_hora);
//
//                                salud_ficha_s14.setId_ficha_s14(ficha.getId_ficha());
//                                salud_ficha_s14.setId_ficha(ficha.getId_ficha());
//                                salud_ficha_s14.setUsu_registro(usuario_usu);
//                                salud_ficha_s14.setFch_registro(fecha_hora);
//
//                                salud_ficha_s15.setId_ficha_s15(ficha.getId_ficha());
//                                salud_ficha_s15.setId_ficha(ficha.getId_ficha());
//                                salud_ficha_s15.setUsu_registro(usuario_usu);
//                                salud_ficha_s15.setFch_registro(fecha_hora);
//
//                                salud_ficha_s16.setId_ficha_s16(ficha.getId_ficha());
//                                salud_ficha_s16.setId_ficha(ficha.getId_ficha());
//                                salud_ficha_s16.setUsu_registro(usuario_usu);
//                                salud_ficha_s16.setFch_registro(fecha_hora);
//
//                                salud_FichaService.guardarFichaS2(salud_ficha_s2);
//                                salud_FichaService.guardarFichaS3(salud_ficha_s3);
//                                salud_FichaService.guardarFichaS4(salud_ficha_s4);
//                                salud_FichaService.guardarFichaS5(salud_ficha_s5);
//                                salud_FichaService.guardarFichaS6(salud_ficha_s6);
//                                salud_FichaService.guardarFichaS7(salud_ficha_s7);
//                                salud_FichaService.guardarFichaS8(salud_ficha_s8);
//                                salud_FichaService.guardarFichaS9(salud_ficha_s9);
//                                salud_FichaService.guardarFichaS10(salud_ficha_s10);
//                                salud_FichaService.guardarFichaS11(salud_ficha_s11);
//                                salud_FichaService.guardarFichaS12(salud_ficha_s12);
//                                salud_FichaService.guardarFichaS13(salud_ficha_s13);
//                                salud_FichaService.guardarFichaS14(salud_ficha_s14);
//                                salud_FichaService.guardarFichaS15(salud_ficha_s15);
//                                salud_FichaService.guardarFichaS16(salud_ficha_s16);
//
//                                /*Insertar S2 p2_5*/
//                                String tipo_ficha = salud_FichaService.buscarTipoFichaEstablecimiento(ficha.getCod_unico().trim());
//                                List<Salud_Ficha_S2_EspecialidadEntity> especialidades = new ArrayList<>();
//                                List<Salud_Ficha_S2_EspecialidadEntity> administrativas = new ArrayList<>();
//                                List<Salud_Ficha_S2_EspecialidadEntity> otras_profesiones = new ArrayList<>();
//                                List<Salud_Ficha_S2_EspecialidadEntity> otros = new ArrayList<>();
//
//                                switch (tipo_ficha) {
//                                    case "1":
//                                        especialidades = salud_FichaService.listarEspecialidadesNeurologicas("E");
//                                        administrativas = salud_FichaService.listarEspecialidadesNeurologicas("A");
//                                        otras_profesiones = salud_FichaService.listarEspecialidadesNeurologicas("P");
//                                        otros = salud_FichaService.listarEspecialidadesNeurologicas("O");
//                                        break;
//                                    case "2":
//                                        especialidades = salud_FichaService.listarEspecialidadesIncor("E");
//                                        administrativas = salud_FichaService.listarEspecialidadesIncor("A");
//                                        otras_profesiones = salud_FichaService.listarEspecialidadesIncor("P");
//                                        otros = salud_FichaService.listarEspecialidadesIncor("O");
//                                        break;
//
//                                    case "3":
//                                        especialidades = salud_FichaService.listarEspecialidadesNinio("E");
//                                        administrativas = salud_FichaService.listarEspecialidadesNinio("A");
//                                        otras_profesiones = salud_FichaService.listarEspecialidadesNinio("P");
//                                        otros = salud_FichaService.listarEspecialidadesNinio("O");
//                                        break;
//                                    case "4":
//                                        especialidades = salud_FichaService.listarEspecialidadesNeoplasicas("E");
//                                        administrativas = salud_FichaService.listarEspecialidadesNeoplasicas("A");
//                                        otras_profesiones = salud_FichaService.listarEspecialidadesNeoplasicas("P");
//                                        otros = salud_FichaService.listarEspecialidadesNeoplasicas("O");
//                                        break;
//                                    case "5":
//                                        especialidades = salud_FichaService.listarEspecialidadesOftalmologicas("E");
//                                        administrativas = salud_FichaService.listarEspecialidadesOftalmologicas("A");
//                                        otras_profesiones = salud_FichaService.listarEspecialidadesOftalmologicas("P");
//                                        otros = salud_FichaService.listarEspecialidadesOftalmologicas("O");
//                                        break;
//                                    case "6":
//                                        especialidades = salud_FichaService.listarEspecialidadesNoguchi("E");
//                                        administrativas = salud_FichaService.listarEspecialidadesNoguchi("A");
//                                        otras_profesiones = salud_FichaService.listarEspecialidadesNoguchi("P");
//                                        otros = salud_FichaService.listarEspecialidadesNoguchi("O");
//                                        break;
//                                    case "7":
//                                        especialidades = salud_FichaService.listarEspecialidadesMaternidad("E");
//                                        administrativas = salud_FichaService.listarEspecialidadesMaternidad("A");
//                                        otras_profesiones = salud_FichaService.listarEspecialidadesMaternidad("P");
//                                        otros = salud_FichaService.listarEspecialidadesMaternidad("O");
//                                        break;
//                                    case "8":
//                                        especialidades = salud_FichaService.listarEspecialidadesRebagliati("E");
//                                        administrativas = salud_FichaService.listarEspecialidadesRebagliati("A");
//                                        otras_profesiones = salud_FichaService.listarEspecialidadesRebagliati("P");
//                                        otros = salud_FichaService.listarEspecialidadesRebagliati("O");
//                                        break;
//                                    case "9":
//                                        especialidades = salud_FichaService.listarEspecialidadesRehabilitacion("E");
//                                        administrativas = salud_FichaService.listarEspecialidadesRehabilitacion("A");
//                                        otras_profesiones = salud_FichaService.listarEspecialidadesRehabilitacion("P");
//                                        otros = salud_FichaService.listarEspecialidadesRehabilitacion("O");
//                                        break;
//                                    default:
//                                    // Default secuencia de sentencias.
//                                }
//
//                                //Recorrer e insertar
//                                for (Salud_Ficha_S2_EspecialidadEntity especialidad : especialidades) {
//
//                                    Salud_Ficha_S2_P5Entity salud_ficha_s2_p5 = new Salud_Ficha_S2_P5Entity();
//                                    salud_ficha_s2_p5.setId_ficha_s2_p5(salud_FichaService.generarIdFichaS2P5());
//                                    salud_ficha_s2_p5.setId_ficha(ficha.getId_ficha());
//                                    salud_ficha_s2_p5.setUsu_registro(usuario_usu);
//                                    salud_ficha_s2_p5.setFch_registro(fecha_hora);
//                                    salud_ficha_s2_p5.setId_ficha_s2_esp(especialidad.getId_ficha_s2_esp());
//                                    salud_FichaService.guardarFichaS2P5(salud_ficha_s2_p5);
//
//                                }
//
//                                for (Salud_Ficha_S2_EspecialidadEntity administrativa : administrativas) {
//
//                                    Salud_Ficha_S2_P5Entity salud_ficha_s2_p5 = new Salud_Ficha_S2_P5Entity();
//                                    salud_ficha_s2_p5.setId_ficha_s2_p5(salud_FichaService.generarIdFichaS2P5());
//                                    salud_ficha_s2_p5.setId_ficha(ficha.getId_ficha());
//                                    salud_ficha_s2_p5.setUsu_registro(usuario_usu);
//                                    salud_ficha_s2_p5.setFch_registro(fecha_hora);
//                                    salud_ficha_s2_p5.setId_ficha_s2_esp(administrativa.getId_ficha_s2_esp());
//                                    salud_FichaService.guardarFichaS2P5(salud_ficha_s2_p5);
//
//                                }
//                                for (Salud_Ficha_S2_EspecialidadEntity otras_profesion : otras_profesiones) {
//                                    Salud_Ficha_S2_P5Entity salud_ficha_s2_p5 = new Salud_Ficha_S2_P5Entity();
//                                    salud_ficha_s2_p5.setId_ficha_s2_p5(salud_FichaService.generarIdFichaS2P5());
//                                    salud_ficha_s2_p5.setId_ficha(ficha.getId_ficha());
//                                    salud_ficha_s2_p5.setUsu_registro(usuario_usu);
//                                    salud_ficha_s2_p5.setFch_registro(fecha_hora);
//                                    salud_ficha_s2_p5.setId_ficha_s2_esp(otras_profesion.getId_ficha_s2_esp());
//                                    salud_FichaService.guardarFichaS2P5(salud_ficha_s2_p5);
//
//                                }
//                                for (Salud_Ficha_S2_EspecialidadEntity otro : otros) {
//                                    Salud_Ficha_S2_P5Entity salud_ficha_s2_p5 = new Salud_Ficha_S2_P5Entity();
//                                    salud_ficha_s2_p5.setId_ficha_s2_p5(salud_FichaService.generarIdFichaS2P5());
//                                    salud_ficha_s2_p5.setId_ficha(ficha.getId_ficha());
//                                    salud_ficha_s2_p5.setUsu_registro(usuario_usu);
//                                    salud_ficha_s2_p5.setFch_registro(fecha_hora);
//                                    salud_ficha_s2_p5.setId_ficha_s2_esp(otro.getId_ficha_s2_esp());
//                                    salud_FichaService.guardarFichaS2P5(salud_ficha_s2_p5);
//
//                                }
//                                /* Fin insertar S2 P5*/
//
//                            } else {
//                                flag_duplicado = true;
//                            }
//
//                        } else {
//                            ficha.setUsu_actualiza(usuario_usu);
//                            ficha.setFch_actualiza(fecha_hora);
//                            salud_FichaService.guardarFicha(ficha);
//
//                            /*SI cambia cod_unico*/
//                            
//                            //if (ficha.getCod_unico_ant() != ficha.getCod_unico()) {
//                            if(!ficha.getCod_unico_ant().trim().equals(ficha.getCod_unico().trim())){
//                                Salud_Ficha_S2_P5Entity s2_p2_5 = new Salud_Ficha_S2_P5Entity();
//                                int id_ficha_num = ficha.getId_ficha();
//
//                                //Borrar especialidades
//                                salud_FichaService.borrarFichaS2P5(id_ficha_num);
//
//                                //Insertar nuevas especialidades
//                                /*Insertar S2 p2_5*/
//                                String tipo_ficha = salud_FichaService.buscarTipoFichaEstablecimiento(ficha.getCod_unico());
//                                List<Salud_Ficha_S2_EspecialidadEntity> especialidades = new ArrayList<>();
//                                List<Salud_Ficha_S2_EspecialidadEntity> administrativas = new ArrayList<>();
//                                List<Salud_Ficha_S2_EspecialidadEntity> otras_profesiones = new ArrayList<>();
//                                List<Salud_Ficha_S2_EspecialidadEntity> otros = new ArrayList<>();
//
//                                switch (tipo_ficha) {
//                                    case "1":
//                                        especialidades = salud_FichaService.listarEspecialidadesNeurologicas("E");
//                                        administrativas = salud_FichaService.listarEspecialidadesNeurologicas("A");
//                                        otras_profesiones = salud_FichaService.listarEspecialidadesNeurologicas("P");
//                                        otros = salud_FichaService.listarEspecialidadesNeurologicas("O");
//                                        break;
//                                    case "2":
//                                        especialidades = salud_FichaService.listarEspecialidadesIncor("E");
//                                        administrativas = salud_FichaService.listarEspecialidadesIncor("A");
//                                        otras_profesiones = salud_FichaService.listarEspecialidadesIncor("P");
//                                        otros = salud_FichaService.listarEspecialidadesIncor("O");
//                                        break;
//
//                                    case "3":
//                                        especialidades = salud_FichaService.listarEspecialidadesNinio("E");
//                                        administrativas = salud_FichaService.listarEspecialidadesNinio("A");
//                                        otras_profesiones = salud_FichaService.listarEspecialidadesNinio("P");
//                                        otros = salud_FichaService.listarEspecialidadesNinio("O");
//                                        break;
//                                    case "4":
//                                        especialidades = salud_FichaService.listarEspecialidadesNeoplasicas("E");
//                                        administrativas = salud_FichaService.listarEspecialidadesNeoplasicas("A");
//                                        otras_profesiones = salud_FichaService.listarEspecialidadesNeoplasicas("P");
//                                        otros = salud_FichaService.listarEspecialidadesNeoplasicas("O");
//                                        break;
//                                    case "5":
//                                        especialidades = salud_FichaService.listarEspecialidadesOftalmologicas("E");
//                                        administrativas = salud_FichaService.listarEspecialidadesOftalmologicas("A");
//                                        otras_profesiones = salud_FichaService.listarEspecialidadesOftalmologicas("P");
//                                        otros = salud_FichaService.listarEspecialidadesOftalmologicas("O");
//                                        break;
//                                    case "6":
//                                        especialidades = salud_FichaService.listarEspecialidadesNoguchi("E");
//                                        administrativas = salud_FichaService.listarEspecialidadesNoguchi("A");
//                                        otras_profesiones = salud_FichaService.listarEspecialidadesNoguchi("P");
//                                        otros = salud_FichaService.listarEspecialidadesNoguchi("O");
//                                        break;
//                                    case "7":
//                                        especialidades = salud_FichaService.listarEspecialidadesMaternidad("E");
//                                        administrativas = salud_FichaService.listarEspecialidadesMaternidad("A");
//                                        otras_profesiones = salud_FichaService.listarEspecialidadesMaternidad("P");
//                                        otros = salud_FichaService.listarEspecialidadesMaternidad("O");
//                                        break;
//                                    case "8":
//                                        especialidades = salud_FichaService.listarEspecialidadesRebagliati("E");
//                                        administrativas = salud_FichaService.listarEspecialidadesRebagliati("A");
//                                        otras_profesiones = salud_FichaService.listarEspecialidadesRebagliati("P");
//                                        otros = salud_FichaService.listarEspecialidadesRebagliati("O");
//                                        break;
//                                    case "9":
//                                        especialidades = salud_FichaService.listarEspecialidadesRehabilitacion("E");
//                                        administrativas = salud_FichaService.listarEspecialidadesRehabilitacion("A");
//                                        otras_profesiones = salud_FichaService.listarEspecialidadesRehabilitacion("P");
//                                        otros = salud_FichaService.listarEspecialidadesRehabilitacion("O");
//                                        break;
//                                    default:
//                                    // Default secuencia de sentencias.
//                                }
//
//                                //Recorrer e insertar
//                                for (Salud_Ficha_S2_EspecialidadEntity especialidad : especialidades) {
//
//                                    Salud_Ficha_S2_P5Entity salud_ficha_s2_p5 = new Salud_Ficha_S2_P5Entity();
//                                    salud_ficha_s2_p5.setId_ficha_s2_p5(salud_FichaService.generarIdFichaS2P5());
//                                    salud_ficha_s2_p5.setId_ficha(id_ficha_num);
//                                    salud_ficha_s2_p5.setUsu_registro(usuario_usu);
//                                    salud_ficha_s2_p5.setFch_registro(fecha_hora);
//                                    salud_ficha_s2_p5.setId_ficha_s2_esp(especialidad.getId_ficha_s2_esp());
//                                    salud_FichaService.guardarFichaS2P5(salud_ficha_s2_p5);
//
//                                }
//
//                                for (Salud_Ficha_S2_EspecialidadEntity administrativa : administrativas) {
//
//                                    Salud_Ficha_S2_P5Entity salud_ficha_s2_p5 = new Salud_Ficha_S2_P5Entity();
//                                    salud_ficha_s2_p5.setId_ficha_s2_p5(salud_FichaService.generarIdFichaS2P5());
//                                    salud_ficha_s2_p5.setId_ficha(id_ficha_num);
//                                    salud_ficha_s2_p5.setUsu_registro(usuario_usu);
//                                    salud_ficha_s2_p5.setFch_registro(fecha_hora);
//                                    salud_ficha_s2_p5.setId_ficha_s2_esp(administrativa.getId_ficha_s2_esp());
//                                    salud_FichaService.guardarFichaS2P5(salud_ficha_s2_p5);
//
//                                }
//                                for (Salud_Ficha_S2_EspecialidadEntity otras_profesion : otras_profesiones) {
//                                    Salud_Ficha_S2_P5Entity salud_ficha_s2_p5 = new Salud_Ficha_S2_P5Entity();
//                                    salud_ficha_s2_p5.setId_ficha_s2_p5(salud_FichaService.generarIdFichaS2P5());
//                                    salud_ficha_s2_p5.setId_ficha(id_ficha_num);
//                                    salud_ficha_s2_p5.setUsu_registro(usuario_usu);
//                                    salud_ficha_s2_p5.setFch_registro(fecha_hora);
//                                    salud_ficha_s2_p5.setId_ficha_s2_esp(otras_profesion.getId_ficha_s2_esp());
//                                    salud_FichaService.guardarFichaS2P5(salud_ficha_s2_p5);
//
//                                }
//                                for (Salud_Ficha_S2_EspecialidadEntity otro : otros) {
//                                    Salud_Ficha_S2_P5Entity salud_ficha_s2_p5 = new Salud_Ficha_S2_P5Entity();
//                                    salud_ficha_s2_p5.setId_ficha_s2_p5(salud_FichaService.generarIdFichaS2P5());
//                                    salud_ficha_s2_p5.setId_ficha(id_ficha_num);
//                                    salud_ficha_s2_p5.setUsu_registro(usuario_usu);
//                                    salud_ficha_s2_p5.setFch_registro(fecha_hora);
//                                    salud_ficha_s2_p5.setId_ficha_s2_esp(otro.getId_ficha_s2_esp());
//                                    salud_FichaService.guardarFichaS2P5(salud_ficha_s2_p5);
//
//                                }
//                            }
//                        }
//
//                        break;
//                    case "btn_guardar_sec_2":
//
//                        if (ficha.getSalud_ficha_s2().getId_ficha_s2() == null) {
//
//                            ficha.getSalud_ficha_s2().setId_ficha_s2(salud_FichaService.generarIdFichaS2());
//                            ficha.getSalud_ficha_s2().setId_ficha(ficha.getId_ficha());
//                            ficha.getSalud_ficha_s2().setUsu_registro(usuario_usu);
//                            ficha.getSalud_ficha_s2().setFch_registro(fecha_hora);
//                        } else {
//
//                            ficha.getSalud_ficha_s2().setUsu_actualiza(usuario_usu);
//                            ficha.getSalud_ficha_s2().setFch_actualiza(fecha_hora);
//                        }
//
//                        salud_FichaService.guardarFichaS2(ficha.getSalud_ficha_s2());
//
//                        break;
//                    case "btn_guardar_sec_3":
//
//                        if (ficha.getSalud_ficha_s3().getId_ficha_s3() == null) {
//
//                            ficha.getSalud_ficha_s3().setId_ficha_s3(salud_FichaService.generarIdFichaS3());
//                            ficha.getSalud_ficha_s3().setId_ficha(ficha.getId_ficha());
//                            ficha.getSalud_ficha_s3().setUsu_registro(usuario_usu);
//                            ficha.getSalud_ficha_s3().setFch_registro(fecha_hora);
//                        } else {
//
//                            ficha.getSalud_ficha_s3().setUsu_actualiza(usuario_usu);
//                            ficha.getSalud_ficha_s3().setFch_actualiza(fecha_hora);
//                        }
//
//                        salud_FichaService.guardarFichaS3(ficha.getSalud_ficha_s3());
//
//                        break;
//                    case "btn_guardar_sec_4":
//                        if (ficha.getSalud_ficha_s4().getId_ficha_s4() == null) {
//
//                            ficha.getSalud_ficha_s4().setId_ficha_s4(salud_FichaService.generarIdFichaS4());
//                            ficha.getSalud_ficha_s4().setId_ficha(ficha.getId_ficha());
//                            ficha.getSalud_ficha_s4().setUsu_registro(usuario_usu);
//                            ficha.getSalud_ficha_s4().setFch_registro(fecha_hora);
//                        } else {
//
//                            ficha.getSalud_ficha_s4().setUsu_actualiza(usuario_usu);
//                            ficha.getSalud_ficha_s4().setFch_actualiza(fecha_hora);
//                        }
//
//                        salud_FichaService.guardarFichaS4(ficha.getSalud_ficha_s4());
//                        break;
//                    case "btn_guardar_sec_5":
//                        if (ficha.getSalud_ficha_s5().getId_ficha_s5() == null) {
//
//                            ficha.getSalud_ficha_s5().setId_ficha_s5(salud_FichaService.generarIdFichaS5());
//                            ficha.getSalud_ficha_s5().setId_ficha(ficha.getId_ficha());
//                            ficha.getSalud_ficha_s5().setUsu_registro(usuario_usu);
//                            ficha.getSalud_ficha_s5().setFch_registro(fecha_hora);
//                        } else {
//
//                            ficha.getSalud_ficha_s5().setUsu_actualiza(usuario_usu);
//                            ficha.getSalud_ficha_s5().setFch_actualiza(fecha_hora);
//                        }
//
//                        salud_FichaService.guardarFichaS5(ficha.getSalud_ficha_s5());
//                        break;
//                    case "btn_guardar_sec_6":
//                        if (ficha.getSalud_ficha_s6().getId_ficha_s6() == null) {
//
//                            ficha.getSalud_ficha_s6().setId_ficha_s6(salud_FichaService.generarIdFichaS6());
//                            ficha.getSalud_ficha_s6().setId_ficha(ficha.getId_ficha());
//                            ficha.getSalud_ficha_s6().setUsu_registro(usuario_usu);
//                            ficha.getSalud_ficha_s6().setFch_registro(fecha_hora);
//                        } else {
//
//                            ficha.getSalud_ficha_s6().setUsu_actualiza(usuario_usu);
//                            ficha.getSalud_ficha_s6().setFch_actualiza(fecha_hora);
//                        }
//
//                        salud_FichaService.guardarFichaS6(ficha.getSalud_ficha_s6());
//                        break;
//                    case "btn_guardar_sec_7":
//                        if (ficha.getSalud_ficha_s7().getId_ficha_s7() == null) {
//
//                            ficha.getSalud_ficha_s7().setId_ficha_s7(salud_FichaService.generarIdFichaS7());
//                            ficha.getSalud_ficha_s7().setId_ficha(ficha.getId_ficha());
//                            ficha.getSalud_ficha_s7().setUsu_registro(usuario_usu);
//                            ficha.getSalud_ficha_s7().setFch_registro(fecha_hora);
//                        } else {
//
//                            ficha.getSalud_ficha_s7().setUsu_actualiza(usuario_usu);
//                            ficha.getSalud_ficha_s7().setFch_actualiza(fecha_hora);
//                        }
//
//                        salud_FichaService.guardarFichaS7(ficha.getSalud_ficha_s7());
//                        break;
//                    case "btn_guardar_sec_8":
//                        if (ficha.getSalud_ficha_s8().getId_ficha_s8() == null) {
//
//                            ficha.getSalud_ficha_s8().setId_ficha_s8(salud_FichaService.generarIdFichaS8());
//                            ficha.getSalud_ficha_s8().setId_ficha(ficha.getId_ficha());
//                            ficha.getSalud_ficha_s8().setUsu_registro(usuario_usu);
//                            ficha.getSalud_ficha_s8().setFch_registro(fecha_hora);
//                        } else {
//
//                            ficha.getSalud_ficha_s8().setUsu_actualiza(usuario_usu);
//                            ficha.getSalud_ficha_s8().setFch_actualiza(fecha_hora);
//                        }
//
//                        salud_FichaService.guardarFichaS8(ficha.getSalud_ficha_s8());
//                        break;
//                    case "btn_guardar_sec_9":
//                        if (ficha.getSalud_ficha_s9().getId_ficha_s9() == null) {
//
//                            ficha.getSalud_ficha_s9().setId_ficha_s9(salud_FichaService.generarIdFichaS9());
//                            ficha.getSalud_ficha_s9().setId_ficha(ficha.getId_ficha());
//                            ficha.getSalud_ficha_s9().setUsu_registro(usuario_usu);
//                            ficha.getSalud_ficha_s9().setFch_registro(fecha_hora);
//                        } else {
//
//                            ficha.getSalud_ficha_s9().setUsu_actualiza(usuario_usu);
//                            ficha.getSalud_ficha_s9().setFch_actualiza(fecha_hora);
//                        }
//
//                        salud_FichaService.guardarFichaS9(ficha.getSalud_ficha_s9());
//                        break;
//                    case "btn_guardar_sec_10":
//
//                        if (ficha.getSalud_ficha_s10().getId_ficha_s10() == null) {
//
//                            ficha.getSalud_ficha_s10().setId_ficha_s10(salud_FichaService.generarIdFichaS10());
//                            ficha.getSalud_ficha_s10().setId_ficha(ficha.getId_ficha());
//                            ficha.getSalud_ficha_s10().setUsu_registro(usuario_usu);
//                            ficha.getSalud_ficha_s10().setFch_registro(fecha_hora);
//                        } else {
//
//                            ficha.getSalud_ficha_s10().setUsu_actualiza(usuario_usu);
//                            ficha.getSalud_ficha_s10().setFch_actualiza(fecha_hora);
//                        }
//
//                        salud_FichaService.guardarFichaS10(ficha.getSalud_ficha_s10());
//
//                        break;
//                    case "btn_guardar_sec_11":
//                        if (ficha.getSalud_ficha_s11().getId_ficha_s11() == null) {
//
//                            ficha.getSalud_ficha_s11().setId_ficha_s11(salud_FichaService.generarIdFichaS11());
//                            ficha.getSalud_ficha_s11().setId_ficha(ficha.getId_ficha());
//                            ficha.getSalud_ficha_s11().setUsu_registro(usuario_usu);
//                            ficha.getSalud_ficha_s11().setFch_registro(fecha_hora);
//                        } else {
//
//                            ficha.getSalud_ficha_s11().setUsu_actualiza(usuario_usu);
//                            ficha.getSalud_ficha_s11().setFch_actualiza(fecha_hora);
//                        }
//
//                        salud_FichaService.guardarFichaS11(ficha.getSalud_ficha_s11());
//                        break;
//                    case "btn_guardar_sec_12":
//
//                        if (ficha.getSalud_ficha_s12().getId_ficha_s12() == null) {
//
//                            ficha.getSalud_ficha_s12().setId_ficha_s12(salud_FichaService.generarIdFichaS12());
//                            ficha.getSalud_ficha_s12().setId_ficha(ficha.getId_ficha());
//                            ficha.getSalud_ficha_s12().setUsu_registro(usuario_usu);
//                            ficha.getSalud_ficha_s12().setFch_registro(fecha_hora);
//                        } else {
//
//                            ficha.getSalud_ficha_s12().setUsu_actualiza(usuario_usu);
//                            ficha.getSalud_ficha_s12().setFch_actualiza(fecha_hora);
//                        }
//
//                        salud_FichaService.guardarFichaS12(ficha.getSalud_ficha_s12());
//                        break;
//                    case "btn_guardar_sec_13":
//                        if (ficha.getSalud_ficha_s13().getId_ficha_s13() == null) {
//
//                            ficha.getSalud_ficha_s13().setId_ficha_s13(salud_FichaService.generarIdFichaS13());
//                            ficha.getSalud_ficha_s13().setId_ficha(ficha.getId_ficha());
//                            ficha.getSalud_ficha_s13().setUsu_registro(usuario_usu);
//                            ficha.getSalud_ficha_s13().setFch_registro(fecha_hora);
//                        } else {
//
//                            ficha.getSalud_ficha_s13().setUsu_actualiza(usuario_usu);
//                            ficha.getSalud_ficha_s13().setFch_actualiza(fecha_hora);
//                        }
//
//                        salud_FichaService.guardarFichaS13(ficha.getSalud_ficha_s13());
//                        break;
//                    case "btn_guardar_sec_14":
//                        if (ficha.getSalud_ficha_s14().getId_ficha_s14() == null) {
//
//                            ficha.getSalud_ficha_s14().setId_ficha_s14(salud_FichaService.generarIdFichaS14());
//                            ficha.getSalud_ficha_s14().setId_ficha(ficha.getId_ficha());
//                            ficha.getSalud_ficha_s14().setUsu_registro(usuario_usu);
//                            ficha.getSalud_ficha_s14().setFch_registro(fecha_hora);
//                        } else {
//
//                            ficha.getSalud_ficha_s14().setUsu_actualiza(usuario_usu);
//                            ficha.getSalud_ficha_s14().setFch_actualiza(fecha_hora);
//                        }
//
//                        salud_FichaService.guardarFichaS14(ficha.getSalud_ficha_s14());
//                        break;
//                    case "btn_guardar_sec_15":
//                        if (ficha.getSalud_ficha_s15().getId_ficha_s15() == null) {
//
//                            ficha.getSalud_ficha_s15().setId_ficha_s15(salud_FichaService.generarIdFichaS15());
//                            ficha.getSalud_ficha_s15().setId_ficha(ficha.getId_ficha());
//                            ficha.getSalud_ficha_s15().setUsu_registro(usuario_usu);
//                            ficha.getSalud_ficha_s15().setFch_registro(fecha_hora);
//                        } else {
//
//                            ficha.getSalud_ficha_s15().setUsu_actualiza(usuario_usu);
//                            ficha.getSalud_ficha_s15().setFch_actualiza(fecha_hora);
//                        }
//
//                        salud_FichaService.guardarFichaS15(ficha.getSalud_ficha_s15());
//                        break;
//                    case "btn_guardar_sec_16":
//                        if (ficha.getSalud_ficha_s16().getId_ficha_s16() == null) {
//
//                            ficha.getSalud_ficha_s16().setId_ficha_s16(salud_FichaService.generarIdFichaS16());
//                            ficha.getSalud_ficha_s16().setId_ficha(ficha.getId_ficha());
//                            ficha.getSalud_ficha_s16().setUsu_registro(usuario_usu);
//                            ficha.getSalud_ficha_s16().setFch_registro(fecha_hora);
//                        } else {
//
//                            ficha.getSalud_ficha_s16().setUsu_actualiza(usuario_usu);
//                            ficha.getSalud_ficha_s16().setFch_actualiza(fecha_hora);
//                        }
//
//                        salud_FichaService.guardarFichaS16(ficha.getSalud_ficha_s16());
//                        break;
//                    default:
//                        throw new AssertionError();
//                }
//
//            } else {
//
//                salud_FichaService.guardarFicha(ficha);
//                salud_FichaService.guardarFichaS2(ficha.getSalud_ficha_s2());
//                salud_FichaService.guardarFichaS3(ficha.getSalud_ficha_s3());
//                salud_FichaService.guardarFichaS4(ficha.getSalud_ficha_s4());
//                salud_FichaService.guardarFichaS5(ficha.getSalud_ficha_s5());
//                salud_FichaService.guardarFichaS6(ficha.getSalud_ficha_s6());
//                salud_FichaService.guardarFichaS7(ficha.getSalud_ficha_s7());
//                salud_FichaService.guardarFichaS8(ficha.getSalud_ficha_s8());
//                salud_FichaService.guardarFichaS9(ficha.getSalud_ficha_s9());
//                salud_FichaService.guardarFichaS10(ficha.getSalud_ficha_s10());
//                salud_FichaService.guardarFichaS11(ficha.getSalud_ficha_s11());
//                salud_FichaService.guardarFichaS12(ficha.getSalud_ficha_s12());
//                salud_FichaService.guardarFichaS13(ficha.getSalud_ficha_s13());
//                salud_FichaService.guardarFichaS14(ficha.getSalud_ficha_s14());
//                salud_FichaService.guardarFichaS15(ficha.getSalud_ficha_s15());
//                salud_FichaService.guardarFichaS16(ficha.getSalud_ficha_s16());
//            }
//
//            listarDependenciaEESS = salud_FichaService.listarDependenciaEESS();
//            listarCategoriaEESS = salud_FichaService.listarCategoriaEESS();
//
//            listaDepartamento = salud_FichaService.findAllDepartamento();
//            listaProvincia = salud_FichaService.findAllProvincia(ficha.getCodi_depa_dpt());
//            listaDistrito = salud_FichaService.findAllDistrito(ficha.getCodi_depa_dpt(), ficha.getCodi_prov_tpr());
//            listarEESS_III_E = salud_FichaService.ListarEESS_III_E();
//
//            if (flag_duplicado) {
//                msg_modal = "El EE.SS seleccionado ya se encuetra registrado. Por favor seleccionar otro EE.SS";
//            } else {
//
//                listarFichaEspMedicas = salud_FichaService.listarFichaEspecialidades(ficha.getId_ficha(), "E");
//                listarFichaEspAdministrativas = salud_FichaService.listarFichaEspecialidades(ficha.getId_ficha(), "A");
//                listarFichaEspOtrasProfesiones = salud_FichaService.listarFichaEspecialidades(ficha.getId_ficha(), "P");
//                listarFichaEspOtros = salud_FichaService.listarFichaEspecialidades(ficha.getId_ficha(), "O");
//
//                ficha = salud_FichaService.getFichaByIdFicha(ficha.getId_ficha());
//
//                ficha.setSalud_ficha_s2(salud_FichaService.getFichaS2ByIdFicha(ficha.getId_ficha()));
//                ficha.setSalud_ficha_s3(salud_FichaService.getFichaS3ByIdFicha(ficha.getId_ficha()));
//                ficha.setSalud_ficha_s4(salud_FichaService.getFichaS4ByIdFicha(ficha.getId_ficha()));
//                ficha.setSalud_ficha_s5(salud_FichaService.getFichaS5ByIdFicha(ficha.getId_ficha()));
//                ficha.setSalud_ficha_s6(salud_FichaService.getFichaS6ByIdFicha(ficha.getId_ficha()));
//                ficha.setSalud_ficha_s7(salud_FichaService.getFichaS7ByIdFicha(ficha.getId_ficha()));
//                ficha.setSalud_ficha_s8(salud_FichaService.getFichaS8ByIdFicha(ficha.getId_ficha()));
//                ficha.setSalud_ficha_s9(salud_FichaService.getFichaS9ByIdFicha(ficha.getId_ficha()));
//                ficha.setSalud_ficha_s10(salud_FichaService.getFichaS10ByIdFicha(ficha.getId_ficha()));
//                ficha.setSalud_ficha_s11(salud_FichaService.getFichaS11ByIdFicha(ficha.getId_ficha()));
//                ficha.setSalud_ficha_s12(salud_FichaService.getFichaS12ByIdFicha(ficha.getId_ficha()));
//                ficha.setSalud_ficha_s13(salud_FichaService.getFichaS13ByIdFicha(ficha.getId_ficha()));
//                ficha.setSalud_ficha_s14(salud_FichaService.getFichaS14ByIdFicha(ficha.getId_ficha()));
//                ficha.setSalud_ficha_s15(salud_FichaService.getFichaS15ByIdFicha(ficha.getId_ficha()));
//                ficha.setSalud_ficha_s16(salud_FichaService.getFichaS16ByIdFicha(ficha.getId_ficha()));
//
//                if (ficha.getEstado().equals("I")) {
//                    msg_modal = "Sus respuestas han sido registradas correctamente.";
//                } else {
//                    msg_modal = "Su ficha ha sido registrada correctamente.";
//                }
//            }
//
//            ficha.setFlag_modal("S");
//            ficha.setMsg_modal(msg_modal);
//            ficha.setFlag_guardado_parcial(false);
//            ficha.setTxt_btn_guardado_parcial(txt_btn_guardado_parcial);
//
//        } catch (Exception e) {
//            ficha.setFlag_modal("S");
//            ficha.setMsg_modal("Hubo un error al registrar sus respuestas");
//            logger.error("Error: " + e.getMessage());
//            e.printStackTrace();
//        }
//
//        model.addAttribute("ficha", ficha);
//        model.addAttribute("listarDependenciaEESS", listarDependenciaEESS);
//        model.addAttribute("listarCategoriaEESS", listarCategoriaEESS);
//        model.addAttribute("listaDepartamento", listaDepartamento);
//        model.addAttribute("listaProvincia", listaProvincia);
//        model.addAttribute("listaDistrito", listaDistrito);
//        model.addAttribute("listarEESS_III_E", listarEESS_III_E);
//        model.addAttribute("listarFichaEspAdministrativas", listarFichaEspAdministrativas);
//        model.addAttribute("listarFichaEspMedicas", listarFichaEspMedicas);
//        model.addAttribute("listarFichaEspOtrasProfesiones", listarFichaEspOtrasProfesiones);
//        model.addAttribute("listarFichaEspOtros", listarFichaEspOtros);
//
//        return "gestionsalud/usuario/FormularioFichasSalud";
//    }
//
//    @RequestMapping(value = "/salud/usuario/ficha/editarFichas", method = {RequestMethod.POST, RequestMethod.GET})
//    public String editarFicha(Model model, @RequestParam("id_ficha") Integer id_ficha, HttpSession httpSession) {
//
//        List<ParametroDTO> listarCategoriaEESS = null;
//        List<ParametroDTO> listarDependenciaEESS = null;
//        List<XubigeoEntity> listaDepartamento = null;
//        List<XubigeoEntity> listaProvincia = null;
//        List<XubigeoEntity> listaDistrito = null;
//        List<Salud_EstablecimientosEntity> listarEESS_III_E = null;
//        List<Salud_Ficha_S2_P5Entity> listarFichaEspMedicas = null;
//        List<Salud_Ficha_S2_P5Entity> listarFichaEspAdministrativas = null;
//        List<Salud_Ficha_S2_P5Entity> listarFichaEspOtrasProfesiones = null;
//        List<Salud_Ficha_S2_P5Entity> listarFichaEspOtros = null;
//
//        Salud_FichaEntity ficha = null;
//
//        try {
//
//            ficha = salud_FichaService.getFichaByIdFicha(id_ficha);
//            ficha.setSalud_ficha_s2(salud_FichaService.getFichaS2ByIdFicha(id_ficha));
//            ficha.setSalud_ficha_s3(salud_FichaService.getFichaS3ByIdFicha(id_ficha));
//            ficha.setSalud_ficha_s4(salud_FichaService.getFichaS4ByIdFicha(id_ficha));
//            ficha.setSalud_ficha_s5(salud_FichaService.getFichaS5ByIdFicha(id_ficha));
//            ficha.setSalud_ficha_s6(salud_FichaService.getFichaS6ByIdFicha(id_ficha));
//            ficha.setSalud_ficha_s7(salud_FichaService.getFichaS7ByIdFicha(id_ficha));
//            ficha.setSalud_ficha_s8(salud_FichaService.getFichaS8ByIdFicha(id_ficha));
//            ficha.setSalud_ficha_s9(salud_FichaService.getFichaS9ByIdFicha(id_ficha));
//            ficha.setSalud_ficha_s10(salud_FichaService.getFichaS10ByIdFicha(id_ficha));
//            ficha.setSalud_ficha_s11(salud_FichaService.getFichaS11ByIdFicha(id_ficha));
//            ficha.setSalud_ficha_s12(salud_FichaService.getFichaS12ByIdFicha(id_ficha));
//            ficha.setSalud_ficha_s13(salud_FichaService.getFichaS13ByIdFicha(id_ficha));
//            ficha.setSalud_ficha_s14(salud_FichaService.getFichaS14ByIdFicha(id_ficha));
//            ficha.setSalud_ficha_s15(salud_FichaService.getFichaS15ByIdFicha(id_ficha));
//            ficha.setSalud_ficha_s16(salud_FichaService.getFichaS16ByIdFicha(id_ficha));
//            ficha.setTipo_ficha(salud_FichaService.buscarByCodEESS(ficha.getCod_unico()).getTipo_ficha()); //AGREGADO ccortez 20240409
//
//            listarDependenciaEESS = salud_FichaService.listarDependenciaEESS();
//            listarCategoriaEESS = salud_FichaService.listarCategoriaEESS();
//            listaDepartamento = salud_FichaService.findAllDepartamento();
//            listaProvincia = salud_FichaService.findAllProvincia(ficha.getCodi_depa_dpt());
//            listaDistrito = salud_FichaService.findAllDistrito(ficha.getCodi_depa_dpt(), ficha.getCodi_prov_tpr());
//            listarEESS_III_E = salud_FichaService.ListarEESS_III_E();
//            listarFichaEspMedicas = salud_FichaService.listarFichaEspecialidades(ficha.getId_ficha(), "E");
//            listarFichaEspAdministrativas = salud_FichaService.listarFichaEspecialidades(ficha.getId_ficha(), "A");
//            listarFichaEspOtrasProfesiones = salud_FichaService.listarFichaEspecialidades(ficha.getId_ficha(), "P");
//            listarFichaEspOtros = salud_FichaService.listarFichaEspecialidades(ficha.getId_ficha(), "O");
//
//        } catch (Exception e) {
//            logger.error("Error: " + e.getMessage());
//            e.printStackTrace();
//        }
//
//        model.addAttribute("ficha", ficha);
//        model.addAttribute("listarDependenciaEESS", listarDependenciaEESS);
//        model.addAttribute("listarCategoriaEESS", listarCategoriaEESS);
//        model.addAttribute("listaDepartamento", listaDepartamento);
//        model.addAttribute("listaProvincia", listaProvincia);
//        model.addAttribute("listaDistrito", listaDistrito);
//        model.addAttribute("listarEESS_III_E", listarEESS_III_E);
//        model.addAttribute("listarFichaEspAdministrativas", listarFichaEspAdministrativas);
//        model.addAttribute("listarFichaEspMedicas", listarFichaEspMedicas);
//        model.addAttribute("listarFichaEspOtrasProfesiones", listarFichaEspOtrasProfesiones);
//        model.addAttribute("listarFichaEspOtros", listarFichaEspOtros);
//
//        return "gestionsalud/usuario/FormularioFichasSalud";
//    }
//
//    @RequestMapping("/salud/ficha/formulario/ajaxBuscarEESS")
//    @ResponseBody
//    public Map ajaxBuscarEESS(Model model,
//            @RequestParam("cod_unico") String cod_unico) {
//
//        Map<String, Object> elemento = new HashMap();
//
//        XubigeoEntity departamento = null;
//        XubigeoEntity provincia = null;
//        XubigeoEntity distrito = null;
//
//        Integer id_sestablecmnt = null;
//        String nom_jefe = "";
//        String num_celular = "";
//        String nom_eess = "";
//        String tip_cate_eess = "";
//        String des_departament = "";
//        String des_provincia = "";
//        String des_distrito = "";
//        String codi_depa_dpt = "";
//        String codi_prov_tpr = "";
//        String codi_dist_tdi = "";
//        String cod_renipress = "";
//        String tipo_ficha = "";
//        String tip_depe_eess = "";
//        String tip_eess = ""; //AGREGADO ccortez 20240409
//
//        try {
//
//            Salud_EstablecimientosEntity establecimiento = salud_FichaService.buscarByCodEESS(cod_unico.trim());
//
//            if (establecimiento != null && establecimiento.getCod_unico() != null) {
//
//                nom_jefe = establecimiento.getDes_dirmedrespn() != null ? establecimiento.getDes_dirmedrespn().trim() : "";
//                num_celular = establecimiento.getNum_telefono() != null ? establecimiento.getNum_telefono().trim() : "";
//                nom_eess = establecimiento.getNom_establecmnt() != null ? establecimiento.getNom_establecmnt().trim() : "";
//                tip_cate_eess = establecimiento.getDes_categoria() != null ? establecimiento.getDes_categoria().trim() : "";
//                cod_renipress = establecimiento.getCod_unico() != null ? establecimiento.getCod_unico().trim() : "";
//                tipo_ficha = establecimiento.getTipo_ficha() != null ? establecimiento.getTipo_ficha() : "";
//                tip_eess = establecimiento.getTipo_ficha() != null ? establecimiento.getTipo_ficha().trim() : ""; //AGREGADO ccortez 20240409
//
//                if (establecimiento.getNom_institucion() != null) {
//                    tip_depe_eess = obtenerCodDepEESS(establecimiento.getNom_institucion().trim());
//                }
//
//                if (establecimiento.getDes_departament() != null) {
//
//                    des_departament = establecimiento.getDes_departament().trim();
//
//                    departamento = salud_FichaService.findDptoByNomb(des_departament);
//                    codi_depa_dpt = departamento != null ? departamento.getXubigeomodelpk().getCoddpto() : "";
//
//                }
//
//                if (establecimiento.getDes_provincia() != null) {
//
//                    des_provincia = establecimiento.getDes_provincia().trim();
//
//                    provincia = salud_FichaService.findProvByNomb(codi_depa_dpt, des_provincia);
//                    codi_prov_tpr = provincia != null ? provincia.getXubigeomodelpk().getCodprov() : "";
//
//                }
//
//                if (establecimiento.getDes_distrito() != null) {
//
//                    des_distrito = establecimiento.getDes_distrito().trim();
//
//                    distrito = salud_FichaService.findDistByNomb(codi_depa_dpt, codi_prov_tpr, des_distrito);
//                    codi_dist_tdi = distrito != null ? distrito.getXubigeomodelpk().getCoddist() : "";
//                }
//
//                id_sestablecmnt = establecimiento.getId_sestablecmnt();
//
//            }
//
//        } catch (Exception e) {
//            logger.error("Error: " + e.getMessage());
//            e.printStackTrace();
//        }
//
//        elemento.put("id_sestablecmnt", id_sestablecmnt);
//        elemento.put("nom_jefe", nom_jefe);
//        elemento.put("num_celular", num_celular);
//        elemento.put("nom_eess", nom_eess);
//        elemento.put("tip_cate_eess", tip_cate_eess);
//        elemento.put("codi_depa_dpt", codi_depa_dpt);
//        elemento.put("codi_prov_tpr", codi_prov_tpr);
//        elemento.put("codi_dist_tdi", codi_dist_tdi);
//        elemento.put("cod_renipress", cod_renipress);
//        elemento.put("tipo_ficha", tipo_ficha);
//        elemento.put("tip_depe_eess", tip_depe_eess);
//        elemento.put("tip_eess", tip_eess); //AGREGADO ccortez 20240409
//
//        return elemento;
//    }
//
//    public String obtenerCodDepEESS(String nom_institucion) {
//
//        String retorno = "";
//
//        try {
//
//            switch (nom_institucion.trim()) {
//                case "MINSA":
//                    retorno = "A";
//                    break;
//                case "GOBIERNO REGIONAL":
//                    retorno = "B";
//                    break;
//                case "ESSALUD":
//                    retorno = "C";
//                    break;
//                case "PRIVADO":
//                    retorno = "D";
//                    break;
//                case "OTRO":
//                    retorno = "E";
//                    break;
//
//            }
//
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//
//        return retorno;
//    }
//
//    @RequestMapping("/salud/ficha/formulario/ajaxBuscarDirectorByDNI")
//    @ResponseBody
//    public Map ajaxBuscarDirectorByDNI(Model model,
//            @RequestParam("num_dni") String num_dni) {
//
//        Map<String, Object> elemento = new HashMap();
//
//        String nom_jefe = "";
//
//        String nombre = "";
//        String ape_pat = "";
//        String ape_mat = "";
//
//        try {
//
//            Optional<Matm_personaEntity> optionalEntity = matm_persona_repository.findById(num_dni.trim());
//
//            if (optionalEntity.isPresent()) {
//
//                Matm_personaEntity matm_personamodel = optionalEntity.get();
//
//                nombre = matm_personamodel.getPrenom_inscrito() != null ? matm_personamodel.getPrenom_inscrito().trim().toUpperCase() : "";
//                ape_pat = matm_personamodel.getAp_primer() != null ? matm_personamodel.getAp_primer().trim().toUpperCase() : "";
//                ape_mat = matm_personamodel.getAp_segundo() != null ? matm_personamodel.getAp_segundo().trim().toUpperCase() : "";
//
//                nom_jefe = nombre + " " + ape_pat + " " + ape_mat;
//
//            }
//
//        } catch (Exception e) {
//            logger.error("Error: " + e.getMessage());
//            e.printStackTrace();
//        }
//
//        elemento.put("nom_jefe", nom_jefe);
//
//        return elemento;
//    }
//
//    @RequestMapping(value = "/salud/usuario/ficha/guardar/p2_5", method = {RequestMethod.GET, RequestMethod.POST})
//    public String ajaxguardarS2P2_5(Model model,
//            @RequestParam("p2_5_aplica") String p2_5_aplica,
//            @RequestParam("tipo_especialidad") String tipo_especialidad,
//            @RequestParam("p2_5_total") String p2_5_total,
//            @RequestParam("p2_5_f") String p2_5_f,
//            @RequestParam("p2_5_m") String p2_5_m,
//            @RequestParam("p2_5_nombrado") String p2_5_nombrado,
//            @RequestParam("p2_5_destacado") String p2_5_destacado,
//            @RequestParam("p2_5_cas_temp") String p2_5_cas_temp,
//            @RequestParam("p2_5_cas_inde") String p2_5_cas_inde,
//            @RequestParam("p2_5_residente") String p2_5_residente,
//            @RequestParam("p2_5_interno") String p2_5_interno,
//            @RequestParam("p2_5_serums") String p2_5_serums,
//            @RequestParam("p2_5_locacion") String p2_5_locacion,
//            @RequestParam("p2_5_licencia") String p2_5_licencia,
//            @RequestParam("p2_5_destacado_otro") String p2_5_destacado_otro,
//            @RequestParam("p2_5_necesita") String p2_5_necesita,
//            @RequestParam("p2_5_cexterna") String p2_5_cexterna,
//            @RequestParam("p2_5_hospitalizacion") String p2_5_hospitalizacion,
//            @RequestParam("p2_5_cirugia") String p2_5_cirugia,
//            @RequestParam("p2_5_emergencia") String p2_5_emergencia,
//            @RequestParam("p2_5_investigacion") String p2_5_investigacion,
//            @RequestParam("p2_5_docencia") String p2_5_docencia,
//            @RequestParam("p2_5_teletrabajo") String p2_5_teletrabajo,
//            @RequestParam("p2_5_nombre_otro") String p2_5_nombre_otro,
//            @RequestParam("id_ficha") String id_ficha,
//            @RequestParam("id_ficha_s2_esp") String id_ficha_s2_esp,
//            @RequestParam("id_ficha_s2_p5") String id_ficha_s2_p5,
//            @RequestParam("usu_registro") String usu_registro
//    ) {
//
//        String usuario_usu = "";
//        String ruta = "";
//        usuario_usu = variableSistemaService.userID().trim().toUpperCase();
//        Salud_Ficha_S2_P5Entity s2_p2_5 = new Salud_Ficha_S2_P5Entity();
//        Date hoy = variableSistemaService.current_date();
//
//        int id_ficha_num = Integer.parseInt(id_ficha);
//
//        s2_p2_5.setP2_5_aplica(p2_5_aplica);
//        s2_p2_5.setId_ficha(id_ficha_num);
//
//        s2_p2_5.setId_ficha_s2_esp(Integer.parseInt(id_ficha_s2_esp));
//
//        if (!"".equals(p2_5_total)) {
//            s2_p2_5.setP2_5_total(Integer.parseInt(p2_5_total));
//        } else {
//            s2_p2_5.setP2_5_total(0);
//        }
//
//        if (!"".equals(p2_5_f)) {
//            s2_p2_5.setP2_5_f(Integer.parseInt(p2_5_f));
//        } else {
//            s2_p2_5.setP2_5_f(0);
//        }
//
//        if (!"".equals(p2_5_m)) {
//            s2_p2_5.setP2_5_m(Integer.parseInt(p2_5_m));
//        } else {
//            s2_p2_5.setP2_5_m(0);
//        }
//
//        if (!"".equals(p2_5_nombrado)) {
//            s2_p2_5.setP2_5_nombrado(Integer.parseInt(p2_5_nombrado));
//        } else {
//            s2_p2_5.setP2_5_nombrado(0);
//        }
//
//        if (!"".equals(p2_5_destacado)) {
//            s2_p2_5.setP2_5_destacado(Integer.parseInt(p2_5_destacado));
//        } else {
//            s2_p2_5.setP2_5_destacado(0);
//        }
//
//        if (!"".equals(p2_5_cas_temp)) {
//            s2_p2_5.setP2_5_cas_temp(Integer.parseInt(p2_5_cas_temp));
//        } else {
//            s2_p2_5.setP2_5_cas_temp(0);
//        }
//
//        if (!"".equals(p2_5_cas_inde)) {
//            s2_p2_5.setP2_5_cas_inde(Integer.parseInt(p2_5_cas_inde));
//        } else {
//            s2_p2_5.setP2_5_cas_inde(0);
//        }
//
//        if (!"".equals(p2_5_residente)) {
//            s2_p2_5.setP2_5_residente(Integer.parseInt(p2_5_residente));
//        } else {
//            s2_p2_5.setP2_5_residente(0);
//        }
//
//        if (!"".equals(p2_5_interno)) {
//            s2_p2_5.setP2_5_interno(Integer.parseInt(p2_5_interno));
//        } else {
//            s2_p2_5.setP2_5_interno(0);
//        }
//
//        if (!"".equals(p2_5_serums)) {
//            s2_p2_5.setP2_5_serums(Integer.parseInt(p2_5_serums));
//        } else {
//            s2_p2_5.setP2_5_serums(0);
//        }
//
//        if (!"".equals(p2_5_locacion)) {
//            s2_p2_5.setP2_5_locacion(Integer.parseInt(p2_5_locacion));
//        } else {
//            s2_p2_5.setP2_5_locacion(0);
//        }
//
//        if (!"".equals(p2_5_licencia)) {
//            s2_p2_5.setP2_5_licencia(Integer.parseInt(p2_5_licencia));
//        } else {
//            s2_p2_5.setP2_5_licencia(0);
//        }
//
//        if (!"".equals(p2_5_destacado_otro)) {
//            s2_p2_5.setP2_5_destacado_otro(Integer.parseInt(p2_5_destacado_otro));
//        } else {
//            s2_p2_5.setP2_5_destacado_otro(0);
//        }
//
//        if (!"".equals(p2_5_necesita)) {
//            s2_p2_5.setP2_5_necesita(Integer.parseInt(p2_5_necesita));
//        } else {
//            s2_p2_5.setP2_5_necesita(0);
//        }
//
//        if (!"".equals(p2_5_cexterna)) {
//            s2_p2_5.setP2_5_cexterna(Integer.parseInt(p2_5_cexterna));
//        } else {
//            s2_p2_5.setP2_5_cexterna(0);
//        }
//
//        if (!"".equals(p2_5_hospitalizacion)) {
//            s2_p2_5.setP2_5_hospitalizacion(Integer.parseInt(p2_5_hospitalizacion));
//        } else {
//            s2_p2_5.setP2_5_hospitalizacion(0);
//        }
//        if (!"".equals(p2_5_cirugia)) {
//            s2_p2_5.setP2_5_cirugia(Integer.parseInt(p2_5_cirugia));
//        } else {
//            s2_p2_5.setP2_5_cirugia(0);
//        }
//
//        if (!"".equals(p2_5_emergencia)) {
//            s2_p2_5.setP2_5_emergencia(Integer.parseInt(p2_5_emergencia));
//        } else {
//            s2_p2_5.setP2_5_emergencia(0);
//        }
//
//        if (!"".equals(p2_5_investigacion)) {
//            s2_p2_5.setP2_5_investigacion(Integer.parseInt(p2_5_investigacion));
//        } else {
//            s2_p2_5.setP2_5_investigacion(0);
//        }
//
//        if (!"".equals(p2_5_docencia)) {
//            s2_p2_5.setP2_5_docencia(Integer.parseInt(p2_5_docencia));
//        } else {
//            s2_p2_5.setP2_5_docencia(0);
//        }
//
//        if (!"".equals(p2_5_teletrabajo)) {
//            s2_p2_5.setP2_5_teletrabajo(Integer.parseInt(p2_5_teletrabajo));
//        } else {
//            s2_p2_5.setP2_5_teletrabajo(0);
//        }
//
//        s2_p2_5.setP2_5_nombre_otro(p2_5_nombre_otro);
//        s2_p2_5.setUsu_actualiza(usuario_usu);
//        s2_p2_5.setFch_actualiza(hoy);
//
//        if ("".equals(id_ficha_s2_p5)) {
//            s2_p2_5.setId_ficha_s2_p5(salud_FichaService.generarIdFichaS2P5());
//            s2_p2_5.setUsu_registro(usuario_usu);
//            s2_p2_5.setFch_registro(hoy);
//        } else {
//            s2_p2_5.setId_ficha_s2_p5(Integer.parseInt(id_ficha_s2_p5));
//            s2_p2_5.setUsu_registro(usu_registro);
//        }
//
//        salud_FichaService.guardarFichaS2P5(s2_p2_5);
//
//        List<Salud_Ficha_S2_P5Entity> listarEspecialidades = null;
//        if (tipo_especialidad.equals("E")) {
//            listarEspecialidades = salud_FichaService.listarFichaEspecialidades(id_ficha_num, "E");
//            model.addAttribute("listarFichaEspMedicas", listarEspecialidades);
//            ruta = "gestionsalud/usuario/FormularioFichasSalud :: especialistas";
//        }
//        if (tipo_especialidad.equals("A")) {
//            listarEspecialidades = salud_FichaService.listarFichaEspecialidades(id_ficha_num, "A");
//            model.addAttribute("listarFichaEspAdministrativas", listarEspecialidades);
//            ruta = "gestionsalud/usuario/FormularioFichasSalud :: administrativas";
//        }
//        if (tipo_especialidad.equals("P")) {
//            listarEspecialidades = salud_FichaService.listarFichaEspecialidades(id_ficha_num, "P");
//            model.addAttribute("listarFichaEspOtrasProfesiones", listarEspecialidades);
//            ruta = "gestionsalud/usuario/FormularioFichasSalud :: otrasprofesiones";
//        }
//        if (tipo_especialidad.equals("O")) {
//            listarEspecialidades = salud_FichaService.listarFichaEspecialidades(id_ficha_num, "O");
//            model.addAttribute("listarFichaEspOtros", listarEspecialidades);
//            ruta = "gestionsalud/usuario/FormularioFichasSalud :: otros";
//        }
//
//        return ruta;
//    }
//}
