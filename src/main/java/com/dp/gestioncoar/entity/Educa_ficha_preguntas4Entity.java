/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dp.gestioncoar.entity;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
/**
 *
 * @author asalas
 */
@Entity
@Table(name = "educa_ficha_4_lista", schema = "SIGA")
public class Educa_ficha_preguntas4Entity implements Serializable {
 
    @Id
    private Integer id_lista;
    private String pregunta_4;

    public Integer getId_lista() {
        return id_lista;
    }

    public void setId_lista(Integer id_lista) {
        this.id_lista = id_lista;
    }

    public String getPregunta_4() {
        return pregunta_4;
    }

    public void setPregunta_4(String pregunta_4) {
        this.pregunta_4 = pregunta_4;
    }

   
}
