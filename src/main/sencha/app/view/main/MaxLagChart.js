/**
 * This view is an example list of people.
 */

Ext.define('doflamingo.view.main.MaxLagChart', {
    extend: 'Ext.chart.CartesianChart',
    xtype: 'maxlagchart',

    requires: [
        //'doflamingo.store.Personnel',
    ],

    title: 'Max Lag',
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
        fields: ['time', 'g1'],
        data: [
            {"time": "0", "g1": 18.34},
            {"time": "1", "g1": 2.67},
            {"time": "2", "g1": 1.90},
            {"time": "3", "g1": 21.37},
            {"time": "4", "g1": 2.67},
            {"time": "5", "g1": 18.22},
            {"time": "6", "g1": 28.51},
            {"time": "7", "g1": 34.43},
            {"time": "8", "g1": 21.65},
            {"time": "9", "g1": 12.98},
            {"time": "10", "g1": 22.96},
            {"time": "11", "g1": 0.49},
            {"time": "12", "g1": 20.87},
            {"time": "13", "g1": 25.10},
            {"time": "14", "g1": 16.87}
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
            yField: ['g1'],
            title: ['Max Lag'],
            style: {
                stroke: '#666666',
                fillOpacity: 0.8
            }
        }
    ]
});
