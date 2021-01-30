import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';

import db from '../db.json';
import Widget from '../src/components/widget/index';
import Footer from '../src/components/footer/index';
import GitHubCorner from '../src/components/gitHubCorner/index';
import QuizBackground from '../src/components/quizBackground/index';
import Input from '../src/components/input/index';
import Button from '../src/components/button/index';
import QuizContainer from '../src/components/quizContainer/index';
import QuizLogo from '../src/components/quizLogo/index';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Alura Quiz</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
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
              <Input
                name="username"
                placeholder="Name"
                onChange={(event) => {
                  setName(event.target.value);
                }}
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                Play
              </Button>
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
