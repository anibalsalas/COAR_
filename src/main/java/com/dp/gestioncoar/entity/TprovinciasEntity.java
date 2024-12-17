package com.dp.gestioncoar.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
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
@Table(name="TPROVINCIAS", schema="SIGA")
public class TprovinciasEntity implements Serializable {
    
    @EmbeddedId
    private TprovinciasPk id;
    
    @Column(name="NOMB_PROV_TPR")
    private String nombProvTpr;
    
    @ManyToOne
    @JoinColumn(name="CODI_DEPA_DPT", referencedColumnName="CODI_DEPA_DPT", nullable=true, insertable=false, updatable=false)
    @NotFound(action=NotFoundAction.IGNORE)
    private TdepartamentosEntity tdepartamento;
    
    @OneToMany(mappedBy="tprovincia")
    private List<TdistritosEntity> tdistritos = new ArrayList<>(0);

//    @OneToMany(mappedBy="tprovincia")
//    private List<Salud_FichaEntity> saludFichas = new ArrayList<>(0);

}
