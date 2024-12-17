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
@Table(name = "educa_ficha_s5_paredes", schema = "SIGA")
public class Educa_Ficha_S5_4Entity implements Serializable {
    
     @EmbeddedId
    private Educa_Ficha_S5_4PkEntity educa_ficha_s5_4pk;

    private String usu_registro;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "America/Lima", locale = "es-PE", shape = JsonFormat.Shape.STRING)
    private Date fch_registro;
    private String usu_actualiza;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "America/Lima", locale = "es-PE", shape = JsonFormat.Shape.STRING)
    private Date fch_actualiza;
   
   private String p2_4_terreno;
    private String p2_4_edificacion;
    
    
    @Column(name = "p2_4_material")
    private String p2_4_material;
   

    



    public Educa_Ficha_S5_4Entity() {
    }

    public Educa_Ficha_S5_4PkEntity getEduca_ficha_s5_4pk() {
        return educa_ficha_s5_4pk;
    }

    public void setEduca_ficha_s5_4pk(Educa_Ficha_S5_4PkEntity educa_ficha_s5_4pk) {
        this.educa_ficha_s5_4pk = educa_ficha_s5_4pk;
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

    public String getP2_4_terreno() {
        return p2_4_terreno;
    }

    public void setP2_4_terreno(String p2_4_terreno) {
        this.p2_4_terreno = p2_4_terreno;
    }

    public String getP2_4_edificacion() {
        return p2_4_edificacion;
    }

    public void setP2_4_edificacion(String p2_4_edificacion) {
        this.p2_4_edificacion = p2_4_edificacion;
    }

    public String getP2_4_material() {
        return p2_4_material;
    }

    public void setP2_4_material(String p2_4_material) {
        this.p2_4_material = p2_4_material;
    }

    
    
}