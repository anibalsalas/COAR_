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
@Table(name = "educa_ficha_s5_detectores", schema = "SIGA")
public class Educa_Ficha_S5_10Entity implements Serializable {
    


    @EmbeddedId
    private Educa_Ficha_S5_10PkEntity educa_ficha_s5_10pk; 

    private String usu_registro;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "America/Lima", locale = "es-PE", shape = JsonFormat.Shape.STRING)
    private Date fch_registro;
    private String usu_actualiza;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "America/Lima", locale = "es-PE", shape = JsonFormat.Shape.STRING)
    private Date fch_actualiza;

    private String p2_10_terreno; 
    private String p2_10_edificacion; 

    @Column(name = "p2_10_cantidad_total") 
    private Integer p2_10_cantidad_total;

    @Column(name = "p2_10_total_operativos") 
    private Integer p2_10_total_operativos;

    @Column(name = "p2_10_cantidad_bien") 
    private Integer p2_10_cantidad_bien;

    @Column(name = "p2_10_cantidad_repara") 
    private Integer p2_10_cantidad_repara;

    @Column(name = "p2_10_menosuno") 
    private Integer p2_10_menosuno;

    @Column(name = "p2_10_deunoados")
    private Integer p2_10_deunoados;

    @Column(name = "p2_10_dedosamas") 
    private Integer p2_10_dedosamas;

    @Column(name = "p2_10_ninguna") 
    private String p2_10_ninguna;

    public Educa_Ficha_S5_10Entity() {
    }

    public Educa_Ficha_S5_10PkEntity getEduca_ficha_s5_10pk() {
        return educa_ficha_s5_10pk;
    }

    public void setEduca_ficha_s5_10pk(Educa_Ficha_S5_10PkEntity educa_ficha_s5_10pk) {
        this.educa_ficha_s5_10pk = educa_ficha_s5_10pk;
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

    public String getP2_10_terreno() {
        return p2_10_terreno;
    }

    public void setP2_10_terreno(String p2_10_terreno) {
        this.p2_10_terreno = p2_10_terreno;
    }

    public String getP2_10_edificacion() {
        return p2_10_edificacion;
    }

    public void setP2_10_edificacion(String p2_10_edificacion) {
        this.p2_10_edificacion = p2_10_edificacion;
    }

    public Integer getP2_10_cantidad_total() {
        return p2_10_cantidad_total;
    }

    public void setP2_10_cantidad_total(Integer p2_10_cantidad_total) {
        this.p2_10_cantidad_total = p2_10_cantidad_total;
    }

    public Integer getP2_10_total_operativos() {
        return p2_10_total_operativos;
    }

    public void setP2_10_total_operativos(Integer p2_10_total_operativos) {
        this.p2_10_total_operativos = p2_10_total_operativos;
    }

    public Integer getP2_10_cantidad_bien() {
        return p2_10_cantidad_bien;
    }

    public void setP2_10_cantidad_bien(Integer p2_10_cantidad_bien) {
        this.p2_10_cantidad_bien = p2_10_cantidad_bien;
    }

    public Integer getP2_10_cantidad_repara() {
        return p2_10_cantidad_repara;
    }

    public void setP2_10_cantidad_repara(Integer p2_10_cantidad_repara) {
        this.p2_10_cantidad_repara = p2_10_cantidad_repara;
    }

    public Integer getP2_10_menosuno() {
        return p2_10_menosuno;
    }

    public void setP2_10_menosuno(Integer p2_10_menosuno) {
        this.p2_10_menosuno = p2_10_menosuno;
    }

    public Integer getP2_10_deunoados() {
        return p2_10_deunoados;
    }

    public void setP2_10_deunoados(Integer p2_10_deunoados) {
        this.p2_10_deunoados = p2_10_deunoados;
    }

    public Integer getP2_10_dedosamas() {
        return p2_10_dedosamas;
    }

    public void setP2_10_dedosamas(Integer p2_10_dedosamas) {
        this.p2_10_dedosamas = p2_10_dedosamas;
    }

    public String getP2_10_ninguna() {
        return p2_10_ninguna;
    }

    public void setP2_10_ninguna(String p2_10_ninguna) {
        this.p2_10_ninguna = p2_10_ninguna;
    }

    
}
