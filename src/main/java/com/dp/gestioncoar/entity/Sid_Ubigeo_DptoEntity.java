package com.dp.gestioncoar.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "SID_UBIGEO_DPTO", schema = "SID2")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Sid_Ubigeo_DptoEntity {

    @Id
    private String c_id_dpto;
    private String c_descdpto;
    private String c_coordenadax;
    private String c_coordenaday;
    private Integer n_zoom;
}
