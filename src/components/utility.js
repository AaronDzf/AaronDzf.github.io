import React from "react";
import { PropTypes } from "prop-types"

export function GetWindowWidth() {
    if (typeof window === 'undefined') {
        return null;
    }
    return window.innerWidth;
}


export function YoutubeEmbed(props) {
    const YoutubeEmbed = () => (
        <div className="video-responsive">
            <iframe
                width={props.width}
                height={props.height}
                src={`https://www.youtube.com/embed/${props.embedId}`}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    );

    YoutubeEmbed.propTypes = {
        embedId: PropTypes.string.isRequired
    };

    return YoutubeEmbed();
}


export function importImages(context) {
    let images = {}
    context.keys().map((item, index) => {images[item.replace('./','')] = context(item)});
    return images
}
