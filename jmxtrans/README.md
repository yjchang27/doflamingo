# doflamingo-jmxtrans

### Requirements

1. Maven
1. JDK (1.8 or later)
1. Tomcat

### How to run the code

```sh
$ mvn package
$ cp %PROJECT_HOME%/jmxtrans/target/jmxtrans-1.0-SNAPSHOT.war \
      %CATALINA_HOME%\webapps
# Replcae %PROJECT_HOME% and %CATALINA_HOME% according to your environemt
# Make sure that your tomcat server is running
```

Tomcat environment variables

* host: `localhost`
* port: `8765`
* JMX port: `1099`

We recommend you to use IntelliJ to control tomcat deployment.

### WebSocket Tester

The `index.html` page do only one job: print WebSocket status and received messages.
