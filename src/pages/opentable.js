import React from "react";
import Link from "gatsby-link";
import Box from "../components/Box";
import List from "../components/List";

import Section from "../components/Section";
import ProjectDetail from "../components/ProjectDetail";
import Grid from "../components/Grid";
import GridItem from "../components/GridItem";

import { colors } from "../styles/vars.json";
import s from "./opentable.module.styl"

import research from "./opentable-research-bg.jpg";
import outdoorDebate from "./opentable-outdoor-debate.gif";
import guestExperience from "./opentable-guest-experience.jpg";
import heroAlt from "./opentable-hero-alt.jpg";
import tcSetup from "./opentable-tc-setup.png";
import tcHost from "./opentable-tc-host.png";

import reporting01 from "./opentable-reporting-1.jpg";

import focusSketch from "./copilot-sketch-focus2.jpg";
import cardSort from "./copilot-card-sort.jpg";
import wireframe from "./copilot-web-wireframe.jpg";
import webMac01 from "./copilot-web-macbook.png";
import mobileExplorations from "./copilot-mobile-explorations-2.jpg";
import mobileDemo from "./copilot-video-mockup.mp4";
import mobileFnlMock from "./copilot-mobile-fnl-1.jpg";
import mobileFnl from "./mobile-final-3-up-3.jpg";

