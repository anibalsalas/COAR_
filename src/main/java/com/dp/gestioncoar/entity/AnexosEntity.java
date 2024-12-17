package com.dp.gestioncoar.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

@Entity
@Table(name = "anexos", schema = "siga")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AnexosEntity implements Serializable {

    @Id
    private String codi_anex_anx;
    private String desc_anex_anx;
    private String codi_depe_tde;
    private String depe_fisi_anx;
    private String mail_defe_anx;
    private String depe_caja_anx;
    private String esta_anex_anx;
    private String tipo_anex_anx;
    private String tipo_anex_tan;
    private String codi_orig_anx;
    private String codi_cont_con;
    private String flag_abon_anx;
    private String nume_dni_anx;
    private String flag_jefe_anx;
    private String cod_cargo;
    private String sgd_desc_anex_anx;
    private String nume_rucs_anx;
    private String rucs_anex_anx;
    
    
    @ManyToOne
    @JoinColumn(name="DEPE_FISI_ANX", referencedColumnName="CODI_DEPE_TDE", nullable=true, insertable=false, updatable=false)
    @NotFound(action=NotFoundAction.IGNORE)
    private TdependenciasEntity dependencia;
    
    @OneToMany(mappedBy="anexo")
    private List<UsuarioEntity> usuarios = new ArrayList<>(0);
}
