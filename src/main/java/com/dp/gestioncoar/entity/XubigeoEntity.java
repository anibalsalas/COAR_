package com.dp.gestioncoar.entity;

import java.io.Serializable;
import java.util.List;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "xubigeo", schema = "siga")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class XubigeoEntity implements Serializable {

    @EmbeddedId
    private XubigeoEntityPk xubigeomodelpk;

    private String nombre;

    

}
