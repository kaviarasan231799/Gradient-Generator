import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDirectionDetails, isActive, clickGradientDirectionItem} = props
  const {value, displayText} = gradientDirectionDetails

  const onClickDirectionItem = () => {
    clickGradientDirectionItem(value)
  }

  return (
    <ListItem>
      <DirectionButton
        type="button"
        onClick={onClickDirectionItem}
        isActive={isActive}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
