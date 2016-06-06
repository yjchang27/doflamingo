/**
 * This view is a heap chart.
 */

Ext.define('doflamingo.view.message_condition.MessageConditionTimeline', {
    extend: 'doflamingo.view.main.TimeLineChart',
    xtype: 'messageConditionTimeline',

    title: 'Message Condition',
    event: ['request', 'msg in']
});