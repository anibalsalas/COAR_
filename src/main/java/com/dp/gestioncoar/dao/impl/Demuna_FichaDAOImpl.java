package com.dp.gestioncoar.dao.impl;

import com.dp.gestioncoar.dao.Demuna_FichaDAO;
import com.dp.gestioncoar.dto.GepCuadroComparativoDTO;

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
import com.dp.gestioncoar.entity.Coar_Ficha_S1_P1_2PkEntity;

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
import com.dp.gestioncoar.entity.Educa_ficha_preguntas4Entity;
import com.dp.gestioncoar.entity.XubigeoEntity;
import com.dp.gestioncoar.repository.Demuna_EstablecimientosRepository;
import com.dp.gestioncoar.repository.Demuna_FichaRepository;
import com.dp.gestioncoar.repository.Demuna_Ficha_S10Repository;
import com.dp.gestioncoar.repository.Demuna_Ficha_S1Repository;
import com.dp.gestioncoar.repository.Demuna_Ficha_S2Repository;
import com.dp.gestioncoar.repository.Demuna_Ficha_S3Repository;
import com.dp.gestioncoar.repository.Demuna_Ficha_S4Repository;
import com.dp.gestioncoar.repository.Demuna_Ficha_S5Repository;
import com.dp.gestioncoar.repository.Demuna_Ficha_S6Repository;
import com.dp.gestioncoar.repository.Demuna_Ficha_S7Repository;
import com.dp.gestioncoar.repository.Demuna_Ficha_S8Repository;
import com.dp.gestioncoar.repository.Demuna_Ficha_S9Repository;
import com.dp.gestioncoar.repository.Educa_Ficha_PreguntasRepository;
import com.dp.gestioncoar.repository.Educa_Ficha_S4_3Repository;
import com.dp.gestioncoar.repository.Educa_Ficha_S5_10Repository;
import com.dp.gestioncoar.repository.Educa_Ficha_S5_1Repository;
import com.dp.gestioncoar.repository.Educa_Ficha_S5_2Repository;
import com.dp.gestioncoar.repository.Educa_Ficha_S5_31Repository;
import com.dp.gestioncoar.repository.Educa_Ficha_S5_4Repository;
import com.dp.gestioncoar.repository.Educa_Ficha_S5_5Repository;
import com.dp.gestioncoar.repository.Educa_Ficha_S5_6Repository;
import com.dp.gestioncoar.repository.Educa_Ficha_S5_7Repository;
import com.dp.gestioncoar.repository.Educa_Ficha_S5_8Repository;
import com.dp.gestioncoar.repository.Educa_Ficha_S5_9Repository;
import com.dp.gestioncoar.repository.Xubigeo_Repository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.dp.gestioncoar.repository.Coar_Ficha_S1_2Repository;

import com.dp.gestioncoar.repository.Demuna_ArchivoRepository;

@Repository
public class Demuna_FichaDAOImpl implements Demuna_FichaDAO {
    
    @Autowired
    Demuna_FichaRepository demuna_FichaRepository;
    
    @Autowired
    Demuna_Ficha_S1Repository demuna_Ficha_S1Repository;
    
    @Autowired
    Demuna_Ficha_S2Repository demuna_Ficha_S2Repository;
    
    @Autowired
    Demuna_Ficha_S3Repository demuna_Ficha_S3Repository;
    
    @Autowired
    Demuna_Ficha_S4Repository demuna_Ficha_S4Repository;
    
    @Autowired
    Demuna_Ficha_S5Repository demuna_Ficha_S5Repository;
    
    @Autowired
    Demuna_Ficha_S6Repository demuna_Ficha_S6Repository;
    
    @Autowired
    Demuna_Ficha_S7Repository demuna_Ficha_S7Repository;
    
   @Autowired
    Demuna_Ficha_S8Repository demuna_Ficha_S8Repository;
   
   @Autowired
    Demuna_Ficha_S9Repository demuna_Ficha_S9Repository;
   
   @Autowired
    Demuna_Ficha_S10Repository demuna_Ficha_S10Repository;
     
   
    @Autowired
    Demuna_EstablecimientosRepository demuna_stablecimientosRepository;
    
 
     @Autowired
    Educa_Ficha_S4_3Repository educa_ficha_s4_3Repository;
     
      @Autowired
    Educa_Ficha_S5_1Repository educa_ficha_s5_1Repository;
      
    @Autowired
    Educa_Ficha_S5_2Repository educa_ficha_s5_2Repository;

    @Autowired
    Coar_Ficha_S1_2Repository coar_ficha_s1_2Repository;
    
//    @Autowired
//    Coar_Ficha_S1_3Repository coar_ficha_s1_3Repository;
//    
//     @Autowired
//    Coar_Ficha_S1_6Repository coar_ficha_s1_6Repository;
//     
//    @Autowired
//    Coar_Ficha_S3_2Repository coar_ficha_s3_2Repository;
//     
//         
//   @Autowired
//    Demuna_ArchivoRepository demuna_ArchivoRepository;
//     
//    @Autowired
//    Coar_Ficha_S3_3Repository coar_ficha_s3_3Repository;
//    
//      @Autowired
//    Coar_Ficha_S4_2Repository coar_ficha_s4_2Repository;
//      
//        @Autowired
//    Coar_Ficha_S4_4Repository coar_ficha_s4_4Repository;
//        
//    @Autowired
//    Coar_Ficha_S9_1Repository coar_ficha_s9_1Repository;
//        
//         
//         @Autowired
//    Coar_Ficha_S6_1Repository coar_ficha_s6_1Repository;
     
