class Render {
    /** @var {Array} */
    __IMAGES = [
        `82254.jpg`,
        `110593-blue-and-yellow-blurred-background-vector.jpg`,
        `blurred-bokeh-background_36923-877.jpg`,
        `fEys5B.jpg`,
        `papers.co-sn50-green-night-blur-gradation-33-iphone6-wallpaper`
    ];

    /**
     * Constructor Method.
     * 
     * @param {Object} Args
     */
    constructor(Args = {}) {
        this.__ARGS = Args;
    }

    /**
     * Print PDF.
     * 
     * @param {void}
     * 
     * @return {String}
     */
    pdf() {
        return this.__ARGS.globals.__PDF;
    }

    /**
     * Change Background Image.
     * 
     * @param {void}
     * 
     * @return {void}
     */
    art() {
        return this.__IMAGES;
    }

    /**
     * Print CSV.
     * 
     * @param {void}
     * 
     * @return {String}
     */
    csv() {
        return this.__ARGS.globals.__CSV;
    }

    /**
     * Validate if the number of indexes in header and body content are equals.
     * 
     * @param {Object} Fields 
     * @param {Object} Dataset
     * 
     * @return {Boolean}
     */
    isDatasetCorrect(Fields = {}, Dataset = {}) {
        const __HEADER_LENGTH = Object.keys(Fields).length;

        Dataset.forEach((Element, Index, Array) => {
            if (Object.keys(Element).length !== __HEADER_LENGTH) {
                return false;
            }
        });

        return true;
    }

    main() {
        const main = document.createElement("div");
        main.class = "blurry box";
        document.body.appendChild(main);
    }
}