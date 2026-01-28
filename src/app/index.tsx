import {Text, View} from "react-native";

function CustomNestedText({children}: { children: string }) {
    return (
        <Text>
            <Text>{children}</Text>
        </Text>
    );
}

function CustomText({children}: { children: string }) {
    return (
        <Text>{children}</Text>
    );
}

export default function App() {
    return (
        <View className="flex-1 items-center justify-center gap-8">
            {/* ❌ custom nested text + custom text breaks */}
            <Text>
                <CustomNestedText>{'Hello '}</CustomNestedText>
                <CustomText>{'world '}</CustomText>
            </Text>
            {/* ✅ Inline nested text works fine */}
            <Text>
                <Text>{'Hello '}</Text>
                <Text>
                    <Text>
                        {'world '}
                    </Text>
                </Text>
            </Text>
            {/* ✅ Custom nested text + Custom nested text works fine */}
            <Text>
                <CustomNestedText>{'Hello '}</CustomNestedText>
                <CustomNestedText>{'world '}</CustomNestedText>
            </Text>
            {/* ✅ Single nested + Works fine */}
            <Text>
                <CustomText>{'Hello '}</CustomText>
                <CustomText>{'world '}</CustomText>
            </Text>
            {/* ❌ String + custom text breaks */}
            <Text>
                {'Hello '}
                <CustomText>{'world '}</CustomText>
            </Text>
            {/* ✅ String + custom nested text works fine */}
            <Text>
                {'Hello '}
                <CustomNestedText>{'world '}</CustomNestedText>
            </Text>
            {/* ✅ String + inline nested text works */}
            <Text>
                {'Hello '}
                <Text>
                    <Text>
                        {'world '}
                    </Text>
                </Text>
            </Text>
            {/* ✅ String + inline text works */}
            <Text>
                {'Hello '}
                <Text>
                    {'world '}
                </Text>
            </Text>
        </View>
    );
}