package com.dp.gestioncoar.entity;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Formula;
import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "coar_ficha_s7", schema = "SIGA")

public class Demuna_Ficha_S7Entity implements Serializable {
    @Id
    public Integer id_ficha_s7;
    public Integer id_ficha;
    private String usu_registro;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_registro;

    private String usu_actualiza;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_actualiza;
    private String estado_s7;
    
    
    private String usu_valida;
    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_valida;
    


    
//      @Formula("(select count(ea.id_archivo) \n"
//            + "from siga.car_archivo ea \n"
//            + "where ea.id_ficha = id_ficha and ea.id_seccion = 'S7' and ea.nom_campo = 'S7_7_ARCH')")
//    private Integer s7_7_arch_id_archivo;
//      
//      
//        @Formula("(select count(ea.id_archivo) \n"
//            + "from siga.car_archivo ea \n"
//            + "where ea.id_ficha = id_ficha and ea.id_seccion = 'S7' and ea.nom_campo = 'S7_10_ARCH')")
//    private Integer s7_10_arch_id_archivo;
      
}
