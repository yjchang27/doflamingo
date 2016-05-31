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
        xtype: 'heapChart',
        height: 300,
        columnWidth: 0.334
    }/*, {
        xtype: 'messageConditionChart',
        height: 300,
        columnWidth: 0.334
    }, {
        xtype: 'responseChart',
        height: 300,
        columnWidth: 0.333
    }, {
        xtype: 'fetchRateChart',
        height: 300,
        columnWidth: 0.334
    }, {
        xtype: 'messageConsumedChart',
        height: 300,
        columnWidth: 0.334
    }, {
        xtype: 'maxLagChart',
        height: 300,
        columnWidth: 0.333
    }*/]
});