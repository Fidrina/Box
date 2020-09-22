class Box {
    /** @var {Integer} */
    __DEFAULT_TOP_AND_LEFT_DISTANCE = 50;

    /** @var {Integer} */
    TOP = this.__DEFAULT_TOP_DISTANCE;

    /** @var {Integer} */
    LEFT = this.__DEFAULT_LEFT_DISTANCE;

    /** @var {Integer} */
    __CURRENT_LEFT = 0;

    /** @var {Integer} */
    __CURRENT_TOP = 0;

    /** @var {Boolean} */
    CLICKED = false;

    /**
     * Constructor Method.
     * 
     * @param {Object} Args
     */
    constructor() {
        this.__ELEMENT = document.querySelector(".box");
    }

    /**
     * Run Method.
     * 
     * @param {void}
     * 
     * @return {void}
     */
    run() {
        const _this = this;

        document.querySelectorAll('.cursor').forEach(Element => {
            Element.addEventListener('mousedown', e => {
                _this.__CURRENT_LEFT = _this.left();
                _this.__CURRENT_TOP = _this.top();

                _this.LEFT = e.clientX;
                _this.TOP = e.clientY;

                _this.CLICKED = true;
            });
        });

        window.addEventListener("mouseup", e => {
            _this.CLICKED = false;
        });

        window.addEventListener('mousemove', e => {
            if (_this.CLICKED == true) {
                _this.__ELEMENT.style.top = _this.pixels(_this.__CURRENT_TOP + e.clientY - _this.TOP);
                _this.__ELEMENT.style.left = _this.pixels(_this.__CURRENT_LEFT + e.clientX - _this.LEFT);
            }
        });

        this.getAllImages().forEach(Element => {
            Element.addEventListener('mousedown', e => {
                Element.setAttribute('draggable', false);
            });
        });
    }

    /**
     * Get TOP distance.
     * 
     * @param {void}
     * 
     * @return {Integer}
     */
    top() {
        return (parseInt(this.__ELEMENT.style.top, 10) > 0 === true) ? parseInt(this.__ELEMENT.style.top, 10) : this.__DEFAULT_TOP_AND_LEFT_DISTANCE;
    }

    /**
     * Get LEFT distance.
     * 
     * @param {void}
     * 
     * @return {Integer}
     */
    left() {
        return (parseInt(this.__ELEMENT.style.left, 10) > 0 === true) ? parseInt(this.__ELEMENT.style.left, 10) : this.__DEFAULT_TOP_AND_LEFT_DISTANCE;
    }

    /**
     * Converts an integer to pixels unity.
     * 
     * @param {Integer} arg
     * 
     * @return {String}
     */
    pixels(n) {
        return `${n}px`;
    }

    /**
     * Images Getter.
     * 
     * @param {void}
     * 
     * @return {Integer}
     */
    getAllImages() {
        return document.querySelectorAll('.blurry img');;
    }

    /**
     * Closes BOX.
     * 
     * @param {void}
     * 
     * @return {void}
     */
    close() {
        this.__ELEMENT.remove();
    }
};