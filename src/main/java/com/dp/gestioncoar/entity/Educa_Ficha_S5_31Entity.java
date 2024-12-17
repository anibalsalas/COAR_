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
@Table(name = "educa_ficha_s5_espacios_aulas", schema = "SIGA")
public class Educa_Ficha_S5_31Entity implements Serializable {
    


    @EmbeddedId
    private Educa_Ficha_S5_31PkEntity educa_ficha_s5_31pk; 

    private String usu_registro;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "America/Lima", locale = "es-PE", shape = JsonFormat.Shape.STRING)
    private Date fch_registro;
    private String usu_actualiza;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "America/Lima", locale = "es-PE", shape = JsonFormat.Shape.STRING)
    private Date fch_actualiza;

    private String p3_2_terreno; 
    private String p3_2_edificacion; 

   
    
   @Column(name = "p3_2_aula")
    private String   p3_2_aula;
   
   @Column(name = "p3_2_pisos")
    private  Integer p3_2_pisos;
   
    @Column(name = "p3_2_ambiente")
    private String  p3_2_ambiente;
    
    @Column(name = "p3_aforo")
    private  Integer p3_aforo;
    
    @Column(name = "p3_2_material_puertas")
    private String  p3_2_material_puertas;
    
    @Column(name = "p3_2_estado_conserva_puertas")
    private String  p3_2_estado_conserva_puertas;
    
    @Column(name = "p3_2_material_ventanas")
    private String  p3_2_material_ventanas;
    
    @Column(name = "p3_2_estado_conserva_ventanas")
    private String  p3_2_estado_conserva_ventanas;


    public Educa_Ficha_S5_31Entity() {
    }

    public Educa_Ficha_S5_31PkEntity getEduca_ficha_s5_31pk() {
        return educa_ficha_s5_31pk;
    }

    public void setEduca_ficha_s5_31pk(Educa_Ficha_S5_31PkEntity educa_ficha_s5_31pk) {
        this.educa_ficha_s5_31pk = educa_ficha_s5_31pk;
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

    public String getP3_2_terreno() {
        return p3_2_terreno;
    }

    public void setP3_2_terreno(String p3_2_terreno) {
        this.p3_2_terreno = p3_2_terreno;
    }

    public String getP3_2_edificacion() {
        return p3_2_edificacion;
    }

    public void setP3_2_edificacion(String p3_2_edificacion) {
        this.p3_2_edificacion = p3_2_edificacion;
    }

    public String getP3_2_aula() {
        return p3_2_aula;
    }

    public void setP3_2_aula(String p3_2_aula) {
        this.p3_2_aula = p3_2_aula;
    }

    public Integer getP3_2_pisos() {
        return p3_2_pisos;
    }

    public void setP3_2_pisos(Integer p3_2_pisos) {
        this.p3_2_pisos = p3_2_pisos;
    }

    public String getP3_2_ambiente() {
        return p3_2_ambiente;
    }

    public void setP3_2_ambiente(String p3_2_ambiente) {
        this.p3_2_ambiente = p3_2_ambiente;
    }

    public Integer getP3_aforo() {
        return p3_aforo;
    }

    public void setP3_aforo(Integer p3_aforo) {
        this.p3_aforo = p3_aforo;
    }

    public String getP3_2_material_puertas() {
        return p3_2_material_puertas;
    }

    public void setP3_2_material_puertas(String p3_2_material_puertas) {
        this.p3_2_material_puertas = p3_2_material_puertas;
    }

    public String getP3_2_estado_conserva_puertas() {
        return p3_2_estado_conserva_puertas;
    }

    public void setP3_2_estado_conserva_puertas(String p3_2_estado_conserva_puertas) {
        this.p3_2_estado_conserva_puertas = p3_2_estado_conserva_puertas;
    }

    public String getP3_2_material_ventanas() {
        return p3_2_material_ventanas;
    }

    public void setP3_2_material_ventanas(String p3_2_material_ventanas) {
        this.p3_2_material_ventanas = p3_2_material_ventanas;
    }

    public String getP3_2_estado_conserva_ventanas() {
        return p3_2_estado_conserva_ventanas;
    }

    public void setP3_2_estado_conserva_ventanas(String p3_2_estado_conserva_ventanas) {
        this.p3_2_estado_conserva_ventanas = p3_2_estado_conserva_ventanas;
    }

    
    
}
