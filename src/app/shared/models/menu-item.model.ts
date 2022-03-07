import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface MenuItem {
    name: string;
    icon: IconDefinition;
    route: string;
}