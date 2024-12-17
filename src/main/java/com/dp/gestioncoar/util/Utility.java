package com.dp.gestioncoar.util;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonSyntaxException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

/**
 *
 * @version
 * 001 ccortez 03/02/2023 Inicio
 * 002 ccortez 14/06/2023 Integración
 * 
 */

public class Utility {
    private static final Logger LOG = LogManager.getLogger(Utility.class);
    
    /*public String getProperties(String key, String file){
        String value = null;
        try {
            Properties prop = new Properties();
            String propFileName = ((file!=null && file.trim().length()>0)?file:"plusnet")+".properties";
            InputStream inputStream = getClass().getClassLoader().getResourceAsStream(propFileName);
            if(inputStream != null){
                prop.load(inputStream);
            } else {
                throw new FileNotFoundException("property file '" + propFileName + "' not found in the classpath");
            }
            value = prop.getProperty(key);
        } catch (IOException e) {
            LOG.error("Error: "+e.getMessage());
        }
        return value;
    }*/

    /* Encriptación de la clave */
    private static String toHexadecimal(byte[] digest) {
        String hash = "";
        for(byte aux : digest) {
            int b = aux & 0xff;
            if(Integer.toHexString(b).length() == 1) hash += "0";
            hash += Integer.toHexString(b);
        }
        return hash;
    }

    public static String getStringMessageDigest(String message) {
        byte[] digest = null;
        byte[] buffer = message.getBytes();
        try {
            MessageDigest messageDigest = MessageDigest.getInstance("SHA-512");
            messageDigest.reset();
            messageDigest.update(buffer);
            digest = messageDigest.digest();
        } catch(NoSuchAlgorithmException ex) {
            LOG.error("Error creando Digest: "+ex.getMessage());
        } catch(Exception e) {
            LOG.error("Error creando Digest: "+e.getMessage());
        }
        return toHexadecimal(digest);
    }

    public static String toJson(Object T) {
        Gson gson = new GsonBuilder().create();
        return gson.toJson(T);
    }
    
    public static Object toObject(String json, Class<?> clazz){
        try {
            Gson gson = new GsonBuilder().create();
            return gson.fromJson(json, clazz);
        } catch (JsonSyntaxException e) {
            LOG.error("ERROR: "+e.getMessage());
            return null;
        }
    }

