/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.dp.gestioncoar.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.logout.HeaderWriterLogoutHandler;
import org.springframework.security.web.header.writers.ClearSiteDataHeaderWriter;
import static org.springframework.security.web.header.writers.ClearSiteDataHeaderWriter.Directive.CACHE;
import static org.springframework.security.web.header.writers.ClearSiteDataHeaderWriter.Directive.COOKIES;
import org.springframework.security.web.header.writers.DelegatingRequestMatcherHeaderWriter;
import org.springframework.security.web.header.writers.ReferrerPolicyHeaderWriter.ReferrerPolicy;
import org.springframework.security.web.header.writers.StaticHeadersWriter;
import org.springframework.security.web.header.writers.frameoptions.XFrameOptionsHeaderWriter;
import org.springframework.security.web.header.writers.frameoptions.XFrameOptionsHeaderWriter.XFrameOptionsMode;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.security.web.util.matcher.RequestMatcher;

//https://www.google.com/search?q=spring+boot+security+example&ei=GDLqY_WwMODQ1sQPzNCIgAg&start=10&sa=N&ved=2ahUKEwj1nKvXxJL9AhVgqJUCHUwoAoAQ8NMDegQIBhAM&biw=2560&bih=1201&dpr=0.75#fpstate=ive&vld=cid:58a81e8a,vid:bB6A490Uh5M
//http://webprogramozas.inf.elte.hu/#!/subjects/webeng/practices/04
//https://www.devxperiences.com/pzwp1/2022/12/09/spring-boot-antmatchers-and-user-roles-and-authorities/
/**
 *
 * @author christiansanchezlino
 */
@Configuration
@EnableMethodSecurity
public class WebSecurityConfig {

    @Autowired
    private UserDetailsService userDetailsService;

    @Bean
    public static PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        RequestMatcher matcher = new AntPathRequestMatcher("/login");
        DelegatingRequestMatcherHeaderWriter headerWriter = new DelegatingRequestMatcherHeaderWriter(matcher, new XFrameOptionsHeaderWriter());
        http
                .headers(headers -> headers.referrerPolicy(referrer -> referrer.policy(ReferrerPolicy.SAME_ORIGIN))) //Politica de referencia
                //.headers(headers -> headers.featurePolicy("geolocation 'self'")) //Politica de funciones
                .headers(headers -> headers.permissionsPolicy(permissions -> permissions.policy("geolocation=(self)"))) // Politica de permisos
                .headers(headers -> headers.httpStrictTransportSecurity(hsts -> hsts.includeSubDomains(true).preload(true).maxAgeInSeconds(31536000))) // Seguridad de transporte estricta (HSTS)
                //.headers(headers -> headers.frameOptions(frameOptions -> frameOptions.sameOrigin())) //Opciones de marco X, que ya o se bloquee los marcos                
                .headers(headers -> headers.cacheControl(cache -> cache.disable())) //Control de caché
                //                .headers(headers -> headers.contentTypeOptions(contentTypeOptions -> contentTypeOptions.disable())) //Opciones de tipo de contenido, desactivado
                .headers(headers -> headers.addHeaderWriter(new StaticHeadersWriter("X-Custom-Security-Header", "header-value"))) //Encabezado estaticos, encabezado de seguridad personalizado
                .headers(headers -> headers.addHeaderWriter(new XFrameOptionsHeaderWriter(XFrameOptionsMode.SAMEORIGIN))) //Escritor de encabezado, para java que no admite encabezados
                .headers(headers -> headers.frameOptions(frameOptions -> frameOptions.disable()).addHeaderWriter(headerWriter)) //Proteccion pagina de inicio de sesión para que no enmarque
                .logout((logout) -> logout.addLogoutHandler(new HeaderWriterLogoutHandler(new ClearSiteDataHeaderWriter(CACHE, COOKIES))))// Borrar datos del sitio

                .csrf().disable()
                .authorizeRequests()
//                .antMatchers(HttpMethod.OPTIONS).permitAll()
//                .antMatchers(HttpMethod.GET).permitAll()
//                .antMatchers(HttpMethod.POST).permitAll()
//                .antMatchers(HttpMethod.PUT).permitAll()
//                .antMatchers(HttpMethod.DELETE).permitAll()
                .antMatchers("/js/**", "/css/**", "/image/**", "/webjars/**","/gestionDemuna/**").permitAll()
                //.antMatchers("/poi/usuario/**").hasAnyRole("USUARIO_PRG_POA", "ADMIN_PRG_POA", "CERTIFICA_PRG_POA")
                //.antMatchers("/poi/presupuesto/**").hasAnyRole("USUARIO_PRG_POA", "ADMIN_PRG_POA", "CERTIFICA_PRG_POA", "PRESUPUESTO_PRG_POA")
                .antMatchers("/", "/login").permitAll()//根路径和/login路径不拦截
                .anyRequest().authenticated()
                .and()
                .formLogin()
                .loginPage("/login") //2登陆页面路径为/login
                .defaultSuccessUrl("/home", true) //3登陆成功转向chat页面
                .failureUrl("/login?error") // default is /login?error
                .permitAll()
                .and().exceptionHandling()
                .accessDeniedHandler(new CustomAccessDeniedHandler())
                .and()
                .logout()
                .deleteCookies("JSESSIONID").permitAll()
                .and()
                .rememberMe().key("uniqueAndSecret")
                .and()
                .exceptionHandling()
                .authenticationEntryPoint(new AjaxAwareAuthenticationEntryPoint("/login"))
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED)
                .invalidSessionUrl("/")
                .maximumSessions(1)
                .maxSessionsPreventsLogin(false)
                .expiredUrl("/login?invalid-session=true");//Solo se puede abrir una session
        return http.build();

    }

    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return (web) -> web.ignoring().antMatchers("/css/**", "/js/**", "/images/**", "/webjars/**");
    }
}
