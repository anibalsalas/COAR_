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

//https://medium.com/@st.khwu/spring-boot-hibernate-onetomany-and-manytoone-infinite-loop-7a878637a2e1

@Entity 
@Table(name = "seg_usuario_roles", schema = "siga")
@Data
@NoArgsConstructor
public class Seg_usuario_rolesEntity implements Serializable {

    @EmbeddedId
    private Seg_usuario_rolesPk seg_usuario_rolespk;
        
    //No devuelve la llamada a Usuario
    @JsonIgnore 
    @ManyToOne
    @JoinColumn(name = "usuario_usu", insertable = false, updatable = false, nullable = false)
    private UsuarioEntity usuarioentity;
    
    //Llama a seg_roles
//    @JsonIgnore 
    @ManyToOne
    @JoinColumn(name = "id_rol", insertable = false, updatable = false, nullable = false)
    private Seg_rolesEntity seg_rolesentity;
    
    /*@JoinColumns({
        @JoinColumn(name = "column_1", referencedColumnName = "column_1"),
        @JoinColumn(name = "column_2", referencedColumnName = "column_2"),
        @JoinColumn(name = "column_3", referencedColumnName = "column_3"),
        @JoinColumn(name = "column_4", referencedColumnName = "column_4")
    })*/

}
