package com.doflamingo.jmxtrans;

import com.google.inject.Injector;
import com.googlecode.jmxtrans.JmxTransformer;
import com.googlecode.jmxtrans.cli.JmxTransConfiguration;
import com.googlecode.jmxtrans.guice.JmxTransModule;
import com.googlecode.jmxtrans.model.JmxProcess;
import com.googlecode.jmxtrans.util.JsonUtils;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

import java.io.File;
import java.io.IOException;

/**
 * Created by yjchang on 5/11/16.
 */
@Component
public class Example2 implements ApplicationListener<ContextRefreshedEvent> {

    public void onApplicationEvent(final ContextRefreshedEvent event) {

        JmxTransConfiguration configuration = new JmxTransConfiguration();
        configuration.setRunPeriod(1);
        Injector injector = JmxTransModule.createInjector(configuration);
        JsonUtils jsonUtils = injector.getInstance(JsonUtils.class);

        try {

            JmxProcess process = jsonUtils.parseProcess(
                    new File(Example2.class.getClassLoader().getResource("example.json").getFile())
            );

            JmxTransformer transformer = injector.getInstance(JmxTransformer.class);
            transformer.executeStandalone(process);

        } catch (IOException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}

