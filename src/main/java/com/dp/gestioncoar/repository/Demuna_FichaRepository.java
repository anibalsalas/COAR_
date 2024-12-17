package com.dp.gestioncoar.repository;

import com.dp.gestioncoar.entity.Demuna_FichaEntity;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface Demuna_FichaRepository extends JpaRepository<Demuna_FichaEntity, Integer> {

    @Query("select f from Demuna_FichaEntity f where (trim(f.usu_registro)=trim(:usu_registro)) and  (f.codi_depe_tde=:codi_depe_tde) order by  f.departamento_coar asc,f.provincia_coar asc,f.distrito_coar asc,  f.estado desc")
    public List<Demuna_FichaEntity> listarFichas(@Param("usu_registro") String usu_registro, @Param("codi_depe_tde") String codi_depe_tde);

    @Query("select f from Demuna_FichaEntity f where ('00'=trim(:cod_unico) or trim(f.cod_unico)=trim(:cod_unico))")
    public List<Demuna_FichaEntity> listarFichasByCodUnico(@Param("cod_unico") String cod_unico);

    @Query("select f from Demuna_FichaEntity f where f.cod_unico IN ('00005197','00007277')")
    public List<Demuna_FichaEntity> listarFichasByCodUnico2();

    @Query(value = "select nvl(max(id_ficha),0) + 1 from siga.car_ficha", nativeQuery = true)
    public Integer generarIdFicha();

    @Query("select f from Demuna_FichaEntity f where f.cod_unico=:cod_unico")
    public List<Demuna_FichaEntity> buscarFichaByCodigoUnico(@Param("cod_unico") String cod_unico);

    @Query(value = "select f from Demuna_FichaEntity f where f.id_ficha=:id_ficha")
    public Demuna_FichaEntity getFichaByIdFicha(@Param("id_ficha") Integer id_ficha);

    @Query("select f from Demuna_FichaEntity f where trim(f.cod_unico)=trim(:cod_unico) ")
    public Demuna_FichaEntity buscarFichaByComisionadoCodigoUnico(@Param("cod_unico") String cod_unico);

    @Query("select count(f) from Demuna_FichaEntity f where  trim(f.cod_unico) = trim(:cod_unico)")
    int existeCodUnico(@Param("cod_unico") String cod_unico);

    @Query("select trim(w.des_departament) from Demuna_EstablecimientosEntity w group by w.des_departament order by w.des_departament asc")
    public List<String> listarRegiones();

 
    
    
//      @Query("SELECT f " +
//       "FROM Demuna_FichaEntity f " +
//       "INNER JOIN Demuna_EstablecimientosEntity p " +
//       "ON TRIM(f.cod_unico) = TRIM(p.cod_unico) " +
//       "WHERE '00' = TRIM(:codi_depa_dpt) " +
//       "OR TRIM(p.des_departament) = :codi_depa_dpt " +
//       "AND '00' = :estado " +
//       "OR f.estado = :estado")
//       public List<Demuna_FichaEntity> listarSeguimientoFichas(@Param("codi_depa_dpt") String codi_depa_dpt, @Param("estado") String estado);
    
@Query("SELECT f " +
       "FROM Demuna_FichaEntity f " +
       "INNER JOIN Demuna_EstablecimientosEntity p " +
       "ON TRIM(f.cod_unico) = TRIM(p.cod_unico) " +
       "WHERE (:codi_depa_dpt = '00' OR TRIM(p.des_departament) = TRIM(:codi_depa_dpt)) " +
       "AND (:estado = '00' OR TRIM(f.estado) = TRIM(:estado))")
public List<Demuna_FichaEntity> listarSeguimientoFichas(@Param("codi_depa_dpt") String codi_depa_dpt, @Param("estado") String estado);



    
    @Query(value = "select upper(trim(w.des_departament)) as region,\n"
            + "0 as comi_comp,\n"
            + "0 as comi_incom,\n"
            + "nvl( (select count(*) from siga.car_ficha f where trim(f.codi_depa_dpt)=trim(w.coddptox) AND  f.estado='C'),0) as dir_comp,\n"
            + "nvl( (select count(*) from siga.car_ficha f where trim(f.codi_depa_dpt)=trim(w.coddptox) AND f.estado='I'),0) as dir_incom,\n"
            + "nvl( (select count(*) from siga.car_ficha f where trim(f.codi_depa_dpt)=trim(w.coddptox) AND  f.estado in ('C','I')),0) as tot_comi_dir,\n"
            + "nvl( (select count(*) from siga.car_padron wb where trim(wb.coddptox)=trim(w.coddptox) ),0) as tot_cole\n"
            + "from siga.car_padron w group by upper(trim(w.des_departament)), w.coddptox order by w.coddptox asc", nativeQuery = true)
    public List<Object[]> listarCuadroRegistro2();
    
     @Query(value = "select upper(trim(w.des_departament)) as region,\n"
            + "0 as comi_comp,\n"
            + "0 as comi_incom,\n"
            + "nvl( (select count(*) from siga.educa_ficha2 f where trim(f.codi_depa_dpt)=trim(w.coddptox) AND  f.estado='C'),0) as dir_comp,\n"
            + "nvl( (select count(*) from siga.educa_ficha2 f where trim(f.codi_depa_dpt)=trim(w.coddptox) AND f.estado='I'),0) as dir_incom,\n"
            + "nvl( (select count(*) from siga.educa_ficha2 f where trim(f.codi_depa_dpt)=trim(w.coddptox) AND  f.estado in ('C','I')),0) as tot_comi_dir,\n"
            + "nvl( (select count(*) from siga.educa_padron2 wb where trim(wb.coddptox)=trim(w.coddptox) ),0) as tot_cole\n"
            + "from siga.educa_padron2 w group by upper(trim(w.des_departament)), w.coddptox order by w.coddptox asc", nativeQuery = true)
    public List<Object[]> listarCuadroRegistro2x();

    @Query(value = "select upper(trim(w.des_departament)) as region,\n"
            + "nvl((select count(distinct f.usu_registro) from siga.educa_ficha f where trim(f.codi_depa_dpt)=trim(w.coddptox) and f.estado IN ('C','I')),0) as cant_comi,\n"
            + "nvl( (select count(*) from siga.car_ficha f where trim(f.codi_depa_dpt)=trim(w.coddptox)  and f.estado='C'),0) as comi_comp,\n"
            + "nvl( (select count(*) from siga.car_ficha f where trim(f.codi_depa_dpt)=trim(w.coddptox)  and f.estado='I'),0) as comi_incom,\n"
            + "nvl( (select count(*) from siga.car_ficha f where trim(f.codi_depa_dpt)=trim(w.coddptox)  and f.estado in ('I','C')),0) as total_comi,\n"
            + "nvl( (select count(*) from siga.car_ficha f where trim(f.codi_depa_dpt)=trim(w.coddptox)  and f.estado='C'),0) as dir_comp,\n"
            + "nvl( (select count(*) from siga.car_ficha f where trim(f.codi_depa_dpt)=trim(w.coddptox)  and f.estado='I'),0) as dir_incom,\n"
            + "nvl( (select count(*) from siga.car_ficha f where trim(f.codi_depa_dpt)=trim(w.coddptox)  and f.estado in ('I','C')),0) as total_dir,\n"
            + "nvl( (select count(*) from siga.car_ficha f where trim(f.codi_depa_dpt)=trim(w.coddptox)  and f.estado in ('I','C')),0) as total_general,\n"
            + "nvl( (select count(*) from siga.car_padron wb where trim(wb.coddptox)=trim(w.coddptox) ),0) as tot_cole\n"
            + "from siga.educa_padron w group by upper(trim(w.des_departament)), w.coddptox order by w.coddptox asc", nativeQuery = true)
    public List<Object[]> listarCuadroRegistro3();

    @Query(value = "select \n"
            + "nvl( (select count(*) from siga.car_ficha f where f.codi_depa_dpt is not null and f.estado='C'),0) comi_comp,\n"
            + "nvl( (select count(*) from siga.car_ficha f where f.codi_depa_dpt is not null  and f.estado='I'),0) comi_incom,\n"
            + "nvl( (select count(*) from siga.car_ficha f where f.codi_depa_dpt is not null and f.estado='C'),0) dir_comp,\n"
            + "nvl( (select count(*) from siga.car_ficha f where f.codi_depa_dpt is not null  and f.estado='I'),0) dir_incom,\n"
            + "nvl( (select count(*) from siga.car_ficha f where f.codi_depa_dpt is not null and  f.estado in ('C','I')),0) tot_comi_dir,\n"
            + "nvl( (select count(*) from siga.car_padron wb),0) tot_cole\n"
            + "from dual", nativeQuery = true)
    public Object[] obtenerTotalCuadroRegistro();
    
    @Query(value = "select \n"
            + "nvl( (select count(*) from siga.educa_ficha2 f where f.codi_depa_dpt is not null and f.estado='C'),0) comi_comp,\n"
            + "nvl( (select count(*) from siga.educa_ficha2 f where f.codi_depa_dpt is not null  and f.estado='I'),0) comi_incom,\n"
            + "nvl( (select count(*) from siga.educa_ficha2 f where f.codi_depa_dpt is not null and f.estado='C'),0) dir_comp,\n"
            + "nvl( (select count(*) from siga.educa_ficha2 f where f.codi_depa_dpt is not null  and f.estado='I'),0) dir_incom,\n"
            + "nvl( (select count(*) from siga.educa_ficha2 f where f.codi_depa_dpt is not null and  f.estado in ('C','I')),0) tot_comi_dir,\n"
            + "nvl( (select count(*) from siga.educa_padron2 wb),0) tot_cole\n"
            + "from dual", nativeQuery = true)
    public Object[] obtenerTotalCuadroRegistro2();

    @Query("select f \n"
            + "from Demuna_FichaEntity f inner join Demuna_EstablecimientosEntity p\n"
            + "on trim(f.cod_unico) = trim(p.cod_unico)\n"
            + "where upper(trim(p.des_departament)) in (select upper(trim(s.desc_sede_sed))\n"
            + "from UsuarioEntity u inner join  Maestro_PersonalEntity mp \n"
            + "on substr(u.codi_empl_per,2,8) = mp.codi_empl_per\n"
            + "inner join TdependenciasEntity t\n"
            + "on mp.ubic_fisi_tde = t.codi_depe_tde\n"
            + "inner join Sedes_IneiEntity s\n"
            + "on s.codi_sede_sed = t.codi_sede_sed\n"
            + "where trim(u.usuario_usu) =:usuario_usu)")
    public List<Demuna_FichaEntity> listarFichasByComisionado(@Param("usuario_usu") String usuario_usu);

    @Transactional
    @Modifying
    @Query(value = "update siga.car_ficha f set f.estado_s1 = '1', f.usu_valida=:usu_valida, f.fch_valida=sysdate  where f.id_ficha=:id_ficha", nativeQuery = true)
    public void validarSec1(@Param("id_ficha") Integer id_ficha, @Param("usu_valida") String usu_valida);

    @Query(value = "SELECT SUM(N.ESTADO) CANT_ESTADO\n"
            + "FROM (SELECT  TO_NUMBER(NVL(F.ESTADO_S1,'0'))   ESTADO\n"
            + "FROM SIGA.CAR_FICHA F  WHERE F.ID_FICHA=:id_ficha\n"
            + "UNION ALL\n"
             + "SELECT  TO_NUMBER(NVL(F.ESTADO_S1X,'0')) ESTADO\n"
            + "FROM SIGA.CAR_FICHA_S1 F  WHERE F.ID_FICHA=:id_ficha\n"
            + "UNION ALL\n"
            + "SELECT  TO_NUMBER(NVL(F.ESTADO_S2,'0')) ESTADO\n"
            + "FROM SIGA.CAR_FICHA_S2 F  WHERE F.ID_FICHA=:id_ficha\n"
            + "UNION ALL\n"
            + "SELECT TO_NUMBER(NVL(F.ESTADO_S3,'0')) ESTADO\n"
            + "FROM SIGA.CAR_FICHA_S3 F  WHERE F.ID_FICHA=:id_ficha\n"
            + "UNION ALL\n"
            + "SELECT TO_NUMBER(NVL(F.ESTADO_S4,'0')) ESTADO\n"
            + "FROM SIGA.CAR_FICHA_S4 F  WHERE F.ID_FICHA=:id_ficha\n"
            + "UNION ALL\n"
            + "SELECT TO_NUMBER(NVL(F.ESTADO_S5,'0')) ESTADO\n"
            + "FROM SIGA.CAR_FICHA_S5 F  WHERE F.ID_FICHA=:id_ficha\n"
            + "UNION ALL\n"
            + "SELECT TO_NUMBER(NVL(F.ESTADO_S6,'0')) ESTADO\n"
            + "FROM SIGA.CAR_FICHA_S6 F  WHERE F.ID_FICHA=:id_ficha\n"
            + "UNION ALL\n"
            + "SELECT TO_NUMBER(NVL(F.ESTADO_S7,'0')) ESTADO\n"
            + "FROM SIGA.CAR_FICHA_S7 F  WHERE F.ID_FICHA=:id_ficha\n"
            + "UNION ALL\n"
            + "SELECT TO_NUMBER(NVL(F.ESTADO_S8,'0')) ESTADO\n"
            + "FROM SIGA.CAR_FICHA_S8 F  WHERE F.ID_FICHA=:id_ficha\n"
            + "UNION ALL\n"
            + "SELECT TO_NUMBER(NVL(F.ESTADO_S9,'0')) ESTADO\n"
            + "FROM SIGA.CAR_FICHA_S9 F  WHERE F.ID_FICHA=:id_ficha\n"
            + "UNION ALL\n"
            + "SELECT TO_NUMBER(NVL(F.ESTADO_S10,'0')) ESTADO\n"
            + "FROM SIGA.CAR_FICHA_S10 F  WHERE F.ID_FICHA=:id_ficha) N", nativeQuery = true)
    int findSumOfStatesByFichaId(@Param("id_ficha") Integer id_ficha);

    @Transactional
    @Modifying
    @Query(value = "update siga.car_ficha f set f.flag_validar=:flag_validar, f.usu_valida=:usu_validar, f.fch_valida=sysdate where f.id_ficha=:id_ficha", nativeQuery = true)
    public void validarFicha(@Param("flag_validar") String flag_validar,@Param("usu_validar") String usu_validar, @Param("id_ficha") Integer id_ficha);

    @Query("select f from Demuna_FichaEntity f where f.cod_unico=:cod_unico")
    public Demuna_FichaEntity getFichaByCodigoUnico(@Param("cod_unico") String cod_unico);

}
