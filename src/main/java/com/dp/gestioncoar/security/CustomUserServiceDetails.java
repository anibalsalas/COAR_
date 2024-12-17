package com.dp.gestioncoar.security;

import com.dp.gestioncoar.entity.Demuna_EstablecimientosEntity;
import com.dp.gestioncoar.entity.Seg_roles_permisosEntity;
import com.dp.gestioncoar.entity.Seg_usuario_rolesEntity;
import com.dp.gestioncoar.entity.UsuarioEntity;
import com.dp.gestioncoar.service.UsuarioService;
import java.text.NumberFormat;
import java.text.ParsePosition;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import static org.hibernate.query.criteria.internal.ValueHandlerFactory.isNumeric;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service("userDetailsService")
public class CustomUserServiceDetails implements UserDetailsService {

    private static final Logger logger = LogManager.getLogger(CustomUserServiceDetails.class);

    @Autowired
    private PasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private Environment env;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        UsuarioEntity usuarioLogin = null;
        Demuna_EstablecimientosEntity autoridad = null;
         List<GrantedAuthority> authList = null;
        User user = null;

         if (isNumerico(username)) {
            System.out.println("username: " + username);
            autoridad = usuarioService.buscarAutoridad(username);

                        System.out.println("username: " + autoridad);

//            if (autoridad == null) {
//                System.out.println("es nullo: ");
//                throw new UsernameNotFoundException("¡Usuario no existe!");
//            } else {
//                authList = new ArrayList<GrantedAuthority>();
//                user = new User(autoridad.getCod_mod(), autoridad.getCod_mod(), authList);
//            }
            if (autoridad == null) {
                    System.out.println("El usuario no existe.");
                    throw new UsernameNotFoundException("¡Usuario no existe!");
                }  else {
                 System.out.println("existe " );
                        authList = new ArrayList<GrantedAuthority>();
                        user = new User(autoridad.getCod_unico().trim(), autoridad.getCod_unico().trim(), authList);
                    }
            
         }else {//Es usuario de la DP

            usuarioLogin = usuarioService.buscarUsuario(username.toUpperCase().trim());

            if (usuarioLogin == null) {
                throw new UsernameNotFoundException("¡Usuario no existe!");
            } else {

                authList = new ArrayList<GrantedAuthority>();
                for (Iterator<Seg_usuario_rolesEntity> iterator = usuarioLogin.getSeg_usuario_rolesentity().iterator(); iterator.hasNext();) {
                    Seg_usuario_rolesEntity next = iterator.next();
                    authList.add(new SimpleGrantedAuthority(next.getSeg_rolesentity().getName_rol()));
                    for (Iterator<Seg_roles_permisosEntity> iterator1 = next.getSeg_rolesentity().getSeg_roles_permisosentity().iterator(); iterator1.hasNext();) {
                        Seg_roles_permisosEntity next1 = iterator1.next();
                        authList.add(new SimpleGrantedAuthority(next1.getSeg_permisosentity().getName_permiso()));
                    }
                }

                user = new User(usuarioLogin.getUsuario_usu(), usuarioLogin.getTpircne(), authList);
            }

        }

        return user;
    }

//    public static boolean isNumerico(String strNum) {
//        if (strNum == null) {
//            return false;
//        }
//        try {
//            Integer d = Integer.valueOf(strNum);
//        } catch (NumberFormatException nfe) {
//            return false;
//        }
//
//        return true;
//    }
    
  
       public static boolean isNumerico(String s) {
        ParsePosition pos = new ParsePosition(0);
        NumberFormat.getInstance().parse(s, pos);
       return s.length() == pos.getIndex();
    }
}
