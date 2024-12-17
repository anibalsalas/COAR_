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
@Table(name = "seg_permisos", schema = "siga")
@Data
@NoArgsConstructor
public class Seg_permisosEntity implements Serializable {

    @Id
    @Column(name = "id_permiso", nullable = false, length = 18)
    private Integer id_permiso;

    @Column(name = "name_permiso", nullable = false, length = 200)
    private String name_permiso;

    /*@JsonIgnore 
    @ManyToOne
    @JoinColumn(name = "id_rol", insertable = false, updatable = false, nullable = false)
    private Seg_rolesModel seg_rolesmodel;*/
    //No devuelve la llamada a seg_roles_permisos
    @JsonIgnore
    @OneToMany(mappedBy = "seg_permisosentity",
            cascade = CascadeType.PERSIST,
            orphanRemoval = true)
    private List<Seg_roles_permisosEntity> seg_roles_permisosentity;
}
