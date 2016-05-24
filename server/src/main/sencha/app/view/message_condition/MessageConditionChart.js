/**
 * This view is a message condition chart.
 */

Ext.define('doflamingo.view.heap_memory.MessageConditionChart', {
    extend: 'doflamingo.view.main.LineChart',
    xtype: 'messageConditionChart',

    title: 'Message Condition',
    event: ['request', 'msg in']
});