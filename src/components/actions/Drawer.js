import { getAllState } from '@rootzjs/core';
// Drawer Actions
export const onSectionClick = (item, history) => {
        console.log(getAllState());
        history.push(item.toLowerCase().replace(/ /g, "-"));
        return {
                isMenuOpen: false,
                activeSection: item
        };
}
export const onMenuClose = () => {
        return {
                isMenuOpen: false
        };
}
export const onMenuOpen = () => {
        return {
                isMenuOpen: true
        };
}