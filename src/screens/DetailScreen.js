import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, Dimensions, ScrollView } from 'react-native';
import { GetSimilliarMovies, GetSimilliarTv } from "../actions/action";
import HeaderMovieComponent from "../components/HeaderMovie.component";
import { connect } from "react-redux";
import MovieListComponent from "../components/MovieList.component";
import Entypo from 'react-native-vector-icons/dist/Entypo';

const DetailScreen = ({ route, GetSimilliarMovies, getSimilliarMovies, navigation, GetSimilliarTv }) => {
    const { data } = route.params;

    const [dataDetail, setDataDetail] = useState('');
    const [similliarMovies, setSimilliarMovies] = useState('');

    useEffect(() => {
        if (!data.name) {
            // console.log('inimovie')
            GetSimilliarMovies(data.id);
        }
        else {
            // console.log('ini tv')
            GetSimilliarTv(data.id)
        }
        setDataDetail(data);
        setSimilliarMovies(getSimilliarMovies);
    }, [])




    const onSelectHandler = (data) => {
        setDataDetail(data);

        if (!data.name) {

            GetSimilliarMovies(data.id);
        }
        else {

            GetSimilliarTv(data.id)
        }
    }

    const onBackHandler = () => {
        navigation.goBack()
    }



    return (
        <View style={styles.screen}>
            <StatusBar
                translucent backgroundColor="transparent"
            />
            <HeaderMovieComponent
                data={dataDetail}
                onBack={onBackHandler}
            >
            </HeaderMovieComponent>

            <ScrollView
                contentContainerStyle={{
                    paddingBottom: 50
                }}
                style={{
                    marginHorizontal: 10,
                }}
                showsVerticalScrollIndicator={false}
            >
                <Text style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 20,
                    lineHeight: 23,
                    marginVertical: 15
                }}>Synopsis</Text>
                <View style={{
                    backgroundColor: '#242424'
                }}>
                    <Text style={{
                        color: 'white',
                        margin: 5,
                        fontSize: 14,
                        lineHeight: 20,
                        opacity: 0.6
                    }}>{dataDetail.overview}</Text>
                </View>

                <View style={{
                    borderColor: '#FFFFFF',
                    borderWidth: 0.5,
                    marginVertical: 15
                }}>

                </View>
                <View style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 10
                }}>
                    <Text style={styles.leftTitle}>You Might Also Like This</Text>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <Text style={styles.rightTitle}>See All</Text>
                        <Entypo
                            name="chevron-small-right"
                            size={20}
                            color="#FFE922"
                        />
                    </View>

                </View>

                {similliarMovies ?
                    <View style={{

                    }}>
                        <MovieListComponent
                            data={getSimilliarMovies}
                            onSelect={onSelectHandler}
                        >
                        </MovieListComponent>
                    </View>
                    : null
                }
            </ScrollView>


        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#1D1D1D',
        height: '100%',
    },
    leftTitle: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: Dimensions.get('window').height / 40.6,
        lineHeight: 23,
        color: 'white',

    },
    rightTitle: {
        fontFamily: 'Roboto',
        fontSize: Dimensions.get('window').height / 58,
        alignSelf: 'center',
        color: '#FFE922'
    }
})

const mapStateToProps = state => {
    return { getSimilliarMovies: state.similliarmovies }
}

export default connect(mapStateToProps, { GetSimilliarMovies, GetSimilliarTv })(DetailScreen);