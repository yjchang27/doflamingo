package com.doflamingo.jmxtrans;

import com.google.inject.Injector;
import com.googlecode.jmxtrans.JmxTransformer;
import com.googlecode.jmxtrans.cli.JmxTransConfiguration;
import com.googlecode.jmxtrans.guice.JmxTransModule;
import com.googlecode.jmxtrans.model.JmxProcess;
import com.googlecode.jmxtrans.util.JsonUtils;

import java.io.File;

/**
 * Created by yjchang on 5/11/16.
 */
public class Example {

    private static final String KAFKA_HOST = "192.168.99.100";
    private static final String KAFKA_JMX_PORT = "9999";

    public static void main(String[] args) throws Exception {

        Injector injector = JmxTransModule.createInjector(new JmxTransConfiguration());
        JsonUtils jsonUtils = injector.getInstance(JsonUtils.class);

        JmxProcess process = jsonUtils.parseProcess(new File("example.json"));

        JmxTransformer transformer = injector.getInstance(JmxTransformer.class);
        transformer.executeStandalone(process);
    }

}
