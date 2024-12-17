package com.dp.gestioncoar.dao.impl;

import java.sql.Timestamp;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;
import com.dp.gestioncoar.dao.VariableSistemaLocalDAO;
import com.dp.gestioncoar.entity.AnexosEntity;
import com.dp.gestioncoar.entity.Sid_Ubigeo_DptoEntity;
import com.dp.gestioncoar.entity.Sid_Ubigeo_DstroEntity;
import com.dp.gestioncoar.entity.Sid_Ubigeo_ProvEntity;
import com.dp.gestioncoar.entity.TdependenciasEntity;
import com.dp.gestioncoar.entity.UsuarioEntity;
import com.dp.gestioncoar.repository.DependenciaRepository;
import java.util.List;
import javax.persistence.NoResultException;
import org.springframework.beans.factory.annotation.Autowired;

@Repository
public class VariableSistemaLocalDAOImpl implements VariableSistemaLocalDAO {

    @PersistenceContext
    private EntityManager entityManager;

    @Autowired
    private DependenciaRepository dependenciaRepository;

    public VariableSistemaLocalDAOImpl() {

    }

    @Override
    public Timestamp getFecha_hora_sistema() {

        Timestamp fecha_hora = (Timestamp) entityManager.createNativeQuery(
                "select sysdate from dual").getSingleResult();

        return fecha_hora;
    }

    @Override
    public UsuarioEntity getUsuario(String usuario_usu) {

        UsuarioEntity usuario = (UsuarioEntity) entityManager.createQuery(
                "from UsuarioEntity where trim(usuario_usu) =:usuario_usu and estado_usu = 'A'")
                .setParameter("usuario_usu", usuario_usu)
                .getSingleResult();

        return usuario;
    }

    @Override
    public AnexosEntity getAnexo(String codi_empl_per) {

        AnexosEntity anexo = entityManager.createQuery(
                "from AnexosEntity where esta_anex_anx = 'A' and codi_anex_anx=:codi_empl_per", AnexosEntity.class)
                .setParameter("codi_empl_per", codi_empl_per)
                .getSingleResult();

        return anexo;
    }

    @Override
    public List<TdependenciasEntity> getDropdown_dependencias_general() {

        List<TdependenciasEntity> listaOficina = entityManager.createQuery(
                "from TdependenciasEntity a where a.flag_orga_tde = 'S' order by a.desc_depe_tde").getResultList();

        return listaOficina;
    }

    @Override
    public String dependencia_fisica_personal(String usuario_usu) {
        String resultado = (String) entityManager.createNativeQuery(
                "select a.depe_fisi_anx\n"
                + "from usuario u inner join anexos a\n"
                + "on u.codi_empl_per = a.codi_anex_anx \n"
                + "where u.estado_usu = 'A' and  trim(u.usuario_usu)=:usuario_usu").setParameter("usuario_usu", usuario_usu.trim()).getSingleResult();

        return resultado;
    }

    @Override
    public TdependenciasEntity getDependencia(String codi_depe_tde) {
        return dependenciaRepository.getDependencia(codi_depe_tde);
    }

    @Override
    public List<Sid_Ubigeo_DptoEntity> listarDepartamento() {

        List<Sid_Ubigeo_DptoEntity> listaDepartamento = entityManager.createQuery(
                "FROM Sid_Ubigeo_DptoEntity ORDER BY C_DESCDPTO").getResultList();

        return listaDepartamento;
    }

    @Override
    public List<Sid_Ubigeo_ProvEntity> listarProvincias(String c_coddpto) {

        List<Sid_Ubigeo_ProvEntity> listaProvincias = entityManager.createQuery(
                "FROM Sid_Ubigeo_ProvEntity WHERE C_ID_DPTO=:c_coddpto ORDER BY C_DESCPROV").setParameter("c_coddpto", c_coddpto).getResultList();

        return listaProvincias;
    }

    @Override
    public List<Sid_Ubigeo_DstroEntity> listarDistritos(String c_coddpto, String c_codprov) {

        List<Sid_Ubigeo_DstroEntity> listaDistritos = entityManager.createQuery(
                "FROM Sid_Ubigeo_DstroEntity WHERE C_ID_DPTO=:c_coddpto AND C_ID_PROV=:c_codprov ORDER BY C_DESCDSTRO").setParameter("c_coddpto", c_coddpto).setParameter("c_codprov", c_codprov).getResultList();

        return listaDistritos;
    }

    @Override
    public String esJefeOficina(String usuario_usu) {

        String resultado = "";

        try {
            resultado = (String) entityManager.createNativeQuery(
                    "select case m.flag_jefe_per when '1' then 'SI' else 'NO' end \n"
                    + "from siga.maestro_personal m inner join siga.usuario u\n"
                    + "on substr(u.codi_empl_per,2,8) =m.codi_empl_per\n"
                    + "where upper(trim(u.usuario_usu)) =:usuario_usu and m.esta_trab_per = '1' and   m.flag_jefe_per = '1' and u.estado_usu = 'A'").setParameter("usuario_usu", usuario_usu.trim()).getSingleResult();
        } catch (NoResultException nre) {
            resultado = "NO";
        } catch (Exception e) {
            e.printStackTrace();
            resultado = "NO";
        }

        return resultado;
    }

    @Override
    public List<TdependenciasEntity> listarODsMODs() {
        List<TdependenciasEntity> listaOficina = entityManager.createQuery(
                "from TdependenciasEntity t where t.flag_orga_tde = 'S' and codi_depe_tde in ('0070','0079','0073','0066','0071','0032','0078','0105','0072','0033','0187','0185','0186','0059','0080','0030','0031','0106','0075','0027','0034','0058','0044','0026','0025','0082','0107','0083','0028','0035','0174','0045','0175','0254','0084','0253','0145','0074','0146','0085','0022') order by desc_depe_tde asc").getResultList();

        return listaOficina;
    }

}
