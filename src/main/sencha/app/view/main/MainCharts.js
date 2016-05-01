/**
 * Created by customer on 2016. 5. 2..
 */


Ext.define('doflamingo.view.main.MainCharts', {
    extend: 'Ext.Container',
    xtype: 'mainCharts',
    layout: {
        type: 'column',
        columns: 3,
        tdAttrs: { style: 'padding: 20px;'}
    },
    items: [{
        xtype: 'heapchart',
        height: 300,
        columnWidth: 0.334
    }, {
        xtype: 'messageconditionchart',
        height: 300,
        columnWidth: 0.333
    }, {
        xtype: 'responsechart',
        height: 300,
        columnWidth: 0.333
    }, {
        xtype: 'fetchratechart',
        height: 300,
        columnWidth: 0.334
    }, {
        xtype: 'messageconsumedchart',
        height: 300,
        columnWidth: 0.333
    }, {
        xtype: 'maxlagchart',
        height: 300,
        columnWidth: 0.333
    }]
});