import AllComponents from './components';
import Builders from './builders/Builders';
import Components from './components/Components';
import Displays from './displays/Displays';
import Templates from './templates/Templates';
import Providers from './providers';
import Rules from './validator/Rules';
import Formio from './Formio';
import { use } from './formio.module.js';
Components.setComponents(AllComponents);
Formio.Components = Components;
Formio.Templates = Templates;
Formio.use = use;
export Form from './Form';
export Utils from './utils';
export { Builders, Components, Displays, Providers, Templates, Rules, Formio };
