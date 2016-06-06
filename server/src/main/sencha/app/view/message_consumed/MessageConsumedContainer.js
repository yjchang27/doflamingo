/**
 * Created by customer on 2016. 5. 2..
 */


Ext.define('doflamingo.view.message_consumed.MessageConsumedContainer', {
    extend: 'Ext.Container',
    xtype: 'messageConsumedContainer',
    layout: {
        type: 'column',
        columns: 3,
        tdAttrs: { style: 'padding: 20px;'}
    },
    items: [{
        xtype: 'messageConsumedTimeline',
        height: 400,
        columnWidth: 1
    }/*, {
        xtype: 'fetchRateChart',
        height: 300,
        columnWidth: 0.334
    }, {
        xtype: 'messageConsumedChart',
        height: 300,
        columnWidth: 0.333
    }, {
        xtype: 'maxLagChart',
        height: 300,
        columnWidth: 0.333
    }*/]
});