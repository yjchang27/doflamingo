package com.doflamingo.server;

import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by yjchang on 5/24/16.
 */
public class WSHandler extends TextWebSocketHandler {

    private static WebSocketSession session;
    private static List<WebSocketSession> sessionList = new ArrayList<WebSocketSession>();

    private WSHandler() {
        super();
    }

    private static class Singleton {
        private static final WSHandler instance = new WSHandler();
    }

    public static WSHandler getInstance() {
        return Singleton.instance;
    }

    public WebSocketSession getSession() {
        return session;
    }
    public List<WebSocketSession> getSessionList() {
        return sessionList;
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        super.afterConnectionEstablished(session);
        this.sessionList.add(session);
        this.session = session;
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        session.sendMessage(new TextMessage("ECHO : " + message.getPayload()));
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        super.afterConnectionClosed(session, status);
        this.sessionList.remove(session);
        this.session = null;
    }
}
