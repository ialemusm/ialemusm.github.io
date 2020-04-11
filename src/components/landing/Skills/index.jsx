import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'components/common'
import cpp from 'assets/languages/C++.svg'
import dev from 'assets/illustrations/skills.svg'
import docker from 'assets/languages/Docker.svg'
import git from 'assets/languages/Git.svg'
import java from 'assets/languages/Java.svg'
import javascript from 'assets/languages/Javascript.svg'
import kali from 'assets/languages/Kali-linux.svg'
import kubernetes from 'assets/languages/Kubernetes.svg'
import linux from 'assets/languages/Linux.svg'
import mongo from 'assets/languages/MongoDB.svg'
import python from 'assets/languages/Python.svg'
import redis from 'assets/languages/Redis.svg'
import tensor from 'assets/languages/Tensorflow.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'
import { Row, Col, Image } from 'react-bootstrap'

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
      </Thumbnail>
      <Details>
        <h1>Skills</h1>
        <Row>
          <Col xs={6} md={3}>
            <Image src={javascript} rounded />
          </Col>
          <Col xs={6} md={3}>
            <Image src={python} rounded />
          </Col>
          <Col xs={6} md={3}>
            <Image src={java} rounded />
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={3}>
            <Image src={cpp} rounded />
          </Col>
          <Col xs={6} md={3}>
            <Image src={mongo} rounded />
          </Col>
          <Col xs={6} md={3}>
            <Image src={redis} rounded />
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={3}>
            <Image src={kubernetes} rounded />
          </Col>
          <Col xs={6} md={3}>
            <Image src={kali} rounded />
          </Col>
          <Col xs={6} md={3}>
            <Image src={linux} rounded />
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={3}>
            <Image src={docker} rounded />
          </Col>
          <Col xs={6} md={3}>
            <Image src={git} rounded />
          </Col>
          <Col xs={6} md={3}>
            <Image src={tensor} rounded />
          </Col>
        </Row>
        <Button as={AnchorLink} href="#contact">
          Hire me
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
