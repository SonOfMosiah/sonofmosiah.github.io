import { purple } from '@radix-ui/colors';
import { GetStaticProps } from 'next';
import { styled } from 'stitches.config';
import { Nothing } from 'components/Nothing';
import { ProjectCard } from 'components/ProjectCard';
import { githubApi } from 'services/axios';
import { Box } from 'styles/primitives/Box';
import { Text } from 'styles/primitives/Text';
import { VerticalBox } from 'styles/primitives/VerticalBox';
import { projects } from 'utils/projects';
import Head from 'next/head';

interface IRepo {
  name: string;
  description: string;
  productionUrl: string;
  repositoryUrl: string;
  stars: number;
  forks: number;
}

interface ProjectProps {
  repos: IRepo[];
}

export const HoverElement = styled('div', {
  opacity: 0,
  visibility: 'hidden',
  position: 'absolute',
  padding: '$8',
  width: '100%',
  height: '100%',
  boxSizing: 'content-box',
  alignSelf: 'center',
  borderRadius: '$6',
  background: '$primaryGradientA',
  transform: 'scaleX(0.95)',
  transition: 'all 0.2s ease',
  zIndex: 0,
});

const Projects = ({ repos }: ProjectProps) => {
  return (
    <>
      <Head>
        <title>SonOfMosiah | Projects</title>
      </Head>

      <Box variant='page'>
        <VerticalBox as='header'>
          <Text type='title'>Projects</Text>
          <Text type='paragraph'>My latest projects in github</Text>
        </VerticalBox>
        <VerticalBox>
          {repos.length ? (
            <>
              {repos.map((repo) => (
                <ProjectCard key={repo.name} repo={repo} />
              ))}
            </>
          ) : (
            <Nothing />
          )}
        </VerticalBox>
        <Text
          as='a'
          type='title'
          href='https://github.com/sonofmosiah'
          tabIndex={0}
          css={{
            position: 'relative',
            transition: '$base',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '$4',
            outlineWidth: 0,
            '&:focus-visible': {
              [`& ${HoverElement}`]: {
                outline: `2px solid ${purple.purple9}`,
              },
            },
            '&:hover': {
              [`& ${HoverElement}`]: {
                opacity: 1,
                transform: 'scaleX(1)',
                visibility: 'visible',
              },
            },
          }}
        >
          See more...
          <HoverElement />
        </Text>
      </Box>
    </>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps = async () => {
  let response: any = [];

  for await (const project of projects) {
    const { data }: any = await githubApi.get(`/repos/sonofmosiah/${project}`);
    response.push(data);
  }

  const repos = await Promise.all(
    response.map((repo: any) => ({
      name: repo.name,
      description: repo.description,
      productionUrl: repo.homepage,
      repositoryUrl: repo.html_url,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
    }))
  );

  return {
    props: {
      repos: repos,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
