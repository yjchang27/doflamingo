/**
 * This view is a message consumed chart.
 */

Ext.define('doflamingo.view.heap_memory.MessageConsumedTimeline', {
    extend: 'doflamingo.view.main.TimeLineChart',
    xtype: 'messageConsumedTimeline',

    title: 'Message Consumed',
    event: ['byte', 'msg']
});