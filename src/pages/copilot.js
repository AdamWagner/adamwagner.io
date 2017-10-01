import React from "react";
import Link from "gatsby-link";

import Box from "../components/Box";
import List from "../components/List";
import Section from "../components/Section";
import ProjectDetail from "../components/ProjectDetail";

import { colors } from "../styles/vars.json";
import s from "./copilot.module.styl";

import v1 from "./badracket.com-v1.jpg";
import v4 from "./badracket.com-v4.jpg";
import possible from "./brv5-possible.gif";
import mobileWireframe from "./brv5-mobile-wireframe.jpg";
import visuals1 from "./brv5-visual-draft-0.jpg";
import visuals2 from "./brv5-final-desktop-mockup.jpg";
import phone from "./brv5-iphone.jpg";
import interview from "./brv5-final-interview.png";
import shows from "./brv5-final-shows.png";
import buy from "./brv5-final-buy.png";

import focusSketch from "./copilot-sketch-focus-table.jpg";
import interviewSketch from "./copilot-sketch-interview.jpg";
import wireframe from "./copilot-web-wireframe.jpg";
import webMac01 from "./copilot-web-macbook.png";
import mobileExplorations from "./copilot-mobile-explorations-2.jpg";
import mobileDemo from "./copilot-video-mockup.mp4";

