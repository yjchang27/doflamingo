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
    }],

    listeners: {
        scope: 'controller',
        tabchange: 'onTabChange'
    }
});