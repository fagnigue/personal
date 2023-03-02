import type { IconProps } from "./icon-props-interface";

export const CloseIcon = ((props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={props.class} onClick$={() => props.menuSignal!.value = !props.menuSignal!.value}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
));