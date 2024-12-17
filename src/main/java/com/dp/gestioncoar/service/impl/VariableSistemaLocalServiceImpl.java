package com.dp.gestioncoar.service.impl;

import com.dp.gestioncoar.dao.VariableSistemaLocalDAO;
import com.dp.gestioncoar.entity.AnexosEntity;
import com.dp.gestioncoar.entity.Sid_Ubigeo_DptoEntity;
import com.dp.gestioncoar.entity.Sid_Ubigeo_DstroEntity;
import com.dp.gestioncoar.entity.Sid_Ubigeo_ProvEntity;
import com.dp.gestioncoar.entity.TdependenciasEntity;
import com.dp.gestioncoar.entity.UsuarioEntity;
import com.dp.gestioncoar.service.VariableSistemaLocalService;
import java.sql.Timestamp;
import java.util.List;
import javax.mail.Address;
import javax.mail.Message;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.naming.InitialContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VariableSistemaLocalServiceImpl implements VariableSistemaLocalService {

    @Autowired
    VariableSistemaLocalDAO variableSistemaLocalDAO;

    @Override
    public Timestamp getFecha_hora_sistema() {

        return variableSistemaLocalDAO.getFecha_hora_sistema();

    }

    @Override
    public UsuarioEntity getUsuario(String usuario_usu) {
        return variableSistemaLocalDAO.getUsuario(usuario_usu);
    }

    @Override
    public AnexosEntity getAnexo(String codi_empl_per) {
        return variableSistemaLocalDAO.getAnexo(codi_empl_per);
    }

    @Override
    public List<TdependenciasEntity> getDropdown_dependencias_general() {
        return variableSistemaLocalDAO.getDropdown_dependencias_general();
    }

    @Override
    public String dependencia_fisica_personal(String usuario_usu) {
        return variableSistemaLocalDAO.dependencia_fisica_personal(usuario_usu);
    }

    @Override
    public TdependenciasEntity getDependencia(String codi_depe_tde) {
        return variableSistemaLocalDAO.getDependencia(codi_depe_tde);
    }

    @Override
    public List<Sid_Ubigeo_DptoEntity> listarDepartamento() {
        return variableSistemaLocalDAO.listarDepartamento();
    }

    @Override
    public List<Sid_Ubigeo_ProvEntity> listarProvincias(String c_coddpto) {
        return variableSistemaLocalDAO.listarProvincias(c_coddpto);
    }

    @Override
    public List<Sid_Ubigeo_DstroEntity> listarDistritos(String c_coddpto, String c_codprov) {
        return variableSistemaLocalDAO.listarDistritos(c_coddpto, c_codprov);
    }

    @Override
    public String esJefeOficina(String usuario_usu) {
        return variableSistemaLocalDAO.esJefeOficina(usuario_usu.trim().toUpperCase());
    }

    @Override
    public List<TdependenciasEntity> listarODsMODs() {
        return variableSistemaLocalDAO.listarODsMODs();
    }

    @Override
    public boolean enviar_correo(String[] addresses, String subject, String mensaje) {

        boolean result = true;
        try {
            Session session = (Session) new InitialContext().lookup("java:jboss/mail/defensoria");

            Address[] replies = {new InternetAddress("syscorreo@defensoria.gob.pe")};

            Message msg = new MimeMessage(session);
            msg.setFrom(new InternetAddress("syscorreo@defensoria.gob.pe", "Defensoría del Pueblo"));
            msg.setReplyTo(replies);

            for (int i = 0; i < addresses.length; i++) {
                if (i == 0) {
                    InternetAddress[] address = {new InternetAddress(addresses[i].trim())};
                    msg.addRecipients(Message.RecipientType.TO, address);
                } else {
                    InternetAddress[] address = {new InternetAddress(addresses[i].trim())};
                    msg.addRecipients(Message.RecipientType.CC, address);
                }
            }

            msg.setSubject(subject);
            // msg.setText(mensaje,"utf8","html");
            msg.setContent(mensaje, "text/html;charset=utf-8");
            msg.saveChanges();

            Transport.send(msg);
            
        } catch (Exception ex) {
            result = false;
            System.out.println("error mail");
            ex.printStackTrace();
        }
        
        return result;

    }

}
