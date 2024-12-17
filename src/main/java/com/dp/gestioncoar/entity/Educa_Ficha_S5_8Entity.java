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
@Table(name = "educa_ficha_s5_señalizacion", schema = "SIGA")
public class Educa_Ficha_S5_8Entity implements Serializable {
    
     @EmbeddedId
    private Educa_Ficha_S5_8PkEntity educa_ficha_s5_8pk;

    private String usu_registro;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "America/Lima", locale = "es-PE", shape = JsonFormat.Shape.STRING)
    private Date fch_registro;
    private String usu_actualiza;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "America/Lima", locale = "es-PE", shape = JsonFormat.Shape.STRING)
    private Date fch_actualiza;
   
   private String p2_8_terreno;
    private String p2_8_edificacion;
    
    
    @Column(name = "p2_8_senia")
    private String p2_8_senia;
   

    @Column(name = "p2_8_alarmas")
    private String p2_8_alarmas;
      
    @Column(name = "p2_8_boti")
    private String p2_8_boti;

    @Column(name = "p2_8_luces")
    private String p2_8_luces;
 
    @Column(name = "p2_8_extintores")
    private Integer p2_8_extintores;

    @Column(name = "p2_8_extintores_operativos")
    private Integer p2_8_extintores_operativos;

    @Column(name = "p2_8_cantidad_bien")
    private Integer p2_8_cantidad_bien;

    @Column(name = "p2_8_cantidad_repara")
    private Integer p2_8_cantidad_repara;

    @Column(name = "p2_8_menosuno")
    private Integer p2_8_menosuno;

    @Column(name = "p2_8_deunoados")
    private Integer p2_8_deunoados;
    
      @Column(name = "p2_8_dedosamas")
    private Integer p2_8_dedosamas;
      
    @Column(name = "p2_8_ninguna1")
    private String p2_8_ninguna1;
     
    @Column(name = "p2_8_ninguna2")
    private String p2_8_ninguna2;
          
    public Educa_Ficha_S5_8Entity() {
    }

    public Educa_Ficha_S5_8PkEntity getEduca_ficha_s5_8pk() {
        return educa_ficha_s5_8pk;
    }

    public void setEduca_ficha_s5_8pk(Educa_Ficha_S5_8PkEntity educa_ficha_s5_8pk) {
        this.educa_ficha_s5_8pk = educa_ficha_s5_8pk;
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

    public String getP2_8_terreno() {
        return p2_8_terreno;
    }

    public void setP2_8_terreno(String p2_8_terreno) {
        this.p2_8_terreno = p2_8_terreno;
    }

    public String getP2_8_edificacion() {
        return p2_8_edificacion;
    }

    public void setP2_8_edificacion(String p2_8_edificacion) {
        this.p2_8_edificacion = p2_8_edificacion;
    }

    public String getP2_8_senia() {
        return p2_8_senia;
    }

    public void setP2_8_senia(String p2_8_senia) {
        this.p2_8_senia = p2_8_senia;
    }

    public String getP2_8_alarmas() {
        return p2_8_alarmas;
    }

    public void setP2_8_alarmas(String p2_8_alarmas) {
        this.p2_8_alarmas = p2_8_alarmas;
    }

    public String getP2_8_boti() {
        return p2_8_boti;
    }

    public void setP2_8_boti(String p2_8_boti) {
        this.p2_8_boti = p2_8_boti;
    }

    public String getP2_8_luces() {
        return p2_8_luces;
    }

    public void setP2_8_luces(String p2_8_luces) {
        this.p2_8_luces = p2_8_luces;
    }

    public Integer getP2_8_extintores() {
        return p2_8_extintores;
    }

    public void setP2_8_extintores(Integer p2_8_extintores) {
        this.p2_8_extintores = p2_8_extintores;
    }

    public Integer getP2_8_extintores_operativos() {
        return p2_8_extintores_operativos;
    }

    public void setP2_8_extintores_operativos(Integer p2_8_extintores_operativos) {
        this.p2_8_extintores_operativos = p2_8_extintores_operativos;
    }

    public Integer getP2_8_cantidad_bien() {
        return p2_8_cantidad_bien;
    }

    public void setP2_8_cantidad_bien(Integer p2_8_cantidad_bien) {
        this.p2_8_cantidad_bien = p2_8_cantidad_bien;
    }

    public Integer getP2_8_cantidad_repara() {
        return p2_8_cantidad_repara;
    }

    public void setP2_8_cantidad_repara(Integer p2_8_cantidad_repara) {
        this.p2_8_cantidad_repara = p2_8_cantidad_repara;
    }

    public Integer getP2_8_menosuno() {
        return p2_8_menosuno;
    }

    public void setP2_8_menosuno(Integer p2_8_menosuno) {
        this.p2_8_menosuno = p2_8_menosuno;
    }

    public Integer getP2_8_deunoados() {
        return p2_8_deunoados;
    }

    public void setP2_8_deunoados(Integer p2_8_deunoados) {
        this.p2_8_deunoados = p2_8_deunoados;
    }

    public Integer getP2_8_dedosamas() {
        return p2_8_dedosamas;
    }

    public void setP2_8_dedosamas(Integer p2_8_dedosamas) {
        this.p2_8_dedosamas = p2_8_dedosamas;
    }

    public String getP2_8_ninguna1() {
        return p2_8_ninguna1;
    }

    public void setP2_8_ninguna1(String p2_8_ninguna1) {
        this.p2_8_ninguna1 = p2_8_ninguna1;
    }

    public String getP2_8_ninguna2() {
        return p2_8_ninguna2;
    }

    public void setP2_8_ninguna2(String p2_8_ninguna2) {
        this.p2_8_ninguna2 = p2_8_ninguna2;
    }

    
    
}