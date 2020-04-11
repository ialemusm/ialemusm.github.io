import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/dev.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Welcome!</h1>
				<h4>I’m Iván and I’m a software engineer! I love learning about Ethical Hacking and Artificial Intelligence :D</h4>
				<Button as={AnchorLink} href="#contact">
					Hire me
				</Button>
			</Details>
			<Thumbnail>
				<img src={dev} alt="I’m Iván and I’m a software engineer!" />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