class OpenTable extends React.Component {
  render() {
    return (
      <ProjectDetail projectName="opentable">
        <div ref="content">
          <Section reverse>
            <Grid>
              <GridItem leftThree>
                <h1 style={{'-webkit-font-smoothing': 'antialiased'}}>
                  Balancing the marketplace by enabling guests to book the bar.
                </h1>
              </GridItem>

              <div
                style={{
                  gridColumn: "1 / span 2",
                  height: "6.666px",
                  background: "rgba(255,255,255,0.5)"
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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam soluta sit consequatur. Ullam quisquam ipsum, aliquam soluta consequuntur, error commodi quae, ipsam at repellendus, dolorum ut dolores eaque impedit saepe?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam soluta sit consequatur. Ullam quisquam ipsum, aliquam soluta consequuntur, error commodi quae, ipsam at repellendus, dolorum ut dolores eaque impedit saepe?</p>

              </GridItem>

              <GridItem rightOne className="hideMobile projectDetails">
                <List title="Company" items={["OpenTable"]} />
                <List title="Role" items={["Product manager"]} />
              </GridItem>
            </Grid>
          </Section>

          <Section contain className={s.processContainer}>
            <Grid>
              <div className={s.processItem} date="Q4 2015">
                <p>Discovery & analysis</p>
                <p>User research</p>
                <p>Analysis</p>
              </div>
              <div className={s.processItem} date="Q1 2016">
                <p>Product design</p>
                <p>Determine table types</p>
                <p>The 'outdoor' debate</p>
                <p>Guest experience</p>
                <p>Restaurant experience</p>
              </div>
              <div className={s.processItem} date="Q2 2016">
                <p>Launch</p>
                <p>Strategy</p>
                <p>Featured collections</p>
                <p>Internal reporting dashboard</p>
                <p>Press</p>
              </div>
              <div className={s.processItem} date="Q3 2016">
                <p>Results</p>
                <p>Qualitative</p>
                <p>Quantitative</p>
              </div>
            </Grid>
          </Section>

          <Section color={colors.white} style={{ paddingBottom: 0 }}>
            <Grid style={{ marginBottom: "4.5em" }}>
              <GridItem leftOne className="hideMobile">
                <p className="projectSectionMarker">Background</p>
              </GridItem>

              <GridItem centerTwo>
                <h3 style={{ color: colors.red }}>My involvement</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae ipsum facere consectetur aliquid nihil consequuntur impedit eaque earum quis, odit sapiente cupiditate atque perferendis explicabo iusto iste beatae expedita ex?</p>
                {/* <p>
                  As Copilot's only designer, I did <em>many</em> things,
                  including product marketing, front-end development, and
                  product analysis. Within the scope of this case study I
                  handled:
                </p>
                <ul className="arrow-list">
                  <li>User research</li>
                  <li>Workflow & product definition</li>
                  <li>Wireframing</li>
                  <li>Visual design</li>
                  <li>Frontend development</li>
                </ul> */}
              </GridItem>
            </Grid>

            <Grid>
              <GridItem leftOne className="hideMobile">
                <p className="projectSectionMarker">Background</p>
              </GridItem>

              <GridItem centerTwo>
                <h3 style={{ color: colors.red }}>Problem & Opportunity</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam tempora dolorum voluptas. Necessitatibus officia dolorum error dolorem laborum id, incidunt culpa, dicta nostrum placeat a consequatur, vitae consequuntur quidem pariatur.</p>
              </GridItem>
            </Grid>
          </Section>

          <Section color={colors.white} style={{ paddingBottom: 0 }}>
            {/* Horizontal rule */}
            <div
              style={{
                width: "66vw",
                height: "0.1875em",
                margin: "0 auto 4.5em",
                background: colors.concrete,
                opacity: 0.66
              }}
            />

            <Grid style={{ marginBottom: "3em" }}>
              <GridItem leftOne className="hideMobile">
                <p className="projectSectionMarker">Discovery</p>
              </GridItem>

              <GridItem centerTwo>
                <h3 style={{ color: colors.red }}>User research</h3>
                <p>
                  In the fall of 2015, myself and several colleagues
                  met with six restaurateurs in Los Angeles in search of
                  ways to increase reservation availability on OpenTable's marketplace.
                </p>
                <p>Questions focused on the reasons restaurateurs held back
                   tables from OpenTable. If OpenTable could address those
                   use cases, we could ostensibly increase table availability significantly.
                </p>
                <p>
                  We began the research open-minded. But after three interviews, all of us
                  began zeroing in an emerging opportunity: <strong>a way to set guest expectations
                  around non-traditional seats such as the bar or counter</strong>.
                </p>
              </GridItem>
            </Grid>


            <div className={s.researchQuote} img={research}>
              <p>“We need to manage people’s expectations about inside / outside / counter seating.
              </p>
              <p>The counter seating MUST be booked on the phone.
                Unless OpenTable had a way to tell the guest …”</p>
            </div>


            <Grid style={{ marginBottom: "6em" }}>
              <GridItem centerTwo>
                <p>
                  As of yet, OpenTable hadn't differentiated seating types.
                  A guest simply makes a 'reservation'. And to most guests — especially
                  those that have been with OpenTable since its fine-dining roots —
                  a reservation meant table service in the main dining room.
                </p>

                <p>It's easy to understand how guests could be upset:</p>
                <ul style={{marginBottom:'1.5em'}} className="multi-line">
                  <li><strong>Bar seating: </strong>Backless stools can be uncomfortable, the bar surface can be sticky, and parties larger than 3 will find conversation difficult.</li>
                  <li><strong>Patio seating: </strong>Sun, wind and rain can cause discomfort. At some restaurants, the patio may be a less energetic experience than the main dining room.</li>
                  <li><strong>High-Top seating: </strong>A High-Top is a raised table with raised seats that are sometimes backless. For parties with elderly guests or guests that use a wheelchair, High-Tops can be inconvinient at best and a show-stopper at the worst.</li>
                </ul>

                <p>
                  Bottom line — guests need to know what kind of experience they're booking.
                  For hot restaurants with limited availability, guests would be willing to compromise just to get in.
                  And some guests simply <em>prefer</em> the bustling experience of dining at the bar.
                </p>

                <p>
                  If OpenTable could simply give guests the choice, restaurateurs could
                  open up an additional 30 - 60 percent of their tables for reservations.
                </p>

              </GridItem>
            </Grid>

            <Grid>
              <GridItem leftOne className="hideMobile">
                <p className="projectSectionMarker">Product design</p>
              </GridItem>

              <GridItem centerTwo>
                <h3 style={{ color: colors.red }}>
                  Analysis
                </h3>


                <p style={{marginTop: '1.5em'}}>
                  <strong>Qualitative</strong>
                </p>

                <ul className="arrow-list" style={{ marginBottom: "1.5em" }}>
                  <li> Identify themes in user research </li>
                  <li> Cross-reference with related guest research </li>
                </ul>

                <p style={{marginTop: '1.5em'}}>
                  <strong>Quantitative</strong>
                </p>

                <ul className="arrow-list" style={{marginBottom: '1.5em'}}>
                  <li> Measure seating requests in guest notes </li>
                  <li> Infer # of non-traditional seats via floor plan data</li>
                </ul>

                <p>
                  Analysis yielded a clear, prioritized list of table types to support based on
                  user behavior and table composition from the floor plans of live restaurants.
                </p>
                <ol>
                  <li>Patio seating</li>
                  <li>Bar seating</li>
                  <li>High-Top seating</li>
                  <li>Counter seating</li>
                </ol>

              </GridItem>
            </Grid>

          </Section>

          <Section color={colors.white}>

            <Grid>
              <GridItem leftOne className="hideMobile">
                <p className="projectSectionMarker">Product design</p>
              </GridItem>
              <GridItem centerTwo>
                <h3 style={{ color: colors.red }}>
                  The debate over outdoor seating
                </h3>
                <p>
                  No issue was more hotly debated than whether patio seating should
                  be included in version 1 as a <em>table type.</em>
                </p>
                <img src={outdoorDebate} alt=""style={{marginBottom:'1.5em'}}/>

                <p>
                  The conceptual friction not only compromised
                  the data model — it made it impossible to model <strong>bar seats located on the patio</strong>.
                </p>


                <p style={{marginBottom:'1.5em'}}>
                  Technical constraints prohibited the simple solution of modeling
                  availability area attributes (indoor / outdoor)
                  in addition to availability seating types (bar, high-top, counter, etc).

                  This approach would more than double implementation time
                  and require a significant redesign of search services powering OpenTable's diner apps.
                </p>

                <h4 style={{color:colors.red}}>Deferring dedicated area modeling</h4>
                <p>
                  Alongside core service engineering teams, I scoped the effort to migrate
                  toward a cleaner data model <em>after</em> modeling outdoor seating as a table type {" "}
                  in version 1.
                </p>
                <p>The phased effort to clean up the data model
                  was not significantly more than implementing it upfront. So, I descoped it —
                  opting to halve implementation time and take on the very real risk that phase 2 would never happen.
                </p>

              </GridItem>



            </Grid>
          </Section>

          <Section color={colors.white} flush>
            <Grid>
              <div leftOne className="hideMobile">
                <p className="projectSectionMarker">Product design</p>
              </div>
              <GridItem centerTwo style={{marginBottom:'1.5em'}}>
                <h3 style={{ color: colors.red }}>
                  The guest experience
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quo, nihil hic consectetur ab at magni voluptate explicabo reiciendis est perferendis consequatur, similique molestiae ipsa sapiente fugit unde. Praesentium, commodi!</p>

              </GridItem>
            </Grid>

            <img src={heroAlt} alt="" />
            <img src={guestExperience} alt="" />

          </Section>

          <Section reverse color={colors.asphalt}>
            <Grid>
              <div leftOne className="hideMobile">
                <p className="projectSectionMarker">Product design</p>
              </div>
              <GridItem centerTwo>
                <h3>The restaurant experience</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quo porro fugiat provident. Sunt tempora, optio, pariatur incidunt et quod assumenda, odio ut voluptatum quisquam dolores quis, dolore cumque! Quia.</p>
              </GridItem>
            </Grid>

            <img src={tcSetup} style={{maxWidth:'1600px', margin:'auto'}} alt="" />
            <img src={tcHost} style={{maxWidth:'1600px', margin:'auto'}} alt="" />
          </Section>

          <Section color={colors.white}>
            <Grid>
              <div leftOne className="hideMobile">
                <p className="projectSectionMarker">Launch</p>
              </div>
              <GridItem centerTwo>
                <h3 style={{ color: colors.red }}>Launch strategy</h3>
                <p>
                  In a sales-driven two-sided marketplace such as OpenTable, a
                  solid launch strategy is key to scaling adoption and engagement of a new feature.
                </p>

                <p>
                  The supply side needed to come first. Restaurants needed to be onboard with
                  accepting reservations on their bar, high-top, patio, and counter seats in order
                  for guests to have the opportunity to engage.
                </p>

                <p><strong>Approach to supply side launch</strong></p>
                <ul className="arrow-list" style={{ marginBottom: "1.5em" }}>
                  <li>
                    Engage the sales team in a test market <em>early</em> in the development
                    process to gather feedback and engender support.
                  </li>
                  <li>
                    Ensure all supporting collateral is ready for launch in test market
                  </li>
                  <li>Work with sales leadership to determine sales strategy. In this case,
                    position the feature not as an optional enhancement, but a fundamental update
                    to how OpenTable functions. Include setup as part of regular meetings with
                    restaurants.
                  </li>

                  <li>Work with sales leadership to define incentive plan linked to adoption.</li>
                  <li>Be on-site for initial setup meetings with restaurants in test market.</li>
                </ul>


                </GridItem>
              </Grid>
            </Section>

            <Section color={colors.white}>
              <Grid>
                <div leftOne className="hideMobile">
                  <p className="projectSectionMarker">Launch</p>
                </div>
                <GridItem centerTwo style={{marginBottom:'1.5em'}}>
                  <h3 style={{ color: colors.red }}>Tracking progress</h3>

                  <p>Tracking progress is an important part of any launch. At the time, data on
                    supply-side and demand-side adoption and engagement lived in disparate systems.
                    On nights and weekends, <strong>I designed & built a custom KPI tracking dashboard</strong>
                   that enabled the product
                    team to track progress and powered the sales incentive program with a built-in leaderboard.
                  </p>

                  <p>The dashboard integrated with MongoDB, Salesforce, Mixpanel, and OpenTable's data
                    warehouse to provide a 360° overview of the launch.</p>

                  <p>
                    <em>Note: actual numbers, names, and locations have been obfuscated or altered.</em>
                  </p>

                </GridItem>
            </Grid>

            <img src={reporting01} alt=""/>
          </Section>

          <Section color={colors.white}>
            <Grid>
              <div leftOne className="hideMobile">
                <p className="projectSectionMarker">Launch</p>
              </div>
              <GridItem centerTwo style={{marginBottom:'1.5em'}}>
                <h3 style={{ color: colors.red }}>Public relations</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, at expedita temporibus esse, aperiam doloremque similique maiores atque minus. Possimus odit adipisci numquam blanditiis eaque incidunt ullam, quibusdam omnis amet.</p>
              </GridItem>
          </Grid>
        </Section>

        <Section color={colors.white}>
          <Grid>
            <div leftOne className="hideMobile">
              <p className="projectSectionMarker">Results</p>
            </div>
            <GridItem centerTwo style={{marginBottom:'1.5em'}}>
              <h3 style={{ color: colors.red }}>2% in incremental revenue</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, at expedita temporibus esse, aperiam doloremque similique maiores atque minus. Possimus odit adipisci numquam blanditiis eaque incidunt ullam, quibusdam omnis amet.</p>
            </GridItem>
        </Grid>
      </Section>

        </div>
      </ProjectDetail>
    );
  }
}

export default OpenTable;
