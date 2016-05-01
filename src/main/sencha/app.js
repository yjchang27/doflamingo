/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
var childPanel1 = Ext.create('Ext.panel.Panel', {
    title: 'Child Panel 1',
    html: 'A Panel'
});
var childPanel2 = Ext.create('Ext.panel.Panel', {
    title: 'Child Panel 2',
    html: 'Another Panel'
});
/*
Ext.application({
    name: 'doflamingo',

    extend: 'doflamingo.Application',

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            items: [childPanel1, childPanel2]
        });
    }
});
*/

Ext.application({
    name: 'doflamingo',

    extend: 'doflamingo.Application',

    requires: [
        'doflamingo.view.main.Main'
    ],

    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //
    mainView: 'doflamingo.view.main.Main'

    //-------------------------------------------------------------------------
    // Most customizations should be made to doflamingo.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});


/*
Ext.define('User', {
    extend: 'Ext.data.Model',
    fields : [ 'name', 'email', 'phone' ]
});

var userStore = Ext.create('Ext.data.Store', {
    model : 'User',
    data: [
        { name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' },
        { name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
        { name: 'Homer', email: 'homer@simpsons.com', phone: '555-222-1244' },
        { name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
    ]
});


Ext.application({
    name: 'doflamingo',

    extend: 'doflamingo.Application',

    launch : function() {
        Ext.create('Ext.grid.Panel', {
            renderTo:Ext.getBody(),
                store: userStore,
                width: 400,
                height: 200,
                title : 'Application Users',
                columns: [
                {
                    text:'Name',
                    width: 100,
                    sortable: false,
                    hideable: false,
                    dataIndex : 'name'
                }, {
                    text: 'Email Address',
                    width: 150,
                    dataIndex : 'email',
                    hidden: true
                },{
                    text:'Phone Number',
                    flex:1,
                    dataIndex:'phone'
                }
            ]
        });


    }

// The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //
    //-------------------------------------------------------------------------
    // Most customizations should be made to doflamingo.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});
*/