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
        title: 'History',
        xtype: 'mainlist'
    }, {
        title: 'Disabled Tab',
        disabled: true
    }],

    listeners: {
        scope: 'controller',
        tabchange: 'onTabChange'
    }
});