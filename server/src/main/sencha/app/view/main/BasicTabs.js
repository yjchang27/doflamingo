/**
 * Created by customer on 2016. 5. 2..
 */
/**
 * Demonstrates a default configuration of a tab panel.
 */


Ext.define('doflamingo.view.main.BasicTabs', {
    extend: 'Ext.tab.Panel',
    xtype: 'basic-tabs',
    controller: 'tab-view',

    defaults: {
        bodyPadding: 10,
        autoScroll: true
    },
    items: [{
        title: 'Overview',
        xtype: 'mainCharts'
    }, {
        title: 'Heap Memory Usage',
        xtype: 'heapContainer'
    }, {
        title: 'Message Condition',
        xtype: 'messageConditionContainer'
    }, {
        title: 'Response Time',
        xtype: 'responseContainer'
    }, {
        title: 'Fetch Rate',
        xtype: 'fetchRateContainer'
    }, {
        title: 'Message Consumed',
        xtype: 'messageConsumedContainer'
    }, {
        title: 'Max Lag',
        xtype: 'maxLagContainer'
    }],

    listeners: {
        scope: 'controller',
        tabchange: 'onTabChange'
    }
});