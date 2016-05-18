/**
 * This view is an example list of people.
 */

Ext.define('doflamingo.view.heap_memory.HeapChart', {
    extend: 'Ext.panel.Panel',
    xtype: 'heapChart',

    requires: [
        'Ext.ux.WebSocket',
        'Ext.ux.WebSocketManager'
    ],

    title: 'Heap Memory Usage',
    dataUrl         : '',                       // url of json data for the chart, json should be in the
    // following format, label and value are required, any attached
    // data points will get passed to the click event i.e. primary keys etc .. :

    //{'results': 6, 'data':[{'some_value': 'not required', 'label': 'Required', 'value': 17}

    localData       : '',                       // placeholder so that data can be stored for faster resize
    layout          : 'fit',
    chartTitle      : '',                       // chart title displayed above the chart
    tooltipAppend   : '',                       // text to append to the tooltip value
    alias           : 'widget.HeapChart',
    showTooltips    : true,
    showControls    : true,
    showSeriesLegend: false,
    seriesTitle     : '',
    valueFormat     : 'float',                    // takes int, currency, float (two decimal places)
    barColor        : '#4f99b4',

    resultData	    : '',

    initComponent : function(){

        this.on({
            resize:function(me){
                me.refreshSize(me,this.getSize().width,this.getSize().height);
            }

        });

        Ext.applyIf(this,{
            plain   : true,
            layout  : 'fit',
            html    : '<heapChart></heapChart>',
            border  : false
        });

        this.callParent();
    },

    refreshSize: function(me, width, height){
        me.drawChart(me, width, height)
    },
    /*
     Data includes the full JSON record that is passed
     to the chart slice, not just the key value pair.
     */
    onChartClick: function(record){

        // console.log(record);

    },

    drawChart: function(me, width, height) {

        if (me.resultData) {
            if (me.localData == '') {
                /*
                 Done to ensure that the standard JSON that
                 is used with extjs does not trip up teh json decode that
                 D3.js does.
                 */
                console.log("result Data = ");
                console.log(me.resultData);
                var singleKeyFormat = [{"key": me.seriesTitle, "color": me.barColor, "values": []}];
                Ext.Array.each(me.resultData.data, function (item) {
                    singleKeyFormat[0].values.push(item);
                });
                console.log("singleKeyFormat = ");
                console.log(singleKeyFormat);
                me.localData = singleKeyFormat;
                setupChart(me.localData);
            } else {
                setupChart(me.localData);
            }
        } else {
            setupChart({});
            //throw 'dataUrl is required';
        }

        function setupChart(data) {

            // Int by default see https://github.com/mbostock/d3/wiki/Formatting for
            // adding additional formats
            

            var selector = "#" + me.getId().toString() + " heapChart svg";

            d3.select(selector).remove();
            selector = "#" + me.getId().toString() + " heapChart";

            d3.select(selector).append("svg")
                .attr("width", width)
                .attr("height", height - 35);

            selector = "#" + me.getId().toString() + " heapChart svg";

            var chart = nv.models.lineChart();
            chart.brushExtent([50, 70]);
            chart.xAxis     //Chart x-axis settings
                .axisLabel('time (ms)')
                .tickFormat(d3.format(',f'));
            chart.yAxis     //Chart y-axis settings
                .axisLabel('(%)')
                .tickFormat(d3.format(',.2f'));
            chart.useInteractiveGuideline(true);

            //d3.select(selector)
            //    .datum(testData(['Heap Memory Usage']))
            //    .call(chart);


            var ws1 = Ext.create ('Ext.ux.WebSocket', {
                url: 'ws://localhost:8080/api/ws'
            });

            Ext.ux.WebSocketManager.register (ws1);

            Ext.ux.WebSocketManager.listen ('system shutdown', function (ws, data) {
                d3.select(selector)
                    .datum(testData(['Heap Memory']))
                    .call(chart);
                Ext.Msg.show ({
                    title: 'System Shutdown' ,
                    msg: data ,
                    icon: Ext.Msg.WARNING ,
                    buttons: Ext.Msg.OK
                });
            });
            var jsons = testData(['Heap Memory']);
            var j = 0;
            var playAlert = setInterval(function() {
                d3.select(selector)
                    .datum(shiftData(jsons, j++))
                    .call(chart);

                d3.selectAll("#" + me.getId().toString() + " heapChart svg .nv-bar")
                    .on('click', function (d) {
                        me.onChartClick(d);
                    });

                if(!me.showSeriesLegend){
                    d3.select("#" + me.getId().toString() + " heapChart svg .nv-legendWrap").remove();
                }
                //Ext.ux.WebSocketManager.broadcast ('system shutdown', 'BROADCAST: the system will shutdown in few minutes.');
            }, 500);
            //Ext.ux.WebSocketManager.closeAll ();
            //Ext.ux.WebSocketManager.unregister (ws1);
        }
    }
});