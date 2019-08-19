/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from './stencil.core';
import {
  CalciteLayout,
  CalcitePlacement,
  CalciteTheme,
} from './components/interfaces';

export namespace Components {
  interface CalciteAction {
    /**
    * Indicates whether the action is highlighted.
    */
    'active': boolean;
    /**
    * Compact mode is used internally by components to reduce side padding, e.g. calcite-block-section.
    */
    'compact': boolean;
    /**
    * Disabled is used to prevent the action from occurring.
    */
    'disabled': boolean;
    /**
    * Indicates unread changes.
    */
    'indicator': boolean;
    /**
    * Label of the action, exposed on hover.
    */
    'label': string;
    /**
    * Text that accompanies the action icon.
    */
    'text': string;
    /**
    * Indicates whether the text is displayed.
    */
    'textEnabled': boolean;
    /**
    * Used to set the component's color scheme.
    */
    'theme': CalciteTheme;
  }
  interface CalciteActionBar {
    /**
    * Indicates whether widget can be expanded.
    */
    'expand': boolean;
    /**
    * Indicates whether widget is expanded.
    */
    'expanded': boolean;
    /**
    * Arrangement of the component.
    */
    'layout': CalciteLayout;
    /**
    * Updates the label of the collapse icon when the component is expanded.
    */
    'textCollapse': string;
    /**
    * Updates the label of the expand icon when the component is collapsed.
    */
    'textExpand': string;
    /**
    * Used to set the component's color scheme.
    */
    'theme': CalciteTheme;
  }
  interface CalciteActionGroup {}
  interface CalciteActionPad {
    /**
    * Determines where the element will be displayed. side: dynamically left or right based on whether we're in a leading or trailing shell-panel. over: centered on top of trigger and covers trigger. anchor: dynamically above or below based on how close trigger is to top or bottom of window.
    */
    'placement': CalcitePlacement;
    /**
    * HTMLElement used to position this element according to the placement.
    */
    'positionElement': HTMLElement;
    /**
    * Used to set the component's color scheme.
    */
    'theme': CalciteTheme;
  }
  interface CalciteBlock {
    /**
    * When true, this block will be collapsible.
    */
    'collapsible': boolean;
    /**
    * Block heading.
    */
    'heading': string;
    /**
    * When true, the block's content will be displayed.
    */
    'open': boolean;
    /**
    * Block summary.
    */
    'summary': string;
    /**
    * Tooltip used for the toggle when expanded.
    */
    'textCollapse': string;
    /**
    * Tooltip used for the toggle when collapsed.
    */
    'textExpand': string;
    /**
    * Used to set the component's color scheme.
    */
    'theme': CalciteTheme;
  }
  interface CalciteBlockSection {
    /**
    * When true, the block's section content will be displayed.
    */
    'open': boolean;
    /**
    * Text displayed in the button.
    */
    'text': string;
    /**
    * Tooltip used for the toggle when expanded.
    */
    'textCollapse': string;
    /**
    * Tooltip used for the toggle when collapsed.
    */
    'textExpand': string;
  }
  interface CalciteDemoNav {
    'pageId': string;
  }
  interface CalciteExample {
    'publicMethod': () => Promise<void>;
    'someProp': boolean;
    'textMyString': string;
  }
  interface CalciteFloatingPanel {
    /**
    * Panel heading
    */
    'heading': string;
    /**
    * Determines where the element will be displayed. side: dynamically left or right based on whether we're in a leading or trailing shell-panel. over: centered on top of trigger and covers trigger. anchor: dynamically above or below based on how close trigger is to top or bottom of window.
    */
    'placement': CalcitePlacement;
    /**
    * HTMLElement used to position this element according to the placement.
    */
    'positionElement': HTMLElement;
  }
  interface CalciteFlow {
    'back': () => Promise<void>;
    /**
    * Used to set the component's color scheme.
    */
    'theme': CalciteTheme;
  }
  interface CalciteFlowItem {
    /**
    * Heading text.
    */
    'heading': string;
    /**
    * Opens the action menu.
    */
    'menuOpen': boolean;
    /**
    * Shows a back button in the header.
    */
    'showBackButton': boolean;
    /**
    * 'Back' text string.
    */
    'textBack': string;
    /**
    * 'Close' text string.
    */
    'textClose': string;
    /**
    * 'Open' text string.
    */
    'textOpen': string;
    /**
    * Used to set the component's color scheme.
    */
    'theme': CalciteTheme;
  }
  interface CalciteShell {
    /**
    * Used to set the component's color scheme.
    */
    'theme': CalciteTheme;
  }
  interface CalciteShellPanel {
    /**
    * Hide the content panel.
    */
    'collapsed': boolean;
    /**
    * Arrangement of the component.
    */
    'layout': CalciteLayout;
  }
  interface CalciteTip {
    /**
    * The heading of the tip.
    */
    'heading': string;
    /**
    * Indicates whether the tip can be dismissed.
    */
    'nonDismissible': boolean;
    /**
    * The local storage id used for an instance of a tip.
    */
    'storageId': string;
    /**
    * Alternate text for closing the tip.
    */
    'textClose': string;
    /**
    * Alternate text for description of the thumbnail.
    */
    'textThumbnail': string;
    /**
    * Used to set the component's color scheme.
    */
    'theme': CalciteTheme;
    /**
    * A string of the path to the thumbnail.
    */
    'thumbnail': string;
  }
  interface CalciteTipGroup {
    /**
    * The title used for all nested tips.
    */
    'textGroupTitle': string;
  }
  interface CalciteTipManager {
    'nextTip': () => Promise<void>;
    'previousTip': () => Promise<void>;
    /**
    * Alternate text for closing the Tip Manager.
    */
    'textClose': string;
    /**
    * The default group title for the Tip Manager.
    */
    'textDefaultTitle': string;
    /**
    * Alternate text for navigating to the next tip.
    */
    'textNext': string;
    /**
    * Label that appears on hover of pagination icon.
    */
    'textPaginationLabel': string;
    /**
    * Alternate text for navigating to the previous tip.
    */
    'textPrevious': string;
    /**
    * Used to set the component's color scheme.
    */
    'theme': CalciteTheme;
  }
}

