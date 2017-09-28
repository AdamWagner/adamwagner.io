import React from "react";
import Link from "gatsby-link";
import Box from "../components/Box";
import List from "../components/List";

import Section from "../components/Section";
import ProjectDetail from "../components/ProjectDetail";

import { colors } from "../styles/vars.json";
import s from "./badracket.module.styl"

import wireframe from "./brv5-wireframe.png";
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
          <Section
            textColor={colors.concrete}
            color={colors.red}
            softTop="5em"
            softBottom="4em"
          >
            <Box container>
              <Box twoThird softRight="10p">
                <div>
                  <h1>
                    Redesigning the web experience for Cleveland's craft
                    recording space.
                  </h1>
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
                </div>
              </Box>
              <Box third>
                <List title="Client" items={["Bad Racket Recording Studio"]} />
                <List
                  title="Roles"
                  items={[
                    "UX design",
                    "UI design",
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
              </Box>
            </Box>
          </Section>


          <Section softTop="5em" softBottom="5em" className={s.processContainer}>
            <Box container>
              <Box>
                <h2>Redesign Process</h2>

                <div className={s.process}>

                  <div className={s.processItem}>
                    <p>Discover</p>
                    <p className={s.textSecondary}>Evaluate previous versions</p>
                    <p className={s.textSecondary}>Understand user needs</p>
                    <p className={s.textSecondary}>Set redesign goals</p>
                    <p className={s.textSecondary}>Determine success criteria</p>
                  </div>
                  <div className={s.processItem}>
                    <p>Design</p>
                    <p className={s.textSecondary}>Wireframe structure</p>
                    <p className={s.textSecondary}>Wireframe UX patterns</p>
                    <p className={s.textSecondary}>Design visual aesthetic alongside real content</p>
                    <p className={s.textSecondary}>Fine tune interactions</p>
                  </div>
                  <div className={s.processItem}>
                    <p>Develop</p>
                    <p className={s.textSecondary}>Implement vision in code</p>
                    <p className={s.textSecondary}>Address unforeseen design challenges</p>
                    <p className={s.textSecondary}>Tune for performance</p>
                  </div>
                  <div className={s.processItem}>
                    <p>Measure</p>
                    <p className={s.textSecondary}>Monitor success metrics</p>
                    <p className={s.textSecondary}>Document performance for next iteration cycle</p>
                  </div>
                </div>


              </Box>
            </Box>
          </Section>


          <Section
            softTop="5em"
            softBottom="5em"
            color={colors.white}
            textColor={colors.asphalt}
          >
            <Box container softBottom="1em">
              <Box full softRight="20p">
                <h2 style={{color: colors.red}}>1. Discovery: Evaluating previous versions</h2>
                <p>Every redesign begins with a serious of questions: Why? Is the current version underperforming? In what ways? What should be done to improve it?</p>
              </Box>
            </Box>

            <Box container softBottom="05em">
              <Box third>
                <img className={s.grayscale} src={v1} alt="" />
                <p className={s.textSecondaryBold}>Version 1 (2009)</p>
                <p className={s.textSecondary}>
                  The color palette and visual aesthetic are established,
                  but structure, usability, and performance are lacking.
                </p>
              </Box>

              <Box third>
                <img className={s.grayscale}src={v4} alt="" />
                <p className={s.textSecondaryBold}>Version 4 (2012)</p>
                <p className={s.textSecondary}>
                  Hierarchy and layout are improved, but the site
                  is still text-heavy and performs poorly on mobile devices.
                </p>
              </Box>
              <Box third>
                <img className={s.grayscale}src={possible} alt="" />
                <p className={s.textSecondaryBold}>The potential redesign</p>
                <p className={s.textSecondary}>
                  Bad Racket needs a mobile-first, content-first digital home
                  that fosters community among the bands it works with and their fans.
                </p>
              </Box>
            </Box>



            <Box container softTop="3em">
              <Box full softRight="20p">
                <h2 style={{color: colors.red}}>2. Discovery: Setting Redesign Goals</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, porro, dolores molestias vero quos assumenda blanditiis numquam laborum, asperiores enim doloremque! Similique ipsum repudiandae ex porro? Rerum non ducimus soluta.</p>
              </Box>
            </Box>

            <Box container softTop="2em">
              <Box half>
                <List
                  title="Foster community"
                  items={[
                    "Social login",
                    "Guest posts",
                    "Band interviews",
                    "Local show listings"
                  ]}
                />
              </Box>

              <Box half>
                <List
                  title="Increase interactivity"
                  items={[
                    "Persistent music player",
                    "Integrated payments",
                    "Strong mobile experience"
                  ]}
                />
              </Box>
            </Box>
          </Section>

          <Section
            softTop="5em"
            softBottom="2em"
            textColor={colors.asphalt}
            color={colors.offWhite}
          >

            <Box container>
              <Box twoThird>
                <h2 style={{color: colors.red}}>3. Wireframing</h2>
                <p>
                  Initial wireframes took a page from Spotify by putting content
                  consumption front and center.
                </p>
              </Box>
            </Box>

            <img src={wireframe} alt="" />
          </Section>

          <Section
            softBottom="3em"
            textColor={colors.asphalt}
            color={colors.offWhite}
          >
            <Box container>
              <Box half center textCenter hard>
                <p>
                  Bad Racket needed a vastly superior mobile experience compared
                  to previous versions of the site, so this was a focus early
                  on.
                </p>
              </Box>
            </Box>
            <img src={mobileWireframe} alt="" />
          </Section>


          <Section
            softTop="3em"
            textColor={colors.asphalt}
            color={colors.offWhite}
          >
            <Box container softBottom="2em">
              <Box twoThird>
                <h2 style={{color: colors.red}}>4. Visual design</h2>
                <p>
                  With wireframes as a guideline, visual styles are defined and
                  microinterations are tweaked. In a content-heavy design such as this, it's important
                  to develop visuals alongside real content.
                </p>
              </Box>
            </Box>
            <img src={visuals2} alt="" />

          </Section>

          <Section
            softTop="5em"
            softBottom="5em"
            textColor={colors.white}
            color={colors.red}
          >
            <Box container>
              <Box half center textCenter hard>
                <p>
                  Interviews were accompanied by custom illustrations done by
                  the talented <a target="_blank" href="https://dribbble.com/andrewkuhar">Andrew Kuhar</a>.
                </p>
              </Box>
            </Box>
            <img src={interview} alt="" />
          </Section>

          <Section>
            <img src={phone} alt="" />
          </Section>

          <Section
            softTop="5em"
            softBottom="5em"
            textColor={colors.asphalt}
            color={colors.concrete}
          >
            <Box container>
              <Box half center textCenter hard>
                <p>
                  Facebook integration identified loyal fans for outreach
                  and generated social momentum around events hosted by Bad Racket.
                </p>
              </Box>
            </Box>
            <img src={shows} alt="" />
          </Section>

          <Section
            softTop="5em"
            softBottom="5em"
            textColor={colors.white}
            color={colors.red}
          >
            <Box container>
              <Box half center textCenter hard>
                <p>
                  Stripe integration enabled fans to purchase albums directly from Bad
                  Racket and encouraged bands to distribute their music through Bad Racket.
                </p>
              </Box>
            </Box>
            <img src={buy} alt="" />
          </Section>

          <Section
            color={colors.white}
            textColor={colors.asphalt}
            softTop="5em"
            softBottom="4em"
          >
            <Box container>
              <Box full>
                <h2>Key Results</h2>
              </Box>
            </Box>
            <Box container>
              <Box half>
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
              </Box>
              <Box third>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                  neque, repellat quaerat illum, sapiente at harum placeat
                  aliquam odit voluptatibus maiores repellendus praesentium
                  officia ex perspiciatis eveniet laudantium odio inventore?
                </p>
              </Box>
            </Box>
          </Section>
        </div>
      </ProjectDetail>
    );
  }
}

export default BadRacket;
