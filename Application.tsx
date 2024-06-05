import { View, Text, StyleSheet, FlatList, ScrollView, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { searchUsers } from './stores/auth/methods'

export const Application = () => {

    const [userName, setUserName] = useState('');
    const dispatch = useDispatch();
    const filteredUsers = useSelector(({ Test }) => Test.auth.filteredUsers)
    const searchedUser = useSelector(({ Test }) => Test.auth.searchedUser);

    const handleSearch = () => {
        dispatch(searchUsers(userName) as any);
    };

    const renderItem = ({ item, index }) => (
        <View style={[styles.row, item.uid === searchedUser?.uid && styles.highlight]}>
            <Text style={styles.cell}>{index + 1}</Text>
            <Text style={styles.cell}>{item.name}</Text>
            <Text style={styles.cell}>{item.bananas}</Text>
        </View>
    );
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.inputRow}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter user name"
                        value={userName}
                        onChangeText={setUserName}
                    />
                    <Button title="Search" onPress={handleSearch} />
                </View>
                <View style={styles.table}>
                    <View style={styles.row}>
                        <Text style={styles.headerCell}>Rank</Text>
                        <Text style={styles.headerCell}>Name</Text>
                        <Text style={styles.headerCell}>Bananas</Text>
                    </View>
                    <FlatList
                        data={filteredUsers}
                        renderItem={renderItem}
                        keyExtractor={item => item.uid}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
        padding: 16,
    },
    inputRow: {
        flexDirection: 'row', // Align items in a row
        alignItems: 'center', // Center items vertically within the row
        marginBottom: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginRight: 10,
        width: '75%',
    },
    table: {
        width: '100%',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    cell: {
        flex: 1,
        textAlign: 'center',
    },
    headerCell: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    highlight: {
        backgroundColor: '#ffeb3b',
    },
});
