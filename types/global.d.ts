// Types for compiled templates
declare module 'ember-base-template/templates/*' {
  import TemplateFactory from 'htmlbars-inline-precompile';
  const tmpl: typeof TemplateFactory;
  export default tmpl;
}
