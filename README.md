#Plugins for ExtJS 5

##Ext.ux.grid.plugin.CustomColumnMenus
Want to replace the standard grid column menu with your own UI control? For example, display a window instead of a menu like this:

![screenshot](https://github.com/tombray/extjs-ux/raw/master/img/replace-menu_with-window.png)

###Usage:
1. Place ux/grid/plugin/CustomColumnMenus.js in [path to your ext SDK]/src/ux/grid/plugin/
2. Add 'Ext.ux.grid.plugin.CustomColumnMenus' to your requires
3. Add the plugin to your grid and configure your menuHandler(s), like so:

```javascript
{
    xtype: 'grid',
    width:300,
    height:300,
    store:Ext.create('Ext.data.Store', {
        fields:['foo','bar'],
        data:[
            {foo:'asdf',bar:'asdf'}
        ]
    }),
    plugins:[
        {
            ptype:'custom-column-menus',
            //define a default menuHandler here 
            menuHandler:function(col){
                alert("column: " + col.dataIndex)
            }
        }
    ],
    columns:[
        {
            text:'foo',
            dataIndex:'foo',
            //Optionally, override the default menuHandler in a specific column 
            menuHandler:function(col){
                console.log('menuHandler');
                Ext.create('Ext.window.Window', {
                    title:'Custom',
                    layout:'fit',
                    width:400,
                    items: [
                        {
                            xtype:'textfield',
                            value:'Custom content'
                        }
                    ]
                }).showBy(col,'tr');
            }
        },
        {
            text:'bar',
            dataIndex:'bar'
        }

    ]
}
```


