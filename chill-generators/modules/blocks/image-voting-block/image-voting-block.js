// Import necessary dependencies

// Define a block rendering function for the front end
function renderImageVotingBlockFrontend(attributes) {
    // Implement logic for rendering the block on the front end based on attributes
    if (attributes.imageURL) {
        return (
            <div>
                <img src={attributes.imageURL} alt="Selected Image" />
                <button className="floating-button">Vote</button>
            </div>
        );
    }
    return null; // Return null if there's no image URL
}

// Register a custom block renderer for your block
wp.hooks.addFilter('blocks.getSaveElement', 'chill-generators/image-voting', function (element, blockType, attributes) {
    if (blockType.name === 'chill-generators/image-voting') {
        return renderImageVotingBlockFrontend(attributes);
    }
    return element;
});
