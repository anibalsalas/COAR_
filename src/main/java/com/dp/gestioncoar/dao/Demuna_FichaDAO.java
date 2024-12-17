package com.dp.gestioncoar.dao;

import com.dp.gestioncoar.dto.GepCuadroComparativoDTO;
import com.dp.gestioncoar.entity.Coar_Ficha_S1_P1_2Entity;
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
import java.util.List;

public interface Demuna_FichaDAO {

    //SECCION GENERAL
    public List<Demuna_FichaEntity> listarFichas(String usuario_usu, String codi_depe_tde);

    public Integer generarIdFicha();
    
    public void guardarFicha(Demuna_FichaEntity ficha);

    public List<Demuna_FichaEntity> buscarFichaByCodigoUnico(String cod_unico);

    public Demuna_FichaEntity getFichaByIdFicha(Integer id_ficha);

    public List<Demuna_FichaEntity> listarFichasByComisionado(String usuario_usu);
    
    public Demuna_FichaEntity getFichaByCodigoUnico(String cod_unico);
/**********************************/

    /**
     *
     * INICIO NUEVO
     */
    public List<Demuna_EstablecimientosEntity> listarEM();

    public List<Demuna_FichaEntity> listarFichasByCodUnico(String cod_unico);

    //public List<Demuna_FichaEntity> listarFichasByCodUnico2();
    /*************************************************************/

    /**
     *
     * FIN NUEVO OSWALDO
     */
    
       //SECCION 1
    //public String buscarTipoFichaEstablecimiento(String cod_unico);
    public Integer generarIdFichaS1();

    public void guardarFichaS1(Demuna_Ficha_S1Entity fichaS1);

    public Demuna_Ficha_S1Entity getFichaS1ByIdFicha(Integer id_ficha);
    /***********/
    
    //SECCION 2
    //public String buscarTipoFichaEstablecimiento(String cod_unico);
    public Integer generarIdFichaS2();

    public void guardarFichaS2(Demuna_Ficha_S2Entity fichaS2);

    public Demuna_Ficha_S2Entity getFichaS2ByIdFicha(Integer id_ficha);
    /***********/


    //SECCION 3
    public Integer generarIdFichaS3();

    public void guardarFichaS3(Demuna_Ficha_S3Entity fichaS3);

    public Demuna_Ficha_S3Entity getFichaS3ByIdFicha(Integer id_ficha);
     /***********/
    
    //SECCION 4
    public Integer generarIdFichaS4();

    public void guardarFichaS4(Demuna_Ficha_S4Entity fichaS4);

    public Demuna_Ficha_S4Entity getFichaS4ByIdFicha(Integer id_ficha);
    /***********/


    //SECCION 5
    public Integer generarIdFichaS5();

    public void guardarFichaS5(Demuna_Ficha_S5Entity fichaS5);

    public Demuna_Ficha_S5Entity getFichaS5ByIdFicha(Integer id_ficha);
    /********/



    //SECCION 6
    public Integer generarIdFichaS6();

    public void guardarFichaS6(Demuna_Ficha_S6Entity fichaS6);

    public Demuna_Ficha_S6Entity getFichaS6ByIdFicha(Integer id_ficha);
    /********/


    //SECCION 7
    public Integer generarIdFichaS7();
    public void guardarFichaS7(Demuna_Ficha_S7Entity fichaS7);
    public Demuna_Ficha_S7Entity getFichaS7ByIdFicha(Integer id_ficha);
    /********/
    
    
     //SECCION 8
    public Integer generarIdFichaS8();
    public void guardarFichaS8(Demuna_Ficha_S8Entity fichaS8);
    public Demuna_Ficha_S8Entity getFichaS8ByIdFicha(Integer id_ficha);
    /********/
    
     //SECCION 9
    public Integer generarIdFichaS9();
    public void guardarFichaS9(Demuna_Ficha_S9Entity fichaS9);
    public Demuna_Ficha_S9Entity getFichaS9ByIdFicha(Integer id_ficha);
    /********/
    
     //SECCION 10
    public Integer generarIdFichaS10();
    public void guardarFichaS10(Demuna_Ficha_S10Entity fichaS10);
    public Demuna_Ficha_S10Entity getFichaS10ByIdFicha(Integer id_ficha);
    /********/
    
  
    ////////////////////////////////////////////////////////////////////////
    
    public List<Demuna_FichaEntity> listarSeguimientoFichas(String codi_depa_dpt, String estado);

    public List<GepCuadroComparativoDTO> listarCuadroRegistro();

