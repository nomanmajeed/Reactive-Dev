import React from 'react';
import { Carousel, Button } from 'antd';

function AppHero() {
    return (
        <div className="heroBlock">
            <Carousel>
                <div className="container-fluid">
                    <div className="content">
                        <h3>Title</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sapiente aperiam reiciendis consectetur ea possimus minima voluptate repellendus qui. Quaerat odit nesciunt dicta id vero laboriosam reiciendis nisi, perferendis hic maxime iste voluptatem voluptas veniam non at eius blanditiis eveniet! Unde totam quis provident eligendi cupiditate molestiae dolorum error modi.
                        </p>
                        <div className="btnHolder">
                            <Button type="primary" size="large">Learn More</Button>
                            <Button size="large"><i className="fas fa-desktop"></i> Watch Demo</Button>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}

export default AppHero;