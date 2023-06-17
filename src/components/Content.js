import { Carousel } from "react-bootstrap"
import gambar1 from "../assets/img/c1.jpeg"
import gambar2 from "../assets/img/c2.jpeg"
import gambar3 from "../assets/img/c3.jpeg"
import gambar4 from "../assets/img/c4.jpeg"
import gambar5 from "../assets/img/c5.jpeg"
import gambar6 from "../assets/img/c6.jpeg"
import gambar7 from "../assets/img/c7.jpeg"

const Content = () => {
    return (
        <Carousel fade className="carousell d-flex">
            <Carousel.Item className="carouselImg">
                <img
                    className="d-block w-100"
                    src={gambar1}
                    alt="First slide"
                    height="auto"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselImg">
                <img
                    className="d-block w-100"
                    src={gambar2}
                    alt="Second slide"
                    height="auto"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselImg">
                <img
                    className="d-block w-100"
                    src={gambar3}
                    alt="Third slide"
                    height="auto"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselImg">
                <img
                    className="d-block w-100"
                    src={gambar4}
                    alt="Third slide"
                    height="auto"
                />
                <Carousel.Caption>
                    <h3>Fourth slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselImg">
                <img
                    className="d-block w-100"
                    src={gambar5}
                    alt="Third slide"
                    height="auto"
                />
                <Carousel.Caption>
                    <h3>Fifth slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselImg">
                <img
                    className="d-block w-100"
                    src={gambar6}
                    alt="Third slide"
                    height="auto"
                />
                <Carousel.Caption>
                    <h3>Sixth slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselImg">
                <img
                    className="d-block w-100"
                    src={gambar7}
                    alt="Third slide"
                    height="auto"
                />
                <Carousel.Caption>
                    <h3>Seventh slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Content