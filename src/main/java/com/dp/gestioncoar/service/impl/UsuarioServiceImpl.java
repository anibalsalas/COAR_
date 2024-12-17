package com.dp.gestioncoar.service.impl;

import com.dp.gestioncoar.dao.UsuarioDAO;
import com.dp.gestioncoar.entity.Demuna_EstablecimientosEntity;
import com.dp.gestioncoar.entity.UsuarioEntity;
import com.dp.gestioncoar.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    @Autowired
    UsuarioDAO usuarioDAO;

    @Override
    public UsuarioEntity buscarUsuario(String username) {
        return usuarioDAO.buscarUsuario(username);
    }
    
    @Override
    public Demuna_EstablecimientosEntity buscarAutoridad(String username) {
        return usuarioDAO.buscarAutoridad(username);
    }

    
    
}
