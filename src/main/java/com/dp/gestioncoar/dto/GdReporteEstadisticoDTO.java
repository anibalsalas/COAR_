package com.dp.gestioncoar.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GdReporteEstadisticoDTO {

    private String value_reporte;
    private String nombre_reporte;
    private String token_reporte;
}
