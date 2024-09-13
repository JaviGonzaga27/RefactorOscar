import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import GlobalApi from '../utils/GlobalApi';
import Colors from '../utils/Colors';

interface Course {
    id: string;
    name: string;
    description: string;
    image: string;
    topic: string[];
}

interface CourseListProps {
    type: string;
}

export default function CourseList({ type }: CourseListProps) {
    const [courseList, setCourseList] = useState<Course[]>([]);

    useEffect(() => {
        console.log("Type", type);
        getCourseList();
    }, []);

    const getCourseList = async () => {
        const resp = (await GlobalApi.getCourseList(type)).data;
        const result: Course[] = resp.data.map((item: any) => ({
            id: item.id,
            name: item.attributes.name,
            description: item.attributes.description,
            image: item.attributes.image.data.attributes.url,
            topic: item.attributes.topic
        }));
        console.log(result);
        setCourseList(result);
    };

    return (
        <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 5 }}>{type} Course</Text>
            <FlatList
                data={courseList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={{ backgroundColor: Colors.WHITE, marginRight: 10, borderRadius: 10 }}>
                        <Image source={{ uri: item.image }}
                            style={{ width: 210, height: 190, marginRight: 10, borderRadius: 10 }} />
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{item.name}</Text>
                            <Text style={{ color: Colors.BLUE, fontWeight: '100' }}>{item.topic?.length} Lección</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}