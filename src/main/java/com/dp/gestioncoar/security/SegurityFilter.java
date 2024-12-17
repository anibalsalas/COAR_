package com.dp.gestioncoar.security;

import java.io.IOException;
import java.util.HashSet;
import java.util.Set;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.core.annotation.Order;
import org.springframework.security.core.context.SecurityContextHolder;

@Order(1)
@WebFilter(urlPatterns = {"/*"})
public class SegurityFilter implements Filter {

    private Set<String> restrictedResources;

    @Override
    public void init(FilterConfig fc) throws ServletException {
        this.restrictedResources = new HashSet<String>();
    }

    @Override
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
        

        try {

            if ((req instanceof HttpServletRequest) && (res instanceof HttpServletResponse)) {

                HttpServletResponse r = (HttpServletResponse) res;
                HttpServletRequest rq = (HttpServletRequest) req;

                String ajaxHeader = ((HttpServletRequest) req).getHeader("X-Requested-With");
                
                r.setHeader("Pragma", "no-cache"); //HTTP 1.0
                r.setHeader("Cache-Control", "no-cache,no-store,max-age=0");
                r.setHeader("Accept", "*/*");
                r.setHeader("Accept-Encoding", "gzip, deflate");
                r.setContentType("text/html;charset=UTF-8");
                r.setContentType("application/json;charset=UTF-8");
                r.setDateHeader("expires", 0); // Proxies.
                r.addHeader("X-FRAME-OPTIONS", "SAMEORIGIN");
                r.addHeader("X-XSS-Protection", "1; mode=block");
                r.addHeader("X-Content-Type-Options", "nosniff");
                /*----------------------------------------------*/
                
//                String ajaxHeader = ((HttpServletRequest) req).getHeader("X-Requested-With");
                
                if ("XMLHttpRequest".equals(ajaxHeader)) {

                    String principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString();
                    
                    if ("anonymousUser".equals(principal.toString())) {

                        r.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                        r.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Ajax time out");
//                    SecurityContextHolder.clearContext();
//                    throw new AccessDeniedException("Ajax request time out.");
                    }
                }

                chain.doFilter(req, res);

            }

        } catch (IOException e) {
            throw e;
        } catch (Exception ex) {
            throw ex;
        }

    }

    @Override
    public void destroy() {
        Filter.super.destroy(); //To change body of generated methods, choose Tools | Templates.
    }

}
