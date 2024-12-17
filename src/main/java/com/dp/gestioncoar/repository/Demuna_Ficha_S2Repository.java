package com.dp.gestioncoar.repository;

import com.dp.gestioncoar.dto.ReporteDTO;
import com.dp.gestioncoar.entity.Demuna_Ficha_S2Entity;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface Demuna_Ficha_S2Repository extends JpaRepository<Demuna_Ficha_S2Entity, Integer> {

    @Query(value = "select nvl(max(id_ficha_s2),0) + 1 from siga.coar_ficha_S2", nativeQuery = true)
    public Integer generarIdFichaS2();

    @Query(value = "select f from Demuna_Ficha_S2Entity f where f.id_ficha=:id_ficha")
    public Demuna_Ficha_S2Entity getFichaS2ByIdFicha(@Param("id_ficha") Integer id_ficha);

    @Transactional
    @Modifying
    @Query(value = "update siga.coar_ficha_S2 f set f.estado_s2 = '1', f.usu_valida=:usu_valida, f.fch_valida=sysdate where f.id_ficha=:id_ficha and f.id_ficha_s2=:id_ficha_s2", nativeQuery = true)
    public void validarSec2(@Param("id_ficha") Integer id_ficha, @Param("id_ficha_s2") Integer id_ficha_s2, @Param("usu_valida") String usu_valida);
    
   

}
