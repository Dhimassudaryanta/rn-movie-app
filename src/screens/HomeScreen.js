import React from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import HeaderMovieComponent from '../components/HeaderMovie.component';
import MovieListComponent from '../components/MovieList.component';
import TVListComponent from '../components/TVList.component';
import Entypo from 'react-native-vector-icons/dist/Entypo';

const HomeScreen = ({ getNowPlaying, navigation, getTvPopular, getTvTopRated }) => {

    // console.log(getTvPopular)


    const onSelectHandler = (data) => {
        navigation.navigate('Detail', { data })
    }

    return (
        <View style={styles.screen}>
            <StatusBar
                translucent backgroundColor="transparent"
            />

            {getNowPlaying ?
                <HeaderMovieComponent
                    data={getNowPlaying}
                >
                </HeaderMovieComponent>
                : null}

            <ScrollView
                contentContainerStyle={{
                    paddingBottom: 50
                }}
                style={{
                    marginHorizontal: 10,
                }}
                showsVerticalScrollIndicator={false}
            >

                <View style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 10
                }}>
                    <Text style={styles.leftTitle}>New Release</Text>
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
                {getNowPlaying ?
                    <View>
                        <MovieListComponent
                            data={getNowPlaying}
                            onSelect={onSelectHandler}
                        ></MovieListComponent>

                    </View>
                    : null
                }
                <View style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 10
                }}>
                    <Text style={styles.leftTitle}>Popular on TV</Text>
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
                {getTvPopular ?
                    <TVListComponent
                        data={getTvPopular}
                        onSelect={onSelectHandler}
                    ></TVListComponent>

                    : null}

                <View style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 10
                }}>
                    <Text style={styles.leftTitle}>Top Rated on TV</Text>
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
                {getTvTopRated ?
                    <TVListComponent
                        data={getTvTopRated}
                        onSelect={onSelectHandler}
                    ></TVListComponent>

                    : null}
            </ScrollView>





        </View>


    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#1D1D1D',
        height: '100%'
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
    return {
        getNowPlaying: state.nowplaying,
        getTvPopular: state.tvpopular,
        getTvTopRated: state.tvtoprated

    }
}

export default connect(mapStateToProps)(HomeScreen)


