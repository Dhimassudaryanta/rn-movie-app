import moment from "moment";
import React from "react";
import { View, Text, StyleSheet, ImageBackground, Dimensions, Image, TouchableOpacity } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import Entypo from 'react-native-vector-icons/dist/Entypo';

const HeaderMovieComponent = ({ data, onBack }) => {

    return (

        <ImageBackground
            source={{ uri: `https://image.tmdb.org/t/p/w500/${data.length > 1 ? data[0].backdrop_path : data.backdrop_path}` }}
            style={{
                width: '100%',
                height: Dimensions.get('window').height / 2.9
            }}
            resizeMode="cover"
        >
            {data.length > 1 ?
                <View style={{
                    // borderColor: 'white',
                    // borderWidth: 1,
                    width: '100%',
                    height: '100%',
                    // justifyContent: 'center',
                    alignItems: 'center'

                }}>
                    <View style={{
                        width: '97%',
                        height: '100%',
                        // borderWidth: 1,
                        // borderColor: 'white'
                    }}>
                        {data[0].backdrop_path === null ?
                            <Text style={{
                                color: 'white',
                                alignSelf: 'center'
                            }}>Sorry this image is not available, please see another movies / TV show</Text>
                            :
                            null
                        }

                        <Image
                            source={require('../../assets/logo.png')}
                            style={{
                                marginTop: '10%'
                            }}
                        >
                        </Image>
                        <Text style={{
                            color: 'white',
                            fontSize: 24,
                            fontWeight: 'bold',
                            lineHeight: 28,
                            marginTop: '15%'

                        }}>
                            {data[0].title}
                        </Text>
                        <View style={{
                            borderColor: '#FFE922',
                            borderWidth: 1,
                            width: '30%',
                            borderRadius: 40,
                            marginTop: '10%'
                        }}>
                            <Text style={{
                                color: '#FFE922',
                                fontSize: 14,
                                lineHeight: 24,
                                padding: 10,
                            }}>
                                Watch Now
                            </Text>
                        </View>
                    </View>
                </View>
                :
                <View style={{
                    height: '100%',

                    alignItems: 'center'

                }}>
                    <View style={{
                        width: '95%',
                        // borderWidth: 1,
                        // borderColor: 'white',
                        height: '100%',
                        justifyContent: 'space-between',
                    }}>
                        <TouchableOpacity
                            onPress={() => onBack()}
                            style={{
                                // borderWidth: 1,
                                // borderColor: 'white',
                                marginTop: '20%'
                                // height: '30%'
                            }}>
                            <Entypo name="chevron-small-left" size={26} color="white" />
                        </TouchableOpacity>

                        {data.backdrop_path === null ?
                            <Text style={{
                                color: 'white',
                                alignSelf: 'center'
                            }}>Sorry this image is not available, please see another movies / TV show</Text>
                            :
                            null
                        }


                        <View>
                            <Image
                                source={require('../../assets/logo.png')}
                            >
                            </Image>
                            <View style={{
                                flexDirection: 'row',
                                // borderWidth: 1,
                                // borderColor: 'white'
                            }}>
                                <AirbnbRating
                                    count={5}
                                    defaultRating={data.vote_average / 2}
                                    size={12}
                                    showRating={false}
                                />
                                <Text style={{
                                    color: '#FFFFFF',
                                    fontSize: 10,
                                    opacity: 0.6,
                                    fontWeight: '400'
                                }}>Release year. {moment(data.release_date).format('YYYY')}</Text>
                            </View>
                            <Text style={{
                                color: 'white',
                                fontSize: 24,
                                fontWeight: 'bold',
                                marginBottom: 10,
                                lineHeight: 28
                            }}>
                                {data.length > 1 ? data[0].title : data.title}
                            </Text>
                        </View>
                    </View>
                </View>
            }

        </ImageBackground>

    )
}

const style = StyleSheet.create({

})

export default HeaderMovieComponent;