/**
 * This view is a heap chart.
 */

Ext.define('doflamingo.view.heap_memory.FetchRateChart', {
    extend: 'doflamingo.view.main.LineChart',
    xtype: 'fetchRateChart',

    title: 'Minimum Fetch Rate',
    event: ['Minimum Fetch Rate']
});