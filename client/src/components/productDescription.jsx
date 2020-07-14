import React from 'react';
import styled from 'styled-components'

const Grid = styled.div`
  border: 2px;
  border-color: #cfcfcf;
  border-style: solid;
  margin: 7%;
  max-width: 1000px;
`;
const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const Row = styled.div`
  display: flex;
  margin-top: 80;
  margin-left: 20px;
  margin-right: 20px;

`;
const Col = styled.div`
  flex: ${(props) => props.size};
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 50px;
  margin-bottom: 50px;
`;
const Col2 = styled.div`
  flex: ${(props) => props.size};
  margin-right: 50px;
  margin-top: 50px;
  margin-bottom: 50px;
`;
const StyledP = styled.p`
  font-weight: 400;
  color: #303030;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-size: 14px;
  line-height: 22px;
`;
const StyledH3 = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #303030;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  letter-spacing: .03em;
  margin-block-end: 0em;
`;
const StyledBorder = styled.div`
  padding-left: 50px;
  border-left: 1px;
  border-left-style: solid;
  border-left-color: lightgray;

`;




let DescriptionBlock = (props) => {
  return (
    <StyledDiv>
      <Grid>
        <Row>
          <Col size={1}>
            <StyledH3>PRODUCT DESCRIPTION</StyledH3>
            <StyledP>{props.items.data[0].description}</StyledP>
            <StyledP><strong>Activity: </strong>{props.items.data[0].activitydetail}</StyledP>
            <StyledP><strong>Family: </strong>{props.items.data[0].familydetail}</StyledP>
            <StyledP><strong>Gender: </strong>{props.items.data[0].genderdetail}</StyledP>
            <StyledP><strong>Legal notice: </strong>{props.items.data[0].legaldetail}</StyledP>
            <StyledP><strong>Features: </strong>{props.items.data[0].featuresdetail}</StyledP>
          </Col>
          <Col2 size={1}>
            <StyledBorder>
              <StyledH3>PRODUCT SPECIFICATIONS</StyledH3>
              <StyledP> <strong>Material: </strong>{props.items.data[0].materialspec}</StyledP>
              <StyledP><strong>Height: </strong>{props.items.data[0].heightspec} cm</StyledP>
              <StyledP><strong>Width: </strong>{props.items.data[0].widthspec} cm</StyledP>
              <StyledP><strong>Depth: </strong>{props.items.data[0].depthspec} cm</StyledP>
              <StyledP><strong>Volume: </strong>{props.items.data[0].volumespec} l</StyledP>
              <StyledP><strong>Weight: </strong> {props.items.data[0].weigthspec} g</StyledP>
              <StyledP><strong>Additional Care Instructions: </strong>{props.items.data[0].additionalcare}</StyledP>
            </StyledBorder>
          </Col2>
        </Row>
      </Grid>
    </StyledDiv>
  )
}

export default DescriptionBlock