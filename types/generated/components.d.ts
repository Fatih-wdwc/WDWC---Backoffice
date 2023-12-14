import type { Schema, Attribute } from '@strapi/strapi';

export interface ModulesPageHero extends Schema.Component {
  collectionName: 'components_modules_page_heroes';
  info: {
    displayName: 'Page hero';
    description: '';
  };
  attributes: {
    Title: Attribute.Text;
    BackgroundImage: Attribute.Media;
  };
}

export interface ModulesTextBox extends Schema.Component {
  collectionName: 'components_modules_text_boxes';
  info: {
    displayName: 'Text box';
    description: '';
  };
  attributes: {};
}

export interface ModulesTitleBox extends Schema.Component {
  collectionName: 'components_modules_title_boxes';
  info: {
    displayName: 'Title box';
    icon: 'underline';
  };
  attributes: {
    Title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'modules.page-hero': ModulesPageHero;
      'modules.text-box': ModulesTextBox;
      'modules.title-box': ModulesTitleBox;
    }
  }
}
