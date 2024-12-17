/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dp.gestioncoar.entity;

import java.io.Serializable;
import javax.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author asalas
 */

@Embeddable
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Demuna_ArchivoPk implements Serializable {
    
    private Integer id_archivo;
    private Integer id_ficha;
    private String cod_unico;

}
