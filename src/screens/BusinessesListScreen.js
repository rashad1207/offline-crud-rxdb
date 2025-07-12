import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';

import { v4 as uuidv4 } from 'uuid';
import { getDB } from '../database/db';

export default function BusinessesListScreen({ navigation }) {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    (async () => {
      const db = await getDB();
      db.businesses.find().$.subscribe(docs => {
        setBusinesses(docs.map(doc => doc.toJSON()));
      });
    })();
  }, []);

  const addBusiness = async () => {
    const newBiz = { id: uuidv4(), name: `Biz ${businesses.length + 1}` };
    const db = await getDB();
    await db.businesses.insert(newBiz);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={businesses}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text
            style={{ fontSize: 20, padding: 10 }}
            onPress={() => navigation.navigate('Articles', { business: item })}
          >
            {item.name}
          </Text>
        )}
      />
      <Button title="Add Business" onPress={addBusiness} />
    </View>
  );
}