    public GepCuadroComparativoDTO listarTotalCuadroRegistro();
   
    public List<GepCuadroComparativoDTO> listarCuadroRegistrox();

//    //SALUD ESTABLECIMIENTO
    public Demuna_EstablecimientosEntity buscarByCodEESS(String cod_unico);

    //XUBIGEO
    List<XubigeoEntity> findAllDepartamento();

    List<XubigeoEntity> findAllProvincia(String coddpto);

    //List<Demuna_EstablecimientosEntity> findUniqueDistrito(String coddptox, String codprovx, String coddistx);
    List<XubigeoEntity> findAllDistrito(String coddpto, String codprov);

    List<Demuna_EstablecimientosEntity> findMunicipalidadesByDepartamento(String coddptox, String codprovx);

    List<Demuna_EstablecimientosEntity> findMunicipalidadesByDepartamentoAndProvinciaAndDistrito(String coddptox, String codprovx, String coddistx);

    XubigeoEntity findDptoByNomb(String departamento);

    XubigeoEntity findProvByNomb(String coddpto, String provincia);

    XubigeoEntity findDistByNomb(String coddpto, String codprov, String distrito);

    public List<String> listarRegiones();
    
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      
    public Integer generarIdS4_3(Integer id_ficha);
    public Integer generarIdS5_1(Integer id_ficha);
    
    public List<Educa_Ficha_S4_3Entity> listarS4_3ByIdFicha(Integer id_ficha);
     public List<Educa_Ficha_S5_1Entity> listarS5_1ByIdFicha(Integer id_ficha);
     
    public void guardarFichaS4_3(Educa_Ficha_S4_3Entity educa_ficha_s4_3);
    public void guardarFichaS5_1(Educa_Ficha_S5_1Entity educa_ficha_s5_1);
    
    public void eliminarFichaS4_3(Educa_Ficha_S4_3PkEntity educa_ficha_s4_3pk);
    public void eliminarFichaS5_1(Educa_Ficha_S5_1PkEntity educa_ficha_s5_1pk);
    
    public Educa_Ficha_S4_3Entity getFicha_S4_3ById(Educa_Ficha_S4_3PkEntity educa_ficha_s4_3pk);
    public Educa_Ficha_S5_1Entity getFicha_S5_1ById(Educa_Ficha_S5_1PkEntity educa_ficha_s5_1pk);
    
    public List<Educa_ficha_preguntas4Entity> listarPregunta();
    
        public Integer generarIdPregunta();

        
    public Integer generarIdS5_2(Integer id_ficha);
    public List<Educa_Ficha_S5_2Entity> listarS5_2ByIdFicha(Integer id_ficha);
    public void guardarFichaS5_2(Educa_Ficha_S5_2Entity educa_ficha_s5_2);
    public void eliminarFichaS5_2(Educa_Ficha_S5_2PkEntity educa_ficha_s5_2pk);
    public Educa_Ficha_S5_2Entity getFicha_S5_2ById(Educa_Ficha_S5_2PkEntity educa_ficha_s5_2pk);

   
//        public Integer generarIdS1_2(Integer id_ficha);
//    public List<Coar_Ficha_S1_P1_2Entity> listarS1_2ByIdFicha(Integer id_ficha);
//    public void guardarFichaS1_2(Coar_Ficha_S1_P1_2Entity coar_ficha_s1_p1_2);
//    public void eliminarFichaS1_2(Coar_Ficha_S1_P1_2PkEntity coar_ficha_s1_p1_2pk);
//    public Coar_Ficha_S1_P1_2Entity getFicha_S1_2ById(Coar_Ficha_S1_P1_2PkEntity coar_ficha_s1_p1_2pk);

    
     public Integer generarIdS5_4(Integer id_ficha);

    public List<Educa_Ficha_S5_4Entity> listarS5_4ByIdFicha(Integer id_ficha);

    public void guardarFichaS5_4(Educa_Ficha_S5_4Entity educa_ficha_s5_4);

    public void eliminarFichaS5_4(Educa_Ficha_S5_4PkEntity educa_ficha_s5_4pk);

    public Educa_Ficha_S5_4Entity getFicha_S5_4ById(Educa_Ficha_S5_4PkEntity educa_ficha_s5_4pk);
    
    
    
      public Integer generarIdS5_5(Integer id_ficha);

    public List<Educa_Ficha_S5_5Entity> listarS5_5ByIdFicha(Integer id_ficha);

    public void guardarFichaS5_5(Educa_Ficha_S5_5Entity educa_ficha_s5_5);

