package com.dp.gestioncoar.entity;

import java.io.Serializable;
import javax.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Embeddable
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Sid_Ubigeo_DstroPk implements Serializable {

    private String c_id_dstro;
    private String c_id_prov;
    private String c_id_dpto;
}
