import React from 'react';
import { Row, Col } from 'antd';

function AppAbout() {
    return (
        <div className="block aboutBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, dolore?</p>
                </div>
                <div className="contentHolder">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel exercitationem nisi molestias impedit aut eaque voluptatem odio neque vero consectetur officia, esse maxime hic quas. Laborum a omnis odio impedit at, laudantium magni atque dignissimos? Assumenda omnis eveniet necessitatibus dolorum, accusamus quod dolor amet, possimus laborum, officiis sunt aspernatur praesentium.</p>
                </div>
                <Row gutter={[16, 16]}>
                    <Col span={8}>
                        <div className="content">
                            <div className="icon">
                                <i className="fas fa-chart-pie"></i>
                            </div>
                            <h3>High Performance</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam aperiam cum a, ipsum id totam quae! Accusantium eveniet voluptatum fugit.</p>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="content">
                            <div className="icon">
                                <i className="fas fa-desktop"></i>
                            </div>
                            <h3>Flat Design</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam aperiam cum a, ipsum id totam quae! Accusantium eveniet voluptatum fugit.</p>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="content">
                            <div className="icon">
                                <i className="fas fa-database"></i>
                            </div>
                            <h3>Simlified Workflow</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam aperiam cum a, ipsum id totam quae! Accusantium eveniet voluptatum fugit.</p>
                        </div>
                    </Col>
                </Row>
            </div>

        </div>
    );
}

export default AppAbout;