package com.dp.gestioncoar.security;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.LoginUrlAuthenticationEntryPoint;

public class AjaxAwareAuthenticationEntryPoint extends LoginUrlAuthenticationEntryPoint {

    private static final Logger logger = LogManager.getLogger(AjaxAwareAuthenticationEntryPoint.class);

    public AjaxAwareAuthenticationEntryPoint(String loginFormUrl) {
        super(loginFormUrl);
    }

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
        
        String ajaxHeader = ((HttpServletRequest) request).getHeader("X-Requested-With");
        if ("XMLHttpRequest".equals(ajaxHeader)) {
//            response.sendError(HttpServletResponse.SC_FORBIDDEN, "Ajax Request Denied (Session Expired)");

            response.sendError(HttpServletResponse.SC_UNAUTHORIZED, authException.getMessage());
        } else {
            super.commence(request, response, authException);
        }
    }
    
    
}
