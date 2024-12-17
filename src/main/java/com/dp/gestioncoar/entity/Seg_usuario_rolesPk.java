package com.dp.gestioncoar.entity;

import java.io.Serializable;
import javax.persistence.Embeddable;
import lombok.Data;
import lombok.NoArgsConstructor;

@Embeddable
@Data
@NoArgsConstructor
public class Seg_usuario_rolesPk implements Serializable {

    private String usuario_usu;
    private Integer id_rol;
}
