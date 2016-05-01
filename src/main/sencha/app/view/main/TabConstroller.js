/**
 * Created by customer on 2016. 5. 2..
 */

Ext.define('doflamingo.view.main.TabController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tab-view',

    onTabChange: function(tabs, newTab, oldTab) {
        Ext.suspendLayouts();
        //newTab.setTitle('Active Tab');
        //oldTab.setTitle('Inactive Tab');
        Ext.resumeLayouts(true);
    }
});