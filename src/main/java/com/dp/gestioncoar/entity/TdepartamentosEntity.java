package com.dp.gestioncoar.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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
@Table(name="TDEPARTAMENTOS", schema="SIGA")
public class TdepartamentosEntity implements Serializable {
    
    @Id
    @Column(name="CODI_DEPA_DPT")
    private String codiDepaDpt;
    
    @Column(name="NOMB_DPTO_DPT")
    private String nombDptoDpt;
    
    @OneToMany(mappedBy="tdepartamento")
    private List<TprovinciasEntity> tprovincias = new ArrayList<>(0);
    
    @OneToMany(mappedBy="tdepartamento")
    private List<TdistritosEntity> tdistritos = new ArrayList<>(0);

//    @OneToMany(mappedBy="tdepartamento")
//    private List<Salud_FichaEntity> saludFichas = new ArrayList<>(0);

}
