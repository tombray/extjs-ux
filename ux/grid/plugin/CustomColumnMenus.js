/**
 * Created by tbray on 6/13/14.
 */
Ext.define("Ext.ux.grid.plugin.CustomColumnMenus", {
    extend: 'Ext.AbstractPlugin',
    alias: 'plugin.custom-column-menus',
    init:function(grid){
        var me = this;

        Ext.each(grid.query('gridcolumn'), function(col) {
            var menuHandler = col.menuHandler || me.menuHandler

            if (menuHandler) {
                col.on('headertriggerclick',function( ct, column, e, t, eOpts){
                    menuHandler(column)
                    return false;
                })
            }


        });
    }
})
