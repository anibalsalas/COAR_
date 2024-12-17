
package com.dp.gestioncoar.repository;

import com.dp.gestioncoar.entity.Demuna_EstablecimientosEntity;
import com.dp.gestioncoar.entity.Demuna_FichaEntity;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface Demuna_EstablecimientosRepository extends JpaRepository<Demuna_EstablecimientosEntity, Integer> {

 @Query(value = "select f from Demuna_EstablecimientosEntity f where trim(f.cod_unico)=:cod_unico")
    public Demuna_EstablecimientosEntity buscarByCodEESS(@Param("cod_unico") String cod_unico);

    /**
     * INICIO NUEVO 
     */
    @Query("SELECT f FROM Demuna_EstablecimientosEntity f ORDER BY f.nom_entidad ASC")
    public List<Demuna_EstablecimientosEntity> listarEM();

    
        @Query(value = "select u from Demuna_EstablecimientosEntity u where trim(upper(u.cod_unico))=:username")
    Demuna_EstablecimientosEntity buscarAutoridad(@Param("username") String username);
    
   
 
     @Query("select f from Demuna_FichaEntity f where trim(f.cod_unico)=trim(:cod_unico) ")
    public Demuna_FichaEntity buscarFichaByComisionadoCodigoUnicoFicha1(@Param("cod_unico") String cod_unico);
    
    /**
     * FIN NUEVO 
     */

//    @Query(value = "select tipo_ficha from Demuna_EstablecimientosEntity f where trim(f.cod_unico)=:cod_unico")
//    public String buscarTipoFichaEstablecimiento(@Param("cod_unico") String cod_unico);
}
