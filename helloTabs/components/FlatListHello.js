/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, RefreshControl, FlatList } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    cell: {
        borderWidth: 0.5,
    },
    text: {
        fontSize: 20,
        marginBottom: 3,
        marginTop: 3,
        marginLeft: 8,

    },
});

export const FlatListHello = () => {

    const [items, setItem] = useState([
        { name: 'Christo' },
        { name: 'Abhinav' },
        { name: 'Bittu' },
        { name: 'Ayaan' },
        { name: 'Nannu' },
    ]);

    const [refresh, setRefresh] = useState(false);

    const onRefresh = () => {
        setRefresh(true);
        setItem([...items, { name: 'Mamma' }]);
        setRefresh(false);
    };

    const renderCell = (item) => {
        return (
            <View style={styles.cell} >
                <Text style={styles.text}>{item.name}</Text>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={items}
                renderItem={({ item }) => (
                    renderCell(item)
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={refresh}
                        onRefresh={() => { onRefresh() }}
                    />
                }
            />
        </SafeAreaView>
    );
};