   @Autowired
    private Educa_Ficha_S5_4Repository educa_ficha_s5_4Repository;
   
    @Autowired
    private Educa_Ficha_S5_5Repository educa_ficha_s5_5Repository;

    @Autowired
    private Educa_Ficha_S5_6Repository educa_ficha_s5_6Repository;

    @Autowired
    private Educa_Ficha_S5_7Repository educa_ficha_s5_7Repository;

    @Autowired
    private Educa_Ficha_S5_8Repository educa_ficha_s5_8Repository;

    @Autowired
    private Educa_Ficha_S5_9Repository educa_ficha_s5_9Repository;
    
     @Autowired
    private Educa_Ficha_S5_10Repository educa_ficha_s5_10Repository;
    
      @Autowired
    private Educa_Ficha_S5_31Repository educa_ficha_s5_31Repository;
    
    
      
////////////////////////////////////////////////////////////////////////////////////////////
     @Autowired
     Educa_Ficha_PreguntasRepository educa_ficha_PreguntasRepository;
     
    @Autowired
    Xubigeo_Repository xubigeo_Repository;
    
    public Demuna_FichaDAOImpl() {
    }
    
    @Override
    public List<Demuna_FichaEntity> listarFichas(String usuario_usu, String codi_depe_tde) {
        return demuna_FichaRepository.listarFichas(usuario_usu, codi_depe_tde);
    }
    
    @Override
    public Integer generarIdFicha() {
        return demuna_FichaRepository.generarIdFicha();
    }
    
    @Override
    public void guardarFicha(Demuna_FichaEntity ficha) {
        demuna_FichaRepository.save(ficha);
    }
    
    @Override
    public List<Demuna_FichaEntity> buscarFichaByCodigoUnico(String cod_unico) {
        return demuna_FichaRepository.buscarFichaByCodigoUnico(cod_unico);
    }
    
      @Override
    public Integer generarIdFichaS1() {
        return demuna_Ficha_S1Repository.generarIdFichaS1();
    }
    
      @Override
    public void guardarFichaS1(Demuna_Ficha_S1Entity fichaS1) {
        demuna_Ficha_S1Repository.save(fichaS1);
    }
    
    @Override
    public Integer generarIdFichaS2() {
        return demuna_Ficha_S2Repository.generarIdFichaS2();
    }
    
    @Override
    public void guardarFichaS2(Demuna_Ficha_S2Entity fichaS2) {
        demuna_Ficha_S2Repository.save(fichaS2);
    }
    
    @Override
    public Integer generarIdFichaS3() {
        return demuna_Ficha_S3Repository.generarIdFichaS3();
    }
    
    @Override
    public void guardarFichaS3(Demuna_Ficha_S3Entity fichaS3) {
        demuna_Ficha_S3Repository.save(fichaS3);
    }
    
    @Override
    public Integer generarIdFichaS4() {
        return demuna_Ficha_S4Repository.generarIdFichaS4();
    }
    
    @Override
    public void guardarFichaS4(Demuna_Ficha_S4Entity fichaS4) {
        demuna_Ficha_S4Repository.save(fichaS4);
    }
    
    @Override
    public Integer generarIdFichaS5() {
        return demuna_Ficha_S5Repository.generarIdFichaS5();
    }
    
    @Override
    public void guardarFichaS5(Demuna_Ficha_S5Entity fichaS5) {
        demuna_Ficha_S5Repository.save(fichaS5);
    }
    
    @Override
    public Integer generarIdFichaS6() {
        return demuna_Ficha_S6Repository.generarIdFichaS6();
    }
    
    @Override
    public void guardarFichaS6(Demuna_Ficha_S6Entity fichaS6) {
        demuna_Ficha_S6Repository.save(fichaS6);
    }
    
    @Override
    public Integer generarIdFichaS7() {
        return demuna_Ficha_S7Repository.generarIdFichaS7();
    }
    
    @Override
    public void guardarFichaS7(Demuna_Ficha_S7Entity fichaS7) {
        demuna_Ficha_S7Repository.save(fichaS7);
    }
    
     @Override
    public Integer generarIdFichaS8() {
        return demuna_Ficha_S8Repository.generarIdFichaS8();
    }
    
    @Override
    public void guardarFichaS8(Demuna_Ficha_S8Entity fichaS8) {
        demuna_Ficha_S8Repository.save(fichaS8);
    }
    
      @Override
    public Integer generarIdFichaS9() {
        return demuna_Ficha_S9Repository.generarIdFichaS9();
    }
    
    @Override
    public void guardarFichaS9(Demuna_Ficha_S9Entity fichaS9) {
        demuna_Ficha_S9Repository.save(fichaS9);
    }
    
    
    
    @Override
    public Integer generarIdFichaS10() {
        return demuna_Ficha_S10Repository.generarIdFichaS10();
    }
    
