/**
 * This view is a max lag chart.
 */

Ext.define('doflamingo.view.heap_memory.MaxLagTimeline', {
    extend: 'doflamingo.view.main.TimeLineChart',
    xtype: 'maxLagTimeline',

    title: 'Max Lag',
    event: ['max lag']
});