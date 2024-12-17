/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dp.gestioncoar.repository;

import com.dp.gestioncoar.entity.Demuna_ArchivoEntity;
import com.dp.gestioncoar.entity.Demuna_ArchivoPk;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author asalas
 */
public interface Demuna_ArchivoRepository extends JpaRepository<Demuna_ArchivoEntity, Demuna_ArchivoPk> {
    
//
//    @Query(value = "select nvl(max(id_archivo),0) + 1 from siga.car_archivo", nativeQuery = true)
//    public Integer generarIdArchivo();

    @Query(value = "select f from Demuna_ArchivoEntity f where f.id.id_archivo=:id_archivo and f.id.id_ficha=:id_ficha and f.id.cod_unico=:cod_unico")
    public Demuna_ArchivoEntity getArchivoById(@Param("id_archivo") Integer id_archivo, @Param("id_ficha") Integer id_ficha, @Param("cod_unico") String cod_unico);

    @Query(value = "select f from Demuna_ArchivoEntity f where f.id.id_ficha=:id_ficha and f.nom_campo=:nom_campo and f.id_seccion=:id_seccion   and f.id.cod_unico = :cod_unico order by f.id.id_archivo asc")
    public List<Demuna_ArchivoEntity> listarArchivos(@Param("id_ficha") Integer id_ficha,@Param("nom_campo") String nom_campo, @Param("id_seccion") String id_seccion, @Param("cod_unico") String cod_unico);

}


