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
@Table(name = "coar_ficha_s3", schema = "SIGA")
public class Demuna_Ficha_S3Entity implements Serializable {
    @Id
    public Integer id_ficha_s3;
    public Integer id_ficha;
    private String usu_registro;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_registro;

    private String usu_actualiza;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_actualiza;
    
    private String estado_s3;
    
    private String usu_valida;
    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_valida;
  
    

}


//  p3_3           char(1 byte),
//  p3_3_obser     varchar2(1100 byte),
//  p3_4           char(1 byte),
//  p3_4_obser     varchar2(1100 byte),
//  p3_5           char(1 byte),
//  p3_5_obser     varchar2(1100 byte),
//  p3_6           char(1 byte),
//  p3_6_obser     varchar2(1100 byte),
//  p3_6_1         char(1 byte),
//  p3_7_luz       char(1 byte),
//  p3_7_agua      char(1 byte),
//  p3_7_tel       char(1 byte),
//  p3_7_inter     char(1 byte),
//  p3_8           char(1 byte)