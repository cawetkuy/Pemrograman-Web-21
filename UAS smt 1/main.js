const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'nano',
    default: 'white', 

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            input: true,
            clear: true,
            save: true
        }
    }
});

pickr.on('change', (color, instance) => {
    const rgbaColor = color.toRGBA().toString();
    console.log(rgbaColor);
})
