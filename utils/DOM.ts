export class CloseOnEscapeOrClickOutside {
    private readonly escHandler: (event: KeyboardEvent) => void;
    private readonly clickHandler: (event: Event) => void;

    constructor(targetElement: Element | null, closeFunction: Function) {
        if (!targetElement) throw new Error('\'DEBUG: targetElement is null or undefined for closeOnClickOutside function\'')

        this.clickHandler = (event: Event) => {
            let isClickInside = targetElement.contains(event.target as Node);
            if (!isClickInside) {
                closeFunction();
            }
        }

        this.escHandler = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeFunction();
            }
        }

        document.addEventListener('keydown', this.escHandler)
        document.addEventListener('click', this.clickHandler)
    }

    remove() {
        document.removeEventListener('keydown', this.escHandler)
        document.removeEventListener('click', this.clickHandler)
    }
}
