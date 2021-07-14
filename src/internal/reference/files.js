const blacklist = [
  ".spectral.yaml",
  //"channels.v3.yml", // fails to build
  "customers_v2.yml", // duplicate of customers.v2.yml
  //"orders.v2.oas2.yml",
  //"tax.v3.yml", // fails to build
];

/**
 * To get latest files, navigate to https://github.com/bigcommerce/api-specs/tree/master/reference
 * and execute following in JS console:
 *     JSON.stringify([...document.querySelectorAll('div[role=rowheader] a')].slice(1).map(a => a.innerText), null, 2)
 */

const allFiles = [
  ".spectral.yaml",
  "abandoned_carts.v3.yml",
  "carts.sf.yml",
  "carts.v3.yml",
  "catalog.v3.yml",
  "channels.v3.yml",
  "checkouts.sf.yml",
  "checkouts.v3.yml",
  "consent.sf.yml",
  "currencies.v2.yml",
  "current_customer.yml",
  "custom-template-associations.v3.yml",
  "customer_login.yml",
  "customers.sf.yml",
  "customers.v2.yml",
  "customers.v3.yml",
  "customers_v2.yml",
  "email_templates.v3.yml",
  "form_fields.sf.yml",
  "geography.v2.yml",
  "marketing.v2.yml",
  "orders.sf.yml",
  "orders.v2.oas2.yml",
  "orders.v3.yml",
  "pages.v3.yml",
  "payment_methods.v2.yml",
  "payment_processing.yml",
  "price_lists.v3.yml",
  "pricing.sf.yml",
  "redirects.v3.yml",
  "scripts.v3.yml",
  "settings.v3.yml",
  "shipping.v2.yml",
  "shipping.v3.yml",
  "shipping_provider.yml",
  "sites.v3.yml",
  "store_content.v2.yml",
  "store_information.v2.yml",
  "storefront_tokens.v3.yml",
  "subscribers.v3.yml",
  "subscriptions.sf.yml",
  "tax.v3.yml",
  "tax_classes.v2.yml",
  "tax_provider.yml",
  "themes.v3.yml",
  "webhooks.v3.yml",
  "widgets.v3.yml",
  "wishlists.v3.yml",
];

module.exports = allFiles.filter(name => !blacklist.includes(name));
