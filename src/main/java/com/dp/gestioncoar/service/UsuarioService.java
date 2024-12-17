package com.dp.gestioncoar.service;

import com.dp.gestioncoar.entity.Demuna_EstablecimientosEntity;
import com.dp.gestioncoar.entity.UsuarioEntity;

public interface UsuarioService {

    public UsuarioEntity buscarUsuario(String username);

   public Demuna_EstablecimientosEntity buscarAutoridad(String username);
}


