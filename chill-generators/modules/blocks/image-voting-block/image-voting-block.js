const { registerBlockType } = wp.blocks;

registerBlockType('chill-generators/image-voting', {
    title: 'Image Voting Block',
    icon: 'thumbs-up',
    category: 'common',
    attributes: {
        // Define any custom attributes here
    },
    edit: function(props) {
        // This is where you create the editor interface
        return "Image Voting Block Editor";
    },
    save: function() {
        // This is what gets saved to the post content
        return "Image Voting Block Frontend";
    }
});
