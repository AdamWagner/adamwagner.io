import React from "react";
import Link from "gatsby-link";
import Section from "../components/Section";
import ProjectDetail from "../components/ProjectDetail";
import Grid from "../components/Grid";
import GridItem from "../components/GridItem";
import List from "../components/List";

import { colors } from "../styles/vars.json";

class SoundsJustLike extends React.Component {
  render() {
    return (
      <ProjectDetail projectName="sounds-just-like">
        <div ref="content">

          <Section reverseDark>
            <Grid>
              <GridItem leftThree>
                <h1 style={{WebkitFontSmoothing: 'antialiased'}}>
                  Coming soon.
                </h1>
              </GridItem>

              <div
                style={{
                  gridColumn: "1 / span 2",
                  height: "6.666px",
                  background: colors.asphalt,
                  opacity: 0.8
                }}
              />

              <br />
              <br />

              <GridItem leftOne className="hideMobile overview">
                <p
                  className="projectSectionMarker"
                  style={{ textAlign: "left" }}
                >
                  Overview
                </p>
              </GridItem>

              <GridItem centerTwo style={{ marginBottom: "1.5em" }}>
                <p>I started <em>Sounds Just Like</em> as a simple WordPress blog in 2009 off a suggestion from my first boss. He noticed I maintained a list of songs that sounded like other songs, and said “You should publish that online”.</p>
                <p>The first version of the site had a meager twenty posts. Traffic, however, was promising — linear growth to 20,000 unique visitors a month within a year, entirely from organic search. <em>Sounds Just Like</em> was scratching an itch.</p>
                <p>In 2013, YouTube sensation VSauce published “Will we ever run out of music” — an investigation into the uncanny similarites among songs. Traffic exploded, topping 8 million unique visitors in two weeks following the video.</p>
                <p>The deluge of traffic also spiked soundalike suggestions from visitors. I recieved 40,000 suggestions of soundalikes via email during this period.</p>
                <p>From late 2013 to 2014, I rebuilt <em>Sounds Just Like</em> in Python as a true user-generated-content site. In late 2014, I sold <em>Sounds Just Like</em> to <em>H1tcher</em>, an NYC-based project with similar goals.</p>
              </GridItem>

              <GridItem rightOne className="hideMobile projectDetails">
                <List title="Company" items={["Sounds Just Like"]} />
                <List title="Role" items={["Founder", "Product design", "Development", "Content"]} />
              </GridItem>
            </Grid>
          </Section>

        </div>
      </ProjectDetail>
    );
  }
}

export default SoundsJustLike;
