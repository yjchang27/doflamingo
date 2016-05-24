package com.doflamingo.jmxtrans;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.google.common.collect.ImmutableList;
import com.googlecode.jmxtrans.model.Query;
import com.googlecode.jmxtrans.model.Result;
import com.googlecode.jmxtrans.model.Server;
import com.googlecode.jmxtrans.model.ValidationException;
import com.googlecode.jmxtrans.model.output.BaseOutputWriter;
import org.json.JSONObject;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

import java.util.Map;

import static com.google.common.base.Preconditions.checkState;

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
        WebSocketSession session = MyHandler.getInstance().getSession();
        for (Result r : results) {
//            if (session != null) session.sendMessage(new TextMessage(r.toString()));
            String jsonStr = new JSONObject()
                    .put("event", "heap")
                    .put("data", new JSONObject()
                            .put("x", r.getEpoch())
                            .put("y", r.getValues().get("used"))
                    ).toString();
            if (session != null) session.sendMessage(new TextMessage(jsonStr));
        }
    }
}
