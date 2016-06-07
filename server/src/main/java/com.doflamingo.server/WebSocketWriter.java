package com.doflamingo.server;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.common.collect.ImmutableList;
import com.googlecode.jmxtrans.model.Query;
import com.googlecode.jmxtrans.model.Result;
import com.googlecode.jmxtrans.model.Server;
import com.googlecode.jmxtrans.model.ValidationException;
import com.googlecode.jmxtrans.model.output.BaseOutputWriter;
import org.json.JSONObject;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Created by yjchang on 5/24/16.
 */
public class WebSocketWriter extends BaseOutputWriter {

    @JsonCreator
    public WebSocketWriter(
            @JsonProperty("typeNames") ImmutableList<String> typeNames,
            @JsonProperty("booleanAsNumber") boolean booleanAsNumber,
            @JsonProperty("debug") Boolean debugEnabled,
            @JsonProperty("settings") Map<String, Object> settings) {
        super(typeNames, booleanAsNumber, debugEnabled, settings);
    }

    public void validateSetup(Server server, Query query) throws ValidationException {}

    /**
     * Setup WebSocket environment
     */
    @Override
    protected void internalWrite(Server server, Query query, ImmutableList<Result> results) throws Exception {
        //WebSocketSession session = WSHandler.getInstance().getSession();
        List<WebSocketSession> sessionList = WSHandler.getInstance().getSessionList();
        for (WebSocketSession session : sessionList) {
            for (Result r : results) {
                //if (session != null) session.sendMessage(new TextMessage(r.toString()));
                String jsonStr = new JSONObject()
                        .put("event", r.getAttributeName())
                        .put("data", new JSONObject()
                                .put("x", r.getEpoch())
                                .put("y", 100*(float)(Long)r.getValues().get("used")/(Long)r.getValues().get("max"))
                        ).toString();
                if (session != null) session.sendMessage(new TextMessage(jsonStr));
            }

        }
    }
}
