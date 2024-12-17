package com.dp.gestioncoar.dao.impl;

import com.dp.gestioncoar.dao.VariableSistemaDAO;
import com.dp.gestioncoar.util.Constantes;
import io.netty.channel.ChannelOption;
import io.netty.handler.timeout.ReadTimeoutHandler;
import io.netty.handler.timeout.WriteTimeoutHandler;
import java.time.Duration;
import java.util.Collections;
import java.util.Date;
import java.util.concurrent.TimeUnit;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.client.reactive.ReactorClientHttpConnector;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Repository;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClient.RequestHeadersSpec;
import reactor.core.publisher.Mono;
import reactor.netty.http.client.HttpClient;

@Repository
public class VariableSistemaDAOImpl implements VariableSistemaDAO {

    private static final Logger logger = LogManager.getLogger(VariableSistemaDAOImpl.class);

    HttpClient httpClient = HttpClient.create()
            .option(ChannelOption.CONNECT_TIMEOUT_MILLIS, 10000)
            .responseTimeout(Duration.ofMillis(10000))
            .doOnConnected(conn
                    -> conn.addHandlerLast(new ReadTimeoutHandler(10000, TimeUnit.MILLISECONDS))
                    .addHandlerLast(new WriteTimeoutHandler(10000, TimeUnit.MILLISECONDS)));

    WebClient webClient = WebClient.builder()
            .baseUrl(Constantes.PLUSNETWS)
            .clientConnector(new ReactorClientHttpConnector(httpClient))
            .defaultCookie("cookieKey", "cookieValue")
            .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
            .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.TEXT_HTML_VALUE)
            .defaultUriVariables(Collections.singletonMap("url", Constantes.PLUSNETWS))
            .build();

    @Override
    public Date current_date() {

        Date current_date = null;

        try {
            current_date = webClient.get()
                    .uri("current_date")
                    .retrieve()
                    .bodyToMono(Date.class)
                    .block();
        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

        return current_date;

    }

    @Override
    public String userID() {

        String currentUserName = null;
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            currentUserName = authentication.getName().trim().toUpperCase();

        }

        return currentUserName;

    }

    @Override
    public Date dias_habiles(String dd, String mm, String yyyy, Integer dias_procesar, String tipo) {

        Date dias_habiles = null;

        String uri = "dias_habiles/" + dd + "/" + mm + "/" + yyyy + "/" + dias_procesar.toString() + "/" + tipo;

        try {
            dias_habiles = webClient.get()
                    .uri(uri)
                    .retrieve()
                    .bodyToMono(Date.class)
                    .block();
        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

        return dias_habiles;
    }

    @Override
    public Double calculo_horas(String ddi, String mmi, String yyyyi, String hhhi, String mmmi, String ddf, String mmf, String yyyyf, String hhhf, String mmmf) {

        String uri = "calculo_horas/" + ddi + "/" + mmi + "/" + yyyyi + "/" + hhhi + "/" + mmmi + "/" + ddf + "/" + mmf + "/" + yyyyf + "/" + hhhf + "/" + mmmf;

        Double resultado = null;

        try {
            resultado = webClient.get()
                    .uri(uri)
                    .retrieve()
                    .bodyToMono(Double.class)
                    .block();
        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

        return resultado;
    }

    @Override
    public Date dias_horas(String dd, String mm, String yyyy, String tipo) {

        String uri = "dias_horas/" + dd + "/" + mm + "/" + yyyy + "/" + tipo;

        Date resultado = null;

        try {
            resultado = webClient.get()
                    .uri(uri)
                    .retrieve()
                    .bodyToMono(Date.class)
                    .block();
        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

        return resultado;
    }

    @Override
    public Date dias_calendario(String dd, String mm, String yyyy, Integer numero_dias) {
        Date retorno = null;

        String uri = "dias_calendario/" + dd + "/" + mm + "/" + yyyy + "/" + numero_dias.toString();

        try {
            retorno = webClient.get()
                    .uri(uri)
                    .retrieve()
                    .bodyToMono(Date.class)
                    .block();
        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

        return retorno;
    }

    @Override
    public Date dias_habiles_regresiva(String dd, String mm, String yyyy, Integer dias_procesar) {

        Date retorno = null;

        String uri = "dias_habiles_regresiva/" + dd + "/" + mm + "/" + yyyy + "/" + dias_procesar.toString();

        try {

            RequestHeadersSpec<?> headersSpec = webClient.get().uri(uri);

            Mono<Date> date = headersSpec.exchangeToMono(response -> {

                if (response.statusCode().equals(HttpStatus.OK)) {
                    return response.bodyToMono(Date.class);
                } else if (response.statusCode().equals(HttpStatus.NO_CONTENT)) {
                    logger.error("Excepcion en el metodo dias_habiles_regresiva(): " + response.statusCode());
                    return Mono.empty();
                } else {
                    logger.error("Excepcion en el metodo dias_habiles_regresiva(): " + response.statusCode());
                    return response.createException().flatMap(Mono::error);
                }
            });

            retorno = date.block();

//            retorno = webClient.get()
//                    .uri(uri)
//                    .retrieve()
//                    .bodyToMono(Date.class)
//                    .block();
        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

        return retorno;
    }

}
