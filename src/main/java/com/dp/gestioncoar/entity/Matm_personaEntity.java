package com.dp.gestioncoar.entity;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "matm_persona", schema = "czavaleta")
public class Matm_personaEntity implements Serializable {

    @Id
    private String nu_doc_nacimiento;

    private String nu_persona,
            in_doc_nacimiento,
            prenom_inscrito,
            ap_primer,
            ap_segundo,
            fe_nacimiento,
            de_genero,
            co_departamento_domicilio,
            co_provincia_domicilio,
            co_distrito_domicilio,
            de_departamento_domicilio,
            de_provincia_domicilio,
            de_distrito_domicilio,
            de_direccion,
            fe_emision,
            co_departamento_naci,
            co_provincia_naci,
            co_distrito_naci;

    public String getNu_doc_nacimiento() {
        return nu_doc_nacimiento;
    }

    public void setNu_doc_nacimiento(String nu_doc_nacimiento) {
        this.nu_doc_nacimiento = nu_doc_nacimiento;
    }

    public String getNu_persona() {
        return nu_persona;
    }

    public void setNu_persona(String nu_persona) {
        this.nu_persona = nu_persona;
    }

    public String getIn_doc_nacimiento() {
        return in_doc_nacimiento;
    }

    public void setIn_doc_nacimiento(String in_doc_nacimiento) {
        this.in_doc_nacimiento = in_doc_nacimiento;
    }

    public String getPrenom_inscrito() {
        return prenom_inscrito;
    }

    public void setPrenom_inscrito(String prenom_inscrito) {
        this.prenom_inscrito = prenom_inscrito;
    }

    public String getAp_primer() {
        return ap_primer;
    }

    public void setAp_primer(String ap_primer) {
        this.ap_primer = ap_primer;
    }

    public String getAp_segundo() {
        return ap_segundo;
    }

    public void setAp_segundo(String ap_segundo) {
        this.ap_segundo = ap_segundo;
    }

    public String getFe_nacimiento() {
        return fe_nacimiento;
    }

    public void setFe_nacimiento(String fe_nacimiento) {
        this.fe_nacimiento = fe_nacimiento;
    }

    public String getDe_genero() {
        return de_genero;
    }

    public void setDe_genero(String de_genero) {
        this.de_genero = de_genero;
    }

    public String getCo_departamento_domicilio() {
        return co_departamento_domicilio;
    }

    public void setCo_departamento_domicilio(String co_departamento_domicilio) {
        this.co_departamento_domicilio = co_departamento_domicilio;
    }

    public String getCo_provincia_domicilio() {
        return co_provincia_domicilio;
    }

    public void setCo_provincia_domicilio(String co_provincia_domicilio) {
        this.co_provincia_domicilio = co_provincia_domicilio;
    }

    public String getCo_distrito_domicilio() {
        return co_distrito_domicilio;
    }

    public void setCo_distrito_domicilio(String co_distrito_domicilio) {
        this.co_distrito_domicilio = co_distrito_domicilio;
    }

    public String getDe_departamento_domicilio() {
        return de_departamento_domicilio;
    }

    public void setDe_departamento_domicilio(String de_departamento_domicilio) {
        this.de_departamento_domicilio = de_departamento_domicilio;
    }

    public String getDe_provincia_domicilio() {
        return de_provincia_domicilio;
    }

    public void setDe_provincia_domicilio(String de_provincia_domicilio) {
        this.de_provincia_domicilio = de_provincia_domicilio;
    }

    public String getDe_distrito_domicilio() {
        return de_distrito_domicilio;
    }

    public void setDe_distrito_domicilio(String de_distrito_domicilio) {
        this.de_distrito_domicilio = de_distrito_domicilio;
    }

    public String getDe_direccion() {
        return de_direccion;
    }

    public void setDe_direccion(String de_direccion) {
        this.de_direccion = de_direccion;
    }

    public String getFe_emision() {
        return fe_emision;
    }

    public void setFe_emision(String fe_emision) {
        this.fe_emision = fe_emision;
    }

    public String getCo_departamento_naci() {
        return co_departamento_naci;
    }

    public void setCo_departamento_naci(String co_departamento_naci) {
        this.co_departamento_naci = co_departamento_naci;
    }

    public String getCo_provincia_naci() {
        return co_provincia_naci;
    }

    public void setCo_provincia_naci(String co_provincia_naci) {
        this.co_provincia_naci = co_provincia_naci;
    }

    public String getCo_distrito_naci() {
        return co_distrito_naci;
    }

    public void setCo_distrito_naci(String co_distrito_naci) {
        this.co_distrito_naci = co_distrito_naci;
    }

}
