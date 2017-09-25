import React from "react";
import Link from "gatsby-link";
import Box from "../components/Box";

import Section from "../components/Section";
import ProjectDetail from "../components/ProjectDetail";

import sky from '../styles/vars.styl'

class BadRacket extends React.Component {
  render() {
    console.log(sky);
    return (
      <ProjectDetail projectName="badracket">
        <div ref="content">
          <Section>
            <Box container>
              <Box half>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Illum facere nesciunt officia, debitis assumenda iusto,
                    laudantium possimus accusamus sapiente aliquam saepe ipsam
                    quos, molestias omnis sit ipsa? Adipisci, distinctio,
                    quibusdam.
                  </p>
                  <p>Another thing I've been meaning to say</p>
                </div>
              </Box>
              <Box half>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Illum facere nesciunt officia, debitis assumenda iusto,
                    laudantium possimus accusamus sapiente aliquam saepe ipsam
                    quos, molestias omnis sit ipsa? Adipisci, distinctio,
                    quibusdam.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Illum facere nesciunt officia, debitis assumenda iusto,
                    laudantium possimus accusamus sapiente aliquam saepe ipsam
                    quos, molestias omnis sit ipsa? Adipisci, distinctio,
                    quibusdam.
                  </p>
                </div>
              </Box>
            </Box>
          </Section>

          <Section color="blue">
            <Box container>
              <Box third>
                <p>Lorem</p>
              </Box>
              <Box third>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo neque, repellat quaerat illum, sapiente at harum placeat aliquam odit voluptatibus maiores repellendus praesentium officia ex perspiciatis eveniet laudantium odio inventore? </p>
              </Box>
              <Box third>
                <p>Some more stuff</p>
              </Box>
            </Box>
          </Section>






        </div>
      </ProjectDetail>
    );
  }
}

export default BadRacket;
