import React from 'react'
import './VMedia.scss'

const VMedia = ({source, headline})=> {
    return (
        <div className="wrapperPlayVid">
            <div className="kolumVideo">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/V4pM1xY9ntY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="descVideo">
                <div className="textTop">
                    <small>Admin PDI Perjuangan | 1 Januari 2019</small>
                    <div className="countLove">
                        <i class="fa fa-heart" aria-hidden="true"></i>
                        <small>0</small>
                    </div>
                </div>
                <h5 className="headline">{headline}</h5>
                <p className="descline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident obcaecati, optio hic sequi similique tenetur ratione cumque molestias quaerat porro deleniti minus, laudantium deserunt, velit quia aliquid eveniet alias doloribus!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident obcaecati, optio hic sequi similique tenetur ratione cumque molestias quaerat porro deleniti minus, laudantium deserunt, velit quia aliquid eveniet alias doloribus!</p>
                <div className="share">
                    <small className="marginShare">SHARE : </small>
                    <i class="fa fa-facebook marginShare" aria-hidden="true"></i>
                    <i class="fa fa-twitter marginShare" aria-hidden="true"></i>
                    <i class="fa fa-instagram marginShare" aria-hidden="true"></i>
                    <i class="fa fa-whatsapp marginShare" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    )
}

export default VMedia