package com.dp.gestioncoar.repository;

import com.dp.gestioncoar.entity.AnexosEntity;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface AnexosRepository extends JpaRepository<AnexosEntity, String> {

    @Query(value = "from AnexosEntity where esta_anex_anx  = 'A' and tipo_anex_anx = '1' and (substr(codi_anex_anx,2,1) = '0' or substr(codi_anex_anx,1,1) ='P') order by desc_anex_anx")
    public List<AnexosEntity> listarUsuarios1();

    @Query(value = "from AnexosEntity where codi_anex_anx =:codi_anex_anx and esta_anex_anx = 'A'")
    public List<AnexosEntity> listarUsuarios2(@Param("codi_anex_anx") String codi_anex_anx);

    @Query(value = "select desc_anex_anx \n"
            + "from siga.anexos\n"
            + "where esta_anex_anx = 'A' and \n"
            + "tipo_anex_anx = '1' and\n"
            + "trim(codi_anex_anx) = trim(:codi_anex_anx) and\n"
            + "(substr(codi_anex_anx,2,1) = '0' or substr(codi_anex_anx,1,1) = 'P')", nativeQuery = true)
    public String seekRendicion(@Param("codi_anex_anx") String codi_anex_anx);

    @Query("select codi_depe_tde from AnexosEntity where codi_anex_anx=:codi_empl_per and esta_anex_anx = 'A' ")
    public String getCodi_depe_tde(@Param("codi_empl_per") String codi_empl_per);

    @Query("from AnexosEntity where codi_anex_anx=:codi_anex_anx")
    public AnexosEntity buscarAnexo(@Param("codi_anex_anx") String codi_anex_anx);
    
    @Query("from AnexosEntity p where p.esta_anex_anx='A' and p.codi_anex_anx=:codi_empl_per")
    public AnexosEntity getAnexo(@Param("codi_empl_per") String codi_empl_per);

}
