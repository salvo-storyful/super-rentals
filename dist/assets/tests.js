'use strict';

define("super-rentals/tests/acceptance/super-rentals-test", ["qunit", "@ember/test-helpers", "ember-qunit"], function (_qunit, _testHelpers, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"@ember/test-helpers",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)("Acceptance | super rentals", function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)("visiting /", async function (assert) {
      await (0, _testHelpers.visit)("/");
      assert.strictEqual((0, _testHelpers.currentURL)(), "/");
      assert.dom("nav").exists();
      assert.dom("h1").hasText("SuperRentals");
      assert.dom("h2").hasText("Welcome to Super Rentals!");
      assert.dom(".jumbo a.button").hasText("About Us");
      await (0, _testHelpers.click)(".jumbo a.button");
      assert.strictEqual((0, _testHelpers.currentURL)(), "/about");
    });
    (0, _qunit.test)("visiting /about", async function (assert) {
      await (0, _testHelpers.visit)("/about");
      assert.strictEqual((0, _testHelpers.currentURL)(), "/about");
      assert.dom("nav").exists();
      assert.dom("h1").hasText("SuperRentals");
      assert.dom("h2").hasText("About Super Rentals");
      assert.dom(".jumbo a.button").hasText("Contact Us");
      await (0, _testHelpers.click)(".jumbo a.button");
      assert.strictEqual((0, _testHelpers.currentURL)(), "/getting-in-touch");
    });
    (0, _qunit.test)("visiting /getting-in-touch", async function (assert) {
      await (0, _testHelpers.visit)("/getting-in-touch");
      assert.strictEqual((0, _testHelpers.currentURL)(), "/getting-in-touch");
      assert.dom("nav").exists();
      assert.dom("h1").hasText("SuperRentals");
      assert.dom("h2").hasText("Contact Us");
      assert.dom(".jumbo a.button").hasText("About");
      await (0, _testHelpers.click)(".jumbo a.button");
      assert.strictEqual((0, _testHelpers.currentURL)(), "/about");
    });
    (0, _qunit.test)("navigating using the nav-bar", async function (assert) {
      await (0, _testHelpers.visit)("/");
      assert.dom("nav").exists();
      assert.dom("nav a.menu-index").hasText("SuperRentals");
      assert.dom("nav a.menu-about").hasText("About");
      assert.dom("nav a.menu-contact").hasText("Contact");
      await (0, _testHelpers.click)("nav a.menu-about");
      assert.strictEqual((0, _testHelpers.currentURL)(), "/about");
      await (0, _testHelpers.click)("nav a.menu-contact");
      assert.strictEqual((0, _testHelpers.currentURL)(), "/getting-in-touch");
      await (0, _testHelpers.click)("nav a.menu-index");
      assert.strictEqual((0, _testHelpers.currentURL)(), "/");
    });
  });
});
define("super-rentals/tests/helpers/index", ["exports", "ember-qunit"], function (_exports, _emberQunit) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setupApplicationTest = setupApplicationTest;
  _exports.setupRenderingTest = setupRenderingTest;
  _exports.setupTest = setupTest;
  0; //eaimeta@70e063a35619d71f0,"ember-qunit"eaimeta@70e063a35619d71f

  // This file exists to provide wrappers around ember-qunit's / ember-mocha's
  // test setup functions. This way, you can easily extend the setup that is
  // needed per test type.
  function setupApplicationTest(hooks, options) {
    (0, _emberQunit.setupApplicationTest)(hooks, options); // Additional setup for application tests can be done here.
    //
    // For example, if you need an authenticated session for each
    // application test, you could do:
    //
    // hooks.beforeEach(async function () {
    //   await authenticateSession(); // ember-simple-auth
    // });
    //
    // This is also a good place to call test setup functions coming
    // from other addons:
    //
    // setupIntl(hooks); // ember-intl
    // setupMirage(hooks); // ember-cli-mirage
  }

  function setupRenderingTest(hooks, options) {
    (0, _emberQunit.setupRenderingTest)(hooks, options); // Additional setup for rendering tests can be done here.
  }

  function setupTest(hooks, options) {
    (0, _emberQunit.setupTest)(hooks, options); // Additional setup for unit tests can be done here.
  }
});
define("super-rentals/tests/integration/components/jumbo-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  (0, _qunit.module)("Integration | Component | jumbo", function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)("it renders the content inside a jumbo header with a tomster", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Jumbo>Hello World</Jumbo>
      */
      {
        "id": "I+q5iC61",
        "block": "[[[8,[39,0],null,null,[[\"default\"],[[[[1,\"Hello World\"]],[]]]]]],[],false,[\"jumbo\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(".jumbo").exists();
      assert.dom(".jumbo").hasText("Hello World");
      assert.dom(".jumbo .tomster").exists();
    });
  });
});
define("super-rentals/tests/integration/components/map-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Integration | Component | map', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Map />
      */
      {
        "id": "FZvfDrOZ",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"map\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Map>
              template block text
            </Map>
          
      */
      {
        "id": "pG9iAcg5",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"map\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("super-rentals/tests/integration/components/nav-bar-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  (0, _qunit.module)("Integration | Component | nav-bar", function (hooks) {});
});
define("super-rentals/tests/integration/components/rental-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  (0, _qunit.module)("Integration | Component | rental", function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)("it renders information about a rental property", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Rental />
      */
      {
        "id": "1+NRzuWU",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"rental\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom("article").hasClass("rental");
      assert.dom("article h3").hasText("Grand Old Mansion");
      assert.dom("article .detail.owner").includesText("Veruca Salt");
      assert.dom("article .detail.type").includesText("Standalone");
      assert.dom("article .detail.location").includesText("San Francisco");
      assert.dom("article .detail.bedrooms").includesText("15");
      assert.dom("article .image").exists();
    });
  });
});
define("super-rentals/tests/integration/components/rental/image-test", ["@ember/template-factory", "qunit", "ember-qunit", "@ember/test-helpers"], function (_templateFactory, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  (0, _qunit.module)("Integration | Component | rental/image", function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)("it renders the given image", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Rental::Image
              src="/assets/images/teaching-tomster.png"
              alt="Teaching Tomster"
            />
          
      */
      {
        "id": "VtiW+0j0",
        "block": "[[[1,\"\\n      \"],[8,[39,0],[[24,\"src\",\"/assets/images/teaching-tomster.png\"],[24,\"alt\",\"Teaching Tomster\"]],null,null],[1,\"\\n    \"]],[],false,[\"rental/image\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom(".image img").exists().hasAttribute("src", "/assets/images/teaching-tomster.png").hasAttribute("alt", "Teaching Tomster");
    });
    (0, _qunit.test)("clicking on the component toggles its size", async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Rental::Image
              src="/assets/images/teaching-tomster.png"
              alt="Teaching Tomster"
            />
          
      */
      {
        "id": "VtiW+0j0",
        "block": "[[[1,\"\\n      \"],[8,[39,0],[[24,\"src\",\"/assets/images/teaching-tomster.png\"],[24,\"alt\",\"Teaching Tomster\"]],null,null],[1,\"\\n    \"]],[],false,[\"rental/image\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.dom("button.image").exists();
      assert.dom(".image").doesNotHaveClass("large");
      assert.dom(".image small").hasText("View Larger");
      await (0, _testHelpers.click)("button.image");
      assert.dom(".image").hasClass("large");
      assert.dom(".image small").hasText("View Smaller");
      await (0, _testHelpers.click)("button.image");
      assert.dom(".image").doesNotHaveClass("large");
      assert.dom(".image small").hasText("View Larger");
    });
  });
});
define("super-rentals/tests/test-helper", ["super-rentals/app", "super-rentals/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"super-rentals/app",0,"super-rentals/config/environment",0,"qunit",0,"@ember/test-helpers",0,"qunit-dom",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.start)();
});
define("super-rentals/tests/unit/routes/about-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | about', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:about');
      assert.ok(route);
    });
  });
});
define("super-rentals/tests/unit/routes/contact-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | contact', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:contact');
      assert.ok(route);
    });
  });
});
define("super-rentals/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define('super-rentals/config/environment', [], function() {
  var prefix = 'super-rentals';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('super-rentals/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
