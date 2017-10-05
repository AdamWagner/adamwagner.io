import React from "react";
import Link from "gatsby-link";

import Box from "../components/Box";
import List from "../components/List";
import Section from "../components/Section";
import ProjectDetail from "../components/ProjectDetail";
import Grid from "../components/Grid";
import GridItem from "../components/GridItem";

import { colors } from "../styles/vars.json";
import s from "./copilot.module.styl";

import focusSketch from "./copilot-sketch-focus2.jpg";
import interviewSketch from "./copilot-sketch-interview2.jpg";
import cardSort from "./copilot-card-sort.jpg";
import wireframe from "./copilot-web-wireframe.jpg";
import webMac01 from "./copilot-web-macbook.png";
import mobileExplorations from "./copilot-mobile-explorations-2.jpg";
import mobileDemo from "./copilot-video-mockup.mp4";
import mobileFnlMock from "./copilot-mobile-fnl-1.jpg";
import mobileFnl from "./mobile-final-3-up-3.jpg";

class Copilot extends React.Component {
  render() {
    return (
      <ProjectDetail projectName="copilot">
        <div ref="content">
          <Section reverse>
            <Grid>
              <GridItem leftThree>
                <h1>
                  Finding product/market fit for restaurant revenue management
                  software.
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
                <List title="Company" items={["Copilot"]} />
                <List title="Role" items={["Product designer"]} />
                <List
                  title="Core team"
                  items={[
                    "Eli Chait, CEO",
                    "David Amusin, CTO",
                    "Ashley Tyra, Operations",
                    "Hubert Wong, Engineer",
                    "Adam Wagner, Designer"
                  ]}
                />
              </GridItem>
            </Grid>
          </Section>

          <Section contain className={s.processContainer}>
            <Grid>
              <div className={s.processItem} date="Q4 2012">
                <p>Discovery & analysis</p>
                <p>User research</p>
                <p>Focus on an approach</p>
              </div>
            <div className={s.processItem} date="Q1 2013">
                <p>Define the product</p>
                <p>Prioritize features</p>
                <p>Wireframe IA & UX</p>
                <p>Simplify visuals</p>
                <p>Learn from failure</p>
              </div>
              <div className={s.processItem} date="Q2 2013">
                <p>Redesign to fit existing workflows</p>
                <p>Simplify more for mobile </p>
                <p>Establish habit</p>
              </div>

              {/* Find a way to make results stand out more */}
              <div className={s.processItem} date="Q3 2013">
                <p>Results</p>
                <p>80% daily engagement</p>
                <p>74% consider it essential</p>
              </div>
            </Grid>
          </Section>

          <Section color={colors.white} style={{ paddingBottom: 0 }}>
            <Grid style={{ marginBottom: "4.5em" }}>
              <GridItem leftOne className="hideMobile">
                <p className="projectSectionMarker">Background</p>
              </GridItem>

              <GridItem centerTwo>
                <h3 style={{ color: colors.copilotBlue }}>My involvement</h3>
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
                  <li>Front-end development</li>
                </ul>
              </GridItem>
            </Grid>

            <Grid>
              <GridItem leftOne className="hideMobile">
                <p className="projectSectionMarker">Background</p>
              </GridItem>

              <GridItem centerTwo>
                <h3 style={{ color: colors.copilotBlue }}>Audience</h3>
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
                <h3 style={{ color: colors.copilotBlue }}>Customer insights</h3>
                <p>
                  I spoke with dozens of restaurant owners and general managers
                  to learn how they think about their business, how they spend
                  their day, and what keeps them up at night.
                </p>
              </GridItem>
            </Grid>

            <img src={interviewSketch} alt="" style={{ marginBottom: "3em" }} />

            <Grid style={{ marginBottom: "6em" }}>
              <GridItem centerTwo>
                <p>
                  <strong>Takeaways</strong>
                </p>
                <ol>
                  <li className="multi-line">
                    Restaurant owners <em>want</em> to put more effort into
                    analyzing business performance data, but aren't able due to distractions and time constraints.
                    It’s like going to the gym - despite good intentions, it's rare.
                  </li>
                  <li className="multi-line">
                    When users do engage with data, they don't want to dig into the
                    details. They need simple, actionable answers.
                  </li>
                  <li className="multi-line">
                    Also, they’re skeptical of data that conflicts with their
                    instincts (which is often the case). Copilot must generate
                    trust without overbearing detail.
                  </li>
                </ol>
              </GridItem>
            </Grid>

            <Grid style={{ marginBottom: "3em" }}>
              <GridItem leftOne className="hideMobile">
                <p className="projectSectionMarker">Discovery</p>
              </GridItem>

              <GridItem centerTwo>
                <h3 style={{ color: colors.copilotBlue }}>
                  Focusing on an approach
                </h3>
                <p>
                  Copilot existed to facilitate quality decision-making for
                  high-impact activities that our users were neglecting.
                </p>
              </GridItem>
            </Grid>

            <img
              src={focusSketch}
              style={{ mixBlendMode: "multiply", marginBottom: "3em" }}
              alt=""
            />

            <Grid>
              <GridItem centerTwo>
                <p>
                  Together, these activities constitute{" "}
                  <strong>Revenue Management</strong> — the application of
                  disciplined analytics to predict consumer behaviour at the
                  micro-market level and optimize business levers to maximize
                  revenue growth.
                </p>
              </GridItem>
            </Grid>
          </Section>

          <Section color={colors.white}>
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
            <Grid>
              {/* <GridItem leftOne className="hideMobile">
                <p className="projectSectionMarker">Product design</p>
              </GridItem> */}
              <GridItem centerTwo>
                <h3 style={{ color: colors.copilotBlue }}>
                  Prioritizing functionality
                </h3>
                <p>
                  Beta users helped prioritize features via card sorting — a
                  research activity in which users categorize features and make
                  tough prioritization decisions.{" "}
                </p>
              </GridItem>
              <GridItem full>
                <img
                  style={{ gridColumn: "1 / span 4" }}
                  src={cardSort}
                  alt=""
                />
              </GridItem>
            </Grid>
          </Section>

          <Section color={colors.offWhite}>
            <Grid>
              <div leftOne className="hideMobile">
                <p className="projectSectionMarker">Product design</p>
              </div>
              <GridItem centerTwo>
                <h3 style={{ color: colors.copilotBlue }}>
                  Wireframing IA & UX
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

            <img src={wireframe} alt="" m />

            <Grid>
              <GridItem centerTwo>
                <p>
                  While testing the wireframes, users were confused by how
                  forecasts were calculated. They were more comfortable using
                  historical benchmarks for forecasting.
                </p>
            </GridItem>
            </Grid>
          </Section>

          <Section reverse color={colors.copilotBlue}>
            <Grid>
              <div leftOne className="hideMobile">
                <p className="projectSectionMarker">Product design</p>
              </div>
              <GridItem centerTwo>
                <h3>Simplifying the UX</h3>
                <p>
                  During visual design I simplified the layout and evolved the
                  forecast model into a flexible benchmark model. Benchmarks
                  were more familiar to users and retained most of the value of
                  a forecast.
                </p>
              </GridItem>
            </Grid>

            <img src={webMac01} alt="" />
          </Section>

          <Section color={colors.white}>
            <Grid>
              <div leftOne className="hideMobile">
                <p className="projectSectionMarker">Product design</p>
              </div>
              <GridItem centerTwo>
                <h3 style={{ color: colors.copilotBlue }}>Launch & failure</h3>
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
                  computer for much of the day. Copilot needed to fit seamlessly
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
                <h3 style={{ color: colors.copilotBlue }}>
                  Fitting seamlessly into existing workflows
                </h3>
                <p>The best way to get embedded in our users' chaotic workflows was by being <strong>in their pockets.</strong> The redesign would be mobile-first.</p>
                <p>
                  We wanted Copilot to become an essential habit
                  - akin to the morning cup of coffee or pre-shift staff
                  meeting. To establish this habit, Copilot needed to:
                </p>

                <ul className="arrow-list" style={{ marginBottom: "1.5em" }}>
                  <li>
                    Notify users that a fresh Copilot Daily Report was ready
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
                <h3 style={{ color: colors.copilotBlue }}>
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

export default Copilot;
