import { Carousel } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import pic1 from "../assets/drink1.jpg"
import pic2 from "../assets/drink2.jpg"
import pic3 from "../assets/drink3.jpg"
export default function CustomCarousel() {
    return (
        <Carousel>
             <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pic1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Primer Drink</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pic2}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Segundo Drink</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pic3}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Tercer Drink</h3>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    )
}
