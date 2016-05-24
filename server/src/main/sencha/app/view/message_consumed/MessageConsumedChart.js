/**
 * This view is a message consumed chart.
 */

Ext.define('doflamingo.view.heap_memory.MessageConsumedChart', {
    extend: 'doflamingo.view.main.LineChart',
    xtype: 'messageConsumedChart',

    title: 'Message Consumed',
    event: ['byte', 'msg']
});