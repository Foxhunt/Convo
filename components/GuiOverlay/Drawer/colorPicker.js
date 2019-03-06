import { CustomPicker } from 'react-color'
import styled from "styled-components"
import { Saturation, Hue } from 'react-color/lib/components/common'

const Container = styled.div`
  height: 4vw;
  
	border-bottom: 1px solid #ffffff;
`

const SaturationDiv = styled.div`
  position: relative;
  width: 100%;
  height: 85%;
`
const HueDiv = styled.div`
  position: relative;
  width: 100%;
  height: 15%;
`

const HuePointer = styled.div`
  height: 0.55vw;
  width: 0.5vw;
  background: white;
  transform: translate(-50%);
`

const MyColorPicker = props =>
  <Container>
    <SaturationDiv>
      <Saturation
        {...props}
        onChange={props.onChange} />
    </SaturationDiv>
    <HueDiv>
      <Hue 
        {...props}
        pointer={HuePointer}
        onChange={props.onChange} />
    </HueDiv>
  </Container>

export default CustomPicker(MyColorPicker);