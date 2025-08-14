sap.ui.define(
  ["sap/ui/core/UIComponent", "lethihai/vn/fioritutorial/model/models"],
  (UIComponent) => {
    "use strict";

    return UIComponent.extend("lethihai.vn.fioritutorial.Component", {
      metadata: {
        manifest: "json",
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
      },

      init() {
        // call the base component's init function
        UIComponent.prototype.init.apply(this, arguments);

        // set the device model
        // this.setModel(models.createDeviceModel(), "device");
        //this.getModel().setDefaultBindingMode(BindingMode.OneWay);

        // enable routing
        this.getRouter().initialize();
      },
    });
  }
);