    public static String formatHtml(String text) {
        String UNICODE_SMALL_A_GRAVE = "\u00E0";
        String UNICODE_SMALL_A_ACUTE = "\u00E1";
        String UNICODE_SMALL_A_CIRC = "\u00E2";
        String UNICODE_SMALL_A_TILDE = "\u00E3";
        String UNICODE_SMALL_A_UML = "\u00E4";
        String UNICODE_SMALL_A_RING = "\u00E5";
        String UNICODE_SMALL_C_CEDIL = "\u00E7";
        String UNICODE_SMALL_E_GRAVE = "\u00E8";
        String UNICODE_SMALL_E_ACUTE = "\u00E9";
        String UNICODE_SMALL_E_CIRC = "\u00EA";
        String UNICODE_SMALL_E_UML = "\u00EB";
        String UNICODE_SMALL_I_GRAVE = "\u00EC";
        String UNICODE_SMALL_I_ACUTE = "\u00ED";
        String UNICODE_SMALL_I_CIRC = "\u00EE";
        String UNICODE_SMALL_I_UML = "\u00EF";
        String UNICODE_SMALL_O_GRAVE = "\u00F2";
        String UNICODE_SMALL_O_ACUTE = "\u00F3";
        String UNICODE_SMALL_O_CIRC = "\u00F4";
        String UNICODE_SMALL_O_TILDE = "\u00F5";
        String UNICODE_SMALL_O_UML = "\u00F6";
        String UNICODE_SMALL_U_GRAVE = "\u00F9";
        String UNICODE_SMALL_U_ACUTE = "\u00FA";
        String UNICODE_SMALL_U_CIRC = "\u00FB";
        String UNICODE_SMALL_U_UML = "\u00FC";
        String UNICODE_SMALL_N_TILDE = "\u00F1";
        String UNICODE_CAPITAL_A_GRAVE = "\u00C0";
        String UNICODE_CAPITAL_A_ACUTE = "\u00C1";
        String UNICODE_CAPITAL_A_CIRC = "\u00C2";
        String UNICODE_CAPITAL_A_TILDE = "\u00C3";
        String UNICODE_CAPITAL_A_UML = "\u00C4";
        String UNICODE_CAPITAL_A_RING = "\u00C5";
        String UNICODE_CAPITAL_C_CEDIL = "\u00C7";
        String UNICODE_CAPITAL_E_GRAVE = "\u00C8";
        String UNICODE_CAPITAL_E_ACUTE = "\u00C9";
        String UNICODE_CAPITAL_E_CIRC = "\u00CA";
        String UNICODE_CAPITAL_E_UML = "\u00CB";
        String UNICODE_CAPITAL_I_GRAVE = "\u00CC";
        String UNICODE_CAPITAL_I_ACUTE = "\u00CD";
        String UNICODE_CAPITAL_I_CIRC = "\u00CE";
        String UNICODE_CAPITAL_I_UML = "\u00CF";
        String UNICODE_CAPITAL_O_GRAVE = "\u00D2";
        String UNICODE_CAPITAL_O_ACUTE = "\u00D3";
        String UNICODE_CAPITAL_O_CIRC = "\u00D4";
        String UNICODE_CAPITAL_O_TILDE = "\u00D5";
        String UNICODE_CAPITAL_O_UML = "\u00D6";
        String UNICODE_CAPITAL_U_GRAVE = "\u00D9";
        String UNICODE_CAPITAL_U_ACUTE = "\u00DA";
        String UNICODE_CAPITAL_U_CIRC = "\u00DB";
        String UNICODE_CAPITAL_U_UML = "\u00DC";
        String UNICODE_CAPITAL_N_TILDE = "\u00D1";
        String UNICODE_IEXCLAMATION = "\u00A1";
        String UNICODE_GRADE = "\u00B0";
        String UNICODE_IQUESTION = "\u00BF";
        String UNICODE_RETURN = "\\u000D";
        String UNICODE_NEWLINE = "\\u000A";
        //String UNICODE_DOBLEQUOTE = "\\u0022";
        String UNICODE_EURO = "\u0080";
        String UNICODE_PLUS = "\\u002B";
        String UNICODE_PLUS_MINUS = "\u00B1";
        String UNICODE_MAN_ORDINAL_INDICATOR = "\u00BA";
        String UNICODE_FEM_ORDINAL_INDICATOR = "\u00AA";
        String UNICODE_ACUTE_ACCENT = "\u00B4";
        return text.replaceAll(UNICODE_SMALL_A_GRAVE, "&agrave;").replaceAll(UNICODE_SMALL_A_ACUTE, "&aacute;").replaceAll(UNICODE_SMALL_A_CIRC, "&acirc;")
                .replaceAll(UNICODE_SMALL_A_TILDE, "&atilde;").replaceAll(UNICODE_SMALL_A_UML, "&auml;").replaceAll(UNICODE_SMALL_A_RING, "&aring;").replaceAll(UNICODE_SMALL_C_CEDIL, "&ccedil;")
                .replaceAll(UNICODE_SMALL_E_GRAVE, "&egrave;").replaceAll(UNICODE_SMALL_E_ACUTE, "&eacute;").replaceAll(UNICODE_SMALL_E_CIRC, "&ecirc;").replaceAll(UNICODE_SMALL_E_UML, "&euml;")
                .replaceAll(UNICODE_SMALL_I_GRAVE, "&igrave;").replaceAll(UNICODE_SMALL_I_ACUTE, "&iacute;").replaceAll(UNICODE_SMALL_I_CIRC, "&icirc;").replaceAll(UNICODE_SMALL_I_UML, "&iuml;")
                .replaceAll(UNICODE_SMALL_O_GRAVE, "&ograve;").replaceAll(UNICODE_SMALL_O_ACUTE, "&oacute;").replaceAll(UNICODE_SMALL_O_CIRC, "&ocirc;").replaceAll(UNICODE_SMALL_O_TILDE, "&otilde;")
                .replaceAll(UNICODE_SMALL_O_UML, "&ouml;").replaceAll(UNICODE_SMALL_U_GRAVE, "&ugrave;").replaceAll(UNICODE_SMALL_U_ACUTE, "&uacute;").replaceAll(UNICODE_SMALL_U_CIRC, "&ucirc;")
                .replaceAll(UNICODE_SMALL_U_UML, "&uuml;").replaceAll(UNICODE_SMALL_N_TILDE, "&ntilde;").replaceAll(UNICODE_CAPITAL_A_GRAVE, "&Agrave;")
                .replaceAll(UNICODE_CAPITAL_A_ACUTE, "&Aacute;").replaceAll(UNICODE_CAPITAL_A_CIRC, "&Acirc;").replaceAll(UNICODE_CAPITAL_A_TILDE, "A").replaceAll(UNICODE_CAPITAL_A_UML, "&Atilde;")
                .replaceAll(UNICODE_CAPITAL_A_RING, "&Auml;").replaceAll(UNICODE_CAPITAL_C_CEDIL, "&Ccedil;").replaceAll(UNICODE_CAPITAL_E_GRAVE, "&Egrave;")
                .replaceAll(UNICODE_CAPITAL_E_ACUTE, "&Eacute;").replaceAll(UNICODE_CAPITAL_E_CIRC, "&Ecirc;").replaceAll(UNICODE_CAPITAL_E_UML, "&Euml;")
                .replaceAll(UNICODE_CAPITAL_I_GRAVE, "&Igrave;").replaceAll(UNICODE_CAPITAL_I_ACUTE, "&Iacute;").replaceAll(UNICODE_CAPITAL_I_CIRC, "&Icirc;")
                .replaceAll(UNICODE_CAPITAL_I_UML, "&Iuml;").replaceAll(UNICODE_CAPITAL_O_GRAVE, "&Ograve;").replaceAll(UNICODE_CAPITAL_O_ACUTE, "&Oacute;")
                .replaceAll(UNICODE_CAPITAL_O_CIRC, "&Ocirc;").replaceAll(UNICODE_CAPITAL_O_TILDE, "&Otilde;").replaceAll(UNICODE_CAPITAL_O_UML, "&Ouml;")
                .replaceAll(UNICODE_CAPITAL_U_GRAVE, "&Ugrave;").replaceAll(UNICODE_CAPITAL_U_ACUTE, "&Uacute;").replaceAll(UNICODE_CAPITAL_U_CIRC, "&Ucirc;")
                .replaceAll(UNICODE_CAPITAL_U_UML, "&Uuml;").replaceAll(UNICODE_CAPITAL_N_TILDE, "&Ntilde;").replaceAll(UNICODE_IEXCLAMATION, "&iexcl;").replaceAll(UNICODE_GRADE, "&deg;")
                .replaceAll(UNICODE_IQUESTION, "&iquest;").replaceAll(UNICODE_RETURN, "<br/>").replaceAll(UNICODE_NEWLINE, "<br/>")//.replaceAll(UNICODE_DOBLEQUOTE, "&quot;")
                .replaceAll(UNICODE_EURO, "&euro;").replaceAll(UNICODE_PLUS, "&plusmn;").replaceAll(UNICODE_PLUS_MINUS, "&plusmn;").replaceAll(UNICODE_MAN_ORDINAL_INDICATOR, "&ordm;")
                .replaceAll(UNICODE_FEM_ORDINAL_INDICATOR, "&ordf;").replaceAll(UNICODE_ACUTE_ACCENT, "&acute;");
    }

