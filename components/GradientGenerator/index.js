import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientGeneratorContainer,
  ResponsiveContainer,
  GradientHeading,
  GradientPara,
  GradientDirectionList,
  GradientGeneratorPara,
  ColorPickerContainer,
  ColorValue,
  CustomInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    fromColorInput: ' #8ae323',
    toColorInput: ' #014f7b ',
    activeGradientDirection: gradientDirectionsList[0].value,
    gradientValue: `to ${gradientDirectionsList[0].value},#8ae323,#014f7b`,
  }

  generateGradient = () => {
    const {fromColorInput, toColorInput, activeGradientDirection} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection},${fromColorInput},${toColorInput}`,
    })
  }

  onChangeFromColor = event => {
    this.setState({fromColorInput: event.target.value})
  }

  onColorInput = event => {
    this.setState({toColorInput: event.target.value})
  }

  clickGradientDirectionItem = direction => {
    this.setState({activeGradientDirection: direction})
  }

  render() {
    const {
      fromColorInput,
      toColorInput,
      gradientValue,
      activeGradientDirection,
    } = this.state
    return (
      <GradientGeneratorContainer
        gradientValue={gradientValue}
        data-testid="gradientGenerator"
      >
        <ResponsiveContainer>
          <GradientHeading>Generate a CSS Color Gradient</GradientHeading>
          <GradientPara>Choose Direction</GradientPara>
          <GradientDirectionList>
            {gradientDirectionsList.map(eachItem => (
              <GradientDirectionItem
                gradientDirectionDetails={eachItem}
                key={eachItem.directionId}
                clickGradientDirectionItem={this.clickGradientDirectionItem}
                isActive={activeGradientDirection === eachItem.value}
              />
            ))}
          </GradientDirectionList>
          <GradientGeneratorPara>Pick the Colors</GradientGeneratorPara>
          <ColorPickerContainer>
            <customInputContainer>
              <ColorValue>{fromColorInput}</ColorValue>
              <CustomInput
                type="color"
                value={fromColorInput}
                onChange={this.onChangeFromColor}
              />
            </customInputContainer>
            <customInputContainer>
              <ColorValue>{toColorInput}</ColorValue>
              <CustomInput
                type="color"
                value={toColorInput}
                onChange={this.onColorInput}
              />
            </customInputContainer>
          </ColorPickerContainer>
          <GenerateButton type="button" onClick={this.generateGradient}>
            Generate
          </GenerateButton>
        </ResponsiveContainer>
      </GradientGeneratorContainer>
    )
  }
}

export default GradientGenerator
