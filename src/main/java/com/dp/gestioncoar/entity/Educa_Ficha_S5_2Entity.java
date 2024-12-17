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
@Table(name = "educa_ficha_s5_edificaciones", schema = "SIGA")
public class Educa_Ficha_S5_2Entity implements Serializable {
    
     @EmbeddedId
    private Educa_Ficha_S5_2PkEntity educa_ficha_s5_2pk;

    private String usu_registro;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "America/Lima", locale = "es-PE", shape = JsonFormat.Shape.STRING)
    private Date fch_registro;
    private String usu_actualiza;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "America/Lima", locale = "es-PE", shape = JsonFormat.Shape.STRING)
    private Date fch_actualiza;
   
    private String p2_2_terreno;
    private String p2_2_edifica;
    private Integer p2_2_pisos;
    private BigDecimal p2_2_area;
    private String p2_2_uso;
    private String p2_2_tiempo;
    private String p2_2_certificadoInspeccion;
    private String p2_2_calificacion;
    private String p2_2_riesgo;
    private String p2_2_certificado;
    private String p2_2_observa;
    private String p2_2_nosabe;



    public Educa_Ficha_S5_2Entity() {
    }

    public Educa_Ficha_S5_2PkEntity getEduca_ficha_s5_2pk() {
        return educa_ficha_s5_2pk;
    }

    public void setEduca_ficha_s5_2pk(Educa_Ficha_S5_2PkEntity educa_ficha_s5_2pk) {
        this.educa_ficha_s5_2pk = educa_ficha_s5_2pk;
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

    public String getP2_2_terreno() {
        return p2_2_terreno;
    }

    public void setP2_2_terreno(String p2_2_terreno) {
        this.p2_2_terreno = p2_2_terreno;
    }

    public String getP2_2_edifica() {
        return p2_2_edifica;
    }

    public void setP2_2_edifica(String p2_2_edifica) {
        this.p2_2_edifica = p2_2_edifica;
    }

    public Integer getP2_2_pisos() {
        return p2_2_pisos;
    }

    public void setP2_2_pisos(Integer p2_2_pisos) {
        this.p2_2_pisos = p2_2_pisos;
    }

    public BigDecimal getP2_2_area() {
        return p2_2_area;
    }

    public void setP2_2_area(BigDecimal p2_2_area) {
        this.p2_2_area = p2_2_area;
    }

    public String getP2_2_uso() {
        return p2_2_uso;
    }

    public void setP2_2_uso(String p2_2_uso) {
        this.p2_2_uso = p2_2_uso;
    }

    public String getP2_2_tiempo() {
        return p2_2_tiempo;
    }

    public void setP2_2_tiempo(String p2_2_tiempo) {
        this.p2_2_tiempo = p2_2_tiempo;
    }

    public String getP2_2_certificadoInspeccion() {
        return p2_2_certificadoInspeccion;
    }

    public void setP2_2_certificadoInspeccion(String p2_2_certificadoInspeccion) {
        this.p2_2_certificadoInspeccion = p2_2_certificadoInspeccion;
    }

    public String getP2_2_calificacion() {
        return p2_2_calificacion;
    }

    public void setP2_2_calificacion(String p2_2_calificacion) {
        this.p2_2_calificacion = p2_2_calificacion;
    }

    public String getP2_2_riesgo() {
        return p2_2_riesgo;
    }

    public void setP2_2_riesgo(String p2_2_riesgo) {
        this.p2_2_riesgo = p2_2_riesgo;
    }

    public String getP2_2_certificado() {
        return p2_2_certificado;
    }

    public void setP2_2_certificado(String p2_2_certificado) {
        this.p2_2_certificado = p2_2_certificado;
    }

    public String getP2_2_observa() {
        return p2_2_observa;
    }

    public void setP2_2_observa(String p2_2_observa) {
        this.p2_2_observa = p2_2_observa;
    }

    public String getP2_2_nosabe() {
        return p2_2_nosabe;
    }

    public void setP2_2_nosabe(String p2_2_nosabe) {
        this.p2_2_nosabe = p2_2_nosabe;
    }
        
    
}