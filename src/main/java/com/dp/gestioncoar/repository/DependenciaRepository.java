package com.dp.gestioncoar.repository;

import java.util.List;
import com.dp.gestioncoar.entity.TdependenciasEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface DependenciaRepository extends CrudRepository<TdependenciasEntity, String> {

    @Query(value = "select p.num_sede from TdependenciasEntity p where to_number(p.codi_depe_tde) =:n_cod_oficina")
    public String findSedeSid(@Param("n_cod_oficina") Integer n_cod_oficina) throws Exception;

    @Query(value = "from TdependenciasEntity p where p.flag_orga_tde='S' and p.codi_depe_tde<>'0000' order by p.desc_depe_tde")
    public List<TdependenciasEntity> listarDependencias() throws Exception;

    @Query(value = "from TdependenciasEntity p where p.codi_depe_tde=:codi_depe_tde")
    public TdependenciasEntity getDependencia(@Param("codi_depe_tde") String codi_depe_tde);
}
