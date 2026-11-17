import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';

const RingChart =({ size, strokeWidth, data })=> {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    let offset = 0;

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Svg width={size} height={size}>
                <G rotation="-90" originX={size / 2} originY={size / 2}>
                    {data.map((item, index) => {
                        const segmentLength = (item.value / 100) * circumference;
                        const strokeDashoffset = circumference - segmentLength;
                        const color = item.color || '#000';

                        const segment = (
                            <Circle
                                key={index}
                                cx={size / 2}
                                cy={size / 2}
                                r={radius}
                                stroke={color}
                                strokeWidth={strokeWidth}
                                fill="none"
                                strokeDasharray={`${segmentLength}, ${circumference}`}
                                strokeDashoffset={-offset}
                                strokeLinecap="round"
                            />
                        );

                        offset += segmentLength;
                        return segment;
                    })}
                </G>
            </Svg>
            <Text style={{ position: 'absolute', fontSize: 18 }}>
                Ativos
            </Text>
        </View>
    );
}
export default RingChart;