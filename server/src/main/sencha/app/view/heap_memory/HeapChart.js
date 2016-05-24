/**
 * This view is a heap chart.
 */

Ext.define('doflamingo.view.heap_memory.HeapChart', {
    extend: 'doflamingo.view.main.LineChart',
    xtype: 'heapChart',

    title: 'Heap Memory Usage',
    event: ['heap']
});