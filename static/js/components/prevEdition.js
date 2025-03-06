import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const speakerList = require('./speakers/speakerInfo.json');

class PrevEdition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            e2019: [],
            eCurrent: []
        };
    }

    componentDidMount() {
        const e2019 = [];
        const eCurrent = [];

        for (let i = 0; i < speakerList.length; i++) {
            if (speakerList[i].year === "2019") e2019.push(speakerList[i]);
            if (speakerList[i].year === "2024") eCurrent.push(speakerList[i]);
        }

        this.setState({ e2019, eCurrent });
    }

    
    render() {
        const { e2019, eCurrent } = this.state;
        const options = {
            loop: true,
            center: false,
            items: 2,
            autoplay: true,
            dots: false,
            autoplayTimeout: 8500,
            smartSpeed: 450,
            nav: false,
            margin: 40
        };
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000, // 3 seconds per slide
          };
          const images = [
            "/img/slider/1.webp",
            "/img/slider/2.webp",
            "/img/slider/3.webp",
            "/img/slider/4.webp",
            "/img/slider/5.webp",
            "/img/slider/6.webp",
            "/img/slider/7.webp",
            "/img/slider/8.webp",
          ];
        return (
            <div>
                <div className="nextBG">
                    <iframe
                        src="https://themebgylp.tedxiimbangalore.com/"
                        title="TedxIIMB 2023 theme"
                        allowFullScreen
                    ></iframe>
                </div>

                <section className="about-us-countdown-area section-padding-100-0 about-section nextExplainArea" id="about">

                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-12">
                        <div className="about-content-text mb-80 \">
                            {/* <h6 className="wow fadeInUp" data-wow-delay="300ms">Tedxiimbangalore</h6> */}
                            <h3 className="wow fadeInUp " data-wow-delay="300ms">2024 : Nurturing the Ne<span className='theRed'>X</span>t</h3>
                            <p className="wow fadeInUp" data-wow-delay="300ms">
                                The theme <strong>"Nurturing the NeXt"</strong> celebrated growth and innovation, guided by lessons from the past. It emphasised that success requires continuous nurturing of oneself and empowering the next generation of thinkers, innovators, and leaders to remain at the forefront of progress.
                            </p>
                            <p className="wow fadeInUp" data-wow-delay="300ms">
                                Held on <strong>January 13, 2024</strong>, at IIM Bangalore as part of its 50th-year celebration, this edition featured <strong>11 exceptional speakers</strong> sharing transformative ideas and stories. Their insights highlighted the importance of mentorship, knowledge transfer, and creating an environment for innovation while reflecting on past learnings.
                            </p>
                            <p className="wow fadeInUp" data-wow-delay="300ms">
                                The event inspired participants to explore new possibilities while staying grounded in values and experiences. By celebrating the journeys of trailblazers, TEDxIIMBangalore encouraged the audience to nurture future generations and continue building a legacy of enduring success and innovation.
                            </p>

                        </div>
                        </div>
                    </div>
                    

                    <div className="sliderHighlights">
                                <div className="col-12">
                                    <div className="section-heading text-center wow fadeInUp" data-wow-delay="300ms">
                                    <h4>Highlights</h4>
                                    </div>
                                </div>
                                <div className="slider-container">
                                            <style>
                                                {`
                                                .slider-container {
                                                    width: 70%;
                                                    margin: 0 auto;
                                                }

                                                .slider-image {
                                                    width: 100%;
                                                    aspect-ratio: 3 / 2;
                                                    object-fit: cover;
                                                }
                                                `}
                                            </style>
                                            <Slider {...settings}>
                                                {images.map((src, index) => (
                                                <div key={index}>
                                                    <img src={src} alt={`Slide ${index + 1}`} className="slider-image" />
                                                </div>
                                                ))}
                                            </Slider>
                                            </div>
                                                
                    </div>
                            <br></br><br></br><br></br><br></br>
                    <div className="row">
                                <div className="col-12">
                                    <div className="section-heading text-center wow fadeInUp" data-wow-delay="300ms">
                                        {/* <h4>Past Speakers</h4> */}
                                        <h4>Speakers</h4>
                                        <p>Here is the lineup of speakers for the 2024 edition</p>
                                    </div>
                                </div>
                            </div>
                            {eCurrent.map((speaker, index) => (
                                <div className="row" key={`current-${index}`}>
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div
                                            className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp"
                                            data-wow-delay="300ms"
                                        >
                                            <div className="speaker-single-thumb">
                                                <img src={speaker.img} alt={speaker.name} />
                                            </div>
                                            <div className="speaker-info">
                                                <h5>{speaker.name}</h5>
                                                <p>{speaker.designation}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-8">
                                        <div
                                            className="single-speaker-area wow fadeInUp"
                                            data-wow-delay="300ms"
                                        >
                                            <div className="speaker-info-card">
                                                <p>{speaker.intro}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="row">
                                <div className="col-12">
                                    <div className="section-heading text-center wow fadeInUp" data-wow-delay="300ms">
                                        <h4>Past Speakers</h4>
                                        <p>These were our speakers in past years</p>
                                    </div>
                                </div>
                            </div>
                            {e2019.map((speaker, index) => (
                                <div className="row" key={`past-${index}`}>
                                    <div className="col-12 col-sm-6 col-lg-4">
                                        <div
                                            className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp"
                                            data-wow-delay="300ms"
                                        >
                                            <div className="speaker-single-thumb">
                                                <img src={speaker.img} alt={speaker.name} />
                                            </div>
                                            <div className="speaker-info">
                                                <h5>{speaker.name}</h5>
                                                <p>{speaker.year}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-8">
                                        <div
                                            className="single-speaker-area wow fadeInUp"
                                            data-wow-delay="300ms"
                                        >
                                            <div className="speaker-info-card">
                                                <p>{speaker.intro}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                </div>
            </section>
            </div>
        );
    }
}

export default PrevEdition;
