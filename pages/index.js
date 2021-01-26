import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';

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
  const router = useRouter();
  const [name, setName] = useState('');

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
            <form onSubmit={(event) => {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <input
                placeholder="Name"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
              <button type="submit" disabled={name.length === 0}>
                Play
              </button>
            </form>
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
