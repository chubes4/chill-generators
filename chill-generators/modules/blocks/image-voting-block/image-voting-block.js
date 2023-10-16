// Import necessary dependencies

// Define a block rendering function for the front end
function renderImageVotingBlockFrontend(attributes) {
    // Implement logic for rendering the block on the front end based on attributes
    if (attributes.imageURL) {  // Renamed from mediaID to imageURL
        return (
            wp.element.createElement('div', null,
                wp.element.createElement('img', { src: attributes.imageURL, alt: 'Selected Image' }),  // Use imageURL
                wp.element.createElement('button', { className: 'floating-button' }, 'Vote')
            )
        );
    }
    return null; // Return null if there's no image URL
}


// Register a custom block renderer for your block
wp.hooks.addFilter('blocks.getSaveElement', 'chill-generators/image-voting', function (element, blockType, attributes) {
    if (blockType.name === 'chill-generators/image-voting') {
        const renderedBlock = renderImageVotingBlockFrontend(attributes);
        // Replace '.your-block-container-selector' with '.image-voting-container'
        if (renderedBlock) {
            jQuery('.image-voting-container').html(renderedBlock);
        }
    }
    return element;
});
