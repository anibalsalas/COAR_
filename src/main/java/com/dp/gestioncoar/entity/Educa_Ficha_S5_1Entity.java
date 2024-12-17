/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dp.gestioncoar.entity;


import com.fasterxml.jackson.annotation.JsonFormat;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;
import org.hibernate.annotations.Formula;

@Entity
@Table(name = "educa_ficha_s5_terrenos", schema = "SIGA")
public class Educa_Ficha_S5_1Entity implements Serializable {
    
     @EmbeddedId
    private Educa_Ficha_S5_1PkEntity educa_ficha_s5_1pk;

    private String usu_registro;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "America/Lima", locale = "es-PE", shape = JsonFormat.Shape.STRING)
    private Date fch_registro;
    private String usu_actualiza;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "America/Lima", locale = "es-PE", shape = JsonFormat.Shape.STRING)
    private Date fch_actualiza;
   
    private String p1_2_terreno;
    private BigDecimal p1_2_area;
    private String p1_2_condicion;
    private String p1_2_saneamiento;
    private String p1_2_posesion;
    private String p1_2_propietario;
    private String p1_2_inscrito;
    private String p1_2_uso;
    private String p1_2_uso_detalle;
    
    private String p1_2_nosabe;
    



    public Educa_Ficha_S5_1Entity() {
    }

    public Educa_Ficha_S5_1PkEntity getEduca_ficha_s5_1pk() {
        return educa_ficha_s5_1pk;
    }

    public void setEduca_ficha_s5_1pk(Educa_Ficha_S5_1PkEntity educa_ficha_s5_1pk) {
        this.educa_ficha_s5_1pk = educa_ficha_s5_1pk;
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

    public BigDecimal getP1_2_area() {
        return p1_2_area;
    }

    public void setP1_2_area(BigDecimal p1_2_area) {
        this.p1_2_area = p1_2_area;
    }

    public String getP1_2_condicion() {
        return p1_2_condicion;
    }

    public void setP1_2_condicion(String p1_2_condicion) {
        this.p1_2_condicion = p1_2_condicion;
    }

    public String getP1_2_saneamiento() {
        return p1_2_saneamiento;
    }

    public void setP1_2_saneamiento(String p1_2_saneamiento) {
        this.p1_2_saneamiento = p1_2_saneamiento;
    }

    public String getP1_2_posesion() {
        return p1_2_posesion;
    }

    public void setP1_2_posesion(String p1_2_posesion) {
        this.p1_2_posesion = p1_2_posesion;
    }

    public String getP1_2_propietario() {
        return p1_2_propietario;
    }

    public void setP1_2_propietario(String p1_2_propietario) {
        this.p1_2_propietario = p1_2_propietario;
    }

    public String getP1_2_inscrito() {
        return p1_2_inscrito;
    }

    public void setP1_2_inscrito(String p1_2_inscrito) {
        this.p1_2_inscrito = p1_2_inscrito;
    }

    public String getP1_2_uso() {
        return p1_2_uso;
    }

    public void setP1_2_uso(String p1_2_uso) {
        this.p1_2_uso = p1_2_uso;
    }

    public String getP1_2_uso_detalle() {
        return p1_2_uso_detalle;
    }

    public void setP1_2_uso_detalle(String p1_2_uso_detalle) {
        this.p1_2_uso_detalle = p1_2_uso_detalle;
    }

    public String getP1_2_terreno() {
        return p1_2_terreno;
    }

    public void setP1_2_terreno(String p1_2_terreno) {
        this.p1_2_terreno = p1_2_terreno;
    }

    
    
      public String getP1_2_nosabe() {
        return p1_2_nosabe;
    }

    public void setP1_2_nosabe(String p1_2_nosabe) {
        this.p1_2_nosabe = p1_2_nosabe;
    }
    
    
    
}