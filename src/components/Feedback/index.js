import {useState} from 'react'
import {Container,Con,CardContainer,Header,ListContainer,ItemContainer,LogoImg,Name,LoveContainer,Love,ThankYou,Support} from './styledComponents'

const Feedback=(props)=> {
    const [button,setButton]=useState(true)

  const onClickEmoji = () => {
    setButton(prevState => (!prevState))
  }
   const {resources} = props
    const {emojis, loveEmojiUrl} = resources

    return (
      <Container>
        <CardContainer>
          {button ? (
            <Con>
              <Header>
                How satisfied are you with our customer support performance?
              </Header>
              <ListContainer>
                {emojis.map(eachItem => (
                  <ItemContainer key={eachItem.id}>
                    <LogoImg
                      src={eachItem.imageUrl}
                      alt={eachItem.name}
                      onClick={onClickEmoji}
                    />
                    <Name>{eachItem.name}</Name>
                  </ItemContainer>
                ))}
              </ListContainer>
            </Con>
          ) : (
            <LoveContainer>
              <Love src={loveEmojiUrl} alt="love emoji" />
              <ThankYou>Thank you!</ThankYou>
              <Support>
                We will use your feedback to improve our customer support
                performance.
              </Support>
            </LoveContainer>
          )}
        </CardContainer>
      </Container>
    )
}

export default Feedback