    public void eliminarFichaS5_5(Educa_Ficha_S5_5PkEntity educa_ficha_s5_5pk);

    public Educa_Ficha_S5_5Entity getFicha_S5_5ById(Educa_Ficha_S5_5PkEntity educa_ficha_s5_5pk);
    
    
    public Integer generarIdS5_6(Integer id_ficha);

    public List<Educa_Ficha_S5_6Entity> listarS5_6ByIdFicha(Integer id_ficha);

    public void guardarFichaS5_6(Educa_Ficha_S5_6Entity educa_ficha_s5_6);

    public void eliminarFichaS5_6(Educa_Ficha_S5_6PkEntity educa_ficha_s5_6pk);

    public Educa_Ficha_S5_6Entity getFicha_S5_6ById(Educa_Ficha_S5_6PkEntity educa_ficha_s5_6pk);

    
   

    public Integer generarIdS5_7(Integer id_ficha);

    public List<Educa_Ficha_S5_7Entity> listarS5_7ByIdFicha(Integer id_ficha);

    public void guardarFichaS5_7(Educa_Ficha_S5_7Entity educa_ficha_s5_7);

    public void eliminarFichaS5_7(Educa_Ficha_S5_7PkEntity educa_ficha_s5_7pk);

    public Educa_Ficha_S5_7Entity getFicha_S5_7ById(Educa_Ficha_S5_7PkEntity educa_ficha_s5_7pk);

    
    public Integer generarIdS5_8(Integer id_ficha);

    public List<Educa_Ficha_S5_8Entity> listarS5_8ByIdFicha(Integer id_ficha);

    public void guardarFichaS5_8(Educa_Ficha_S5_8Entity educa_ficha_s5_8);

    public void eliminarFichaS5_8(Educa_Ficha_S5_8PkEntity educa_ficha_s5_8pk);

    public Educa_Ficha_S5_8Entity getFicha_S5_8ById(Educa_Ficha_S5_8PkEntity educa_ficha_s5_8pk);


    
    public Integer generarIdS5_9(Integer id_ficha);

    public List<Educa_Ficha_S5_9Entity> listarS5_9ByIdFicha(Integer id_ficha);

    public void guardarFichaS5_9(Educa_Ficha_S5_9Entity educa_ficha_s5_9);

    public void eliminarFichaS5_9(Educa_Ficha_S5_9PkEntity educa_ficha_s5_9pk);

    public Educa_Ficha_S5_9Entity getFicha_S5_9ById(Educa_Ficha_S5_9PkEntity educa_ficha_s5_9pk);

    
    public Integer generarIdS5_10(Integer id_ficha);

    public List<Educa_Ficha_S5_10Entity> listarS5_10ByIdFicha(Integer id_ficha);

    public void guardarFichaS5_10(Educa_Ficha_S5_10Entity educa_ficha_s5_10);

    public void eliminarFichaS5_10(Educa_Ficha_S5_10PkEntity educa_ficha_s5_10pk);

    public Educa_Ficha_S5_10Entity getFicha_S5_10ById(Educa_Ficha_S5_10PkEntity educa_ficha_s5_10pk);

    
    public Integer generarIdS5_31(Integer id_ficha);

    public List<Educa_Ficha_S5_31Entity> listarS5_31ByIdFicha(Integer id_ficha);

    public void guardarFichaS5_31(Educa_Ficha_S5_31Entity educa_ficha_s5_31);

    public void eliminarFichaS5_31(Educa_Ficha_S5_31PkEntity educa_ficha_s5_31pk);

    public Educa_Ficha_S5_31Entity getFicha_S5_31ById(Educa_Ficha_S5_31PkEntity educa_ficha_s5_31pk);
        ////////////////////////////////////////////////
    
   
    
     
     ///////////////////////////////////////////////////////////////////
       public Demuna_FichaEntity buscarFichaByComisionadoCodigoUnicoFicha1(String cod_unico);

        public Demuna_FichaEntity validarSecX(Integer id_ficha, Integer id_ficha_x, String sec_x, String usu_valida);
        
        
        
        //ARCHIVOS
//    public Integer generarIdArchivo();
//
//    public void guardarArchivo(Demuna_ArchivoEntity archivo);
//
//    public List<Demuna_ArchivoEntity> listarArchivos(Integer id_ficha, String nom_campo, String id_seccion, String cod_unico);
//
//    public Demuna_ArchivoEntity getArchivoById(Integer id_archivo, Integer id_ficha, String cod_unico);
//
//    public void eliminarArchivoById(Demuna_ArchivoPk id);


}
