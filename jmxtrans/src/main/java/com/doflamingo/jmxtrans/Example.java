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

    public static void main(String[] args) throws Exception {

        JmxTransConfiguration configuration = new JmxTransConfiguration();
        configuration.setRunPeriod(1);
        Injector injector = JmxTransModule.createInjector(configuration);
        JsonUtils jsonUtils = injector.getInstance(JsonUtils.class);

        JmxProcess process = jsonUtils.parseProcess(
                new File(Example.class.getClassLoader().getResource("example.json").getFile())
        );

        JmxTransformer transformer = injector.getInstance(JmxTransformer.class);
        transformer.executeStandalone(process);
    }

}
