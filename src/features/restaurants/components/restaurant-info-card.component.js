import React from 'react';
import {Text, View, Image} from 'react-native';
import styled from 'styled-components';
import { Card } from 'react-native-paper';


const RestaurantCard = styled(Card)`
background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Star = styled(Image)`
width: 40px;
height: 40px;
`;

const OpenSection = styled(View)`
padding-top: ${(props) => props.theme.space[2]};
margin-left: 40%;
`;

const Open = styled(Image)`
width: 30px;
height: 30px;
`;

const Section = styled(View)`
flex-direction: row;
`;


const RestaurantCardCover = styled(Card.Cover)`
padding: ${(props) => props.theme.space[3]};
background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;



export const RestaurantInfoCard = ({restaurant = {}}) => {
    const {
        name = "Some Restaurant",
        icon,
        photos = [
          "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
        ],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily,
        isReserved = false,

    } = restaurant;
    
    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
      <RestaurantCard elevation={5} >
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Info>
        <Title>{name}</Title>
        <Section>
        <Rating>
        {ratingArray.map(() => (
        <Star source={require('../../../../assets/star.png')} />
        ))}
        </Rating>
        <OpenSection>
        {isReserved && (
              <Open source={require('../../../../assets/reserved.png')} />
            )}
        {!isReserved && (
              <Open source={require('../../../../assets/open.png')} />
            )}
        
        </OpenSection>
        </Section>
        <Address>{address}</Address>
        </Info>
      </RestaurantCard>
    );
  };
  