    @Override
    public void guardarFichaS10(Demuna_Ficha_S10Entity fichaS10) {
        demuna_Ficha_S10Repository.save(fichaS10);
    }
    
    
    
    
    @Override
    public List<Demuna_FichaEntity> listarSeguimientoFichas(String codi_depa_dpt, String estado) {
        return demuna_FichaRepository.listarSeguimientoFichas(codi_depa_dpt, estado);
    }
    

    
    @Override
    public Demuna_FichaEntity getFichaByIdFicha(Integer id_ficha) {
        return demuna_FichaRepository.getFichaByIdFicha(id_ficha);
    }
    
       @Override
    public Demuna_Ficha_S1Entity getFichaS1ByIdFicha(Integer id_ficha) {
        return demuna_Ficha_S1Repository.getFichaS1ByIdFicha(id_ficha);
    }
    
    @Override
    public Demuna_Ficha_S2Entity getFichaS2ByIdFicha(Integer id_ficha) {
        return demuna_Ficha_S2Repository.getFichaS2ByIdFicha(id_ficha);
    }
    
    @Override
    public Demuna_Ficha_S3Entity getFichaS3ByIdFicha(Integer id_ficha) {
        return demuna_Ficha_S3Repository.getFichaS3ByIdFicha(id_ficha);
    }
    
    @Override
    public Demuna_Ficha_S4Entity getFichaS4ByIdFicha(Integer id_ficha) {
        return demuna_Ficha_S4Repository.getFichaS4ByIdFicha(id_ficha);
    }
    
    @Override
    public Demuna_Ficha_S5Entity getFichaS5ByIdFicha(Integer id_ficha) {
        return demuna_Ficha_S5Repository.getFichaS5ByIdFicha(id_ficha);
    }
    
    @Override
    public Demuna_Ficha_S6Entity getFichaS6ByIdFicha(Integer id_ficha) {
        return demuna_Ficha_S6Repository.getFichaS6ByIdFicha(id_ficha);
    }
    
    @Override
    public Demuna_Ficha_S7Entity getFichaS7ByIdFicha(Integer id_ficha) {
        return demuna_Ficha_S7Repository.getFichaS7ByIdFicha(id_ficha);
    }
    
     @Override
    public Demuna_Ficha_S8Entity getFichaS8ByIdFicha(Integer id_ficha) {
        return demuna_Ficha_S8Repository.getFichaS8ByIdFicha(id_ficha);
    }
    
     @Override
    public Demuna_Ficha_S9Entity getFichaS9ByIdFicha(Integer id_ficha) {
        return demuna_Ficha_S9Repository.getFichaS9ByIdFicha(id_ficha);
    }
    
     @Override
    public Demuna_Ficha_S10Entity getFichaS10ByIdFicha(Integer id_ficha) {
        return demuna_Ficha_S10Repository.getFichaS10ByIdFicha(id_ficha);
    }
    
 
    
    
    @Override
    public List<XubigeoEntity> findAllDepartamento() {
        return xubigeo_Repository.findAllDepartamento();
    }
    
    @Override
    public List<XubigeoEntity> findAllProvincia(String coddpto) {
        return xubigeo_Repository.findAllProvincia(coddpto);
    }
    
    @Override
    public List<Demuna_EstablecimientosEntity> findMunicipalidadesByDepartamento(String coddptox, String codprovx) {
        return xubigeo_Repository.findMunicipalidadesByDepartamento(coddptox, codprovx);
    }
    
    @Override
    public List<Demuna_EstablecimientosEntity> findMunicipalidadesByDepartamentoAndProvinciaAndDistrito(String coddptox, String codprovx, String coddistx) {
        return xubigeo_Repository.findMunicipalidadesByDepartamentoAndProvinciaAndDistrito(coddptox, codprovx, coddistx);
    }

//    @Override
//    public List<Demuna_EstablecimientosEntity> findUniqueDistrito(String coddptox, String codprovx, String coddistx) {
//        return xubigeo_Repository.findUniqueDistrito(coddptox, codprovx, coddistx);
//    }
    @Override
    public List<XubigeoEntity> findAllDistrito(String coddpto, String codprov) {
        return xubigeo_Repository.findAllDistrito(coddpto, codprov);
    }
    
    @Override
    public XubigeoEntity findDptoByNomb(String departamento) {
        return xubigeo_Repository.findDptoByNomb(departamento);
    }
    
    @Override
    public XubigeoEntity findProvByNomb(String coddpto, String provincia) {
        return xubigeo_Repository.findProvByNomb(coddpto, provincia);
    }
    
    @Override
    public XubigeoEntity findDistByNomb(String coddpto, String codprov, String distrito) {
        return xubigeo_Repository.findDistByNomb(coddpto, codprov, distrito);
    }
    
