package com.dp.gestioncoar.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

/**
 *
 * @author ccortez
 * @version
 * 001 ccortez 03/03/2024 Inicio
 * 
 */

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="TDISTRITOS", schema="SIGA")
public class TdistritosEntity implements Serializable {
    
    @EmbeddedId
    private TdistritosPk id;
    
    @Column(name="NOMB_DIST_TDI")
    private String nombDistTdi;
    
    @ManyToOne
    @JoinColumns({@JoinColumn(name="CODI_DEPA_DPT", referencedColumnName="CODI_DEPA_DPT", nullable=false, insertable=false, updatable=false),
                @JoinColumn(name="CODI_PROV_TPR", referencedColumnName="CODI_PROV_TPR", nullable=false, insertable=false, updatable=false)})
    @NotFound(action=NotFoundAction.IGNORE)
    private TprovinciasEntity tprovincia;
    
    @ManyToOne
    @JoinColumn(name="CODI_DEPA_DPT", referencedColumnName="CODI_DEPA_DPT", nullable=true, insertable=false, updatable=false)
    @NotFound(action=NotFoundAction.IGNORE)
    private TdepartamentosEntity tdepartamento;

//    @OneToMany(mappedBy="tdistrito")
//    private List<Salud_FichaEntity> saludFichas = new ArrayList<>(0);

}
