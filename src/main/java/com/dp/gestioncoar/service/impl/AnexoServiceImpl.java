package com.dp.gestioncoar.service.impl;

//package com.dp.gestionconflictos.service.impl;
//
//
//import java.util.ArrayList;
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import com.dp.gestionconflictos.entity.AnexosEntity;
//
//import com.dp.gestionconflictos.repository.AnexosRepository;
//import com.dp.gestionconflictos.service.AnexoService;
//import org.apache.logging.log4j.LogManager;
//import org.apache.logging.log4j.Logger;
//
//@Service
//public class AnexoServiceImpl implements AnexoService {
//    private static final Logger LOG = LogManager.getLogger(AnexoServiceImpl.class);
//    
//    @Autowired
//    private AnexosRepository anexoRepository;
//
//    @Override
//    public AnexosEntity getAnexo(String codi) throws Exception {
//        LOG.info("================== START getAnexo codi="+codi);
//        AnexosEntity anexo = new AnexosEntity();
//        try {
//            anexo = this.anexoRepository.getAnexo(codi);
//            return anexo;
//        } catch (Exception e) {
//            LOG.error("ERROR:",e);
//            throw e;
//        } finally {
//            if(anexo!=null) LOG.info("================== END getAnexo AnexosEntity=(depeFisiAnx="+anexo.getDepe_fisi_anx()+")");
//            else LOG.info("================== END getAnexo");
//        }
//    }
//
//    /*@Override
//    public List<AnexosEntity> findPersonalOficina(String depe) throws Exception {
//        LOG.info("================== START findPersonalOficina depe="+depe);
//        List<AnexosEntity> anexos = new ArrayList<>();
//        try {
//            Assert.notNull(depe, "Depe must not be null");
//            anexos = this.anexoRepository.findPersonalOficina(depe);
//            return anexos;
//        } catch (Exception e) {
//            LOG.error("ERROR:",e);
//            throw e;
//        } finally {
//            if(anexos!=null) LOG.info("================== END findPersonalOficina Anexo=(anexos="+anexos.size()+")");
//            else LOG.info("================== END findPersonalOficina");
//        }
//    }
//
//    @Override
//    public List<Object> findDatosUsuario(String usuario) throws Exception {
//        LOG.info("================== START findDatosUsuario usuario="+usuario);
//        List<Object> objects = new ArrayList<>();
//        try {
//            objects = this.anexoRepository.findDatosUsuario(usuario);
//            return objects;
//        } catch (Exception e) {
//            LOG.error("ERROR:",e);
//            throw e;
//        } finally {
//            if(objects!=null) LOG.info("================== END findDatosUsuario Object=(objects="+objects.size()+")");
//            else LOG.info("================== END findDatosUsuario");
//        }
//    }*/
//
//    @Override
//    public List<AnexosEntity> listarUsuarios1() throws Exception {
//        LOG.info("================== START listarUsuarios1");
//        List<AnexosEntity> anexos = new ArrayList<>();
//        try {
//            anexos = this.anexoRepository.listarUsuarios1();
//            return anexos;
//        } catch (Exception e) {
//            LOG.error("ERROR:",e);
//            throw e;
//        } finally {
//            if(anexos!=null) LOG.info("================== END listarUsuarios1 Anexo=(anexos="+anexos.size()+")");
//            else LOG.info("================== END listarUsuarios1");
//        }
//    }
//
//    @Override
//    public List<AnexosEntity> listarUsuarios2(String codi) throws Exception {
//        LOG.info("================== START listarUsuarios2 codi="+codi);
//        List<AnexosEntity> anexos = new ArrayList<>();
//        try {
//            anexos = this.anexoRepository.listarUsuarios2(codi);
//            return anexos;
//        } catch (Exception e) {
//            LOG.error("ERROR:",e);
//            throw e;
//        } finally {
//            if(anexos!=null) LOG.info("================== END listarUsuarios2 Anexo=(anexos="+anexos.size()+")");
//            else LOG.info("================== END listarUsuarios2");
//        }
//    }
//}