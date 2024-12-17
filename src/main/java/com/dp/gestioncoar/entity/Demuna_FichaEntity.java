/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dp.gestioncoar.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Formula;
import org.springframework.format.annotation.DateTimeFormat;

/**
 *
 * @author asalas
 */
@Entity
@Table(name = "coar_ficha", schema = "SIGA")
public class Demuna_FichaEntity implements Serializable {

    @Id
    private Integer id_ficha;
    
    private String usu_registro;

    @DateTimeFormat(pattern = "dd/MM/yyyy")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_registro;

    private String usu_actualiza;

    @DateTimeFormat(pattern = "dd/MM/yyyy")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_actualiza;

    private String estado;
    private String codi_depe_tde;

//    @DateTimeFormat(pattern = "dd/MM/yyyy")
//    @Temporal(TemporalType.TIMESTAMP)
//    private Date fch_supervision;
    
    @DateTimeFormat(pattern = "yyyy-MM-dd") // Formato que espera el input de tipo date
    @Column(name = "fch_supervision")
    private LocalDate fch_supervision;
    
    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_valida;
    private String flag_validar;
     private String usu_valida;

     private Integer id_sestablecmnt;
    private String cod_unico;
    private String cel_comisionado;
     private String aceptar;
     private String c_tipo_entidad;
  
    private String nom_entidad;
   
    private String codi_depa_dpt;
    private String codi_prov_tpr;
    private String codi_dist_tdi;

    @Formula("(select t.desc_depe_tde from siga.tdependencias t where t.codi_depe_tde = codi_depe_tde)")
    private String txt_desc_depe_tde;

    @Formula("(select u.nomb_cort_usu from siga.usuario u where trim(u.usuario_usu) = trim(usu_registro))")
    private String txt_comisionado;

    @Formula("decode(estado,'I','INCOMPLETA','C','COMPLETA')")
    private String txt_estado_ficha;


    @Formula("(select x.nombre from siga.xubigeo x where x.coddpto = codi_depa_dpt and x.codprov = '00' and x.coddist = '00')")
    private String departamento_coar;
    @Formula("(select x.nombre from siga.xubigeo x where x.coddpto = codi_depa_dpt and x.codprov = codi_prov_tpr and x.coddist = '00')")
    private String provincia_coar;
    @Formula("(select x.nombre from siga.xubigeo x where x.coddpto = codi_depa_dpt and x.codprov = codi_prov_tpr and x.coddist = codi_dist_tdi)")
    private String distrito_coar;
    
     //@Formula("decode(flag_validar,'0','Ficha sin Validar','1','Validación Parcial','2','Validación Completada')")
    @Formula("decode(nvl(flag_validar, '0'), '0', 'Ficha sin Validar', '1', 'Validación Parcial', '2', 'Validación Completada')")
    private String txt_flag_validar;
    
    private String estado_s1;
    
    private String direccion_coar;
    
    private String hora_inicio;
    
    private String hora_fin;
    
   
    
    private Integer horas_total;
    private Integer min_total;
    
    @Transient
    private Demuna_FichaEntity coar_ficha;
    
//    @Transient
//    public Demuna_Ficha_S1Entity coar_ficha_s1;
    @Transient
    public Demuna_Ficha_S2Entity coar_ficha_s2;
    @Transient
    private Demuna_Ficha_S3Entity coar_ficha_s3;
    @Transient
    private Demuna_Ficha_S4Entity coar_ficha_s4;
    @Transient
    private Demuna_Ficha_S5Entity coar_ficha_s5;
    @Transient
    private Demuna_Ficha_S6Entity coar_ficha_s6;
    @Transient
    private Demuna_Ficha_S7Entity coar_ficha_s7;

    
    
    @Transient
    private String msg_modal;
    @Transient
    private String txt_btn_guardado_parcial;
    @Transient
    private boolean flag_readonly;
    @Transient
    private boolean flag_ie;
    @Transient
    private boolean flag_guardado_parcial;
    @Transient
    private String msg_modal_ie;
    @Transient
    private String flag_modal;
    @Transient
    private String cod_unico_ant;

    public Integer getId_ficha() {
        return id_ficha;
    }

