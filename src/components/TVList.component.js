import React from "react";
import { View, Text, StyleSheet, Dimensions, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';

const TVListComponent = ({ data, onSelect }) => {

    return (
        <View style={{

            width: '100%',
            height: Dimensions.get('window').height / 3.7
        }}>
            <FlatList
                horizontal
                data={data.slice(0, 10)}
                renderItem={({ item }) =>
                    <TouchableOpacity
                        style={{
                            paddingHorizontal: 5,
                            // borderColor: 'white',
                            // borderWidth: 1
                        }}
                        onPress={() => onSelect(item)}
                    >
                        {/* <Text style={{
                            color: 'white'
                        }}>{item.original_title}</Text> */}
                        <ImageBackground
                            source={{
                                uri: `https://image.tmdb.org/t/p/w300/${item.poster_path}`
                            }}
                            style={{
                                width: Dimensions.get('window').width / 2.35,
                                height: '100%'
                            }}
                            resizeMode="cover"
                        >
                            <View style={{
                                height: '100%',
                                width: '100%',
                                justifyContent: 'flex-end',
                                alignItems: 'flex-start',
                                // borderColor: 'white',
                                // borderWidth: 1
                            }}>
                                <AirbnbRating
                                    count={5}
                                    defaultRating={item.vote_average / 2}
                                    size={9.5}
                                    showRating={false}
                                />
                                <Text style={{
                                    color: 'white',
                                    margin: 5,
                                    fontSize: 16,
                                    fontWeight: 'normal',
                                    lineHeight: 23
                                }}>{item.name}</Text>
                            </View>

                        </ImageBackground>

                    </TouchableOpacity>
                }
            >

            </FlatList>
        </View>
    )
};

const styles = StyleSheet.create({


})

export default TVListComponent;