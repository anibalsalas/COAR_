package com.dp.gestioncoar.entity;

import java.io.Serializable;
import java.util.Date;
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
@Table(name = "coar_ficha_s10", schema = "SIGA")

public class Demuna_Ficha_S10Entity implements Serializable {
    @Id
    public Integer id_ficha_s10;
    public Integer id_ficha;
    private String usu_registro;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_registro;

    private String usu_actualiza;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_actualiza;
    private String estado_s10;
    
    
       private String usu_valida;
    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_valida;
    
    
    
    
    
    
    
    
    
//    
//       @Formula("(select count(ea.id_archivo) \n"
//    + "from siga.car_archivo ea \n"
//    + "where ea.id_ficha = id_ficha and ea.id_seccion = 'S10' and ea.nom_campo = 'S10_1_6_ARCH')")
//    private Integer s10_1_6_arch_id_archivo;
//       
//            @Formula("(select count(ea.id_archivo) \n"
//    + "from siga.car_archivo ea \n"
//    + "where ea.id_ficha = id_ficha and ea.id_seccion = 'S10' and ea.nom_campo = 'S10_1_7_ARCH')")
//    private Integer s10_1_7_arch_id_archivo;
//
//               @Formula("(select count(ea.id_archivo) \n"
//    + "from siga.car_archivo ea \n"
//    + "where ea.id_ficha = id_ficha and ea.id_seccion = 'S10' and ea.nom_campo = 'S10_1_10_ARCH')")
//    private Integer s10_1_10_arch_id_archivo;
//               
//   @Formula("(select count(ea.id_archivo) \n"
//    + "from siga.car_archivo ea \n"
//    + "where ea.id_ficha = id_ficha and ea.id_seccion = 'S10' and ea.nom_campo = 'S10_1_12_ARCH')")
//    private Integer s10_1_12_arch_id_archivo;            
//
//   @Formula("(select count(ea.id_archivo) \n"
//    + "from siga.car_archivo ea \n"
//    + "where ea.id_ficha = id_ficha and ea.id_seccion = 'S10' and ea.nom_campo = 'S10_1_16_ARCH')")
//    private Integer s10_1_16_arch_id_archivo;   
//   
//   @Formula("(select count(ea.id_archivo) \n"
//    + "from siga.car_archivo ea \n"
//    + "where ea.id_ficha = id_ficha and ea.id_seccion = 'S10' and ea.nom_campo = 'S10_2_ARCH')")
//    private Integer s10_2_arch_id_archivo;   
//   
//   @Formula("(select count(ea.id_archivo) \n"
//    + "from siga.car_archivo ea \n"
//    + "where ea.id_ficha = id_ficha and ea.id_seccion = 'S10' and ea.nom_campo = 'S10_3_23_ARCH')")
//    private Integer s10_3_23_arch_id_archivo;   
//   
//   @Formula("(select count(ea.id_archivo) \n"
//    + "from siga.car_archivo ea \n"
//    + "where ea.id_ficha = id_ficha and ea.id_seccion = 'S10' and ea.nom_campo = 'S10_5_4_ARCH')")
//    private Integer s10_5_4_arch_id_archivo;   
//   
//   @Formula("(select count(ea.id_archivo) \n"
//    + "from siga.car_archivo ea \n"
//    + "where ea.id_ficha = id_ficha and ea.id_seccion = 'S10' and ea.nom_campo = 'S10_6_4_ARCH')")
//    private Integer s10_6_4_arch_id_archivo;   
//   
//   @Formula("(select count(ea.id_archivo) \n"
//    + "from siga.car_archivo ea \n"
//    + "where ea.id_ficha = id_ficha and ea.id_seccion = 'S10' and ea.nom_campo = 'S10_6_5_ARCH')")
//    private Integer s10_6_5_arch_id_archivo;   
//   
//   @Formula("(select count(ea.id_archivo) \n"
//    + "from siga.car_archivo ea \n"
//    + "where ea.id_ficha = id_ficha and ea.id_seccion = 'S10' and ea.nom_campo = 'S10_7_3_ARCH')")
//    private Integer s10_7_3_arch_id_archivo;   
//   
//   @Formula("(select count(ea.id_archivo) \n"
//    + "from siga.car_archivo ea \n"
//    + "where ea.id_ficha = id_ficha and ea.id_seccion = 'S10' and ea.nom_campo = 'S10_7_4_ARCH')")
//    private Integer s10_7_4_arch_id_archivo;   
//   
//   @Formula("(select count(ea.id_archivo) \n"
//    + "from siga.car_archivo ea \n"
//    + "where ea.id_ficha = id_ficha and ea.id_seccion = 'S10' and ea.nom_campo = 'S10_3_28_ARCH')")
//    private Integer s10_3_28_arch_id_archivo;   
//   
//   @Formula("(select count(ea.id_archivo) \n"
//    + "from siga.car_archivo ea \n"
//    + "where ea.id_ficha = id_ficha and ea.id_seccion = 'S10' and ea.nom_campo = 'S10_8_7_ARCH')")
//    private Integer s10_8_7_arch_id_archivo; 
}
