import React from 'react';
import { Button, Checkbox } from 'antd';
import { StyledDiv } from './homeContainerStyles';

const Home = () => {
  return (
    <>
      <StyledDiv>哈哈哈</StyledDiv>
      <Button type="primary" disabled>
        sdsadasd
      </Button>
      <Button type="primary">ANTD</Button>
      <Checkbox />
    </>
  );
};

Home.propTypes = {};
export default Home;
