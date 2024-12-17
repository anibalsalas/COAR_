package com.dp.gestioncoar.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "seg_roles_permisos", schema = "siga")
@Data
@NoArgsConstructor
public class Seg_roles_permisosEntity implements Serializable {

    @EmbeddedId
    private Seg_roles_permisosPk seg_roles_permisospk;

//    @JsonIgnore 
//    @OneToMany(mappedBy = "seg_rolesmodel",
//            cascade = CascadeType.PERSIST,
//            orphanRemoval = true)
//    private List<Seg_roles_permisosModel> seg_roles_permisosmodel;
    //No devuelve llamada a seg_roles
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "id_rol", insertable = false, updatable = false, nullable = false)
    private Seg_rolesEntity seg_rolesentity;

    //Llama a seg_permisos
    @ManyToOne
    @JoinColumn(name = "id_permiso", insertable = false, updatable = false, nullable = false)
    private Seg_permisosEntity seg_permisosentity;
}
