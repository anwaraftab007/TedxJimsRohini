import React from 'react';
var team = require('./team/teamInfo.json')






class Team extends React.Component{   


    
    render(){

        const curation = [],ops=[],design=[],web=[],spons=[],social=[],core=[];
        for (var i = 0; i < team.length; i++)
            {
                if(team[i].team.includes("ops"))
                    ops.push(team[i])
                if(team[i].team.includes("curation"))
                    curation.push(team[i])
                if(team[i].team.includes("design"))
                    design.push(team[i])
                if(team[i].team.includes("web"))
                    web.push(team[i])
                if(team[i].team.includes("spons"))
                    spons.push(team[i])
                if(team[i].team.includes("social"))
                    social.push(team[i])
                if(team[i].team.includes("core"))
                    core.push(team[i])

            }

        return (
        <div>
{/* 
            <section className="about-us-countdown-area section-padding-100-0 about-section" id="about">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-12 col-md-6">
                        <div className="about-content-text mb-80">
                            <h6 className="wow fadeInUp" data-wow-delay="300ms">Tedxiimbangalore</h6>
                            <h3 className="wow fadeInUp" data-wow-delay="300ms">Who are we?</h3>
                            <p className="wow fadeInUp" data-wow-delay="300ms">We’re young and driven. We’re a passionate group of individuals with a love for stories. From believing in fairytales in our childhoods to now believing that sharing stories and journeys is what creates fairytales. We’re not only future business leaders, but also human beings who want to leave the world better than we found it. We believe in a continuous process of rebuilding and transforming ourselves as the world progresses, that is what we want to bring to the viewers through this edition of our TEDX. Remember, you only fail when you stop trying!</p>
                        
                        </div>
                        </div>


                    </div>
                </div>

               
            </section> */}
            <div className="nextBG">
                    <iframe 
                    src="https://teambgylp.tedxiimbangalore.com/"
                    allowfullscreen></iframe>
                </div>
            <section className="breadcrumb-area bg-img bg-gradient-overlay jarallax team-header-overlay"
                >
                <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-12 interTypeface">
                    <div className="breadcrumb-content ">
                        <h2 className="page-title  "><span className='theRed'>the Team</span></h2>
                        <p className="wow fadeInUp" data-wow-delay="300ms">We’re young and driven. We’re a passionate group of individuals with a love for stories. From believing in fairytales in our childhoods to now believing that sharing stories and journeys is what creates fairytales. We’re not only future business leaders, but also human beings who want to leave the world better than we found it. We believe in a continuous process of rebuilding and transforming ourselves as the world progresses, that is what we want to bring to the viewers through this edition of our TEDX. </p>
                    </div>
                    </div>
                </div>
                </div>
            </section>


            <section className="our-speaker-area section-padding-100 teamBG">
                <div className="container">
                    {/* Core team section */}
                    <div className='row justify-content-start'>
                        <div className='col-12 teamSectionPadding'>
                            <h1 className='interTypeface'>Core Team</h1>
                        </div>
                    </div>
                    <div className="row justify-content-start">
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp" data-wow-delay="300ms">

                                <div className="speaker-single-thumb">
                                <img src="img/team/1.webp" alt/>
                                </div>

                                {/* <div className="social-info">
                                <a href="#"><i className="zmdi zmdi-facebook"></i></a>
                                <a href="#"><i className="zmdi zmdi-instagram"></i></a>
                                <a href="#"><i className="zmdi zmdi-twitter"></i></a>
                                <a href="#"><i className="zmdi zmdi-linkedin"></i></a>
                                </div> */}

                                <div className="speaker-info">
                                    <h5>Vairagya Manewar</h5>
                                    <p>Lead Organizer</p>
                                </div>
                            </div>
                            <div className="team-info-card wow fadeInUp" data-wow-delay="300ms">
                                <p>Voyaging, Spirited, Sarcastic</p>     
                            </div>
                        </div>
                        {
                                core.map(member =>{
                                    return <div className="col-12 col-sm-6 col-lg-4">
                                                <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp" data-wow-delay="300ms">
                        
                                                    <div className="speaker-single-thumb">
                                                    <img src={member.img} alt/>
                                                    </div>
                        
                                                    {/* <div className="social-info">
                                                    <a href="#"><i className="zmdi zmdi-facebook"></i></a>
                                                    <a href="#"><i className="zmdi zmdi-instagram"></i></a>
                                                    <a href="#"><i className="zmdi zmdi-twitter"></i></a>
                                                    <a href="#"><i className="zmdi zmdi-linkedin"></i></a>
                                                    </div>
                         */}
                                                    <div className="speaker-info">
                                                    <h5>{member.name}</h5>
                                                    {/* <p>Product Lead</p> */}
                                                    </div>
                                                </div>
                                                <div className="team-info-card wow fadeInUp" data-wow-delay="300ms">
                                                    <p>{member.intro}</p>     
                                                  </div>
                                            </div>
                                })
                        } 
                        

                    </div>




                    {/* Curation&events team section */}
                    <div className='row justify-content-start'>
                        <div className='col-12 teamSectionPadding'>
                            <h1 className='interTypeface'>Curation team</h1>
                        </div>
                    </div>
                    <div className="row justify-content-start">
                        {
                                curation.map(member =>{
                                    return <div className="col-12 col-sm-6 col-lg-3 col-xl-3">
                                                <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp" data-wow-delay="300ms">
                        
                                                    <div className="speaker-single-thumb">
                                                    <img src={member.img} alt/>
                                                    </div>
                        
                                                    {/* <div className="social-info">
                                                    <a href="#"><i className="zmdi zmdi-facebook"></i></a>
                                                    <a href="#"><i className="zmdi zmdi-instagram"></i></a>
                                                    <a href="#"><i className="zmdi zmdi-twitter"></i></a>
                                                    <a href="#"><i className="zmdi zmdi-linkedin"></i></a>
                                                    </div>
                         */}
                                                    <div className="speaker-info">
                                                    <h5>{member.name}</h5>
                                                    {/* <p>Product Lead</p> */}
                                                    </div>
                                                </div>
                                            </div>
                                })
                        } 
                    </div>
                    {/* Graphics&Videography team section */}
                    <div className='row justify-content-start'>
                        <div className='col-12 teamSectionPadding'>
                            <h1 className='interTypeface'>Graphics team</h1>
                        </div>
                    </div>
                    <div className="row justify-content-start">
                    {
                                design.map(member =>{
                                    return <div className="col-12 col-sm-6 col-lg-3 col-xl-3">
                                                <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp" data-wow-delay="300ms">
                        
                                                    <div className="speaker-single-thumb">
                                                    <img src={member.img} alt/>
                                                    </div>
                        
                                                    {/* <div className="social-info">
                                                    <a href="#"><i className="zmdi zmdi-facebook"></i></a>
                                                    <a href="#"><i className="zmdi zmdi-instagram"></i></a>
                                                    <a href="#"><i className="zmdi zmdi-twitter"></i></a>
                                                    <a href="#"><i className="zmdi zmdi-linkedin"></i></a>
                                                    </div> */}
                        
                                                    <div className="speaker-info">
                                                    <h5>{member.name}</h5>
                                                    {/* <p>Product Lead</p> */}
                                                    </div>
                                                </div>
                                            </div>
                                })
                        } 
                    </div>
                    {/* Operations team section */}
                    <div className='row justify-content-start'>
                        <div className='col-12 teamSectionPadding'>
                            <h1 className='interTypeface'>Operations team</h1>
                        </div>
                    </div>
                    <div className="row justify-content-start">
                    {
                                ops.map(member =>{
                                    return <div className="col-12 col-sm-6 col-lg-3 col-xl-3">
                                                <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp" data-wow-delay="300ms">
                        
                                                    <div className="speaker-single-thumb">
                                                    <img src={member.img} alt/>
                                                    </div>
                        
                                                    {/* <div className="social-info">
                                                    <a href="#"><i className="zmdi zmdi-facebook"></i></a>
                                                    <a href="#"><i className="zmdi zmdi-instagram"></i></a>
                                                    <a href="#"><i className="zmdi zmdi-twitter"></i></a>
                                                    <a href="#"><i className="zmdi zmdi-linkedin"></i></a>
                                                    </div> */}
                        
                                                    <div className="speaker-info">
                                                    <h5>{member.name}</h5>
                                                    {/* <p>Product Lead</p> */}
                                                    </div>
                                                </div>
                                            </div>
                                })
                        } 

                        
                    </div>
                    {/* Social media team section */}
                    <div className='row justify-content-start'>
                        <div className='col-12 teamSectionPadding'>
                            <h1 className='interTypeface'>Social Media team</h1>
                        </div>
                    </div>
                    <div className="row justify-content-start">
                    {
                                social.map(member =>{
                                    return <div className="col-12 col-sm-6 col-lg-3 col-xl-3">
                                                <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp" data-wow-delay="300ms">
                        
                                                    <div className="speaker-single-thumb">
                                                    <img src={member.img} alt/>
                                                    </div>
                        
                                                    {/* <div className="social-info">
                                                    <a href="#"><i className="zmdi zmdi-facebook"></i></a>
                                                    <a href="#"><i className="zmdi zmdi-instagram"></i></a>
                                                    <a href="#"><i className="zmdi zmdi-twitter"></i></a>
                                                    <a href="#"><i className="zmdi zmdi-linkedin"></i></a>
                                                    </div> */}
                        
                                                    <div className="speaker-info">
                                                    <h5>{member.name}</h5>
                                                    {/* <p>Product Lead</p> */}
                                                    </div>
                                                </div>
                                            </div>
                                })
                        } 

                        
                    </div>
                    {/* Spons team section */}
                    <div className='row justify-content-start'>
                        <div className='col-12 teamSectionPadding'>
                            <h1 className='interTypeface'>Sponsorships team</h1>
                        </div>
                    </div>
                    <div className="row justify-content-start">
                    {
                                spons.map(member =>{
                                    return <div className="col-12 col-sm-6 col-lg-3 col-xl-3">
                                                <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp" data-wow-delay="300ms">
                        
                                                    <div className="speaker-single-thumb">
                                                    <img src={member.img} alt/>
                                                    </div>
                        
                                                    {/* <div className="social-info">
                                                    <a href="#"><i className="zmdi zmdi-facebook"></i></a>
                                                    <a href="#"><i className="zmdi zmdi-instagram"></i></a>
                                                    <a href="#"><i className="zmdi zmdi-twitter"></i></a>
                                                    <a href="#"><i className="zmdi zmdi-linkedin"></i></a>
                                                    </div> */}
                        
                                                    <div className="speaker-info">
                                                    <h5>{member.name}</h5>
                                                    {/* <p>Product Lead</p> */}
                                                    </div>
                                                </div>
                                            </div>
                                })
                        } 

                        
                    </div>
                    {/* Web team section */}
                    <div className='row justify-content-start'>
                        <div className='col-12 teamSectionPadding'>
                            <h1 className='interTypeface'>Web team</h1>
                        </div>
                    </div>
                    <div className="row justify-content-start">
                    {
                                web.map(member =>{
                                    return <div className="col-12 col-sm-6 col-lg-3 col-xl-3">
                                                <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp" data-wow-delay="300ms">
                        
                                                    <div className="speaker-single-thumb">
                                                    <img src={member.img} alt/>
                                                    </div>
                        
                                                    {/* <div className="social-info">
                                                    <a href="#"><i className="zmdi zmdi-facebook"></i></a>
                                                    <a href="#"><i className="zmdi zmdi-instagram"></i></a>
                                                    <a href="#"><i className="zmdi zmdi-twitter"></i></a>
                                                    <a href="#"><i className="zmdi zmdi-linkedin"></i></a>
                                                    </div> */}
                        
                                                    <div className="speaker-info">
                                                    <h5>{member.name}</h5>
                                                    {/* <p>Product Lead</p> */}
                                                    </div>
                                                </div>
                                            </div>
                                })
                        } 


                        
                    </div>
                </div>
            </section>
        </div>
        )
    };
}
export default Team;