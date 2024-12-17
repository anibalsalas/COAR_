package com.dp.gestioncoar.service.impl;

import com.dp.gestioncoar.dao.Demuna_FichaDAO;
import com.dp.gestioncoar.dto.GepCuadroComparativoDTO;
import com.dp.gestioncoar.entity.Coar_Ficha_S1_P1_2Entity;
import com.dp.gestioncoar.entity.Demuna_ArchivoEntity;
import com.dp.gestioncoar.entity.Demuna_ArchivoPk;
import com.dp.gestioncoar.entity.Demuna_EstablecimientosEntity;
import com.dp.gestioncoar.entity.Demuna_Ficha_S2Entity;
import com.dp.gestioncoar.entity.Demuna_Ficha_S3Entity;
import com.dp.gestioncoar.entity.Demuna_Ficha_S4Entity;
import com.dp.gestioncoar.entity.Demuna_Ficha_S5Entity;
import com.dp.gestioncoar.entity.Demuna_Ficha_S6Entity;
import com.dp.gestioncoar.entity.Demuna_Ficha_S7Entity;
import com.dp.gestioncoar.service.Demuna_FichaService;
import com.dp.gestioncoar.entity.XubigeoEntity;
import com.dp.gestioncoar.entity.Demuna_FichaEntity;
import com.dp.gestioncoar.entity.Demuna_Ficha_S10Entity;
import com.dp.gestioncoar.entity.Demuna_Ficha_S1Entity;
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
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Demuna_FichaServiceImpl implements Demuna_FichaService {


    @Autowired
    Demuna_FichaDAO demuna_FichaDAO;

    @Override
    public Integer generarIdFicha() {
        return demuna_FichaDAO.generarIdFicha();
    }

    @Override
    public void guardarFicha(Demuna_FichaEntity ficha) {
        demuna_FichaDAO.guardarFicha(ficha);
    }

    @Override
    public List<Demuna_FichaEntity> buscarFichaByCodigoUnico(String cod_unico) {
        return demuna_FichaDAO.buscarFichaByCodigoUnico(cod_unico);
    }
    
     @Override
    public Integer generarIdFichaS1() {
        return demuna_FichaDAO.generarIdFichaS1();
    }

    @Override
    public void guardarFichaS1(Demuna_Ficha_S1Entity fichaS1) {
        demuna_FichaDAO.guardarFichaS1(fichaS1);
    }
    
    @Override
    public Integer generarIdFichaS2() {
        return demuna_FichaDAO.generarIdFichaS2();
    }

    @Override
    public void guardarFichaS2(Demuna_Ficha_S2Entity fichaS2) {
        demuna_FichaDAO.guardarFichaS2(fichaS2);
    }

    @Override
    public List<Demuna_FichaEntity> listarFichas(String usuario_usu, String codi_depe_tde) {
        return demuna_FichaDAO.listarFichas(usuario_usu, codi_depe_tde);
    }

    @Override
    public Integer generarIdFichaS3() {
        return demuna_FichaDAO.generarIdFichaS3();
    }

    @Override
    public void guardarFichaS3(Demuna_Ficha_S3Entity fichaS3) {
        demuna_FichaDAO.guardarFichaS3(fichaS3);
    }

    @Override
    public Integer generarIdFichaS4() {
        return demuna_FichaDAO.generarIdFichaS4();
    }

    @Override
    public void guardarFichaS4(Demuna_Ficha_S4Entity fichaS4) {
        demuna_FichaDAO.guardarFichaS4(fichaS4);
    }

    @Override
    public Integer generarIdFichaS5() {
        return demuna_FichaDAO.generarIdFichaS5();
    }

    @Override
    public void guardarFichaS5(Demuna_Ficha_S5Entity fichaS5) {
        demuna_FichaDAO.guardarFichaS5(fichaS5);
    }

    @Override
    public Integer generarIdFichaS6() {
        return demuna_FichaDAO.generarIdFichaS6();
    }

    @Override
    public void guardarFichaS6(Demuna_Ficha_S6Entity fichaS6) {
        demuna_FichaDAO.guardarFichaS6(fichaS6);
    }

    @Override
    public Integer generarIdFichaS7() {
        return demuna_FichaDAO.generarIdFichaS7();
    }

    @Override
    public void guardarFichaS7(Demuna_Ficha_S7Entity fichaS7) {
        demuna_FichaDAO.guardarFichaS7(fichaS7);
    }

    
     @Override
    public Integer generarIdFichaS8() {
        return demuna_FichaDAO.generarIdFichaS8();
    }

    @Override
    public void guardarFichaS8(Demuna_Ficha_S8Entity fichaS8) {
        demuna_FichaDAO.guardarFichaS8(fichaS8);
    }
    
     @Override
    public Integer generarIdFichaS9() {
        return demuna_FichaDAO.generarIdFichaS9();
    }

    @Override
    public void guardarFichaS9(Demuna_Ficha_S9Entity fichaS9) {
        demuna_FichaDAO.guardarFichaS9(fichaS9);
    }
   
       @Override
    public Integer generarIdFichaS10() {
        return demuna_FichaDAO.generarIdFichaS10();
    }

    @Override
    public void guardarFichaS10(Demuna_Ficha_S10Entity fichaS10) {
        demuna_FichaDAO.guardarFichaS10(fichaS10);
    }
//////////////////////////////////////////////////////////////////////////////////////////
    @Override
    public Demuna_FichaEntity getFichaByIdFicha(Integer id_ficha) {
        return demuna_FichaDAO.getFichaByIdFicha(id_ficha);
    }
    
      @Override
    public Demuna_Ficha_S1Entity getFichaS1ByIdFicha(Integer id_ficha) {
        return demuna_FichaDAO.getFichaS1ByIdFicha(id_ficha);
    }
    
    @Override
    public Demuna_Ficha_S2Entity getFichaS2ByIdFicha(Integer id_ficha) {
        return demuna_FichaDAO.getFichaS2ByIdFicha(id_ficha);
    }

    @Override
    public Demuna_Ficha_S3Entity getFichaS3ByIdFicha(Integer id_ficha) {
        return demuna_FichaDAO.getFichaS3ByIdFicha(id_ficha);
    }

    @Override
    public Demuna_Ficha_S4Entity getFichaS4ByIdFicha(Integer id_ficha) {
        return demuna_FichaDAO.getFichaS4ByIdFicha(id_ficha);
    }

    @Override
    public Demuna_Ficha_S5Entity getFichaS5ByIdFicha(Integer id_ficha) {
        return demuna_FichaDAO.getFichaS5ByIdFicha(id_ficha);
    }

    @Override
    public Demuna_Ficha_S6Entity getFichaS6ByIdFicha(Integer id_ficha) {
        return demuna_FichaDAO.getFichaS6ByIdFicha(id_ficha);
    }

    @Override
    public Demuna_Ficha_S7Entity getFichaS7ByIdFicha(Integer id_ficha) {
        return demuna_FichaDAO.getFichaS7ByIdFicha(id_ficha);
    }
    
      @Override
    public Demuna_Ficha_S8Entity getFichaS8ByIdFicha(Integer id_ficha) {
        return demuna_FichaDAO.getFichaS8ByIdFicha(id_ficha);
    }
    
      @Override
    public Demuna_Ficha_S9Entity getFichaS9ByIdFicha(Integer id_ficha) {
        return demuna_FichaDAO.getFichaS9ByIdFicha(id_ficha);
    }
    
      @Override
    public Demuna_Ficha_S10Entity getFichaS10ByIdFicha(Integer id_ficha) {
        return demuna_FichaDAO.getFichaS10ByIdFicha(id_ficha);
    }

  


    /****************************************************/
    


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    @Override
    public List<XubigeoEntity> findAllDepartamento() {
        return demuna_FichaDAO.findAllDepartamento();
    }

    @Override
    public List<XubigeoEntity> findAllProvincia(String coddpto) {
        return demuna_FichaDAO.findAllProvincia(coddpto);
    }


    @Override
    public List<XubigeoEntity> findAllDistrito(String coddpto, String codprov) {
        return demuna_FichaDAO.findAllDistrito(coddpto, codprov);
    }


    @Override
    public List<Demuna_EstablecimientosEntity> findMunicipalidadesByDepartamento(String coddptox, String codprovx) {
        return demuna_FichaDAO.findMunicipalidadesByDepartamento(coddptox, codprovx);
    }

    @Override
    public List<Demuna_EstablecimientosEntity> findMunicipalidadesByDepartamentoAndProvinciaAndDistrito(String coddptox, String codprovx, String coddistx) {
        return demuna_FichaDAO.findMunicipalidadesByDepartamentoAndProvinciaAndDistrito(coddptox, codprovx, coddistx);
    }

    @Override
    public List<String> listarRegiones() {
        return demuna_FichaDAO.listarRegiones();
    }

    @Override
    public XubigeoEntity findDptoByNomb(String departamento) {
        return demuna_FichaDAO.findDptoByNomb(departamento);
    }

    @Override
    public List<GepCuadroComparativoDTO> listarCuadroRegistro() {
        return demuna_FichaDAO.listarCuadroRegistro();
    }
//

    @Override
    public GepCuadroComparativoDTO listarTotalCuadroRegistro() {
        return demuna_FichaDAO.listarTotalCuadroRegistro();
    }
    
  

    @Override
    public List<GepCuadroComparativoDTO> listarCuadroRegistrox() {
        return demuna_FichaDAO.listarCuadroRegistrox();
    }

    @Override
    public XubigeoEntity findProvByNomb(String coddpto, String provincia) {
        return demuna_FichaDAO.findProvByNomb(coddpto, provincia);
    }

    @Override
    public XubigeoEntity findDistByNomb(String coddpto, String codprov, String distrito) {
        return demuna_FichaDAO.findDistByNomb(coddpto, codprov, distrito);
    }


    @Override
    public List<Demuna_EstablecimientosEntity> listarEM() {
        return demuna_FichaDAO.listarEM();
    }

    @Override
    public List<Demuna_FichaEntity> listarSeguimientoFichas(String codi_depa_dpt, String estado) {
        return demuna_FichaDAO.listarSeguimientoFichas(codi_depa_dpt, estado);
    }
    
 

    

  

    @Override
    public List<Demuna_FichaEntity> listarFichasByComisionado(String usuario_usu) {
        return demuna_FichaDAO.listarFichasByComisionado(usuario_usu);
    }

   
//    @Override
//    public Demuna_FichaEntity validarSecX(Integer id_ficha, Integer id_ficha_x, String sec_x, String usu_valida) {
//        return demuna_FichaDAO.validarSecX(id_ficha, id_ficha_x, sec_x, usu_valida);
//    }

    @Override
    public Demuna_FichaEntity getFichaByCodigoUnico(String cod_unico) {
        return demuna_FichaDAO.getFichaByCodigoUnico(cod_unico);
    }
    

    /*****************************************************************************/
    @Override
    public Integer generarIdS4_3(Integer id_ficha) {
        return demuna_FichaDAO.generarIdS4_3(id_ficha);
    }

    @Override
    public List<Educa_Ficha_S4_3Entity> listarS4_3ByIdFicha(Integer id_ficha) {
        return demuna_FichaDAO.listarS4_3ByIdFicha(id_ficha);
    }

    @Override
    public void guardarFichaS4_3(Educa_Ficha_S4_3Entity educa_ficha_s4_3) {
        demuna_FichaDAO.guardarFichaS4_3(educa_ficha_s4_3);
    }

    @Override
    public void eliminarFichaS4_3(Educa_Ficha_S4_3PkEntity educa_ficha_s4_3pk) {
        demuna_FichaDAO.eliminarFichaS4_3(educa_ficha_s4_3pk);
    }

    @Override
    public Educa_Ficha_S4_3Entity getFicha_S4_3ById(Educa_Ficha_S4_3PkEntity educa_ficha_s4_3pk) {
        return demuna_FichaDAO.getFicha_S4_3ById(educa_ficha_s4_3pk);
    }
/************************************************************************************/

    
    @Override
    public List<Educa_ficha_preguntas4Entity> listarPregunta() {
        return demuna_FichaDAO.listarPregunta();
    }
    
     @Override
    public Integer generarIdPregunta() {
        return demuna_FichaDAO.generarIdPregunta();
    }
    
    
    /*****************************************************************************/
    /*****************************************************************************/
        @Override
        public Integer generarIdS5_1(Integer id_ficha) {
            return demuna_FichaDAO.generarIdS5_1(id_ficha);
        }

        @Override
        public List<Educa_Ficha_S5_1Entity> listarS5_1ByIdFicha(Integer id_ficha) {
            return demuna_FichaDAO.listarS5_1ByIdFicha(id_ficha);
        }

        @Override
        public void guardarFichaS5_1(Educa_Ficha_S5_1Entity educa_ficha_s5_1) {
            demuna_FichaDAO.guardarFichaS5_1(educa_ficha_s5_1);
        }

        @Override
        public void eliminarFichaS5_1(Educa_Ficha_S5_1PkEntity educa_ficha_s5_1pk) {
            demuna_FichaDAO.eliminarFichaS5_1(educa_ficha_s5_1pk);
        }

        @Override
        public Educa_Ficha_S5_1Entity getFicha_S5_1ById(Educa_Ficha_S5_1PkEntity educa_ficha_s5_1pk) {
            return demuna_FichaDAO.getFicha_S5_1ById(educa_ficha_s5_1pk);
        }
        
        /*****************************************************************************/
        @Override
        public Integer generarIdS5_2(Integer id_ficha) {
            return demuna_FichaDAO.generarIdS5_2(id_ficha);
        }

        @Override
        public List<Educa_Ficha_S5_2Entity> listarS5_2ByIdFicha(Integer id_ficha) {
            return demuna_FichaDAO.listarS5_2ByIdFicha(id_ficha);
        }

        @Override
        public void guardarFichaS5_2(Educa_Ficha_S5_2Entity educa_ficha_s5_2) {
            demuna_FichaDAO.guardarFichaS5_2(educa_ficha_s5_2);
        }

        @Override
        public void eliminarFichaS5_2(Educa_Ficha_S5_2PkEntity educa_ficha_s5_2pk) {
            demuna_FichaDAO.eliminarFichaS5_2(educa_ficha_s5_2pk);
        }

        @Override
        public Educa_Ficha_S5_2Entity getFicha_S5_2ById(Educa_Ficha_S5_2PkEntity educa_ficha_s5_2pk) {
            return demuna_FichaDAO.getFicha_S5_2ById(educa_ficha_s5_2pk);
        }


        
        /*****************************************************************************/
//        @Override
//        public Integer generarIdS1_2(Integer id_ficha) {
//            return demuna_FichaDAO.generarIdS1_2(id_ficha);
//        }
//
//        @Override
//        public List<Coar_Ficha_S1_P1_2Entity> listarS1_2ByIdFicha(Integer id_ficha) {
//            return demuna_FichaDAO.listarS1_2ByIdFicha(id_ficha);
//        }
//
//        @Override
//        public void guardarFichaS1_2(Coar_Ficha_S1_P1_2Entity coar_ficha_s1_p1_2) {
//            demuna_FichaDAO.guardarFichaS1_2(coar_ficha_s1_p1_2);
//        }
//
//        @Override
//        public void eliminarFichaS1_2(Coar_Ficha_S1_P1_2PkEntity coar_ficha_s1_p1_2pk) {
//            demuna_FichaDAO.eliminarFichaS1_2(coar_ficha_s1_p1_2pk);
//        }
//
//        @Override
//        public Coar_Ficha_S1_P1_2Entity getFicha_S1_2ById(Coar_Ficha_S1_P1_2PkEntity coar_ficha_s1_p1_2pk) {
//            return demuna_FichaDAO.getFicha_S1_2ById(coar_ficha_s1_p1_2pk);
//        }
//        
//        
        /*************************************************************************/
//         @Override
//        public Integer generarIdS5_4(Integer id_ficha) {
//            return demuna_FichaDAO.generarIdS5_4(id_ficha);
//        }
//
//        @Override
//        public List<Educa_Ficha_S5_4Entity> listarS5_4ByIdFicha(Integer id_ficha) {
//            return demuna_FichaDAO.listarS5_4ByIdFicha(id_ficha);
//        }
//
//        @Override
//        public void guardarFichaS5_4(Educa_Ficha_S5_4Entity educa_ficha_s5_4) {
//            demuna_FichaDAO.guardarFichaS5_4(educa_ficha_s5_4);
//        }
//
//        @Override
//        public void eliminarFichaS5_4(Educa_Ficha_S5_4PkEntity educa_ficha_s5_4pk) {
//            demuna_FichaDAO.eliminarFichaS5_4(educa_ficha_s5_4pk);
//        }
//
//        @Override
//        public Educa_Ficha_S5_4Entity getFicha_S5_4ById(Educa_Ficha_S5_4PkEntity educa_ficha_s5_4pk) {
//            return demuna_FichaDAO.getFicha_S5_4ById(educa_ficha_s5_4pk);
//        }
//        
//        
//        /*************************************************************************/
//         @Override
//        public Integer generarIdS5_5(Integer id_ficha) {
//            return demuna_FichaDAO.generarIdS5_5(id_ficha);
//        }
//
//        @Override
//        public List<Educa_Ficha_S5_5Entity> listarS5_5ByIdFicha(Integer id_ficha) {
//            return demuna_FichaDAO.listarS5_5ByIdFicha(id_ficha);
//        }
//
//        @Override
//        public void guardarFichaS5_5(Educa_Ficha_S5_5Entity educa_ficha_s5_5) {
//            demuna_FichaDAO.guardarFichaS5_5(educa_ficha_s5_5);
//        }
//
//        @Override
//        public void eliminarFichaS5_5(Educa_Ficha_S5_5PkEntity educa_ficha_s5_5pk) {
//            demuna_FichaDAO.eliminarFichaS5_5(educa_ficha_s5_5pk);
//        }
//
//        @Override
//        public Educa_Ficha_S5_5Entity getFicha_S5_5ById(Educa_Ficha_S5_5PkEntity educa_ficha_s5_5pk) {
//            return demuna_FichaDAO.getFicha_S5_5ById(educa_ficha_s5_5pk);
//        }
//        
//        /*************************************************************************/
//        @Override
//        public Integer generarIdS5_6(Integer id_ficha) {
//            return demuna_FichaDAO.generarIdS5_6(id_ficha);
//        }
//
//        @Override
//        public List<Educa_Ficha_S5_6Entity> listarS5_6ByIdFicha(Integer id_ficha) {
//            return demuna_FichaDAO.listarS5_6ByIdFicha(id_ficha);
//        }
//
//        @Override
//        public void guardarFichaS5_6(Educa_Ficha_S5_6Entity educa_ficha_s5_6) {
//            demuna_FichaDAO.guardarFichaS5_6(educa_ficha_s5_6);
//        }
//
//        @Override
//        public void eliminarFichaS5_6(Educa_Ficha_S5_6PkEntity educa_ficha_s5_6pk) {
//            demuna_FichaDAO.eliminarFichaS5_6(educa_ficha_s5_6pk);
//        }
//
//        @Override
//        public Educa_Ficha_S5_6Entity getFicha_S5_6ById(Educa_Ficha_S5_6PkEntity educa_ficha_s5_6pk) {
//            return demuna_FichaDAO.getFicha_S5_6ById(educa_ficha_s5_6pk);
//        }
//    /*************************************************************************/
//    @Override
//    public Integer generarIdS5_7(Integer id_ficha) {
//        return demuna_FichaDAO.generarIdS5_7(id_ficha);
//    }
//
//    @Override
//    public List<Educa_Ficha_S5_7Entity> listarS5_7ByIdFicha(Integer id_ficha) {
//        return demuna_FichaDAO.listarS5_7ByIdFicha(id_ficha);
//    }
//
//    @Override
//    public void guardarFichaS5_7(Educa_Ficha_S5_7Entity educa_ficha_s5_7) {
//        demuna_FichaDAO.guardarFichaS5_7(educa_ficha_s5_7);
//    }
//
//    @Override
//    public void eliminarFichaS5_7(Educa_Ficha_S5_7PkEntity educa_ficha_s5_7pk) {
//        demuna_FichaDAO.eliminarFichaS5_7(educa_ficha_s5_7pk);
//    }
//
//    @Override
//    public Educa_Ficha_S5_7Entity getFicha_S5_7ById(Educa_Ficha_S5_7PkEntity educa_ficha_s5_7pk) {
//        return demuna_FichaDAO.getFicha_S5_7ById(educa_ficha_s5_7pk);
//    }
//
//    
//    /*************************************************************************/
//    @Override
//    public Integer generarIdS5_8(Integer id_ficha) {
//        return demuna_FichaDAO.generarIdS5_8(id_ficha);
//    }
//
//    @Override
//    public List<Educa_Ficha_S5_8Entity> listarS5_8ByIdFicha(Integer id_ficha) {
//        return demuna_FichaDAO.listarS5_8ByIdFicha(id_ficha);
//    }
//
//    @Override
//    public void guardarFichaS5_8(Educa_Ficha_S5_8Entity educa_ficha_s5_8) {
//        demuna_FichaDAO.guardarFichaS5_8(educa_ficha_s5_8);
//    }
//
//    @Override
//    public void eliminarFichaS5_8(Educa_Ficha_S5_8PkEntity educa_ficha_s5_8pk) {
//        demuna_FichaDAO.eliminarFichaS5_8(educa_ficha_s5_8pk);
//    }
//
//    @Override
//    public Educa_Ficha_S5_8Entity getFicha_S5_8ById(Educa_Ficha_S5_8PkEntity educa_ficha_s5_8pk) {
//        return demuna_FichaDAO.getFicha_S5_8ById(educa_ficha_s5_8pk);
//    }
//
//    
//    /*************************************************************************/
//    @Override
//    public Integer generarIdS5_9(Integer id_ficha) {
//        return demuna_FichaDAO.generarIdS5_9(id_ficha);
//    }
//
//    @Override
//    public List<Educa_Ficha_S5_9Entity> listarS5_9ByIdFicha(Integer id_ficha) {
//        return demuna_FichaDAO.listarS5_9ByIdFicha(id_ficha);
//    }
//
//    @Override
//    public void guardarFichaS5_9(Educa_Ficha_S5_9Entity educa_ficha_s5_9) {
//        demuna_FichaDAO.guardarFichaS5_9(educa_ficha_s5_9);
//    }
//
//    @Override
//    public void eliminarFichaS5_9(Educa_Ficha_S5_9PkEntity educa_ficha_s5_9pk) {
//        demuna_FichaDAO.eliminarFichaS5_9(educa_ficha_s5_9pk);
//    }
//
//    @Override
//    public Educa_Ficha_S5_9Entity getFicha_S5_9ById(Educa_Ficha_S5_9PkEntity educa_ficha_s5_9pk) {
//        return demuna_FichaDAO.getFicha_S5_9ById(educa_ficha_s5_9pk);
//    }
//    
//    
//    /*************************************************************************/
//    @Override
//    public Integer generarIdS5_10(Integer id_ficha) {
//        return demuna_FichaDAO.generarIdS5_10(id_ficha);
//    }
//
//    @Override
//    public List<Educa_Ficha_S5_10Entity> listarS5_10ByIdFicha(Integer id_ficha) {
//        return demuna_FichaDAO.listarS5_10ByIdFicha(id_ficha);
//    }
//
//    @Override
//    public void guardarFichaS5_10 (Educa_Ficha_S5_10Entity educa_ficha_s5_10) {
//        demuna_FichaDAO.guardarFichaS5_10(educa_ficha_s5_10);
//    }
//
//    @Override
//    public void eliminarFichaS5_10(Educa_Ficha_S5_10PkEntity educa_ficha_s5_10pk) {
//        demuna_FichaDAO.eliminarFichaS5_10(educa_ficha_s5_10pk);
//    }
//
//    @Override
//    public Educa_Ficha_S5_10Entity getFicha_S5_10ById(Educa_Ficha_S5_10PkEntity educa_ficha_s5_10pk) {
//        return demuna_FichaDAO.getFicha_S5_10ById(educa_ficha_s5_10pk);
//    }
//
//    
//    
//    
//    /*************************************************************************/
//    @Override
//    public Integer generarIdS5_31(Integer id_ficha) {
//        return demuna_FichaDAO.generarIdS5_31(id_ficha);
//    }
//
//    @Override
//    public List<Educa_Ficha_S5_31Entity> listarS5_31ByIdFicha(Integer id_ficha) {
//        return demuna_FichaDAO.listarS5_31ByIdFicha(id_ficha);
//    }
//
//    @Override
//    public void guardarFichaS5_31 (Educa_Ficha_S5_31Entity educa_ficha_s5_31) {
//        demuna_FichaDAO.guardarFichaS5_31(educa_ficha_s5_31);
//    }
//
//    @Override
//    public void eliminarFichaS5_31(Educa_Ficha_S5_31PkEntity educa_ficha_s5_31pk) {
//        demuna_FichaDAO.eliminarFichaS5_31(educa_ficha_s5_31pk);
//    }
//
//    @Override
//    public Educa_Ficha_S5_31Entity getFicha_S5_31ById(Educa_Ficha_S5_31PkEntity educa_ficha_s5_31pk) {
//        return demuna_FichaDAO.getFicha_S5_31ById(educa_ficha_s5_31pk);
//    }
    
    
 @Override
    public Demuna_EstablecimientosEntity buscarByCodEESS(String cod_unico) {
        return demuna_FichaDAO.buscarByCodEESS(cod_unico);
    }
    
     @Override
    public Demuna_FichaEntity buscarFichaByComisionadoCodigoUnicoFicha1(String cod_unico) {
        return demuna_FichaDAO.buscarFichaByComisionadoCodigoUnicoFicha1(cod_unico);
    }

 
 @Override
    public Demuna_FichaEntity validarSecX(Integer id_ficha, Integer id_ficha_x, String sec_x, String usu_valida) {
        return demuna_FichaDAO.validarSecX(id_ficha, id_ficha_x, sec_x, usu_valida);
    }

   
// ////////////ARCHIVOS////////////
//    @Override
//    public Integer generarIdArchivo() {
//        return demuna_FichaDAO.generarIdArchivo();
//    }
//
//    @Override
//    public void guardarArchivo(Demuna_ArchivoEntity archivo) {
//        demuna_FichaDAO.guardarArchivo(archivo);
//    }
//
//    @Override
//    public List<Demuna_ArchivoEntity> listarArchivos(Integer id_ficha, String nom_campo, String id_seccion, String cod_unico) {
//        return demuna_FichaDAO.listarArchivos(id_ficha, nom_campo, id_seccion, cod_unico);
//    }
//
//    @Override
//    public Demuna_ArchivoEntity getArchivoById(Integer id_archivo, Integer id_ficha, String cod_unico) {
//        return demuna_FichaDAO.getArchivoById(id_archivo, id_ficha,cod_unico);
//    }
//
//    @Override
//    public void eliminarArchivoById(Demuna_ArchivoPk id) {
//        demuna_FichaDAO.eliminarArchivoById(id);
//    }
    

}