import React from "react";
import Link from "gatsby-link";
import Box from "../components/Box";
import List from "../components/List";

import Section from "../components/Section";
import ProjectDetail from "../components/ProjectDetail";
import Grid from "../components/Grid"
import GridItem from "../components/GridItem"

import { colors } from "../styles/vars.json";
import s from "./badracket.module.styl"

import wireframe from "./brv5-wireframe.jpg";
import v1 from "./badracket.com-v1.jpg";
import v4 from "./badracket.com-v4.jpg";
import possible from "./brv5-possible.gif";
import mobileWireframe from "./brv5-mobile-wireframe.jpg";
import visuals1 from "./brv5-visual-draft-0.jpg";
import visuals2 from "./brv5-final-desktop-mockup.jpg";
import phone from "./brv5-iphone.jpg"
import interview from "./brv5-final-interview.png";
import shows from "./brv5-final-shows.png";
import buy from "./brv5-final-buy.png";

/*
New BadRacket videos
https://newbadracket-wpengine.netdna-ssl.com/wp-content/uploads/2015/08/Cleveland-Recording-Studio.webm
https://newbadracket-wpengine.netdna-ssl.com/wp-content/uploads/2015/08/Cleveland-Recording-Studio.oggtheora.ogv
https://newbadracket-wpengine.netdna-ssl.com/wp-content/uploads/2015/08/Cleveland-Recording-Studio.mp4.mp4
*/

