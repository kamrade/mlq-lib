export type NavigationType = 'heading' | 'link';

export type INavigationItem = {
  type: NavigationType;
  label: string;
  link?: string;
}


export const navigationData: INavigationItem[] = [
  { type: 'heading', label: 'Badge' },
  { type: 'link', label: 'Badge', link: '/showcase/badge' },

  { type: 'heading', label: 'Accordion' },
  { type: 'link', label: 'Accordion Basic', link: '/showcase/accordion' },

  { type: 'heading', label: 'Sheet' },
  { type: 'link', label: 'Sheet base', link: '/showcase/sheet-base' },
  { type: 'link', label: 'Sheet hideable', link: '/showcase/sheet-hideable' },

  { type: 'heading', label: 'Card' },
  { type: 'link', label: 'Card Basic', link: '/showcase/card' },

  { type: 'heading', label: 'Button' },
  { type: 'link', label: 'Button Primitive', link: '/showcase/button-primitive' },
  { type: 'link', label: 'Button Milk', link: '/showcase/button-milk' },
  { type: 'link', label: 'Button with Actions', link: '/showcase/button-actions' },
  { type: 'link', label: 'Button Milk Icon', link: '/showcase/button-milk-icon' },

  { type: 'heading', label: 'TextInput' },
  { type: 'link', label: 'Text Input Primitive', link: '/showcase/text-input-primitive' },
  { type: 'link', label: 'Text Input Primitive Actions', link: '/showcase/text-input-primitive-actions' },
  { type: 'link', label: 'Text Input with Label', link: '/showcase/text-input-label' },
  { type: 'link', label: 'Text Input Milk', link: '/showcase/text-input-milk' },
  { type: 'link', label: 'Text Input Block', link: '/showcase/text-input-block' },
  { type: 'link', label: 'Text Input Bindable', link: '/showcase/text-input-bindable' },
  { type: 'link', label: 'Text Input Autofocus', link: '/showcase/text-input-autofocus' },
  { type: 'link', label: 'Text Input Milk Autofocus', link: '/showcase/text-input-milk-autofocus' },
  { type: 'link', label: 'Text Input Block Autofocus', link: '/showcase/text-input-block-autofocus' },

  { type: 'heading', label: 'Checkbox' },
  { type: 'link', label: 'Checkbox Primitive', link: '/showcase/checkbox-primitive' },
  { type: 'link', label: 'Checkbox Primitive Form', link: '/showcase/checkbox-primitive-form' },

  { type: 'heading', label: 'Menu' },
  { type: 'link', label: 'Menu on hover', link: '/showcase/menu-hover' },
  { type: 'link', label: 'Menu on click', link: '/showcase/menu-onclick' },
  { type: 'link', label: 'Menu Portal', link: '/showcase/menu-portal' },

  { type: 'heading', label: 'Command' },
  { type: 'link', label: 'Command', link: '/showcase/command' },
  { type: 'link', label: 'Command flat', link: '/showcase/command-flat' },
  { type: 'link', label: 'Command in loop', link: '/showcase/command-in-loop' },
  { type: 'link', label: 'Command in menu', link: '/showcase/command-in-menu' },
  { type: 'link', label: 'Select with Command', link: '/showcase/command-select' },

  { type: 'heading', label: 'Select' },
  { type: 'link', label: 'Select base', link: '/showcase/select' },
  { type: 'link', label: 'Select flat', link: '/showcase/select-flat' },
  { type: 'link', label: 'Select loading', link: '/showcase/select-loading' },
  { type: 'link', label: 'Select inner loading', link: '/showcase/select-inner-loading' },

  { type: 'heading', label: 'Dialogs' },
  { type: 'link', label: 'Modal', link: '/showcase/modal-base' },
  { type: 'link', label: 'Modal Complex', link: '/showcase/modal-complex' },

  { type: 'heading', label: 'Icons' },
  { type: 'link', label: 'Icon Loading Animation', link: '/showcase/icon-loading-animation' }
]
