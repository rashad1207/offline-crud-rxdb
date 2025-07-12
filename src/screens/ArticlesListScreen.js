import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';

import { v4 as uuidv4 } from 'uuid';
import { getDB } from '../database/db';

export default function ArticlesListScreen({ route }) {
  const { business } = route.params;
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async () => {
      const db = await getDB();
      db.articles.find().$.subscribe(docs => {
        setArticles(docs.filter(d => d.toJSON().business_id === business.id).map(d => d.toJSON()));
      });
    })();
  }, []);

  const addArticle = async () => {
    const db = await getDB();
    await db.articles.insert({
      id: uuidv4(),
      name: `Article ${articles.length + 1}`,
      qty: Math.floor(Math.random() * 50),
      selling_price: Math.floor(Math.random() * 100),
      business_id: business.id
    });
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24 }}>{business.name}</Text>
      <FlatList
        data={articles}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text style={{ padding: 10, fontSize: 18 }}>
            {item.name} - Qty: {item.qty} - Price: ${item.selling_price}
          </Text>
        )}
      />
      <Button title="Add Article" onPress={addArticle} />
    </View>
  );
}
