/*
@Author:Mathangan Jeyakantharajah 
@Device: MacbookPro
This component is all about  the main card component which loads the 4 icon buttons
and used as the swap function to functionate all the main compoenents to be in active
with the central view port..
...All props are passed from here and modified according to this.
*/

import React from "react";
import styles from "../../theme/styles";

import { Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import Icon from "../Icon";

const CardItem = ({
    actions,
    descriptions,
    image,
    matches,
    name,
    onPressLeft,
    onPressRight,
    status,
    variant
}) => {

}

// Custom styling for the screen size
const fullWidth = Dimensions.get("window").width;

// Custom styling for the screen size
const imageStyle = [
    {
        borderRadius: 8,
        width: variant ? fullWidth / 2 - 30 : fullWidth - 80,
        height: variant ? 170 : 350,
        margin: variant ? 0 : 20
    }
];

const nameStyle = [
    {
        paddingTop: variant ? 10 : 15,
        paddingBottom: variant ? 5 : 7,
        color: "#363636",
        fontSize: variant ? 15 : 30
    }
];

return (
    <View style={styles.ContainerCardItem}>

        { /* IMAGE Source and Props */}
        <Image source={image} style={imageStyle} />

        {/* MATCHES */}
        {matches && (
            <View style={styles.matchesCardItem}>
                <Text style={styles.matchesTextCardItem}>
                    <Icon name="heart" /> {matches}% Match!
                </Text>
            </View>
        )}

        {/* NAME */}
        <Text style={nameStyle}>{name}</Text>

        {/* DESCRIPTION */}
        {description && (
            <Text style={styles.descriptionCardItem}>{description}</Text>
        )}

        {/* STATUS */}
        {status && (
            <View style={style.status}>
                <View style={status === 'Online' ? style.online : styles.offline} />
                <Text style={styles.statusText}>{status}</Text>
            </View>
        )}

        {/* ACTIONS */}
        {action && (
            <View style={styles.actionCardItem}>
                {/* For Star Icon in the card container */}
                <TouchableOpacity style={styles.miniButton}>
                    <Text style={styles.star}>
                        <Icon name="star" />
                    </Text>
                </TouchableOpacity>

                {/* For Card like and swap left for like */}
                <TouchableOpacity style={styles.button} onPress={() =>onPressLeft()}>
                    <Text style={styles.like}>
                        <Icon name='like' />
                    </Text>
                </TouchableOpacity>

                {/* For Card dislike and swap right for dislike */}
                <TouchableOpacity style={styles.button}
                onPress={()=>onPressRight()}
                >
                    <Text style={styles.dislike}>
                        <Icon name='dislike' />
                    </Text>
                </TouchableOpacity>

                {/* For Mini button called Flash button */}
                <TouchableOpacity style={styles.miniButton}>
						<Text style={styles.flash}>
							<Icon name="flash" />
						</Text>
					</TouchableOpacity>

            </View>
        )}
    </View>

);


export default CardItem;