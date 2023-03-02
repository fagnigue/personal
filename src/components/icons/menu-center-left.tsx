import type { IconProps } from "./icon-props-interface";

export const MenuCenterLeftIcon = ((props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={props.class} onClick$={() => props.menuSignal!.value = !props.menuSignal!.value}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
    </svg>
))