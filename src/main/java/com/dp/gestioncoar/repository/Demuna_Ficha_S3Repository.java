
package com.dp.gestioncoar.repository;

import com.dp.gestioncoar.entity.Demuna_Ficha_S3Entity;
import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface Demuna_Ficha_S3Repository extends JpaRepository<Demuna_Ficha_S3Entity, Integer> {

    @Query(value = "select nvl(max(id_ficha_s3),0) + 1 from siga.coar_ficha_s3", nativeQuery = true)
    public Integer generarIdFichaS3();

    @Query(value = "select f from Demuna_Ficha_S3Entity f where f.id_ficha=:id_ficha")
    public Demuna_Ficha_S3Entity getFichaS3ByIdFicha(@Param("id_ficha") Integer id_ficha);

    @Transactional
    @Modifying
    @Query(value = "update siga.coar_ficha_s3 f set f.estado_s3 = '1', f.usu_valida=:usu_valida, f.fch_valida=sysdate where f.id_ficha=:id_ficha and f.id_ficha_s3=:id_ficha_s3", nativeQuery = true)
    public void validarSec3(@Param("id_ficha") Integer id_ficha,@Param("id_ficha_s3") Integer id_ficha_s3, @Param("usu_valida") String usu_valida);
}
