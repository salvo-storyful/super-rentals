'use strict';



;define("super-rentals/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/adapter/json-api"eaimeta@70e063a35619d71f
});
;define("super-rentals/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "super-rentals/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/application",0,"ember-resolver",0,"ember-load-initializers",0,"super-rentals/config/environment"eaimeta@70e063a35619d71f

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends _application.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("super-rentals/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component/-private/ember-component-manager"eaimeta@70e063a35619d71f
});
;define("super-rentals/components/jumbo", ["exports", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only"eaimeta@70e063a35619d71f

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="jumbo">
    <div class="right tomster"></div>
    {{yield}}
  </div>
  
  */
  {
    "id": "ngipWzcq",
    "block": "[[[10,0],[14,0,\"jumbo\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"right tomster\"],[12],[13],[1,\"\\n  \"],[18,1,null],[1,\"\\n\"],[13],[1,\"\\n\"]],[\"&default\"],false,[\"yield\"]]",
    "moduleName": "super-rentals/components/jumbo.hbs",
    "isStrictMode": false
  });

  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());

  _exports.default = _default;
});
;define("super-rentals/components/map", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "super-rentals/config/environment"], function (_exports, _component, _templateFactory, _component2, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"super-rentals/config/environment"eaimeta@70e063a35619d71f

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="map">
    <img
      alt="Map image at coordinates {{@lat}},{{@lng}}"
      ...attributes
      src={{this.src}}
      width={{@width}}
      height={{@height}}
    />
  </div>
  
  */
  {
    "id": "ZNYvXgcB",
    "block": "[[[10,0],[14,0,\"map\"],[12],[1,\"\\n  \"],[11,\"img\"],[16,\"alt\",[29,[\"Map image at coordinates \",[30,1],\",\",[30,2]]]],[17,3],[16,\"src\",[30,0,[\"src\"]]],[16,\"width\",[30,4]],[16,\"height\",[30,5]],[12],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[\"@lat\",\"@lng\",\"&attrs\",\"@width\",\"@height\"],false,[]]",
    "moduleName": "super-rentals/components/map.hbs",
    "isStrictMode": false
  });

  const MAPBOX_API = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static';

  class MapComponent extends _component2.default {
    get src() {
      let {
        lng,
        lat,
        width,
        height,
        zoom
      } = this.args;
      let coordinates = `${lng},${lat},${zoom}`;
      let dimensions = `${width}x${height}`;
      let accessToken = `access_token=${this.token}`;
      return `${MAPBOX_API}/${coordinates}/${dimensions}@2x?${accessToken}`;
    }

    get token() {
      return encodeURIComponent(_environment.default.MAPBOX_ACCESS_TOKEN);
    }

  }

  _exports.default = MapComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, MapComponent);
});
;define("super-rentals/components/nav-bar", ["exports", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only"eaimeta@70e063a35619d71f

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <nav class="menu">
    <LinkTo @route="index" class="menu-index">
      <h1>SuperRentals</h1>
    </LinkTo>
    <div class="links">
      <LinkTo @route="about" class="menu-about">
        About
      </LinkTo>
      <LinkTo @route="contact" class="menu-contact">
        Contact
      </LinkTo>
    </div>
  </nav>
  
  */
  {
    "id": "n+hOIQvy",
    "block": "[[[10,\"nav\"],[14,0,\"menu\"],[12],[1,\"\\n  \"],[8,[39,0],[[24,0,\"menu-index\"]],[[\"@route\"],[\"index\"]],[[\"default\"],[[[[1,\"\\n    \"],[10,\"h1\"],[12],[1,\"SuperRentals\"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n  \"],[10,0],[14,0,\"links\"],[12],[1,\"\\n    \"],[8,[39,0],[[24,0,\"menu-about\"]],[[\"@route\"],[\"about\"]],[[\"default\"],[[[[1,\"\\n      About\\n    \"]],[]]]]],[1,\"\\n    \"],[8,[39,0],[[24,0,\"menu-contact\"]],[[\"@route\"],[\"contact\"]],[[\"default\"],[[[[1,\"\\n      Contact\\n    \"]],[]]]]],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"link-to\"]]",
    "moduleName": "super-rentals/components/nav-bar.hbs",
    "isStrictMode": false
  });

  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());

  _exports.default = _default;
});
;define("super-rentals/components/rental", ["exports", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only"eaimeta@70e063a35619d71f

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <article class="rental">
    <Rental::Image src={{@rental.image}} alt="A picture of {{@rental.title}}" />
    <div class="details">
      <h3>{{@rental.title}}</h3>
      <div class="detail owner">
        <span>Owner:</span>
        {{@rental.owner}}
      </div>
      <div class="detail type">
        <span>Type:</span>
        {{@rental.type}}
      </div>
      <div class="detail location">
        <span>Location:</span>
        {{@rental.city}}
      </div>
      <div class="detail bedrooms">
        <span>Number of bedrooms:</span>
        {{@rental.bedrooms}}
      </div>
    </div>
    <Map
      @lat={{@rental.location.lat}}
      @lng={{@rental.location.lng}}
      @zoom="9"
      @width="150"
      @height="150"
      alt="A map of {{@rental.title}}"
    />
  </article>
  
  */
  {
    "id": "tsq3CT35",
    "block": "[[[10,\"article\"],[14,0,\"rental\"],[12],[1,\"\\n  \"],[8,[39,0],[[16,\"src\",[30,1,[\"image\"]]],[16,\"alt\",[29,[\"A picture of \",[30,1,[\"title\"]]]]]],null,null],[1,\"\\n  \"],[10,0],[14,0,\"details\"],[12],[1,\"\\n    \"],[10,\"h3\"],[12],[1,[30,1,[\"title\"]]],[13],[1,\"\\n    \"],[10,0],[14,0,\"detail owner\"],[12],[1,\"\\n      \"],[10,1],[12],[1,\"Owner:\"],[13],[1,\"\\n      \"],[1,[30,1,[\"owner\"]]],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"detail type\"],[12],[1,\"\\n      \"],[10,1],[12],[1,\"Type:\"],[13],[1,\"\\n      \"],[1,[30,1,[\"type\"]]],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"detail location\"],[12],[1,\"\\n      \"],[10,1],[12],[1,\"Location:\"],[13],[1,\"\\n      \"],[1,[30,1,[\"city\"]]],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"detail bedrooms\"],[12],[1,\"\\n      \"],[10,1],[12],[1,\"Number of bedrooms:\"],[13],[1,\"\\n      \"],[1,[30,1,[\"bedrooms\"]]],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[8,[39,1],[[16,\"alt\",[29,[\"A map of \",[30,1,[\"title\"]]]]]],[[\"@lat\",\"@lng\",\"@zoom\",\"@width\",\"@height\"],[[30,1,[\"location\",\"lat\"]],[30,1,[\"location\",\"lng\"]],\"9\",\"150\",\"150\"]],null],[1,\"\\n\"],[13],[1,\"\\n\"]],[\"@rental\"],false,[\"rental/image\",\"map\"]]",
    "moduleName": "super-rentals/components/rental.hbs",
    "isStrictMode": false
  });

  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());

  _exports.default = _default;
});
;define("super-rentals/components/rental/image", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@glimmer/tracking", "@ember/object"], function (_exports, _component, _templateFactory, _component2, _tracking, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor;

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <button
    type="button"
    class="image {{if this.isLarge 'large'}}"
    {{on "click" this.toggleSize}}
  >
    <img ...attributes />
    <small>
      View
      {{if this.isLarge "Smaller" "Larger"}}
    </small>
  </button>
  
  */
  {
    "id": "/XxNlqib",
    "block": "[[[11,\"button\"],[16,0,[29,[\"image \",[52,[30,0,[\"isLarge\"]],\"large\"]]]],[24,4,\"button\"],[4,[38,1],[\"click\",[30,0,[\"toggleSize\"]]],null],[12],[1,\"\\n  \"],[11,\"img\"],[17,1],[12],[13],[1,\"\\n  \"],[10,\"small\"],[12],[1,\"\\n    View\\n    \"],[1,[52,[30,0,[\"isLarge\"]],\"Smaller\",\"Larger\"]],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[\"&attrs\"],false,[\"if\",\"on\"]]",
    "moduleName": "super-rentals/components/rental/image.hbs",
    "isStrictMode": false
  });

  let RentalImageComponent = (_class = class RentalImageComponent extends _component2.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "isLarge", _descriptor, this);
    }

    toggleSize() {
      this.isLarge = !this.isLarge;
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "isLarge", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "toggleSize", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleSize"), _class.prototype)), _class);
  _exports.default = RentalImageComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, RentalImageComponent);
});
;define("super-rentals/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page.js"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-welcome-page/components/welcome-page.js"eaimeta@70e063a35619d71f
});
;define("super-rentals/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug"eaimeta@70e063a35619d71f
});
;define("super-rentals/helpers/app-version", ["exports", "@ember/component/helper", "super-rentals/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper",0,"super-rentals/config/environment",0,"ember-cli-app-version/utils/regexp"eaimeta@70e063a35619d71f

  function appVersion(_) {
    let hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = (0, _helper.helper)(appVersion);

  _exports.default = _default;
});
;define("super-rentals/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/helpers/page-title"eaimeta@70e063a35619d71f

  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("super-rentals/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/pluralize"eaimeta@70e063a35619d71f

  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("super-rentals/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/singularize"eaimeta@70e063a35619d71f

  var _default = _singularize.default;
  _exports.default = _default;
});
;define("super-rentals/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "super-rentals/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-app-version/initializer-factory",0,"super-rentals/config/environment"eaimeta@70e063a35619d71f

  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("super-rentals/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-resolver/resolvers/classic/container-debug-adapter"eaimeta@70e063a35619d71f

  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }

  };
  _exports.default = _default;
});
;define("super-rentals/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug/setup"eaimeta@70e063a35619d71f
});
;define("super-rentals/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-data",0,"ember-data/setup-container"eaimeta@70e063a35619d71f

  /*
    This code initializes EmberData in an Ember application.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("super-rentals/initializers/export-application-global", ["exports", "ember", "super-rentals/config/environment"], function (_exports, _ember, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;
  0; //eaimeta@70e063a35619d71f0,"ember",0,"super-rentals/config/environment"eaimeta@70e063a35619d71f

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("super-rentals/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f

  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',

    initialize() {}

  };
  _exports.default = _default;
});
;define("super-rentals/router", ["exports", "@ember/routing/router", "super-rentals/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/router",0,"super-rentals/config/environment"eaimeta@70e063a35619d71f

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends _router.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route("about");
    this.route("contact", {
      path: "/getting-in-touch"
    });
  });
});
;define("super-rentals/routes/about", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f

  class AboutRoute extends _route.default {}

  _exports.default = AboutRoute;
});
;define("super-rentals/routes/contact", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f

  class ContactRoute extends _route.default {}

  _exports.default = ContactRoute;
});
;define("super-rentals/routes/index", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f

  const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

  class IndexRoute extends _route.default {
    async model() {
      let response = await fetch('/api/rentals.json');
      let {
        data
      } = await response.json();
      return data.map(model => {
        let {
          attributes
        } = model;
        let type;

        if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
          type = 'Community';
        } else {
          type = 'Standalone';
        }

        return {
          type,
          ...attributes
        };
      });
    }

  }

  _exports.default = IndexRoute;
});
;define("super-rentals/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json"eaimeta@70e063a35619d71f
});
;define("super-rentals/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json-api"eaimeta@70e063a35619d71f
});
;define("super-rentals/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/rest"eaimeta@70e063a35619d71f
});
;define("super-rentals/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title-list"eaimeta@70e063a35619d71f
});
;define("super-rentals/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title"eaimeta@70e063a35619d71f
});
;define("super-rentals/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-data/store"eaimeta@70e063a35619d71f
});
;define("super-rentals/templates/about", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "JdD1qtuV",
    "block": "[[[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n  \"],[10,\"h2\"],[12],[1,\"About Super Rentals\"],[13],[1,\"\\n  \"],[10,2],[12],[1,\"\\n    The Super Rentals website is a delightful project created to explore Ember.\\n    By building a property rental site, we can simultaneously imagine traveling\\n    AND building Ember applications.\\n  \"],[13],[1,\"\\n  \"],[8,[39,1],[[24,0,\"button\"]],[[\"@route\"],[\"contact\"]],[[\"default\"],[[[[1,\"Contact Us\"]],[]]]]],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[],false,[\"jumbo\",\"link-to\"]]",
    "moduleName": "super-rentals/templates/about.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("super-rentals/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "PO06IVJT",
    "block": "[[[10,0],[14,0,\"container\"],[12],[1,\"\\n  \"],[8,[39,0],null,null,null],[1,\"\\n  \"],[10,0],[14,0,\"body\"],[12],[1,\"\\n    \"],[46,[28,[37,2],null,null],null,null,null],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"nav-bar\",\"component\",\"-outlet\"]]",
    "moduleName": "super-rentals/templates/application.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("super-rentals/templates/contact", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "aj2MIySc",
    "block": "[[[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n  \"],[10,\"h2\"],[12],[1,\"Contact Us\"],[13],[1,\"\\n  \"],[10,2],[12],[1,\"\\n    Super Rentals Representatives would love to help you\"],[10,\"br\"],[12],[13],[1,\"\\n    choose a destination or answer any questions you may have.\\n  \"],[13],[1,\"\\n  \"],[10,\"address\"],[12],[1,\"\\n    Super Rentals HQ\\n    \"],[10,2],[12],[1,\"\\n      1212 Test Address Avenue\"],[10,\"br\"],[12],[13],[1,\"\\n      Testington, OR 97233\\n    \"],[13],[1,\"\\n    \"],[10,3],[14,6,\"tel:503.555.1212\"],[12],[1,\"+1 (503) 555-1212\"],[13],[10,\"br\"],[12],[13],[1,\"\\n    \"],[10,3],[14,6,\"mailto:superrentalsrep@emberjs.com\"],[12],[1,\"superrentalsrep@emberjs.com\"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[8,[39,1],[[24,0,\"button\"]],[[\"@route\"],[\"about\"]],[[\"default\"],[[[[1,\"About\"]],[]]]]],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[],false,[\"jumbo\",\"link-to\"]]",
    "moduleName": "super-rentals/templates/contact.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("super-rentals/templates/index", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "JizReCzA",
    "block": "[[[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n  \"],[10,\"h2\"],[12],[1,\"Welcome to Super Rentals!\"],[13],[1,\"\\n  \"],[10,2],[12],[1,\"We hope you find exactly what you're looking for in a place to stay.\"],[13],[1,\"\\n  \"],[8,[39,1],[[24,0,\"button\"]],[[\"@route\"],[\"about\"]],[[\"default\"],[[[[1,\"About Us\"]],[]]]]],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[10,0],[14,0,\"rentals\"],[12],[1,\"\\n  \"],[10,\"ul\"],[14,0,\"results\"],[12],[1,\"\\n\"],[42,[28,[37,3],[[28,[37,3],[[30,1]],null]],null],null,[[[1,\"      \"],[10,\"li\"],[12],[8,[39,4],null,[[\"@rental\"],[[30,2]]],null],[13],[1,\"\\n\"]],[2]],null],[1,\"  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[\"@model\",\"rental\"],false,[\"jumbo\",\"link-to\",\"each\",\"-track-array\",\"rental\"]]",
    "moduleName": "super-rentals/templates/index.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("super-rentals/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("super-rentals/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("super-rentals/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("super-rentals/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;

;define('super-rentals/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("super-rentals/app")["default"].create({"name":"super-rentals","version":"0.0.0+a57eca7c"});
          }
        
//# sourceMappingURL=super-rentals.map
