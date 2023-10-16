const { registerBlockType } = wp.blocks;
const { TextControl, Button } = wp.components;
const { MediaUpload } = wp.blockEditor;
const { createElement } = wp.element;

// ... (imports and attribute definitions)

registerBlockType('chill-generators/image-voting', {
    title: 'Image Voting Block',
    icon: 'thumbs-up',
    category: 'common',
    attributes: {
        blockTitle: {
            type: 'string',
            default: 'Vote for this image'
        },
        mediaID: {
            type: 'number',
            default: 0
        }
    },
    edit: function(props) {
        const { attributes: { blockTitle, mediaID }, setAttributes } = props;

        // Handle media selection
        const onSelectImage = function(media) {
            setAttributes({ mediaID: media.id });
        };

        return createElement('div', {},
            createElement(TextControl, {
                label: "Block Title",
                value: blockTitle,
                onChange: (newTitle) => setAttributes({ blockTitle: newTitle })
            }),
            createElement(MediaUpload, {
                onSelect: onSelectImage,
                type: "image",
                value: mediaID,
                render: ({ open }) => createElement(Button, {
                    isPrimary: true,
                    onClick: open
                }, "Select Image")
            })
        );
    },
    save: function() {
        return null;
    }
});
