package com.dp.gestioncoar.service.impl;

import com.dp.gestioncoar.dao.VariableSistemaDAO;
import com.dp.gestioncoar.service.VariableSistemaService;
import java.util.Date;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VariableSistemaServiceImpl implements VariableSistemaService {

    @Autowired
    VariableSistemaDAO variableSistemaDAO;

    @Override
    public Date current_date() {
        return variableSistemaDAO.current_date();
    }

    @Override
    public String userID() {
        return variableSistemaDAO.userID();
    }

    @Override
    public Date dias_habiles(String dd, String mm, String yyyy, Integer dias_procesar, String tipo) {
        return variableSistemaDAO.dias_habiles(dd, mm, yyyy, dias_procesar, tipo);
    }

    @Override
    public Double calculo_horas(String ddi, String mmi, String yyyyi, String hhhi, String mmmi, String ddf, String mmf, String yyyyf, String hhhf, String mmmf) {
        return variableSistemaDAO.calculo_horas(ddi, mmi, yyyyi, hhhi, mmmi, ddf, mmf, yyyyf, hhhf, mmmf);
    }

    @Override
    public Date dias_horas(String dd, String mm, String yyyy, String tipo) {
        return variableSistemaDAO.dias_horas(dd, mm, yyyy, tipo);
    }

    @Override
    public Date dias_calendario(String dd, String mm, String yyyy, Integer numero_dias) {
        return variableSistemaDAO.dias_calendario(dd, mm, yyyy, numero_dias);
    }

    @Override
    public Date dias_habiles_regresiva(String dd, String mm, String yyyy, Integer dias_procesar) {
        return variableSistemaDAO.dias_habiles_regresiva(dd, mm, yyyy, dias_procesar);
    }

}