class BadRacket extends React.Component {
  render() {
    return (
      <ProjectDetail projectName="badracket">
        <div ref="content">
          <Section reverse>

            <Grid>
              <GridItem leftThree>
                  <h1 style={{color:colors.white}}>
                    Redesigning the web experience for Cleveland's craft
                    recording space.
                  </h1>
                </GridItem>

                <div style={{gridColumn: '1 / span 2', height: '6.666px', background:'rgba(255,255,255,0.5)'}} />

                <br/>
                <br/>

                <GridItem leftOne className="hideMobile overview">
                  <p className="projectSectionMarker" style={{textAlign:'left'}}>Overview</p>
                </GridItem>

                <GridItem centerTwo style={{marginBottom:'1.5em'}}>
                  <p>
                    As the founder of Bad Racket, I was responsible for much
                    more than its website, yet I had a v1 of badracket.com
                    before I had recorded a single band.
                  </p>
                  <p>
                    The fifth major redesign placed content produced by the
                    studio at the forefront, enabling local music fans to
                    preview and purchase albums and videos.
                  </p>
                </GridItem>

              <GridItem rightOne className="hideMobile projectDetails">
                <List title="Client" items={["Bad Racket Recording Studio"]} />
                <List
                  title="Roles"
                  items={[
                    "UX / UI design",
                    "Content strategy",
                    "Development"
                  ]}
                />
                <List
                  title="Featured on"
                  items={[
                    {
                      name: "HOW interactive design",
                      href: 'http://www.howdesign.com/web-design-resources-technology/badracket-com/'
                    },
                    {
                      name: "Best of Cleveland Design Awards",
                      href: 'http://gomedia.com/zine/news/cleveland-web-and-graphic/'
                    },
                    {
                      name: "Codrops",
                      href: "https://tympanus.net/codrops/2012/12/18/a-creative-year-distinctive-web-designs-of-2012/"
                    },
                    {
                      name: "Best Of Responsive Web Designs",
                      href: 'http://www.inserthtml.com/2013/01/responsive-design-2012/'
                    },
                    {
                      name: "Design Woop",
                      href: 'http://designwoop.com/2012/08/25-examples-of-typographic-focused-web-design/'
                    },
                  ]}
                />
              </GridItem>


            </Grid>
          </Section>


          <Section className={s.processContainer}>
            <Grid>
                {/* <h2>Redesign Process</h2> */}
                  <div className={s.processItem}>
                    <p>Discover</p>
                    <p>Evaluate previous versions</p>
                    <p>Understand user needs</p>
                    <p>Set redesign goals</p>
                    <p>Determine success criteria</p>
                  </div>
                  <div className={s.processItem}>
                    <p>Design</p>
                    <p>Wireframe structure</p>
                    <p>Wireframe UX patterns</p>
                    <p>Design visual aesthetic alongside real content</p>
                    <p>Fine tune interactions</p>
                  </div>
                  <div className={s.processItem}>
                    <p>Develop</p>
                    <p>Implement vision in code</p>
                    <p>Address unforeseen design challenges</p>
                    <p>Tune for performance</p>
                  </div>
                  <div className={s.processItem}>
                    <p>Measure</p>
                    <p>Monitor success metrics</p>
                    <p>Document performance for next iteration cycle</p>
                  </div>
              </Grid>
          </Section>


          <Section color={colors.white}>


            <Grid style={{marginBottom: '1.5em'}}>
              <GridItem leftOne className="hideMobile">
                  <p className="projectSectionMarker">Discovery</p>
              </GridItem>
              <GridItem centerTwo>
                <h3 style={{ color: colors.red }}>Evaluating previous versions</h3>
                <p>Every redesign begins with a serious of questions: Why? Is the current version underperforming? In what ways? What should be done to improve it?</p>
              </GridItem>
            </Grid>


            <Grid style={{marginBottom: '6em'}}>
              <GridItem leftTwo>
                <img className={s.grayscale} src={v1} alt="" />
                <p className={s.textSecondaryBold}>Version 1 (2009)</p>
                <p className={s.textSecondary}>
                  The color palette and visual aesthetic are established,
                  but structure, usability, and performance are lacking.
                </p>
              </GridItem>

              <GridItem>
                <img className={s.grayscale}src={v4} alt="" />
                <p className={s.textSecondaryBold}>Version 4 (2012)</p>
                <p className={s.textSecondary}>
                  Hierarchy and layout are improved, but the site
                  is still text-heavy and performs poorly on mobile devices.
                </p>
              </GridItem>

            </Grid>


            <Grid style={{marginBottom:'1.5em'}}>
              <GridItem leftOne className="hideMobile">
                  <p className="projectSectionMarker">Discovery</p>
              </GridItem>
              <GridItem centerTwo>
                <h3 style={{ color: colors.red }}>Setting redesign goals</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, porro, dolores molestias vero quos assumenda blanditiis numquam laborum, asperiores enim doloremque! Similique ipsum repudiandae ex porro? Rerum non ducimus soluta.</p>
              </GridItem>
            </Grid>

            <Grid>
              <GridItem leftTwo>
                <List
                  title="Foster community"
                  items={[
                    "Social login",
                    "Guest posts",
                    "Band interviews",
                    "Local show listings"
                  ]}
                />
              </GridItem>

              <GridItem>
                <List
                  title="Increase interactivity"
                  items={[
                    "Persistent music player",
                    "Integrated payments",
                    "Strong mobile experience"
                  ]}
                />
              </GridItem>
            </Grid>
          </Section>


          <Section color={colors.offWhite}>

            <Grid style={{marginBottom:'1.5em'}}>
              <GridItem leftOne className="hideMobile">
                  <p className="projectSectionMarker">Wireframing</p>
              </GridItem>
              <GridItem centerTwo>
                <h3 style={{ color: colors.red }}>Wireframing UX</h3>
                <p>
                  Initial wireframes took a page from Spotify by putting content
                  consumption front and center.
                </p>
              </GridItem>
            </Grid>

            <img src={wireframe} alt="" />

            <Grid>
              <GridItem centerTwo>
                <p>
                  Bad Racket needed a vastly superior mobile experience compared
                  to previous versions of the site, so this was a focus early
                  on.
                </p>
              </GridItem>
            </Grid>
            <img src={mobileWireframe} alt="" />
          </Section>




          <Section flush color={colors.offWhite}>

            <Grid>
              <GridItem leftOne className="hideMobile">
                  <p className="projectSectionMarker">Visual design</p>
              </GridItem>
              <GridItem centerTwo>
                <h3 style={{ color: colors.red }}>Finding the visual style</h3>
                <p>
                  With wireframes as a guideline, visual styles are defined and
                  microinterations are tweaked. In a content-heavy design such as this, it's important
                  to develop visuals alongside real content.
                </p>
              </GridItem>
            </Grid>

            <img src={visuals2} alt="" />

          </Section>



          <Section textColor={colors.white} color={colors.red} style={{paddingBottom:0}}>

            <Grid>
              <GridItem centerTwo>
                <p>
                  Interviews were accompanied by custom illustrations done by
                  the talented <a target="_blank" href="https://dribbble.com/andrewkuhar">Andrew Kuhar</a>.
                </p>
              </GridItem>
            </Grid>

            <img src={interview} alt="" />
            <img src={phone} alt="" />
          </Section>


          <Section color={colors.concrete}>

            <Grid>
              <GridItem centerTwo>
                <p>
                  Facebook integration identified loyal fans for outreach
                  and generated social momentum around events hosted by Bad Racket.
                </p>
              </GridItem>
            </Grid>

            <img src={shows} alt="" />
          </Section>

          <Section textColor={colors.white} color={colors.red}>

            <Grid>
              <GridItem centerTwo>
                <p>
                  Stripe integration enabled fans to purchase albums directly from Bad
                  Racket and encouraged bands to distribute their music through Bad Racket.
                </p>
              </GridItem>
            </Grid>

            <img src={buy} alt="" />
          </Section>

          <Section color={colors.white}>

            <Grid style={{marginBottom:'4.5em'}}>
              <GridItem leftOne className="hideMobile">
                  <p className="projectSectionMarker">Results</p>
              </GridItem>
              <GridItem centerTwo>
                <h3 style={{ color: colors.red }}>Key results</h3>
                <p>
                  The redesigned badracket.com was faster, content forward, and
                  engaging.
                </p>
                <p>
                  Facebook login plus Mixpanel allowed for a tailored experience
                  and timely followup via drip email.
                </p>
                <p>Stripe integration helped fans support local bands.</p>
                <p>
                  Attendance at Bad Racket's hosted shows grew, as did the
                  post-show social media engagement.
                </p>
              </GridItem>
            </Grid>

          </Section>
        </div>
      </ProjectDetail>
    );
  }
}

export default BadRacket;
