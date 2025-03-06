import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
var speakerList = require('./speakers/speakerInfo.json')


class About extends React.Component{   

    options = {
        loop: true,
        center: false,
        items: 2,
        margin: 0,
        autoplay: true,
        dots: false,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        margin: 40,
    };
    

    
    render(){
        const eCurrent=[];
        for (var i = 0; i < speakerList.length; i++)
            {                    
                if(speakerList[i].year == "2025")
                    eCurrent.push(speakerList[i])
            }
        return (
        <div>
                <div className="nextBG">
                    <iframe 
                    src="https://spectacular-cupcake-4659e6.netlify.app/index6"
                    allowfullscreen></iframe>
                </div>

            <section className="about-us-countdown-area section-padding-100-0 about-section nextExplainArea" id="about">

                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-12">
                        <div className="about-content-text mb-80 \">
                            {/* <h6 className="wow fadeInUp" data-wow-delay="300ms">Tedxiimbangalore</h6> */}
                            <h3 className="wow fadeInUp " data-wow-delay="300ms">Roots<span className='theRed'> & </span>Wings</h3>
                            <p className="wow fadeInUp" data-wow-delay="300ms">
                                The theme "Roots & Wings" embodies the delicate dance between heritage and aspiration. It speaks to the duality of our human experience—grounded in our past, yet driven by an innate desire to soar. Roots represent the foundation upon which we stand: our values, traditions, and past experiences offering strength and clarity. Wings symbolize our yearning for growth, innovation, and the courage to pursue uncharted paths fueling growth and transformation. 
                            </p>
                            <p className="wow fadeInUp" data-wow-delay="300ms">
                            At TEDxIIMBangalore, we explore this dynamic interplay. Through diverse perspectives and compelling stories, we will explore how some draw strength from their past while others find wings through bold ideas and personal evolution. Whether grounded in deep roots or driven by the desire to soar, our speakers will reflect on how the balance between anchoring and flight empowers us to redefine our paths.
                            </p>
                            <p className="wow fadeInUp" data-wow-delay="300ms">
                            This theme invites us to contemplate the delicate balance between honoring our past and daring to transcend it. It’s a journey of self-discovery, where we navigate the tension between stability and evolution. "Roots & Wings" reminds us that true growth lies not in where we begin, but in the heights we dare to reach.
                            </p>
                        
                        </div>
                        </div>


                    </div>
                    <div className="row">
                    <div className="col-12">
                    <div className="section-heading text-center wow fadeInUp" data-wow-delay="300ms">
                        <h4>Our Speakers</h4>
                        <p>Here is the line up of speakers for the 2025 edition</p>

                    </div>
                    </div>
                </div>
                {
                        eCurrent.map(speaker =>{
                            return  <div className="row">
                                        <div className="col-12 col-sm-6 col-lg-4">
                                            <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp" data-wow-delay="300ms">

                                                <div className="speaker-single-thumb">
                                                <img src={speaker.img} alt />
                                                </div>

                                                {/* <div className="social-info">
                                                <a href="#"><i className="zmdi zmdi-facebook"></i></a>
                                                <a href="#"><i className="zmdi zmdi-instagram"></i></a>
                                                <a href="#"><i className="zmdi zmdi-twitter"></i></a>
                                                <a href="#"><i className="zmdi zmdi-linkedin"></i></a>
                                                </div> */}

                                                <div className="speaker-info">
                                                <h5>{speaker.name}</h5>
                                                <p>{speaker.designation}</p>
                                                </div>
                                            </div>
                                        </div>

                                    
                                        <div className="col-12 col-sm-6 col-lg-8">
                                            <div className="single-speaker-area  wow fadeInUp" data-wow-delay="300ms">
                                                <div className="speaker-info-card">
                                                    {/* <h5>Frances Alvarado</h5>
                                                    <span>UX Manager</span> */}
                                                    <p>{speaker.intro}   </p> 
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                        })
                    }
                </div>

               
            </section>
            




            







            
        </div>
        )
    };
}
export default About;
