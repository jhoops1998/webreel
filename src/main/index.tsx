import React from 'react';

import Header from '../components/header';
import Editor from '../components/editor';
import { FiGithub } from 'react-icons/all';
import { Container, Footer } from './styles';

const Main: React.FC = () => {
    return (
        <Container>
            <Header>
            </Header>
            {/* <Editor /> */}
            <Footer>
                <a href="https://github.com/evan-blaine/webreel" 
                target = "blank_">
                    <FiGithub />
                    &nbsp;/webreel
                </a>
            </Footer>
        </Container>
    )
}

export default Main;