    @Override
    public List<String> listarRegiones() {
        return demuna_FichaRepository.listarRegiones();
    }

//    @Override
//    public List<ParametroDTO> listarDependenciaEESS() {
//        return listaDependenciaEESS;
//    }
//
//    @Override
//    public List<ParametroDTO> listarCategoriaEESS() {
//        return listaCategoriaEESS;
//    }
    @Override
    public List<Demuna_EstablecimientosEntity> listarEM() {
        return demuna_stablecimientosRepository.listarEM();
    }
    
    
  
    
    @Override
    public List<GepCuadroComparativoDTO> listarCuadroRegistro() {
        
        List<GepCuadroComparativoDTO> listaCuadro = new ArrayList<>();
        GepCuadroComparativoDTO cuadro = null;
        List<Object[]> resultado = demuna_FichaRepository.listarCuadroRegistro2();
        Double porcent = 0.0;
        System.out.println("id_ficha" + resultado);
        for (Object[] obj : resultado) {
            cuadro = new GepCuadroComparativoDTO();
            
            cuadro.setRegion(obj[0].toString());
            cuadro.setComi_comp(Integer.valueOf(obj[1].toString()));
            cuadro.setComi_incom(Integer.valueOf(obj[2].toString()));
            cuadro.setDir_comp(Integer.valueOf(obj[3].toString()));
            cuadro.setDir_incom(Integer.valueOf(obj[4].toString()));
            cuadro.setTot_comi_dir(Integer.valueOf(obj[5].toString()));
            cuadro.setTot_cole(Integer.valueOf(obj[6].toString()));

//            porcent = (double) cuadro.getTot_comi_dir() / cuadro.getTot_cole();//porcentaje sobre el total de registro (completas e incompletas)
            porcent = (double) cuadro.getDir_comp() / cuadro.getTot_cole();//porcentaje sobre el total de registros completas

            cuadro.setProcent_total(porcent);
            
            listaCuadro.add(cuadro);
        }
        
        return listaCuadro;
        
    }
//

    @Override
    public GepCuadroComparativoDTO listarTotalCuadroRegistro() {
        
        GepCuadroComparativoDTO totalCuadro = new GepCuadroComparativoDTO();
        Object[] obj = demuna_FichaRepository.obtenerTotalCuadroRegistro();
        Double porcent = 0.0;
        System.out.println("op");
        if (obj != null) {
            try {
                
                totalCuadro.setComi_comp(Integer.valueOf(String.valueOf(obj[0].toString())));
                
                totalCuadro.setComi_incom(Integer.valueOf(obj[1].toString()));
                
                totalCuadro.setDir_comp(Integer.valueOf(obj[2].toString()));
                
                totalCuadro.setDir_incom(Integer.valueOf(obj[3].toString()));
                
                totalCuadro.setTot_comi_dir(Integer.valueOf(obj[4].toString()));
                
                totalCuadro.setTot_cole(Integer.valueOf(obj[5].toString()));
                
                porcent = (double) totalCuadro.getTot_comi_dir() / totalCuadro.getTot_cole();
                
                totalCuadro.setProcent_total(porcent);
                
            } catch (Exception e) {
                e.printStackTrace();
            }
            
        }
        
        return totalCuadro;
    }
   
     @Override
    public List<GepCuadroComparativoDTO> listarCuadroRegistrox() {
        
        List<GepCuadroComparativoDTO> listaCuadro = new ArrayList<>();
        GepCuadroComparativoDTO cuadro = null;
        List<Object[]> resultado = demuna_FichaRepository.listarCuadroRegistro2x();
        Double porcent = 0.0;
        System.out.println("id_ficha" + resultado);
        for (Object[] obj : resultado) {
            cuadro = new GepCuadroComparativoDTO();
            
            cuadro.setRegion(obj[0].toString());
            cuadro.setComi_comp(Integer.valueOf(obj[1].toString()));
            cuadro.setComi_incom(Integer.valueOf(obj[2].toString()));
            cuadro.setDir_comp(Integer.valueOf(obj[3].toString()));
            cuadro.setDir_incom(Integer.valueOf(obj[4].toString()));
            cuadro.setTot_comi_dir(Integer.valueOf(obj[5].toString()));
            cuadro.setTot_cole(Integer.valueOf(obj[6].toString()));

//            porcent = (double) cuadro.getTot_comi_dir() / cuadro.getTot_cole();//porcentaje sobre el total de registro (completas e incompletas)
            porcent = (double) cuadro.getDir_comp() / cuadro.getTot_cole();//porcentaje sobre el total de registros completas

            cuadro.setProcent_total(porcent);
            
            listaCuadro.add(cuadro);
        }
        
        return listaCuadro;
        
    }
  
//    @Override
//    public List<GepCuadroComparativoDTO> listarCuadroRegistro2() {
//        
//        List<GepCuadroComparativoDTO> listaCuadro = new ArrayList<>();
//        GepCuadroComparativoDTO cuadro = null;
//        List<Object[]> resultado = demuna_FichaRepository.listarCuadroRegistro3();
//        Double porcent = 0.0;
//        
//        for (Object[] obj : resultado) {
//            cuadro = new GepCuadroComparativoDTO();
//            
//            cuadro.setRegion(obj[0].toString());
//            cuadro.setCant_comi(Integer.valueOf(obj[1].toString()));
//            cuadro.setComi_comp(Integer.valueOf(obj[2].toString()));
//            cuadro.setComi_incom(Integer.valueOf(obj[3].toString()));
//            cuadro.setTotal_comi(Integer.valueOf(obj[4].toString()));
//            cuadro.setDir_comp(Integer.valueOf(obj[5].toString()));
//            cuadro.setDir_incom(Integer.valueOf(obj[6].toString()));
//            cuadro.setTotal_dir(Integer.valueOf(obj[7].toString()));
//            cuadro.setTotal_general(Integer.valueOf(obj[8].toString()));
//            cuadro.setTot_cole(Integer.valueOf(obj[9].toString()));
//
////            porcent = (double) cuadro.getTot_comi_dir() / cuadro.getTot_cole();//porcentaje sobre el total de registro (completas e incompletas)
//            porcent = (double) cuadro.getTotal_general() / cuadro.getTot_cole();//porcentaje sobre el total de registros completas
//
//            cuadro.setProcent_total(porcent);
//            
//            listaCuadro.add(cuadro);
//        }
//        
//        return listaCuadro;
//    }

