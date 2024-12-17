package com.dp.gestioncoar.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "seg_roles", schema = "siga")
@Data
@NoArgsConstructor
public class Seg_rolesEntity implements Serializable {

    @Id
    @Column(name = "id_rol", nullable = false, length = 18)
    private Integer id_rol;

    @Column(name = "name_rol", nullable = false, length = 200)
    private String name_rol;

    //No devuelve la llamada a seg_usuario_roles
    @JsonIgnore
    @OneToMany(mappedBy = "seg_rolesentity",
            cascade = CascadeType.PERSIST,
            orphanRemoval = true)
    private List<Seg_usuario_rolesEntity> seg_usuario_rolesentity;

    //Llama a seg_roles_permisos
    @OneToMany(mappedBy = "seg_rolesentity",
            cascade = CascadeType.PERSIST,
            orphanRemoval = true)
    private List<Seg_roles_permisosEntity> seg_roles_permisosentity;

}
