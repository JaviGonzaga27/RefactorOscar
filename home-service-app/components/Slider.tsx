import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Dimensions, Image } from 'react-native';
import GlobalApi from '../utils/GlobalApi';

interface SliderItem {
    id: string;
    name: string;
    image: string;
}

export default function Slider() {
    const [slider, setSlider] = useState<SliderItem[]>([]);

    useEffect(() => {
        getSlider();
    }, []);

    const getSlider = async () => {
        const result = (await GlobalApi.getSlider()).data;

        const resp: SliderItem[] = result.data.map((item: any) => ({
            id: item.id,
            name: item.attributes.name,
            image: item.attributes.image.data.attributes.url
        }));

        setSlider(resp);
    };

    return (
        <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Noticias</Text>
            <FlatList
                data={slider}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View>
                        <Image source={{ uri: item.image }}
                            style={{
                                width: Dimensions.get('screen').width * 0.87,
                                height: 200,
                                borderRadius: 10,
                                marginRight: 15
                            }}
                        />
                    </View>
                )}
            />
        </View>
    );
}