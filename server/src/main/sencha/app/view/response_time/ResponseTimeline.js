/**
 * This view is a response chart.
 */

Ext.define('doflamingo.view.heap_memory.ResponseTimeline', {
    extend: 'doflamingo.view.main.TimeLineChart',
    xtype: 'responseTimeline',

    title: 'Response Time',
    event: ['Response Time']
});