    public void setId_ficha(Integer id_ficha) {
        this.id_ficha = id_ficha;
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

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getCodi_depe_tde() {
        return codi_depe_tde;
    }

    public void setCodi_depe_tde(String codi_depe_tde) {
        this.codi_depe_tde = codi_depe_tde;
    }

    public LocalDate getFch_supervision() {
        return fch_supervision;
    }

    public void setFch_supervision(LocalDate fch_supervision) {
        this.fch_supervision = fch_supervision;
    }

    public Date getFch_valida() {
        return fch_valida;
    }

    public void setFch_valida(Date fch_valida) {
        this.fch_valida = fch_valida;
    }

    public String getFlag_validar() {
        return flag_validar;
    }

    public void setFlag_validar(String flag_validar) {
        this.flag_validar = flag_validar;
    }

    public String getUsu_valida() {
        return usu_valida;
    }

    public void setUsu_valida(String usu_valida) {
        this.usu_valida = usu_valida;
    }

    public Integer getId_sestablecmnt() {
        return id_sestablecmnt;
    }

    public void setId_sestablecmnt(Integer id_sestablecmnt) {
        this.id_sestablecmnt = id_sestablecmnt;
    }

    public String getCod_unico() {
        return cod_unico;
    }

    public void setCod_unico(String cod_unico) {
        this.cod_unico = cod_unico;
    }

    public String getCel_comisionado() {
        return cel_comisionado;
    }

    public void setCel_comisionado(String cel_comisionado) {
        this.cel_comisionado = cel_comisionado;
    }

    public String getAceptar() {
        return aceptar;
    }

    public void setAceptar(String aceptar) {
        this.aceptar = aceptar;
    }

    public String getC_tipo_entidad() {
        return c_tipo_entidad;
    }

    public void setC_tipo_entidad(String c_tipo_entidad) {
        this.c_tipo_entidad = c_tipo_entidad;
    }

    public String getNom_entidad() {
        return nom_entidad;
    }

    public void setNom_entidad(String nom_entidad) {
        this.nom_entidad = nom_entidad;
    }

    public String getCodi_depa_dpt() {
        return codi_depa_dpt;
    }

    public void setCodi_depa_dpt(String codi_depa_dpt) {
        this.codi_depa_dpt = codi_depa_dpt;
    }

    public String getCodi_prov_tpr() {
        return codi_prov_tpr;
    }

    public void setCodi_prov_tpr(String codi_prov_tpr) {
        this.codi_prov_tpr = codi_prov_tpr;
    }

    public String getCodi_dist_tdi() {
        return codi_dist_tdi;
    }

    public void setCodi_dist_tdi(String codi_dist_tdi) {
        this.codi_dist_tdi = codi_dist_tdi;
    }

    public String getTxt_desc_depe_tde() {
        return txt_desc_depe_tde;
    }

    public void setTxt_desc_depe_tde(String txt_desc_depe_tde) {
        this.txt_desc_depe_tde = txt_desc_depe_tde;
    }

    public String getTxt_comisionado() {
        return txt_comisionado;
    }

    public void setTxt_comisionado(String txt_comisionado) {
        this.txt_comisionado = txt_comisionado;
    }

    public String getTxt_estado_ficha() {
        return txt_estado_ficha;
    }

    public void setTxt_estado_ficha(String txt_estado_ficha) {
        this.txt_estado_ficha = txt_estado_ficha;
    }

    public String getDepartamento_coar() {
        return departamento_coar;
    }

    public void setDepartamento_coar(String departamento_coar) {
        this.departamento_coar = departamento_coar;
    }

    public String getProvincia_coar() {
        return provincia_coar;
    }

    public void setProvincia_coar(String provincia_coar) {
        this.provincia_coar = provincia_coar;
    }

    public String getDistrito_coar() {
        return distrito_coar;
    }

    public void setDistrito_coar(String distrito_coar) {
        this.distrito_coar = distrito_coar;
    }

    public String getTxt_flag_validar() {
        return txt_flag_validar;
    }

    public void setTxt_flag_validar(String txt_flag_validar) {
        this.txt_flag_validar = txt_flag_validar;
    }

    public String getEstado_s1() {
        return estado_s1;
    }

    public void setEstado_s1(String estado_s1) {
        this.estado_s1 = estado_s1;
    }

    public String getDireccion_coar() {
        return direccion_coar;
    }

    public void setDireccion_coar(String direccion_coar) {
        this.direccion_coar = direccion_coar;
    }

    public String getHora_inicio() {
        return hora_inicio;
    }

    public void setHora_inicio(String hora_inicio) {
        this.hora_inicio = hora_inicio;
    }

    public String getHora_fin() {
        return hora_fin;
    }

    public void setHora_fin(String hora_fin) {
        this.hora_fin = hora_fin;
    }

    public Integer getHoras_total() {
        return horas_total;
    }

    public void setHoras_total(Integer horas_total) {
        this.horas_total = horas_total;
    }

    public Integer getMin_total() {
        return min_total;
    }

    public void setMin_total(Integer min_total) {
        this.min_total = min_total;
    }

    public Demuna_FichaEntity getCoar_ficha() {
        return coar_ficha;
    }

    public void setCoar_ficha(Demuna_FichaEntity coar_ficha) {
        this.coar_ficha = coar_ficha;
    }

    public Demuna_Ficha_S2Entity getCoar_ficha_s2() {
        return coar_ficha_s2;
    }

    public void setCoar_ficha_s2(Demuna_Ficha_S2Entity coar_ficha_s2) {
        this.coar_ficha_s2 = coar_ficha_s2;
    }

    public Demuna_Ficha_S3Entity getCoar_ficha_s3() {
        return coar_ficha_s3;
    }

    public void setCoar_ficha_s3(Demuna_Ficha_S3Entity coar_ficha_s3) {
        this.coar_ficha_s3 = coar_ficha_s3;
    }

    public Demuna_Ficha_S4Entity getCoar_ficha_s4() {
        return coar_ficha_s4;
    }

    public void setCoar_ficha_s4(Demuna_Ficha_S4Entity coar_ficha_s4) {
        this.coar_ficha_s4 = coar_ficha_s4;
    }

    public Demuna_Ficha_S5Entity getCoar_ficha_s5() {
        return coar_ficha_s5;
    }

    public void setCoar_ficha_s5(Demuna_Ficha_S5Entity coar_ficha_s5) {
        this.coar_ficha_s5 = coar_ficha_s5;
    }

    public Demuna_Ficha_S6Entity getCoar_ficha_s6() {
        return coar_ficha_s6;
    }

    public void setCoar_ficha_s6(Demuna_Ficha_S6Entity coar_ficha_s6) {
        this.coar_ficha_s6 = coar_ficha_s6;
    }

    public Demuna_Ficha_S7Entity getCoar_ficha_s7() {
        return coar_ficha_s7;
    }

    public void setCoar_ficha_s7(Demuna_Ficha_S7Entity coar_ficha_s7) {
        this.coar_ficha_s7 = coar_ficha_s7;
    }

    public String getMsg_modal() {
        return msg_modal;
    }

    public void setMsg_modal(String msg_modal) {
        this.msg_modal = msg_modal;
    }

    public String getTxt_btn_guardado_parcial() {
        return txt_btn_guardado_parcial;
    }

    public void setTxt_btn_guardado_parcial(String txt_btn_guardado_parcial) {
        this.txt_btn_guardado_parcial = txt_btn_guardado_parcial;
    }

    public boolean isFlag_readonly() {
        return flag_readonly;
    }

    public void setFlag_readonly(boolean flag_readonly) {
        this.flag_readonly = flag_readonly;
    }

    public boolean isFlag_ie() {
        return flag_ie;
    }

    public void setFlag_ie(boolean flag_ie) {
        this.flag_ie = flag_ie;
    }

    public boolean isFlag_guardado_parcial() {
        return flag_guardado_parcial;
    }

    public void setFlag_guardado_parcial(boolean flag_guardado_parcial) {
        this.flag_guardado_parcial = flag_guardado_parcial;
    }

    public String getMsg_modal_ie() {
        return msg_modal_ie;
    }

    public void setMsg_modal_ie(String msg_modal_ie) {
        this.msg_modal_ie = msg_modal_ie;
    }

    public String getFlag_modal() {
        return flag_modal;
    }

    public void setFlag_modal(String flag_modal) {
        this.flag_modal = flag_modal;
    }

    public String getCod_unico_ant() {
        return cod_unico_ant;
    }

    public void setCod_unico_ant(String cod_unico_ant) {
        this.cod_unico_ant = cod_unico_ant;
    }

   
   

}