    public static String formatText(String text) {
        String UNICODE_SMALL_A_GRAVE = "&agrave;";
        String UNICODE_SMALL_A_ACUTE = "&aacute;";
        String UNICODE_SMALL_A_CIRC = "&acirc;";
        String UNICODE_SMALL_A_TILDE = "&atilde;";
        String UNICODE_SMALL_A_UML = "&auml;";
        String UNICODE_SMALL_A_RING = "&aring;";
        String UNICODE_SMALL_C_CEDIL = "&ccedil;";
        String UNICODE_SMALL_E_GRAVE = "&egrave;";
        String UNICODE_SMALL_E_ACUTE = "&eacute;";
        String UNICODE_SMALL_E_CIRC = "&ecirc;";
        String UNICODE_SMALL_E_UML = "&euml;";
        String UNICODE_SMALL_I_GRAVE = "&igrave;";
        String UNICODE_SMALL_I_ACUTE = "&iacute;";
        String UNICODE_SMALL_I_CIRC = "&icirc;";
        String UNICODE_SMALL_I_UML = "&iuml;";
        String UNICODE_SMALL_O_GRAVE = "&ograve;";
        String UNICODE_SMALL_O_ACUTE = "&oacute;";
        String UNICODE_SMALL_O_CIRC = "&ocirc;";
        String UNICODE_SMALL_O_TILDE = "&otilde;";
        String UNICODE_SMALL_O_UML = "&ouml;";
        String UNICODE_SMALL_U_GRAVE = "&ugrave;";
        String UNICODE_SMALL_U_ACUTE = "&uacute;";
        String UNICODE_SMALL_U_CIRC = "&ucirc;";
        String UNICODE_SMALL_U_UML = "&uuml;";
        String UNICODE_SMALL_N_TILDE = "&ntilde;";
        String UNICODE_CAPITAL_A_GRAVE = "&Agrave;";
        String UNICODE_CAPITAL_A_ACUTE = "&Aacute;";
        String UNICODE_CAPITAL_A_CIRC = "&Acirc;";
        String UNICODE_CAPITAL_A_TILDE = "&Atilde;";
        String UNICODE_CAPITAL_A_UML = "&Auml;";
        String UNICODE_CAPITAL_A_RING = "&Aring;";
        String UNICODE_CAPITAL_C_CEDIL = "&Ccedil;";
        String UNICODE_CAPITAL_E_GRAVE = "&Egrave;";
        String UNICODE_CAPITAL_E_ACUTE = "&Eacute;";
        String UNICODE_CAPITAL_E_CIRC = "&Ecirc;";
        String UNICODE_CAPITAL_E_UML = "&Euml;";
        String UNICODE_CAPITAL_I_GRAVE = "&Igrave;";
        String UNICODE_CAPITAL_I_ACUTE = "&Iacute;";
        String UNICODE_CAPITAL_I_CIRC = "&Icirc;";
        String UNICODE_CAPITAL_I_UML = "&Iuml;";
        String UNICODE_CAPITAL_O_GRAVE = "&Ograve;";
        String UNICODE_CAPITAL_O_ACUTE = "&Oacute;";
        String UNICODE_CAPITAL_O_CIRC = "&Ocirc;";
        String UNICODE_CAPITAL_O_TILDE = "&Otilde;";
        String UNICODE_CAPITAL_O_UML = "&Ouml;";
        String UNICODE_CAPITAL_U_GRAVE = "&Ugrave;";
        String UNICODE_CAPITAL_U_ACUTE = "&Uacute;";
        String UNICODE_CAPITAL_U_CIRC = "&Ucirc;";
        String UNICODE_CAPITAL_U_UML = "&Uuml;";
        String UNICODE_CAPITAL_N_TILDE = "&Ntilde;";
        String UNICODE_IEXCLAMATION = "&iexcl;";
        String UNICODE_GRADE = "&deg;";
        String UNICODE_IQUESTION = "&iquest;";
        String UNICODE_RETURN = "<br/>";
        String UNICODE_NEWLINE = "<br/>";
        String UNICODE_DOBLEQUOTE = "&quot;";
        String UNICODE_EURO = "&euro;";
        String UNICODE_PLUS = "&plusmn;";
        String UNICODE_PLUS_MINUS = "&plusmn;";
        String UNICODE_MAN_ORDINAL_INDICATOR = "&ordm;";
        String UNICODE_FEM_ORDINAL_INDICATOR = "&ordf;";
        String UNICODE_ACUTE_ACCENT = "&acute;";
        return text.replaceAll(UNICODE_SMALL_A_GRAVE, "\u00E0").replaceAll(UNICODE_SMALL_A_ACUTE, "\u00E1").replaceAll(UNICODE_SMALL_A_CIRC, "\u00E2")
                .replaceAll(UNICODE_SMALL_A_TILDE, "\u00E3").replaceAll(UNICODE_SMALL_A_UML, "\u00E4").replaceAll(UNICODE_SMALL_A_RING, "\u00E5").replaceAll(UNICODE_SMALL_C_CEDIL, "\u00E7")
                .replaceAll(UNICODE_SMALL_E_GRAVE, "\u00E8").replaceAll(UNICODE_SMALL_E_ACUTE, "\u00E9").replaceAll(UNICODE_SMALL_E_CIRC, "\u00EA").replaceAll(UNICODE_SMALL_E_UML, "\u00EB")
                .replaceAll(UNICODE_SMALL_I_GRAVE, "\u00EC").replaceAll(UNICODE_SMALL_I_ACUTE, "\u00ED").replaceAll(UNICODE_SMALL_I_CIRC, "\u00EE").replaceAll(UNICODE_SMALL_I_UML, "\u00EF")
                .replaceAll(UNICODE_SMALL_O_GRAVE, "\u00F2").replaceAll(UNICODE_SMALL_O_ACUTE, "\u00F3").replaceAll(UNICODE_SMALL_O_CIRC, "\u00F4").replaceAll(UNICODE_SMALL_O_TILDE, "\u00F5")
                .replaceAll(UNICODE_SMALL_O_UML, "\u00F6").replaceAll(UNICODE_SMALL_U_GRAVE, "\u00F9").replaceAll(UNICODE_SMALL_U_ACUTE, "\u00FA").replaceAll(UNICODE_SMALL_U_CIRC, "\u00FB")
                .replaceAll(UNICODE_SMALL_U_UML, "\u00FC").replaceAll(UNICODE_SMALL_N_TILDE, "\u00F1").replaceAll(UNICODE_CAPITAL_A_GRAVE, "\u00C0")
                .replaceAll(UNICODE_CAPITAL_A_ACUTE, "\u00C1").replaceAll(UNICODE_CAPITAL_A_CIRC, "\u00C2").replaceAll(UNICODE_CAPITAL_A_TILDE, "\u00C3").replaceAll(UNICODE_CAPITAL_A_UML, "\u00C4")
                .replaceAll(UNICODE_CAPITAL_A_RING, "\u00C5").replaceAll(UNICODE_CAPITAL_C_CEDIL, "\u00C7").replaceAll(UNICODE_CAPITAL_E_GRAVE, "\u00C8")
                .replaceAll(UNICODE_CAPITAL_E_ACUTE, "\u00C9").replaceAll(UNICODE_CAPITAL_E_CIRC, "\u00CA").replaceAll(UNICODE_CAPITAL_E_UML, "\u00CB")
                .replaceAll(UNICODE_CAPITAL_I_GRAVE, "\u00CC").replaceAll(UNICODE_CAPITAL_I_ACUTE, "\u00CD").replaceAll(UNICODE_CAPITAL_I_CIRC, "\u00CE")
                .replaceAll(UNICODE_CAPITAL_I_UML, "\u00CF").replaceAll(UNICODE_CAPITAL_O_GRAVE, "\u00D2").replaceAll(UNICODE_CAPITAL_O_ACUTE, "\u00D3")
                .replaceAll(UNICODE_CAPITAL_O_CIRC, "\u00D4").replaceAll(UNICODE_CAPITAL_O_TILDE, "\u00D5").replaceAll(UNICODE_CAPITAL_O_UML, "\u00D6")
                .replaceAll(UNICODE_CAPITAL_U_GRAVE, "\u00D9").replaceAll(UNICODE_CAPITAL_U_ACUTE, "\u00DA").replaceAll(UNICODE_CAPITAL_U_CIRC, "\u00DB")
                .replaceAll(UNICODE_CAPITAL_U_UML, "\u00DC").replaceAll(UNICODE_CAPITAL_N_TILDE, "\u00D1").replaceAll(UNICODE_IEXCLAMATION, "\u00A1").replaceAll(UNICODE_GRADE, "\u00B0")
                .replaceAll(UNICODE_IQUESTION, "\u00BF").replaceAll(UNICODE_RETURN, "\\u000D").replaceAll(UNICODE_NEWLINE, "\\u000A").replaceAll(UNICODE_DOBLEQUOTE, "\\u0022")
                .replaceAll(UNICODE_EURO, "\u0080").replaceAll(UNICODE_PLUS, "\\u002B").replaceAll(UNICODE_PLUS_MINUS, "\u00B1").replaceAll(UNICODE_MAN_ORDINAL_INDICATOR, "\u00BA")
                .replaceAll(UNICODE_FEM_ORDINAL_INDICATOR, "\u00AA").replaceAll(UNICODE_ACUTE_ACCENT, "\u00B4");
    }
}
