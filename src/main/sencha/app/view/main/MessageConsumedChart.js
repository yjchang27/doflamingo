/**
 * This view is an example list of people.
 */

Ext.define('doflamingo.view.main.MessageConsumedChart', {
    extend: 'Ext.chart.CartesianChart',
    xtype: 'messageconsumedchart',

    requires: [
        //'doflamingo.store.Personnel',
    ],

    title: 'Message Consumed',
    /*
     store: {
     type: 'personnel'
     },

     columns: [
     { text: 'time',  dataIndex: 'time' },
     { text: 'Email', dataIndex: 'email', flex: 1 },
     { text: 'Phone', dataIndex: 'phone', flex: 1 }
     ],
     */
    store: {
        fields: ['time', 'g1', 'g2'],
        data: [
            {"time": "0", "g1": 18.34,"g2": 0.04},
            {"time": "1", "g1": 2.67, "g2": 14.87},
            {"time": "2", "g1": 1.90, "g2": 5.72},
            {"time": "3", "g1": 21.37,"g2": 2.13},
            {"time": "4", "g1": 2.67, "g2": 8.53},
            {"time": "5", "g1": 18.22,"g2": 4.62},
            {"time": "6", "g1": 28.51, "g2": 12.43},
            {"time": "7", "g1": 34.43, "g2": 4.40},
            {"time": "8", "g1": 21.65, "g2": 13.87},
            {"time": "9", "g1": 12.98, "g2": 35.44},
            {"time": "10", "g1": 22.96, "g2": 38.70},
            {"time": "11", "g1": 0.49, "g2": 51.90},
            {"time": "12", "g1": 20.87, "g2": 62.07},
            {"time": "13", "g1": 25.10, "g2": 78.46},
            {"time": "14", "g1": 16.87, "g2": 56.80}
        ]
    },
    interactions: {
        type: 'crosszoom'
    },
    legend: {
        docked: 'bottom'
    },
    axes: [
        {
            type: 'numeric',
            position: 'left',
            grid: true
        }, {
            type: 'category',
            position: 'bottom',
            visibleRange: [0, 0.4]
        }
    ],
    series: [
        {
            type: 'area',
            xField: 'time',
            yField: ['g1', 'g2'],
            title: ['byte/sec', 'msg/sec'],
            style: {
                stroke: '#666666',
                fillOpacity: 0.8
            }
        }
    ]
});
