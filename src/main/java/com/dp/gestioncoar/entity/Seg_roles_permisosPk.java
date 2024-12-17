package com.dp.gestioncoar.entity;

import java.io.Serializable;
import javax.persistence.Embeddable;
import lombok.Data;
import lombok.NoArgsConstructor;

@Embeddable
@Data
@NoArgsConstructor
public class Seg_roles_permisosPk implements Serializable {

    private Integer id_rol, id_permiso;
}
