/**
 * This view is a heap chart.
 */

Ext.define('doflamingo.view.heap_memory.HeapTimeline', {
    extend: 'doflamingo.view.main.TimeLineChart',
    xtype: 'heapTimeline',

    title: 'Heap Memory Usage',
    event: ['HeapMemoryUsage']
});