    @Override
    public List<Demuna_FichaEntity> listarFichasByCodUnico(String cod_unico) {
        return demuna_FichaRepository.listarFichasByCodUnico(cod_unico);
    }
    
 
    
//    @Override
//    public Demuna_FichaEntity buscarFichaByComisionadoCodigoUnico(String cod_unico) {
//        return demuna_FichaRepository.buscarFichaByComisionadoCodigoUnico(cod_unico);
//    }

    
    @Override
    public List<Demuna_FichaEntity> listarFichasByComisionado(String usuario_usu) {
        return demuna_FichaRepository.listarFichasByComisionado(usuario_usu.trim());
    }
    
   
   
    @Override
    public Demuna_FichaEntity getFichaByCodigoUnico(String cod_unico) {
        return demuna_FichaRepository.getFichaByCodigoUnico(cod_unico.trim());
    }
    
   
    /*******************************************************************************/
    
    @Override
    public Integer generarIdS4_3(Integer id_ficha) {
        return educa_ficha_s4_3Repository.generarIdS4_3(id_ficha);
    }

    @Override
    public List<Educa_Ficha_S4_3Entity> listarS4_3ByIdFicha(Integer id_ficha) {
        return educa_ficha_s4_3Repository.listarS4_3ByIdFichaGrupo(id_ficha);
    }

    @Override
    public void guardarFichaS4_3(Educa_Ficha_S4_3Entity educa_ficha_s4_3) {
        educa_ficha_s4_3Repository.save(educa_ficha_s4_3);
    }

    @Override
    public void eliminarFichaS4_3(Educa_Ficha_S4_3PkEntity educa_ficha_s4_3pk) {
        educa_ficha_s4_3Repository.deleteById(educa_ficha_s4_3pk);
    }

    @Override
    public Educa_Ficha_S4_3Entity getFicha_S4_3ById(Educa_Ficha_S4_3PkEntity educa_ficha_s4_3pk) {
        return educa_ficha_s4_3Repository.getReferenceById(educa_ficha_s4_3pk);
    }
    
    
    @Override
    public List<Educa_ficha_preguntas4Entity> listarPregunta() {
        return educa_ficha_PreguntasRepository.listarPregunta();
    }
    
    @Override
    public Integer generarIdPregunta() {
        return educa_ficha_PreguntasRepository.generarIdPregunta();
    }
    /////////////////////////////////////////////////////////////////////////////////
    @Override
public Integer generarIdS5_1(Integer id_ficha) {
    return educa_ficha_s5_1Repository.generarIdS5_1(id_ficha);
}

@Override
public List<Educa_Ficha_S5_1Entity> listarS5_1ByIdFicha(Integer id_ficha) {
    return educa_ficha_s5_1Repository.listarS5_1ByIdFichaGrupo(id_ficha);
}

@Override
public void guardarFichaS5_1(Educa_Ficha_S5_1Entity educa_ficha_s5_1) {
    educa_ficha_s5_1Repository.save(educa_ficha_s5_1);
}

@Override
public void eliminarFichaS5_1(Educa_Ficha_S5_1PkEntity educa_ficha_s5_1pk) {
    educa_ficha_s5_1Repository.deleteById(educa_ficha_s5_1pk);
}

@Override
public Educa_Ficha_S5_1Entity getFicha_S5_1ById(Educa_Ficha_S5_1PkEntity educa_ficha_s5_1pk) {
    return educa_ficha_s5_1Repository.getReferenceById(educa_ficha_s5_1pk);
}

///////////////////////////////////////////////////////////////////////////////
    @Override
    public Integer generarIdS5_2(Integer id_ficha) {
        return educa_ficha_s5_2Repository.generarIdS5_2(id_ficha);
    }

    @Override
    public List<Educa_Ficha_S5_2Entity> listarS5_2ByIdFicha(Integer id_ficha) {
        return educa_ficha_s5_2Repository.listarS5_2ByIdFichaGrupo(id_ficha);
    }

    @Override
    public void guardarFichaS5_2(Educa_Ficha_S5_2Entity educa_ficha_s5_2) {
        educa_ficha_s5_2Repository.save(educa_ficha_s5_2);
    }

    @Override
    public void eliminarFichaS5_2(Educa_Ficha_S5_2PkEntity educa_ficha_s5_2pk) {
        educa_ficha_s5_2Repository.deleteById(educa_ficha_s5_2pk);
    }

