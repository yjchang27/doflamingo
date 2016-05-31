# doflamingo-server

This module has no dependency to `jmxtrans`.

### Requirements

1. Maven
1. JDK (1.8 or later)
1. Tomcat
1. Sencha EXTJS (6.0.1 or later)

### How to run the code

Same with `jmxtrans` script.

```sh
$ mvn package
$ cp %PROJECT_HOME%/doflamingo/jmxtrans/target/jmxtrans-1.0-SNAPSHOT.war \
      %CATALINA_HOME%\webapps
# Replcae %PROJECT_HOME% and %CATALINA_HOME% according to your environemt
# Make sure that your tomcat server is running
```

Tomcat environment variables

* host: `localhost`
* port: `8080`
* JMX port: `1098`

We recommend you to use IntelliJ to control tomcat deployment.

### Sencha

Sencha is used to build frontend, with GPL license.

Link `ext` folder to `%PROJECT_HOME%/server/src/main/sencha/ext`.

You can earn `ext` folder by initiating blank app with sencha cmd.
