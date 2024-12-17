
package com.dp.gestioncoar.repository;

import com.dp.gestioncoar.entity.Demuna_EstablecimientosEntity;
import com.dp.gestioncoar.entity.Demuna_FichaEntity;
import com.dp.gestioncoar.entity.UsuarioEntity;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface UsuarioRepository extends JpaRepository<UsuarioEntity, String>{
    
    @Query(value = "select u from UsuarioEntity u where trim(upper(u.usuario_usu))=:username")
    UsuarioEntity buscarUsuario(@Param("username") String username);
    
    @Query(value = "select u from Demuna_EstablecimientosEntity u where u.cod_unico=:cod_unico")
    Demuna_EstablecimientosEntity buscarAutoridad(@Param("cod_unico") String cod_unico);
    
//     @Query("select f from Demuna_FichaEntity f where f.cod_unico=:cod_unico")
//    public List<Demuna_FichaEntity> buscarFichaByCodigoUnico(@Param("cod_unico") String cod_unico);
   
    @Query(value = "from UsuarioEntity where trim(usuario_usu) =:usuario_usu and estado_usu = 'A'")
    public UsuarioEntity getUsuario(@Param("usuario_usu") String usuario_usu);
}
