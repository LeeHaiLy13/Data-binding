sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/library",
    "sap/ui/core/Locale",
    "sap/ui/core/LocaleData",
    "sap/ui/model/type/Currency",
    "sap/m/ObjectAttribute",
  ],
  (
    Controller,
    mobileLibrary,
    Locale,
    LocaleData,
    Currency,
    ObjectAttribute
  ) => {
    "use strict";

    return Controller.extend("lethihai.vn.fioritutorial.controller.Main", {
      formatMail(sFirstName, sLastName) {
        const oBundle = this.getView().getModel("i18n").getResourceBundle();

        return mobileLibrary.URLHelper.normalizeEmail(
          `${sFirstName}.${sLastName}@example.com`,
          oBundle.getText("mailSubject", [sFirstName]),
          oBundle.getText("mailBody")
        );
      },
      formatStockValue(fUnitPrice, iStockLevel, sCurrCode) {
        const oCurrency = new Currency();

        return oCurrency.formatValue(
          [fUnitPrice * iStockLevel, sCurrCode],
          "string"
        );
      },
      onItemSelected(oEvent) {
        const oSelectedItem = oEvent.getSource();
        const oContext = oSelectedItem.getBindingContext("products");
        const sPath = oContext.getPath();
        const oProductDetailPanel = this.byId("productDetailsPanel");
        oProductDetailPanel.bindElement({ path: sPath, model: "products" });
      },
      productListFactory(sId, oContext) {
        let oUIControl;

        // Decide based on the data which dependent to clone
        if (
          oContext.getProperty("UnitsInStock") === 0 &&
          oContext.getProperty("Discontinued")
        ) {
          // The item is discontinued, so use a StandardListItem
          oUIControl = this.byId("productSimple").clone(sId);
        } else {
          // The item is available, so we will create an ObjectListItem
          oUIControl = this.byId("productExtended").clone(sId);

          // The item is temporarily out of stock, so we will add a status
          if (oContext.getProperty("UnitsInStock") < 1) {
            oUIControl.addAttribute(
              new ObjectAttribute({
                text: {
                  path: "i18n>outOfStock",
                },
              })
            );
          }
        }

        return oUIControl;
      },
    });
  }
);

/*const contact = "   Liên hệ: admin@gmail.com   ";
console.log(contact.trim());
const cont = contact.includes("@");
console.log(cont);
const conta = contact.replace("admin", "support ");
console.log(conta);
*/
