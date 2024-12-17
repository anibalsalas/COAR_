package com.dp.gestioncoar.controller;


import com.dp.gestioncoar.dto.GdReporteEstadisticoDTO;
import com.dp.gestioncoar.service.VariableSistemaLocalService;
import java.security.MessageDigest;
import org.springframework.stereotype.Controller;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class GdReporteEstadisticoController {

    private Date d = null;
    private static final Logger logger = LogManager.getLogger(FichasController.class);

    SimpleDateFormat formatter_yyyy = new SimpleDateFormat("yyyy"), formatter_mm = new SimpleDateFormat("MM");
    SimpleDateFormat formatter_dmahms = new SimpleDateFormat("dd-MM-yyyy hh:mm:ss");
    SimpleDateFormat formatter_DMYHMS = new SimpleDateFormat("yyyy-MM-dd-HH-mm-ss");
    SimpleDateFormat formatter_dma = new SimpleDateFormat("dd-MM-yyyy");

    @Autowired
    VariableSistemaLocalService variableSistemaLocalService;

    @RequestMapping("/dp/especialista/reporte/reportesEstadisticos")
    public String mostrarFormularioReporteEstadisticoController(ModelMap model) {

        model.addAttribute("listaReporte", listarReportes());

        return "gestioncoar/especialista/reporte/reportesEstadisticos";
    }

    private List<GdReporteEstadisticoDTO> listarReportes() {

        List<GdReporteEstadisticoDTO> listaReporte = new ArrayList<>();
        try {

            GdReporteEstadisticoDTO reporte1 = new GdReporteEstadisticoDTO("destination_631", "1.- Reporte resumen de i. Si se cuenta con: Análisis Situacional de las Niñas, Niños y Adolescentes del distrito o la provincia, un plan o programa local para la niñez y adolescencia de su jurisdicción y si se tiene implementado una DEMUNA.", obtenToken("destination_631"));
            GdReporteEstadisticoDTO reporte2 = new GdReporteEstadisticoDTO("destination_632", "2.- Reporte resumen de ii. Creación y funcionamiento de la DEMUNA", obtenToken("destination_632"));
            GdReporteEstadisticoDTO reporte3 = new GdReporteEstadisticoDTO("destination_633", "3.- Reporte resumen de iii. Infraestructura de la DEMUNA", obtenToken("destination_633"));
            GdReporteEstadisticoDTO reporte4 = new GdReporteEstadisticoDTO("destination_634", "4.- Reporte resumen de iv. Personal de la DEMUNA", obtenToken("destination_634"));
            GdReporteEstadisticoDTO reporte5 = new GdReporteEstadisticoDTO("destination_635", "4(4).- Reporte resumen de iv(4). Personal de la DEMUNA, Detallado sobre los Profesionales que conforman la DEMUNA", obtenToken("destination_635"));
            GdReporteEstadisticoDTO reporte6 = new GdReporteEstadisticoDTO("destination_636", "5.- Reporte resumen de v. Salud Mental del Personal de la DEMUNA", obtenToken("destination_636"));
            GdReporteEstadisticoDTO reporte7 = new GdReporteEstadisticoDTO("destination_637", "6.- Reporte resumen de vi. Atención de casos de riesgo y desprotección familiar de niñas, niños y adolescentes", obtenToken("destination_637"));
            GdReporteEstadisticoDTO reporte8 = new GdReporteEstadisticoDTO("destination_638", "7.- Reporte resumen de vii. Otras funciones realizadas por la DEMUNA", obtenToken("destination_638"));
            GdReporteEstadisticoDTO reporte9 = new GdReporteEstadisticoDTO("destination_639", "8.- Reporte resumen de viii. Presupuesto de la DEMUNA", obtenToken("destination_639"));
            GdReporteEstadisticoDTO reporte10 = new GdReporteEstadisticoDTO("destination_640", "9.- Reporte resumen de ix. Articulación con el Gobierno Regional y Nacional", obtenToken("destination_640"));
            GdReporteEstadisticoDTO reporte11 = new GdReporteEstadisticoDTO("destination_641", "10.- Reporte resumen de ix. Participación de niñas, niños y adolescentes", obtenToken("destination_641"));
            GdReporteEstadisticoDTO reporte12 = new GdReporteEstadisticoDTO("destination_642", "11.- Reporte resumen de ix. Acciones de la DEMUNA frente a situaciones de emergencia o desastres. ", obtenToken("destination_642"));

            listaReporte.add(reporte1);
            listaReporte.add(reporte2);
            listaReporte.add(reporte3);
            listaReporte.add(reporte4);
            listaReporte.add(reporte5);
            listaReporte.add(reporte6);
            listaReporte.add(reporte7);
            listaReporte.add(reporte8);
            listaReporte.add(reporte9);
            listaReporte.add(reporte10);
            listaReporte.add(reporte11);
             listaReporte.add(reporte12);
        } catch (Exception e) {
            logger.info("ERROR: " + e.getMessage());
            e.printStackTrace();
        }

        return listaReporte;

    }

    private String obtenToken(String destino) {

        //Codificaccion del token
        String date = formatter_dma.format(variableSistemaLocalService.getFecha_hora_sistema());

        String password = date + "SomeExtraText" + destino;
        //Encriptando el token
        MessageDigest md;
        StringBuffer sb = new StringBuffer();

        try {

            md = MessageDigest.getInstance("MD5");
            md.update(password.getBytes());
            byte byteData[] = md.digest();
            for (int i = 0; i < byteData.length; i++) {
                sb.append(Integer.toString((byteData[i] & 0xff) + 0x100, 16).substring(1));
            }

        } catch (Exception e) {
            logger.info("ERROR: " + e.getMessage());
            e.printStackTrace();
            return "";
        }

        return sb.toString() + "&dst=" + destino;
    }

}
