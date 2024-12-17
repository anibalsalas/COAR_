package com.dp.gestioncoar.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "tdependencias", schema = "siga")
@Data
@NoArgsConstructor
public class TdependenciasEntity implements Serializable {

    @Id
    private String codi_depe_tde;
    private String flag_orga_tde;
    private String codi_sede_sed;
    private String desc_depe_tde;
    private String ip_public_tde;
    private String ip_privad_tde;
    private String desc_cort_tde;
    private String des_sigla;
    private String sgd_flag_depe;
    private String codi_sede_sgd;
    private String num_sede;

//    @OneToMany(mappedBy="tdependencia")
//    private List<Salud_FichaEntity> saludFichas = new ArrayList<>(0);

}
