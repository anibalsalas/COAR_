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
@Table(name = "educa_ficha_s5_conservacion", schema = "SIGA")
public class Educa_Ficha_S5_7Entity implements Serializable {
    
     @EmbeddedId
    private Educa_Ficha_S5_7PkEntity educa_ficha_s5_7pk;

    private String usu_registro;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "America/Lima", locale = "es-PE", shape = JsonFormat.Shape.STRING)
    private Date fch_registro;
    private String usu_actualiza;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "America/Lima", locale = "es-PE", shape = JsonFormat.Shape.STRING)
    private Date fch_actualiza;
   
   private String p2_7_terreno;
    private String p2_7_edificacion;
    
    
    @Column(name = "p2_7_techos")
    private String p2_7_techos;
   

      @Column(name = "p2_7_paredes")
    private String p2_7_paredes;
      
         @Column(name = "p2_7_pisos")
    private String p2_7_pisos;



    public Educa_Ficha_S5_7Entity() {
    }

    public Educa_Ficha_S5_7PkEntity getEduca_ficha_s5_7pk() {
        return educa_ficha_s5_7pk;
    }

    public void setEduca_ficha_s5_7pk(Educa_Ficha_S5_7PkEntity educa_ficha_s5_7pk) {
        this.educa_ficha_s5_7pk = educa_ficha_s5_7pk;
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

    public String getP2_7_terreno() {
        return p2_7_terreno;
    }

    public void setP2_7_terreno(String p2_7_terreno) {
        this.p2_7_terreno = p2_7_terreno;
    }

    public String getP2_7_edificacion() {
        return p2_7_edificacion;
    }

    public void setP2_7_edificacion(String p2_7_edificacion) {
        this.p2_7_edificacion = p2_7_edificacion;
    }

    public String getP2_7_techos() {
        return p2_7_techos;
    }

    public void setP2_7_techos(String p2_7_techos) {
        this.p2_7_techos = p2_7_techos;
    }

    public String getP2_7_paredes() {
        return p2_7_paredes;
    }

    public void setP2_7_paredes(String p2_7_paredes) {
        this.p2_7_paredes = p2_7_paredes;
    }

    public String getP2_7_pisos() {
        return p2_7_pisos;
    }

    public void setP2_7_pisos(String p2_7_pisos) {
        this.p2_7_pisos = p2_7_pisos;
    }

    
    
}