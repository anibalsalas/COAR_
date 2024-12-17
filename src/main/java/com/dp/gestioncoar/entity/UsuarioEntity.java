package com.dp.gestioncoar.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

@Entity
@Table(name = "usuario", schema = "siga")
@Data
@NoArgsConstructor
public class UsuarioEntity implements Serializable {

    @Id
    @Column(name = "usuario_usu", nullable = false, length = 18)
    private String usuario_usu;

    @Column(name = "tpircne", nullable = false, length = 200)
    private String tpircne;

    private String nomb_cort_usu;

    private String sgd_rol_estado, sgd_rol_usuario, estado_usu, codi_empl_per, nivel_subc_usu, codi_depe_tde;

    //Llama a seg_usuario_roles
//    @JsonIgnoreProperties("seg_usuario_rolesmodel")
//    @JsonIgnore 
    @OneToMany(mappedBy = "usuarioentity",
            cascade = CascadeType.PERSIST,
            orphanRemoval = true)
    private List<Seg_usuario_rolesEntity> seg_usuario_rolesentity = new ArrayList<>(0);;

//    private String 
//            nomb_cort_usu;
// 
//    private Integer sgd_rol_usuario;
//    
//    @Formula("sgd_rol_usuario * 1000")
//    private long calculado;
//
//    @Formula("(select o.desc_depe_tde  from tdependencias o where o.codi_depe_tde = codi_depe_tde )")
//    private String OficinaNombre;
//    
//    
//    /* ManyToOne */
//    @ManyToOne
//    @JoinColumn(name = "codi_depe_tde", nullable = false)
//    @OnDelete(action = OnDeleteAction.CASCADE)
//    @JsonIgnore
//    private TdependenciasModel tdependenciasmodel;
//    
//    UsuarioModel() {}
//    public UsuarioModel(String usuario_usu, Integer sgd_rol_usuario, TdependenciasModel tdependenciasmodel)
//    {
//        this.usuario = usuario_usu;
//        this.sgd_rol_usuario = sgd_rol_usuario;
//        this.tdependenciasmodel = tdependenciasmodel;
//    }
//     @ManyToMany(cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
//    @JoinTable(
//            name = "users_roles",
//            joinColumns = @JoinColumn(name = "user_id"),
//            inverseJoinColumns = @JoinColumn(name = "role_id")
//            )
//    private Set<Role> roles = new HashSet<>();

    @ManyToOne
    @JoinColumn(name="CODI_DEPE_TDE", referencedColumnName="CODI_DEPE_TDE", nullable=true, insertable=false, updatable=false)
    @NotFound(action=NotFoundAction.IGNORE)
    private TdependenciasEntity dependencia;
    
    @ManyToOne
    @JoinColumn(name="CODI_EMPL_PER", referencedColumnName="CODI_ANEX_ANX", nullable=true, insertable=false, updatable=false)
    @NotFound(action=NotFoundAction.IGNORE)
    private AnexosEntity anexo;
   
}
