package com.dp.gestioncoar.entity;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "SID_UBIGEO_DSTRO", schema = "SID2")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Sid_Ubigeo_DstroEntity {

    @EmbeddedId
    private Sid_Ubigeo_DstroPk sid_ubigeo_dstropk;
    private String c_descdstro;
    private String c_coordenadax;
    private String c_coordenaday;
    private Integer n_zoom;
}
