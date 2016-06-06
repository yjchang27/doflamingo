/**
 * This view is a heap chart.
 */

Ext.define('doflamingo.view.heap_memory.FetchRateTimeline', {
    extend: 'doflamingo.view.main.TimeLineChart',
    xtype: 'fetchRateTimeline',

    title: 'Minimum Fetch Rate',
    event: ['Minimum Fetch Rate']
});