package com.dp.gestioncoar.entity;

import java.io.Serializable;
import javax.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "sedes_inei", schema = "siga")
@Data
@NoArgsConstructor
public class Sedes_IneiEntity implements Serializable {

    @Id
    private String codi_sede_sed;
    private String desc_sede_sed;

}