    @Override
    public Educa_Ficha_S5_2Entity getFicha_S5_2ById(Educa_Ficha_S5_2PkEntity educa_ficha_s5_2pk) {
        return educa_ficha_s5_2Repository.getReferenceById(educa_ficha_s5_2pk);
    }

    
    ///////////////////////////////////////////////////////////////////////////////
//@Override
//public Integer generarIdS1_2(Integer id_ficha) {
//    return coar_ficha_s1_2Repository.generarIdS1_2(id_ficha);
//}
//
//@Override
//public List<Coar_Ficha_S1_P1_2Entity> listarS1_2ByIdFicha(Integer id_ficha) {
//    return coar_ficha_s1_2Repository.listarS1_2ByIdFichaGrupo(id_ficha);
//}
//
//@Override
//public void guardarFichaS1_2(Coar_Ficha_S1_P1_2Entity coar_ficha_s1_p1_2) {
//    coar_ficha_s1_2Repository.save(coar_ficha_s1_p1_2);
//}
//
//@Override
//public void eliminarFichaS1_2(Coar_Ficha_S1_P1_2PkEntity coar_ficha_s1_p1_2pk) {
//    coar_ficha_s1_2Repository.deleteById(coar_ficha_s1_p1_2pk);
//}
//
//@Override
//public Coar_Ficha_S1_P1_2Entity getFicha_S1_2ById(Coar_Ficha_S1_P1_2PkEntity coar_ficha_s1_p1_2pk) {
//    return coar_ficha_s1_2Repository.getReferenceById(coar_ficha_s1_p1_2pk);
//        

///////////////////////////////////////////////////////////////////////////////

 ////////////////////////////////////////////////////////////////

 @Override
    public Integer generarIdS5_4(Integer id_ficha) {
        return educa_ficha_s5_4Repository.generarIdS5_4(id_ficha);
    }

    @Override
    public List<Educa_Ficha_S5_4Entity> listarS5_4ByIdFicha(Integer id_ficha) {
        return educa_ficha_s5_4Repository.listarS5_4ByIdFichaGrupo(id_ficha);
    }

    @Override
    public void guardarFichaS5_4(Educa_Ficha_S5_4Entity educa_ficha_s5_4) {
        educa_ficha_s5_4Repository.save(educa_ficha_s5_4);
    }

    @Override
    public void eliminarFichaS5_4(Educa_Ficha_S5_4PkEntity educa_ficha_s5_4pk) {
        educa_ficha_s5_4Repository.deleteById(educa_ficha_s5_4pk);
    }

    @Override
    public Educa_Ficha_S5_4Entity getFicha_S5_4ById(Educa_Ficha_S5_4PkEntity educa_ficha_s5_4pk) {
        return educa_ficha_s5_4Repository.getReferenceById(educa_ficha_s5_4pk);
    }
    
    
    
    ////////////////////////////////////////////////////////////////////////////////////

 @Override
    public Integer generarIdS5_5(Integer id_ficha) {
        return educa_ficha_s5_5Repository.generarIdS5_5(id_ficha);
    }

    @Override
    public List<Educa_Ficha_S5_5Entity> listarS5_5ByIdFicha(Integer id_ficha) {
        return educa_ficha_s5_5Repository.listarS5_5ByIdFichaGrupo(id_ficha);
    }

    @Override
    public void guardarFichaS5_5(Educa_Ficha_S5_5Entity educa_ficha_s5_5) {
        educa_ficha_s5_5Repository.save(educa_ficha_s5_5);
    }

    @Override
    public void eliminarFichaS5_5(Educa_Ficha_S5_5PkEntity educa_ficha_s5_5pk) {
        educa_ficha_s5_5Repository.deleteById(educa_ficha_s5_5pk);
    }

    @Override
    public Educa_Ficha_S5_5Entity getFicha_S5_5ById(Educa_Ficha_S5_5PkEntity educa_ficha_s5_5pk) {
        return educa_ficha_s5_5Repository.getReferenceById(educa_ficha_s5_5pk);
    }
    
    ///////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    @Override
    public Integer generarIdS5_6(Integer id_ficha) {
        return educa_ficha_s5_6Repository.generarIdS5_6(id_ficha);
    }

    @Override
    public List<Educa_Ficha_S5_6Entity> listarS5_6ByIdFicha(Integer id_ficha) {
        return educa_ficha_s5_6Repository.listarS5_6ByIdFichaGrupo(id_ficha);
    }

    @Override
    public void guardarFichaS5_6(Educa_Ficha_S5_6Entity educa_ficha_s5_6) {
        educa_ficha_s5_6Repository.save(educa_ficha_s5_6);
    }

    @Override
    public void eliminarFichaS5_6(Educa_Ficha_S5_6PkEntity educa_ficha_s5_6pk) {
        educa_ficha_s5_6Repository.deleteById(educa_ficha_s5_6pk);
    }

    @Override
    public Educa_Ficha_S5_6Entity getFicha_S5_6ById(Educa_Ficha_S5_6PkEntity educa_ficha_s5_6pk) {
        return educa_ficha_s5_6Repository.getReferenceById(educa_ficha_s5_6pk);
    }
    
    
    ////////////////////////////////////////////////////////////////////////////////////

    @Override
    public Integer generarIdS5_7(Integer id_ficha) {
        return educa_ficha_s5_7Repository.generarIdS5_7(id_ficha);
    }

    @Override
    public List<Educa_Ficha_S5_7Entity> listarS5_7ByIdFicha(Integer id_ficha) {
        return educa_ficha_s5_7Repository.listarS5_7ByIdFichaGrupo(id_ficha);
    }

    @Override
    public void guardarFichaS5_7(Educa_Ficha_S5_7Entity educa_ficha_s5_7) {
        educa_ficha_s5_7Repository.save(educa_ficha_s5_7);
    }

