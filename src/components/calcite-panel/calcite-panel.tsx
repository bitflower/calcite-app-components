import { Component, Element, Event, EventEmitter, Host, Prop, h } from "@stencil/core";
import { CSS, TEXT } from "./resources";
import { getElementDir } from "../utils/dom";
import classnames from "classnames";
import { CSS_UTILITY } from "../utils/resources";
import { VNode } from "@stencil/core/dist/declarations";
import { CalciteTheme } from "../interfaces";
import CalciteIcon from "../utils/CalciteIcon";
import { x16 } from "@esri/calcite-ui-icons";

const SLOTS = {
  headerContent: "header-content",
  headerLeadingContent: "header-leading-content",
  headerTrailingContent: "header-trailing-content",
  footer: "footer"
};

@Component({
  tag: "calcite-panel",
  styleUrl: "calcite-panel.scss",
  shadow: true
})
export class CalcitePanel {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /**
   * Displays a close button in the trailing side of the header.
   */
  @Prop({ reflect: true }) dismissible = false;

  /**
   * 'Close' text string for the close button.
   */
  @Prop() textClose = TEXT.close;

  /**
   * Used to set the component's color scheme.
   */
  @Prop({ reflect: true }) theme: CalciteTheme;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalcitePanelElement;

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  /**
   * Emitted when the close button has been clicked.
   */

  @Event() calcitePanelDismiss: EventEmitter;

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  dismiss = (): void => {
    this.calcitePanelDismiss.emit();
  };

  panelKeyUpHandler = (event: KeyboardEvent): void => {
    if (event.key === "Escape") {
      this.dismiss();
    }
  };

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  renderHeaderLeadingContent(): VNode {
    const hasHeaderLeadingContent = this.el.querySelector(`[slot=${SLOTS.headerLeadingContent}]`);

    return hasHeaderLeadingContent ? (
      <div class={CSS.headerLeadingContent}>
        <slot name={SLOTS.headerLeadingContent} />
      </div>
    ) : null;
  }

  renderHeaderContent(): VNode {
    const hasHeaderContent = this.el.querySelector(`[slot=${SLOTS.headerContent}]`);

    return hasHeaderContent ? (
      <div class={CSS.headerContent}>
        <slot name={SLOTS.headerContent} />
      </div>
    ) : null;
  }

  renderHeaderTrailingContent(): VNode {
    const { dismiss, dismissible, el, textClose } = this;

    const dismissibleNode = dismissible ? (
      <calcite-action aria-label={textClose} text={textClose} onClick={dismiss}>
        <CalciteIcon size="16" path={x16} />
      </calcite-action>
    ) : null;

    const slotNode = <slot name={SLOTS.headerTrailingContent} />;

    const hasContent = dismissible || el.querySelector(`[slot=${SLOTS.headerTrailingContent}]`);

    return hasContent ? (
      <div key="trailing-content" class={CSS.headerTrailingContent}>
        {slotNode}
        {dismissibleNode}
      </div>
    ) : null;
  }

  renderHeader(): VNode {
    const headerLeadingContentNode = this.renderHeaderLeadingContent();
    const headerContentNode = this.renderHeaderContent();
    const headerTrailingContentNode = this.renderHeaderTrailingContent();

    const canDisplayHeader =
      headerContentNode || headerLeadingContentNode || headerTrailingContentNode;

    return canDisplayHeader ? (
      <header class={CSS.header}>
        {headerLeadingContentNode}
        {headerContentNode}
        {headerTrailingContentNode}
      </header>
    ) : null;
  }

  renderFooter(): VNode {
    const { el } = this;

    const hasFooter = el.querySelector(`[slot=${SLOTS.footer}]`);

    return hasFooter ? (
      <footer class={CSS.footer}>
        <slot name={SLOTS.footer} />
      </footer>
    ) : null;
  }

  renderContent(): VNode {
    return (
      <section class={CSS.contentContainer}>
        <slot />
      </section>
    );
  }

  render() {
    const { dismissible, el, panelKeyUpHandler } = this;

    const rtl = getElementDir(el) === "rtl";

    return (
      <Host>
        <article
          onKeyUp={panelKeyUpHandler}
          tabIndex={dismissible ? 0 : -1}
          class={classnames(CSS.container, {
            [CSS_UTILITY.rtl]: rtl
          })}
        >
          {this.renderHeader()}
          {this.renderContent()}
          {this.renderFooter()}
        </article>
      </Host>
    );
  }
}
