/**
 * This view is a line chart panel.
 */

Ext.define('doflamingo.view.main.LineChart', {
    extend: 'Ext.panel.Panel',

    requires: [
        'Ext.ux.WebSocket',
        'Ext.ux.WebSocketManager'
    ],

    title           : '',
    event           : [],
    layout          : 'fit',
    valueFormat     : 'float',
    barColor        : '#4f99b4',

    initComponent : function() {
        this.on({
            resize: function(me) {
                me.refreshSize(me, this.getSize().width, this.getSize().height);
            }
        });
        Ext.applyIf(this, {
            plain   : true,
            layout  : 'fit',
            html    : '<'+ this.xtype + '></' + this.xtype + '>',
            border  : false
        });
        this.callParent();
    },

    onChartClick: function(record){
    },


    refreshSize: function(me, width, height){
        me.drawChart(me, width, height)
    },

    drawChart: function(me, width, height) {
        var selector = "#" + me.getId().toString() + " " + me.xtype;

        d3.select(selector + " svg").remove();
        d3.select(selector).append("svg")
            .attr("width", width)
            .attr("height", height - 35);

        selector += " svg";

        var chart = nv.models.lineChart();
        chart.brushExtent([50, 70]); // 50, 70
        chart.xAxis.axisLabel('time (ms)').tickFormat(d3.format(',f'));
        chart.yAxis.axisLabel('(%)').tickFormat(d3.format(',.2f'));
        chart.useInteractiveGuideline(true);

        // TODO Fetching from rrd4j
        var jsons = [];
        me.event.map(function (event) {
            jsons.push({key : event, values: []});
        });
        for (var i = 0; i < 256; i++) {
            jsons.map(function(json) {
                json.values.push({x : i, y : Math.random()});
            });
        }
        var websocket = Ext.create ('Ext.ux.WebSocket', {
            url: 'ws://localhost:8080/api/ws' ,
            listeners: {
                open: function (ws) {
                    console.log ('The websocket is ready to use');
                    setInterval(function() {
                        me.event.map(function (event) {
                            ws.send(event, {x : i, y: Math.random()});
                        });
                        i++;
                    }, 500)
                } ,
                close: function (ws) {
                    console.log ('The websocket is closed!');
                },
                message: function (ws, message) {
                    if (me.event.includes(message.event)) {
                        jsons.map(function(elem) {
                            if (message.event == elem.key) {
                                elem.values = elem.values.slice(1);
                                elem.values.push(message.data);    
                            }
                        });
                        d3.select(selector)
                            .datum(jsons)
                            .call(chart);
                        d3.select(selector + " .nv-legendWrap")
                            .remove();
                        d3.selectAll(selector + " .nv-bar")
                            .on('click', function (d) {
                                me.onChartClick(d);
                            });
                    }
                }
            }
        });

        websocket.on ('stop', function (data) {
            console.log ('Command: ' + data.cmd);
            console.log ('Message: ' + data.msg);
        });

    }

});