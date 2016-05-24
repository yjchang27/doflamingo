package com.doflamingo.jmxtrans;

import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

/**
 * Created by yjchang on 5/24/16.
 */
public class MyHandler extends TextWebSocketHandler {

    private static WebSocketSession session;

    private MyHandler() {
        super();
    }

    private static class Singleton {
        private static final MyHandler instance = new MyHandler();
    }

    public static MyHandler getInstance() {
        return Singleton.instance;
    }

    public WebSocketSession getSession() {
        return session;
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        super.afterConnectionEstablished(session);
        this.session = session;
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        session.sendMessage(new TextMessage("ECHO : " + message.getPayload()));
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        super.afterConnectionClosed(session, status);
        this.session = null;
    }
}