    @Override
    public void eliminarFichaS5_7(Educa_Ficha_S5_7PkEntity educa_ficha_s5_7pk) {
        educa_ficha_s5_7Repository.deleteById(educa_ficha_s5_7pk);
    }

    @Override
    public Educa_Ficha_S5_7Entity getFicha_S5_7ById(Educa_Ficha_S5_7PkEntity educa_ficha_s5_7pk) {
        return educa_ficha_s5_7Repository.getReferenceById(educa_ficha_s5_7pk);
    }


 ////////////////////////////////////////////////////////////////////////////////////   
    @Override
    public Integer generarIdS5_8(Integer id_ficha) {
        return educa_ficha_s5_8Repository.generarIdS5_8(id_ficha);
    }

    @Override
    public List<Educa_Ficha_S5_8Entity> listarS5_8ByIdFicha(Integer id_ficha) {
        return educa_ficha_s5_8Repository.listarS5_8ByIdFichaGrupo(id_ficha);
    }

    @Override
    public void guardarFichaS5_8(Educa_Ficha_S5_8Entity educa_ficha_s5_8) {
        educa_ficha_s5_8Repository.save(educa_ficha_s5_8);
    }

    @Override
    public void eliminarFichaS5_8(Educa_Ficha_S5_8PkEntity educa_ficha_s5_8pk) {
        educa_ficha_s5_8Repository.deleteById(educa_ficha_s5_8pk);
    }

    @Override
    public Educa_Ficha_S5_8Entity getFicha_S5_8ById(Educa_Ficha_S5_8PkEntity educa_ficha_s5_8pk) {
        return educa_ficha_s5_8Repository.getReferenceById(educa_ficha_s5_8pk);
    }

    
    @Override
    public Integer generarIdS5_9(Integer id_ficha) {
        return educa_ficha_s5_9Repository.generarIdS5_9(id_ficha);
    }

    @Override
    public List<Educa_Ficha_S5_9Entity> listarS5_9ByIdFicha(Integer id_ficha) {
        return educa_ficha_s5_9Repository.listarS5_9ByIdFichaGrupo(id_ficha);
    }

    @Override
    public void guardarFichaS5_9(Educa_Ficha_S5_9Entity educa_ficha_s5_9) {
        educa_ficha_s5_9Repository.save(educa_ficha_s5_9);
    }

    @Override
    public void eliminarFichaS5_9(Educa_Ficha_S5_9PkEntity educa_ficha_s5_9pk) {
        educa_ficha_s5_9Repository.deleteById(educa_ficha_s5_9pk);
    }

    @Override
    public Educa_Ficha_S5_9Entity getFicha_S5_9ById(Educa_Ficha_S5_9PkEntity educa_ficha_s5_9pk) {
        return educa_ficha_s5_9Repository.getReferenceById(educa_ficha_s5_9pk);
    }
    
    @Override
    public Integer generarIdS5_10(Integer id_ficha) {
        return educa_ficha_s5_10Repository.generarIdS5_10(id_ficha);
    }

    @Override
    public List<Educa_Ficha_S5_10Entity> listarS5_10ByIdFicha(Integer id_ficha) {
        return educa_ficha_s5_10Repository.listarS5_10ByIdFichaGrupo(id_ficha);
    }

    @Override
    public void guardarFichaS5_10(Educa_Ficha_S5_10Entity educa_ficha_s5_10) {
        educa_ficha_s5_10Repository.save(educa_ficha_s5_10);
    }

    @Override
    public void eliminarFichaS5_10(Educa_Ficha_S5_10PkEntity educa_ficha_s5_10pk) {
        educa_ficha_s5_10Repository.deleteById(educa_ficha_s5_10pk);
    }

    @Override
    public Educa_Ficha_S5_10Entity getFicha_S5_10ById(Educa_Ficha_S5_10PkEntity educa_ficha_s5_10pk) {
        return educa_ficha_s5_10Repository.getReferenceById(educa_ficha_s5_10pk);
    }
///////////////////////////////////////////////////////////
    
    @Override
    public Integer generarIdS5_31(Integer id_ficha) {
        return educa_ficha_s5_31Repository.generarIdS5_31(id_ficha);
    }

    @Override
    public List<Educa_Ficha_S5_31Entity> listarS5_31ByIdFicha(Integer id_ficha) {
        return educa_ficha_s5_31Repository.listarS5_31ByIdFichaGrupo(id_ficha);
    }

    @Override
    public void guardarFichaS5_31(Educa_Ficha_S5_31Entity educa_ficha_s5_31) {
        educa_ficha_s5_31Repository.save(educa_ficha_s5_31);
    }

    @Override
    public void eliminarFichaS5_31(Educa_Ficha_S5_31PkEntity educa_ficha_s5_31pk) {
        educa_ficha_s5_31Repository.deleteById(educa_ficha_s5_31pk);
    }

    @Override
    public Educa_Ficha_S5_31Entity getFicha_S5_31ById(Educa_Ficha_S5_31PkEntity educa_ficha_s5_31pk) {
        return educa_ficha_s5_31Repository.getReferenceById(educa_ficha_s5_31pk);
    }

  

 
    
    @Override
    public Demuna_FichaEntity buscarFichaByComisionadoCodigoUnicoFicha1(String cod_unico) {
        return demuna_stablecimientosRepository.buscarFichaByComisionadoCodigoUnicoFicha1(cod_unico);
    }

 
    
