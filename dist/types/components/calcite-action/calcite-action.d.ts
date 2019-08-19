import { CalciteTheme } from "../interfaces";
export declare class CalciteAction {
    /**
     * Indicates whether the action is highlighted.
     */
    active: boolean;
    /**
     * Compact mode is used internally by components to reduce side padding, e.g. calcite-block-section.
     */
    compact: boolean;
    /**
     * Disabled is used to prevent the action from occurring.
     */
    disabled: boolean;
    /**
     * Indicates unread changes.
     */
    indicator: boolean;
    /**
     * Label of the action, exposed on hover.
     */
    label: string;
    /**
     * Text that accompanies the action icon.
     */
    text: string;
    /**
     * Indicates whether the text is displayed.
     */
    textEnabled: boolean;
    /**
     * Used to set the component's color scheme.
     */
    theme: CalciteTheme;
    el: HTMLElement;
    render(): any;
}
