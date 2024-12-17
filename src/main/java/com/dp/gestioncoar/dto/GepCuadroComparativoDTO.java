package com.dp.gestioncoar.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GepCuadroComparativoDTO {

    private String region;
    private Integer comi_comp;
    private Integer comi_incom;
    private Integer dir_comp;
    private Integer dir_incom;
    private Integer tot_comi_dir;
    private Integer tot_cole;
    private Double procent_total;
    private Integer total_comi;
    private Integer total_dir;
    private Integer total_general;
    private Integer cant_comi;
}
