package com.dp.gestioncoar.dao;

import com.dp.gestioncoar.entity.Demuna_EstablecimientosEntity;
import com.dp.gestioncoar.entity.UsuarioEntity;

public interface UsuarioDAO {
    
    public Demuna_EstablecimientosEntity buscarAutoridad(String username);
       
    public UsuarioEntity buscarUsuario(String username);

    public UsuarioEntity getUsuario(String usuario_usu);

}
