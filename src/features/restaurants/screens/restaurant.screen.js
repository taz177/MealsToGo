import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform, SafeAreaView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1px;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeigt}px`};
`;

const Search = styled(View)`
padding: ${(props) => props.theme.space[3]};
`;

const List = styled(View)`
padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantScreen = () => {
    return(
    <StyledSafeAreaView>
    <Search>
      <Searchbar placeholder='search' />
    </Search>
    <List>
    <RestaurantInfoCard />
  </List>
  </StyledSafeAreaView>
);}


