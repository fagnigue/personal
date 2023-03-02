import type { Signal } from "@builder.io/qwik";

export interface IconProps {
    class: string;
    strokeLinejoin?: string;
    strokeLinecap?: string;
    menuSignal?: Signal<boolean>;
}