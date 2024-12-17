package com.dp.gestioncoar.repository;

import com.dp.gestioncoar.entity.Demuna_Ficha_S7Entity;
import com.dp.gestioncoar.entity.Demuna_Ficha_S8Entity;
import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface Demuna_Ficha_S8Repository extends JpaRepository<Demuna_Ficha_S8Entity, Integer> {

    @Query(value = "select nvl(max(id_ficha_s8),0) + 1 from siga.coar_ficha_s8", nativeQuery = true)
    public Integer generarIdFichaS8();

    @Query(value = "select f from Demuna_Ficha_S8Entity f where f.id_ficha=:id_ficha")
    public Demuna_Ficha_S8Entity getFichaS8ByIdFicha(@Param("id_ficha") Integer id_ficha);

    @Transactional
    @Modifying
    @Query(value = "update siga.coar_ficha_s8 f set f.estado_s8 = '1', f.usu_valida=:usu_valida, f.fch_valida=sysdate where f.id_ficha=:id_ficha and f.id_ficha_s8=:id_ficha_s8", nativeQuery = true)
    public void validarSec8(@Param("id_ficha") Integer id_ficha, @Param("id_ficha_s8") Integer id_ficha_s8, @Param("usu_valida") String usu_valida);

}