declare global {


  interface HTMLCalciteActionElement extends Components.CalciteAction, HTMLStencilElement {}
  var HTMLCalciteActionElement: {
    prototype: HTMLCalciteActionElement;
    new (): HTMLCalciteActionElement;
  };

  interface HTMLCalciteActionBarElement extends Components.CalciteActionBar, HTMLStencilElement {}
  var HTMLCalciteActionBarElement: {
    prototype: HTMLCalciteActionBarElement;
    new (): HTMLCalciteActionBarElement;
  };

  interface HTMLCalciteActionGroupElement extends Components.CalciteActionGroup, HTMLStencilElement {}
  var HTMLCalciteActionGroupElement: {
    prototype: HTMLCalciteActionGroupElement;
    new (): HTMLCalciteActionGroupElement;
  };

  interface HTMLCalciteActionPadElement extends Components.CalciteActionPad, HTMLStencilElement {}
  var HTMLCalciteActionPadElement: {
    prototype: HTMLCalciteActionPadElement;
    new (): HTMLCalciteActionPadElement;
  };

  interface HTMLCalciteBlockElement extends Components.CalciteBlock, HTMLStencilElement {}
  var HTMLCalciteBlockElement: {
    prototype: HTMLCalciteBlockElement;
    new (): HTMLCalciteBlockElement;
  };

  interface HTMLCalciteBlockSectionElement extends Components.CalciteBlockSection, HTMLStencilElement {}
  var HTMLCalciteBlockSectionElement: {
    prototype: HTMLCalciteBlockSectionElement;
    new (): HTMLCalciteBlockSectionElement;
  };

  interface HTMLCalciteDemoNavElement extends Components.CalciteDemoNav, HTMLStencilElement {}
  var HTMLCalciteDemoNavElement: {
    prototype: HTMLCalciteDemoNavElement;
    new (): HTMLCalciteDemoNavElement;
  };

  interface HTMLCalciteExampleElement extends Components.CalciteExample, HTMLStencilElement {}
  var HTMLCalciteExampleElement: {
    prototype: HTMLCalciteExampleElement;
    new (): HTMLCalciteExampleElement;
  };

  interface HTMLCalciteFloatingPanelElement extends Components.CalciteFloatingPanel, HTMLStencilElement {}
  var HTMLCalciteFloatingPanelElement: {
    prototype: HTMLCalciteFloatingPanelElement;
    new (): HTMLCalciteFloatingPanelElement;
  };

  interface HTMLCalciteFlowElement extends Components.CalciteFlow, HTMLStencilElement {}
  var HTMLCalciteFlowElement: {
    prototype: HTMLCalciteFlowElement;
    new (): HTMLCalciteFlowElement;
  };

  interface HTMLCalciteFlowItemElement extends Components.CalciteFlowItem, HTMLStencilElement {}
  var HTMLCalciteFlowItemElement: {
    prototype: HTMLCalciteFlowItemElement;
    new (): HTMLCalciteFlowItemElement;
  };

  interface HTMLCalciteShellElement extends Components.CalciteShell, HTMLStencilElement {}
  var HTMLCalciteShellElement: {
    prototype: HTMLCalciteShellElement;
    new (): HTMLCalciteShellElement;
  };

  interface HTMLCalciteShellPanelElement extends Components.CalciteShellPanel, HTMLStencilElement {}
  var HTMLCalciteShellPanelElement: {
    prototype: HTMLCalciteShellPanelElement;
    new (): HTMLCalciteShellPanelElement;
  };

  interface HTMLCalciteTipElement extends Components.CalciteTip, HTMLStencilElement {}
  var HTMLCalciteTipElement: {
    prototype: HTMLCalciteTipElement;
    new (): HTMLCalciteTipElement;
  };

  interface HTMLCalciteTipGroupElement extends Components.CalciteTipGroup, HTMLStencilElement {}
  var HTMLCalciteTipGroupElement: {
    prototype: HTMLCalciteTipGroupElement;
    new (): HTMLCalciteTipGroupElement;
  };

  interface HTMLCalciteTipManagerElement extends Components.CalciteTipManager, HTMLStencilElement {}
  var HTMLCalciteTipManagerElement: {
    prototype: HTMLCalciteTipManagerElement;
    new (): HTMLCalciteTipManagerElement;
  };
  interface HTMLElementTagNameMap {
    'calcite-action': HTMLCalciteActionElement;
    'calcite-action-bar': HTMLCalciteActionBarElement;
    'calcite-action-group': HTMLCalciteActionGroupElement;
    'calcite-action-pad': HTMLCalciteActionPadElement;
    'calcite-block': HTMLCalciteBlockElement;
    'calcite-block-section': HTMLCalciteBlockSectionElement;
    'calcite-demo-nav': HTMLCalciteDemoNavElement;
    'calcite-example': HTMLCalciteExampleElement;
    'calcite-floating-panel': HTMLCalciteFloatingPanelElement;
    'calcite-flow': HTMLCalciteFlowElement;
    'calcite-flow-item': HTMLCalciteFlowItemElement;
    'calcite-shell': HTMLCalciteShellElement;
    'calcite-shell-panel': HTMLCalciteShellPanelElement;
    'calcite-tip': HTMLCalciteTipElement;
    'calcite-tip-group': HTMLCalciteTipGroupElement;
    'calcite-tip-manager': HTMLCalciteTipManagerElement;
  }
}