class Copilot extends React.Component {
  render() {
    return (
      <ProjectDetail projectName="copilot">
        <div ref="content">
          <Section
            textColor={colors.white}
            color={colors.copilotBlue}
            softTop="5em"
            softBottom="4em"
          >
            <Box container>
              <Box twoThird softRight="10p">
                <div>
                  <h1>
                    Finding product/market fit for restaurant revenue management
                    software.
                  </h1>

                  <p>
                    I led product design at Copilot as we strove to find and
                    then leverage product/market fit. Our proprietary ability to
                    access, process, and distribute data from leading Point of
                    Sale systems gave Copilot a unique ability to provide
                    enterprise level business insight to independent
                    restaurants.
                  </p>

                  <p>
                    We dramatically simplified the delivery of actionable
                    insights, focusing on timely push content rather a power
                    dashboard.
                  </p>

                  <p>
                    After much iteration,{" "}
                    <strong>
                      80% of our customers engaged with Copilot insights every
                      day
                    </strong>.
                  </p>
                </div>
              </Box>
              <Box third>
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
              </Box>
            </Box>
          </Section>



          <Section softTop="5em" softBottom="5em" className={s.processContainer}>
            <Box container>
              <Box>
                <h2>Product Development Timeline</h2>

                <div className={s.process}>

                  <div className={s.processItem}>
                    <p>Discovery & analysis</p>
                    <p className={s.textSecondary}>User research</p>
                    <p className={s.textSecondary}>Focusing on an opportunity</p>
                  </div>
                  <div className={s.processItem}>
                    <p>Define the product</p>
                    <p className={s.textSecondary}>Feature prioritization</p>
                    <p className={s.textSecondary}>Wireframe IA & UX</p>
                    <p className={s.textSecondary}>Simplify during visual design</p>
                    <p className={s.textSecondary}>Learn from failure</p>
                  </div>
                  <div className={s.processItem}>
                    <p>Redesign to fit existing workflows</p>
                    <p className={s.textSecondary}>Simplify further for mobile</p>
                    <p className={s.textSecondary}>Establish habit</p>
                  </div>
                  <div className={s.processItem}>
                    <p>Results</p>
                    <p className={s.textSecondary}>80% of users engage daily</p>
                    <p className={s.textSecondary}>74% consider Copilot essential</p>
                  </div>
                </div>


              </Box>
            </Box>
          </Section>








          {/* <Section
            softTop="5em"
            color={colors.white}
            textColor={colors.asphalt}
          >
            <Box container>
              <Box full softRight="20p">
                <h2 style={{ color: colors.copilotBlue }}>Restaurant lingo</h2>
                <p style={{ marginBottom: "0" }}>
                  Let’s just get this out of the way now 😊
                </p>
                <p>
                  Restaurant-speak is a bit foreign sounding to the uninitiated.
                </p>
              </Box>
            </Box>

            <Box container softBottom="1em">
              <Box half softRight="10p">
                <dl>
                  <dt>Covers</dt>
                  <dd>
                    People. “We had 221 covers last night!” simply means 221
                    guests were served during dinner.
                  </dd>
                  <dt>Guest Average</dt>
                  <dd>
                    The amount spent by each person. Usually averaged by shift.
                  </dd>
                </dl>
              </Box>
              <Box half softRight="10p">
                <dl>
                  <dt>
                    <em>n</em>-Top
                  </dt>
                  <dd>
                    Can refer to a party of n size or a table of n size. E.g.,
                    “Why did you seat that two-top [party] at our only five-top
                    [table]?”
                  </dd>
                  <dt>Turn time</dt>
                  <dd>
                    The time a party spends at a table. Usually averaged by
                    shift and party size.
                  </dd>
                </dl>
              </Box>
            </Box>
          </Section>
 */}

          <Section
            softTop="5em"
            softBottom="5em"
            color={colors.white}
            textColor={colors.asphalt}
          >
            <Box container softBottom="1em">
              <Box half>
                <h2 style={{ color: colors.copilotBlue }}>Target market</h2>
                <p>
                  Copilot’s target user was the decision-maker - typically the{" "}
                  <strong>owner </strong>or <strong>general manager</strong> -
                  at an independent restaurant or small restaurant group.
                </p>
                <p>
                  Restaurant decision-makers want to put as many “butts in
                  seats” as possible while maintaining smooth operations, high
                  staff morale, and delivering the desired level of hospitality.
                </p>
                <p>
                  They juggle many areas of concern. They’re
                  distracted. Often focused on the problem that’s most pressing{" "}
                  <em>right now</em>, there’s little time left to carefully consider
                  decisions affecting the bottom line of their business.
                </p>
              </Box>

              <Box half>
                <h2 style={{color: colors.copilotBlue}}>My involvement</h2>
                <p>As Copilot's only product designer, I did <em>many</em> things, including
                product marketing, front-end development, and product analysis. However, in the scope of this case study, I handled:</p>
                <ul>
                  <li>Workflows & product mapping</li>
                  <li>User testing</li>
                  <li>Wireframing</li>
                  <li>Visual design</li>
                  <li>Frontend development</li>
                </ul>
              </Box>
            </Box>
          </Section>

          <Section
            softTop="5em"
            softBottom="5em"
            color={colors.offWhite}
            textColor={colors.asphalt}
          >
            <Box container softBottom="1em">
              <Box full softRight="20p">
                <h2 style={{ color: colors.copilotBlue }}>
                  Discovering opportunities
                </h2>
                <p style={{ fontWeight: "bold" }}>User research</p>
                <p>
                  I spoke with dozens of restaurant owners and general managers
                  to learn how they think about their business, how they spend
                  their day, and what keeps them up at night.
                </p>
                <img
                  src={interviewSketch}
                  style={{ mixBlendMode: "multiply" }}
                  alt=""
                />
                <p>
                  <strong>Takeaways</strong>
                </p>
                <ul className={s.textList}>
                  <li>
                    Restaurant owners <em>want</em> to put more effort into
                    analyzing business performance data, but don’t. It’s like
                    working out - everybody wants to, few actually do it, and
                    the majority that don't have a good excuse.
                  </li>
                  <li>
                    Restaurant owners don’t have time to dig into the details.
                    They need simple, actionable answers.
                  </li>
                  <li>
                    However, they’re skeptical of data that conflicts with their
                    instincts (which is often the case). How can Copilot
                    generate trust in the data without overbearing detail?
                  </li>
                </ul>
                <p style={{ marginTop: "2em" }}>
                  When a restaurant owner finds a moment to think about changing
                  up the menu, running a deal, changing operating hours, or
                  reducing turn times - decisions are often made based on gut
                  feeling or instinct. This dearth of hard, actionable data is
                  dangerous in a business with{" "}
                  <a
                    href="http://www.businessinsider.com/why-restaurants-fail-so-often-2014-2"
                    target="_blank"
                  >
                    a 60% chance of failure in the first year.
                  </a>
                </p>
              </Box>
            </Box>
          </Section>

          <Section
            softTop="5em"
            softBottom="5em"
            color={colors.white}
            textColor={colors.asphalt}
          >
            <Box container>
              <Box full softRight="20p">
                <h2 style={{ color: colors.copilotBlue }}>
                  Focusing on an opportunity
                </h2>
                <p>
                  Copilot existed to fascilitate quality decision-making for
                  high-impact activities that our users were neglecting.
                </p>
                <img
                  src={focusSketch}
                  style={{ mixBlendMode: "multiply" }}
                  alt=""
                />
                <p>
                  Together, these activities constitute{" "}
                  <strong>Revenue Management</strong> — the application of
                  disciplined analytics to predict consumer behaviour at the
                  micro-market level and optimize business levers to maximize
                  revenue growth.
                </p>
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
              <Box softRight="20p">
                <h2 style={{ color: colors.copilotBlue }}>
                  Defining the product experience
                </h2>
                <p>
                  During discovery I learned that, in the rare cases users
                  engaged with data, they did so on the big screen — the POS. I found keen interest
                  in powerful data analysis features such as forecasting and
                  cohort analysis. Navigating through dates seemed like a must.
                </p>
                <p>
                  All of this functionality required the space and power of the
                  web, and we already had a design and development framework for
                  web apps.
                </p>
                <p>So, I started there.</p>
              </Box>
            </Box>

            <img src={wireframe} alt="" m />

            <Box container>
              <Box softRight="20p">
                <p>Testing revealed that user's were uncomfortable with the ambiguity
                  of how forecasts were calculated. They typically relied on historical benchmarks
                  to forecast.</p>
              </Box>
            </Box>
          </Section>

          <Section
            softTop="3em"
            textColor={colors.white}
            color={colors.copilotBlue}
          >
            <Box container softBottom="1em" softTop="2em">
              <Box textCenter twoThird center>
                <h2>Simplifying the dashboard</h2>
                <p>While designing visuals, I removed the sidebar and
                evolved the forecast model into a flexible
                benchmark model that was more familiar to users.</p>
              </Box>
            </Box>
            <img src={webMac01} alt="" />
          </Section>

          <Section
            color={colors.white}
            textColor={colors.asphalt}
            softTop="5em"
            softBottom="4em"
          >
            <Box container>
              <Box full>
                <h2 style={{ color: colors.copilotBlue }}>The launch & failure of Copilot's web dashboard</h2>
              </Box>
            </Box>
            <Box container>
              <Box softRight="20p">

              <p>
                  Once launched, <strong>not a single user</strong> logged in.
                  We designed and built Copilot's web product hand-in-hand with a loyal,
                  enthusiastic base of beta customers.
                  And yet, none of them actually wanted to use
                  what their feedback had helped shape.
                </p>

                <p>
                  But the problem wasn't the feature set. <strong>It was the delivery mechanism. </strong>
                </p>

                <p>
                  Recall that our target users have neither the
                  time nor the impulse to log into a web app. They're not even
                  in front of a computer for much of the day. Copilot needed to fit
                  seemlessly into their existing workflow.
                </p>
              </Box>
            </Box>
          </Section>

          <Section
            color={colors.offWhite}
            textColor={colors.asphalt}
            softTop="5em"
            softBottom="4em"
          >
            <Box container>
              <Box full>
                <h2 style={{ color: colors.copilotBlue }}>
                  Redesigning Copilot to fit seemlessly into existing workflows
                </h2>
              </Box>
            </Box>
            <Box container>
              <Box softRight="20p">
                <p>We wanted Copilot to be another of our user's essential haibts - akin to
                their morning cup of coffee or pre-shift staff meeting.</p>
                <p>To establish this habit, Copilot needed to:</p>
                <ul>
                  <li>Remind our users to review Copilot's benchmarks and insights</li>
                  <li>Be accessible despite our users' chaotic environments</li>
                </ul>
                <p>So as is so often the case in product design, I needed to simplify further.</p>
              </Box>
            </Box>

            <Box container softTop="1em">
              <Box>
                <img src={mobileExplorations} alt="" />
              </Box>
            </Box>
            <Box container softTop="3em">
              <Box softRight="20p">
                <p>
                  In parallel, we continued to discover the power of
                  benchmarking. Comparing current performance to the past was
                  useful, but it was even <em>more</em> useful to compare the
                  daily performance of a single location to that of a{" "}
                  <em>group of its peers</em>.
                </p>
              </Box>
            </Box>
          </Section>

          <Section>
                <video
                  autoPlay
                  loop
                  style={{
                    position: "static",
                    opacity: 1,
                    display: "block",
                    width: '100%',
                    objectFit: 'fill'
                  }}
                >
                  <source src={mobileDemo} type="video/mp4"/>
                </video>
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

export default Copilot;
