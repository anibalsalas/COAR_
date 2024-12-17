/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dp.gestioncoar.repository;

import com.dp.gestioncoar.entity.Educa_ficha_preguntas4Entity;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface Educa_Ficha_PreguntasRepository extends JpaRepository<Educa_ficha_preguntas4Entity, Integer> {

    @Query(value = "select nvl(max(id_lista),0) + 1 from siga.educa_ficha_4_lista", nativeQuery = true)
    public Integer generarIdPregunta();

    @Query(value = "select f from Educa_ficha_preguntas4Entity f order by 1 asc ")
    public List<Educa_ficha_preguntas4Entity> listarPregunta();

}
