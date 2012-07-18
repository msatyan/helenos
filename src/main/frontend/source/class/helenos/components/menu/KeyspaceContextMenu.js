/* ************************************************************************
Copyright:
  2012 Tomek Kuprowski
License:
  GPLv2: http://www.gnu.org/licences/gpl.html
Authors:
  Tomek Kuprowski (tomekkuprowski at gmail dot com)
 ************************************************************************ */
/*
#asset(qx/icon/${qx.icontheme}/16/status/dialog-information.png)
#asset(qx/icon/${qx.icontheme}/16/actions/list-add.png)
 */
qx.Class.define("helenos.components.menu.KeyspaceContextMenu",
{
    extend : qx.ui.menu.Menu,
 
    construct : function(ksName)
    {
        this.base(arguments);
        
        var propsButton = new qx.ui.menu.Button("Properties", "qx/icon/Oxygen/16/status/dialog-information.png");
        propsButton.setUserData('KSNAME', ksName);
        propsButton.addListener("execute", this.__showProperties);
        this.add(propsButton);
        
        var addCFButton = new qx.ui.menu.Button("Add column family", "qx/icon/Oxygen/16/actions/list-add.png");
        this.add(addCFButton);
    },
    
    members : {
        __showProperties : function(e) {
            var ksName = e.getTarget().getUserData('KSNAME');
            helenos.util.GuiObserver.showKeyspaceInfoTab(ksName);
        }
    }
});