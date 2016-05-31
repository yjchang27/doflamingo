package com.doflamingo.server;

import com.google.inject.Injector;
import com.googlecode.jmxtrans.JmxTransformer;
import com.googlecode.jmxtrans.cli.JmxTransConfiguration;
import com.googlecode.jmxtrans.guice.JmxTransModule;
import com.googlecode.jmxtrans.model.JmxProcess;
import com.googlecode.jmxtrans.util.JsonUtils;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.IOException;

/**
 * Created by yjchang on 5/11/16.
 */
@Component
public class JMXMonitor implements ApplicationListener<ContextRefreshedEvent> {

    public void onApplicationEvent(final ContextRefreshedEvent event) {

        JmxTransConfiguration configuration = new JmxTransConfiguration();
        configuration.setRunPeriod(1);
        Injector injector = JmxTransModule.createInjector(configuration);
        JsonUtils jsonUtils = injector.getInstance(JsonUtils.class);

        try {

            JmxProcess process = jsonUtils.parseProcess(
                    new File(JMXMonitor.class.getClassLoader().getResource("HeapMemoryUsage.json").getFile())
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

