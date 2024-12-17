/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dp.gestioncoar.dto;

import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author asalas
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReporteDTO {
    private String nomEntidad;
    private String codUnico;
    private String desDepartament;
    private String desProvincia;
    private String desDistrito;
    private String p2_1;
    private String p2_1_2_ordenanza;
    private Date p2_1_2_fecha_emi;
    private Date p2_1_2_fecha_public;
    private String p2_2;
    private String p2_2_1;
    private String p2_3;
    private String p2_3_1;
    private String p2_4;
    private String p2_5;
    private String p2_5_1_nrsol;
    private Date p2_5_2_fecha_emi;
    private String p2_6_lunes;
    private String p2_6_martes;
    private String p2_6_miercoles;
    private String p2_6_jueves;
    private String p2_6_viernes;
    private String p2_6_sabado;
    private String p2_6_domingo;
    private String p2_6_lv_hora_inicio;
    private String p2_6_lv_hora_cierre;
    private String p2_7_presencial;
    private String p2_7_virtual;
    private String p2_7_tel;
    private String p2_7_emergencia;
    private String p2_7_otra;
    private String p2_7_otra_desc;
    private String p2_7_1_correo;
    private String p2_7_1_chat;
    private String p2_7_1_redes;
    private String p2_7_1_mesa;
    private String p2_8;
    private String p2_8_1;
    private String p2_9;
    
    // Getters y setters
}
