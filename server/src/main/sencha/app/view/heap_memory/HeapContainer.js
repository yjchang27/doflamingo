/**
 * Created by customer on 2016. 5. 2..
 */


Ext.define('doflamingo.view.heap_memory.HeapContainer', {
    extend: 'Ext.Container',
    xtype: 'heapContainer',
    layout: {
        type: 'column',
        columns: 3,
        tdAttrs: { style: 'padding: 20px;'}
    },
    items: [{
        xtype: 'heapTimeline',
        dataUrl: '../../resources/',
        height: 400,
        columnWidth: 1
    }, {
        xtype: 'fetchRateChart',
        height: 300,
        columnWidth: 0.334
    }, {
        xtype: 'messageConsumedChart',
        height: 300,
        columnWidth: 0.333
    }, {
        xtype: 'maxLagChart',
        height: 300,
        columnWidth: 0.333
    }]
});