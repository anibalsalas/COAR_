package com.dp.gestioncoar.repository;

import com.dp.gestioncoar.entity.Demuna_EstablecimientosEntity;
import com.dp.gestioncoar.entity.XubigeoEntity;
import com.dp.gestioncoar.entity.XubigeoEntityPk;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface Xubigeo_Repository extends JpaRepository<XubigeoEntity, XubigeoEntityPk> {

    @Query("from XubigeoEntity a where a.xubigeomodelpk.coddpto <> '00' and a.xubigeomodelpk.codprov = '00' and a.xubigeomodelpk.coddist = '00' order by a.nombre asc")
    List<XubigeoEntity> findAllDepartamento();

    @Query("from XubigeoEntity a where a.xubigeomodelpk.coddpto =:coddpto and a.xubigeomodelpk.codprov <> '00' and a.xubigeomodelpk.coddist = '00' order by a.nombre asc")
    List<XubigeoEntity> findAllProvincia(@Param("coddpto") String coddpto);
    

    
//@Query("SELECT d FROM Demuna_EstablecimientosEntity d JOIN XubigeoEntity x ON SUBSTRING(d.ubigeo, 1, 2) = x.xubigeomodelpk.coddpto WHERE x.xubigeomodelpk.coddpto = :coddpto")
//List<Demuna_EstablecimientosEntity> findMunicipalidadesByDepartamento(@Param("coddpto") String coddpto);


//@Query("SELECT DISTINCT d FROM Demuna_EstablecimientosEntity d JOIN XubigeoEntity x ON FUNCTION('SUBSTRING', d.ubigeo, 1, 4) = x.xubigeomodelpk.codprov WHERE x.xubigeomodelpk.coddpto = :coddpto OR x.xubigeomodelpk.codprov = :codprov")
//List<Demuna_EstablecimientosEntity> findMunicipalidadesByDepartamento(@Param("coddpto") String coddpto, @Param("codprov") String codprov);
 
//   @Query("SELECT DISTINCT d FROM Demuna_EstablecimientosEntity d JOIN XubigeoEntity x WHERE SUBSTRING(d.ubigeo, 1, 2) = :coddpto AND SUBSTRING(d.ubigeo, 3, 2) = :codprov")
    

@Query("SELECT DISTINCT d FROM Demuna_EstablecimientosEntity d JOIN XubigeoEntity x ON d.coddptox = x.xubigeomodelpk.coddpto WHERE d.coddptox = :coddptox AND d.codprovx = :codprovx ORDER BY d.nom_entidad ASC")
List<Demuna_EstablecimientosEntity> findMunicipalidadesByDepartamento(@Param("coddptox") String coddptox, @Param("codprovx") String codprovx);



@Query("SELECT DISTINCT d FROM Demuna_EstablecimientosEntity d JOIN XubigeoEntity x ON d.coddptox = x.xubigeomodelpk.coddpto WHERE d.coddptox = :coddptox AND d.codprovx = :codprovx  AND d.coddistx = :coddistx ORDER BY d.nom_entidad ASC")
List<Demuna_EstablecimientosEntity> findMunicipalidadesByDepartamentoAndProvinciaAndDistrito(@Param("coddptox") String coddptox, @Param("codprovx") String codprovx,  @Param("coddistx") String coddistx);

//@Query("SELECT DISTINCT d FROM Demuna_EstablecimientosEntity d JOIN XubigeoEntity x ON d.coddptox = x.xubigeomodelpk.coddpto WHERE d.coddptox = :coddptox AND d.codprovx = :codprovx AND d.coddistx = :coddistx")
//List<Demuna_EstablecimientosEntity> findUniqueDistrito(@Param("coddptox") String coddptox, @Param("codprovx") String codprovx, @Param("coddistx") String coddistx);

   @Query("from XubigeoEntity a where a.xubigeomodelpk.coddpto =:coddpto and a.xubigeomodelpk.codprov =:codprov and a.xubigeomodelpk.coddist <> '00' order by a.nombre asc")
    List<XubigeoEntity> findAllDistrito(@Param("coddpto") String coddpto, @Param("codprov") String codprov);


    
    @Query("select a from XubigeoEntity a where trim(a.nombre) =:departamento and a.xubigeomodelpk.coddpto <> '00' and a.xubigeomodelpk.codprov = '00'  and a.xubigeomodelpk.coddist = '00'")
    XubigeoEntity findDptoByNomb(@Param("departamento") String departamento);

    @Query("select a from XubigeoEntity a where trim(a.nombre) =:provincia and a.xubigeomodelpk.coddpto=:coddpto and a.xubigeomodelpk.codprov <> '00'  and a.xubigeomodelpk.coddist = '00'")
    XubigeoEntity findProvByNomb(@Param("coddpto") String coddpto, @Param("provincia") String provincia);

    @Query("select a from XubigeoEntity a where trim(a.nombre) =:distrito and a.xubigeomodelpk.coddpto =:coddpto and a.xubigeomodelpk.codprov =:codprov  and a.xubigeomodelpk.coddist <> '00'")
    XubigeoEntity findDistByNomb(@Param("coddpto") String coddpto, @Param("codprov") String codprov, @Param("distrito") String distrito);

}