       @Override
    public Demuna_EstablecimientosEntity buscarByCodEESS(String cod_unico) {
        return demuna_stablecimientosRepository.buscarByCodEESS(cod_unico.trim());
    }
    
    
    @Override
    public Demuna_FichaEntity validarSecX(Integer id_ficha, Integer id_ficha_x, String sec_x, String usu_valida) {
        
        Demuna_FichaEntity ficha = new Demuna_FichaEntity();
        Demuna_FichaEntity car_ficha = null;
        Demuna_Ficha_S2Entity coar_ficha_s2 = null;
        Demuna_Ficha_S3Entity coar_ficha_s3 = null;
         Demuna_Ficha_S4Entity coar_ficha_s4 = null;
        Demuna_Ficha_S5Entity coar_ficha_s5 = null;
        Demuna_Ficha_S6Entity coar_ficha_s6 = null;
        Demuna_Ficha_S7Entity coar_ficha_s7 = null;

 
        
        try {
            switch (sec_x) {
                case "sec_1":
                    demuna_FichaRepository.validarSec1(id_ficha, usu_valida);
                    ficha.setEstado_s1("1");
                    break;
                
                case "sec_2":
                    demuna_Ficha_S2Repository.validarSec2(id_ficha, id_ficha_x, usu_valida);
                    
                    coar_ficha_s2 = new Demuna_Ficha_S2Entity();
                    coar_ficha_s2.setEstado_s2("1");
                    break;
                case "sec_3":
                    demuna_Ficha_S3Repository.validarSec3(id_ficha, id_ficha_x, usu_valida);
                    
                    coar_ficha_s3 = new Demuna_Ficha_S3Entity();
                    coar_ficha_s3.setEstado_s3("1");
                    break;
                case "sec_4":
                    demuna_Ficha_S4Repository.validarSec4(id_ficha, id_ficha_x, usu_valida);
                    
                    coar_ficha_s4 = new Demuna_Ficha_S4Entity();
                    coar_ficha_s4.setEstado_s4("1");
                    break;
                case "sec_5":
                    demuna_Ficha_S5Repository.validarSec5(id_ficha, id_ficha_x, usu_valida);
                    
                    coar_ficha_s5 = new Demuna_Ficha_S5Entity();
                    coar_ficha_s5.setEstado_s5("1");
                    break;
                case "sec_6":
                    demuna_Ficha_S6Repository.validarSec6(id_ficha, id_ficha_x, usu_valida);
                    
                    coar_ficha_s6 = new Demuna_Ficha_S6Entity();
                    coar_ficha_s6.setEstado_s6("1");
                    break;
                case "sec_7":
                    demuna_Ficha_S7Repository.validarSec7(id_ficha, id_ficha_x, usu_valida);
                    
                    coar_ficha_s7 = new Demuna_Ficha_S7Entity();
                    coar_ficha_s7.setEstado_s7("1");
                    break;
               
               
            }
            
            ficha.setCoar_ficha(car_ficha);
            ficha.setCoar_ficha_s2(coar_ficha_s2);
            ficha.setCoar_ficha_s3(coar_ficha_s3);
            ficha.setCoar_ficha_s4(coar_ficha_s4);
            ficha.setCoar_ficha_s5(coar_ficha_s5);
            ficha.setCoar_ficha_s6(coar_ficha_s6);
            ficha.setCoar_ficha_s7(coar_ficha_s7);
          
           
            
            Integer sumOfStates = demuna_FichaRepository.findSumOfStatesByFichaId(id_ficha);
            String estado = "";
           
              if (sumOfStates != null) {
                if (sumOfStates < 7) {
                    estado = "1";
                    demuna_FichaRepository.validarFicha("1", usu_valida, id_ficha);
                    
                     System.out.println("sumOfStates es menor que 7: " + sumOfStates);
                } else if (sumOfStates == 11) {
                    estado = "2";
                    demuna_FichaRepository.validarFicha("2", usu_valida, id_ficha);
                     System.out.println("sumOfStates es igual a 7: " + sumOfStates);
                } else {
                  
                    System.out.println("sumOfStates es mayor que 7: " + sumOfStates);
                }

                ficha.setEstado(estado);
            }

            
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        return ficha;
    }

    
    
    /////////ARCHIVOS/////////////////////
//    @Override
//    public Integer generarIdArchivo() {
//        return demuna_ArchivoRepository.generarIdArchivo();
//    }
//    
//    @Override
//    public void guardarArchivo(Demuna_ArchivoEntity archivo) {
//        demuna_ArchivoRepository.save(archivo);
//    }
//    
//    @Override
//    public List<Demuna_ArchivoEntity> listarArchivos(Integer id_ficha, String nom_campo, String id_seccion, String cod_unico) {
//        return demuna_ArchivoRepository.listarArchivos(id_ficha, nom_campo, id_seccion,   cod_unico);
//    }
//    
//    @Override
//    public Demuna_ArchivoEntity getArchivoById(Integer id_archivo, Integer id_ficha, String cod_unico) {
//        return demuna_ArchivoRepository.getArchivoById(id_archivo, id_ficha, cod_unico);
//    }
//    
//    @Override
//    public void eliminarArchivoById(Demuna_ArchivoPk id) {
//        demuna_ArchivoRepository.deleteById(id);
//    }

    
 }
 
