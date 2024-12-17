package com.dp.gestioncoar.entity;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "SID_UBIGEO_PROV", schema = "SID2")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Sid_Ubigeo_ProvEntity {

    @EmbeddedId
    private Sid_Ubigeo_ProvPk sid_ubigeo_provpk;

    private String c_descprov;
    private String c_coordenadax;
    private String c_coordenaday;
    private Integer n_zoom;
}
