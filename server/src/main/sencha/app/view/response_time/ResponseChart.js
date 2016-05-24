/**
 * This view is a response chart.
 */

Ext.define('doflamingo.view.heap_memory.ResponseChart', {
    extend: 'doflamingo.view.main.LineChart',
    xtype: 'responseChart',

    title: 'Response Time',
    event: ['Response Time']
});