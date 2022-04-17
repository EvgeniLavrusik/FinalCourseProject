export const validationComponents = (nameComponent:string | undefined) => {
    switch (nameComponent) {
        case 'div':
            return 'blocks';
        case 'input':
            return 'inputs';
        case 'button':
            return 'buttons';
        default:
            return '';
     }
 }