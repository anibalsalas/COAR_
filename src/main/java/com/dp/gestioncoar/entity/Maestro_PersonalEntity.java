package com.dp.gestioncoar.entity;

import java.io.Serializable;
import javax.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "maestro_personal", schema = "siga")
@Data
@NoArgsConstructor
public class Maestro_PersonalEntity implements Serializable {

    @Id
    private String codi_empl_per;
    private String ubic_fisi_tde;

}
