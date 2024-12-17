/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dp.gestioncoar.entity;


import com.fasterxml.jackson.annotation.JsonFormat;
import java.io.Serializable;
import java.util.Date;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;
import org.hibernate.annotations.Formula;

@Entity
@Table(name = "educa_ficha_s1_alumnos", schema = "SIGA")
public class Educa_Ficha_S4_3Entity implements Serializable {
    
     @EmbeddedId
    private Educa_Ficha_S4_3PkEntity educa_ficha_s4_3pk;

    private String usu_registro;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "America/Lima", locale = "es-PE", shape = JsonFormat.Shape.STRING)
    private Date fch_registro;
    private String usu_actualiza;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "America/Lima", locale = "es-PE", shape = JsonFormat.Shape.STRING)
    private Date fch_actualiza;
    private Integer p0;
   
    private String p1_dni;
    private String p2_nombres;
    private String p3_edad;
    private String p4_sexo;
    private String p5_grado;
    private String p6_vive_re;
    private String p7_anio;
    private String p7_tipo_discapacidad;
    private String p7_recibe_tratamiento;
    private String p7_dosis;
    private String p7_sufre_enfermedad;
    private String p7_tiene_partida;
    private String p7_cuenta_documento;
    private String p7_presento_denuncia;
    private String p8_lengua;
    private String p8_conadis;
    private String p8_tipo_enfermedad;
    private String p8_certificado_nac;
    private String p8_tipodoc;
    private String p8_atencion_psico;
    private String p9_nom_tutor;
    private String p10_cel_tutor;
    private String p10_1;
    private String p10_carnet_refugio;
     private String p11_motivo_retiro;
    private String p11_observa;
    private String p4_3_noinfo;
    private String p8_otrodoc;
    private String p7_inabif;
    private String p11_fallecido;
    
    @Formula("(select m.pregunta_4 from siga.educa_ficha_4_lista m where m.id_lista=p0)")
    private String txt_p0;

    public Educa_Ficha_S4_3Entity() {
    }

    public Educa_Ficha_S4_3PkEntity getEduca_ficha_s4_3pk() {
        return educa_ficha_s4_3pk;
    }

    public void setEduca_ficha_s4_3pk(Educa_Ficha_S4_3PkEntity educa_ficha_s4_3pk) {
        this.educa_ficha_s4_3pk = educa_ficha_s4_3pk;
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

    public Integer getP0() {
        return p0;
    }

    public void setP0(Integer p0) {
        this.p0 = p0;
    }

    public String getP1_dni() {
        return p1_dni;
    }

    public void setP1_dni(String p1_dni) {
        this.p1_dni = p1_dni;
    }

    public String getP2_nombres() {
        return p2_nombres;
    }

    public void setP2_nombres(String p2_nombres) {
        this.p2_nombres = p2_nombres;
    }

    public String getP3_edad() {
        return p3_edad;
    }

    public void setP3_edad(String p3_edad) {
        this.p3_edad = p3_edad;
    }

    public String getP4_sexo() {
        return p4_sexo;
    }

    public void setP4_sexo(String p4_sexo) {
        this.p4_sexo = p4_sexo;
    }

    public String getP5_grado() {
        return p5_grado;
    }

    public void setP5_grado(String p5_grado) {
        this.p5_grado = p5_grado;
    }

    public String getP6_vive_re() {
        return p6_vive_re;
    }

    public void setP6_vive_re(String p6_vive_re) {
        this.p6_vive_re = p6_vive_re;
    }

    public String getP7_anio() {
        return p7_anio;
    }

    public void setP7_anio(String p7_anio) {
        this.p7_anio = p7_anio;
    }

    public String getP7_tipo_discapacidad() {
        return p7_tipo_discapacidad;
    }

    public void setP7_tipo_discapacidad(String p7_tipo_discapacidad) {
        this.p7_tipo_discapacidad = p7_tipo_discapacidad;
    }

    public String getP7_recibe_tratamiento() {
        return p7_recibe_tratamiento;
    }

    public void setP7_recibe_tratamiento(String p7_recibe_tratamiento) {
        this.p7_recibe_tratamiento = p7_recibe_tratamiento;
    }

    public String getP7_dosis() {
        return p7_dosis;
    }

    public void setP7_dosis(String p7_dosis) {
        this.p7_dosis = p7_dosis;
    }

    public String getP7_sufre_enfermedad() {
        return p7_sufre_enfermedad;
    }

    public void setP7_sufre_enfermedad(String p7_sufre_enfermedad) {
        this.p7_sufre_enfermedad = p7_sufre_enfermedad;
    }

    public String getP7_tiene_partida() {
        return p7_tiene_partida;
    }

    public void setP7_tiene_partida(String p7_tiene_partida) {
        this.p7_tiene_partida = p7_tiene_partida;
    }

    public String getP7_cuenta_documento() {
        return p7_cuenta_documento;
    }

    public void setP7_cuenta_documento(String p7_cuenta_documento) {
        this.p7_cuenta_documento = p7_cuenta_documento;
    }

    public String getP7_presento_denuncia() {
        return p7_presento_denuncia;
    }

    public void setP7_presento_denuncia(String p7_presento_denuncia) {
        this.p7_presento_denuncia = p7_presento_denuncia;
    }

    public String getP8_lengua() {
        return p8_lengua;
    }

    public void setP8_lengua(String p8_lengua) {
        this.p8_lengua = p8_lengua;
    }

    public String getP8_conadis() {
        return p8_conadis;
    }

    public void setP8_conadis(String p8_conadis) {
        this.p8_conadis = p8_conadis;
    }

    public String getP8_tipo_enfermedad() {
        return p8_tipo_enfermedad;
    }

    public void setP8_tipo_enfermedad(String p8_tipo_enfermedad) {
        this.p8_tipo_enfermedad = p8_tipo_enfermedad;
    }

    public String getP8_certificado_nac() {
        return p8_certificado_nac;
    }

    public void setP8_certificado_nac(String p8_certificado_nac) {
        this.p8_certificado_nac = p8_certificado_nac;
    }

    public String getP8_tipodoc() {
        return p8_tipodoc;
    }

    public void setP8_tipodoc(String p8_tipodoc) {
        this.p8_tipodoc = p8_tipodoc;
    }

    public String getP8_atencion_psico() {
        return p8_atencion_psico;
    }

    public void setP8_atencion_psico(String p8_atencion_psico) {
        this.p8_atencion_psico = p8_atencion_psico;
    }

    public String getP9_nom_tutor() {
        return p9_nom_tutor;
    }

    public void setP9_nom_tutor(String p9_nom_tutor) {
        this.p9_nom_tutor = p9_nom_tutor;
    }

    public String getP10_cel_tutor() {
        return p10_cel_tutor;
    }

    public void setP10_cel_tutor(String p10_cel_tutor) {
        this.p10_cel_tutor = p10_cel_tutor;
    }

    public String getP10_1() {
        return p10_1;
    }

    public void setP10_1(String p10_1) {
        this.p10_1 = p10_1;
    }

    public String getP10_carnet_refugio() {
        return p10_carnet_refugio;
    }

    public void setP10_carnet_refugio(String p10_carnet_refugio) {
        this.p10_carnet_refugio = p10_carnet_refugio;
    }

    
    public String getP11_motivo_retiro() {
        return p11_motivo_retiro;
    }

    public void setP11_motivo_retiro(String p11_motivo_retiro) {
        this.p11_motivo_retiro = p11_motivo_retiro;
    }
    

    public String getP11_observa() {
        return p11_observa;
    }

    public void setP11_observa(String p11_observa) {
        this.p11_observa = p11_observa;
    }

    public String getTxt_p0() {
        return txt_p0;
    }

    public void setTxt_p0(String txt_p0) {
        this.txt_p0 = txt_p0;
    }

    
      public String getP4_3_noinfo() {
        return p4_3_noinfo;
    }

    public void setP4_3_noinfo(String p4_3_noinfo) {
        this.p4_3_noinfo = p4_3_noinfo;
    }
    
       public String getP8_otrodoc() {
        return p8_otrodoc;
    }

    public void setP8_otrodoc(String p8_otrodoc) {
        this.p8_otrodoc = p8_otrodoc;
    }
    
     public String getP7_inabif() {
        return p7_inabif;
    }

    public void setP7_inabif(String p7_inabif) {
        this.p7_inabif = p7_inabif;
    }
    
      public String getP11_fallecido() {
        return p11_fallecido;
    }

    public void setP11_fallecido(String p11_fallecido) {
        this.p11_fallecido = p11_fallecido;
    }
    
}

 