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
                <p>
                  I led product design at Copilot as we strove to find
                  product/market fit. Our proprietary ability to process and
                  distribute data from leading Point of Sale systems gave
                  Copilot the unique ability to provide enterprise-level
                  business insight to independent restaurants.
                </p>

                <p>
                  We dramatically simplified the delivery of actionable
                  insights, focusing on timely push content rather a power
                  dashboard.
                </p>

                <p>
                  After several iterations,{" "}
                  <strong>
                    80% of our customers engaged with Copilot insights every day
                  </strong>.
                </p>
              </GridItem>

              <GridItem rightOne className="hideMobile projectDetails">
                <List title="Company" items={["OpenTable"]} />
                <List title="Role" items={["Product manager"]} />
              </GridItem>
            </Grid>
          </Section>

          <Section contain className={s.processContainer}>
            <Grid>
              <div className={s.processItem} date="Fall 2015">
                <p>Discovery & analysis</p>
                <p>User research</p>
                <p>Analysis</p>
              </div>
              <div className={s.processItem} date="Winter 2016">
                <p>Product design</p>
                <p>Determine table types</p>
                <p>The 'outdoor' debate</p>
                <p>Guest experience</p>
                <p>Restaurant experience</p>
              </div>
              <div className={s.processItem} date="Spring 2016">
                <p>Launch</p>
                <p>Strategy</p>
                <p>Featured collections</p>
                <p>Internal reporting dashboard</p>
                <p>Press</p>
              </div>
              <div className={s.processItem} date="Fall 2016">
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
                <p>
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
                </ul>
              </GridItem>
            </Grid>

            <Grid>
              <GridItem leftOne className="hideMobile">
                <p className="projectSectionMarker">Background</p>
              </GridItem>

              <GridItem centerTwo>
                <h3 style={{ color: colors.red }}>Audience</h3>
                <p>
                  Copilot’s target user is the decision-maker - typically the{" "}
                  <strong>owner </strong>or <strong>general manager</strong> -
                  at an independent restaurant or small restaurant group.
                </p>
                <p>
                  Restaurant decision-makers want to put as many “butts in
                  seats” as possible while maintaining smooth operations, high
                  staff morale, and delivering great hospitality.
                </p>
                <p>
                  They juggle many areas of concern. They’re distracted, often
                  focused on the problem that’s most pressing <em>right now</em>.
                  There’s little time left to carefully consider decisions
                  affecting the bottom line of their business.
                </p>
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
                <p>
                  In the rare cases users engaged with data, they did so on the
                  big screen — the POS. Card sorting revealed keen interest in
                  powerful data analysis features such as forecasting,
                  benchmarks, and filtering.
                </p>
                <p>
                  Power functionality desired the space and form-factor of the
                  web, so I started there.
                </p>
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
                <p>
                  During visual design I simplified the layout and evolved the
                  forecast model into a flexible benchmark model. Benchmarks
                  were more familiar to users and retained most of the value of
                  a forecast.
                </p>
              </GridItem>
            </Grid>

            <img src={tcSetup} style={{maxWidth:'1600px', margin:'auto'}} alt="" />
            <img src={tcHost} style={{maxWidth:'1600px', margin:'auto'}} alt="" />
          </Section>

          <Section color={colors.white}>
            <Grid>
              <div leftOne className="hideMobile">
                <p className="projectSectionMarker">Defining the product</p>
              </div>
              <GridItem centerTwo>
                <h3 style={{ color: colors.red }}>Launch & failure</h3>
                <p>
                  Once launched, <strong>not a single user</strong> logged in.
                  We designed and built Copilot's web product hand-in-hand with
                  a loyal, enthusiastic base of beta customers. And yet, none of
                  them actually wanted to use what their feedback had helped
                  shape.
                </p>

                <p>
                  But the problem wasn't the feature set.{" "}
                  <strong>It was the delivery mechanism. </strong>
                </p>

                <p>
                  Recall that our target users have neither the time nor the
                  impulse to log into a web app. They're not even in front of a
                  computer for much of the day. Copilot needed to fit seemlessly
                  into their existing workflow.
                </p>
              </GridItem>
            </Grid>
          </Section>

          <Section color={colors.offWhite} style={{ paddingBottom: "2em" }}>
            <Grid style={{ marginBottom: "3em" }}>
              <div leftOne className="hideMobile">
                <p className="projectSectionMarker">Redesign</p>
              </div>
              <GridItem centerTwo>
                <h3 style={{ color: colors.red }}>
                  Fitting seemlessly into existing workflows
                </h3>
                <p>
                  We wanted Copilot to be another of our user's essential haibts
                  - akin to their morning cup of coffee or pre-shift staff
                  meeting.
                </p>
                <p>To establish this habit, Copilot needed to:</p>
                <ul className="arrow-list" style={{ marginBottom: "1.5em" }}>
                  <li className="multi-line">
                    Remind users that a fresh version of Copilot's Daily Report
                    was ready
                  </li>
                  <li>
                    Be easily accessible in our users' chaotic environments
                  </li>
                </ul>
                <p> I needed to simplify further.</p>
              </GridItem>
            </Grid>

            <img
              src={mobileExplorations}
              alt=""
              style={{
                maxWidth: "1200px",
                margin: "auto",
                marginBottom: "3em"
              }}
            />

            <Grid>
              <GridItem centerTwo>
                <p>
                  In parallel, I continued to discover the compelling power of
                  benchmarking. Comparing current performance to the past was
                  interesting, but it was even <em>more</em> interesting to
                  compare the daily performance of a single location to that of
                  a <em>group of its peers</em>.
                </p>
                <p>
                  Another key change the focus on push notifications. At 10am
                  sharp, Copilot would notify users that their daily report was
                  ready to review.
                </p>
              </GridItem>
            </Grid>
          </Section>

          <img src={mobileFnlMock} alt="" />
          <img src={mobileFnl} alt="" />

          <video
            autoPlay
            loop
            style={{
              position: "static",
              opacity: 1,
              display: "block",
              width: "100%",
              objectFit: "fill"
            }}
          >
            <source src={mobileDemo} type="video/mp4" />
          </video>

          <Section color={colors.white}>
            <Grid>
              <div leftOne className="hideMobile">
                <p className="projectSectionMarker">Results</p>
              </div>
              <GridItem centerTwo>
                <h3 style={{ color: colors.red }}>
                  Engagement skyrocketed
                </h3>
                <p>
                  This time, the form factor and focus on notifications worked.
                  Within a month, 80% of users were engaging with the daily
                  report <em>every day</em>.
                </p>

                <p>
                  Peer group benchmarks proved especially compelling. Customers
                  now considered Copilot an essential part of running their
                  business.
                </p>
              </GridItem>
            </Grid>
          </Section>
        </div>
      </ProjectDetail>
    );
  }
}

export default OpenTable;