declare namespace LocalJSX {
  interface CalciteAction extends JSXBase.HTMLAttributes<HTMLCalciteActionElement> {
    /**
    * Indicates whether the action is highlighted.
    */
    'active'?: boolean;
    /**
    * Compact mode is used internally by components to reduce side padding, e.g. calcite-block-section.
    */
    'compact'?: boolean;
    /**
    * Disabled is used to prevent the action from occurring.
    */
    'disabled'?: boolean;
    /**
    * Indicates unread changes.
    */
    'indicator'?: boolean;
    /**
    * Label of the action, exposed on hover.
    */
    'label'?: string;
    /**
    * Text that accompanies the action icon.
    */
    'text'?: string;
    /**
    * Indicates whether the text is displayed.
    */
    'textEnabled'?: boolean;
    /**
    * Used to set the component's color scheme.
    */
    'theme'?: CalciteTheme;
  }
  interface CalciteActionBar extends JSXBase.HTMLAttributes<HTMLCalciteActionBarElement> {
    /**
    * Indicates whether widget can be expanded.
    */
    'expand'?: boolean;
    /**
    * Indicates whether widget is expanded.
    */
    'expanded'?: boolean;
    /**
    * Arrangement of the component.
    */
    'layout'?: CalciteLayout;
    /**
    * Updates the label of the collapse icon when the component is expanded.
    */
    'textCollapse'?: string;
    /**
    * Updates the label of the expand icon when the component is collapsed.
    */
    'textExpand'?: string;
    /**
    * Used to set the component's color scheme.
    */
    'theme'?: CalciteTheme;
  }
  interface CalciteActionGroup extends JSXBase.HTMLAttributes<HTMLCalciteActionGroupElement> {}
  interface CalciteActionPad extends JSXBase.HTMLAttributes<HTMLCalciteActionPadElement> {
    /**
    * Determines where the element will be displayed. side: dynamically left or right based on whether we're in a leading or trailing shell-panel. over: centered on top of trigger and covers trigger. anchor: dynamically above or below based on how close trigger is to top or bottom of window.
    */
    'placement'?: CalcitePlacement;
    /**
    * HTMLElement used to position this element according to the placement.
    */
    'positionElement'?: HTMLElement;
    /**
    * Used to set the component's color scheme.
    */
    'theme'?: CalciteTheme;
  }
  interface CalciteBlock extends JSXBase.HTMLAttributes<HTMLCalciteBlockElement> {
    /**
    * When true, this block will be collapsible.
    */
    'collapsible'?: boolean;
    /**
    * Block heading.
    */
    'heading'?: string;
    /**
    * Emitted when the header has been clicked.
    */
    'onCalciteBlockToggle'?: (event: CustomEvent<any>) => void;
    /**
    * When true, the block's content will be displayed.
    */
    'open'?: boolean;
    /**
    * Block summary.
    */
    'summary'?: string;
    /**
    * Tooltip used for the toggle when expanded.
    */
    'textCollapse'?: string;
    /**
    * Tooltip used for the toggle when collapsed.
    */
    'textExpand'?: string;
    /**
    * Used to set the component's color scheme.
    */
    'theme'?: CalciteTheme;
  }
  interface CalciteBlockSection extends JSXBase.HTMLAttributes<HTMLCalciteBlockSectionElement> {
    /**
    * Emitted when the header has been clicked.
    */
    'onCalciteBlockSectionToggle'?: (event: CustomEvent<any>) => void;
    /**
    * When true, the block's section content will be displayed.
    */
    'open'?: boolean;
    /**
    * Text displayed in the button.
    */
    'text'?: string;
    /**
    * Tooltip used for the toggle when expanded.
    */
    'textCollapse'?: string;
    /**
    * Tooltip used for the toggle when collapsed.
    */
    'textExpand'?: string;
  }
  interface CalciteDemoNav extends JSXBase.HTMLAttributes<HTMLCalciteDemoNavElement> {
    'pageId'?: string;
  }
  interface CalciteExample extends JSXBase.HTMLAttributes<HTMLCalciteExampleElement> {
    'onCalciteExampleEvent'?: (event: CustomEvent<any>) => void;
    'someProp'?: boolean;
    'textMyString'?: string;
  }
  interface CalciteFloatingPanel extends JSXBase.HTMLAttributes<HTMLCalciteFloatingPanelElement> {
    /**
    * Panel heading
    */
    'heading'?: string;
    /**
    * Determines where the element will be displayed. side: dynamically left or right based on whether we're in a leading or trailing shell-panel. over: centered on top of trigger and covers trigger. anchor: dynamically above or below based on how close trigger is to top or bottom of window.
    */
    'placement'?: CalcitePlacement;
    /**
    * HTMLElement used to position this element according to the placement.
    */
    'positionElement'?: HTMLElement;
  }
  interface CalciteFlow extends JSXBase.HTMLAttributes<HTMLCalciteFlowElement> {
    /**
    * Used to set the component's color scheme.
    */
    'theme'?: CalciteTheme;
  }
  interface CalciteFlowItem extends JSXBase.HTMLAttributes<HTMLCalciteFlowItemElement> {
    /**
    * Heading text.
    */
    'heading'?: string;
    /**
    * Opens the action menu.
    */
    'menuOpen'?: boolean;
    /**
    * Emitted when the back button has been clicked.
    */
    'onCalciteFlowItemBackClick'?: (event: CustomEvent<any>) => void;
    /**
    * Shows a back button in the header.
    */
    'showBackButton'?: boolean;
    /**
    * 'Back' text string.
    */
    'textBack'?: string;
    /**
    * 'Close' text string.
    */
    'textClose'?: string;
    /**
    * 'Open' text string.
    */
    'textOpen'?: string;
    /**
    * Used to set the component's color scheme.
    */
    'theme'?: CalciteTheme;
  }
  interface CalciteShell extends JSXBase.HTMLAttributes<HTMLCalciteShellElement> {
    /**
    * Used to set the component's color scheme.
    */
    'theme'?: CalciteTheme;
  }
  interface CalciteShellPanel extends JSXBase.HTMLAttributes<HTMLCalciteShellPanelElement> {
    /**
    * Hide the content panel.
    */
    'collapsed'?: boolean;
    /**
    * Arrangement of the component.
    */
    'layout'?: CalciteLayout;
  }
  interface CalciteTip extends JSXBase.HTMLAttributes<HTMLCalciteTipElement> {
    /**
    * The heading of the tip.
    */
    'heading'?: string;
    /**
    * Indicates whether the tip can be dismissed.
    */
    'nonDismissible'?: boolean;
    /**
    * The local storage id used for an instance of a tip.
    */
    'storageId'?: string;
    /**
    * Alternate text for closing the tip.
    */
    'textClose'?: string;
    /**
    * Alternate text for description of the thumbnail.
    */
    'textThumbnail'?: string;
    /**
    * Used to set the component's color scheme.
    */
    'theme'?: CalciteTheme;
    /**
    * A string of the path to the thumbnail.
    */
    'thumbnail'?: string;
  }
  interface CalciteTipGroup extends JSXBase.HTMLAttributes<HTMLCalciteTipGroupElement> {
    /**
    * The title used for all nested tips.
    */
    'textGroupTitle'?: string;
  }
  interface CalciteTipManager extends JSXBase.HTMLAttributes<HTMLCalciteTipManagerElement> {
    /**
    * Alternate text for closing the Tip Manager.
    */
    'textClose'?: string;
    /**
    * The default group title for the Tip Manager.
    */
    'textDefaultTitle'?: string;
    /**
    * Alternate text for navigating to the next tip.
    */
    'textNext'?: string;
    /**
    * Label that appears on hover of pagination icon.
    */
    'textPaginationLabel'?: string;
    /**
    * Alternate text for navigating to the previous tip.
    */
    'textPrevious'?: string;
    /**
    * Used to set the component's color scheme.
    */
    'theme'?: CalciteTheme;
  }

  interface IntrinsicElements {
    'calcite-action': CalciteAction;
    'calcite-action-bar': CalciteActionBar;
    'calcite-action-group': CalciteActionGroup;
    'calcite-action-pad': CalciteActionPad;
    'calcite-block': CalciteBlock;
    'calcite-block-section': CalciteBlockSection;
    'calcite-demo-nav': CalciteDemoNav;
    'calcite-example': CalciteExample;
    'calcite-floating-panel': CalciteFloatingPanel;
    'calcite-flow': CalciteFlow;
    'calcite-flow-item': CalciteFlowItem;
    'calcite-shell': CalciteShell;
    'calcite-shell-panel': CalciteShellPanel;
    'calcite-tip': CalciteTip;
    'calcite-tip-group': CalciteTipGroup;
    'calcite-tip-manager': CalciteTipManager;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


