const { registerBlockType } = wp.blocks;
const { TextControl, Button } = wp.components;

registerBlockType('chill-generators/image-voting', {
    title: 'Image Voting Block',
    icon: 'thumbs-up', // Choose an appropriate dashicon
    category: 'common',
    attributes: {
        blockTitle: {
            type: 'string',
            default: 'Vote for this image'
        },
        imageURL: {
            type: 'string',
            default: ''
        }
    },
    edit: function(props) {
        const { attributes: { blockTitle, imageURL }, setAttributes } = props;

        return (
            <div>
                <TextControl
                    label="Block Title"
                    value={blockTitle}
                    onChange={(newTitle) => setAttributes({ blockTitle: newTitle })}
                />
                <TextControl
                    label="Image URL"
                    value={imageURL}
                    onChange={(newURL) => setAttributes({ imageURL: newURL })}
                />
                <Button isPrimary onClick={() => {
                    // Implement logic to preview the image
                }}>
                    Preview Image
                </Button>
            </div>
        );
    },
    save: function() {
        // This block will be rendered server-side
        return null;
    }
});
