/**
 * This view is a max lag chart.
 */

Ext.define('doflamingo.view.heap_memory.MaxLagChart', {
    extend: 'doflamingo.view.main.LineChart',
    xtype: 'maxLagChart',

    title: 'Max Lag',
    event: ['max lag']
});