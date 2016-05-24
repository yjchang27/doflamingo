package com.doflamingo.jmxtrans;

import com.google.inject.Injector;
import com.googlecode.jmxtrans.JmxTransformer;
import com.googlecode.jmxtrans.cli.JmxTransConfiguration;
import com.googlecode.jmxtrans.guice.JmxTransModule;
import com.googlecode.jmxtrans.model.JmxProcess;
import com.googlecode.jmxtrans.util.JsonUtils;
import org.rrd4j.ConsolFun;
import org.rrd4j.core.FetchRequest;
import org.rrd4j.core.RrdDb;
import org.rrd4j.core.Util;
import org.rrd4j.core.FetchData;

import java.io.File;
import java.util.Scanner;

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
                new File(Example.class.getClassLoader().getResource("exampleConfig.json").getFile())
        );

        JmxTransformer transformer = injector.getInstance(JmxTransformer.class);
        transformer.executeStandalone(process);

        long endTime = Util.getTime();
        long startTime = endTime - (12*60*60L);

        Scanner sc = new Scanner(System.in);
        String newString;
        while(true) {
            newString = sc.nextLine();
            System.out.println(newString);

            String rrdPath = Example.class.getClassLoader().getResource("example.rrd").getFile();
            System.out.println(rrdPath);
            RrdDb rrdDb = new RrdDb(rrdPath, true);

            FetchRequest fetchRequest = rrdDb.createFetchRequest(ConsolFun.MAX, startTime, endTime);
            FetchData fetchData = fetchRequest.fetchData();
            System.out.println(fetchData.dump());
        }
    }

}

