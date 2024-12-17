
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dp.gestioncoar.entity;


import com.fasterxml.jackson.annotation.JsonFormat;
import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;
import org.hibernate.annotations.Formula;

@Entity
@Table(name = "coar_ficha_s1_p1_2", schema = "SIGA")
public class Coar_Ficha_S1_P1_2Entity implements Serializable {
    
     @EmbeddedId
    private Coar_Ficha_S1_P1_2PkEntity coar_ficha_s1_p1_2pk;

    private String usu_registro;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "America/Lima", locale = "es-PE", shape = JsonFormat.Shape.STRING)
    private Date fch_registro;
    private String usu_actualiza;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "America/Lima", locale = "es-PE", shape = JsonFormat.Shape.STRING)
    private Date fch_actualiza;
    
    @Column(name = "p1_2_grupo_ocupa")
   private String p1_2_grupo_ocupa;
    
    private Integer p1_2_peruanas;
    private Integer p1_2_extranjeras;
    private Integer p1_2_peruanos;
   private Integer p1_2_extranjeros;
    private Integer p1_2_total;
   

    public Coar_Ficha_S1_P1_2Entity() {
    }

    public Coar_Ficha_S1_P1_2PkEntity getCoar_ficha_s1_p1_2pk() {
        return coar_ficha_s1_p1_2pk;
    }

    public void setCoar_ficha_s1_p1_2pk(Coar_Ficha_S1_P1_2PkEntity coar_ficha_s1_p1_2pk) {
        this.coar_ficha_s1_p1_2pk = coar_ficha_s1_p1_2pk;
    }

    public String getUsu_registro() {
        return usu_registro;
    }

    public void setUsu_registro(String usu_registro) {
        this.usu_registro = usu_registro;
    }

    public Date getFch_registro() {
        return fch_registro;
    }

    public void setFch_registro(Date fch_registro) {
        this.fch_registro = fch_registro;
    }

    public String getUsu_actualiza() {
        return usu_actualiza;
    }

    public void setUsu_actualiza(String usu_actualiza) {
        this.usu_actualiza = usu_actualiza;
    }

    public Date getFch_actualiza() {
        return fch_actualiza;
    }

    public void setFch_actualiza(Date fch_actualiza) {
        this.fch_actualiza = fch_actualiza;
    }

    public String getP1_2_grupo_ocupa() {
        return p1_2_grupo_ocupa;
    }

    public void setP1_2_grupo_ocupa(String p1_2_grupo_ocupa) {
        this.p1_2_grupo_ocupa = p1_2_grupo_ocupa;
    }

    public Integer getP1_2_peruanas() {
        return p1_2_peruanas;
    }

    public void setP1_2_peruanas(Integer p1_2_peruanas) {
        this.p1_2_peruanas = p1_2_peruanas;
    }

    public Integer getP1_2_extranjeras() {
        return p1_2_extranjeras;
    }

    public void setP1_2_extranjeras(Integer p1_2_extranjeras) {
        this.p1_2_extranjeras = p1_2_extranjeras;
    }

    public Integer getP1_2_peruanos() {
        return p1_2_peruanos;
    }

    public void setP1_2_peruanos(Integer p1_2_peruanos) {
        this.p1_2_peruanos = p1_2_peruanos;
    }

    public Integer getP1_2_extranjeros() {
        return p1_2_extranjeros;
    }

    public void setP1_2_extranjeros(Integer p1_2_extranjeros) {
        this.p1_2_extranjeros = p1_2_extranjeros;
    }

    public Integer getP1_2_total() {
        return p1_2_total;
    }

    public void setP1_2_total(Integer p1_2_total) {
        this.p1_2_total = p1_2_total;
    }

   

    
    
    
}