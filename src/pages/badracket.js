import React from "react";
import Link from "gatsby-link";
import Box from "../components/Box";
import List from "../components/List";

import Section from "../components/Section";
import ProjectDetail from "../components/ProjectDetail";

import { colors } from "../styles/vars.json";

import wireframe from "./brv5-wireframe.png"
import v1 from "./badracket.com v1.png"
import v4 from "./badracket.com v4.png"
import mobileWireframe from "./brv5-mobile-wireframe.png"
import visuals1 from "./brv5-visual-draft-0.jpg"
import visuals2 from "./brv5-final-desktop-mockup.jpg"
import interview from "./brv5-final-interview.png"
import shows from "./brv5-final-shows.png"
import buy from "./brv5-final-buy.png"



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
          <Section textColor={colors.concrete} color={colors.red} softTop='5em' softBottom='4em'>
            <Box container>
              <Box twoThird softRight="10%">
                <div>
                  <h2>Redesigning the web experience for Cleveland's craft recording space.</h2>
                  <p>
                    As the founder of Bad Racket, I was responsible for much more than
                    its website, yet I had a v1 of badracket.com before I had recorded a single band.
                  </p>
                  <p>
                    The fifth major redesign placed content produced by the studio at the forefront,
                    enabling local music fans to preview and purchase albums and videos.
                  </p>
                </div>
              </Box>
              <Box third>

                <List title="Client" items={['Bad Racket Recording Studio']}></List>
                <List title="Roles" items={['UX design', 'UI design', 'Content strategy', 'Development']}></List>
                <List title="Featured on" items={['HOW interactive design', 'Codrops', 'Nettuts+', 'Best Of Responsive Web Designs', 'Design Woop', 'Bashooka']}></List>


              </Box>
            </Box>
          </Section>


          <Section softTop='5em' softBottom='5em' color={colors.white} textColor={colors.asphalt}>

            <Box container>
              <Box twoThird softRight="10%">
                <h2>Reviewing past versions</h2>
                <img src={v1} alt=""/>
                <img src={v4} alt=""/>

              </Box>
              <Box third>
                <h2>Redesign Goals</h2>
                <List title="Create community" items={['Social login', 'Gust posts', 'Band interviews', 'Local show listings']}/>
                <List title="Increase interactivity" items={['Global music player', 'Integrated payments', 'Strong mobile experience']}/>
              </Box>
            </Box>
          </Section>

          <Section softTop='5em' softBottom='2em' textColor={colors.asphalt} color={colors.offWhite}>
            <Box container>
              <Box half center textCenter>
                <p>Initial wireframes took a page from Spotify by putting content consumption front and center.</p>
              </Box>
            </Box>
            <img src={wireframe} alt=""/>
          </Section>

          <Section softBottom='5em' textColor={colors.asphalt} color={colors.offWhite}>
            <Box container>
              <Box half center textCenter>
                <p>We needed a vastly superior mobile experience compared to previous
                  versions of the site, so this was a focus early on.</p>
              </Box>
            </Box>
            <img src={mobileWireframe} alt=""/>
          </Section>

          <Section softTop='5em' softBottom='5em' textColor={colors.asphalt} color={colors.white}>
            <Box container>
              <Box half center textCenter>
                <p>Early visual explorations continued to eschew navigation. As iterations continued, navigation became necessary.</p>
              </Box>
            </Box>
            <img src={visuals1} alt="" style={{width: '50%', margin: 'auto'}}/>
          </Section>

          <Section softTop='5em'  textColor={colors.asphalt} color={colors.white}>
            <Box container>
              <Box half center textCenter>
                <p>I iterated toward the stated goals. In a later version, we see the option to login with Facebook
                and purchase tickets to upcoming shows.</p>
              </Box>
            </Box>
            <img src={visuals2} alt="" />
          </Section>

          <Section softTop='5em' softBottom='5em' textColor={colors.white} color={colors.red}>
            <Box container>
              <Box half center textCenter>
                <p>Interviews were accompanied by custom illustrations done by the talented Nicolas Kuhar.</p>
              </Box>
            </Box>
            <img src={interview} alt=""/>
          </Section>

          <Section softTop='5em' softBottom='5em' textColor={colors.asphalt} color={colors.concrete}>
            <Box container>
              <Box half center textCenter>
                <p>Facebook integration was especially useful for gathering momentum
                and social proof of attendance at the shows Bad Racket hosted or sponsored.</p>
              </Box>
            </Box>
            <img src={shows} alt=""/>
          </Section>

          <Section softTop='5em' softBottom='5em' textColor={colors.white} color={colors.red}>
            <Box container>
              <Box half center textCenter>
                <p>Stripe integration allowed album purchase directly from Bad Racket.</p>
              </Box>
            </Box>
            <img src={buy} alt=""/>
          </Section>

          <Section color={colors.white} textColor={colors.asphalt} softTop='5em' softBottom='4em'>
            <Box container>
              <Box full><h2>Results</h2></Box>
            </Box>
            <Box container>
              <Box half>
                <p>The redesigned badracket.com was faster, content forward, and engaging.</p>
                <p>Facebook login plus Mixpanel allowed for a tailored experience and timely followup via drip email.</p>
                <p>Stripe integration helped fans support local bands.</p>
                <p>Attendance at Bad Racket's hosted shows grew, as did the post-show social media engagement.</p>
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
