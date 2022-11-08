import Carousel from 'react-bootstrap/Carousel';

export function Header() {
    return (
        <Carousel>
            <Carousel.Item>
                <div className="d-block w-100 bg-black" style={{height: "400px"}}>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-block w-100 bg-info" style={{height: "400px"}}>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-block w-100 bg-danger" style={{height: "400px"}}>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}
