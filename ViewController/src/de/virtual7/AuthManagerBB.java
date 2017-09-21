package de.virtual7;

import java.io.IOException;
import java.io.Serializable;

import javax.faces.application.FacesMessage;
import javax.faces.context.ExternalContext;
import javax.faces.context.FacesContext;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 * Authentication bean that handles login, error and logoff.
 */
public class AuthManagerBB implements Serializable {
    public AuthManagerBB() {
        super();
    }
    private String _username;
    private String _password;

    public void setUsername(String _username) {
        this._username = _username;
    }

    public String getUsername() {
        return _username;
    }

    public void setPassword(String _password) {
        this._password = _password;
    }

    public String getPassword() {
        return _password;
    }

    public String doLogin() {
        FacesContext ctx = FacesContext.getCurrentInstance();
        ExternalContext ectx = ctx.getExternalContext();
        HttpServletRequest request = (HttpServletRequest)ctx.getExternalContext().getRequest();

        if (_username == null || _password == null) {
            showError("Invalid credentials", "Incorrect user name or password!", null);
        } else {

            try {

                request.login(_username, _password); // Servlet 3.0 login

                _username = null;
                _password = null;
                HttpSession session = request.getSession();
                session.setAttribute("success_url", "/faces/index.jsf");
                redirect(ectx.getRequestContextPath() + "/adfAuthentication");

            } catch (ServletException fle) {
                showError("ServletException", "Login failed! Please verify the user name and password and try again!", null);
            }
        }
        return null;

    }

    private void redirect(String forwardUrl) {
        FacesContext ctx = FacesContext.getCurrentInstance();
        ExternalContext ectx = ctx.getExternalContext();
        HttpServletRequest request = (HttpServletRequest)ctx.getExternalContext().getRequest();

        try {
            ectx.redirect(forwardUrl);
        } catch (IOException ie) {
            showError("IOException", "An error occurred during redirecting! Please consult logs for more information!", ie);
        }
    }

    private void showError(String errType, String message, Exception e) {
        FacesMessage msg = new FacesMessage(FacesMessage.SEVERITY_ERROR, errType, message);
        FacesContext.getCurrentInstance().addMessage("d1:it2", msg);
        if (e != null) {
            e.printStackTrace();
        }
    }

    public String logoff() {
        FacesContext ctx = FacesContext.getCurrentInstance();
        ExternalContext ectx = ctx.getExternalContext();
        HttpServletRequest httpRequest = (HttpServletRequest)ectx.getRequest();
        try {
            httpRequest.logout(); // Servlet 3.0 logout
            HttpSession session = httpRequest.getSession(false);
            if (session != null) {
                session.invalidate();
            }
            String logoutUrl = ectx.getRequestContextPath() + "/faces" + ctx.getViewRoot().getViewId();
            redirect(logoutUrl);
        } catch (ServletException e) {
            showError("ServletException", "An error occurred during redirecting! Please consult logs for more information!", e);
        }
        return null;
    }
}
