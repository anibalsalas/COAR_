/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dp.gestioncoar.repository;



import com.dp.gestioncoar.entity.Educa_Ficha_S5_6Entity;
import com.dp.gestioncoar.entity.Educa_Ficha_S5_6PkEntity;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
/**
 *
 * @author asalas
 */

public interface Educa_Ficha_S5_6Repository extends JpaRepository<Educa_Ficha_S5_6Entity, Educa_Ficha_S5_6PkEntity> {

    @Query(value = "select nvl(max(id),0) + 1 from siga.educa_ficha_s5_pisos where id_ficha=:id_ficha", nativeQuery = true)
    public Integer generarIdS5_6(@Param("id_ficha") Integer id_ficha);

    @Query(value = "select f from Educa_Ficha_S5_6Entity f where f.educa_ficha_s5_6pk.id_ficha=:id_ficha order by 1 asc")
    public List<Educa_Ficha_S5_6Entity> listarS5_6ByIdFichaGrupo(@Param("id_ficha") Integer id_ficha);

}