import styled from 'styled-components';
import Head from 'next/head';
import db from '../db.json';
import Widget from '../src/components/widget/index';
import Footer from '../src/components/footer/index';
import GitHubCorner from '../src/components/gitHubCorner/index';
import QuizBackground from '../src/components/quizBackground/index';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Alura Quiz</title>
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>The legend of zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <p>dssadsadsa as dskadjlsa</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>The legend of zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <p>dssadsadsa as dskadjlsa</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/TiagoR15" />
    </QuizBackground>
  );
}
