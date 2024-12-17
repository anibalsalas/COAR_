package com.dp.gestioncoar.entity;

import java.io.Serializable;
import java.sql.Time;
import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
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
@Table(name = "coar_ficha_s2", schema = "SIGA")
public class Demuna_Ficha_S2Entity implements Serializable {
     
    @Id
    
    private Integer id_ficha_s2;
    private Integer id_ficha;
    private String usu_registro;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_registro;

    private String usu_actualiza;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_actualiza;
    private String estado_s2;
  
    private String usu_valida;
    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_valida;

    private String p2_1_1_a;
    private String p2_1_1_b;
    private String p2_1_1_c;
    private String p2_1_2_a;
    private String p2_1_2_a_1;
    private String p2_1_2_a_2;
    private String p2_1_2_b;
    private String p2_1_2_c;
    private String p2_1_3_a;
    private String p2_1_3_b;
    private String p2_1_3_c;
    private String p2_1_3_d;
    private String p2_1_3_e;
    private String p2_1_3_f;
    private String p2_1_4_a;
    private String p2_1_4_b;
    private String p2_1_4_c;

    
    
    
}


